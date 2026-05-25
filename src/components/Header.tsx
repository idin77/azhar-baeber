import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Set header background on scroll for safety and elegance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Harga', href: '#harga' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans border-b ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-dark-border py-4'
            : 'bg-transparent border-transparent py-5 lg:py-6'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Layout precisely matching the mockup */}
            <a href="#beranda" className="flex items-center space-x-3.5 group" id="header-logo-container">
              {/* Gold Shield "A" Logo Emblem */}
              <div className="relative flex items-center justify-center w-11 h-11 shrink-0">
                {/* SVG Shield & Crown */}
                <svg
                  viewBox="0 0 100 120"
                  className="absolute inset-0 w-full h-full text-gold transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Outer Shield */}
                  <path d="M50,15 L15,25 L15,65 C15,90 50,110 50,110 C50,110 85,90 85,65 L85,25 L50,15 Z" />
                  {/* Subtle Inner Shield Accent */}
                  <path d="M50,22 L22,30 L22,64 C22,84 50,101 50,101 C50,101 78,84 78,64 L78,30 L50,22 Z" strokeWidth="2" opacity="0.6"/>
                  {/* Crown on Top */}
                  <path d="M35,16 L38,8 L50,14 L62,8 L65,16" strokeWidth="4"/>
                  {/* Inner Crown dots */}
                  <circle cx="50" cy="14" r="1.5" fill="currentColor"/>
                </svg>
                {/* Letter "A" centered */}
                <span className="font-serif text-xl font-bold text-white z-10 select-none tracking-wide pt-1">
                  A
                </span>
              </div>

              {/* Text part of Logo */}
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white select-none">
                  AZHAR
                </span>
                <span className="font-display text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-gold select-none">
                  BARBERSHOP
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" id="desktop-nav">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-[13px] font-semibold uppercase tracking-wider text-gray-300 hover:text-gold transition-colors duration-200 cursor-pointer relative py-1"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right Action buttons - Phone/WhatsApp & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Call Link CTA matching the luxury layout */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hidden sm:flex items-center space-x-2 bg-transparent hover:bg-gold/5 border border-dark-gold-border rounded-lg px-4 py-2 text-white font-mono text-sm font-semibold transition-all duration-300 hover:scale-[1.02] gold-glow cursor-pointer"
                id="header-phone-cta"
              >
                <span className="text-gold">
                  <LucideIcon name="PhoneCall" size={16} />
                </span>
                <span>{CONTACT_INFO.phone}</span>
              </a>

              {/* Booking CTA trigger */}
              <button
                onClick={onOpenBooking}
                className="hidden md:block gold-gradient hover:opacity-90 text-black font-display font-bold text-xs uppercase tracking-wider px-4.5 py-2.5 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                id="header-booking-cta"
              >
                Booking
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 lg:hidden text-gray-400 hover:text-gold transition-colors hover:bg-white/5 rounded-lg cursor-pointer"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/95 z-40 lg:hidden"
              id="mobile-nav-backdrop"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-dark-card border-l border-dark-border z-50 p-6 flex flex-col justify-between lg:hidden"
              id="mobile-nav-drawer"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-gold">
                      <LucideIcon name="Scissors" size={20} />
                    </span>
                    <span className="font-serif font-semibold text-lg text-white">AZHAR MENU</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-gold hover:bg-white/5 rounded-lg"
                    id="mobile-close-btn"
                  >
                    <LucideIcon name="X" size={24} />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left font-display text-base font-semibold uppercase tracking-wider text-gray-300 hover:text-gold py-2.5 border-b border-dark-border/40 transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile CTAs bottom */}
              <div className="space-y-4 pt-6 border-t border-dark-border">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 bg-black/60 border border-dark-border text-white text-sm font-semibold font-mono p-3 rounded-lg"
                  id="mobile-nav-phone-call"
                >
                  <LucideIcon name="PhoneCall" size={16} className="text-gold" />
                  <span>Call: {CONTACT_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center gold-gradient text-black font-display font-bold text-sm uppercase py-3 rounded-lg cursor-pointer"
                  id="mobile-nav-booking-cta"
                >
                  Booking Sekarang
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
