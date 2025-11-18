import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Chatbot webhook configuration
const CHATBOT_WEBHOOK_URL = 'https://mogeeb.shop/webhook/28b35f92-fc58-462e-9772-b7f56b5dc87b';

// API routes BEFORE static files
app.post('/api/chat', async (req, res) => {
  console.log('Chat API called:', { 
    message: req.body.message?.substring(0, 50),
    sessionId: req.body.sessionId,
    hasHistory: !!req.body.history
  });
  
  try {
    const { message, history, sessionId } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const requestPayload = { 
      message, 
      history: history || [],
      sessionId: sessionId || '',
      timestamp: new Date().toISOString()
    };
    
    console.log('Sending to webhook:', { ...requestPayload, sessionId: requestPayload.sessionId });

    // Send request to chatbot webhook
    const webhookResponse = await fetch(CHATBOT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload)
    });

    console.log('Webhook response status:', webhookResponse.status);

    if (!webhookResponse.ok) {
      throw new Error(`Webhook error: ${webhookResponse.status}`);
    }

    // Get raw response text first
    const rawText = await webhookResponse.text();
    console.log('Raw webhook response:', rawText);

    let chatbotData;
    try {
      chatbotData = JSON.parse(rawText);
    } catch (parseError) {
      console.error('Failed to parse webhook response:', parseError);
      throw new Error('Webhook returned invalid JSON');
    }

    console.log('Webhook response data:', { 
      hasReply: !!chatbotData.reply, 
      sessionId: chatbotData.sessionId,
      fullData: chatbotData
    });
    
    res.json({ 
      reply: chatbotData.reply || 'Sorry, I could not process your request.',
      sessionId: chatbotData.sessionId || sessionId || ''
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Failed to process chat request', details: error.message });
  }
});

// Static files AFTER API routes
app.use('/assets', express.static(path.join(ROOT, 'assets')));
app.use('/certifications', express.static(path.join(ROOT, 'certifications')));
app.use('/imgs', express.static(path.join(ROOT, 'imgs')));

// Serve index.html for all other routes (SPA fallback)
app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
