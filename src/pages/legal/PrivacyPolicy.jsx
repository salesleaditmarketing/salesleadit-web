import LegalLayout, { LegalSection } from './LegalLayout.jsx'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy | SalesLeadIT"
      description="How SalesLeadIT collects, uses, and protects your information. We never sell, rent, or share your personal data with anyone."
      canonical="https://salesleadit.com/privacy-policy"
      h1="Privacy Policy"
      lastUpdated="July 15, 2026"
    >
      <p>
        SalesLeadIT ("we", "us", "our") is a family-run lead generation agency based in
        Surrey, British Columbia, Canada. We keep this policy short and honest, because
        that's how we do business. It explains what information we collect through this
        website, what we do with it — and just as importantly, what we will never do with it.
      </p>

      <LegalSection title="1. What We Collect">
        <p>
          The only personal information we collect is what you choose to type into our
          "Get Started" form: your full name, email address, phone number, business name,
          business category, growth goal, and the plan you're interested in. That's it.
          We do not collect anything else about you personally, and we never collect
          payment details through this website.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>
          Your form details are used for one purpose only: so a member of our team can
          contact you to schedule your free leads audit and, if you choose to work with
          us, deliver our services. Your information is stored securely in our private
          internal system and is accessible only to our small team.
        </p>
      </LegalSection>

      <LegalSection title="3. What We Never Do With Your Data">
        <p>
          We do <strong className="text-sli-navy">not</strong> sell, rent, trade, or give
          away your personal information to third parties. Not to advertisers, not to data
          brokers, not to "marketing partners" — no one. Submitting our form will never
          result in your details being passed to anyone outside SalesLeadIT.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies & Analytics">
        <p>
          Like most websites, we use Google Analytics to understand anonymous, aggregate
          traffic — things like which pages are visited and roughly where visitors come
          from. This does not identify you personally, and we do not connect analytics
          data to your form submission. You can block analytics cookies in your browser
          at any time and the site will work just fine.
        </p>
      </LegalSection>

      <LegalSection title="5. How Long We Keep It & Your Rights">
        <p>
          We keep your contact details only as long as needed to follow up with you or
          serve you as a client. In line with Canadian privacy law (PIPEDA), you can ask
          us at any time to show you what information we hold about you, correct it, or
          delete it completely — just call or email us and we'll take care of it promptly.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact Us">
        <p>
          Questions about this policy or your data? Call us at{' '}
          <strong className="text-sli-navy">1-844-532-3488</strong> — you'll reach a real
          member of our family team.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
