export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  iconName: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPremium?: boolean;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  packageId?: string;
  date: string;
  time: string;
  barber: string;
  status: 'pending' | 'confirmed';
}
