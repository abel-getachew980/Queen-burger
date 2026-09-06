import { MapPin, Phone, Navigation } from 'lucide-react'
import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

export default function Branches() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()

  const branches = [
    {
      name: 'Queen Burger Addis',
      badge: t('branches.mainBranch'),
      image: '/asset/Int-2.jpg',
      location: t('branches.addisLocation'),
      phone: t('branches.phone1'),
      phoneLink: 'tel:+251955909094',
      mapLink: 'https://maps.app.goo.gl/dRF474ZHTCYwTVpG7',
    },
    {
      name: 'Queen Burger Mekanisa Abo',
      badge: t('branches.mekanisaBranch'),
      image: '/asset/Mekanisa-branch.jpg',
      location: t('branches.mekanisaLocation'),
      phone: t('branches.phone2'),
      phoneLink: 'tel:+251955297777',
      mapLink: 'https://maps.app.goo.gl/1isYrtvXXb7AZT9u5',
    },
  ]

  return (
    <section className="branches" id="branches">
      <div className="container">
        <span className="branches-label">{t('branches.label')}</span>
        <h2 className="branches-title">{t('branches.title')}</h2>

        <div className={`branches-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {branches.map((branch, i) => (
            <div key={i} className="branch-card">
              <div className="branch-image">
                <img src={branch.image} alt={branch.name} />
                <div className="branch-badge">{branch.badge}</div>
              </div>
              <div className="branch-info">
                <h3>{branch.name}</h3>
                <p><MapPin size={16} className="branch-icon" /> <span>{branch.location}</span></p>
                <p><Phone size={16} className="branch-icon" /> <a href={branch.phoneLink}>{branch.phone}</a></p>
                <div className="branch-actions">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn"
                  >
                    <Navigation size={15} />
                    <span>{t('branches.getDirections')}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
