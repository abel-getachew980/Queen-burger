import { useState } from 'react'
import useInView from '../hooks/useInView'

const menuItems = [
  {
    id: 'queen-lava',
    name: 'The Queen Lava Burger',
    category: 'specialty',
    price: '2,000 ETB',
    isSpecialty: true,
    badge: '🔥 Specialty of the House',
    image: '/asset/burger.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'royal-cheese',
    name: 'The Royal Cheese Burger',
    category: 'burgers',
    price: '770 ETB',
    isSpecialty: false,
    image: '/asset/Food.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, ketchup, provolone cheese, pickle served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'majestic-cheese',
    name: 'Majestic Cheese Burger',
    category: 'burgers',
    price: '820 ETB',
    isSpecialty: false,
    image: '/asset/Food2.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, special house sauce, pickle, ketchup, provolone cheese served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'queens-spicy',
    name: "Queen's Spicy Cheese Burger",
    category: 'burgers',
    price: '790 ETB',
    isSpecialty: false,
    badge: '🌶️ Spicy Favorite',
    image: '/asset/food3.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, spicy sauce, pickle, provolone cheese served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'fried-onion',
    name: 'The Fried Onion Delight',
    category: 'burgers',
    price: '790 ETB',
    isSpecialty: false,
    image: '/asset/food4.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'crowned-bacon',
    name: 'Crowned Beef Bacon Cheese Burger',
    category: 'burgers',
    price: '840 ETB',
    isSpecialty: false,
    badge: '🥓 Bacon Choice',
    image: '/asset/Take away.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'smashed-patty',
    name: 'The Queen Smashed Patty Burger',
    category: 'burgers',
    price: '770 ETB',
    isSpecialty: false,
    image: '/asset/food4.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'her-majesty',
    name: 'Her Majesty',
    category: 'burgers',
    price: '880 ETB',
    isSpecialty: false,
    badge: '👑 Royal Pick',
    image: '/asset/Food2.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'double-queen',
    name: 'The Double Queen',
    category: 'burgers',
    price: '1,350 ETB',
    isSpecialty: false,
    badge: '🍔 Double Patty',
    image: '/asset/food3.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  },
  {
    id: 'philly-cheese',
    name: 'Philly Cheese Steak Sandwich',
    category: 'sandwiches',
    price: '900 ETB',
    isSpecialty: false,
    badge: '🥪 Specialty Sandwich',
    image: '/asset/Food.jpg',
    description: 'Well seasoned ground beef patty, butter toasted bun, house sauce, provolone cheese, fried onion ring served with Regular French Fries OR Waffle Fries',
    sides: 'Regular French Fries OR Waffle Fries'
  }
]

export default function MenuSection() {
  const [ref, inView] = useInView()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

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
        <span className="menu-label">Crafted for Royalty</span>
        <h2 className="menu-title">The Royal Menu</h2>

        {/* Specialty Feature Banner */}
        {specialtyItem && (
          <div className="specialty-hero-card">
            <div className="specialty-badge-ribbon">
              <span>👑 SPECIALTY OF THE HOUSE</span>
            </div>
            <div className="specialty-hero-content">
              <div className="specialty-info">
                <span className="specialty-fire">🔥 Signature Creation</span>
                <h3>{specialtyItem.name}</h3>
                <p className="specialty-desc">{specialtyItem.description}</p>
                <div className="specialty-meta">
                  <span className="specialty-price">{specialtyItem.price}</span>
                  <span className="specialty-sides-pill">🍟 Includes Regular French Fries OR Waffle Fries</span>
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
              All Items ({menuItems.length})
            </button>
            <button
              className={`menu-tab ${activeTab === 'specialty' ? 'active' : ''}`}
              onClick={() => setActiveTab('specialty')}
            >
              ⭐ House Specialty
            </button>
            <button
              className={`menu-tab ${activeTab === 'burgers' ? 'active' : ''}`}
              onClick={() => setActiveTab('burgers')}
            >
              🍔 Burgers
            </button>
            <button
              className={`menu-tab ${activeTab === 'sandwiches' ? 'active' : ''}`}
              onClick={() => setActiveTab('sandwiches')}
            >
              🥪 Sandwiches
            </button>
          </div>

          <div className="menu-search">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search burgers, ingredients..."
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
                    🍟 Served with <strong>Regular</strong> or <strong>Waffle Fries</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-menu-results">
            <p>No burgers match "{searchQuery}". Try searching for another keyword!</p>
            <button onClick={() => { setSearchQuery(''); setActiveTab('all') }}>Reset Filters</button>
          </div>
        )}
      </div>
    </section>
  )
}
