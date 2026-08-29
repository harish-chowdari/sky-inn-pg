import React from 'react';
import { CheckCircle2 } from 'lucide-react';

function BanerAbout() {
  const highlights = [
    'Fully furnished rooms',
    'Prime location connectivity (Baner)',
    'Safe & hygienic environment',
    'Affordable pricing options',
  ];

  return (
    <section className="bg-[#F7F8FA] pt-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-4">
          About this Property
        </h2>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-4xl">
          Welcome to <span className="text-[#0B1526] font-semibold">Sky Inn PG In Baner</span>, your perfect
          stay option in Pune for comfort, convenience, and affordability. Located in the prime
          area of Baner, our PG offers well-maintained single sharing and double sharing rooms
          designed for working professionals and students.
        </p>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-4xl mt-4">
          We provide a peaceful and secure environment with all essential amenities to make your
          stay hassle-free. Whether you're new to the city or looking for a better accommodation
          upgrade, Sky Inn ensures a homely experience with modern facilities.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 max-w-4xl">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <CheckCircle2 size={18} className="text-[#8CC63F] shrink-0" />
              <span className="text-[#0B1526] text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-[#0B1526] text-sm sm:text-base font-medium leading-relaxed mt-8 max-w-4xl">
          Experience comfortable living with everything you need, right where you need it.
        </p>

        <div className="h-px bg-gray-200 mt-8" />
      </div>
    </section>
  );
}

export default BanerAbout;