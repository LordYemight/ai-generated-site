'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const brand = {
  name: "Lavie du Vivants",
  tagline: "It's All About The TASTE ",
  industry: "Food & Spices",
  region: "Nigeria",
  currency: "NGN",
  vibe: "Premium, warm, foodie, elegant",
};

const products = ["Spice Blends", "Granola", "Mocktails", "Salad Bowls", "R&C (Rice and Complements)"];

const contact = {
  whatsapp: "+2348000000000",
  social: "https://www.instagram.com/_lavie_du/",
  email: "info@lavieduvivants.com"
};

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Contact', href: '#contact' },
];

const decorativeItems = [
  { top: '10%', left: '20%', emoji: '🍰' },
  { top: '30%', left: '50%', emoji: '🍔' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[var(--primary)] px-6
      flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[12vw] md:text-[7vw] font-black text-white leading-none">
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

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[75%] max-w-sm
            bg-[var(--primary)] p-8 flex flex-col
            transform transition-transform duration-500
            animate-slideIn">
            <button className="self-end mb-8" onClick={() => setMenuOpen(false)}>
              <X size={28} className="text-white" />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <a key={i} href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl font-bold tracking-tight
                    hover:text-[var(--accent)] transition-colors">
                  <span className="text-[var(--accent)] text-sm font-mono mr-3">
                    0{i + 1}
                  </span>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-white/10">
              <a href={contact.whatsapp} className="text-[var(--accent)] font-bold">
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
        <Menu size={24} />
      </button>
    </>
  );
};

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50
      bg-[var(--accent)] px-8 py-3 rounded-full
      border-3 border-black shadow-[4px_4px_0px_#000]
      flex items-center justify-between gap-8 w-[90%] max-w-4xl">
      <span className="font-black text-lg tracking-tight">{brand.name}</span>
      <nav className="hidden md:flex gap-6 font-bold text-sm">
        {navLinks.map(link => (
          <a href={link.href} className="hover:underline underline-offset-4">{link.name}</a>
        ))}
      </nav>
      <MobileNav />
    </header>
  );
};

const Features = () => {
  return (
    <section className="py-20 px-6 bg-[var(--secondary)]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-xl">
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
          <h2 className="text-4xl font-black text-white">Let us Talk Business.</h2>
          <p className="text-white/60 mt-4">Send us a direct message on WhatsApp.</p>
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

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Contact />
    </>
  );
}