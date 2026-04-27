import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { clients } from '../data/clients'

export default function Testimonials() {
  const featured = testimonials[0] // Featured is Maria
  const leftCol = [testimonials[1], testimonials[2]]
  const rightCol = [testimonials[3], testimonials[4]]
  const remaining = testimonials.slice(5)

  return (
    <section id="testimonials" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-sli-orange" />
            <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Client Feedback</span>
          </div>
          <h2 className="font-sans font-extrabold text-sli-navy" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
            Trusted by families & small businesses<br />
            <span className="font-serif italic text-sli-orange">across Canada.</span>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            {leftCol.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>

          {/* Center Column — Featured */}
          <div className="bg-white rounded-[2rem] p-10 border border-sli-border shadow-xl text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-sli-orange text-white text-[10px] font-bold px-4 py-2 rounded-bl-2xl">
              {featured.location}
            </div>
            <div className="flex justify-center mb-8">
              <img 
                src={featured.photo} 
                crossOrigin="anonymous" 
                alt={featured.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-sli-surface group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-sli-orange text-sli-orange" />)}
            </div>
            <p className="font-serif italic text-2xl text-sli-navy leading-relaxed mb-10">
              "{featured.quote}"
            </p>
            <div className="border-t border-sli-border pt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-extrabold text-sli-navy">97%</p>
                <p className="text-[10px] font-mono text-sli-muted uppercase">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-sli-navy">500+</p>
                <p className="text-[10px] font-mono text-sli-muted uppercase">Helped</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightCol.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>

        {/* Remaining Testimonials Strip */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {remaining.map((t, i) => (
            <div key={i} className="flex-shrink-0 w-80 snap-center">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Family Wall */}
        <div className="mt-20">
          <p className="font-mono text-sli-muted text-xs text-center uppercase tracking-widest mb-8">
            Businesses we have personally worked with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((c, i) => (
              <div key={i} className="rounded-card overflow-hidden aspect-video relative group">
                <img 
                  src={c.img} 
                  crossOrigin="anonymous" 
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-mono text-white text-[10px] font-bold">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, photo, stars, quote, location }) {
  return (
    <div className="bg-white rounded-[1.75rem] p-8 border border-sli-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(stars)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-sli-orange text-sli-orange" />)}
      </div>
      <p className="font-sans text-sli-body text-sm leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img src={photo} crossOrigin="anonymous" alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-sans font-bold text-sli-navy text-sm">{name}</p>
          <p className="font-sans text-sli-muted text-[10px]">{role} • {location}</p>
        </div>
      </div>
    </div>
  )
}
