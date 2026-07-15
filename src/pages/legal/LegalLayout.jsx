import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function LegalLayout({
  title,           // Page <title>
  description,     // Meta description
  canonical,       // Canonical URL
  h1,              // H1 heading
  lastUpdated,     // e.g. "July 15, 2026"
  children         // Page body content
}) {
  useEffect(() => {
    window.scrollTo(0, 0)

    if (title) document.title = title;

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
        <div className="max-w-3xl mx-auto px-6 lg:px-12">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-sli-muted text-xs mb-8">
            <Link to="/" className="hover:text-sli-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-sli-body">{h1}</span>
          </div>

          {/* H1 */}
          <h1 className="font-sans font-extrabold text-sli-navy leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {h1}
          </h1>

          {lastUpdated && (
            <p className="font-mono text-sli-muted text-xs uppercase tracking-widest mb-12">
              Last updated: {lastUpdated}
            </p>
          )}

          {/* Page body */}
          <div className="space-y-10 font-sans text-sli-body leading-relaxed">
            {children}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="font-sans font-bold text-sli-navy text-xl mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
