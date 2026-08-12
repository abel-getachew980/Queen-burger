import useInView from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()

  return (
    <section className="about" id="about">
      <div className={`container about-grid ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="about-media">
          <video autoPlay muted loop playsInline className="about-video">
            <source src="/asset/86e97ca2314850808effb680a7a59dbb.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="about-text">
          <span className="section-label">{t('about.label')}</span>
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
    </section>
  )
}
