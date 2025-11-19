// Netlify serverless function for chat API
exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  console.log('=== POST /api/chat received ===');
  
  try {
    const body = JSON.parse(event.body);
    const { message, history, sessionId } = body;
    
    console.log('Chat API called:', { 
      message: message?.substring(0, 50),
      sessionId: sessionId,
      hasHistory: !!history
    });
    
    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' })
      };
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
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        reply: chatbotData.reply || 'Sorry, I could not process your request.',
        sessionId: chatbotData.sessionId || sessionId || ''
      })
    };
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to process chat request', 
        details: error.message 
      })
    };
  }
};
