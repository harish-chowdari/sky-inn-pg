import React from 'react';
import { Expand } from 'lucide-react';

function Gallery() {
  const images = Array.from({ length: 15 }, (_, i) => ({
    src: `https://picsum.photos/seed/skyinn-gallery-${i + 1}/600/450`,
    alt: `Sky Inn gallery photo ${i + 1}`,
  }));

  return (
    <section className="bg-white py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="text-[#8CC63F] text-xs font-bold tracking-widest mb-2">GALLERY</div>
          <h2 className="text-[#0B1526] font-extrabold text-3xl sm:text-4xl">
            A Glimpse of Sky Inn
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] lg:auto-rows-[190px] gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden ${
                i === 0
                  ? 'col-span-2 row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/95 text-[#0B1526] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full">
                  <Expand size={14} />
                  View Fullscreen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;