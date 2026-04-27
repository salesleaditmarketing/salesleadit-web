import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StickyStack() {
  const containerRef = useRef(null)

  const cards = [
    {
      num: "01",
      title: "We learn your world.",
      body: "Before we write a single ad or set up a single campaign, we sit down and understand your business. Who your best customer is. Where they live. What they search for. What makes them pick up the phone. No generic playbooks — your strategy is built specifically for you, your neighbourhood, and your niche.",
      bg: "bg-sli-surface",
      type: "rings"
    },
    {
      num: "02",
      title: "We build your lead machine.",
      body: "We activate your SalesLeadIT business directory listing, configure your local SEO signals, launch targeted Google and Meta ad campaigns, set up your customer review collection pipeline, and build a referral trigger into every interaction. All of it. Done for you. You don't touch a single button.",
      bg: "bg-sli-navy",
      text: "text-white",
      accent: "text-sli-orange",
      type: "scanner"
    },
    {
      num: "03",
      title: "Your phone starts ringing.",
      body: "Within 7–30 days, real local inquiries start coming in. Real people who searched, found you, liked what they saw, and reached out. And because we built referral loops in from the start, those customers bring their neighbours. By month 3, our system has learned your business and results are 50% stronger than month one.",
      bg: "bg-sli-surface",
      type: "ekg"
    }
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      
      mm.add('(min-width: 768px)', () => {
        const stickyCards = gsap.utils.toArray('.sticky-card')
        
        stickyCards.forEach((card, i) => {
          if (i === stickyCards.length - 1) return

          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              gsap.set(card, {
                scale: 1 - self.progress * 0.08,
                filter: `blur(${self.progress * 10}px)`,
                opacity: 1 - self.progress * 0.65,
              })
            }
          })
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="how-it-works" ref={containerRef} className="bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Our Process</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Three steps to predictable growth.
          </h2>
        </div>

        <div className="space-y-4 md:space-y-0 relative">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className={`sticky-card ${card.bg} ${card.text || 'text-sli-navy'} rounded-[2.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 min-h-[70vh] lg:h-[80vh] border border-sli-border/30 shadow-2xl relative mb-8 md:mb-0`}
              style={{ top: '10vh' }}
            >
              <div className="flex-1">
                <span className={`font-mono text-xl ${card.accent || 'text-sli-muted'} mb-6 block`}>{card.num} //</span>
                <h3 className="font-sans font-extrabold text-4xl lg:text-5xl mb-8 leading-tight">{card.title}</h3>
                <p className="font-sans text-lg opacity-80 leading-relaxed max-w-xl">{card.body}</p>
              </div>

              <div className="flex-1 w-full flex justify-center items-center">
                {card.type === 'rings' && (
                  <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                    {[...Array(4)].map((_, j) => (
                      <div 
                        key={j}
                        className="absolute inset-0 border border-sli-navy/10 rounded-full animate-[spin_10s_linear_infinite]"
                        style={{ 
                          animationDirection: j % 2 === 0 ? 'normal' : 'reverse',
                          animationDuration: `${15 + j * 5}s`,
                          scale: `${0.4 + j * 0.2}`
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-sli-orange rounded-full shadow-lg pulse-dot" />
                    </div>
                  </div>
                )}

                {card.type === 'scanner' && (
                  <div className="relative w-full max-w-md aspect-square bg-sli-card rounded-2xl overflow-hidden p-6 ring-1 ring-white/10">
                    <div className="grid grid-cols-8 gap-4 h-full">
                      {[...Array(64)].map((_, j) => (
                        <div key={j} className="w-1 h-1 bg-white/20 rounded-full mx-auto self-center" />
                      ))}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-sli-orange/50 shadow-[0_0_20px_#F26522] animate-[scan_3s_ease-in-out_infinite]" />
                  </div>
                )}

                {card.type === 'ekg' && (
                  <div className="w-full max-w-md">
                    <svg viewBox="0 0 400 100" className="w-full">
                      <path 
                        d="M0,50 L50,50 L60,20 L80,80 L90,50 L150,50 L160,10 L180,90 L190,50 L400,50" 
                        fill="none" 
                        stroke="#F26522" 
                        strokeWidth="3"
                        className="animate-[ekg_4s_linear_infinite]"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0%, 100% { top: 0% }
          50% { top: 100% }
        }
        @keyframes ekg {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  )
}
