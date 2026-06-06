import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PACKAGES } from '../data';
import LucideIcon from './LucideIcon';

interface PricingProps {
  onOpenBooking: (serviceId: string, packageId: string) => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPackages = activeCategory === 'All' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === activeCategory);

  return (
    <section id="harga" className="py-24 bg-gradient-to-b from-dark-bg to-black relative">
      {/* Background Gold Ambient Spots */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with layout dividers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Investasi Ketampanan Anda
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            HARGA <span className="text-gold font-serif">PANGKAS RAMBUT KARAWANG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {['All', 'Basic', 'Premium'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'bg-black/60 text-white hover:bg-gold/10 hover:text-gold border border-dark-gold-border/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing-deck">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pack, index) => (
              <motion.div
                layout
                key={pack.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative bg-dark-card border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 gold-glow hover:scale-[1.02] ${
                  pack.isPremium
                    ? 'border-gold shadow-2xl scale-[1.03] md:scale-[1.05] z-10 bg-[#161510]/80'
                    : 'border-dark-border hover:border-dark-gold-border'
                }`}
              >
              {/* Premium Recommendation Badge */}
              {pack.isPremium && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-black text-[10px] font-display font-black tracking-[0.2em] px-4 py-1.5 rounded-full uppercase shadow-md leading-none select-none">
                  REKOMENDASI
                </span>
              )}

              {/* Package Meta Info */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
                    {pack.name}
                  </h3>
                  <p className="text-gray-400 text-xs min-h-[32px] max-w-[220px] mx-auto leading-relaxed">
                    {pack.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex flex-col items-center justify-center p-4 bg-black/40 border border-dark-border/40 rounded-xl">
                  <span className="text-[10px] text-gray-400 font-display font-medium tracking-widest uppercase mb-1">Total Biaya</span>
                  <div className="flex items-baseline space-x-1 text-gold">
                    <span className="font-sans text-sm font-semibold">Rp</span>
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold gold-text-glow leading-none">
                      {pack.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3.5 pt-4">
                  <p className="text-xs font-display font-bold text-white uppercase tracking-wider mb-2">Servis Termasuk:</p>
                  <ul className="space-y-2.5 text-xs text-gray-300 leading-normal">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-3">
                        <span className="text-gold shrink-0 mt-0.5">
                          <LucideIcon name="CheckCircle2" size={14} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking Button Trigger */}
              <div className="pt-8 mt-6 border-t border-dark-border/40">
                <button
                  onClick={() => onOpenBooking('', pack.id)}
                  className={`w-full py-3.5 rounded-lg font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    pack.isPremium
                      ? 'gold-gradient text-black hover:opacity-90 shadow-lg shadow-gold/20 hover:scale-[1.01]'
                      : 'bg-black/60 hover:bg-gold/10 text-white hover:text-gold border border-dark-gold-border'
                  }`}
                >
                  <LucideIcon name="Calendar" size={15} />
                  <span>Ambil Paket Ini</span>
                </button>
              </div>

            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
