import React from 'react';
import {
  Wifi,
  Utensils,
  Building2,
  Car,
  Droplet,
  Video,
  Flame,
  Sofa,
  ShieldCheck,
  Shirt,
  Sparkles,
} from 'lucide-react';

function Amenities() {
  const amenities = [
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Utensils, label: 'Meals' },
    { icon: Building2, label: 'Lift' },
    { icon: Car, label: 'Parking' },
    { icon: Droplet, label: 'RO Water' },
    { icon: Video, label: 'CCTV' },
    { icon: Flame, label: 'Hot Water' },
    { icon: Sofa, label: 'Common Lounge' },
    { icon: ShieldCheck, label: '24/7 Security' },
    { icon: Shirt, label: 'Washing Machine' },
    { icon: Sparkles, label: 'Housekeeping' },
  ];

  return (
    <section className="bg-[#F7F8FA] py-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="text-[#8CC63F] text-xs font-bold tracking-widest mb-2">
            OUR AMENITIES
          </div>
          <h2 className="text-[#0B1526] font-extrabold text-3xl sm:text-4xl">
            Everything You Need, Every Day
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            From high-speed internet to home-cooked meals...
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left shadow-sm"
            >
              <div className="bg-[#F0F7DE] rounded-lg sm:rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                <a.icon size={20} className="text-[#8CC63F]" />
              </div>
              <span className="text-[#0B1526] font-semibold text-xs sm:text-[15px] leading-tight">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;