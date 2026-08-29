import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Properties from './Properties/Properties'
import Amenities from './Amenities/Amenities'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'

import Balewadi from './pages/Balewadi/Balewadi'
import Baner from './pages/Baner/Baner'

import './App.css'
import Footer from './Footer/Footer'

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

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
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