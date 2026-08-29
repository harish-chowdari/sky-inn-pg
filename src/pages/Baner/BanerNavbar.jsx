import React, { useState, useEffect } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Calendar,
  Menu,
  X,
  Phone,
} from 'lucide-react'

import { Link } from 'react-router-dom'


function BanerNavbar() {
  const [propertiesOpen, setPropertiesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])


  return (
    <header className="bg-[#0B1526] relative z-50 w-full">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-5">

        {/* LOGO */}
        {/* Clicking logo goes to MAIN WEBSITE */}

        <Link
          to="/"
          className="flex flex-col leading-none shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-white font-extrabold text-xl sm:text-2xl tracking-wide">
            SKY INN
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


        {/* DESKTOP NAVIGATION */}

        <div className="hidden lg:flex items-center gap-8">

          {/* PROPERTIES */}

          <div
            className="relative"
            onMouseEnter={() => setPropertiesOpen(true)}
            onMouseLeave={() => setPropertiesOpen(false)}
          >

            <button className="flex items-center gap-1 text-white font-medium text-[15px] hover:text-[#A6CE39] transition-colors">
              Properties

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  propertiesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>


            {propertiesOpen && (
              <div className="absolute left-0 top-full pt-2 w-56">

                <div className="bg-white rounded-md shadow-xl overflow-hidden">

                  {properties.map((property) => (
                    <Link
                      key={property.href}
                      to={property.href}
                      onClick={() => setPropertiesOpen(false)}
                      className="block px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 border-gray-100"
                    >
                      <div className="text-[#0B1526] font-semibold text-sm">
                        {property.name}
                      </div>
                    </Link>
                  ))}

                </div>

              </div>
            )}

          </div>


          {/* AMENITIES */}

          <a
            href="#amenities"
            className="text-white font-medium text-[15px] hover:text-[#A6CE39] transition-colors"
          >
            Amenities
          </a>


          {/* GALLERY */}

          <a
            href="#gallery"
            className="text-white font-medium text-[15px] hover:text-[#A6CE39] transition-colors"
          >
            Gallery
          </a>


          {/* CONTACT */}

          <a
            href="#contact"
            className="text-white font-medium text-[15px] hover:text-[#A6CE39] transition-colors"
          >
            Contact
          </a>

        </div>


        {/* DESKTOP BOOK BUTTON */}

        <button className="hidden lg:flex items-center gap-2 bg-[#A6CE39] text-[#0B1526] font-semibold text-sm px-5 py-2.5 rounded-md hover:brightness-95 transition">

          Book a Visit

          <Calendar size={16} />

        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <X size={26} />
            : <Menu size={26} />
          }
        </button>

      </nav>


      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#0B1526] flex flex-col">

          {/* MOBILE HEADER */}

          <div className="flex items-center justify-between px-5 py-5 shrink-0">

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col leading-none"
            >

              <span className="text-white font-extrabold text-xl tracking-wide">
                SKY INN
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


            <button
              className="text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

          </div>


          {/* MOBILE BODY */}

          <div className="flex-1 overflow-y-auto px-5">

            {/* PROPERTIES */}

            <div className="text-[#A6CE39] text-xs font-semibold tracking-widest mb-3">
              PROPERTIES
            </div>

            <div className="flex flex-col">

              {properties.map((property) => (
                <Link
                  key={property.href}
                  to={property.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-white text-[15px] py-3 border-b border-white/10"
                >

                  {property.name}

                  <ChevronRight
                    size={18}
                    className="text-white/40"
                  />

                </Link>
              ))}

            </div>


            <div className="h-px bg-white/10 my-5" />


            {/* QUICK LINKS */}

            <div className="text-[#A6CE39] text-xs font-semibold tracking-widest mb-3">
              QUICK LINKS
            </div>

            <div className="flex flex-col pb-6">

              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-white text-[15px] py-3 border-b border-white/10"
                >

                  {link.name}

                  <ChevronRight
                    size={18}
                    className="text-white/40"
                  />

                </a>
              ))}

            </div>

          </div>


          {/* MOBILE BOTTOM */}

          <div className="shrink-0 px-5 pt-4 pb-6 flex flex-col gap-3 bg-[#0B1526] border-t border-white/10">

            <a
              href="tel:+919939933339"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-medium text-sm px-5 py-3 rounded-md"
            >

              <Phone
                size={16}
                className="text-[#A6CE39]"
              />

              +91 9939933339

            </a>


            <button className="flex items-center justify-center gap-2 bg-[#A6CE39] text-[#0B1526] font-semibold text-sm px-5 py-3.5 rounded-md hover:brightness-95 transition">

              Book a Visit

              <Calendar size={16} />

            </button>

          </div>

        </div>
      )}

    </header>
  )
}

export default BanerNavbar