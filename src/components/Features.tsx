import { motion } from 'motion/react';
import { FEATURES } from '../data';
import LucideIcon from './LucideIcon';

export default function Features() {
  // Let's explicitly map a custom Lucide icon to each feature ID to match the icons perfectly
  const getIconName = (id: string) => {
    switch (id) {
      case 'barber-profesional':
        return 'Users'; // representing 'Barber Profesional'
      case 'hasil-terbaik':
        return 'Scissors'; // representing 'Hasil Terbaik'
      case 'produk-berkualitas':
        return 'CheckSquare'; // representing 'Produk Berkualitas' (Shield or Check)
      case 'tempat-nyaman':
        return 'Store'; // representing 'Tempat Nyaman' (barbershop space)
      default:
        return 'Award';
    }
  };

  return (
    <section className="relative z-10 bg-[#0A0A0A] px-4 -mt-10 sm:-mt-16 max-w-7xl mx-auto" id="keunggulan">
      {/* Horizontal deck container matching the mockup overlay exactly */}
      <div className="bg-gradient-to-r from-[#111111] to-[#0D0D0D] border border-dark-gold-border rounded-xl shadow-2xl overflow-hidden py-6 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x-0 lg:divide-x divide-dark-border">
          {FEATURES.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start md:items-center lg:items-start p-4 space-x-4 lg:first:pl-0 lg:last:pr-0 transition-transform duration-300 hover:scale-[1.01] ${
                index > 0 ? 'pt-6 md:pt-4 lg:pt-0' : ''
              }`}
            >
              {/* Gold Icon container */}
              <div className="shrink-0 p-3.5 bg-gold/5 border border-gold/15 rounded-xl text-gold gold-glow">
                <LucideIcon name={getIconName(feat.id)} size={24} />
              </div>

              {/* Text metadata */}
              <div className="space-y-1">
                <h3 className="font-display font-bold text-white uppercase text-xs sm:text-sm tracking-wider">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] lg:max-w-none">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
