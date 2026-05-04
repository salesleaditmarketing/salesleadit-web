#!/bin/bash
source .env

curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{
    "parent": { "database_id": "'"$NOTION_DATABASE_ID"'" },
    "properties": {
      "Full Name": { "title": [{ "text": { "content": "Jane Doe (Dummy Lead)" } }] },
      "Business Name": { "rich_text": [{ "text": { "content": "Doe Family Landscaping" } }] },
      "Business Category": { "rich_text": [{ "text": { "content": "Landscaping" } }] },
      "Growth Goal": { "select": { "name": "Get more local customers" } },
      "Email": { "email": "janedoe.test@example.com" },
      "Phone": { "phone_number": "416-555-0199" },
      "Selected Plan": { "select": { "name": "Standard" } },
      "Status": { "select": { "name": "🆕 New" } },
      "Source": { "rich_text": [{ "text": { "content": "Website Form" } }] }
    }
  }'
