import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { niches } from '../data/niches'
import gsap from 'gsap'

export default function NicheGrid() {
  const [expanded, setExpanded] = useState(false)
  const gridRef = useRef(null)

  const toggleExpand = () => {
    if (!expanded) {
      gsap.to(gridRef.current, { height: 'auto', duration: 0.6, ease: 'power2.inOut' })
    } else {
      gsap.to(gridRef.current, { height: 0, duration: 0.4, ease: 'power2.in' })
    }
    setExpanded(!expanded)
  }

  const visibleNiches = niches.slice(0, 16)
  const hiddenNiches = niches.slice(16)

  return (
    <section id="niches" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Small Business Specialists</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            If you run a local business, <span className="font-serif italic text-sli-orange">we've got you.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sli-body">
            We've worked across these industries. Scroll through and see if yours is here — and if it's not, reach out anyway.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
          {visibleNiches.map((niche, i) => {
            const Icon = LucideIcons[niche.icon] || LucideIcons.Star
            return (
              <div 
                key={i}
                className="bg-sli-surface rounded-[1.5rem] p-6 flex items-center gap-4 border border-sli-border/50 hover:ring-1 hover:ring-sli-orange/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sli-orange ring-1 ring-sli-border group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-sans font-bold text-sli-navy text-sm">{niche.label}</span>
              </div>
            )
          })}
        </div>

        <div ref={gridRef} className="h-0 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pb-4">
            {hiddenNiches.map((niche, i) => {
              const Icon = LucideIcons[niche.icon] || LucideIcons.Star
              return (
                <div 
                  key={i}
                  className="bg-sli-surface rounded-[1.5rem] p-6 flex items-center gap-4 border border-sli-border/50 hover:ring-1 hover:ring-sli-orange/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sli-orange ring-1 ring-sli-border group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans font-bold text-sli-navy text-sm">{niche.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-8">
          <button 
            onClick={toggleExpand}
            className="font-sans font-bold text-sli-navy hover:text-sli-orange transition-colors flex items-center gap-2"
          >
            {expanded ? 'View Less' : `View All ${niches.length}+ Niches`}
            <LucideIcons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </button>

          <div className="inline-flex items-center gap-4 bg-[#FFF3ED] border border-sli-orange/20 rounded-full px-6 py-3">
            <span className="font-sans text-sm text-sli-navy font-medium">Don't see your business type? We likely work with it.</span>
            <Link to="/get-started" className="font-sans font-bold text-sli-orange text-sm flex items-center gap-1 group">
              Tell us what you do <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
