import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Berapa harga potong rambut di Azhar Barbershop?",
      answer: "Harga potong rambut di Azhar Barbershop Karawang sangat terjangkau dengan hasil berkualitas premium. Kami menawarkan Paket Basic seharga Rp 35.000 (Cut, Wash, and Dry) dan Paket Premium lengkap seharga Rp 50.000. Untuk perawatan termewah, silakan coba Paket Exclusive kami seharga Rp 75.000."
    },
    {
      question: "Apakah menerima potong rambut anak?",
      answer: "Ya, tentu saja! Kami melayani potong rambut anak-anak (Kids Haircut) dengan penanganan yang super sabar, ramah, dan bersahabat seharga Rp 25.000. Barber kami berpengalaman membuat anak-anak tetap tenang dan nyaman selama pemotongan."
    },
    {
      question: "Apakah bisa booking lewat WhatsApp?",
      answer: "Ya, sangat bisa! Kami sangat merekomendasikan booking lewat WhatsApp resmi kami di nomor 085886752081 agar Anda tidak perlu mengantre lama. Tim admin kami akan segera mengonfirmasi ketersediaan jadwal pilihan Anda."
    },
    {
      question: "Jam buka Azhar Barbershop?",
      answer: "Azhar Barbershop Karawang buka setiap hari, dari hari Senin sampai Minggu, mulai pukul 10:00 WIB pagi hingga pukul 21:00 WIB malam. Kami siap melayani Anda di waktu senggang Anda, baik hari kerja maupun akhir pekan."
    },
    {
      question: "Apakah tersedia model rambut modern?",
      answer: "Tentu saja! Barber profesional kami selalu up-to-date dengan tren rambut terkini. Kami menguasai berbagai model rambut modern terpopuler seperti Textured Crop, Classic Pompadour, Undercut, Buzz Cut, Mullet, Taper Fade, dan Hair Tattoo/Slick Back."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-black to-dark-bg relative overflow-hidden">
      {/* Background Decorative Gold Ambient Spots */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with layout dividers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Pertanyaan yang Sering Diajukan
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            FAQ <span className="text-gold">SEO</span> BARBERSHOP KARAWANG
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-lg">
            Temukan jawaban lengkap mengenai layanan pangkas rambut pria terbaik, harga paket, dan jam operasional kami di Karawang.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4" id="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-dark-border rounded-xl hover:border-dark-gold-border transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-gold transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <span className={`p-1.5 rounded-lg bg-white/5 text-gold group-hover:bg-gold/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold/10' : ''}`}>
                    <LucideIcon name="ChevronDown" size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-300 font-sans text-xs sm:text-sm leading-relaxed border-t border-dark-border/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help CTA */}
        <div className="mt-12 text-center p-6 bg-black/40 border border-dark-gold-border/20 rounded-xl max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-gray-300 font-sans">
            Ada pertanyaan lain? Cari tahu jadwal longgar dan hubungi admin pangkas rambut kami dengan cepat.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6285886752081"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-6 gold-gradient hover:opacity-95 text-black font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition duration-300"
            >
              <LucideIcon name="MessageCircle" size={15} />
              <span>Tanya Live WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
