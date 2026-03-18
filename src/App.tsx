import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Hero from './components/Hero'
import FeatureShowcase from './components/FeatureShowcase'
import QuranSection from './components/QuranSection'
import Journey from './components/Journey'
import GroupKhatma from './components/GroupKhatma'
import Screenshots from './components/Screenshots'
import ZakatShowcase from './components/ZakatShowcase'
import SocialFeatures from './components/SocialFeatures'
import FamilySection from './components/FamilySection'
import CommunityTools from './components/CommunityTools'
import SmartWidgets from './components/SmartWidgets'
import AudioShowcase from './components/AudioShowcase'
import TelegramSection from './components/TelegramSection'
import InteractiveTasbih from './components/InteractiveTasbih'
import Leaderboard from './components/Leaderboard'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
import CountdownSection from './components/CountdownSection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FloatingCTA from './components/FloatingCTA'
import LanguageSwitcher from './components/LanguageSwitcher'
import './index.css'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    if (i18n.language === 'en') {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    } else {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[430px] bg-white shadow-2xl relative flex flex-col min-h-screen">
        <LanguageSwitcher />
        <main className="flex-1 w-full flex flex-col">
          <Hero />
          <FeatureShowcase />
          <QuranSection />
          <Journey />
          <GroupKhatma />
          <TelegramSection />
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
          <CountdownSection />
          <Download />
          <Footer />
        </main>
        <FloatingCTA />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}

export default App
