import { MessageCircle, Camera, Share2, Send } from 'lucide-react'
import logo from '../assets/sales-lead-it-logo.png'

export default function Footer() {
  return (
    <footer className="bg-sli-navy rounded-t-[3.5rem] pt-24 pb-12 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1 — Brand */}
          <div className="space-y-8">
            <img 
              src={logo}
              alt="SalesLeadIT"
              crossOrigin="anonymous"
              style={{ height: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <p className="font-sans text-white/60 leading-relaxed max-w-xs">
              Growing small businesses like family. Canada's family-first lead generation team.
            </p>
            <div className="space-y-2">
              <p className="font-sans font-bold text-lg">1-844-532-3488</p>
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sli-orange transition-colors"><MessageCircle className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sli-orange transition-colors"><Camera className="w-4 h-4" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sli-orange transition-colors"><Share2 className="w-4 h-4" /></a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span className="font-mono text-white/60 text-xs uppercase tracking-widest">System Operational</span>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-8">Services</h4>
            <ul className="space-y-4 font-sans text-white/50 text-sm">
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Business Directory Listing</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Google & Meta Ads</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Local SEO</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Social Media Growth</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-sli-orange transition-colors">AI Automation</a></li>
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4 font-sans text-white/50 text-sm">
              <li><a href="#about" className="hover:text-sli-orange transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-sli-orange transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-sli-orange transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-sli-orange transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-sli-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-sli-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-sli-orange transition-colors">Free Listing</a></li>
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-lg">Newsletter</h4>
            <p className="font-sans text-white/50 text-sm">Join 500+ local business owners getting free growth tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-sli-orange font-sans text-sm" 
              />
              <button className="absolute right-2 top-1.5 p-2.5 bg-sli-orange rounded-full hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
              © 2026 SalesLeadIT. All rights reserved. Powered by SalesLeadIT Technical Team
            </p>
          </div>
          <div className="flex gap-8 font-mono text-[10px] text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
