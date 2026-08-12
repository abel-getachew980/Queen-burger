export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay muted loop playsInline
        aria-hidden="true"
      >
        <source src="/asset/60cbe27d5908ec8c9783ec1474f54037.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">Addis Ababa's Finest</p>
        <h1>
          The Royal Taste <span className="hero-crown">👑</span>
        </h1>
        <p className="hero-sub">
          Handcrafted burgers made with premium ingredients,<br />
          served with royal hospitality.
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn-primary">View Menu</a>
          <a href="#branches" className="btn-outline">Find Us</a>
        </div>
        <div className="hero-badges">
          <span>📍 Friendship Hotel</span>
          <span>📍 Mekanisa Abo</span>
          <span>📞 0955 909 094</span>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
