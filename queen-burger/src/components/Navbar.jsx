import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#menu', label: 'Menu' },
  { href: '#branches', label: 'Branches' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

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

        <button
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
