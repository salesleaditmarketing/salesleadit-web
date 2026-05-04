import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Target, Activity, Calendar, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Services() {
  const [shuffleItems, setShuffleItems] = useState([
    "New Local Lead Captured",
    "Qualified & Matched to You",
    "Delivered to Your Phone"
  ])

  const [typewriterIndex, setTypewriterIndex] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const typewriterMessages = [
    "New inquiry from Google Search...",
    "3 leads from your directory listing...",
    "Local SEO rank improved: +6 positions...",
    "Referral lead from existing client...",
    "Review request sent automatically..."
  ]

  const cursorRef = useRef(null)
  const schedulerRef = useRef(null)

  useEffect(() => {
    // Shuffler interval
    const shuffleId = setInterval(() => {
      setShuffleItems(prev => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 2800)

    // Typewriter effect
    const typingSpeed = isDeleting ? 40 : 80
    const fullText = typewriterMessages[typewriterIndex]
    
    const typewriterId = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(fullText.substring(0, typewriterText.length + 1))
        if (typewriterText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypewriterText(fullText.substring(0, typewriterText.length - 1))
        if (typewriterText === '') {
          setIsDeleting(false)
          setTypewriterIndex((prev) => (prev + 1) % typewriterMessages.length)
        }
      }
    }, typingSpeed)

    // Cursor Scheduler GSAP
    if (!schedulerRef.current) return
    const ctx = gsap.context(() => {
      if (!schedulerRef.current || !cursorRef.current) return

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      const cells = gsap.utils.toArray('.scheduler-cell')
      
      tl.set(cursorRef.current, { opacity: 0, x: 0, y: 0 })
        .to(cursorRef.current, { opacity: 1, duration: 0.3 })
      
      // Select random days
      const targetCells = [cells[1], cells[3], cells[5]].filter(Boolean)
      
      if (targetCells.length > 0) {
        targetCells.forEach(cell => {
          const rect = cell.getBoundingClientRect()
          const parentRect = schedulerRef.current?.getBoundingClientRect()
          if (!parentRect) return

          tl.to(cursorRef.current, {
            x: rect.left - parentRect.left + 10,
            y: rect.top - parentRect.top + 10,
            duration: 0.8,
            ease: 'power2.inOut'
          })
          .to(cursorRef.current, { scale: 0.85, duration: 0.1 })
          .set(cell, { backgroundColor: '#F26522', color: 'white' })
          .to(cursorRef.current, { scale: 1, duration: 0.1 })
        })
      }

      // Click button
      const btn = schedulerRef.current.querySelector('.scheduler-btn')
      if (btn) {
        const btnRect = btn.getBoundingClientRect()
        const parentRect = schedulerRef.current.getBoundingClientRect()
        tl.to(cursorRef.current, {
          x: btnRect.left - parentRect.left + 20,
          y: btnRect.top - parentRect.top + 10,
          duration: 0.8,
          ease: 'power2.inOut'
        })
        .to(cursorRef.current, { scale: 0.85, duration: 0.1 })
        .to(btn, { scale: 0.95, duration: 0.1 })
        .to(btn, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
      }

      tl.to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5 })
        .set(cells, { backgroundColor: 'transparent', color: '#4A4A4A' })
    }, schedulerRef)

    return () => {
      clearInterval(shuffleId)
      clearTimeout(typewriterId)
      ctx.revert()
    }
  }, [typewriterText, isDeleting, typewriterIndex])

  const clientRows = [
    {
      num: "01",
      name: "Bro Tent & Party Rentals",
      tags: ["Social", "Directory"],
      quote: "Event booking inquiries doubled in the first active month.",
      imgs: ["https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-sli-orange" />
              <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Our Services</span>
            </div>
            <h2 className="font-sans font-extrabold text-sli-navy leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
              How we turn local searches into<br />
              <span className="font-serif italic text-sli-orange font-bold text-5xl">paying customers.</span>
            </h2>
          </div>
          <p className="max-w-md text-sli-body text-right">
            We combine strategy, community data, and family care to deliver qualified local leads. From setup to scale — all done for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Card 1 — Shuffler */}
          <div className="bg-[#FFF0E8] rounded-card p-8 flex flex-col h-full min-h-[400px] ring-1 ring-sli-border/50">
            <Target className="w-10 h-10 text-sli-orange mb-8" />
            <div className="relative h-32 mb-8">
              {shuffleItems.map((item, i) => (
                <div 
                  key={item}
                  className="absolute inset-x-0 bg-white rounded-xl p-4 shadow-sm border border-sli-border transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                    zIndex: 10 - i,
                    opacity: 1 - i * 0.3
                  }}
                >
                  <p className="font-sans font-bold text-sli-navy text-sm">{item}</p>
                </div>
              ))}
            </div>
            <h3 className="font-sans font-bold text-sli-navy text-xl mb-3">Lead Generation Engine</h3>
            <p className="font-sans text-sli-body text-sm leading-relaxed mb-6">
              We build automated pipelines that deliver real, local customers directly to your business — no guesswork, no cold calls.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {['Lead Gen', 'Local Targeting', 'Automation'].map(t => (
                <span key={t} className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded-full border border-sli-border/30">{t}</span>
              ))}
            </div>
          </div>

          {/* Card 2 — Typewriter */}
          <div className="bg-[#EDF4FF] rounded-card p-8 flex flex-col h-full min-h-[400px] ring-1 ring-sli-border/50">
            <Activity className="w-10 h-10 text-sli-orange mb-8" />
            <div className="bg-[#0D1B2A] rounded-xl p-5 mb-8 h-32 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sli-orange pulse-dot" />
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Live Feed</span>
              </div>
              <p className="font-mono text-xs text-white/90">
                {typewriterText}
                <span className="inline-block w-1.5 h-4 bg-sli-orange ml-1 align-middle animate-pulse" />
              </p>
            </div>
            <h3 className="font-sans font-bold text-sli-navy text-xl mb-3">Real-Time Performance</h3>
            <p className="font-sans text-sli-body text-sm leading-relaxed mb-6">
              See every lead, click, and conversion in real time. Know exactly what's bringing in your customers — and what to scale.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {['Analytics', 'Reporting', 'SEO'].map(t => (
                <span key={t} className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded-full border border-sli-border/30">{t}</span>
              ))}
            </div>
          </div>

          {/* Card 3 — Scheduler */}
          <div ref={schedulerRef} className="bg-[#F0F5EC] rounded-card p-8 flex flex-col h-full min-h-[400px] ring-1 ring-sli-border/50 relative">
            <Calendar className="w-10 h-10 text-sli-orange mb-8" />
            
            <div className="bg-white rounded-xl p-4 mb-8 shadow-sm border border-sli-border/50">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['S','M','T','W','T','F','S'].map((d, i) => (
                  <div key={i} className="scheduler-cell text-[10px] font-mono text-center py-1 rounded-md transition-colors border border-sli-border/20">
                    {d}
                  </div>
                ))}
              </div>
              <div className="scheduler-btn bg-sli-navy text-white text-[10px] font-bold text-center py-2 rounded-full">
                Launch Campaign
              </div>
            </div>

            <svg 
              ref={cursorRef}
              className="absolute w-5 h-5 pointer-events-none z-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#F26522" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              <path d="M13 13l6 6" />
            </svg>

            <h3 className="font-sans font-bold text-sli-navy text-xl mb-3">Done-For-You Campaigns</h3>
            <p className="font-sans text-sli-body text-sm leading-relaxed mb-6">
              We plan, build, and run everything. You focus on serving your customers. We focus on getting you more of them.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {['Ads', 'Social Media', 'Web'].map(t => (
                <span key={t} className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded-full border border-sli-border/30">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {clientRows.map(row => (
            <div key={row.num} className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-sli-border group hover:bg-sli-surface/50 transition-colors px-4 rounded-xl">
              <div className="flex items-center flex-1 w-full md:w-auto">
                <span className="font-mono text-sli-muted text-sm w-12">{row.num} //</span>
                <div className="px-6">
                  <p className="font-sans font-bold text-sli-navy">{row.name}</p>
                  <p className="font-sans text-sli-body text-sm mt-1 italic">"{row.quote}"</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <div className="flex gap-2 items-center">
                  {row.tags.map(t => <span key={t} className="text-[10px] font-mono bg-sli-surface px-3 py-1 rounded-full border border-sli-border">{t}</span>)}
                </div>
                <div className="flex gap-2">
                  {row.imgs.map((img, i) => (
                    <img key={i} src={img} crossOrigin="anonymous" alt=""
                        className="w-16 h-12 object-cover rounded-lg border border-sli-border" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-8 text-center">
            <Link 
              to="/get-started" 
              className="inline-flex items-center gap-2 font-sans font-bold text-sli-navy group hover:text-sli-orange transition-colors"
            >
              View All Client Results
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
