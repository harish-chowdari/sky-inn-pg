import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import pgEnterance from '../assets/pg-enterance.png'


function Properties() {
  const properties = [
    // {
    //   name: 'Sky Inn Balewadi',
    //   location: 'Laxman Nagar, Baner, Pune, Maharashtra 411045',
    //   description:
    //     'Welcome to Sky Inn Balewadi PG – a newly built premium PG designed for modern, comfortable, and hassle-free living. Our fully furnished rooms are...',
    //   image: 'https://picsum.photos/seed/skyinn-balewadi/600/400',
    //   href: '/sky-inn-balewadi',
    // },
    {
      name: 'Sky Inn Baner',
      location:
        'Flat No 1, Krantisurya Apt, Pan Card Club Rd, Sky Inn Pg Services Road, Baner, Pune, Maharashtra 411045',
      description:
        'Newly built PG with modern amenities, comfortable living spaces, excellent connectivity, and a safe, welcoming environment.',
      image: pgEnterance,
      href: '/sky-inn-baner',
    },
  ]

  return (
    <section className="bg-white py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">

          <div className="text-[#8CC63F] text-xs font-bold tracking-widest mb-2">
            OUR PROPERTIES
          </div>

          <h2 className="text-[#0B1526] font-extrabold text-3xl sm:text-4xl">
            Explore Our Properties
          </h2>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {properties.map((property) => (

            <div
              key={property.href}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >

              {/* Image */}
              <div className="relative h-48">

                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />

                {/* Location */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2 flex items-center gap-1.5">

                  <MapPin
                    size={14}
                    className="text-[#8CC63F] shrink-0"
                  />

                  <span className="text-white text-xs font-medium truncate">
                    {property.location}
                  </span>

                </div>

              </div>


              {/* Content */}
              <div className="p-5">

                <h3 className="text-[#0B1526] font-bold text-lg mb-2">
                  {property.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {property.description}
                </p>

                <div className="h-px bg-gray-100 my-4" />


                {/* VIEW PROPERTY */}
                <Link
                  to={property.href}
                  className="flex items-center gap-2 text-[#0B1526] font-semibold text-sm hover:text-[#8CC63F] transition-colors w-fit"
                >

                  View Property

                  <ArrowRight size={16} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Properties