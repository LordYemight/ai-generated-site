'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, WhatsApp } from 'lucide-react';

const brand = {
  name: 'Lavie du Vivants',
  tagline: 'It\'s All About The TASTE',
  industry: 'Food & Spices',
  region: 'Nigeria',
  currency: 'NGN',
  vibe: 'Premium, warm, foodie, elegant',
};

const contact = {
  whatsapp: '+2348000000000',
  social: 'https://www.instagram.com/_lavie_du',
};

const products = ['Spice Blends', 'Granola', 'Mocktails', 'Salad Bowls', 'R&C', 'Event Catering & Food Styling'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50
      bg-[var(--primary)] px-8 py-3 rounded-full
      border-3 border-black shadow-[4px_4px_0px_#000]
      flex items-center justify-between gap-8 w-[90%] max-w-4xl">
      <span className="font-black text-lg tracking-tight">{brand.name}</span>
      <nav className="hidden md:flex gap-6 font-bold text-sm">
        {products.map((product, i) => (
          <a key={i} href={`#${product}`} className="hover:underline underline-offset-4">{product}</a>
        ))}
      </nav>
      <button className="md:hidden" onClick={() => setMenuOpen(true)}>
        <Menu size={24} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[75%] max-w-sm
            bg-[var(--primary)] p-8 flex flex-col
            transform transition-transform duration-500
            animate-slideIn">
            <button className="self-end mb-8" onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-black" />
            </button>
            <nav className="flex flex-col gap-6">
              {products.map((product, i) => (
                <a key={i} href={`#${product}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-2xl font-bold tracking-tight
                    hover:text-[var(--accent)] transition-colors">
                  <span className="text-[var(--accent)] text-sm font-mono mr-3">
                    0{i + 1}
                  </span>
                  {product}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-black/10">
              <a href={contact.whatsapp} className="text-[var(--accent)] font-bold">
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[var(--primary)] px-6
      flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[12vw] md:text-[7vw] font-black text-black leading-none">
          {brand.tagline}
        </h1>
        <a href="#contact" className="inline-block mt-8 bg-[var(--accent)]
          border-3 border-black shadow-[4px_4px_0px_#000] px-8 py-4
          font-black text-lg hover:translate-x-[2px] hover:translate-y-[2px]
          hover:shadow-[2px_2px_0px_#000] transition-all">
          SHOP NOW →
        </a>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-[var(--secondary)]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div key={i} className="bg-[var(--primary)] rounded-2xl p-8 shadow-xl
            border-t-4 border-[var(--accent)]">
            <h3 className="text-2xl font-bold">{product}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[var(--primary)]">
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black text-black">Let us Talk Business.</h2>
          <p className="text-black/60 mt-4">Send us a direct message on WhatsApp.</p>
        </div>
        <div className="space-y-4">
          <a href={contact.whatsapp} target="_blank"
            className="block w-full bg-green-500 text-white text-center py-4
              rounded-xl font-bold text-lg hover:bg-green-600 transition">
            📱 SEND ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-black py-20 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-[var(--accent)] mb-4">About</h4>
          <p className="text-black/60 text-sm">{brand.tagline}</p>
        </div>
        <div>
          <h4 className="font-bold text-[var(--accent)] mb-4">Links</h4>
          {products.map((product, i) => (
            <a key={i} href={`#${product}`} className="block text-black/60 text-sm
              hover:text-black mb-2">{product}</a>
          ))}
        </div>
        <div>
          <h4 className="font-bold text-[var(--accent)] mb-4">Contact</h4>
          <p className="text-black/60 text-sm">{contact.whatsapp}</p>
        </div>
        <div>
          <h4 className="font-bold text-[var(--accent)] mb-4">Social</h4>
          <div className="flex gap-3">
            <a href={contact.social}><Instagram className="text-black/60 hover:text-black" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-black/10
        text-center text-black/30 text-xs">
        &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}