// Serverless API route: POST /api/chat
// Uses Google Generative Language API (Gemini 2.0 Flash) with API key from env.
// Set env var GEMINI_API_KEY in your hosting platform. Do NOT commit tokens.

import fs from 'fs/promises';
import path from 'path';

const SYSTEM_PROMPT = `You are "Ahmed's Assistant", the official chatbot for Ahmed Hazem Elabady's portfolio (Junior Data Scientist, Cairo, Egypt).
Only answer questions about Ahmed's portfolio: about, skills, experience, education, projects, certificates, and contact.
If a question is unrelated, politely decline and steer back to the portfolio.
If some detail isn't present on the site, say you don't have that info and suggest checking relevant sections (#about, #projects, #skills, #experience, #education, #contact) or external links on the page.
Be concise, friendly, and professional. Detect the user's language (Arabic/English) and respond accordingly.`;

let cachedContext = null;

async function loadPortfolioContext(forceRefresh = false){
  if (!forceRefresh && cachedContext) {
    return cachedContext;
  }
  try{
    const processHtml = async (fileName) => {
      const filePath = path.join(process.cwd(), fileName);
      let html = await fs.readFile(filePath, 'utf8');
      
      // Remove scripts, styles, and head
      html = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<head[\s\S]*?<\/head>/gi, ' ');
      
      // Convert links to "text (URL)" format
      html = html.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '$2 ($1)');
      
      // Add newlines after block elements for structure
      html = html.replace(/<\/(h[1-6]|p|div|li|ul|ol|section|article|header|footer)>/gi, '\n');
      
      // Strip remaining HTML tags
      let text = html.replace(/<[^>]*>/g, ' ');
      
      // Clean up whitespace and newlines
      text = text.replace(/(\s*\n\s*){2,}/g, '\n'); // Collapse multiple newlines
      text = text.replace(/[ \t]+/g, ' '); // Collapse spaces
      text = text.trim();
      
      return text;
    };

    const indexText = await processHtml('index.html');
    const resumeText = await processHtml('resume.html').catch(() => ''); // Optional

    cachedContext = `Portfolio Content:\n${indexText}`;
    if (resumeText) {
      cachedContext += `\n\nResume Content:\n${resumeText}`;
    }

    const MAX_CTX = 16000;
    if (cachedContext.length > MAX_CTX) {
      cachedContext = cachedContext.slice(0, MAX_CTX);
    }
  }catch(e){
    console.error('Failed to load portfolio context', e);
    cachedContext = '';
  }
  return cachedContext;
}

export default async function handler(req, res) {
  // Basic CORS for local dev and production
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history, isFirst } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Missing "message" string' });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server is not configured with GEMINI_API_KEY' });
    }

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    const ctx = await loadPortfolioContext(isFirst);
    const payload = {
      systemInstruction: { role: 'system', parts: [{ text: SYSTEM_PROMPT }] },
      contents: [
        { role: 'user', parts: [{ text: `Here is the portfolio context:\n${ctx}` }] },
        { role: 'model', parts: [{ text: "Got it. I'm ready to answer questions based on the portfolio." }] },
        ...(history || []),
        { role: 'user', parts: [{ text: message }] }
      ]
    };

    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const t = await resp.text();
      console.error('Gemini API error', resp.status, t);
      return res.status(502).json({ error: 'Gemini API error', status: resp.status });
    }
    const data = await resp.json();
    const candidates = data?.candidates || [];
    const parts = candidates[0]?.content?.parts || [];
    const reply = parts.map(p => p.text || '').join('\n').trim();
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat API error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
