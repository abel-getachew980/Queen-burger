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
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.066581470528!2d38.7847491!3d8.9936077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8536972b710d%3A0xab92de41cd96eed4!2sQueen%20Burger%20Addis!5e0!3m2!1sen!2set!4v1786538763311!5m2!1sen!2set',
      mapLink: 'https://maps.app.goo.gl/dRF474ZHTCYwTVpG7',
    },
    {
      name: 'Queen Burger Mekanisa Abo',
      badge: t('branches.mekanisaBranch'),
      image: '/asset/Mekanisa-branch.jpg',
      location: t('branches.mekanisaLocation'),
      phone: t('branches.phone2'),
      phoneLink: 'tel:+251955297777',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.885103297372!2d38.7345016!3d8.9827192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b870000951ba3%3A0x344fdaaa19679714!2sQueen%20Burger%20Mekanisa%20Abo%20Branch!5e0!3m2!1sen!2set!4v1786538924581!5m2!1sen!2set',
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
                <p><MapPin size={16} className="branch-icon" /> {branch.location}</p>
                <p><Phone size={16} className="branch-icon" /> <a href={branch.phoneLink}>{branch.phone}</a></p>
                <div className="branch-map">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={`${branch.name} Map`}
                  />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
