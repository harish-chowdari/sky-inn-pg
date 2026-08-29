import BalewadiNavbar from './BalewadiNavbar'
import BalewadiHero from './BalewadiHero'
import BalewadiAbout from './BalewadiAbout'
import BalewadiRooms from './BalewadiRooms'
import BalewadiAmenities from './BalewadiAmenities'
import BalewadiGallery from './BalewadiGallery'
import BalewadiContact from './BalewadiContact'
import BalewadiFooter from './BalewadiFooter'

function Balewadi() {
  return (
    <div>

      {/* PROPERTY NAVBAR */}
      <BalewadiNavbar />

      {/* HERO */}
      <section id="home">
        <BalewadiHero />
      </section>

      {/* ABOUT THIS PROPERTY */}
      <section id="about">
        <BalewadiAbout />
      </section>

      {/* AVAILABLE ROOM TYPES */}
      <section id="rooms">
        <BalewadiRooms />
      </section>

      {/* PROPERTY AMENITIES */}
      <section id="amenities">
        <BalewadiAmenities />
      </section>

      {/* PROPERTY GALLERY */}
      <section id="gallery">
        <BalewadiGallery />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <BalewadiContact />
      </section>

      <BalewadiFooter />

    </div>
  )
}

export default Balewadi