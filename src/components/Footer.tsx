import { CONTACT_INFO } from '../data';
import LucideIcon from './LucideIcon';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-dark-border py-12 lg:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-dark-border/40">
          
          {/* Brand/Summary Column - md:col-span-4 */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                viewBox="0 0 100 120"
                className="w-10 h-10 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
              >
                <path d="M50,15 L15,25 L15,65 C15,90 50,110 50,110 C50,110 85,90 85,65 L85,25 L50,15 Z" />
                <path d="M50,22 L22,30 L22,64 C22,84 50,101 50,101 C50,101 78,84 78,64 L78,30 L50,22 Z" strokeWidth="2" opacity="0.6"/>
                <path d="M35,16 L38,8 L50,14 L62,8 L65,16" strokeWidth="4"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-wider text-white">AZHAR</span>
                <span className="font-display text-[9px] font-bold tracking-[0.25em] text-gold uppercase">BARBERSHOP</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Potongan rambut modis, cukur klimis, perlakuan VIP, dan kenyamanan utama bagi tiap pria urban modern. Tampil keren, percaya diri sepenuhnya bersama Azhar Barbershop.
            </p>
          </div>

          {/* Quick Navigations - md:col-span-4 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold">Navigasi Cepat</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <a href="#beranda" className="hover:text-gold transition">Beranda</a>
              <a href="#tentang" className="hover:text-gold transition">Tentang Kami</a>
              <a href="#layanan" className="hover:text-gold transition">Layanan Resmi</a>
              <a href="#galeri" className="hover:text-gold transition">Galeri Kerja</a>
              <a href="#harga" className="hover:text-gold transition">Daftar Paket</a>
              <a href="#faq" className="hover:text-gold transition">Tanya Jawab (FAQ)</a>
              <a href="#artikel" className="hover:text-gold transition">Artikel SEO</a>
              <a href="#kontak" className="hover:text-gold transition">Hubungi Kami</a>
            </div>
          </div>

          {/* Contact Summary - md:col-span-4 */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold text-left">Jam Operasional</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="text-gold"><LucideIcon name="Clock" size={13} /></span>
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold"><LucideIcon name="MapPin" size={13} /></span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold"><LucideIcon name="Phone" size={13} /></span>
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gold"><LucideIcon name="Instagram" size={13} /></span>
                <a href="https://www.instagram.com/azhar_barber/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">
                  @azhar_barber
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright aligned elegantly with back to top button */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-gray-500 space-y-4 sm:space-y-0" id="footer-copyright-row">
          <p>© 2026 AZHAR BARBERSHOP — Tampil Rapi, Tampil Percaya Diri</p>
          
          <button
            onClick={handleScrollToTop}
            className="group flex items-center space-x-1 hover:text-gold transition duration-200 cursor-pointer text-[11px]"
            id="back-to-top-btn"
          >
            <span>Kembali ke Atas</span>
            <span className="transform group-hover:-translate-y-0.5 transition-transform duration-200 text-gold">
              <LucideIcon name="ChevronsUp" size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
