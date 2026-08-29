import React from 'react';

function BanerAbout() {
  return (
    <section className="bg-[#F7F8FA] pt-16 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0B1526] font-extrabold text-2xl sm:text-3xl mb-4">
          About this Property
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-4xl">
          Welcome to our newly built PG, designed for modern, comfortable, and hassle-free
          living. Enjoy fully furnished rooms, high-speed Wi-Fi, daily housekeeping, nutritious
          meals, power backup, CCTV security, and secure access. Conveniently located near major
          IT parks, colleges, public transport, and essential services, our PG offers the perfect
          balance of comfort, convenience, and affordability for both students and working
          professionals.
        </p>
        <div className="h-px bg-gray-200 mt-8" />
      </div>
    </section>
  );
}

export default BanerAbout;