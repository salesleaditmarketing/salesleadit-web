import React from 'react';
import ResourceLayout from './ResourceLayout.jsx';

export default function ExclusiveVsSharedLeads() {
  return (
    <ResourceLayout
      title="Exclusive Vs Shared Leads | SalesLeadIT"
      description="SalesLeadIT offers exclusive vs shared leads across Canada."
      canonical="https://salesleadit.com/resources/exclusive-leads-vs-shared-leads-canada"
      positionZero="SalesLeadIT delivers exclusive local leads through managed Google and Meta ad campaigns, local SEO, and business directory listings."
      h1="Exclusive Vs Shared Leads"
    >
      {/* Introduction */}
      <div className="mb-14">
        <p className="text-sli-body text-[17px] leading-relaxed mb-6">
          If you run a small business in Canada—whether you are a plumber, a cleaner, or a real estate agent—you have undoubtedly received phone calls from massive lead generation directories promising to fill your schedule. What they often bury in the fine print is a single, critical detail that destroys your profit margins: the leads they are selling you are shared.
        </p>
        <p className="text-sli-body text-[17px] leading-relaxed mb-6">
          Understanding the difference between shared leads and exclusive leads is the single most important marketing distinction you will ever make. It is the difference between building a sustainable, highly profitable business and endlessly grinding in a race to the bottom on pricing. Let's break down exactly how these two models work, how the massive directories make their money, and why SalesLeadIT only ever delivers 100% exclusive leads.
        </p>
      </div>

      {/* Visual Comparison Table */}
      <h2 className="text-3xl font-extrabold text-sli-navy mt-14 mb-8 font-sans tracking-tight">The Core Differences: Shared vs. Exclusive</h2>
      <div className="mb-14 overflow-hidden rounded-2xl border border-sli-border shadow-sm">
        <table className="w-full text-left font-sans">
          <thead>
            <tr className="bg-sli-navy text-white">
              <th className="p-6 font-bold text-lg w-1/3">Feature</th>
              <th className="p-6 font-bold text-lg w-1/3 border-l border-white/20">Shared Leads (Big Directories)</th>
              <th className="p-6 font-bold text-lg w-1/3 border-l border-white/20">Exclusive Leads (SalesLeadIT)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-sli-border">
              <td className="p-6 font-semibold text-sli-navy">Distribution</td>
              <td className="p-6 text-sli-body border-l border-sli-border">Sold to you AND 3–5 of your local competitors simultaneously.</td>
              <td className="p-6 text-sli-body border-l border-sli-border font-medium bg-sli-orange/5">Sold to your business and your business alone. 100% exclusive.</td>
            </tr>
            <tr className="border-b border-sli-border">
              <td className="p-6 font-semibold text-sli-navy">Customer Experience</td>
              <td className="p-6 text-sli-body border-l border-sli-border">Customer is immediately bombarded with 5 phone calls at once.</td>
              <td className="p-6 text-sli-body border-l border-sli-border font-medium bg-sli-orange/5">Customer speaks only with you, feeling valued and prioritized.</td>
            </tr>
            <tr className="border-b border-sli-border">
              <td className="p-6 font-semibold text-sli-navy">Pricing Dynamic</td>
              <td className="p-6 text-sli-body border-l border-sli-border">A race to the bottom. Whoever quotes the cheapest price wins the job.</td>
              <td className="p-6 text-sli-body border-l border-sli-border font-medium bg-sli-orange/5">You command your full price because there is no immediate comparison.</td>
            </tr>
            <tr className="border-b border-sli-border">
              <td className="p-6 font-semibold text-sli-navy">Close Rate</td>
              <td className="p-6 text-sli-body border-l border-sli-border">Abysmally low. Typically 10% to 20% because of the extreme competition.</td>
              <td className="p-6 text-sli-body border-l border-sli-border font-medium bg-sli-orange/5">Extremely high. Typically 60% to 80% because you are the only option.</td>
            </tr>
            <tr>
              <td className="p-6 font-semibold text-sli-navy">Brand Building</td>
              <td className="p-6 text-sli-body border-l border-sli-border">You build the directory's brand. The customer remembers the directory, not you.</td>
              <td className="p-6 text-sli-body border-l border-sli-border font-medium bg-sli-orange/5">You build your own brand. The customer remembers your specific company name.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* How Shared Lead Companies Make Money */}
      <h2 className="text-3xl font-extrabold text-sli-navy mt-14 mb-6 font-sans tracking-tight">How Shared Lead Companies Actually Make Money</h2>
      <p className="text-sli-body text-[17px] leading-relaxed mb-6">
        The massive lead generation directories operating in Canada pitch their service as a budget-friendly way to get customers. They will tell you, "Our leads only cost $30 each!" What they don't emphasize is their actual business model. They are practicing arbitrage on a massive scale.
      </p>
      <p className="text-sli-body text-[17px] leading-relaxed mb-6">
        Here is how their system works: The directory spends $50 on Google Ads to acquire a single homeowner looking for a roof repair. That $50 lead enters their database. The directory then automatically sells that exact same lead to five different roofing companies for $30 each. 
      </p>
      <p className="text-sli-body text-[17px] leading-relaxed mb-14">
        The directory just turned a $50 ad spend into $150 in revenue. They made a massive profit, but they created a nightmare for the contractors. As soon as the homeowner hits "submit," their phone rings five times in sixty seconds. The homeowner is annoyed, the contractors are pitted against each other in a bidding war, and the directory walks away with the cash regardless of whether anyone actually won the job.
      </p>

      {/* The True Cost of Shared Leads */}
      <h2 className="text-3xl font-extrabold text-sli-navy mt-14 mb-6 font-sans tracking-tight">The True Cost: A Mathematical Reality Check</h2>
      <p className="text-sli-body text-[17px] leading-relaxed mb-6">
        Many small business owners are tempted by shared leads because the upfront cost per lead seems cheaper. Let's look at the actual mathematics of closing a job, because the "cheap" lead is almost always the most expensive customer to acquire.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <h3 className="text-xl font-bold text-sli-navy mb-4 font-sans">Scenario A: The $30 Shared Lead</h3>
          <ul className="space-y-3 font-sans text-sli-body">
            <li className="flex justify-between"><span>Cost per lead:</span> <strong>$30</strong></li>
            <li className="flex justify-between"><span>Leads purchased:</span> <strong>10</strong></li>
            <li className="flex justify-between border-b border-sli-border pb-3"><span>Total ad spend:</span> <strong>$300</strong></li>
            <li className="flex justify-between pt-2"><span>Competitors per lead:</span> <strong>4 others</strong></li>
            <li className="flex justify-between"><span>Average Close Rate:</span> <strong>15%</strong></li>
            <li className="flex justify-between border-b border-sli-border pb-3"><span>Jobs actually won:</span> <strong>1.5 jobs</strong></li>
            <li className="flex justify-between text-lg text-red-600 font-bold pt-2"><span>True Cost Per Job:</span> <span>$200.00</span></li>
          </ul>
          <p className="mt-4 text-sm text-sli-muted italic">Result: You paid $200 to acquire a single customer, and you likely had to discount your service just to beat the other 4 guys bidding on the same job.</p>
        </div>

        <div className="bg-[#FFF3ED] p-8 rounded-2xl border border-sli-orange/30 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-sli-orange"></div>
          <h3 className="text-xl font-bold text-sli-navy mb-4 font-sans">Scenario B: The $60 Exclusive Lead</h3>
          <ul className="space-y-3 font-sans text-sli-body">
            <li className="flex justify-between"><span>Cost per lead:</span> <strong>$60</strong></li>
            <li className="flex justify-between"><span>Leads purchased:</span> <strong>10</strong></li>
            <li className="flex justify-between border-b border-sli-border/50 pb-3"><span>Total ad spend:</span> <strong>$600</strong></li>
            <li className="flex justify-between pt-2"><span>Competitors per lead:</span> <strong>Zero</strong></li>
            <li className="flex justify-between"><span>Average Close Rate:</span> <strong>60%</strong></li>
            <li className="flex justify-between border-b border-sli-border/50 pb-3"><span>Jobs actually won:</span> <strong>6 jobs</strong></li>
            <li className="flex justify-between text-lg text-sli-orange font-bold pt-2"><span>True Cost Per Job:</span> <span>$100.00</span></li>
          </ul>
          <p className="mt-4 text-sm text-sli-navy/70 italic">Result: You paid half as much ($100) to acquire a customer, and because there was no competition, you charged your full, premium rate.</p>
        </div>
      </div>

      {/* Why SalesLeadIT Insists on Exclusivity */}
      <h2 className="text-3xl font-extrabold text-sli-navy mt-14 mb-6 font-sans tracking-tight">Why SalesLeadIT Insists on Exclusivity</h2>
      <p className="text-sli-body text-[17px] leading-relaxed mb-6">
        At SalesLeadIT, our entire philosophy is built around treating your business like it is our own. We know that small businesses cannot survive by engaging in daily price wars. Our goal is not just to give you a list of phone numbers; our goal is to help you build a highly profitable company that supports your family.
      </p>
      <p className="text-sli-body text-[17px] leading-relaxed mb-6">
        By utilizing targeted Google Ads, precision local SEO, and your customized directory listing, we generate leads that belong strictly to you. When the phone rings, that customer has seen your brand, read about your specific services, and decided they want to hire you—not the cheapest guy in town.
      </p>
    </ResourceLayout>
  );
}
