const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('/Users/judeolaboboye/Desktop/SalesLeadIT Web/Salesleadit seo.md', 'utf-8');

// We have 24 components. Let's list their names from the routing block.
const components = [
  "HowToGetMoreCustomers", "LeadGenerationCanada", "GoogleAdsSmallBusiness", "LocalSEOCanada",
  "SocialMediaMarketing", "WebDesignCanada", "LeadGenerationSurrey", "LeadGenerationVancouver",
  "LeadGenerationToronto", "LeadGenerationCalgary", "MarketingAgencySurrey", "SmallBusinessMarketingBC",
  "LeadGenPlumbers", "LeadGenElectricians", "LeadGenCleaning", "LeadGenRestaurants",
  "LeadGenLandscapers", "LeadGenContractors", "LeadGenSalons", "LeadGenRealEstate",
  "AIAutomation", "ExclusiveVsSharedLeads", "SalesLeadITResults", "FullFAQ"
];

// For each component, we'll create a basic template. If the doc has specific content, we'll try to extract it.
// Actually, it's safer to extract from the markdown by searching for "### Page X:" or similar.
const pagesMatch = content.split('### Page ');
pagesMatch.shift(); // remove the part before Page 1

const pagesData = {};

for (const p of pagesMatch) {
  // Extract route, title, meta, position zero, H1, and content
  const routeMatch = p.match(/\*\*Route:\*\*\s*`([^`]+)`/);
  const titleMatch = p.match(/\*\*Title:\*\*\s*`([^`]+)`/);
  const metaMatch = p.match(/\*\*Meta:\*\*\s*`([^`]+)`/);
  const pzMatch = p.match(/\*\*Position Zero(?: \([^\)]+\))?:\*\*\s*`?([^`\n]+)`?/);
  const h1Match = p.match(/\*\*H1:\*\*\s*([^\n]+)/);
  const fileMatch = p.match(/\*\*File:\*\*\s*`src\/pages\/resources\/([^`]+)\.jsx`/);
  
  // Content is usually after H1 until --- or next Page
  const h1Index = p.indexOf('**H1:**');
  let bodyContent = "";
  if (h1Index !== -1) {
    let afterH1 = p.substring(h1Index + p.match(/\*\*H1:\*\*\s*([^\n]+)/)[0].length);
    // Remove code block markers if any
    afterH1 = afterH1.replace(/```[a-z]*\n/g, '').replace(/```/g, '');
    const dashIndex = afterH1.indexOf('---');
    if (dashIndex !== -1) {
      bodyContent = afterH1.substring(0, dashIndex).trim();
    } else {
      bodyContent = afterH1.trim();
    }
  }

  if (routeMatch) {
    let route = routeMatch[1];
    
    // Convert bodyContent to proper JSX
    const paragraphs = bodyContent.split('\n\n').filter(Boolean).map(para => {
      if (para.startsWith('## ')) {
        return `<h2 className="text-2xl font-bold text-sli-navy mt-10 mb-4">${para.replace('## ', '')}</h2>`;
      }
      return `<p className="mb-4 text-sli-muted leading-relaxed">${para.trim()}</p>`;
    }).join('\n');
    
    pagesData[route] = {
      route: routeMatch[1],
      title: titleMatch ? titleMatch[1] : '',
      meta: metaMatch ? metaMatch[1] : '',
      positionZero: pzMatch ? pzMatch[1] : '',
      h1: h1Match ? h1Match[1] : '',
      body: paragraphs,
      file: fileMatch ? fileMatch[1] : null
    };
  }
}

console.log(`Found ${Object.keys(pagesData).length} detailed pages in the document.`);

// For all 24 components, generate the file
const routesMapping = [
  { comp: "HowToGetMoreCustomers", path: "/resources/how-to-get-more-customers-for-small-business-canada" },
  { comp: "LeadGenerationCanada", path: "/resources/lead-generation-for-small-business-canada" },
  { comp: "GoogleAdsSmallBusiness", path: "/resources/google-ads-for-small-business-canada" },
  { comp: "LocalSEOCanada", path: "/resources/local-seo-for-small-business-canada" },
  { comp: "SocialMediaMarketing", path: "/resources/social-media-marketing-small-business-canada" },
  { comp: "WebDesignCanada", path: "/resources/web-design-for-small-business-canada" },
  { comp: "LeadGenerationSurrey", path: "/resources/lead-generation-surrey-bc" },
  { comp: "LeadGenerationVancouver", path: "/resources/lead-generation-vancouver-bc" },
  { comp: "LeadGenerationToronto", path: "/resources/lead-generation-toronto-ontario" },
  { comp: "LeadGenerationCalgary", path: "/resources/lead-generation-calgary-alberta" },
  { comp: "MarketingAgencySurrey", path: "/resources/marketing-agency-surrey-bc" },
  { comp: "SmallBusinessMarketingBC", path: "/resources/small-business-marketing-british-columbia" },
  { comp: "LeadGenPlumbers", path: "/resources/lead-generation-for-plumbers-canada" },
  { comp: "LeadGenElectricians", path: "/resources/lead-generation-for-electricians-canada" },
  { comp: "LeadGenCleaning", path: "/resources/lead-generation-for-cleaning-services-canada" },
  { comp: "LeadGenRestaurants", path: "/resources/lead-generation-for-restaurants-canada" },
  { comp: "LeadGenLandscapers", path: "/resources/lead-generation-for-landscapers-canada" },
  { comp: "LeadGenContractors", path: "/resources/lead-generation-for-contractors-canada" },
  { comp: "LeadGenSalons", path: "/resources/lead-generation-for-salons-canada" },
  { comp: "LeadGenRealEstate", path: "/resources/lead-generation-for-real-estate-canada" },
  { comp: "AIAutomation", path: "/resources/ai-automation-for-small-business-canada" },
  { comp: "ExclusiveVsSharedLeads", path: "/resources/exclusive-leads-vs-shared-leads-canada" },
  { comp: "SalesLeadITResults", path: "/resources/salesleadit-results" },
  { comp: "FullFAQ", path: "/resources/faq" },
];

if (!fs.existsSync('src/pages/resources')) {
  fs.mkdirSync('src/pages/resources', { recursive: true });
}

for (const routeObj of routesMapping) {
  const data = pagesData[routeObj.path] || {};
  
  let h1 = data.h1 || routeObj.comp.replace(/([A-Z])/g, ' $1').trim();
  let title = data.title || `${h1} | SalesLeadIT`;
  let meta = data.meta || `SalesLeadIT offers ${h1.toLowerCase()} across Canada.`;
  let positionZero = data.positionZero || `SalesLeadIT delivers exclusive local leads through managed Google and Meta ad campaigns, local SEO, and business directory listings.`;
  let body = data.body || `<p className="mb-4 text-sli-muted">Contact us today to learn more about how SalesLeadIT can help your small business grow with exclusive, local leads.</p>`;

  let contentJSX = `import React from 'react';
import ResourceLayout from './ResourceLayout.jsx';

export default function ${routeObj.comp}() {
  return (
    <ResourceLayout
      title="${title.replace(/"/g, '&quot;')}"
      description="${meta.replace(/"/g, '&quot;')}"
      canonical="https://salesleadit.com${routeObj.path}"
      positionZero="${positionZero.replace(/"/g, '&quot;')}"
      h1="${h1.replace(/"/g, '&quot;')}"
    >
      ${body}
    </ResourceLayout>
  );
}
`;

  fs.writeFileSync(`src/pages/resources/${routeObj.comp}.jsx`, contentJSX);
  console.log(`Created ${routeObj.comp}.jsx`);
}

