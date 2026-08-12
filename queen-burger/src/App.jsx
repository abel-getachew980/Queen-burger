import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import MenuSection from './components/MenuSection'
import Branches from './components/Branches'
import Reviews from './components/Reviews'
import FollowUs from './components/FollowUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MenuSection />
        <Branches />
        <Reviews />
        <FollowUs />
      </main>
      <Footer />
    </>
  )
}
