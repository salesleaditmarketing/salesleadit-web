import React from 'react';
import ResourceLayout from './ResourceLayout.jsx';
import { fullFAQCategories } from '../../data/fullFAQ.js';

const categoryIntros = {
  "About SalesLeadIT": "Get to know the team behind the leads. We are a family-first agency based in Surrey, BC, dedicated strictly to Canadian small businesses. These questions cover who we are, our history, our core values, and why we believe in treating your local business like an extension of our own family.",
  "Leads & Lead Generation": "Understanding how we get your phone to ring is crucial. These questions break down exactly what a lead is, how we generate them using high-intent local targeting, and why our system guarantees that every single inquiry goes exclusively to you and is never shared with your competitors.",
  "Pricing & Plans": "We believe in total transparency when it comes to your money. Here we explain our pricing structure, including the $999 first-timer rate, the fact that we charge zero setup fees, and why we operate entirely on a month-to-month basis with zero long-term contracts. You only pay for performance.",
  "Services": "While our main goal is making your phone ring, we use a comprehensive suite of digital tools to make it happen. This section covers our specific service offerings, from Google Ads and local SEO to social media management, directory listings, and custom web design for small businesses.",
  "Geographic Coverage — Provinces": "Canada is a massive country with incredibly diverse local markets. We run successful lead generation campaigns across multiple provinces. Check these questions to see how we adapt our proven system to work perfectly whether you are operating in British Columbia, Alberta, Ontario, or the Maritimes.",
  "Geographic Coverage — BC Cities": "British Columbia is where SalesLeadIT was born. We have deep, hyper-local knowledge of the Lower Mainland and beyond. Find out how we target specific neighbourhoods in Surrey, Vancouver, Coquitlam, Burnaby, Richmond, and the Fraser Valley to bring you the highest quality local customers right in your backyard.",
  "Geographic Coverage — Ontario Cities": "Ontario’s massive population means huge opportunity, but also intense competition. We help small businesses cut through the noise. These questions detail how we generate exclusive leads in Toronto, Mississauga, Brampton, Hamilton, and Ottawa by hyper-targeting specific postal codes and local search habits.",
  "Niches — Trades & Home Services": "Trades and home services are the backbone of our economy. Whether you are a plumber dealing with emergency calls, a landscaper fighting seasonal gaps, or an electrician wanting larger panel upgrade jobs, these questions explain exactly how our lead generation system works for your specific trade.",
  "Niches — Beauty & Wellness": "For salons, spas, and wellness clinics, empty chairs destroy profit margins. These questions explore how we use visual social media marketing combined with highly targeted local search ads to keep your appointment book full of reliable, high-paying clients who actually show up for their bookings.",
  "Niches — Food & Hospitality": "Restaurants, cafes, and food trucks face unique challenges with slim margins and unpredictable foot traffic. Discover how SalesLeadIT helps food and hospitality businesses fill tables on slow nights, increase catering inquiries, and build a loyal local customer base without relying on expensive delivery apps.",
  "Niches — Events & Entertainment": "Event professionals live and die by their calendar. If you rent out party tents, DJ weddings, or plan corporate events, these questions explain how we capture high-intent couples and corporate planners exactly when they begin searching for vendors in your specific service area.",
  "Niches — Auto & Transport": "From emergency towing companies to local auto repair shops and mobile detailers, auto businesses need customers who have immediate problems. Learn how our system captures high-intent 'near me' searches so your shop is the first one they call when their check engine light comes on.",
  "Niches — Professional Services": "Lawyers, accountants, and real estate agents need high-trust leads, not tire-kickers. These questions explain how we build your local authority and capture high-intent prospects who are actively searching for professional guidance, ensuring you spend your time closing deals rather than chasing bad leads.",
  "Niches — Retail & Other": "Local retail is not dead; it is just shifting online. Whether you run a local furniture store, a flower shop, or a pet grooming business, these questions cover how we drive real, physical foot traffic to your storefront and increase local online orders for your products.",
  "Process & Getting Started": "Ready to stop worrying about where your next customer is coming from? This section walks you through exactly what happens when you book a free audit with us, how long it takes to build your custom campaigns, and what to expect during your first 7 days.",
  "Comparison to Other Agencies": "The digital marketing world is full of broken promises and massive retainer fees. Here we explain exactly how SalesLeadIT is different from traditional agencies, why exclusive leads beat shared leads every single time, and why our family-first approach actually delivers a better return on your investment.",
  "Technical & Digital Questions": "For the business owners who want to look under the hood, these questions dive into the technical side of what we do. Learn about our Google Ads methodology, our local SEO ranking factors, how our AI automation systems work, and the tools we use to track your success."
};

export default function FullFAQ() {
  return (
    <ResourceLayout
      title="SalesLeadIT FAQ — Everything About Lead Generation for Small Business Canada"
      description="SalesLeadIT offers salesleadit: frequently asked questions across Canada."
      canonical="https://salesleadit.com/resources/faq"
      positionZero="Everything you need to know about SalesLeadIT — Canada's family-first lead generation agency for small businesses. Answers to questions about pricing, leads, timelines, services, cities served, and how the system works."
      h1="SalesLeadIT: Frequently Asked Questions"
    >
      
      {/* 200-Word Intro */}
      <div className="mb-14 text-sli-body text-[17px] leading-relaxed space-y-6">
        <p>
          Navigating the world of digital marketing can feel overwhelming for a small business owner in Canada. You are bombarded daily with emails promising page-one rankings, phone calls from massive directories trying to sell you shared leads, and agencies asking for $5,000 monthly retainers before they even understand what your business actually does. At SalesLeadIT, we built our agency to be the exact opposite of that corporate chaos. We are a family-run team based in Surrey, BC, and our sole focus is helping Canadian small businesses get consistent, exclusive local customers.
        </p>
        <p>
          We know that your time is your most valuable asset. When you are running a business, you don't have hours to spend guessing how Google Ads work or trying to figure out why your local SEO isn't bringing in calls. You just need the phone to ring with real people who want to hire you. This comprehensive FAQ page is designed to answer every possible question you might have about our process, our pricing, and our guarantees.
        </p>
        <p>
          We have organized over 300 specific questions into 17 distinct categories. Whether you want to know how we generate emergency plumbing leads in Toronto, how much our website design costs, or why we never force our clients into long-term contracts, you will find the direct, honest answer below. Scroll down to find the category that matters most to your business.
        </p>
      </div>

      {/* Accordion Categories */}
      {fullFAQCategories.map((cat, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-3xl font-extrabold text-sli-navy mb-4 tracking-tight font-sans">{cat.category}</h2>
          
          {/* 50-Word Category Intro */}
          <p className="text-sli-muted text-[16px] leading-relaxed mb-6">
            {categoryIntros[cat.category] || "Find answers to frequently asked questions about this topic."}
          </p>

          <div className="space-y-4">
            {cat.questions.map((q, qIdx) => (
              <div key={qIdx} className="bg-white p-6 rounded-2xl border border-sli-border shadow-sm">
                <h3 className="font-bold text-sli-navy text-xl mb-3 font-sans">{q.q}</h3>
                <p className="text-sli-body text-[16px] leading-relaxed">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    
    </ResourceLayout>
  );
}
