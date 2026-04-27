import { X, Check } from 'lucide-react'

export default function PrePricingContext() {
  return (
    <section className="py-24 bg-sli-bg px-4">
      <div className="max-w-7xl mx-auto bg-sli-surface rounded-card-lg p-12 lg:p-20 border border-sli-border">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Before You See Our Pricing</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Other agencies charge $5,000+<br />for ads alone.
          </h2>
          <p className="max-w-3xl mx-auto text-sli-body text-lg leading-relaxed">
            And they justify it by pointing to market rates. What they don't tell you: those are the same leads being sold to your competitor down the street. You'll talk to a different account manager every other month. And the reporting will look great — whether your phone rings or not.
          </p>
          <p className="max-w-3xl mx-auto text-sli-body text-lg leading-relaxed mt-6">
            We built SalesLeadIT because we got tired of watching people we care about get burned by that. We price our services at what lets a small business actually breathe and grow. Not what the industry says we can charge.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          <div className="bg-white border border-sli-border rounded-full px-6 py-3 flex items-center gap-3">
            <X className="w-4 h-4 text-red-400" />
            <span className="font-sans text-sm font-medium text-sli-navy">Agencies charge $5,000+/month for the same ad work</span>
          </div>
          <div className="bg-white border border-sli-border rounded-full px-6 py-3 flex items-center gap-3">
            <X className="w-4 h-4 text-red-400" />
            <span className="font-sans text-sm font-medium text-sli-navy">They sell your leads to 3+ competitors simultaneously</span>
          </div>
          <div className="bg-white border border-sli-orange/30 ring-1 ring-sli-orange/20 rounded-full px-6 py-3 flex items-center gap-3">
            <Check className="w-4 h-4 text-sli-orange" />
            <span className="font-sans text-sm font-bold text-sli-navy">SalesLeadIT: Your leads. Your growth. Your family team.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
