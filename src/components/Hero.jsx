import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <img
        src="/asset/aadb7ff94d3e3b00cf6292359f395181.webp"
        alt="Queen Burger"
        className="hero-bg"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <h1>
          {t('hero.title')}
        </h1>
        <p className="hero-sub">
          {t('hero.sub')}
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn-primary">{t('hero.btnMenu')}</a>
          <a href="#branches" className="btn-outline">{t('hero.btnBranches')}</a>
        </div>
        <div className="hero-badges">
          <span>{t('hero.badgeFriendship')}</span>
          <span>{t('hero.badgeMekanisa')}</span>
          <span>{t('hero.phone')}</span>
        </div>
      </div>
    </section>
  )
}
