import React from 'react';
import { Users, Check } from 'lucide-react';

function BanerRooms() {
  const rooms = [
    {
      name: 'Single Sharing',
      status: 'AVAILABLE NOW',
      features: ['Living Essentials', 'Everything You Need', 'Comfort & Convenience'],
    },
    {
      name: 'Twin Sharing',
      status: 'AVAILABLE NOW',
      features: ['Living Essentials', 'Everything You Need', 'Comfort & Convenience'],
    },
    {
      name: 'Triple Sharing',
      status: 'AVAILABLE NOW',
      features: ['Living Essentials', 'Everything You Need', 'Comfort & Convenience'],
    },
  ];

  return (
    <section className="bg-[#F7F8FA] pt-10 pb-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-8">
          Available Room Types
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
            >
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-[#F0F7DE] rounded-xl w-14 h-14 flex items-center justify-center shrink-0">
                  <Users size={24} className="text-[#8CC63F]" />
                </div>
                <div>
                  <h3 className="text-[#0B1526] font-bold text-lg">{room.name}</h3>
                  <span className="text-[#8CC63F] text-xs font-bold tracking-wide">
                    {room.status}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                {room.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Check size={16} className="text-[#8CC63F] shrink-0" />
                    <span className="text-[#0B1526] text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-100 mb-5 mt-auto" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Pricing upon request</span>
                <a
                  href="#contact"
                  className="text-[#0B1526] text-sm font-semibold border border-[#A6CE39] rounded-md px-4 py-2 hover:bg-[#A6CE39]/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BanerRooms;