

async function testNotion() {
  const dummyLead = {
    parent: { database_id: process.env.NOTION_DATABASE_ID },
    properties: {
      "Full Name": {
        title: [{ text: { content: "John Henderson (Test Lead)" } }]
      },
      "Business Name": {
        rich_text: [{ text: { content: "Henderson & Sons Plumbing" } }]
      },
      "Business Category": {
        rich_text: [{ text: { content: "Plumbing Services" } }]
      },
      "Growth Goal": {
        select: { name: "Get more local customers" }
      },
      "Email": { email: "john.henderson.test@example.com" },
      "Phone": { phone_number: "604-555-0182" },
      "Selected Plan": {
        select: { name: "Premium" }
      },
      "Status": { select: { name: "🆕 New" } },
      "Source": {
        rich_text: [{ text: { content: "Website Form" } }]
      },
      "Submitted At": {
        date: { start: new Date().toISOString() }
      }
    }
  };

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(dummyLead)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("❌ Notion API Error:", JSON.stringify(error, null, 2));
    } else {
      console.log("✅ Successfully inserted dummy lead into Notion!");
    }
  } catch (error) {
    console.error("❌ Request Failed:", error);
  }
}

testNotion();
