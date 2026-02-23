'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const brand = {
  name: 'Patrick Clothings',
  tagline: 'Empowering Fashion',
  industry: 'Fashion',
  region: 'Nigeria',
  currency: 'NGN',
  vibe: 'Premium',
};

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About', href: '#' },
];

const decorativeItems = [
  { top: '10%', left: '20%', emoji: '👕' },
  { top: '30%', left: '50%', emoji: '👖' },
];

const features = [
  { title: 'High Quality', description: 'Our products are made with the finest materials.' },
  { title: 'Fast Delivery', description: 'We deliver nationwide within 24 hours.' },
];

const floatKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
`;

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? 'bg-black/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'}
          px-6 py-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--accent)] rounded-md flex items-center justify-center">
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-bold text-white tracking-wide">{brand.name}</span>
        </div>
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div
            className="absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[var(--primary)] p-8 flex flex-col
              transform transition-transform duration-500 animate-slideIn"
          >
            <button
              className="self-end mb-8"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} className="text-white" />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
                >
                  <span className="text-[var(--accent)] text-sm font-mono mr-3">{`0${i + 1}`}</span>
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10">
              <a
                href="https://wa.me/available"
                className="text-[var(--accent)] font-bold"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}

      <section
        id="home"
        className="min-h-screen relative overflow-hidden bg-[var(--primary)] px-6
          flex items-center justify-center"
      >
        <style>{floatKeyframes}</style>

        {decorativeItems.map((item, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              top: item.top,
              left: item.left,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {item.emoji}
          </div>
        ))}

        <div className="relative z-10 text-center">
          <h1
            className="text-[12vw] md:text-[7vw] font-black text-white leading-none"
          >
            {brand.tagline}
          </h1>
          <a
            href="#contact"
            className="inline-block mt-8 bg-[var(--accent)] border-3 border-black shadow-[4px_4px_0px_#000] px-8 py-4
              font-black text-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] transition-all"
          >
            SHOP NOW →
          </a>
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-6 bg-[var(--secondary)]"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="sticky top-32 group"
            style={{ marginTop: idx === 0 ? 0 : '-4rem' }}
          >
            <div
              className="bg-[var(--secondary)] rounded-2xl p-8 shadow-xl
                border-t-4 border-[var(--accent)] transition-transform group-hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section
        id="contact"
        className="py-20 px-6 bg-[var(--primary)]"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-8">GET IN TOUCH</h2>

          <form onSubmit={handleSubmit} className="space-y-6 border-2 border-dashed border-gray-300 rounded-2xl p-8 relative">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--accent)] outline-none transition"
            />

            <select
              className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white appearance-none cursor-pointer focus:border-[var(--accent)] outline-none"
            >
              <option value="">Select a Product</option>
              {['Clothes', 'Accessories', 'Shoes'].map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-[var(--accent)] outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--accent)] text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'SEND MESSAGE →'}
            </button>

            {submitted && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-2xl animate-[bounce_0.3s_ease-out]"
              >
                <div className="text-center">
                  <span
                    className="text-green-600 font-black text-6xl border-4 border-green-600 px-6 py-2 rotate-[-12deg] inline-block"
                  >
                    SENT ✓
                  </span>
                  <p className="mt-4 text-gray-600">We will get back to you shortly!</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer
        className="bg-[var(--primary)] text-white py-20 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">About</h4>
            <p className="text-white/60 text-sm">{brand.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">Links</h4>
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="block text-white/60 text-sm hover:text-white mb-2"
              >
                {l.name}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">Contact</h4>
            <p className="text-white/60 text-sm">WhatsApp: available</p>
            <p className="text-white/60 text-sm">Email: none</p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--accent)] mb-4">Social</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/available"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/60 hover:text-white"
                >
                  <path d="M21 2l-6.195 6.295a2 2 0 00-2.986 0L2 18.5l10-10 10 10L7.74 8.22z" />
                  <path d="M21 12a2 2 0 00-2-2 2 2 0 00-2 2 2 2 0 002-2 2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-white/30 text-xs"
        >
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}