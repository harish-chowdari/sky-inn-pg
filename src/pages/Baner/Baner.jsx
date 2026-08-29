import BanerNavbar from './BanerNavbar'
import BanerHero from './BanerHero'
import BanerAbout from './BanerAbout'
import BanerRooms from './BanerRooms'
import BanerAmenities from './BanerAmenities'
import BanerGallery from './BanerGallery'
import BanerContact from './BanerContact'
import BanerLocation from './BanerLocation'
import BanerFooter from './BanerFooter'

function Baner() { 
  return ( 
    <div>

      {/* PROPERTY NAVBAR */}
      <BanerNavbar />

      {/* HERO */}
      <section id="home">
        <BanerHero />
      </section>

      {/* ABOUT THIS PROPERTY */}
      <section id="about">
        <BanerAbout />
      </section>

      {/* AVAILABLE ROOM TYPES */}
      <section id="rooms">
        <BanerRooms />
      </section>

      {/* PROPERTY AMENITIES */}
      <section id="amenities">
        <BanerAmenities />
      </section>

      {/* PROPERTY GALLERY */}
      <section id="gallery">
        <BanerGallery />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <BanerContact />
      </section>

      <section id="location">
        <BanerLocation />
      </section>

      <BanerFooter />

    </div>
  )
}

export default Baner