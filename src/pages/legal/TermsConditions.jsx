import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection } from './LegalLayout.jsx'

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions | SalesLeadIT"
      description="The simple, plain-English terms for using the SalesLeadIT website and services."
      canonical="https://salesleadit.com/terms-and-conditions"
      h1="Terms & Conditions"
      lastUpdated="July 15, 2026"
    >
      <p>
        Welcome to SalesLeadIT. These terms are written in plain English because we
        believe agreements should be understood, not just signed. By using this website
        or submitting our form, you agree to the terms below.
      </p>

      <LegalSection title="1. Who We Are">
        <p>
          SalesLeadIT is a lead generation and digital marketing agency based in Surrey,
          British Columbia, serving small businesses across Canada. Our services include
          lead generation, Google & Meta ads management, local SEO, web design, social
          media growth, and AI automation.
        </p>
      </LegalSection>

      <LegalSection title="2. The Get Started Form & Free Audit">
        <p>
          When you submit our form, you're asking us to contact you about a free,
          no-obligation leads audit. You agree to provide accurate information and
          consent to us reaching out by phone or email to schedule it. The free audit
          does not commit you to purchasing anything. How we handle your details is
          covered in our{' '}
          <Link to="/privacy-policy" className="text-sli-orange underline hover:text-orange-600">
            Privacy Policy
          </Link>{' '}
          — in short: they stay with us and are never sold or shared.
        </p>
      </LegalSection>

      <LegalSection title="3. Plans & Payments">
        <p>
          Our service plans and pricing are described on this website. Plans are billed
          monthly, and pricing details are confirmed with you directly before any work
          begins or any payment is taken. We do not process payments through this
          website. You may cancel your plan as agreed in your service arrangement with us.
        </p>
      </LegalSection>

      <LegalSection title="4. Results">
        <p>
          We work hard to bring you real, exclusive leads, and our track record speaks
          for itself — but marketing outcomes depend on many factors, including your
          market, industry, and how quickly leads are followed up. We therefore can't
          guarantee a specific number of leads, customers, or revenue.
        </p>
      </LegalSection>

      <LegalSection title="5. Website Content">
        <p>
          All content on this website — text, design, logos, and graphics — belongs to
          SalesLeadIT and may not be copied or reused for commercial purposes without our
          permission. The information on this site is provided for general guidance and
          is not professional legal or financial advice.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, SalesLeadIT is not liable for indirect
          or consequential losses arising from the use of this website. Our total
          liability in connection with our services is limited to the amount you have
          paid us for those services.
        </p>
      </LegalSection>

      <LegalSection title="7. Governing Law & Changes">
        <p>
          These terms are governed by the laws of British Columbia, Canada. We may update
          these terms from time to time; the "Last updated" date above will always tell
          you when. Continued use of the site after changes means you accept the updated
          terms.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          Questions? Call us at <strong className="text-sli-navy">1-844-532-3488</strong>.
          A real person will pick up.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
