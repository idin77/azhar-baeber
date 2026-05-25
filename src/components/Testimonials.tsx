import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import LucideIcon from './LucideIcon';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-black relative">
      {/* Abstract luxury ambient layout elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with layout dividers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Ulasan Jujur Pelanggan
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            TESTIMONI PELANGGAN
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Testimonials Grid Layout with outstanding design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="testimonials-grid">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#121212] border border-dark-border rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-dark-gold-border transition-all duration-300 gold-glow relative"
            >
              {/* Quote Mark background decoration */}
              <div className="absolute right-6 top-6 text-gold/10 font-serif text-7xl select-none leading-none pointer-events-none">
                &ldquo;
              </div>

              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold">
                      <LucideIcon name="Star" size={16} className="fill-gold" />
                    </span>
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed italic relative z-10">
                  &ldquo;{testi.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta User Card */}
              <div className="flex items-center space-x-4 border-t border-dark-border/60 mt-6 pt-5">
                {/* Avatar Initials Circle */}
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-dark-gold-border flex items-center justify-center text-gold font-serif font-bold text-base select-none shrink-0">
                  {testi.name.split(' ').map(part => part[0]).join('')}
                </div>

                {/* Meta details */}
                <div className="flex-grow">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                    {testi.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-gray-400 mt-0.5">
                    <span className="text-gold-400 font-medium">{testi.service}</span>
                    <span className="text-gray-600">•</span>
                    <span>{testi.date}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
