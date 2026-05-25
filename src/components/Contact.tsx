import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import LucideIcon from './LucideIcon';

export default function Contact() {
  const contactDetails = [
    {
      id: 'phone',
      title: 'WhatsApp Resmi',
      value: CONTACT_INFO.whatsapp,
      link: CONTACT_INFO.whatsappLink,
      icon: 'MessageCircle',
      color: 'text-[#25D366]',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      value: CONTACT_INFO.instagram,
      link: CONTACT_INFO.instagramLink,
      icon: 'Instagram',
      color: 'text-[#E1306C]',
    },
    {
      id: 'address',
      title: 'Alamat Barbershop',
      value: CONTACT_INFO.address,
      link: 'https://maps.google.com/?q=Azhar+Barbershop+Telukjambe+Karawang',
      icon: 'MapPin',
      color: 'text-red-400',
    },
    {
      id: 'hours',
      title: 'Jam Operasional',
      value: CONTACT_INFO.hours,
      link: null,
      icon: 'Clock',
      color: 'text-gold',
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212] relative overflow-hidden">
      {/* Background visual light spill */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with layout dividers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Hubungi & Kunjungi Kami
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            KONTAK & LOKASI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-wrapper">
          
          {/* Left Column: Interactive Contact Tiles (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                INFORMASI KONTAK
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
                Hubungi kami sekarang untuk menanyakan baris antrean atau reservasi khusus. Kami siap menyambut kehadiran Anda dengan senyuman hangat dan pelayanan terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {contactDetails.map((item) => {
                const isClickable = !!item.link;
                const WrapperTag = isClickable ? 'a' : 'div';
                const wrapperProps = isClickable
                  ? { href: item.link as string, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <WrapperTag
                    key={item.id}
                    {...(wrapperProps as any)}
                    className={`bg-black/40 border border-dark-border rounded-xl p-5 space-y-3 transition-colors duration-200 flex flex-col items-start ${
                      isClickable
                        ? 'hover:border-dark-gold-border hover:bg-gold/5 group cursor-pointer'
                        : ''
                    }`}
                  >
                    <div className={`p-3 bg-white/5 group-hover:bg-white/10 rounded-lg ${item.color}`}>
                      <LucideIcon name={item.icon} size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-xs font-semibold uppercase text-gold tracking-widest">
                        {item.title}
                      </h4>
                      <p className="text-white text-xs sm:text-sm font-medium leading-relaxed group-hover:text-gold-200 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </WrapperTag>
                );
              })}
            </div>

            {/* Hubungi WhatsApp Button matching precisely the mockup */}
            <div className="pt-6 w-full">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-[#1E5D34] to-[#25D366] hover:opacity-95 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-green-500/10 flex items-center justify-center space-x-3 transition duration-300 hover:scale-[1.01]"
              >
                <LucideIcon name="MessageCircle" size={20} />
                <span>HUBUNGI KAMI DI WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Stylized Frame (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative border border-dark-gold-border rounded-2xl overflow-hidden min-h-[350px] bg-[#121212] group flex flex-col justify-between"
          >
            {/* Embedded interactive Iframe of Google Maps pointing to Telukjambe, Karawang */}
            <div className="absolute inset-0 z-0 opacity-70 filter grayscale contrast-125 hover:opacity-90 hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Google Maps - Azhar Barbershop Location"
                src="https://maps.google.com/maps?q=Telukjambe%20Karawang%20Jawa%20Barat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Maps HUD/Info Card overlay bottom */}
            <div className="relative z-10 bg-black/85 backdrop-blur-md border-t border-dark-border p-4 mt-auto">
              <div className="flex items-center justify-between sm:space-x-4">
                <div className="space-y-1">
                  <p className="font-serif text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                    <span className="text-gold"><LucideIcon name="MapPin" size={14} /></span>
                    <span>AZHAR BARBERSHOP</span>
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Telukjambe, Kec. Telukjambe Timur, Kabupaten Karawang, Jawa Barat
                  </p>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Azhar+Barbershop+Telukjambe+Karawang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-black rounded-lg p-2.5 hover:bg-gold-400 transition cursor-pointer"
                  id="google-maps-link"
                >
                  <LucideIcon name="ExternalLink" size={16} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
