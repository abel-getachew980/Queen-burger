import useInView from '../hooks/useInView'

const images = [
  { src: '/asset/Food.jpg', alt: 'Food', className: 'gallery-item-tall' },
  { src: '/asset/Food2.jpg', alt: 'Food 2' },
  { src: '/asset/food3.jpg', alt: 'Food 3' },
  { src: '/asset/food4.jpg', alt: 'Food 4', className: 'gallery-item-wide' },
  { src: '/asset/burger.jpg', alt: 'Burger' },
  { src: '/asset/Take away.jpg', alt: 'Take Away' },
  { src: '/asset/int.jpg', alt: 'Interior' },
  { src: '/asset/Int 2.jpg', alt: 'Interior 2' },
]

export default function Gallery() {
  const [ref, inView] = useInView()

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <span className="gallery-label">Visual Feast</span>
        <h2 className="gallery-title">Food Worth Staring At</h2>
      </div>

      <div className={`gallery-grid ${inView ? 'visible' : ''}`} ref={ref}>
        {images.map((img, i) => (
          <div key={i} className={`gallery-item ${img.className || ''}`}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
