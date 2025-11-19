// Vercel serverless function for chat API
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('=== POST /api/chat received ===');
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

    const CHATBOT_WEBHOOK_URL = 'https://mogeeb.shop/webhook/28b35f92-fc58-462e-9772-b7f56b5dc87b';

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
    
    res.status(200).json({ 
      reply: chatbotData.reply || 'Sorry, I could not process your request.',
      sessionId: chatbotData.sessionId || sessionId || ''
    });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Failed to process chat request', details: error.message });
  }
}
