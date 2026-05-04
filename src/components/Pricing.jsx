import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Bot, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Pricing() {
  const [isFirstTimer, setIsFirstTimer] = useState(true)
  const [noWebsite, setNoWebsite] = useState(false)

  const toggleFirstTimer = (val) => {
    setIsFirstTimer(val)
  }

  return (
    <section id="pricing" className="py-24 bg-sli-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-sli-orange" />
              <span className="font-sans font-bold text-sli-orange uppercase tracking-widest text-xs">Pricing Plan</span>
            </div>
            <h2 className="font-sans font-extrabold text-sli-navy leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}>
              Plans designed to maximize<br />
              <span className="text-sli-muted opacity-50">ROI and real growth</span>
            </h2>
          </div>
          <p className="max-w-md text-sli-body text-right">
            No hidden fees. Zero setup costs for first-timers. Every dollar we take goes toward your growth.
          </p>
        </div>

        {/* First Timer Toggle */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-sli-surface p-1 rounded-full flex items-center mb-4 ring-1 ring-sli-border">
            <button 
              onClick={() => toggleFirstTimer(true)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${isFirstTimer ? 'bg-sli-navy text-white shadow-lg' : 'text-sli-muted hover:text-sli-navy'}`}
            >
              First Timer
            </button>
            <button 
              onClick={() => toggleFirstTimer(false)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${!isFirstTimer ? 'bg-sli-navy text-white shadow-lg' : 'text-sli-muted hover:text-sli-navy'}`}
            >
              Returning Client
            </button>
          </div>
          {isFirstTimer && (
            <div className="flex items-center gap-2">
              <p className="font-sans text-xs text-sli-body">Special offer active: Zero agency setup fee for first-time clients.</p>
              <div className="bg-sli-orange/10 text-sli-orange text-[10px] font-bold px-2 py-0.5 rounded-md border border-sli-orange/20">
                ACTIVE UNTIL MAY 31
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Standard Plan — Most Popular */}
          <div className={`relative bg-sli-navy rounded-[2rem] p-10 lg:p-12 text-white transition-all duration-500 ring-2 ring-sli-orange shadow-2xl ${isFirstTimer ? 'scale-105 z-10' : 'opacity-90'}`}>
            <div className="absolute top-6 right-6 bg-sli-orange text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            {isFirstTimer && (
              <div className="inline-flex items-center gap-2 bg-sli-orange/20 text-sli-orange text-xs font-bold px-4 py-2 rounded-full mb-8 border border-sli-orange/30">
                🎉 First Timer Offer
              </div>
            )}

            <div className="mb-10">
              <h3 className="font-sans font-extrabold text-3xl mb-4">Standard — The Growth Engine</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">${isFirstTimer ? '999' : '1,500'}</span>
                <span className="text-white/50 font-sans">/month</span>
              </div>
              {isFirstTimer && (
                <p className="text-sm text-white/40 mt-2 line-through font-mono">~~$1,500~~ normal rate</p>
              )}
              <p className="text-xs font-mono text-sli-orange mt-4 uppercase tracking-widest">
                100% of ${isFirstTimer ? '999' : '1,500'} goes to your ads. Zero agency fee.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 mb-10 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <p className="font-sans font-bold text-sm">Don't have a business website yet?</p>
                <div 
                  onClick={() => setNoWebsite(!noWebsite)}
                  className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer p-1"
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${noWebsite ? 'translate-x-6 bg-sli-orange' : ''}`} />
                </div>
              </div>
              {noWebsite && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex justify-between text-xs font-mono">
                    <span>+ Website Build</span>
                    <span className="text-sli-orange">~~$1,499~~ → $499</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span>+ Maintenance</span>
                    <span>$79/month</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <span className="font-sans font-bold text-sli-orange">Total to start: $1,498</span>
                    <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded">Save $1,000</span>
                  </div>
                </div>
              )}
            </div>

            <ul className="space-y-4 mb-12">
              {[
                "Dedicated Google & Meta Ads System",
                "100% of your plan goes directly to ads",
                "Zero agency setup fee (first-timers only)",
                "Exclusive leads — never shared",
                "SalesLeadIT Business Directory Listing",
                "Monthly performance reporting",
                "Referral trigger system — built in",
                noWebsite && "Professional business website included"
              ].filter(Boolean).map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sli-orange mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-white/80 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 text-center py-4 rounded-full mb-8 border border-white/5 font-sans font-bold text-sm">
              Pay Once. Get 20–40 Leads Monthly.
            </div>

            <Link to="/get-started" className="w-full bg-white text-sli-navy py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 group hover:bg-sli-orange hover:text-white transition-all duration-300">
              {isFirstTimer ? 'Claim My First Timer Spot' : 'Get Started'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-sli-surface rounded-[2rem] p-10 lg:p-12 border border-sli-border flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="bg-sli-navy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Monthly Rate
                </div>
                <img src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/68b3872262bdee590464132a_Plan%20Icon%2003.svg" className="w-10 h-10" alt="" />
              </div>

              <div className="mb-10">
                <h3 className="font-sans font-extrabold text-sli-navy text-3xl mb-4">Premium — Ads + Growth</h3>
                <div className="space-y-2 border-b border-sli-border pb-6 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sli-body text-sm">Ads Management:</span>
                    <span className="font-mono font-bold">$999/month</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sli-body text-sm">Social Media Growth:</span>
                    <span className="font-mono font-bold">$1,500/month</span>
                  </div>
                  <div className="pt-2 flex justify-between items-baseline">
                    <span className="font-sans font-bold text-sli-navy">Monthly total:</span>
                    <span className="text-2xl font-extrabold text-sli-navy">$2,499/month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sli-body text-sm">+ Website Build:</span>
                    <span className="font-mono font-bold text-sli-navy">$1,499 one-time</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sli-body text-sm">+ Site Maintenance:</span>
                    <span className="font-mono font-bold text-sli-navy">$199/month</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  "Everything in Standard Plan",
                  "Management and Support",
                  "Dedicated Social Media Manager",
                  "Viral Brand Creator / Content Manager",
                  "Professional Video Editing",
                  "Graphics Design + Brand Manager",
                  "Professional business website ($1,499 value)",
                  "Premium hosting & maintenance ($199/mo)",
                  "Bi-weekly strategy sessions",
                  "Priority support — direct team line",
                  "Multi-location support available"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-sli-orange mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-sli-body text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/get-started" className="w-full bg-sli-navy text-white py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 hover:bg-sli-orange transition-colors duration-300">
              Apply for Premium
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Automation Banner */}
        <div className="mt-8 bg-sli-navy rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 ring-1 ring-white/10 shadow-2xl">
          <div className="w-20 h-20 bg-sli-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-10 h-10 text-sli-orange" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-sans font-bold text-white text-2xl mb-2">Automation — Available by Request</h3>
            <p className="font-sans text-white/60 leading-relaxed">
              AI answers your incoming calls. Replies to text message inquiries. Handles every online touchpoint — 24 hours a day, 7 days a week. You do what you are great at: serving your customers. We handle everything else, even overnight.
            </p>
          </div>
          <Link to="/get-started" className="relative overflow-hidden group rounded-full px-10 py-4 bg-sli-orange text-white font-sans font-bold whitespace-nowrap">
            <span className="absolute inset-0 bg-sli-orange2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Ask About Automation <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Trust Strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            "🔒 Zero Setup Fee for First-Timers",
            "📅 Live in 7 Days",
            "🤝 Cancel Anytime — No Lock-In"
          ].map((trust, i) => (
            <div key={i} className="bg-white border border-sli-border rounded-full px-6 py-2 text-xs font-bold text-sli-navy font-mono">
              {trust}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
