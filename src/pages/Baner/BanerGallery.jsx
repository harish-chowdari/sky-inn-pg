import React from 'react';
import { Expand } from 'lucide-react';

function BanerGallery() {
  const images = [
    { src: 'https://picsum.photos/seed/skyinn-baner-g1/700/900', alt: 'Sky Inn Baner entrance' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g2/500/350', alt: 'Sky Inn Baner bedroom' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g3/500/350', alt: 'Sky Inn Baner bathroom' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g4/500/350', alt: 'Sky Inn Baner building exterior' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g5/500/350', alt: 'Sky Inn Baner wardrobe' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g6/500/350', alt: 'Sky Inn Baner bedroom with curtains' },
    { src: 'https://picsum.photos/seed/skyinn-baner-g7/500/350', alt: 'Sky Inn Baner twin bed room' },
  ];

  return (
    <section className="bg-[#F7F8FA] py-16 px-5 sm:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-8">
          Property Gallery
        </h2>

        {/* Mobile: 2 cols, first image full width. Desktop: 3 cols, first image tall (dense auto-flow recreates the asymmetric layout) */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[190px] gap-3 sm:gap-4 [grid-auto-flow:dense]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden ${
                i === 0
                  ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors hidden sm:flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/95 text-[#0B1526] text-xs font-semibold px-3 py-2 rounded-full">
                  <Expand size={14} />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BanerGallery;