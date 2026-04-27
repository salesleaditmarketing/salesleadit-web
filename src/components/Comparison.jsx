import { useEffect, useRef } from 'react'
import { X, Check } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Comparison() {
  const tableRef = useRef(null)

  const rows = [
    { label: "Typical monthly cost", other: "$5,000+ retainers", sli: "Priced to let you grow" },
    { label: "Lead exclusivity", other: "Same leads sold to 3–5 competitors", sli: "Your leads. Yours alone." },
    { label: "Onboarding time", other: "6–8 week ramp-up", sli: "Live within 7 days" },
    { label: "Who manages you", other: "Rotating junior staff", sli: "A dedicated family team" },
    { label: "Results language", other: '"Building momentum"', sli: "Phone rings or we fix it" },
    { label: "How they see you", other: "Contract #4291", sli: "An extension of our family" },
    { label: "Directory listing", other: "Not included", sli: "Included — live day one" },
    { label: "After 2 months", other: "Same generic approach", sli: "System learns your business → 50%+ more results" },
    { label: "Referral system", other: "None built in", sli: "Customers bring their neighbours — built in" },
  ]

  useEffect(() => {
    if (!tableRef.current) return
    const ctx = gsap.context(() => {
      const entries = gsap.utils.toArray('.comp-row')
      entries.forEach((entry) => {
        const other = entry.querySelector('.comp-other')
        const sli = entry.querySelector('.comp-sli')
        
        if (other) {
          gsap.from(other, {
            x: -30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: entry,
              start: 'top 85%',
            }
          })
        }
        
        if (sli) {
          gsap.from(sli, {
            x: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: entry,
              start: 'top 85%',
            }
          })
        }
      })
    }, tableRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="why-us" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Why SalesLeadIT</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Most agencies charge $5,000+<br />and treat you like a number.
          </h2>
          <p className="max-w-3xl mx-auto text-sli-body text-lg leading-relaxed">
            Agencies across Surrey and throughout Canada justify their $5,000+ monthly retainers by pointing to the market rate. But here is what they do not tell you: they sell those same leads to your competitors.
          </p>
        </div>

        <div ref={tableRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-sli-border">
          {/* Other Agencies Header */}
          <div className="bg-[#F9F1F0] p-10 text-center border-b border-sli-border lg:border-b-0 lg:border-r">
            <X className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="font-sans font-bold text-sli-navy text-2xl">Other Agencies</h3>
          </div>

          {/* SalesLeadIT Header */}
          <div className="bg-sli-navy p-10 text-center relative ring-4 ring-sli-orange/30 -translate-y-2 lg:-translate-y-4 z-10 rounded-t-[2.5rem] lg:rounded-none lg:rounded-r-[2.5rem]">
            <Check className="w-10 h-10 text-sli-orange mx-auto mb-4" />
            <h3 className="font-sans font-bold text-white text-2xl">SalesLeadIT</h3>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sli-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              The Better Way
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="comp-row col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2">
              <div className="comp-other bg-[#F9F1F0] p-6 border-b border-sli-border lg:border-r px-10 flex flex-col justify-center">
                <p className="text-[10px] font-mono text-sli-muted uppercase mb-1">{row.label}</p>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <p className="font-sans text-sli-body/60">{row.other}</p>
                </div>
              </div>
              <div className="comp-sli bg-sli-navy p-6 border-b border-sli-border/10 px-10 flex flex-col justify-center relative z-10">
                <p className="text-[10px] font-mono text-white/30 uppercase mb-1">{row.label}</p>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-sli-orange mt-1 flex-shrink-0" />
                  <p className="font-sans text-white font-medium">{row.sli}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-sli-muted text-xs">
            * Comparison based on standard agency retainers across BC & Ontario markets.
          </p>
        </div>
      </div>
    </section>
  )
}
