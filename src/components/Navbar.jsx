import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    const sentinel = document.getElementById('hero-sentinel')
    if (sentinel) observer.observe(sentinel)

    return () => {
      if (sentinel) observer.unobserve(sentinel)
    }
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ease-in-out px-6 py-3 rounded-full border ${
          scrolled 
            ? 'bg-sli-bg/80 backdrop-blur-xl border-sli-border shadow-sm text-sli-navy' 
            : 'bg-transparent border-transparent text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img 
              src="https://www.salesleadit.com/wp-content/uploads/2023/12/logo-e1709706643167.png" 
              className="h-10 w-auto" 
              crossOrigin="anonymous" 
              style={!scrolled ? { filter: 'brightness(0) invert(1)' } : {}}
              alt="SalesLeadIT"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="font-sans font-medium text-sm hover:text-sli-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/get-started"
              className="relative overflow-hidden group rounded-full px-6 py-2.5 bg-sli-navy text-white text-sm font-sans font-semibold hidden md:block"
            >
              <span className="absolute inset-0 bg-sli-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get My Free Audit</span>
            </Link>

            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-sli-navy transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between">
            <img 
              src="https://www.salesleadit.com/wp-content/uploads/2023/12/logo-e1709706643167.png" 
              className="h-10 w-auto" 
              style={{ filter: 'brightness(0) invert(1)' }}
              alt="SalesLeadIT"
            />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-bold text-3xl text-white hover:text-sli-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link 
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-full px-10 py-4 bg-sli-orange text-white text-lg font-sans font-bold"
            >
              Get My Free Audit
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
