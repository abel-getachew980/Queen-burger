import useInView from '../hooks/useInView'

const reviews = [
  {
    name: 'Amanuel Gezahegn',
    badge: 'Local Guide · 36 reviews · 86 photos',
    date: '2 months ago',
    stars: 5,
    text: "We tried; Majestic Cheese Burger and Her Majesty (left to right). The Majestic Cheese Burger is very juicy and more delicious than Her Majesty. If you're up to juicy one go for the first one but if you like well maintained one go for the second one. They both teast wonderful but the french fries is a joke, very thin. Price is the same as the menu posted here. Quantity wise little bit small but not that much small though.",
    avatar: 'A',
    source: 'Google Maps Review',
  },
  {
    name: 'Nuhamin Abera',
    badge: 'Local Guide · 20 reviews · 252 photos',
    date: '5 months ago',
    stars: 5,
    text: "I visited with my siblings and had such an amazing experience! The food was full of flavor, perfectly seasoned, with a soft bun, crispy chips, and delicious sauces. The space is a bit small, but the waiters are attentive and the food doesn’t take long to arrive. I might even crown this as one of my favorite burger spots to cool down a craving👸",
    avatar: 'N',
    source: 'Google Maps Review',
    featured: true,
  },
  {
    name: 'Daniel Namir',
    badge: 'Local Guide · 7 reviews · 1 photo',
    date: 'a month ago',
    stars: 5,
    text: "I've eaten here three times now, and the Majestic Cheeseburger is honestly one of the best burgers I've had. It's juicy, flavorful, and the kind of burger that has you thinking about it on the drive home and looking forward to the next time you can have it.\n\nThe first time I came alone, and after that I brought family and friends because I wanted them to try it too. Everyone's reaction was positive, and it's become one of my favorite burger spots.\n\nOne thing to keep in mind is that the place gets busy with takeaway and delivery orders, so there can be a bit of a wait for food. If you're in a hurry, it might be worth ordering ahead. That said, the quality of the food makes the wait completely worth it.\n\nHighly recommended.",
    avatar: 'D',
    source: 'Google Maps Review',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <span className="reviews-label">Real Customer Feedback</span>
        <h2 className="reviews-title">Reviews from Google Maps</h2>

        <div className={`reviews-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {reviews.map((review, i) => (
            <div key={i} className={`review-card ${review.featured ? 'review-card-featured' : ''}`}>
              <div className="review-card-top">
                <div className="review-badge-google">
                  <svg className="google-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>{review.source}</span>
                </div>
                <span className="review-date">{review.date}</span>
              </div>

              <div className="review-stars">
                {'★'.repeat(review.stars)}
              </div>

              <div className="review-body">
                {review.text.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>"{paragraph}"</p>
                ))}
              </div>

              <div className="reviewer">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div className="reviewer-meta">
                  <strong>{review.name}</strong>
                  <span className="reviewer-guide">{review.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href="https://maps.app.goo.gl/dRF474ZHTCYwTVpG7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📍 Read More Reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
