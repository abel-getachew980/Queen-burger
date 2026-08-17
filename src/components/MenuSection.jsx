import { useState } from 'react'
import { Crown, Flame, Utensils } from 'lucide-react'
import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import BurgerModal from './BurgerModal'

const rawMenuItems = [
  {
    id: 'queen-lava',
    category: 'specialty',
    price: '2,000 ETB',
    isSpecialty: true,
    image: '/asset/burger.jpg',
  },
  {
    id: 'royal-cheese',
    category: 'burgers',
    price: '770 ETB',
    isSpecialty: false,
    image: '/asset/Food.jpg',
  },
  {
    id: 'majestic-cheese',
    category: 'burgers',
    price: '820 ETB',
    isSpecialty: false,
    image: '/asset/Food2.jpg',
  },
  {
    id: 'queens-spicy',
    category: 'burgers',
    price: '790 ETB',
    isSpecialty: false,
    image: '/asset/food3.jpg',
  },
  {
    id: 'fried-onion',
    category: 'burgers',
    price: '790 ETB',
    isSpecialty: false,
    image: '/asset/food4.jpg',
  },
  {
    id: 'crowned-bacon',
    category: 'burgers',
    price: '840 ETB',
    isSpecialty: false,
    image: '/asset/Take-away.jpg',
  },
  {
    id: 'smashed-patty',
    category: 'burgers',
    price: '770 ETB',
    isSpecialty: false,
    image: '/asset/food4.jpg',
  },
  {
    id: 'her-majesty',
    category: 'burgers',
    price: '880 ETB',
    isSpecialty: false,
    image: '/asset/Food2.jpg',
  },
  {
    id: 'double-queen',
    category: 'burgers',
    price: '1,350 ETB',
    isSpecialty: false,
    image: '/asset/food3.jpg',
  },
  {
    id: 'philly-cheese',
    category: 'sandwiches',
    price: '900 ETB',
    isSpecialty: false,
    image: '/asset/Food.jpg',
  }
]

// Category config with decoration images
const categoryConfig = [
  {
    key: 'specialty',
    labelKey: 'menu.catSpecialty',
    icon: Crown,
    decorImage: '/asset/menu-burger-decor.jpg',
    decorPosition: 'left',
    decorRotate: -4,
  },
  {
    key: 'burgers',
    labelKey: 'menu.catBurgers',
    icon: Flame,
    decorImage: '/asset/Food2.jpg',
    decorPosition: 'right',
    decorRotate: 3,
  },
  {
    key: 'sandwiches',
    labelKey: 'menu.catSandwiches',
    icon: Utensils,
    decorImage: '/asset/menu-sandwich-decor.jpg',
    decorPosition: 'left',
    decorRotate: -3,
  },
]

function WavyDivider() {
  return (
    <div className="classic-menu-divider" aria-hidden="true">
      <svg viewBox="0 0 600 20" preserveAspectRatio="none">
        <path
          d="M0 10 Q 15 0, 30 10 Q 45 20, 60 10 Q 75 0, 90 10 Q 105 20, 120 10 Q 135 0, 150 10 Q 165 20, 180 10 Q 195 0, 210 10 Q 225 20, 240 10 Q 255 0, 270 10 Q 285 20, 300 10 Q 315 0, 330 10 Q 345 20, 360 10 Q 375 0, 390 10 Q 405 20, 420 10 Q 435 0, 450 10 Q 465 20, 480 10 Q 495 0, 510 10 Q 525 20, 540 10 Q 555 0, 570 10 Q 585 20, 600 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

export default function MenuSection() {
  const [ref, inView] = useInView()
  const [selectedItem, setSelectedItem] = useState(null)
  const { t } = useLanguage()

  const menuItems = rawMenuItems.map(item => ({
    ...item,
    name: t(`menu.items.${item.id}.name`),
    description: t(`menu.items.${item.id}.desc`),
  }))

  // Group items by category
  const groupedItems = categoryConfig.map(cat => ({
    ...cat,
    label: t(cat.labelKey),
    items: menuItems.filter(item => item.category === cat.key),
  })).filter(group => group.items.length > 0)

  const navLinks = [
    { href: '#hero', label: t('nav.about').replace('About', 'Home') || 'Home' },
    { href: '#branches', label: t('nav.branches') },
    { href: '#about', label: t('nav.about') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <section className="menu-section classic-menu" id="menu" ref={ref}>
      <div className="container">
        <div className="classic-menu-layout">
        {/* Left Sidebar */}
        <aside className="classic-menu-sidebar">
          <nav className="classic-menu-nav" aria-label="Menu navigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="classic-menu-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="classic-menu-sidebar-photo sidebar-photo-1">
            <img src="/asset/menu-drink-decor.jpg" alt="Refreshing drink" />
          </div>
        </aside>

        {/* Right Content: Menu Listing */}
        <div className={`classic-menu-content ${inView ? 'visible' : ''}`}>
          <h2 className="classic-menu-main-title">{t('menu.title')}</h2>

          {groupedItems.map((group, idx) => {
            const Icon = group.icon
            return (
              <div key={group.key} className="classic-menu-category">
                {/* Category Header with photo */}
                <div className={`classic-category-header decor-${group.decorPosition}`}>
                  <div className="classic-category-photo-wrapper" style={{ '--rotate': `${group.decorRotate}deg` }}>
                    <img src={group.decorImage} alt={group.label} />
                  </div>
                  <div className="classic-category-title-area">
                    <h3 className="classic-category-title">
                      <Icon size={22} className="classic-category-icon" />
                      {group.label}
                    </h3>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="classic-menu-items">
                  {group.items.map(item => (
                    <button
                      key={item.id}
                      className="classic-menu-item-row"
                      onClick={() => setSelectedItem(item)}
                      type="button"
                    >
                      <span className="classic-item-name">{item.name}</span>
                      <span className="classic-item-dots" aria-hidden="true"></span>
                      <span className="classic-item-price">{item.price}</span>
                    </button>
                  ))}
                </div>

                {/* Wavy Divider (except after last) */}
                {idx < groupedItems.length - 1 && <WavyDivider />}
              </div>
            )
          })}

          <p className="classic-menu-footer-note">
            {t('menu.sidesTag')}
          </p>
        </div>
      </div>
    </div>

      {/* Interactive Customizer Modal */}
      {selectedItem && (
        <BurgerModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  )
}
