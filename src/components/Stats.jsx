import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const containerRef = useRef(null)

  const stats = [
    { value: 97,   suffix: "%",     label: "Client Satisfaction Rate",   sub: "Across all active clients" },
    { value: 500,  suffix: "+",     label: "Local Businesses Helped",    sub: "And growing every month" },
    { value: 30,   suffix: " Days", label: "Avg. Time to First Lead",    sub: "From go-live to first inquiry" },
    { value: 50,   suffix: "%+",   label: "More Results by Month 3",    sub: "Our system learns your business" },
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      stats.forEach((c, i) => {
        const el = document.querySelector(`#counter-${i}`)
        if (!el) return
        
        const obj = { val: 0 }
        gsap.to(obj, {
          val: c.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          },
          onUpdate: function() {
            el.textContent = Math.round(obj.val) + c.suffix
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="results" ref={containerRef} className="py-24 bg-sli-bg px-4">
      <div className="max-w-7xl mx-auto bg-sli-navy rounded-card-lg p-12 lg:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sli-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sli-orange/5 blur-[150px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange pulse-dot" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Proven Performance</span>
          </div>
          <h2 className="font-sans font-extrabold" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Numbers don't <span className="font-serif italic text-sli-orange">lie.</span>
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-sli-card border border-white/5 rounded-card p-8 flex flex-col items-center text-center hover:ring-1 hover:ring-sli-orange/50 transition-all group">
              <span id={`counter-${i}`} className="font-mono text-4xl lg:text-5xl font-extrabold text-sli-orange mb-4">0{stat.suffix}</span>
              <p className="font-sans font-bold text-lg mb-2">{stat.label}</p>
              <p className="font-sans text-white/50 text-xs leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 drop-shadow-xl animate-[spin_20s_linear_infinite]">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(242, 101, 34, 0.25)" strokeWidth="12" strokeDasharray="25.13 251.327" strokeDashoffset="-226.19" strokeLinecap="butt" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(242, 101, 34, 0.55)" strokeWidth="12" strokeDasharray="55.29 251.327" strokeDashoffset="-170.9" strokeLinecap="butt" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F26522" strokeWidth="12" strokeDasharray="170.9 251.327" strokeDashoffset="0" strokeLinecap="butt" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-mono font-bold text-white">85%</p>
                  <p className="text-[10px] uppercase font-mono text-white/50 tracking-widest mt-1">Avg. Growth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            {[
              { val: '68%', label: 'Lead Generation & Directory', desc: 'Qualified local inquiries driven directly to your business.' },
              { val: '22%', label: 'Digital Marketing & SEO', desc: 'Organic visibility that compounds and grows over time.' },
              { val: '10%', label: 'Web Design & Brand Presence', desc: 'First impressions that turn browsers into callers.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-10 bg-sli-orange rounded-lg flex items-center justify-center font-mono font-bold">
                  {item.val}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-1">{item.label}</h4>
                  <p className="font-sans text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
