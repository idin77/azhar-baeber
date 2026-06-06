import { Service, Feature, PricePackage, Testimonial, GalleryItem } from './types';

export const HERO_CONTENT = {
  title: "AZHAR",
  subTitle: "BARBERSHOP",
  tagline: "Tampil keren, percaya diri sepenuhnya",
  description: "Azhar Barbershop hadir untuk Anda yang menginginkan potongan rambut terbaik dengan pelayanan profesional dan suasana nyaman.",
  ctaText: "Booking Sekarang",
  whatsappNumber: "+6285886752081"
};

export const CONTACT_INFO = {
  phone: "085886752081",
  whatsapp: "085886752081",
  whatsappLink: "https://wa.me/6285886752081",
  instagram: "@azharbarbershop",
  instagramLink: "https://instagram.com/azharbarbershop",
  address: "Telukjambe, Karawang, Jawa Barat",
  hours: "Buka Setiap Hari: 10:00 – 21:00 WIB",
  established: "Est. 2020"
};

export const FEATURES: Feature[] = [
  {
    id: "barber-profesional",
    title: "Barber Profesional",
    description: "Barber berpengalaman, handal, ramah, dan menguasai berbagai gaya potongan modern.",
    iconName: "UserCheck"
  },
  {
    id: "hasil-terbaik",
    title: "Hasil Terbaik",
    description: "Potongan rambut yang sangat rapi, presisi tinggi, dan disesuaikan dengan kontur wajah Anda.",
    iconName: "Scissors"
  },
  {
    id: "produk-berkualitas",
    title: "Produk Berkualitas",
    description: "Menggunakan pomade, clay, tonic, dan shampo premium untuk menjaga kesehatan rambut Anda.",
    iconName: "Award"
  },
  {
    id: "tempat-nyaman",
    title: "Tempat Nyaman",
    description: "Ruangan bersih ber-AC, kursi potong mewah, musik santai, dan atmosfer modern maskulin.",
    iconName: "Armchair"
  }
];

export const SERVICES: Service[] = [
  {
    id: "haircut",
    name: "Haircut",
    description: "Potongan rambut modern eksklusif yang disesuaikan dengan gaya dan kontur wajah Anda.",
    price: 35000,
    duration: "45 Menit",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
    iconName: "Scissors"
  },
  {
    id: "shave",
    name: "Shave",
    description: "Cukur kumis & janggut dengan metode handuk hangat untuk pori-pori segar dan kulit mulus.",
    price: 20000,
    duration: "25 Menit",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600",
    iconName: "Sparkles"
  },
  {
    id: "hairwash",
    name: "Hair Wash",
    description: "Pembersihan rambut menyeluruh dilengkapi pijatan lembut di kepala untuk meredakan ketegangan.",
    price: 15000,
    duration: "15 Menit",
    image: "https://images.unsplash.com/photo-1605497746445-97d1b0a9ead9?auto=format&fit=crop&q=80&w=600",
    iconName: "Droplet"
  },
  {
    id: "styling",
    name: "Hair Styling",
    description: "Penataan rambut premium menggunakan pomade/clay impor disesuaikan tema acara Anda.",
    price: 20000,
    duration: "15 Menit",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600",
    iconName: "Flame"
  },
  {
    id: "coloring",
    name: "Hair Coloring",
    description: "Pewarnaan rambut profesional menggunakan cat berkualitas aman untuk menghasilkan warna trendi.",
    price: 65000,
    duration: "60 Menit",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    iconName: "Palette"
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    description: "Potongan rambut modis yang sabar dan menyenangkan khusus untuk anak-anak tercinta.",
    price: 25000,
    duration: "30 Menit",
    image: "https://images.unsplash.com/photo-1517832606589-7a598ebab607?auto=format&fit=crop&q=80&w=600",
    iconName: "Smile"
  }
];

