import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import GetStartedPage from './pages/GetStartedPage.jsx'

// Resource Pages
import HowToGetMoreCustomers from './pages/resources/HowToGetMoreCustomers.jsx'
import LeadGenerationCanada from './pages/resources/LeadGenerationCanada.jsx'
import GoogleAdsSmallBusiness from './pages/resources/GoogleAdsSmallBusiness.jsx'
import LocalSEOCanada from './pages/resources/LocalSEOCanada.jsx'
import SocialMediaMarketing from './pages/resources/SocialMediaMarketing.jsx'
import WebDesignCanada from './pages/resources/WebDesignCanada.jsx'
import LeadGenerationSurrey from './pages/resources/LeadGenerationSurrey.jsx'
import LeadGenerationVancouver from './pages/resources/LeadGenerationVancouver.jsx'
import LeadGenerationToronto from './pages/resources/LeadGenerationToronto.jsx'
import LeadGenerationCalgary from './pages/resources/LeadGenerationCalgary.jsx'
import MarketingAgencySurrey from './pages/resources/MarketingAgencySurrey.jsx'
import SmallBusinessMarketingBC from './pages/resources/SmallBusinessMarketingBC.jsx'
import LeadGenPlumbers from './pages/resources/LeadGenPlumbers.jsx'
import LeadGenElectricians from './pages/resources/LeadGenElectricians.jsx'
import LeadGenCleaning from './pages/resources/LeadGenCleaning.jsx'
import LeadGenRestaurants from './pages/resources/LeadGenRestaurants.jsx'
import LeadGenLandscapers from './pages/resources/LeadGenLandscapers.jsx'
import LeadGenContractors from './pages/resources/LeadGenContractors.jsx'
import LeadGenSalons from './pages/resources/LeadGenSalons.jsx'
import LeadGenRealEstate from './pages/resources/LeadGenRealEstate.jsx'
import AIAutomation from './pages/resources/AIAutomation.jsx'
import ExclusiveVsSharedLeads from './pages/resources/ExclusiveVsSharedLeads.jsx'
import SalesLeadITResults from './pages/resources/SalesLeadITResults.jsx'
import FullFAQ from './pages/resources/FullFAQ.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      
      {/* Resource Routes */}
      <Route path="/resources/how-to-get-more-customers-for-small-business-canada" element={<HowToGetMoreCustomers />} />
      <Route path="/resources/lead-generation-for-small-business-canada" element={<LeadGenerationCanada />} />
      <Route path="/resources/google-ads-for-small-business-canada" element={<GoogleAdsSmallBusiness />} />
      <Route path="/resources/local-seo-for-small-business-canada" element={<LocalSEOCanada />} />
      <Route path="/resources/social-media-marketing-small-business-canada" element={<SocialMediaMarketing />} />
      <Route path="/resources/web-design-for-small-business-canada" element={<WebDesignCanada />} />
      <Route path="/resources/lead-generation-surrey-bc" element={<LeadGenerationSurrey />} />
      <Route path="/resources/lead-generation-vancouver-bc" element={<LeadGenerationVancouver />} />
      <Route path="/resources/lead-generation-toronto-ontario" element={<LeadGenerationToronto />} />
      <Route path="/resources/lead-generation-calgary-alberta" element={<LeadGenerationCalgary />} />
      <Route path="/resources/marketing-agency-surrey-bc" element={<MarketingAgencySurrey />} />
      <Route path="/resources/small-business-marketing-british-columbia" element={<SmallBusinessMarketingBC />} />
      <Route path="/resources/lead-generation-for-plumbers-canada" element={<LeadGenPlumbers />} />
      <Route path="/resources/lead-generation-for-electricians-canada" element={<LeadGenElectricians />} />
      <Route path="/resources/lead-generation-for-cleaning-services-canada" element={<LeadGenCleaning />} />
      <Route path="/resources/lead-generation-for-restaurants-canada" element={<LeadGenRestaurants />} />
      <Route path="/resources/lead-generation-for-landscapers-canada" element={<LeadGenLandscapers />} />
      <Route path="/resources/lead-generation-for-contractors-canada" element={<LeadGenContractors />} />
      <Route path="/resources/lead-generation-for-salons-canada" element={<LeadGenSalons />} />
      <Route path="/resources/lead-generation-for-real-estate-canada" element={<LeadGenRealEstate />} />
      <Route path="/resources/ai-automation-for-small-business-canada" element={<AIAutomation />} />
      <Route path="/resources/exclusive-leads-vs-shared-leads-canada" element={<ExclusiveVsSharedLeads />} />
      <Route path="/resources/salesleadit-results" element={<SalesLeadITResults />} />
      <Route path="/resources/faq" element={<FullFAQ />} />
    </Routes>
  )
}
