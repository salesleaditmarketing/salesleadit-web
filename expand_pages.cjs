const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------
// DATA DEFINITIONS
// ---------------------------------------------------------

const pagesData = {
  // Location Pages
  "LeadGenerationCanada": {
    type: "location", topic: "Lead Generation", location: "Canada",
    niches: ["Plumbers", "Cleaning Companies", "Restaurants"],
    citiesOrNeighbourhoods: ["Vancouver", "Calgary", "Toronto", "Surrey", "Edmonton", "Winnipeg", "Halifax", "Ottawa", "Mississauga", "Hamilton"]
  },
  "LeadGenerationSurrey": {
    type: "location", topic: "Lead Generation", location: "Surrey, BC",
    niches: ["Landscapers", "Electricians", "Salons"],
    citiesOrNeighbourhoods: ["Whalley", "Newton", "Cloverdale", "South Surrey", "Fleetwood", "Guildford", "Panorama Ridge", "Ocean Park", "Fraser Heights", "Port Kells"]
  },
  "LeadGenerationVancouver": {
    type: "location", topic: "Lead Generation", location: "Vancouver, BC",
    niches: ["General Contractors", "Real Estate Agents", "Wellness Clinics"],
    citiesOrNeighbourhoods: ["Kitsilano", "Yaletown", "Gastown", "Mount Pleasant", "Commercial Drive", "West End", "Coal Harbour", "East Vancouver", "Point Grey", "Dunbar"]
  },
  "LeadGenerationToronto": {
    type: "location", topic: "Lead Generation", location: "Toronto, Ontario",
    niches: ["Plumbers", "Movers", "Dentists"],
    citiesOrNeighbourhoods: ["Scarborough", "North York", "Etobicoke", "East York", "Downtown Core", "Leslieville", "The Annex", "Liberty Village", "High Park", "Leaside"]
  },
  "LeadGenerationCalgary": {
    type: "location", topic: "Lead Generation", location: "Calgary, Alberta",
    niches: ["HVAC Technicians", "House Cleaners", "Auto Repair Shops"],
    citiesOrNeighbourhoods: ["Beltline", "Downtown Commercial Core", "Inglewood", "Kensington", "Bridgeland", "Bowness", "Signal Hill", "Tuscany", "Mahogany", "Evanston"]
  },
  "MarketingAgencySurrey": {
    type: "location", topic: "Marketing Agency Services", location: "Surrey, BC",
    niches: ["Roofers", "Painters", "Daycares"],
    citiesOrNeighbourhoods: ["Whalley", "Newton", "Cloverdale", "South Surrey", "Fleetwood", "Guildford", "Panorama Ridge", "Ocean Park", "Fraser Heights", "Port Kells"]
  },
  "SmallBusinessMarketingBC": {
    type: "location", topic: "Small Business Marketing", location: "British Columbia",
    niches: ["Plumbers", "Salons", "Restaurants"],
    citiesOrNeighbourhoods: ["Surrey", "Vancouver", "Burnaby", "Richmond", "Coquitlam", "Langley", "Abbotsford", "Kelowna", "Victoria", "Kamloops"]
  },

  // Niche Pages
  "LeadGenPlumbers": {
    type: "niche", topic: "Lead Generation for Plumbers", niche: "Plumbing",
    problem: "Emergency search traffic is the highest-intent traffic on Google, but most plumbers have no system to capture it, losing calls to competitors who simply rank higher.",
    subNiches: ["Residential Plumbing", "Commercial Plumbing", "Emergency Plumbing Services", "Drain Cleaning Specialists", "Renovation & New Build Plumbers", "Water Heater Installers"],
    cities: ["Surrey", "Toronto"]
  },
  "LeadGenElectricians": {
    type: "niche", topic: "Lead Generation for Electricians", niche: "Electrical",
    problem: "You rely on scattered word of mouth for big jobs like panel upgrades, while competitors who run targeted ads are scooping up the highest-paying commercial and residential contracts every day.",
    subNiches: ["Residential Electricians", "Commercial Electrical Contractors", "Emergency Electricians", "Panel Upgrade Specialists", "Smart Home Installers", "EV Charger Installers"],
    cities: ["Vancouver", "Calgary"]
  },
  "LeadGenCleaning": {
    type: "niche", topic: "Lead Generation for Cleaning Services", niche: "Cleaning",
    problem: "Cancellations and empty schedule gaps destroy your margins, but without a predictable system, you can't fill those gaps fast enough with reliable, recurring clients.",
    subNiches: ["House Cleaning", "Office & Commercial Cleaning", "Carpet Cleaning", "Post-Construction Cleaning", "Move-In / Move-Out Cleaning", "Airbnb & Short-Term Rental Cleaning"],
    cities: ["Toronto", "Surrey"]
  },
  "LeadGenRestaurants": {
    type: "niche", topic: "Lead Generation for Restaurants", niche: "Restaurant",
    problem: "Empty tables on Tuesday nights hurt your bottom line, and relying solely on foot traffic or unpredictable delivery apps means you surrender control over your own customer acquisition.",
    subNiches: ["Dine-in Restaurants", "Cafes & Coffee Shops", "Catering Companies", "Food Trucks", "Fine Dining Establishments", "Quick Service & Takeout"],
    cities: ["Vancouver", "Toronto"]
  },
  "LeadGenLandscapers": {
    type: "niche", topic: "Lead Generation for Landscapers", niche: "Landscaping",
    problem: "Seasonal booking gaps and relying on random neighbourhood referrals leaves you scrambling in the spring, while other companies are already booked solid months in advance.",
    subNiches: ["Residential Lawn Care", "Commercial Landscaping", "Hardscaping & Patio Builders", "Tree Removal Services", "Snow Removal Contracts", "Garden Design & Architecture"],
    cities: ["Surrey", "Calgary"]
  },
  "LeadGenContractors": {
    type: "niche", topic: "Lead Generation for Contractors", niche: "General Contracting",
    problem: "You waste hours driving to give quotes to tire-kickers who just want the cheapest price, because you don't have a system that filters out low-budget leads before they reach you.",
    subNiches: ["Kitchen Remodelers", "Bathroom Renovators", "Custom Home Builders", "Basement Finishing", "Deck & Fence Builders", "Roofing & Siding Contractors"],
    cities: ["Vancouver", "Toronto"]
  },
  "LeadGenSalons": {
    type: "niche", topic: "Lead Generation for Salons", niche: "Salon & Spa",
    problem: "Empty chairs and last-minute no-shows cost you hundreds of dollars a day, and organic Instagram posts aren't enough to bring in a steady stream of new local clients.",
    subNiches: ["Hair Salons & Barbershops", "Nail Salons", "Medical Spas", "Massage Therapy Clinics", "Aesthetics & Laser Clinics", "Tanning & Beauty Studios"],
    cities: ["Calgary", "Surrey"]
  },
  "LeadGenRealEstate": {
    type: "niche", topic: "Lead Generation for Real Estate", niche: "Real Estate",
    problem: "You are paying massive premiums for shared leads from massive portals, forcing you to race to the bottom against five other agents the second a prospect clicks 'contact'.",
    subNiches: ["Residential Buyers Agents", "Listing Agents", "Commercial Real Estate", "Pre-Sale & New Development", "Property Management", "Investment Property Specialists"],
    cities: ["Toronto", "Vancouver"]
  },

  // Service Pages
  "HowToGetMoreCustomers": {
    type: "service", topic: "Getting More Customers", service: "Customer Acquisition",
    process: "We audit your local presence, identify where your competitors are stealing your traffic, deploy targeted Google Ads to capture active searchers, and optimize your Google Business Profile to build long-term organic authority.",
    comparison: "Trying to do this yourself means burning thousands of dollars guessing on ad keywords and spending hours watching YouTube tutorials. We bring a proven, multi-channel system that works from day one.",
    requirements: ["Google Ads", "Local SEO", "Directory Listings"]
  },
  "GoogleAdsSmallBusiness": {
    type: "service", topic: "Google Ads", service: "Google Ads Management",
    process: "We conduct deep keyword research specific to your local area, write high-converting ad copy, build targeted landing pages, and continuously optimize bids so you never waste money on irrelevant clicks.",
    comparison: "A DIY Google Ads campaign usually results in paying for clicks from people looking for DIY advice or out-of-province competitors. We ensure every dollar goes toward high-intent local buyers actively seeking your exact service.",
    requirements: ["High-intent keywords", "Negative keyword lists", "Conversion tracking"]
  },
  "LocalSEOCanada": {
    type: "service", topic: "Local SEO", service: "Local Search Engine Optimization",
    process: "We claim and optimize your Google Business Profile, build consistent citations across premium Canadian directories, generate locally relevant content, and implement a structured review collection pipeline.",
    comparison: "DIY SEO involves blindly tweaking website copy and hoping for the best over months. Our systematic approach builds measurable local authority, moving you into the top 3 map pack where 70% of the clicks happen.",
    requirements: ["Google Business Profile", "Citations", "Review management"]
  },
  "SocialMediaMarketing": {
    type: "service", topic: "Social Media Marketing", service: "Social Media Management",
    process: "We design a localized content calendar, create branded graphics and videos, schedule consistent posts across Meta platforms, and actively engage with your local community to build brand awareness.",
    comparison: "Posting random photos when you finally have a free moment on a Friday afternoon does not generate leads. We treat your social media as an active sales channel, completely managed for you.",
    requirements: ["Facebook Page", "Instagram Account", "Content Calendar"]
  },
  "WebDesignCanada": {
    type: "service", topic: "Web Design", service: "Business Web Design",
    process: "We build modern, fast-loading, mobile-optimized websites using cutting-edge frameworks. Every site is designed specifically for lead conversion, with clear calls-to-action, trust signals, and integrated analytics.",
    comparison: "Using a cheap drag-and-drop builder results in a slow site that looks amateur and leaks potential customers. Our custom builds establish immediate authority and are engineered to turn traffic into actual phone calls.",
    requirements: ["Mobile optimization", "Fast loading speeds", "Clear CTAs"]
  },
  "AIAutomation": {
    type: "service", topic: "AI Automation", service: "AI Lead Automation",
    process: "We implement intelligent conversational agents that immediately respond to website inquiries, answer common questions, qualify leads, and even book appointments directly into your calendar, 24/7.",
    comparison: "Relying on manual follow-ups means you lose leads if they call while you are on a job site or asleep. Our AI automation guarantees a 5-second response time, drastically increasing your conversion rate.",
    requirements: ["Website integration", "SMS capabilities", "Calendar sync"]
  }
};

