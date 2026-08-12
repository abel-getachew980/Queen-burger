import useInView from '../hooks/useInView'

export default function MenuSection() {
  const [ref, inView] = useInView()

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <span className="menu-label">What We Serve</span>
        <h2 className="menu-title">The Royal Menu</h2>

        <div className={`menu-showcase ${inView ? 'visible' : ''}`} ref={ref}>
          <div className="menu-image">
            <img src="/asset/Menu.jpg" alt="Queen Burger Menu" />
          </div>
          <div className="menu-video">
            <video autoPlay muted loop playsInline>
              <source src="/asset/87ba63c7b88cb164f721bccae0df0961.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <p className="menu-note">
          Visit us in-branch or call ahead to explore our full menu and daily specials.
        </p>
      </div>
    </section>
  )
}
