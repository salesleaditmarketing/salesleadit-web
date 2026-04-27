import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import PartnerMarquee from '../components/PartnerMarquee.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Comparison from '../components/Comparison.jsx'
import StickyStack from '../components/StickyStack.jsx'
import NicheGrid from '../components/NicheGrid.jsx'
import Stats from '../components/Stats.jsx'
import PrePricingContext from '../components/PrePricingContext.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import FAQ from '../components/FAQ.jsx'
import CTABanner from '../components/CTABanner.jsx'
import Footer from '../components/Footer.jsx'

export default function LandingPage() {
  return (
    <div className="bg-sli-bg selection:bg-sli-orange selection:text-white">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <Services />
      <About />
      <Comparison />
      <StickyStack />
      <NicheGrid />
      <Stats />
      <PrePricingContext />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  )
}
