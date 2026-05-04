const rateLimitMap = new Map();

// Helper to clean incoming strings from potential injection/XSS payloads
const sanitize = (str) => {
  if (typeof str !== 'string') return '';
  // Removes basic HTML tags, quotes, backslashes, and semicolon to prevent basic XSS/SQLi
  return str.replace(/[<>'";\\=]/g, '').trim();
};

export default async function handler(req, res) {
  // 1. Strict CORS & Authorization
  const allowedOrigins = [
    'https://salesleadit.com',
    'https://www.salesleadit.com',
    'http://localhost:5173', // For local dev
    'http://localhost:3000'
  ];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin) || origin?.includes('vercel.app')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback or restrict completely
    res.setHeader('Access-Control-Allow-Origin', 'https://salesleadit.com');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // 2. Rate Limiting (50 requests per minute per IP)
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const limit = 50;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    const rateData = rateLimitMap.get(ip);
    if (now > rateData.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    } else {
      rateData.count++;
      if (rateData.count > limit) {
        return res.status(429).json({ error: 'Too many requests, please try again later.' });
      }
    }
  }

  // Optional cleanup of old rate limit entries to prevent memory leaks in the container
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((data, key) => {
      if (now > data.resetTime) rateLimitMap.delete(key);
    });
  }

  // 3. Input Sanitization
  const businessName = sanitize(req.body.businessName);
  const businessCategory = sanitize(req.body.businessCategory);
  const growthGoal = sanitize(req.body.growthGoal);
  const fullName = sanitize(req.body.fullName);
  const email = sanitize(req.body.email);
  const phone = sanitize(req.body.phone);
  const selectedPlan = sanitize(req.body.selectedPlan);

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          "Full Name": {
            title: [{ text: { content: fullName || 'Unknown' } }]
          },
          "Business Name": {
            rich_text: [{ text: { content: businessName || 'Not Provided' } }]
          },
          "Business Category": {
            rich_text: [{ text: { content: businessCategory || 'Not Provided' } }]
          },
          "Growth Goal": {
            select: { name: growthGoal || 'Not specified' }
          },
          "Email": { email: email || null },
          "Phone": { phone_number: phone || null },
          "Selected Plan": {
            select: { name: selectedPlan || 'Not selected' }
          },
          "Status": { select: { name: "🆕 New" } },
          "Source": {
            rich_text: [{ text: { content: "Website Form" } }]
          },
          "Submitted At": {
            date: { start: new Date().toISOString() }
          }
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(500).json({ success: false, error });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
