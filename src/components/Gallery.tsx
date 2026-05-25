import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import LucideIcon from './LucideIcon';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ['All', 'Haircut', 'Shave', 'Styling'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Portofolio Kebanggaan Kami
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize">
            GAYA RAMBUT MODERN <span className="text-gold font-serif">BARBERSHOP KARAWANG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Tab Filters with gold hover effects */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg font-display text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'gold-gradient text-black border-transparent shadow-lg shadow-gold/20'
                  : 'bg-[#121212] hover:bg-gold/5 text-gray-400 hover:text-white border-dark-border hover:border-dark-gold-border'
              }`}
            >
              {cat === 'All' ? 'Semua Potongan' : cat}
            </button>
          ))}
        </div>

        {/* Elegant Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-xl overflow-hidden bg-dark-card border border-dark-border cursor-pointer hover:border-dark-gold-border transition-all duration-300 shadow-lg gold-glow"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.85] group-hover:brightness-95 grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Grid Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:from-black/95" />

                {/* Floating Content shown on hover / persistent nicely */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end transform transition-all duration-300">
                  <span className="text-[10px] font-display font-bold uppercase tracking-[0.25em] text-gold gold-text-glow mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>
                  
                  {/* Subtle decorative gold divider */}
                  <div className="w-12 h-[1.5px] bg-gold mt-3 transform origin-left transition-transform duration-300 scale-x-75 group-hover:scale-x-100" />
                </div>

                {/* Zoom Icon over Card Center */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-lg border border-dark-gold-border/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold-200">
                  <LucideIcon name="Maximize2" size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery conversion direct CTA to boost conversion rates */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-xl bg-gradient-to-r from-[#111] to-[#0d0d0d] border border-dark-gold-border/30 shadow-2xl" id="gallery-direct-cta">
          <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 uppercase">
            Sukai Salah Satu Model Rambut Modern di Atas?
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
            Dapatkan pangkas rambut pria Karawang profesional yang presisi dan dijamin rapi. Barber ahli kami siap mewujudkan rambut idaman Anda dengan standar higienis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6285886752081"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-gradient-to-r from-[#1e5d34] to-[#25d366] hover:opacity-95 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition duration-200"
            >
              <LucideIcon name="MessageCircle" size={15} />
              <span>Booking WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
