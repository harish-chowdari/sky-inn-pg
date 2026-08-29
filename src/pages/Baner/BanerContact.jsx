import React, { useState } from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

// No signup, no backend, no API key needed.
// On submit, this builds a mailto: link and opens the visitor's own email
// app with the message pre-filled and addressed to the inbox below. They
// just click Send in their own mail app.
const RECIPIENT_EMAIL = 'chakravarthiyadav334@gmail.com';

function BanerContact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }

    const subject = `Sky Inn Baner enquiry from ${formData.name}`;
    const body =
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message || "I'm interested in viewing this property..."}`;

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setStatus('success');
  };

  return (
    <section className="bg-[#F7F8FA] py-16 px-5 sm:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column - info */}
        <div>
          <h2 className="text-[#0B1526] font-extrabold text-3xl sm:text-4xl">Get in Touch</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
            Have questions about Sky Inn Baner or want to schedule a personalized tour? Reach
            out to our team directly.
          </p>

          <div className="flex items-start gap-4 mt-8">
            <div className="bg-[#F0F7DE] rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-[#8CC63F]" />
            </div>
            <div>
              <div className="text-[#0B1526] font-bold text-base mb-1">Call Us</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <a href="tel:+919112233977" className="block hover:text-[#0B1526]">+91 9112233977</a>
                {/* <a href="tel:+919112233977" className="block hover:text-[#0B1526]">+91 9112233977</a> */}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-6">
            <div className="bg-[#F0F7DE] rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#8CC63F]" />
            </div>
            <div>
              <div className="text-[#0B1526] font-bold text-base mb-1">Visit Property</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                Flat No 1, Krantisurya Apt, Pan Card Club Rd, Sky Inn Pg Services Road, Baner, Pune, Maharashtra 411045
              </div>
            </div>
          </div>
        </div>

        {/* Right column - form card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                  YOUR NAME <span className="text-[#8CC63F]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A6CE39]"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                  PHONE NUMBER <span className="text-[#8CC63F]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A6CE39]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                YOUR MESSAGE (OPTIONAL)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm interested in viewing this property..."
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A6CE39] resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#A6CE39] text-[#0B1526] font-bold text-sm tracking-wide py-3.5 rounded-lg hover:brightness-95 transition"
            >
              SUBMIT MESSAGE
              <ArrowRight size={16} />
            </button>

            <p className="text-[11px] text-gray-400 text-center leading-relaxed -mt-2">
              Clicking submit opens your email app with this message pre-filled — just hit
              send there to reach us.
            </p>

            {status === 'success' && (
              <p className="text-sm text-green-600 text-center">
                Your email app should have opened with everything filled in — just hit Send there to reach us.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center">
                Please fill in your name and phone number, then try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default BanerContact;