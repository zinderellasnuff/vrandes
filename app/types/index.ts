export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export interface HeaderProps {
  transparent?: boolean;
}

export interface HeroProps {
  videoSrc: string;
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  images: string[];
  description: string;
  highlights: string[];
  color: string;
}

export interface TourShowcaseProps {
  tours: Tour[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  title: string;
  description: string;
  rating: number;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  size?: 'large' | 'wide' | 'tall' | 'medium';
}

export interface PhotoGalleryProps {
  photos: Photo[];
}
