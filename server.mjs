import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs/promises';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = __dirname;

const app = express();
app.use(express.json());

// Basic CORS for local dev
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

const SYSTEM_PROMPT = `You are "Ahmed's Assistant", the official chatbot for Ahmed Hazem Elabady's portfolio (Junior Data Scientist & Web Scraper, Cairo, Egypt).
Only answer questions about Ahmed's portfolio: about, skills, experience, education, projects, certificates, and contact.
If a question is unrelated, politely decline and steer back to the portfolio.
If some detail isn't present on the site, say you don't have that info and suggest checking relevant sections (#about, #projects, #skills, #experience, #education, #contact) or external links on the page.
Be concise, friendly, and professional. Detect the user's language (Arabic/English) and respond accordingly.`;

let cachedContext = null;
async function loadPortfolioContext() {
  if (cachedContext) return cachedContext;
  try {
    const filePath = path.join(ROOT, 'index.html');
    let html = await fs.readFile(filePath, 'utf8');
    // Strip scripts/styles
    html = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
    const text = (s)=> s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    const grab = (re)=>{ const m = re.exec(html); return m ? text(m[1]) : ''; };
    const name = grab(/<h1[^>]*class=["'][^"']*title-xl[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i);
    const subtitle = grab(/<p[^>]*class=["'][^"']*subtitle[^"']*["'][^>]*>([\s\S]*?)<\/p>/i);
    const lead = grab(/<p[^>]*class=["'][^"']*lead[^"']*["'][^>]*>([\s\S]*?)<\/p>/i);
    const skills = Array.from(html.matchAll(/<ul[^>]*class=["'][^"']*chips(?![^"']*muted)[^"']*["'][^>]*>([\s\S]*?)<\/ul>/gi)).map(m=>text(m[1]))[0]||'';
    const experience = (html.match(/<section[^>]*id=["']experience["'][^>]*>([\s\S]*?)<\/section>/i)||[])[1]||'';
    const education = (html.match(/<section[^>]*id=["']education["'][^>]*>([\s\S]*?)<\/section>/i)||[])[1]||'';
    const projectsTitles = Array.from(html.matchAll(/<h3[^>]*class=["'][^"']*card-title[^"']*["'][^>]*>([\s\S]*?)<\/h3>/gi)).map(m=>text(m[1])).slice(0,50);
    const projectsTags = Array.from(html.matchAll(/<p[^>]*class=["'][^"']*card-tags[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi)).map(m=>text(m[1])).slice(0,50);
    const projectsTexts = Array.from(html.matchAll(/<p[^>]*class=["'][^"']*card-text[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi)).map(m=>text(m[1])).slice(0,50);
    const projects = projectsTitles.map((t,i)=>`- ${t} | ${projectsTags[i]||''} | ${projectsTexts[i]||''}`).join('\n');
    const certs = (html.match(/<div[^>]*class=["'][^"']*certs[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)||[])[1]||'';
    const contact = (html.match(/<section[^>]*id=["']contact["'][^>]*>([\s\S]*?)<\/section>/i)||[])[1]||'';

    // Optional resume.html enrichment
    let resumeText = '';
    try {
      const resumePath = path.join(ROOT, 'resume.html');
      const resumeHtml = await fs.readFile(resumePath, 'utf8');
      resumeText = resumeHtml.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    } catch {}

    cachedContext = [
      `Name: ${name}`,
      `Subtitle: ${subtitle}`,
      `Summary: ${lead}`,
      `Skills: ${skills}`,
      `Experience: ${text(experience)}`,
      `Education: ${text(education)}`,
      `Projects:\n${projects}`,
      `Certificates: ${text(certs)}`,
      `Contact: ${text(contact)}`,
      resumeText ? `Resume: ${resumeText}` : ''
    ].join('\n\n');
    // Trim to avoid oversized prompts
    const MAX_CTX = 16000; // chars
    if (cachedContext.length > MAX_CTX) cachedContext = cachedContext.slice(0, MAX_CTX);
  } catch (e) {
    console.error('Failed to load portfolio context', e);
    cachedContext = '';
  }
  return cachedContext;
}

// Chat proxy using Gemini API key from .env (GEMINI_API_KEY)
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Missing "message" string' });
    }
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
    const ctx = await loadPortfolioContext();
    const payload = {
      systemInstruction: { role: 'system', parts: [{ text: SYSTEM_PROMPT }] },
      contents: [
        { role: 'user', parts: [{ text: `Portfolio context:\n${ctx}` }] },
        { role: 'user', parts: [{ text: `User question: ${message}` }] }
      ]
    };
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-goog-api-key': apiKey },
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
    res.json({ reply });
  } catch (err) {
    console.error('Chat API error:', err);
    res.status(500).json({ error: 'Upstream chat error' });
  }
});

// Static files
app.use('/assets', express.static(path.join(ROOT, 'assets')));
app.use('/certifications', express.static(path.join(ROOT, 'certifications')));
app.use('/imgs', express.static(path.join(ROOT, 'imgs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
