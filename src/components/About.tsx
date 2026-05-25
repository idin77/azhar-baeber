import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import LucideIcon from './LucideIcon';

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-gradient-to-b from-black to-dark-bg relative overflow-hidden">
      {/* Decorative Golden Ambient Backlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Story & Achievements Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-[2px] w-6 bg-gold" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold gold-text-glow">
                  Barbershop Profesional Karawang
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Barbershop Karawang Terdekat: Pangkas Rambut & Potong Rambut Pria Terbaik
              </h2>
            </div>

            <div className="space-y-5 text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Mencari <strong>Barbershop Karawang</strong> atau <strong>pangkas rambut Karawang</strong> terdekat yang menawarkan kualitas premium? <strong>Azhar Barbershop Karawang</strong> hadir sebagai jawaban untuk Anda yang menginginkan layanan potong rambut pria Karawang dengan hasil presisi tinggi, pelayanan VIP profesional, dan atmosfer yang sejuk ber-AC serta nyaman.
              </p>
              <p>
                Didirikan sejak tahun 2020, kami konsisten membuktikan diri sebagai <strong>barbershop profesional Karawang</strong> yang berdedikasi tinggi. Setiap barber kami terlatih untuk menganalisis kontur wajah sebelum memotong rambut untuk memberikan rekomendasi gaya rambut modern paling trendi dan cocok untuk kepribadian Anda.
              </p>
              <p>
                Kami bangga telah melayani ribuan pelanggan puas di wilayah Telukjambe dan Karawang sekitarnya, menjadikannya pilihan utama bagi Anda yang mengutamakan ketampanan maksimal dengan peralatan steril berkualitas tinggi namun harga yang tetap merakyat.
              </p>
            </div>

            {/* Quick stats/features bullet row */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-dark-border/60">
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-2xl sm:text-3xl font-black text-gold gold-text-glow">6+</h4>
                <p className="text-[11px] font-display uppercase tracking-widest text-gray-500 mt-1">Layanan Utama</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-2xl sm:text-3xl font-black text-gold gold-text-glow">1.5k+</h4>
                <p className="text-[11px] font-display uppercase tracking-widest text-gray-500 mt-1">Pelanggan Puas</p>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-2xl sm:text-3xl font-black text-gold gold-text-glow">4+</h4>
                <p className="text-[11px] font-display uppercase tracking-widest text-gray-500 mt-1">Barber Ahli</p>
              </div>
            </div>

            {/* Conversion Optimization: Trust-laden CTA block */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4" id="about-nav-cta">
              <a
                href="https://wa.me/6285886752081"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient hover:opacity-95 text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-xl hover:shadow-gold/25 flex items-center justify-center space-x-2.5 transition duration-300 hover:scale-[1.02]"
              >
                <LucideIcon name="MessageCircle" size={16} />
                <span>Konsultasi Gaya WA</span>
              </a>
              <button
                onClick={() => {
                  document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-white/5 border border-dark-gold-border hover:border-gold text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg transition duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Eksplor Layanan Kami
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Brand Badge Shield Card Layout matching the mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center flex-col items-center bg-[#121212] border-2 border-dark-gold-border p-8 sm:p-12 rounded-2xl shadow-2xl relative"
          >
            {/* Corner Decorative Borders */}
            <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-gold/40" />
            <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-gold/40" />

            <div className="flex flex-col items-center text-center space-y-6 max-w-sm">
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-white">
                TENTANG KAMI
              </h3>
              
              <div className="w-16 h-[1.5px] bg-gold" />

              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed italic">
                &ldquo;Azhar Barbershop adalah tempat terbaik untuk mendapatkan potongan rambut berkualitas dengan harga terjangkau. Kepuasan pelanggan adalah prioritas kami.&rdquo;
              </p>

              {/* Gold Emblem Shield matching mockup */}
              <div className="flex flex-col items-center space-y-3 pt-6">
                <div className="relative flex items-center justify-center w-20 h-20 text-gold bg-gold/5 rounded-full p-2">
                  {/* SVG shield */}
                  <svg
                    viewBox="0 0 100 120"
                    className="absolute inset-0 w-full h-full text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M50,15 L15,25 L15,65 C15,90 50,110 50,110 C50,110 85,90 85,65 L85,25 L50,15 Z" />
                    <path d="M50,22 L22,30 L22,64 C22,84 50,101 50,101 C50,101 78,84 78,64 L78,30 L50,22 Z" strokeWidth="1" opacity="0.6"/>
                    <path d="M35,16 L38,8 L50,14 L62,8 L65,16" strokeWidth="2"/>
                  </svg>
                  <span className="font-serif text-3xl font-black tracking-widest text-white z-10 pt-2 select-none">
                    A
                  </span>
                </div>
                
                <h4 className="font-serif text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
                  AZHAR
                </h4>
                <p className="font-display text-[9px] font-bold tracking-[0.25em] text-gold uppercase -mt-1">
                  BARBERSHOP
                </p>
                
                <div className="flex items-center space-x-2 pt-2">
                  <span className="h-[1.5px] w-6 bg-gold/40" />
                  <span className="font-mono text-xs text-gold uppercase tracking-widest font-bold">
                    {CONTACT_INFO.established}
                  </span>
                  <span className="h-[1.5px] w-6 bg-gold/40" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
