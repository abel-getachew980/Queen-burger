import { useEffect } from 'react'
import { Phone, Utensils } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Branches from './components/Branches'
import Reviews from './components/Reviews'
import FollowUs from './components/FollowUs'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'

export default function App() {
  const { lang, t } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className={`app-wrapper lang-${lang}`} lang={lang}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Branches />
        <Reviews />
        <FollowUs />
      </main>
      <Footer />

      {/* Sticky Mobile Quick Action Bar */}
      <div className="mobile-sticky-bar">
        <a href="tel:+251955909094" className="mobile-bar-btn mobile-call-btn">
          <Phone size={16} />
          <span>{t('mobileBar.callUs')}</span>
        </a>
        <a href="#menu" className="mobile-bar-btn mobile-menu-btn">
          <Utensils size={16} />
          <span>{t('mobileBar.viewMenu')}</span>
        </a>
      </div>
    </div>
  )
}
