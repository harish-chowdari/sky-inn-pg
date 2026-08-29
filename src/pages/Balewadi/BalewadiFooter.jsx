import React from 'react'
import { Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function BalewadiFooter() {

  const properties = [
    {
      name: 'Sky Inn Balewadi',
      href: '/sky-inn-balewadi',
    },
    {
      name: 'Sky Inn Baner',
      href: '/sky-inn-baner',
    },
  ]

  const quickLinks = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Amenities',
      href: '#amenities',
    },
    {
      name: 'Gallery',
      href: '#gallery',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  return (
    <footer className="bg-[#0B1526] w-full">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* LOGO + TAGLINE */}

          <div className="lg:pr-6">

            <Link
              to="/"
              className="flex flex-col leading-none w-fit"
            >
              <span className="text-white font-extrabold text-xl sm:text-2xl tracking-wide">
                Sky Inn
              </span>

              <svg
                viewBox="0 0 100 12"
                className="w-full h-2 -mt-0.5"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10 Q50 -4 98 10"
                  stroke="#A6CE39"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs">
              Elevating PG living with premium amenities, unbeatable comfort,
              and vibrant communities across Pune.
            </p>

          </div>


          {/* PROPERTIES */}

          <div>

            <div className="text-white font-bold text-base mb-4">
              Properties
            </div>

            <div className="flex flex-col gap-3">

              {properties.map((property) => (
                <Link
                  key={property.href}
                  to={property.href}
                  className="text-gray-400 text-sm hover:text-[#A6CE39] transition-colors w-fit"
                >
                  {property.name}
                </Link>
              ))}

            </div>

          </div>


          {/* QUICK LINKS */}

          <div>

            <div className="text-white font-bold text-base mb-4">
              Quick Links
            </div>

            <div className="flex flex-col gap-3">

              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#A6CE39] transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>


          {/* CONNECT */}

          <div>

            <div className="text-white font-bold text-base mb-4">
              Connect
            </div>

            <div className="flex flex-col gap-3">

              <a
                href="tel:+919112233977"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#A6CE39] transition-colors w-fit"
              >
                <Phone
                  size={15}
                  className="text-[#A6CE39] shrink-0"
                />

                +91 9112233977
              </a>

              <a
                href="tel:+919112233977"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#A6CE39] transition-colors w-fit"
              >
                <Phone
                  size={15}
                  className="text-[#A6CE39] shrink-0"
                />

                +91 9112233977
              </a>

              <div className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">

                <MapPin
                  size={15}
                  className="text-[#A6CE39] shrink-0"
                />

                <span>
                  {/* PUT YOUR BALEWADI ADDRESS HERE */}
                  Sky Inn Balewadi, Balewadi, Pune, Maharashtra 411045
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM BAR */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sky Inn PG. All rights reserved.
          </div>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy-policy"
              className="text-gray-400 text-sm hover:text-[#A6CE39] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="text-gray-400 text-sm hover:text-[#A6CE39] transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default BalewadiFooter