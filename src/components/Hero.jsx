import { Crown, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <img
        src="/asset/hero.webp"
        alt="Queen Burger"
        className="hero-bg"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1>
          {t('hero.title')} <Crown className="hero-crown-icon" size={42} />
        </h1>
        <p className="hero-sub">
          {t('hero.sub')}
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn-primary">{t('hero.btnMenu')}</a>
          <a href="#branches" className="btn-outline">{t('hero.btnBranches')}</a>
        </div>
        <div className="hero-badges">
          <span><MapPin size={15} /> {t('hero.badgeFriendship')}</span>
          <span><MapPin size={15} /> {t('hero.badgeMekanisa')}</span>
          <a href="tel:+251955909094" className="hero-phone-badge">
            <Phone size={15} /> {t('hero.phone')}
          </a>
        </div>
      </div>
    </section>
  )
}
