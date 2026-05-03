import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function ResourceLayout({ 
  title,           // Page <title>
  description,     // Meta description
  canonical,       // Canonical URL
  positionZero,    // 40-60 word Position Zero answer paragraph
  h1,              // H1 heading
  children         // Page body content
}) {
  useEffect(() => {
    // Update the document title
    if (title) document.title = title;
    
    // Update the meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        metaDesc.content = description;
        document.head.appendChild(metaDesc);
      }
    }
    
    // Update canonical tag
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute("href", canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = "canonical";
        linkCanonical.href = canonical;
        document.head.appendChild(linkCanonical);
      }
    }
  }, [title, description, canonical]);

  return (
    <>
      <Navbar />
      <main className="bg-sli-bg min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-sli-muted text-xs mb-8">
            <Link to="/" className="hover:text-sli-orange transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-sli-orange transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-sli-body">{h1}</span>
          </div>

          {/* Position Zero answer — BEFORE H1, 40-60 words */}
          <p className="text-[17px] text-sli-muted leading-relaxed mb-6 max-w-2xl font-sans">
            {positionZero}
          </p>

          {/* H1 */}
          <h1 className="font-sans font-extrabold text-sli-navy leading-tight mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {h1}
          </h1>

          {/* Page body */}
          <div className="prose prose-lg max-w-none font-sans text-sli-body">
            {children}
          </div>

          {/* CTA at bottom of every resource page */}
          <div className="mt-16 bg-sli-navy rounded-[3.5rem] p-10 text-center">
            <p className="font-mono text-sli-orange text-sm mb-3">● Lead Generation Agency</p>
            <h2 className="font-sans font-extrabold text-white text-2xl mb-4">
              Ready to get your first leads?
            </h2>
            <p className="font-sans text-white/70 mb-8 max-w-lg mx-auto">
              Book a free 15-minute audit. We'll show you exactly where new customers 
              are hiding in your market — for free, no obligation.
            </p>
            <Link to="/get-started"
              className="inline-flex items-center gap-2 bg-sli-orange text-white font-sans 
                         font-semibold px-8 py-4 rounded-full hover:bg-orange-600 
                         transition-colors duration-200">
              Get My Free Audit →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
