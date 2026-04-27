import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import GetStartedPage from './pages/GetStartedPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
    </Routes>
  )
}
