/**
 * Types Index
 *
 * Tipos TypeScript globales de la aplicación.
 * Los tipos específicos de datos están en /app/data/
 */

// Re-exportar tipos de datos
export type { Tour, TourKey } from '@/app/data/tours';
export type { Testimonial } from '@/app/data/testimonials';
export type { Photo, PhotoSize } from '@/app/data/gallery';
export type { AboutSlide } from '@/app/data/about';
export type { NavSectionId } from '@/app/data/navigation';

// ============================================================================
// Component Props
// ============================================================================

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

export interface HeroProps {
  videoSrc: string;
  title: string;
  description: string;
}

// ============================================================================
// Testimonials (formato para componentes)
// ============================================================================

export interface TestimonialDisplay {
  id: string;
  name: string;
  location: string;
  avatar: string;
  title: string;
  description: string;
  rating: number;
}

export interface TestimonialsProps {
  testimonials: TestimonialDisplay[];
}

// ============================================================================
// Gallery (formato para componentes)
// ============================================================================

export interface PhotoDisplay {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  size?: 'large' | 'wide' | 'tall' | 'medium';
}

export interface PhotoGalleryProps {
  photos: PhotoDisplay[];
}
