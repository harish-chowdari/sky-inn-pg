import React from 'react';
import {
  Wifi,
  Video,
  Shirt,
  Flame,
  Sofa,
  Utensils,
  Dumbbell,
  Sparkles,
  Building2,
  ShieldCheck,
  Car,
  Droplet,
} from 'lucide-react';

function BanerAmenities() {
  const amenities = [
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Video, label: 'CCTV' },
    { icon: Shirt, label: 'Washing Machine' },
    { icon: Flame, label: 'Hot Water' },
    { icon: Sofa, label: 'Common Lounge' },
    { icon: Utensils, label: 'Meals' },
    { icon: Dumbbell, label: 'Gym' },
    { icon: Sparkles, label: 'Housekeeping' },
    { icon: Building2, label: 'Lift' },
    { icon: ShieldCheck, label: '24/7 Security' },
    { icon: Car, label: 'Parking' },
    { icon: Droplet, label: 'RO Water' },
  ];

  return (
    <section className="bg-[#F7F8FA] py-16 px-5 sm:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-8">
          Property Amenities
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left shadow-sm"
            >
              <div className="bg-[#F0F7DE] rounded-xl w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                <a.icon size={20} className="text-[#8CC63F]" />
              </div>
              <span className="text-[#0B1526] font-semibold text-xs sm:text-sm leading-tight">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BanerAmenities;