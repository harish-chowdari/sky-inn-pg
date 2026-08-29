import React, { useState } from 'react';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import logoFull from '../assets/logo-full.png';

// ---------------------------------------------------------------------------
// No signup, no backend, no API key needed.
// On submit, this builds a mailto: link and opens the visitor's own email
// app (Gmail, Outlook, Apple Mail, etc.) with the message pre-filled and
// addressed to chakravarthiyadav334@gmail.com. They just click Send in their
// own mail app — nothing passes through a third-party server, so there's
// nothing to leak or secure.
// Trade-off: it requires the visitor to have an email app configured, and
// they take the final "Send" action themselves rather than it happening
// silently in the background.
// ---------------------------------------------------------------------------
const RECIPIENT_EMAIL = 'chakravarthiyadav334@gmail.com';

function Contact() {
  const properties = [
    'Sky Inn Baner'
    // 'Sky Inn Balewadi', 
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    interested: properties[0],
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    const subject = `New visit request from ${formData.name}`;
    const body =
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Interested in: ${formData.interested}\n` +
      `Message: ${formData.message || '-'}`;

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // We can't know whether the visitor actually hit Send in their email
    // app, so this just confirms their app was opened with everything
    // pre-filled.
    setStatus('success');
  };

  return (
    <section className="bg-white py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

        {/* =====================================
            LEFT COLUMN - INFO CARD WITH LOGO BG
        ====================================== */}

        <div className="relative overflow-hidden rounded-2xl bg-[#0B1526] px-6 sm:px-10 py-12 sm:py-14 flex flex-col justify-center">

          {/* Ambient green glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#A6CE39]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-[#A6CE39]/10 rounded-full blur-3xl" />

          {/* Logo watermark - full logo, centered */}
          <img
            src={logoFull}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-contain p-8 opacity-[0.08]"
          />

          {/* Content */}
          <div className="relative z-10">

            <div className="text-[#A6CE39] text-xs font-bold tracking-widest mb-2">
              GET IN TOUCH
            </div>

            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight">
              We're Here to Help.
            </h2>

            <p className="text-white/60 text-base mt-4 max-w-md leading-relaxed">
              Have questions about our properties or want to schedule a personalized
              tour? Reach out to our team directly.
            </p>

            <div className="flex items-start gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#A6CE39]" />
              </div>
              <div>
                <div className="text-white font-bold text-xs tracking-wide mb-1">CALL US</div>
                <div className="text-white/70 text-sm leading-relaxed">
                  <a href="tel:+919112233977" className="block hover:text-[#A6CE39] transition-colors">+91 9112233977</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#A6CE39]" />
              </div>
              <div>
                <div className="text-white font-bold text-xs tracking-wide mb-1">VISIT OFFICE</div>
                <div className="text-white/70 text-sm">Pune, Maharashtra, India</div>
              </div>
            </div>

          </div>

        </div>

        {/* =====================================
            RIGHT COLUMN - FORM CARD
        ====================================== */}

        <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">

          {/* Logo watermark - full logo, centered */}
          <img
            src={logoFull}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-contain p-8 opacity-[0.05]"
          />

          <h3 className="relative z-10 text-[#0B1526] font-bold text-2xl mb-6">Schedule a Visit</h3>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
            <div>
              <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                YOUR NAME <span className="text-[#8CC63F]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
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
                placeholder="9876543210"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A6CE39]"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                MESSAGE
              </label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here...."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A6CE39]"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-xs font-semibold tracking-wide mb-2">
                INTERESTED IN
              </label>
              <div className="relative">
                <select
                  name="interested"
                  value={formData.interested}
                  onChange={handleChange}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0B1526] focus:outline-none focus:ring-2 focus:ring-[#A6CE39]"
                >
                  {properties.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#A6CE39] text-[#0B1526] font-bold text-sm tracking-wide py-3.5 rounded-lg hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'OPENING EMAIL APP...' : 'BOOK MY VISIT'}
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

export default Contact;