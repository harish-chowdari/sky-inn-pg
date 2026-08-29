import React from 'react';
import { ArrowRight, Calendar, Building2, Users, MapPin, ShieldCheck, Phone } from 'lucide-react';
import pgEnterance from '../assets/pg-enterance.png'


function Hero() {
  const stats = [
    { icon: Building2, value: '4+', label: 'PROPERTIES' },
    { icon: Users, value: '100+', label: 'HAPPY RESIDENTS' },
    { icon: MapPin, value: 'Prime', label: 'LOCATIONS' },
    { icon: ShieldCheck, value: '24/7', label: 'SUPPORT' },
  ];

  return (
    <section className="bg-[#0B1526] px-5 sm:px-8 pb-14 lg:pb-24 pt-6 lg:pt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left column - copy */}
        <div>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Premium PG In Baner
            <br />
            <span className="text-[#A6CE39]">Made for You.</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-md leading-relaxed">
            Thoughtfully designed spaces, delicious home-style meals and a
            vibrant community across Sky Inn properties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#properties"
              className="flex items-center justify-center gap-2 bg-[#A6CE39] text-[#0B1526] font-semibold px-6 py-3.5 rounded-md hover:brightness-95 transition"
            >
              Explore Properties
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-md hover:bg-white/5 transition"
            >
              Book a Visit
              <Calendar size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 mt-12 pt-8 border-t border-white/10">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-white font-bold text-xl sm:text-2xl">
                  <s.icon size={20} className="text-[#A6CE39]" />
                  {s.value}
                </div>
                <div className="text-gray-500 text-[11px] font-medium tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - image */}
        <div className="relative pb-6 lg:pb-0">
          <div className="rounded-2xl overflow-hidden bg-white p-2">
            <img
              src={pgEnterance}
              alt="Sky Inn Baner property"
              className="w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl"
            />
          </div>

          {/* <div className="absolute -bottom-2 right-4 sm:right-8 bg-[#0B1526] border border-white/10 rounded-lg px-5 py-4 shadow-2xl w-[230px] sm:w-[260px]">
            <div className="text-white font-bold text-lg">SKY INN</div>
            <div className="text-white text-sm mt-0.5">Baner</div>
            <div className="w-full h-px bg-[#A6CE39]/40 my-2" />
            <div className="text-gray-300 text-xs">Smart Living</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-[#25D366] rounded-full p-1 flex items-center justify-center">
                <Phone size={12} className="text-white" />
              </span>
              <span className="text-white text-sm font-medium">9939933339</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;