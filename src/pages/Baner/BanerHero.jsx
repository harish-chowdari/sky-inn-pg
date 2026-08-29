import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

function BanerHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/skyinn-baner-hero/1600/500"
        alt="Sky Inn Baner building"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1526]/95 via-[#0B1526]/75 to-[#0B1526]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide mb-5">
          <a href="/" className="text-white hover:text-[#A6CE39] transition-colors">
            HOME
          </a>
          <ChevronRight size={14} className="text-white/50" />
          <span className="text-[#A6CE39]">SKY INN BANER</span>
        </div>

        {/* Badge */}
        <span className="inline-block bg-[#A6CE39] text-[#0B1526] text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-md mb-4">
          PREMIUM PG
        </span>

        {/* Title */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Sky Inn Baner
        </h1>

        {/* Location */}
        <div className="flex items-start gap-2 mt-4">
          <MapPin size={16} className="text-[#A6CE39] shrink-0 mt-0.5" />
          <span className="text-gray-200 font-semibold text-sm sm:text-base leading-relaxed">
            Flat No 1, Krantisurya Apt, Pan Card Club Rd, Baner, Pune, Maharashtra 411045
          </span>
        </div>
      </div>
    </section>
  );
}

export default BanerHero;