// ---------------------------------------------------------
// TEXT GENERATION HELPERS
// ---------------------------------------------------------

function generateParagraphs(count, paragraphsPool) {
  let result = [];
  let pool = [...paragraphsPool];
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) break;
    const idx = Math.floor(Math.random() * pool.length);
    result.push(`<p className="mb-6 text-sli-body text-[17px] leading-relaxed">${pool[idx]}</p>`);
    pool.splice(idx, 1);
  }
  return result.join('\n');
}

function generateH2(title, content) {
  return `\n<h2 className="text-3xl font-extrabold text-sli-navy mt-14 mb-6 font-sans tracking-tight">${title}</h2>\n${content}\n`;
}

// Generates ~150-200 words per section
function getH1Content(pageKey, data) {
  let content = "";

  const name = data.location || data.niche || data.service || data.topic;

  // H2 1: Why [Topic] Matters
  let h2_1_pool = [];
  if (data.type === 'location') {
    h2_1_pool = [
      `Running a small business in ${data.location} is not getting any easier. The cost of living is rising, overhead is expanding, and the competition is fierce. Without a reliable, predictable way to get new customers, you are forced to rely on unpredictable word of mouth or exhausting personal networking.`,
      `Word of mouth is a fantastic foundation, but it is deeply unreliable. In a bustling market like ${data.location}, your ideal customers are searching online for exactly what you do, right now. If your business isn't showing up at the top of those searches, those customers are calling your competitors instead.`,
      `We speak with small business owners every day who do incredible work but struggle to keep their schedule full. They suffer from the "feast or famine" cycle—booked solid one week, completely empty the next. Taking control of your customer acquisition in ${data.location} is the only way to break that cycle and build a business that supports your family securely.`
    ];
  } else if (data.type === 'niche') {
    h2_1_pool = [
      `As a business owner in the ${data.niche} industry, you already know the frustration. ${data.problem} It is incredibly painful to know you provide a superior service, yet watch inferior companies grow faster simply because their marketing system is better.`,
      `The reality of the ${data.niche} market in Canada is that the best business doesn't always win—the most visible business wins. If a local customer has an immediate need, they are not spending hours researching. They are clicking the first professional, trustworthy option they see on Google.`,
      `When you lack a predictable system for generating ${data.niche} leads, you end up taking whatever jobs come your way, even the low-margin ones. You deserve to cherry-pick your clients. A dedicated lead generation system gives you the power to say no to bad jobs because you know more high-quality inquiries are coming tomorrow.`
    ];
  } else {
    h2_1_pool = [
      `Mastering ${data.service} is no longer optional for small businesses in Canada; it is a fundamental requirement for survival. The digital landscape has matured, and the businesses that dominate their local markets are the ones who have systemized their customer acquisition.`,
      `You started your business because you are an expert at your trade, not because you wanted to spend your evenings trying to figure out ${data.service}. Yet, the lack of a proper strategy is the exact bottleneck keeping your revenue flat. Relying on outdated methods while your competitors invest in modern systems is a dangerous game.`,
      `The pain of unpredictable revenue is something we understand deeply. When your ${data.service} strategy is dialed in, it acts like a faucet you can turn on and off. You gain ultimate control over your growth, allowing you to hire with confidence, invest in new equipment, and finally take a real vacation without worrying about the pipeline.`
    ];
  }
  content += generateH2(`Why ${data.topic} Matters for Small Businesses in Canada`, generateParagraphs(3, h2_1_pool));

  // H2 2: How SalesLeadIT Handles [Topic]
  let h2_2_pool = [
    `At SalesLeadIT, we do not believe in vague promises or confusing marketing jargon. We believe in systems that work. When you partner with us for ${data.topic}, we immediately begin a structured, proven rollout. In Week 1, we conduct a comprehensive audit of your local market and set up your foundational directory listings and tracking systems.`,
    `By Week 2, your custom campaigns go live. Whether we are deploying targeted Google Ads, Meta Ads, or configuring your local SEO signals, everything is geared toward one metric: qualified local inquiries. We do not track "impressions" or "brand awareness" as success—we track the number of times your phone rings.`,
    `Moving into Month 1 and beyond, our system begins to compound. We integrate a referral trigger into your follow-up process, ensuring that every new customer we bring you is incentivized to share your business with their neighbours. By Month 3, as our algorithms learn your specific market in ${name}, performance typically improves by over 50%.`
  ];
  if (data.type === 'service') {
    h2_2_pool[1] = `By Week 2, your custom campaigns go live. ${data.process} We handle the entire technical burden so you can focus entirely on serving the new customers coming through your doors.`;
  }
  content += generateH2(`How SalesLeadIT Handles ${data.topic}`, generateParagraphs(3, h2_2_pool));

  // H2 3: What Makes SalesLeadIT Different
  let h2_3_pool = [
    `The digital marketing industry in Canada is broken. Most traditional agencies will charge you $5,000 or more per month, lock you into an iron-clad 12-month contract, and then assign your account to a rotating door of junior staff. We built SalesLeadIT specifically to be the antidote to that corporate model.`,
    `We are a family-first team based in Surrey, BC, and we treat your business like an extension of our own. When we generate leads for you, they are 100% exclusive. We never sell, share, or distribute your leads to your competitors. When your phone rings, you are the only business that customer is talking to.`,
    `Furthermore, we prove our value before asking for your full trust. We charge absolutely zero agency setup fees for first-time clients, and our standard ad management is priced at a flat, transparent rate. You can cancel at any time, which means we have to earn your business every single month by delivering real results.`
  ];
  if (data.type === 'service') {
    h2_3_pool[1] = `${data.comparison} Furthermore, we provide exclusive service. We are a family-first team based in Surrey, BC, and we treat your business like an extension of our own.`;
  }
  content += generateH2(`What Makes SalesLeadIT Different for ${data.topic}`, generateParagraphs(3, h2_3_pool));

  // H2 4: What Results Can You Expect?
  let h2_4_pool = [
    `We believe in setting clear, measurable expectations. For a typical small business on our Standard Plan, you can expect your campaigns to go live within 7 business days. You will typically receive your first highly-qualified local lead within 7 to 14 days of launch.`,
    `Our goal is to build a consistent pipeline that delivers 20 to 40 exclusive leads per month, depending on your exact market and budget. Because we don't share leads, your close rate on these inquiries will be significantly higher than anything you've experienced with shared lead portals.`,
    `We have helped over 500 small businesses across Canada achieve these exact results, maintaining a 97% client satisfaction rate. As our system runs and gathers data, it becomes hyper-efficient. Most of our clients see their cost-per-lead drop and their lead volume increase by 50% or more by their third month.`
  ];
  content += generateH2(`What Results Can You Expect?`, generateParagraphs(3, h2_4_pool));

  // H2 5: Specific Targeting Section
  let h2_5_title = "";
  let h2_5_pool = [];
  if (data.type === 'location') {
    h2_5_title = `Which Neighbourhoods in ${data.location} Does SalesLeadIT Serve?`;
    h2_5_pool = [
      `Local marketing only works when it is hyper-local. We don't just target "${data.location}" broadly; we structure campaigns to reach people exactly where they live. Our systems target specific neighbourhoods and surrounding areas, including ${data.citiesOrNeighbourhoods.join(', ')}, and many more.`,
      `We work across a wide variety of industries within this region. Our most successful local campaigns in ${data.location} include businesses like ${data.niches.join(', ')}. No matter your trade, if you need local customers, we know how to reach them.`,
      `By blanketing these specific neighbourhoods with targeted search ads and local SEO signals, we ensure that when a homeowner or business owner in your exact service area needs help, your company is the undeniable first choice they see.`
    ];
  } else if (data.type === 'niche') {
    h2_5_title = `Which ${data.niche} Businesses Does SalesLeadIT Work With?`;
    h2_5_pool = [
      `The ${data.niche} industry is vast, and a one-size-fits-all marketing approach simply does not work. We tailor our lead generation systems to your specific sub-niche. We work extensively with businesses focusing on ${data.subNiches.join(', ')}.`,
      `Whether you are a solo operator looking to fill your schedule or a growing company with multiple trucks trying to keep your team busy, our system scales to your needs. We actively serve ${data.niche} businesses in major markets like ${data.cities.join(' and ')}, as well as smaller towns across Canada.`,
      `We understand the unique buying triggers of your specific customers. We know what ad copy converts a frantic emergency caller, and what website trust signals convince a high-ticket commercial buyer. We apply this deep industry knowledge directly to your campaigns.`
    ];
  } else {
    h2_5_title = `Who Is This Service For?`;
    h2_5_pool = [
      `Our ${data.service} system is designed explicitly for Canadian small businesses that sell high-value local services. It is perfectly suited for trades, home service providers, wellness clinics, professional services, and retail businesses that rely on local foot traffic or local inquiries.`,
      `This is for business owners who are tired of wearing the marketing hat and simply want a reliable partner to handle the acquisition side of their business. If you have the capacity to take on 10, 20, or 40 new customers a month, this system is built for you.`,
      `We require our partners to be committed to quality. Because our system relies on building your local authority and generating referrals, it only works if you deliver an excellent service. If you treat your customers well, our ${data.service} system will ensure you have a constant stream of them.`
    ];
  }
  content += generateH2(h2_5_title, generateParagraphs(3, h2_5_pool));

  // H2 6: How Much Does It Cost?
  let h2_6_pool = [
    `Transparency is a core value at SalesLeadIT. Our Standard Plan starts at a highly competitive $999 per month for first-time clients. The best part? 100% of that $999 goes directly into your advertising budget. We charge zero agency setup fees and zero management fees during this introductory period.`,
    `Once we have proven our value and your phone is consistently ringing, our standard rate is $1,500 per month. For businesses looking to scale aggressively, our Premium Plan at $1,349 per month includes full social media management and comprehensive website maintenance.`,
    `If you need a new website, we offer first-time clients a massive 70% discount, building a professional, high-converting site for just $499 instead of the standard $1,499. Above all, we never lock you into a long-term contract. You can cancel at any time, ensuring we are always fighting to earn your business.`
  ];
  content += generateH2(`How Much Does It Cost?`, generateParagraphs(3, h2_6_pool));

  // H2 7: FAQs
  let qas = [];
  if (data.type === 'location') {
    qas = [
      { q: `Does SalesLeadIT serve specific neighbourhoods in ${data.location}?`, a: `Yes. We hyper-target our campaigns down to the postal code level, ensuring you get leads from the exact neighbourhoods in ${data.location} where you want to work.` },
      { q: `How long before I get leads in ${data.location}?`, a: `Once your SalesLeadIT campaign goes live, most businesses in the ${data.location} area receive their first highly-qualified local inquiry within 7 to 14 days.` },
      { q: `What types of businesses in ${data.location} do you work with?`, a: `We work with over 55 niches in ${data.location}, specializing in home services, trades, beauty salons, restaurants, and professional services.` },
      { q: `Do you share my leads with other businesses in ${data.location}?`, a: `Never. SalesLeadIT guarantees 100% exclusivity. Every lead we generate in ${data.location} goes to your business and yours alone.` },
      { q: `Do I have to sign a long-term contract?`, a: `No. We believe in earning your trust monthly. SalesLeadIT operates with zero lock-in contracts and no cancellation fees.` }
    ];
  } else if (data.type === 'niche') {
    qas = [
      { q: `Can SalesLeadIT get me emergency ${data.niche} leads?`, a: `Yes. We set up specific Google Ads campaigns designed to capture high-intent emergency searches in your area, connecting you with customers who need immediate help.` },
      { q: `How many ${data.niche} leads can I expect?`, a: `Our Standard Plan targets 20 to 40 exclusive local leads per month for ${data.niche} businesses, though volume varies slightly by your specific city and competition.` },
      { q: `Do you understand the difference between residential and commercial ${data.niche}?`, a: `Absolutely. We segment our keyword targeting and ad copy based on whether you want high-volume residential jobs or high-ticket commercial contracts.` },
      { q: `What if I am too busy to answer the phone?`, a: `SalesLeadIT offers AI automation systems that instantly text back missed calls and qualify leads automatically, ensuring you never lose a ${data.niche} job to a competitor.` },
      { q: `Are these leads exclusive?`, a: `Yes. Unlike HomeStars or other directories, SalesLeadIT never sells the same ${data.niche} lead to multiple businesses. They are 100% yours.` }
    ];
  } else {
    qas = [
      { q: `Do I need a website before starting with ${data.service}?`, a: `Not necessarily. We can use your SalesLeadIT directory listing as your primary landing page to start generating leads immediately while a website is built.` },
      { q: `How much of my budget goes to ads?`, a: `For our first-time client Standard Plan at $999/month, 100% of your budget goes directly to your advertising campaigns. We charge zero agency setup fee.` },
      { q: `How long does it take to set up?`, a: `Your complete ${data.service} system will be fully built, tested, and live within 7 business days of signing up.` },
      { q: `Will I know exactly what I am paying for?`, a: `Yes. SalesLeadIT provides transparent monthly reporting showing exactly how many clicks, calls, and leads your ${data.service} campaign generated.` },
      { q: `Can I cancel if it doesn't work?`, a: `Yes. We have absolutely no long-term contracts. You are free to cancel your SalesLeadIT service at any time with no penalties.` }
    ];
  }
  
  let faqContent = qas.map(qa => `
    <div className="mb-6 bg-white p-6 rounded-2xl border border-sli-border shadow-sm">
      <h3 className="font-bold text-sli-navy text-xl mb-3 font-sans">${qa.q}</h3>
      <p className="text-sli-body text-[16px] leading-relaxed">${qa.a}</p>
    </div>
  `).join('');
  content += generateH2(`Frequently Asked Questions About ${data.topic}`, faqContent);

  // H2 8: Getting Started
  let h2_8_pool = [
    `Getting started with SalesLeadIT is incredibly simple and entirely risk-free. Step one is booking a free 15-minute audit. On this brief call, a member of our family team will look at your current online presence and show you exactly where new customers are hiding in your local market.`,
    `There is absolutely no obligation to buy anything on this call. If you decide we are a good fit, we get to work immediately. Within 7 business days, your customized lead generation system will be live and actively targeting buyers in your area.`,
    `Stop stressing about where your next customer is coming from. With zero agency setup fees for first-time clients and no long-term contracts, there is no risk to trying a system that has already worked for 500+ businesses across Canada. Take control of your growth today.`
  ];
  content += generateH2(`Getting Started with SalesLeadIT for ${data.topic}`, generateParagraphs(3, h2_8_pool));

  return content;
}

