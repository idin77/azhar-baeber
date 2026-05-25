import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import LucideIcon from './LucideIcon';

interface ServicesProps {
  onOpenBooking: (serviceId: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  // Map services to dynamic lucide icon names
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'haircut':
        return 'Scissors';
      case 'shave':
        return 'Sparkles';
      case 'hairwash':
        return 'Droplets';
      case 'styling':
        return 'Flame';
      case 'coloring':
        return 'Paintbrush';
      case 'kids-haircut':
        return 'Baby';
      default:
        return 'Smile';
    }
  };

  return (
    <section id="layanan" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Diamond dividers exactly matching layout */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Eksklusif Perawatan Pria
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            LAYANAN <span className="text-gold font-serif">POTONG RAMBUT PRIA KARAWANG</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Dynamic Service Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES.map((serv, index) => (
            <motion.div
              key={serv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#121212] border border-dark-border rounded-xl overflow-hidden flex flex-col justify-between hover:border-dark-gold-border transition-all duration-300 gold-glow"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={serv.image}
                  alt={serv.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 filter brightness-[0.82] group-hover:brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-95" />
                
                {/* Duration Floating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-dark-gold-border/20 text-gold text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full tracking-wide">
                  ⏰ {serv.duration}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-3">
                    <span className="p-2 bg-gold/5 border border-gold/20 text-gold rounded-lg shadow-inner">
                      <LucideIcon name={getServiceIcon(serv.id)} size={16} />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white transition-colors duration-200 group-hover:text-gold">
                      {serv.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                {/* Direct Price & CTA alignment */}
                <div className="flex items-center justify-between border-t border-dark-border/40 mt-6 pt-5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-display tracking-widest text-gray-500">Harga Layanan</span>
                    <span className="font-mono text-gold text-lg font-bold">
                      Rp {serv.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(serv.id)}
                    className="px-4.5 py-2.5 bg-black hover:bg-gold/10 border border-dark-gold-border text-gold hover:text-white text-xs font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer"
                  >
                    <span>Pilih</span>
                    <LucideIcon name="ChevronRight" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
