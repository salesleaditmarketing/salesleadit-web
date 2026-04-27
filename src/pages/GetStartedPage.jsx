import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowLeft, Phone, Calendar, Send } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    niche: '',
    goal: '',
    plan: 'Standard'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => s - 1)

  return (
    <div className="min-h-screen bg-sli-bg flex flex-col lg:flex-row">
      
      {/* Left Sidebar — Social Proof */}
      <div className="hidden lg:flex lg:w-[400px] bg-sli-navy p-12 flex-col justify-between fixed h-full overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center mb-20 group">
            <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-sli-orange group-hover:-translate-x-1 transition-all mr-2" />
            <img 
              src="https://www.salesleadit.com/wp-content/uploads/2023/12/logo-e1709706643167.png" 
              className="h-8" 
              style={{ filter: 'brightness(0) invert(1)' }} 
              alt="SalesLeadIT" 
            />
          </Link>

          <h2 className="font-sans font-extrabold text-white text-3xl leading-tight mb-8">
            You're minutes away from a predictable lead system.
          </h2>

          <div className="space-y-6">
            {[
              "Exclusive local leads (never shared)",
              "Live within 7 business days",
              "Zero agency setup fee",
              "Personal family team support"
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-sli-orange/20 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-sli-orange" />
                </div>
                <p className="text-white/70 text-sm font-sans">{f}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-white/5 rounded-3xl p-6 border border-white/10">
          <p className="text-white/60 text-sm font-sans italic mb-6">
            "{testimonials[0].quote}"
          </p>
          <div className="flex items-center gap-3">
            <img 
              src={testimonials[0].photo} 
              crossOrigin="anonymous" 
              className="w-10 h-10 rounded-full border border-white/20" 
              alt="" 
            />
            <div>
              <p className="text-white text-sm font-bold">{testimonials[0].name}</p>
              <p className="text-white/40 text-[10px] uppercase font-mono">{testimonials[0].role}</p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sli-orange/5 blur-[120px] rounded-full" />
      </div>

      {/* Right Content — Form Area */}
      <div className="flex-1 lg:ml-[400px] p-6 md:p-12 lg:p-24 flex flex-col items-center">
        
        {/* Mobile Logo */}
        <div className="lg:hidden w-full flex justify-between items-center mb-12">
          <img 
            src="https://www.salesleadit.com/wp-content/uploads/2023/12/logo-e1709706643167.png" 
            className="h-8" 
            alt="SalesLeadIT" 
          />
          <Link to="/" className="text-sli-navy font-bold text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>

        <div className="w-full max-w-2xl">
          <div className="mb-12">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-sli-orange' : 'bg-sli-border'}`} />
              ))}
            </div>
            <p className="font-mono text-sli-muted text-[10px] uppercase tracking-widest">Step {step} of 3</p>
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-sans font-extrabold text-4xl text-sli-navy mb-4">Let's get to know your business.</h1>
              <p className="text-sli-body text-lg mb-10">We start every relationship with an audit to ensure we can actually help you grow.</p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-sli-navy uppercase">Business Name</label>
                    <input 
                      className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans"
                      placeholder="e.g. Surrey Landscaping Pros"
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-sli-navy uppercase">Business Category / Niche</label>
                    <input 
                      className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans"
                      placeholder="e.g. Landscaping"
                      onChange={(e) => setFormData({...formData, niche: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-sli-navy uppercase">What is your primary growth goal?</label>
                  <select 
                    className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans appearance-none"
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  >
                    <option value="">Select a goal</option>
                    <option value="leads">More consistent weekly leads</option>
                    <option value="brand">Better local brand presence</option>
                    <option value="automation">Automating follow-ups & inquiries</option>
                    <option value="scale">Scaling to multiple locations</option>
                  </select>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full bg-sli-navy text-white py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 hover:bg-sli-orange transition-all active:scale-[0.98]"
                >
                  Continue to Contact Details
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-sans font-extrabold text-4xl text-sli-navy mb-4">How should we reach you?</h1>
              <p className="text-sli-body text-lg mb-10">We'll reach out to schedule your audit within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-sans font-bold text-xs text-sli-navy uppercase">Full Name</label>
                  <input 
                    className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-sli-navy uppercase">Email Address</label>
                    <input 
                      type="email"
                      className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans"
                      placeholder="john@example.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans font-bold text-xs text-sli-navy uppercase">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full bg-white border border-sli-border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 focus:border-sli-orange outline-none transition-all font-sans"
                      placeholder="604-555-0199"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={prevStep}
                    className="flex-1 border border-sli-border text-sli-navy py-5 rounded-full font-sans font-bold text-lg hover:bg-sli-surface transition-all"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="flex-[2] bg-sli-navy text-white py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 hover:bg-sli-orange transition-all active:scale-[0.98]"
                  >
                    Final Step
                    <Check className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-sans font-extrabold text-4xl text-sli-navy mb-4">Select your path.</h1>
              <p className="text-sli-body text-lg mb-10">Choose the plan that fits your current business stage.</p>
              
              <div className="space-y-4 mb-10">
                <div 
                  onClick={() => setFormData({...formData, plan: 'Standard'})}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.plan === 'Standard' ? 'border-sli-orange bg-[#FFF3ED]' : 'border-sli-border bg-white hover:border-sli-orange/30'}`}
                >
                  <div>
                    <h3 className="font-sans font-bold text-xl text-sli-navy">Standard Plan</h3>
                    <p className="text-sm text-sli-body">Full lead generation system + ads management</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-sli-navy">$999/mo</p>
                    <p className="text-[10px] text-sli-orange font-bold">1ST TIMER RATE</p>
                  </div>
                </div>

                <div 
                  onClick={() => setFormData({...formData, plan: 'Premium'})}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.plan === 'Premium' ? 'border-sli-orange bg-[#FFF3ED]' : 'border-sli-border bg-white hover:border-sli-orange/30'}`}
                >
                  <div>
                    <h3 className="font-sans font-bold text-xl text-sli-navy">Premium Growth</h3>
                    <p className="text-sm text-sli-body">Standard + Social Media + Website Maintenance</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-sli-navy">$1,349/mo</p>
                    <p className="text-[10px] text-sli-muted font-bold">SCALE UP</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={prevStep}
                  className="flex-1 border border-sli-border text-sli-navy py-5 rounded-full font-sans font-bold text-lg hover:bg-sli-surface transition-all"
                >
                  Back
                </button>
                <button 
                  onClick={() => alert('Application sent! (Simulation)')}
                  className="flex-[2] bg-sli-orange text-white py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 hover:bg-sli-orange2 transition-all shadow-xl shadow-sli-orange/20 active:scale-[0.98]"
                >
                  Submit Application
                  <Send className="w-5 h-5" />
                </button>
              </div>

              <p className="text-center text-sli-body text-xs mt-12 font-sans px-12">
                By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>. One of our family members will reach out within 24 hours.
              </p>
            </div>
          )}

          {/* Quick Contact Trust */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-sli-border pt-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sli-surface rounded-full flex items-center justify-center text-sli-navy">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-sli-muted uppercase tracking-wider">Direct Support</p>
                <p className="font-sans font-bold text-sli-navy">1-844-532-3488</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sli-surface rounded-full flex items-center justify-center text-sli-navy">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-sli-muted uppercase tracking-wider">Availability</p>
                <p className="font-sans font-bold text-sli-navy">Audit within 24–48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