// ---------------------------------------------------------
// EXECUTION
// ---------------------------------------------------------

async function processFiles() {
  const directory = path.join(__dirname, 'src', 'pages', 'resources');
  const files = fs.readdirSync(directory);

  for (const file of files) {
    if (!file.endsWith('.jsx')) continue;
    const pageKey = file.replace('.jsx', '');
    if (!pagesData[pageKey]) continue; // Skip FullFAQ, SalesLeadITResults, ExclusiveVsSharedLeads and non-matching

    const filePath = path.join(directory, file);
    let fileContent = fs.readFileSync(filePath, 'utf8');

    // We want to replace the children of ResourceLayout.
    // The structure is:
    // <ResourceLayout title="..." ...>
    //   <p className="mb-4 text-sli-muted">...</p>
    // </ResourceLayout>

    const startRegex = /(<ResourceLayout[^>]*>)/;
    const endStr = "</ResourceLayout>";

    const matchStart = fileContent.match(startRegex);
    if (!matchStart) continue;

    const startIdx = matchStart.index + matchStart[0].length;
    const endIdx = fileContent.lastIndexOf(endStr);

    if (startIdx === -1 || endIdx === -1) continue;

    const generatedBody = getH1Content(pageKey, pagesData[pageKey]);
    
    // Create new file content
    const newFileContent = fileContent.substring(0, startIdx) + "\n" + generatedBody + "\n    " + fileContent.substring(endIdx);
    
    fs.writeFileSync(filePath, newFileContent);
    console.log(`Expanded ${pageKey}.jsx`);
  }
}

processFiles();
