import { MessageCircle, Camera, Share2, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/sales-lead-it-logo.png'

export default function Footer() {
  return (
    <footer className="bg-sli-navy rounded-t-[3.5rem] pt-24 pb-12 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
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

          {/* Col 4 — Resources */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-8">Resources</h4>
            <ul className="space-y-4 font-sans text-white/50 text-sm">
              {[
                { label: "How to Get More Customers", href: "/resources/how-to-get-more-customers-for-small-business-canada" },
                { label: "Lead Generation Canada", href: "/resources/lead-generation-for-small-business-canada" },
                { label: "Google Ads for Small Business", href: "/resources/google-ads-for-small-business-canada" },
                { label: "Local SEO Canada", href: "/resources/local-seo-for-small-business-canada" },
                { label: "Social Media Marketing", href: "/resources/social-media-marketing-small-business-canada" },
                { label: "Web Design Canada", href: "/resources/web-design-for-small-business-canada" },
                { label: "Marketing Agency Surrey BC", href: "/resources/marketing-agency-surrey-bc" },
                { label: "Exclusive vs Shared Leads", href: "/resources/exclusive-leads-vs-shared-leads-canada" },
                { label: "AI Automation for Business", href: "/resources/ai-automation-for-small-business-canada" },
                { label: "Our Results", href: "/resources/salesleadit-results" },
                { label: "Full FAQ", href: "/resources/faq" },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-sli-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — YouTube */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-lg">YouTube</h4>
            <p className="font-sans text-white/50 text-sm">Grow local business</p>
            <a 
              href="https://youtube.com/@growlocol" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sli-orange hover:bg-orange-600 text-white rounded-full py-3 px-6 transition-all font-sans font-bold text-sm w-max"
            >
              <Youtube className="w-5 h-5" />
              Watch on YouTube
            </a>
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
