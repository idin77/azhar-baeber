import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LucideIcon from './components/LucideIcon';
import { motion } from 'motion/react';
import { CONTACT_INFO } from './data';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedPackage, setPreselectedPackage] = useState('');

  const handleOpenBooking = (serviceId: string = '', packageId: string = '') => {
    setPreselectedService(serviceId);
    setPreselectedPackage(packageId);
    setBookingOpen(true);
  };

  return (
    <div className="bg-[#0A0A0A] text-white font-sans selection:bg-gold selection:text-black min-h-screen relative" id="landing-page-root">
      {/* Header and Navbars */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Header Area */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main id="main-content-flow">
        {/* Features Highlights Banner */}
        <Features />

        {/* Services / Layanan Section */}
        <Services onOpenBooking={(sId) => handleOpenBooking(sId, '')} />

        {/* About Section */}
        <About />

        {/* Gallery Showcase */}
        <Gallery />

        {/* Packages / Pricing Tier list */}
        <Pricing onOpenBooking={(sId, pId) => handleOpenBooking(sId, pId)} />

        {/* User Testimanies Section */}
        <Testimonials />

        {/* Contacts details & Google maps */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Booking Modal controller */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedServiceId={preselectedService}
        preselectedPackageId={preselectedPackage}
      />

      {/* Interactive floating WhatsApp button exactly in the bottom-right corner as requested */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-30"
        id="floating-whatsapp-container"
      >
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-2xl transition duration-300 hover:scale-110 group gold-glow"
          aria-label="Direct Chat via WhatsApp"
          id="floating-whatsapp-btn"
        >
          {/* Animated pulsing outer rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none pointer-events-none" />
          
          <LucideIcon name="MessageCircle" size={28} className="text-white fill-none transition-transform duration-300 group-hover:scale-105" />
          
          {/* Quick Tooltip */}
          <span className="absolute right-16 bg-black/80 text-white font-display text-[11px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-lg border border-dark-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg select-none pointer-events-none">
            Hubungi WhatsApp
          </span>
        </a>
      </motion.div>
    </div>
  );
}
