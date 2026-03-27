import { useTranslation } from 'react-i18next'
import { useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import FeatureShowcase from './components/FeatureShowcase'
import SunnahOfTheDay from './components/SunnahOfTheDay'
import QuranSection from './components/QuranSection'
import LanguageSwitcher from './components/LanguageSwitcher'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FloatingCTA from './components/FloatingCTA'
import './index.css'

// Lazy loaded components
const Journey = lazy(() => import('./components/Journey'));
const GroupKhatma = lazy(() => import('./components/GroupKhatma'));
const TelegramSection = lazy(() => import('./components/TelegramSection'));
const ZakatShowcase = lazy(() => import('./components/ZakatShowcase'));
const Screenshots = lazy(() => import('./components/Screenshots'));
const SocialFeatures = lazy(() => import('./components/SocialFeatures'));
const FamilySection = lazy(() => import('./components/FamilySection'));
const CommunityTools = lazy(() => import('./components/CommunityTools'));
const SmartWidgets = lazy(() => import('./components/SmartWidgets'));
const AudioShowcase = lazy(() => import('./components/AudioShowcase'));
const InteractiveTasbih = lazy(() => import('./components/InteractiveTasbih'));
const Leaderboard = lazy(() => import('./components/Leaderboard'));
const Statistics = lazy(() => import('./components/Statistics'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Download = lazy(() => import('./components/Download'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const SectionLoader = () => (
  <div className="w-full h-24 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <SunnahOfTheDay />
          <FeatureShowcase />
          <QuranSection />
          <Suspense fallback={<SectionLoader />}>
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
            <Download />
            <Footer />
          </Suspense>

        </main>
        <FloatingCTA />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}

export default App
