import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

const socials = [
  {
    name: 'Instagram',
    handle: '@queen_burger_251',
    url: 'https://www.instagram.com/queen_burger_251?igsh=Mnh0aGVrZ3c1aGN1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    className: 'social-card-instagram',
  },
  {
    name: 'TikTok',
    handle: '@queenburger251',
    url: 'https://www.tiktok.com/@queenburger251?is_from_webapp=1&sender_device=pc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
    className: 'social-card-tiktok',
  },
]

export default function FollowUs() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()

  return (
    <section className="social-section" id="contact">
      <div className="container">
        <span className="social-label">{t('social.label')}</span>
        <h2 className="social-title">{t('social.title')}</h2>
        <p className="social-sub">
          {t('social.sub')}
        </p>

        <div className={`social-cards ${inView ? 'visible' : ''}`} ref={ref}>
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${social.className}`}
            >
              <div className="social-icon">{social.icon}</div>
              <div className="social-info">
                <strong>{social.name}</strong>
                <span>{social.handle}</span>
              </div>
              <span className="social-follow-btn">{t('social.follow')}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
