import useInView from '../hooks/useInView'

const branches = [
  {
    name: 'Queen Burger Addis',
    badge: 'Main Branch',
    image: '/asset/aadb7ff94d3e3b00cf6292359f395181.webp',
    location: 'Beside Friendship Hotel, Addis Ababa',
    phone: '0955 909 094',
    phoneLink: 'tel:0955909094',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.066581470528!2d38.7847491!3d8.9936077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8536972b710d%3A0xab92de41cd96eed4!2sQueen%20Burger%20Addis!5e0!3m2!1sen!2set!4v1786538763311!5m2!1sen!2set',
    mapLink: 'https://maps.app.goo.gl/dRF474ZHTCYwTVpG7',
  },
  {
    name: 'Queen Burger Mekanisa Abo',
    badge: 'Mekanisa Abo',
    image: '/asset/Mekanisa branch.jpg',
    location: 'Sarbet, Abo Mazoria Round About',
    phone: '0955 297 777',
    phoneLink: 'tel:0955297777',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.885103297372!2d38.7345016!3d8.9827192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b870000951ba3%3A0x344fdaaa19679714!2sQueen%20Burger%20Mekanisa%20Abo%20Branch!5e0!3m2!1sen!2set!4v1786538924581!5m2!1sen!2set',
    mapLink: 'https://maps.app.goo.gl/1isYrtvXXb7AZT9u5',
  },
]

export default function Branches() {
  const [ref, inView] = useInView()

  return (
    <section className="branches" id="branches">
      <div className="container">
        <span className="branches-label">Find Us</span>
        <h2 className="branches-title">Our Branches</h2>

        <div className={`branches-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {branches.map((branch, i) => (
            <div key={i} className="branch-card">
              <div className="branch-image">
                <img src={branch.image} alt={branch.name} />
                <div className="branch-badge">{branch.badge}</div>
              </div>
              <div className="branch-info">
                <h3>{branch.name}</h3>
                <p>📍 {branch.location}</p>
                <p>📞 <a href={branch.phoneLink}>{branch.phone}</a></p>
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
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
