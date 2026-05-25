import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export default function ArticlesSection() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles: Article[] = [
    {
      id: "model-rambut-2026",
      title: "Model Rambut Pria Populer 2026",
      excerpt: "Temukan tren gaya rambut pria 2026 terpopuler yang wajib Anda coba untuk menunjang penampilan prima Anda.",
      category: "Tren Gaya Rambut",
      date: "Mei 25, 2026",
      readTime: "4 Menit Baca",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
      content: [
        "Memasuki tahun 2026, tren gaya rambut pria berfokus pada keseimbangan antara kesederhanaan kasual dan presisi ekstrem. Jika Anda sedang mencari inspirasi di Barbershop Karawang terbaik, gaya rambut bertekstur tinggi dan fade yang sangat halus adalah jawabannya.",
        "1. Textured Crop Fade: Gaya ini menggabungkan poni pendek yang dipotong merata dengan tekstur acak di bagian atas serta taper fade tipis di sekeliling kepala. Gaya ini sangat digemari karena perawatannya yang sangat simpel dan memberi kesan tegas pada rahang.",
        "2. Modern Mullet: Tren retro ini berlanjut dengan sentuhan modern 2026. Bagian samping dicukur lebih tipis (biasanya menggunakan teknik drop fade atau burst fade), sedangkan bagian atas hingga belakang dibiarkan tebal-berantakan secara natural.",
        "3. Classic Slit Side Part: Pilihan bagi para eksekutif dan pria profesional Karawang. Garis belahan rambut dibuat sangat tajam menggunakan pisau cukur (razor line out), dipadukan dengan teknik pompadour atau slick back di bagian atas."
      ]
    },
    {
      id: "tips-bentuk-wajah",
      title: "Tips Memilih Gaya Rambut Sesuai Bentuk Wajah",
      excerpt: "Ketahui cara profesional menentukan potongan yang paling sesuai dengan proporsi bentuk wajah Anda demi hasil maksimal.",
      category: "Panduan Gaya",
      date: "Mei 24, 2026",
      readTime: "5 Menit Baca",
      image: "https://images.unsplash.com/photo-1593702295094-aec22597af05?auto=format&fit=crop&q=80&w=600",
      content: [
        "Setiap orang memiliki kontur tengkorak dan bentuk muka yang unik. Di Azhar Barbershop Karawang, barber ahli kami selalu melakukan diagnosis bentuk wajah sebelum mulai memegang gunting pangkas rambut Anda. Berikut adalah rumus dasarnya:",
        "1. Wajah Oval: Berbahagialah pemilik wajah oval, karena proporsinya sangat seimbang. Anda cocok dengan hampir semua gaya rambut, mulai dari buzz cut pendek hingga quiff yang bervolume tinggi di bagian atas.",
        "2. Wajah Bulat: Tujuannya adalah memberi ilusi tinggi dan sudut tajam. Pilih gaya rambut yang tebal ke atas seperti Spiky, Faux Hawk, atau High Top Fade, serta hindari potongan rambut mengembang ke samping.",
        "3. Wajah Kotak/Persegi: Bentuk wajah ini sangat maskulin dengan garis rahang yang tegas. Model rambut Undercut Klasik, Slick Back, atau Short Pompadour sangat direkomendasikan untuk menonjolkan kekuatan rahang Anda.",
        "4. Wajah Segitiga / Diamond: Potongan rambut berantakan (textured messy cuts) atau fringe (berponi) sangat cocok untuk meminimalkan lebar tulang pipi Anda yang menonjol."
      ]
    },
    {
      id: "cara-merawat-rambut",
      title: "Cara Merawat Rambut Setelah Potong",
      excerpt: "Panduan praktis menjaga ketajaman garis rambut dan merawat kesehatan kulit kepala Anda dari rumah.",
      category: "Perawatan Rambut",
      date: "Mei 23, 2026",
      readTime: "3 Menit Baca",
      image: "https://images.unsplash.com/photo-1605497746445-97d1b0a9ead9?auto=format&fit=crop&q=80&w=600",
      content: [
        "Potongan rambut baru dari pangkas rambut profesional Karawang hanya akan bertahan maksimal jika Anda merawatnya secara konsisten. Inilah tips merawat rambut pasca-cukur dari ahlinya:",
        "1. Gunakan Shampo Bebas Sulfat: Sulfat dapat mengikis minyak alami dan kelembapan esensial dari batang rambut Anda, membuatnya keriting kasar pasca keramas. Gunakan shampo bernutrisi tinggi.",
        "2. Aplikasikan Hair Tonic: Setiap malam, teteskan vitamin hair tonic di sela-sela kulit kepala Anda dan pijat lembut selama 2 menit. Ini meningkatkan sirkulasi darah dan memicu pertumbuhan rambut yang tebal berkilau.",
        "3. Jangan Asal Memilih Pomade: Gunakan produk pomade premium berbahan dasar air (water-based) agar mudah dibilas bersih dalam satu kali siraman air, sehingga mencegah ketombe menumpuk dan penyumbatan pori-pori kulit kepala."
      ]
    },
    {
      id: "trend-rambut-modern",
      title: "Trend Gaya Rambut Pria Modern",
      excerpt: "Mengapa tren pangkas rambut modern beralih dari kaku klimis menjadi gaya natural bervolume.",
      category: "Kultur Gaya Hidup",
      date: "Mei 22, 2026",
      readTime: "4 Menit Baca",
      image: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=600",
      content: [
        "Pergeseran besar sedang terjadi di dunia gaya pangkas rambut pria. Jika satu dekade lalu gaya rambut pomade mengkilap yang kaku mendominasi, kini era natural bervolume dan 'effortless look' sedang merajai salon dan barbershop profesional terdekat Karawang.",
        "1. Penggunaan Matte Clay dan Powder: Mulai kurangi minyak klimis pekat. Bedak penata rambut (Hair styling powder) dan clay kering matte kini menjadi idola untuk menghasilkan tekstur rambut kasual yang gampang diatur berulang kali tanpa lepek.",
        "2. Taper Fade Halus: Dibandingkan mencukur habis kulit kepala samping secara mendadak, teknik taper fade dengan gradasi super lembut (dari kulit bersih ke rambut tebal) kini lebih disukai untuk memancarkan aura maskulin yang elegan dan mewah.",
        "Segera konsultasikan potong rambut pria Karawang impian Anda langsung dengan tim ahli Azhar Barbershop untuk penyesuaian gaya rambut yang presisi!"
      ]
    }
  ];

  const handleOpenArticle = (id: string) => {
    setSelectedArticleId(id);
  };

  const selectedArticle = articles.find(art => art.id === selectedArticleId);

  return (
    <section id="artikel" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with layout dividers */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-gold text-xs">◆</span>
            <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold gold-text-glow">
              Edukasi Gaya & Tips Rambut
            </span>
            <span className="text-gold text-xs">◆</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white capitalize mt-1">
            ARTIKEL SEO PENDUKUNG
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-lg">
            Tips praktis dari Barber Profesional Karawang untuk memilih, merawat, dan memelihara ketajaman gaya rambut modern Anda.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="articles-deck">
          {articles.map((art) => (
            <div
              key={art.id}
              className="group bg-[#121212] border border-dark-border rounded-xl overflow-hidden flex flex-col justify-between hover:border-dark-gold-border transition-all duration-300 gold-glow cursor-pointer"
              onClick={() => handleOpenArticle(art.id)}
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-550 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-gold text-black font-display font-semibold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md leading-none">
                  {art.category}
                </span>
              </div>

              {/* Text Info Container */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-mono">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white leading-snug group-hover:text-gold transition-colors duration-200">
                    {art.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-dark-border/40 flex items-center justify-between text-gold font-display font-bold text-[10px] uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>Baca Selengkapnya</span>
                  <LucideIcon name="ArrowRight" size={13} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Single Article Dialog/Modal */}
        <AnimatePresence>
          {selectedArticleId && selectedArticle && (
            <>
              {/* Dark backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticleId(null)}
                className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
                id="article-modal-backdrop"
              />

              {/* Content Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="fixed inset-x-4 top-20 bottom-10 md:top-24 md:bottom-12 max-w-3xl mx-auto bg-[#121212] border border-dark-gold-border rounded-2xl z-50 overflow-y-auto shadow-2xl flex flex-col"
                id="article-read-element"
              >
                {/* Header Image */}
                <div className="relative h-64 sm:h-80 shrink-0">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
                  
                  {/* Close button inside image top-right */}
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-gold hover:text-black rounded-full border border-dark-gold-border/20 text-white transition-all cursor-pointer"
                    aria-label="Tutup Artikel"
                  >
                    <LucideIcon name="X" size={18} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-gold text-black font-display font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-md mb-2 inline-block">
                      {selectedArticle.category}
                    </span>
                    <h2 className="font-serif text-xl sm:text-3xl font-bold text-white leading-tight mt-1">
                      {selectedArticle.title}
                    </h2>
                  </div>
                </div>

                {/* Body Article Text */}
                <div className="p-6 sm:p-8 flex-grow overflow-y-auto space-y-6 text-gray-300 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-mono border-b border-dark-border/40 pb-4">
                    <span>Dipublish: {selectedArticle.date}</span>
                    <span>•</span>
                    <span>Waktu: {selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>Penulis: Azhar Barbershop Team</span>
                  </div>

                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  <div className="bg-black/60 border border-dark-gold-border/20 rounded-xl p-6 space-y-4 shadow-inner mt-8">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                      <span className="text-gold"><LucideIcon name="Scissors" size={16} /></span>
                      <span>Dapatkan Potongan Sempurna Anda Sekarang!</span>
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Konsultasikan secara gratis bentuk struktur wajah Anda langsung bersama tim barber handal kami di pangkas rambut Karawang terpopuler. Nikmati pelayanan VIP kami.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="https://wa.me/6285886752081"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 bg-gradient-to-r from-[#1E5D34] to-[#25D366] hover:opacity-95 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition"
                      >
                        <LucideIcon name="MessageCircle" size={15} />
                        <span>Booking Cepat via WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setSelectedArticleId(null);
                          // trigger index.html navigation click or set state
                          const elements = document.querySelector('#kontak');
                          if (elements) elements.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="py-2.5 px-5 bg-black/80 hover:bg-gold/10 text-white hover:text-gold border border-dark-gold-border rounded-lg text-xs font-display font-bold uppercase transition"
                      >
                        Lihat Lokasi Kami
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
