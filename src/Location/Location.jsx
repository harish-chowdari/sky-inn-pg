import React from 'react';
import { ExternalLink, Navigation, Star, Info, MapPin } from 'lucide-react';

// Direct link to the exact pinned location, used by the map buttons
const MAPS_SHARE_LINK = 'https://share.google/YGHM6QpZuah5KLkG9';

// Address used to center the embedded map (no API key needed for this
// query-based embed format) and to build the Directions link
const PROPERTY_ADDRESS =
  'Flat No 1, Krantisurya Apt, Pan Card Club Rd, Baner Gaon, Baner, Pune, Maharashtra 411045, India';

const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  PROPERTY_ADDRESS
)}`;

function Location() {
  return (
    <section className="bg-[#F7F8FA] py-16 px-5 sm:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-8">Location</h2>

        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          {/* Embedded map */}
          <iframe
            title="Sky Inn Baner location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              PROPERTY_ADDRESS
            )}&output=embed`}
            className="w-full h-[420px] sm:h-[480px] lg:h-[520px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Info window card, styled like Google Maps' native pin popup */}
          <div className="absolute top-4 left-4 z-10 w-[240px] sm:w-[280px] bg-white rounded-lg shadow-xl p-3.5 sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[#0B1526] font-bold text-sm sm:text-[15px] leading-snug">
                SKY Inn PG Services Baner || Balewadi
              </h3>
              <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                <a
                  href={MAPS_SHARE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5f6368] hover:text-[#1a73e8]"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a73e8] rounded-full w-6 h-6 flex items-center justify-center hover:brightness-110"
                  aria-label="Get directions"
                >
                  <Navigation size={12} className="text-white" />
                </a>
              </div>
            </div>

            <p className="text-[#1a73e8] text-xs sm:text-[13px] mt-2 leading-relaxed">
              Flat No 1, Krantisurya apt, Pan Card Club Rd, Baner Gaon, Baner, Pune, Maharashtra
              411045, India
            </p>

            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="text-[#0B1526] text-sm font-semibold">5.0</span>
              <Star size={13} className="text-[#f5a623] fill-[#f5a623]" />
              <a href={MAPS_SHARE_LINK} target="_blank" rel="noopener noreferrer" className="text-[#1a73e8] text-sm hover:underline">
                (27)
              </a>
              <Info size={13} className="text-[#5f6368]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;