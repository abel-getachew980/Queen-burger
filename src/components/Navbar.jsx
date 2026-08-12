import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#menu', label: t('nav.menu') },
    { href: '#branches', label: t('nav.branches') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">👑 Queen Burger</a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={handleLinkClick}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right-actions">
          <button
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            title={lang === 'en' ? 'Switch to Amharic (አማርኛ)' : 'Switch to English (EN)'}
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
            <span className="lang-divider">|</span>
            <span className={lang === 'am' ? 'active-lang' : ''}>አማርኛ</span>
          </button>

          <button
            className={`hamburger ${open ? 'active' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
