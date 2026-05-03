import React from 'react';
import ResourceLayout from './ResourceLayout.jsx';
import { fullFAQCategories } from '../../data/fullFAQ.js';

export default function FullFAQ() {
  return (
    <ResourceLayout
      title="SalesLeadIT FAQ — Everything About Lead Generation for Small Business Canada"
      description="SalesLeadIT offers salesleadit: frequently asked questions across Canada."
      canonical="https://salesleadit.com/resources/faq"
      positionZero="Everything you need to know about SalesLeadIT — Canada's family-first lead generation agency for small businesses. Answers to questions about pricing, leads, timelines, services, cities served, and how the system works."
      h1="SalesLeadIT: Frequently Asked Questions"
    >
      
      {fullFAQCategories.map((cat, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-bold text-sli-navy mb-4">{cat.category}</h2>
          <div className="space-y-4">
            {cat.questions.map((q, qIdx) => (
              <div key={qIdx} className="bg-white p-6 rounded-card border border-gray-100 shadow-sm">
                <h3 className="font-bold text-sli-navy mb-2">{q.q}</h3>
                <p className="text-sli-muted text-sm">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    
    </ResourceLayout>
  );
}
