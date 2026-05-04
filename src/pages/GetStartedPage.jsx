import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowLeft, Phone, Calendar, Send } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import logo from '../assets/sales-lead-it-logo.png'

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
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // SEO Meta Tags
    document.title = "Get a Free Leads Audit | SalesLeadIT — Small Business Lead Generation Canada"
    
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", "Book your free 15-minute leads audit with SalesLeadIT. We'll show you exactly where new customers are hiding in your market. No obligation. Surrey, BC. Canada-wide.")
    } else {
      metaDesc = document.createElement('meta')
      metaDesc.name = "description"
      metaDesc.content = "Book your free 15-minute leads audit with SalesLeadIT. We'll show you exactly where new customers are hiding in your market. No obligation. Surrey, BC. Canada-wide."
      document.head.appendChild(metaDesc)
    }
    
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (linkCanonical) {
      linkCanonical.setAttribute("href", "https://salesleadit.com/get-started")
    } else {
      linkCanonical = document.createElement('link')
      linkCanonical.rel = "canonical"
      linkCanonical.href = "https://salesleadit.com/get-started"
      document.head.appendChild(linkCanonical)
    }
  }, [])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field as soon as they type
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.businessName || formData.businessName.length < 2) newErrors.businessName = "Business name must be at least 2 characters."
    if (!formData.niche || formData.niche.length < 2) newErrors.niche = "Category must be at least 2 characters."
    if (!formData.goal) newErrors.goal = "Please select a growth goal."
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.name || formData.name.length < 2) newErrors.name = "Full name must be at least 2 characters."
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address."
    
    const phoneRegex = /^[\d\s\-()+]{10,}$/
    if (!formData.phone || !phoneRegex.test(formData.phone)) newErrors.phone = "Please enter a valid phone number (min 10 digits)."
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!formData.plan) newErrors.plan = "Please select a plan to continue."
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }
  
  const prevStep = () => setStep(s => s - 1)

  const handleSubmit = async () => {
    if (!validateStep3()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: formData.businessName,
          businessCategory: formData.niche,
          growthGoal: formData.goal,
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedPlan: formData.plan
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSuccess(true)
      } else {
        setSubmitError("Something went wrong. Please try again or call us directly at 1-844-532-3488.")
      }
    } catch (err) {
      setSubmitError("Something went wrong. Please try again or call us directly at 1-844-532-3488.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-sli-bg flex flex-col lg:flex-row">
      
      {/* Left Sidebar — Social Proof */}
      <div className="hidden lg:flex lg:w-[400px] bg-sli-navy p-12 flex-col justify-between fixed h-full overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center mb-20 group">
            <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-sli-orange group-hover:-translate-x-1 transition-all mr-2" />
            <img 
              src={logo}
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
            src={logo}
            className="h-8" 
            alt="SalesLeadIT" 
          />
          <Link to="/" className="text-sli-navy font-bold text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>

        <div className="w-full max-w-2xl">
          {isSuccess ? (
            // SUCCESS STATE
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="font-sans font-extrabold text-4xl text-sli-navy mb-4">You're in. We'll be in touch.</h2>
              <p className="text-sli-body text-lg mb-12 max-w-lg leading-relaxed">
                Your audit request has been received. One of our family team members will reach out within 24 hours to schedule your free 15-minute leads audit. Check your email at <strong className="text-sli-navy">{formData.email}</strong> for confirmation.
              </p>
            </div>
          ) : (
            // FORM STATE
            <>
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
                          className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans ${errors.businessName ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                          placeholder="e.g. Surrey Landscaping Pros"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                        />
                        {errors.businessName && <p className="font-sans text-red-500 text-sm mt-1">{errors.businessName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-sans font-bold text-xs text-sli-navy uppercase">Business Category / Niche</label>
                        <input 
                          className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans ${errors.niche ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                          placeholder="e.g. Landscaping"
                          value={formData.niche}
                          onChange={(e) => handleInputChange('niche', e.target.value)}
                        />
                        {errors.niche && <p className="font-sans text-red-500 text-sm mt-1">{errors.niche}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-sans font-bold text-xs text-sli-navy uppercase">What is your primary growth goal?</label>
                      <select 
                        className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans appearance-none ${errors.goal ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                        value={formData.goal}
                        onChange={(e) => handleInputChange('goal', e.target.value)}
                      >
                        <option value="">Select a goal</option>
                        <option value="Get more local customers">Get more local customers</option>
                        <option value="Run Google or Facebook Ads">Run Google or Facebook Ads</option>
                        <option value="Build or improve my website">Build or improve my website</option>
                        <option value="Grow my social media">Grow my social media</option>
                        <option value="Full lead generation system">Full lead generation system</option>
                        <option value="I'm not sure yet — help me decide">I'm not sure yet — help me decide</option>
                      </select>
                      {errors.goal && <p className="font-sans text-red-500 text-sm mt-1">{errors.goal}</p>}
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
                        className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                      {errors.name && <p className="font-sans text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-sans font-bold text-xs text-sli-navy uppercase">Email Address</label>
                        <input 
                          type="email"
                          className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                        {errors.email && <p className="font-sans text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-sans font-bold text-xs text-sli-navy uppercase">Phone Number</label>
                        <input 
                          type="tel"
                          className={`w-full bg-white border rounded-xl px-6 py-4 focus:ring-2 focus:ring-sli-orange/20 outline-none transition-all font-sans ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-sli-border focus:border-sli-orange'}`}
                          placeholder="604-555-0199"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                        {errors.phone && <p className="font-sans text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                  
                  {submitError && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm font-sans">
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <div 
                      onClick={() => handleInputChange('plan', 'Standard')}
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
                      onClick={() => handleInputChange('plan', 'Premium')}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.plan === 'Premium' ? 'border-sli-orange bg-[#FFF3ED]' : 'border-sli-border bg-white hover:border-sli-orange/30'}`}
                    >
                      <div>
                        <h3 className="font-sans font-bold text-xl text-sli-navy">Premium Growth</h3>
                        <p className="text-sm text-sli-body">Standard + Social Media + Website Maintenance</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-bold text-sli-navy">$2,499/mo</p>
                        <p className="text-[10px] text-sli-muted font-bold">SCALE UP</p>
                      </div>
                    </div>
                    {errors.plan && <p className="font-sans text-red-500 text-sm mt-1 text-center">{errors.plan}</p>}
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="flex-1 border border-sli-border text-sli-navy py-5 rounded-full font-sans font-bold text-lg hover:bg-sli-surface transition-all disabled:opacity-50"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-[2] bg-sli-orange text-white py-5 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 hover:bg-sli-orange2 transition-all shadow-xl shadow-sli-orange/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-sli-body text-xs mt-12 font-sans px-12">
                    By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>. One of our family members will reach out within 24 hours.
                  </p>
                </div>
              )}
            </>
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
