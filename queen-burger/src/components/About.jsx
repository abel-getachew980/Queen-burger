import useInView from '../hooks/useInView'

const stats = [
  { value: '2+', label: 'Branches' },
  { value: '50+', label: 'Menu Items' },
  { value: '1000+', label: 'Happy Guests/Day' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className="about" id="about">
      <div className={`container about-grid ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="about-media">
          <video autoPlay muted loop playsInline className="about-video">
            <source src="/asset/86e97ca2314850808effb680a7a59dbb.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="about-text">
          <span className="section-label">Our Story</span>
          <h2>Born to Reign<br />the Burger Scene</h2>
          <p>
            Queen Burger was built on one simple belief — that a great burger deserves
            the best ingredients, the perfect cook, and a space where you feel like royalty.
          </p>
          <p>
            From our signature smash patties to our house-made sauces, every detail
            on your plate is crafted with passion. Come hungry. Leave crowned.
          </p>

          <div className="about-stats">
            {stats.map(({ value, label }) => (
              <div className="about-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
