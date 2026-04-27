import { useState, useRef } from 'react'
import { Plus } from 'lucide-react'
import gsap from 'gsap'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const panelRefs = useRef([])

  const toggle = (i) => {
    const wasOpen = openIndex === i
    // Close previous
    if (openIndex !== null && openIndex !== i) {
      gsap.to(panelRefs.current[openIndex], { height: 0, duration: 0.35, ease: 'power2.in' })
    }
    
    setOpenIndex(wasOpen ? null : i)
    
    if (!wasOpen) {
      gsap.fromTo(panelRefs.current[i], 
        { height: 0 }, 
        { height: 'auto', duration: 0.45, ease: 'power2.out' }
      )
    } else {
      gsap.to(panelRefs.current[i], { height: 0, duration: 0.35, ease: 'power2.in' })
    }
  }

  return (
    <section id="faq" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Sustained Annual Growth</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Got questions?
          </h2>
          <p className="max-w-2xl mx-auto text-sli-body">
            We combine family-first care with proven marketing systems to deliver results. From your first lead to long-term, consistent growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-sli-border last:border-0">
              <button 
                onClick={() => toggle(i)} 
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className={`font-sans font-bold text-lg transition-colors ${openIndex === i ? 'text-sli-orange' : 'text-sli-navy group-hover:text-sli-orange/70'}`}>
                  {faq.q}
                </span>
                <span className={`text-sli-orange transition-transform duration-500 flex-shrink-0 ml-6 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <Plus className="w-6 h-6" />
                </span>
              </button>
              <div 
                ref={el => panelRefs.current[i] = el} 
                style={{ height: 0, overflow: 'hidden' }}
                className="transition-all"
              >
                <p className="font-sans text-sli-body pb-8 leading-relaxed text-lg max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
