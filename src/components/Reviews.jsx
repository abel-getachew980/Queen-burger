import useInView from '../hooks/useInView'

const reviews = [
  {
    stars: 5,
    text: "Honestly the best burger I've had in Addis. The patty was juicy, the bun was soft and the sauce was 🔥. Coming back every week!",
    name: 'Abebe T.',
    source: 'Google Review',
    avatar: 'A',
  },
  {
    stars: 5,
    text: 'Queen Burger deserves every bit of hype it gets. The ambiance is clean, staff is welcoming, and the food arrives fast and hot. My new go-to spot!',
    name: 'Sara M.',
    source: 'hotspot.et',
    avatar: 'S',
    featured: true,
  },
  {
    stars: 5,
    text: 'Tried the take-away and was blown away by how well the packaging kept everything fresh. Tastes like royalty even at home!',
    name: 'Dawit K.',
    source: 'Google Review',
    avatar: 'D',
  },
  {
    stars: 4,
    text: 'Great location near Friendship Hotel. Loved the crispy fries and the burger combo deal. Will definitely recommend to my friends.',
    name: 'Hanna B.',
    source: 'hotspot.et',
    avatar: 'H',
  },
  {
    stars: 5,
    text: 'The Mekanisa branch is super convenient. Fast service, great flavors, and the interior is really cozy. Highly recommended!',
    name: 'Yonas G.',
    source: 'Google Review',
    avatar: 'Y',
  },
  {
    stars: 5,
    text: "I've been to many burger places in Addis but Queen Burger stands out. Fresh ingredients and the royal treatment every single time.",
    name: 'Liya F.',
    source: 'hotspot.et',
    avatar: 'L',
  },
]

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <span className="reviews-label">What People Say</span>
        <h2 className="reviews-title">Royal Reviews</h2>

        <div className={`reviews-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {reviews.map((review, i) => (
            <div key={i} className={`review-card ${review.featured ? 'review-card-featured' : ''}`}>
              <div className="review-stars">
                {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
              </div>
              <p>{review.text}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a
            href="https://hotspot.et/place/queen-burger-addis-addis-ababa-10029/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Read More Reviews on Hotspot.et
          </a>
        </div>
      </div>
    </section>
  )
}
