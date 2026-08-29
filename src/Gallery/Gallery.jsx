import React from 'react';
import { Expand } from 'lucide-react';

// ---------------------------------------------------------------------------
// IMPORTANT: adjust these import paths/extensions to match your actual files.
// This assumes your images live in src/assets/gallery/ (relative to this
// file at src/Gallery/Gallery.jsx) with a .jpg extension. If your files are
// .png/.jpeg, or sit directly in src/assets/ instead of a "gallery"
// subfolder, just update the paths below to match.
// ---------------------------------------------------------------------------
import building2 from '../assets/building-2.jpeg';
import pgEnterance from '../assets/pg-enterance.png';
import building1 from '../assets/building-1.png';
import sharing1 from '../assets/1-sharing-1.jpeg';
import sharing2 from '../assets/2-sharing-1.jpeg';
import shareEnterance from '../assets/3-share-enterance.jpeg';
import sharing3a from '../assets/3-sharing-1.jpeg';
import sharing3b from '../assets/3-sharing-2.jpeg';
import parking from '../assets/parking.jpeg';
import ro from '../assets/ro.jpeg';
import washingMachine from '../assets/washing-machine.jpeg';

function Gallery() {
  const images = [
    { src: building2, alt: 'Sky Inn building exterior view 2' },
    { src: pgEnterance, alt: 'Sky Inn PG entrance' },
    { src: building1, alt: 'Sky Inn building exterior view 1' },
    { src: sharing1, alt: 'Sky Inn single sharing room' },
    { src: sharing2, alt: 'Sky Inn twin sharing room' },
    { src: shareEnterance, alt: 'Sky Inn triple sharing room entrance' },
    { src: sharing3a, alt: 'Sky Inn triple sharing room 1' },
    { src: sharing3b, alt: 'Sky Inn triple sharing room 2' },
    { src: parking, alt: 'Sky Inn parking area' },
    { src: ro, alt: 'Sky Inn RO water plant' },
    { src: washingMachine, alt: 'Sky Inn washing machine' },
  ];

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
                i === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
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