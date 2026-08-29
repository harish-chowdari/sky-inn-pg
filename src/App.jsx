import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Navbar from './Navbar/Navbar'
import Hero from './Home/Hero'
import Properties from './Properties/Properties'
import Amenities from './Home/Amenities'
import Gallery from './Home/Gallery'
import Contact from './Home/Contact'

import Balewadi from './pages/Balewadi/Balewadi'
import Baner from './pages/Baner/Baner'

import './App.css'
import Footer from './Home/Footer'
import Location from './Location/Location'

function Home() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="properties">
        <Properties />
      </section>

      <section id="amenities">
        <Amenities />
      </section>

      {/* <section id="gallery">
        <Gallery />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

      <section id="amenities">
        <Location />
      </section>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        {/* <Route
          path="/sky-inn-balewadi"
          element={<Balewadi />}
        /> */}

        <Route
          path="/sky-inn-baner"
          element={<Baner />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App