import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 bg-sli-bg px-4">
      <div className="max-w-7xl mx-auto bg-[#FFF3ED] rounded-[3rem] p-12 lg:p-24 text-center border border-sli-orange/10 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sli-orange/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-sli-orange/20 rounded-full px-5 py-2 mb-10">
          <img src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/6890bee0bc046268f9b1496c_magic-wand.svg" className="w-5 h-5" alt="" />
          <span className="font-sans font-bold text-sli-orange text-[10px] uppercase tracking-widest">Lead Generation Agency</span>
        </div>

        <h2 className="relative z-10 font-sans font-extrabold text-sli-navy leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          Take your local business to<br />
          <span className="font-serif italic text-sli-orange">the next level.</span>
        </h2>

        <p className="relative z-10 max-w-2xl mx-auto font-sans text-sli-body text-xl leading-relaxed mb-12">
          Book a free 15-minute audit. We will show you exactly where new customers are hiding in your market — and how to reach them. No obligation. No sales pressure. Just clarity.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/get-started" 
            className="relative overflow-hidden group rounded-full px-12 py-5 bg-sli-navy text-white font-sans font-bold text-lg flex items-center justify-center gap-3 transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-sli-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Book My Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
