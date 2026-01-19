import Hero from './components/Hero'
import Features from './components/Features'
import Journey from './components/Journey'
import GroupKhatma from './components/GroupKhatma'
import Screenshots from './components/Screenshots'
import ZakatShowcase from './components/ZakatShowcase'
import SocialFeatures from './components/SocialFeatures'
import FamilySection from './components/FamilySection'
import CommunityTools from './components/CommunityTools'
import SmartWidgets from './components/SmartWidgets'
import AudioShowcase from './components/AudioShowcase'
import InteractiveTasbih from './components/InteractiveTasbih'
import Leaderboard from './components/Leaderboard'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import './index.css'

function App() {
  return (
    <div className="min-h-screen font-arabic" dir="rtl">
      <Hero />
      <Features />
      <Journey />
      <GroupKhatma />
      <ZakatShowcase />
      <Screenshots />
      <SocialFeatures />
      <FamilySection />
      <CommunityTools />
      <SmartWidgets />
      <AudioShowcase />
      <InteractiveTasbih />
      <Leaderboard />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Download />
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
