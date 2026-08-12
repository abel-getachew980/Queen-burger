export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src="/asset/aadb7ff94d3e3b00cf6292359f395181.webp"
        alt="Queen Burger"
        className="hero-bg"
      />

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

    </section>
  )
}
