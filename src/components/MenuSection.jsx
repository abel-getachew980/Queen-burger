import { useState } from 'react'
import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

const rawMenuItems = [
  {
    id: 'queen-lava',
    category: 'specialty',
    price: '2,000 ETB',
    isSpecialty: true,
    badge: '🔥 Specialty',
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
    badge: '🌶️ Spicy',
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
    badge: '🥓 Bacon Choice',
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
    badge: '👑 Royal Pick',
    image: '/asset/Food2.jpg',
  },
  {
    id: 'double-queen',
    category: 'burgers',
    price: '1,350 ETB',
    isSpecialty: false,
    badge: '🍔 Double Patty',
    image: '/asset/food3.jpg',
  },
  {
    id: 'philly-cheese',
    category: 'sandwiches',
    price: '900 ETB',
    isSpecialty: false,
    badge: '🥪 Specialty Sandwich',
    image: '/asset/Food.jpg',
  }
]

export default function MenuSection() {
  const [ref, inView] = useInView()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { t } = useLanguage()

  const menuItems = rawMenuItems.map(item => ({
    ...item,
    name: t(`menu.items.${item.id}.name`),
    description: t(`menu.items.${item.id}.desc`),
  }))

  const filteredItems = menuItems.filter(item => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'specialty' && item.isSpecialty) ||
      (activeTab === 'burgers' && item.category === 'burgers') ||
      (activeTab === 'sandwiches' && item.category === 'sandwiches')

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  const specialtyItem = menuItems.find(i => i.isSpecialty)

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <span className="menu-label">{t('menu.label')}</span>
        <h2 className="menu-title">{t('menu.title')}</h2>

        {/* Specialty Feature Banner */}
        {specialtyItem && (
          <div className="specialty-hero-card">
            <div className="specialty-badge-ribbon">
              <span>{t('menu.specialtyRibbon')}</span>
            </div>
            <div className="specialty-hero-content">
              <div className="specialty-info">
                <span className="specialty-fire">{t('menu.signatureCreation')}</span>
                <h3>{specialtyItem.name}</h3>
                <p className="specialty-desc">{specialtyItem.description}</p>
                <div className="specialty-meta">
                  <span className="specialty-price">{specialtyItem.price}</span>
                  <span className="specialty-sides-pill">{t('menu.sidesPill')}</span>
                </div>
              </div>
              <div className="specialty-image-wrapper">
                <img src={specialtyItem.image} alt={specialtyItem.name} />
                <div className="lava-glow"></div>
              </div>
            </div>
          </div>
        )}

        {/* Controls: Search and Filter Tabs */}
        <div className="menu-controls">
          <div className="menu-tabs">
            <button
              className={`menu-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {t('menu.tabAll')} ({menuItems.length})
            </button>
            <button
              className={`menu-tab ${activeTab === 'specialty' ? 'active' : ''}`}
              onClick={() => setActiveTab('specialty')}
            >
              {t('menu.tabSpecialty')}
            </button>
            <button
              className={`menu-tab ${activeTab === 'burgers' ? 'active' : ''}`}
              onClick={() => setActiveTab('burgers')}
            >
              {t('menu.tabBurgers')}
            </button>
            <button
              className={`menu-tab ${activeTab === 'sandwiches' ? 'active' : ''}`}
              onClick={() => setActiveTab('sandwiches')}
            >
              {t('menu.tabSandwiches')}
            </button>
          </div>

          <div className="menu-search">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder={t('menu.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className={`menu-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {filteredItems.map(item => (
            <div key={item.id} className={`menu-card ${item.isSpecialty ? 'specialty-card' : ''}`}>
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                {item.badge && <span className="item-badge">{item.badge}</span>}
              </div>
              <div className="menu-card-body">
                <div className="menu-card-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.description}</p>
                <div className="menu-card-footer">
                  <span className="sides-tag">
                    {t('menu.sidesTag')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-menu-results">
            <p>{t('menu.noResults').replace('{query}', searchQuery)}</p>
            <button onClick={() => { setSearchQuery(''); setActiveTab('all') }}>{t('menu.resetFilters')}</button>
          </div>
        )}
      </div>
    </section>
  )
}
