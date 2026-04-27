import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const manifestoRef = useRef(null)

  const manifestoText = [
    "We started SalesLeadIT because we watched people we love struggle with their businesses.",
    "Friends with great services who couldn't get enough customers.",
    "Family members working 60-hour weeks with unpredictable, hand-to-mouth revenue.",
    "Talented people — one bad month away from closing.",
    "So we lent our hand. And when the results started coming in, we knew we had found something — a system that works for every small business owner, in every neighbourhood, across Canada."
  ]

  const highlightWords = ['family', 'family.', 'grow', 'Canada', 'system', 'results']

  useEffect(() => {
    if (!manifestoRef.current) return
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.manifesto-word')
      
      gsap.to(words, {
        color: (i, target) => {
          return target.classList.contains('manifesto-orange') ? '#F26522' : '#111111'
        },
        stagger: { each: 0.04 },
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 1,
        }
      })
    }, manifestoRef)

    return () => ctx.revert()
  }, [])

  const renderWords = (text) => {
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[.,]/g, '').toLowerCase()
      const isOrange = highlightWords.includes(cleanWord) || highlightWords.includes(word.toLowerCase())
      return (
        <span 
          key={i} 
          className={`manifesto-word inline-block mr-[0.25em] transition-colors duration-300 ${isOrange ? 'manifesto-orange' : ''}`}
          style={{ color: '#C8C8C8' }}
        >
          {word}
        </span>
      )
    })
  }

  return (
    <section id="about" className="py-32 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Manifesto Section */}
        <div ref={manifestoRef} className="manifesto-section mb-32">
          <div className="inline-flex items-center gap-2 mb-10">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Our Story</span>
          </div>

          <div className="max-w-5xl">
            {manifestoText.map((paragraph, i) => (
              <p 
                key={i} 
                className="font-sans font-extrabold leading-[1.1] mb-8 text-sli-navy"
                style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
              >
                {renderWords(paragraph)}
              </p>
            ))}
            
            <p className="font-serif italic text-sli-orange font-bold mt-12" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)' }}>
              {renderWords("Family.")}
            </p>
          </div>
        </div>

        {/* 3-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Col */}
          <div className="lg:col-span-3">
            <div className="rounded-card overflow-hidden aspect-[3/4] ring-1 ring-sli-border shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                crossOrigin="anonymous" 
                alt="SalesLeadIT Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Col */}
          <div className="lg:col-span-5 px-0 lg:px-8">
            <h3 className="font-sans font-extrabold text-3xl text-sli-navy mb-8">
              A Surrey-based marketing team built from the ground up by families — for families.
            </h3>
            <div className="space-y-6 text-sli-body leading-relaxed">
              <p>
                SalesLeadIT is not a faceless agency. We are people who have watched loved ones pour everything into their small businesses, only to struggle with one critical problem: not enough customers, month after month.
              </p>
              <p>
                We built a system that fixes that. It works across every niche, every town, every type of small business. And because we understand what it costs to keep a team paid and families fed, we price it in a way that lets you actually grow — not just survive.
              </p>
            </div>
            
            <Link 
              to="/get-started"
              className="mt-10 relative overflow-hidden group rounded-full px-10 py-4 bg-sli-navy text-white font-sans font-semibold inline-flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-sli-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          {/* Right Col */}
          <div className="lg:col-span-4">
            <div className="rounded-card overflow-hidden aspect-[3/4.5] ring-1 ring-sli-border shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                crossOrigin="anonymous" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