export const PACKAGES: PricePackage[] = [
  {
    id: "packet-basic",
    name: "Paket Basic",
    price: 35000,
    description: "Perawatan potong rambut standar berkualitas prima.",
    category: "Basic",
    features: [
      "Haircut Profesional",
      "Hair Wash & Cleanse",
      "Hair Tonic Vitamin",
      "Pijat Kepala Ringan",
      "Dry Styling"
    ]
  },
  {
    id: "packet-premium",
    name: "Paket Premium",
    price: 50000,
    description: "Layanan lengkap komprehensif untuk ketampanan maksimal Anda.",
    category: "Premium",
    features: [
      "Haircut Profesional",
      "Classic Shave / Beard Trim",
      "Premium Hair Wash",
      "Hot Towel Massage",
      "Hair Tonic Premium",
      "Styling dengan Pomade/Clay"
    ],
    isPremium: true
  },
  {
    id: "packet-exclusive",
    name: "Paket Exclusive",
    price: 75000,
    description: "Pengalaman barbershop termewah dengan pemulihan penuh.",
    category: "Premium",
    features: [
      "Haircut VIP Custom styling",
      "Classic Beard Grooming & Shave",
      "Premium Hair Wash & Conditioner",
      "Creambath / Head Massage Relax",
      "Hair Mask Treatment & Serum",
      "Premium Tonic & Styling",
      "Free Soft Drink / Black Coffee"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ahmad Fauzi",
    rating: 5,
    text: "Barbershop terbaik di kota ini! Tempatnya sejuk banget, bersih, dan wanginya enak. Mas barber-nya detail banget motong rambut, bener-bener disesuaikan sama bentuk jidat saya. Hasilnya rapi maksimal!",
    service: "Paket Premium",
    date: "2 minggu yang lalu"
  },
  {
    id: "testi-2",
    name: "Rian Hidayat",
    rating: 5,
    text: "Udah langganan di Azhar Barbershop dari setahun lalu. Pelayanannya konsisten ramah, harganya bersahabat tapi hasilnya kerasa mewah. Paket basic aja udah dapet pijat kepala yang enak banget.",
    service: "Haircut & Styling",
    date: "1 minggu yang lalu"
  },
  {
    id: "testi-3",
    name: "Budi Santoso",
    rating: 5,
    text: "Anak saya paling rewel kalau disuruh potong rambut, tapi di sini barbernya sabar banget dan pinter ngajak ngobrol anak-anak. Hasil haircut anak saya juga kece bener, sekarang dia selalu minta kesini.",
    service: "Kids Haircut",
    date: "3 hari yang lalu"
  },
  {
    id: "testi-4",
    name: "Thoriq Sadzily",
    rating: 5,
    text: "Layanan Shave handuk hangatnya bener-bener juara! Kulit kerasa mulus banget dan seger sehabis dicukur. Tempatnya maskulin dan elegan banget, dapet kopi hitam gratis pula. Recommended parah!",
    service: "Paket Exclusive",
    date: "Baru saja"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Classic Pompadour Fade",
    category: "Haircut",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gallery-2",
    title: "Textured Crop Fade",
    category: "Haircut",
    image: "https://images.unsplash.com/photo-1593702295094-aec22597af05?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gallery-3",
    title: "Perfect Beard Grooming",
    category: "Shave",
    image: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gallery-4",
    title: "Slick Back Classic",
    category: "Styling",
    image: "https://images.unsplash.com/photo-1634480256802-7cb5b451f99a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gallery-5",
    title: "Sharp Razor Line Out",
    category: "Haircut",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gallery-6",
    title: "Modern Quiff",
    category: "Styling",
    image: "https://images.unsplash.com/photo-1605497746445-97d1b0a9ead9?auto=format&fit=crop&q=80&w=600"
  }
];

export const BARBERS = ["Mas Azhar", "Rian", "Dani", "Bayu"];

export const TIME_SLOTS = [
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:30 - 19:30",
  "19:30 - 20:30",
  "20:30 - 21:00"
];
