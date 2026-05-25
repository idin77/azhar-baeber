import { motion } from 'motion/react';
import { HERO_CONTENT, CONTACT_INFO } from '../data';
import LucideIcon from './LucideIcon';
import heroBg from '../assets/images/hero_cr7_barber_1779643979877.png';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 lg:pt-36 bg-black"
    >
      {/* Background Image with Rich Dark Gradient Masks & Styling */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Barbershop Workspace"
          className="w-full h-full object-cover object-center opacity-45 scale-102 filter grayscale contrast-115 brightness-90 animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Deep vignette masking */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        
        {/* Luxury Gold Ambient Light Glow */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 lg:py-20 flex flex-col items-center">
        {/* Accent Tagline with Gold Line Dividers precisely as in the layout mockup */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-4 sm:mb-6"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold gold-text-glow">
            {HERO_CONTENT.tagline}
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Big Bold Elegant Title: "AZHAR BARBERSHOP" */}
        <div className="space-y-1 sm:space-y-3 mb-6 sm:mb-8" id="hero-title-container">
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-wider text-white select-none drop-shadow-2xl"
          >
            {HERO_CONTENT.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Small divider scissors logo */}
            <div className="flex items-center space-x-4 w-full justify-center opacity-85 mb-2">
              <span className="h-[1.5px] w-12 sm:w-20 bg-gold" />
              <span className="text-gold">
                <LucideIcon name="Scissors" size={16} />
              </span>
              <span className="h-[1.5px] w-12 sm:w-20 bg-gold" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-[0.15em] text-gold gold-text-glow uppercase">
              {HERO_CONTENT.subTitle}
            </h2>
          </motion.div>
        </div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl sm:max-w-2xl text-gray-300 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-balance mb-8 sm:mb-12"
          id="hero-description"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* Double Call to Actions! */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
          id="hero-cta-buttons"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 gold-gradient hover:opacity-95 text-black font-display font-bold text-sm uppercase tracking-wider rounded-lg shadow-xl hover:shadow-gold/30 flex items-center justify-center space-x-2.5 transition duration-300 hover:scale-[1.03] cursor-pointer"
            id="hero-booking-btn"
          >
            <LucideIcon name="CalendarDays" size={18} />
            <span>{HERO_CONTENT.ctaText}</span>
          </button>

          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border border-dark-gold-border hover:border-gold text-white font-display font-bold text-sm uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2.5 transition duration-300 hover:scale-[1.03]"
            id="hero-whatsapp-btn"
          >
            <LucideIcon name="MessageCircle" size={18} className="text-[#25D366]" />
            <span>Chat WhatsApp</span>
          </a>
        </motion.div>

        {/* Scroll down elegant indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 cursor-pointer hidden lg:flex flex-col items-center space-y-2 text-gold hover:text-white transition-colors duration-200"
          onClick={() => {
            document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="hero-scroll-down"
        >
          <span className="font-display text-[9px] uppercase tracking-[0.2em]">Scroll Down</span>
          <LucideIcon name="ChevronsDown" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
