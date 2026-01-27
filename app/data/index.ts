/**
 * Data Index
 *
 * Exporta todos los datos del sitio desde un solo lugar.
 * Importa desde aquí en lugar de archivos individuales.
 *
 * Ejemplo:
 *   import { getTestimonials, getPhotos, tours } from '@/app/data';
 */

// Testimonials
export { testimonials, getTestimonials } from './testimonials';
export type { Testimonial } from './testimonials';

// Gallery
export { photos, getPhotos } from './gallery';
export type { Photo, PhotoSize } from './gallery';

// Tours
export { tours, getTourById, getTourByKey } from './tours';
export type { Tour, TourKey } from './tours';

// Navigation
export {
  icons,
  navSections,
  sectionIcons,
  getNavItems,
  socialLinks,
  whatsappConfig,
} from './navigation';
export type { NavSectionId } from './navigation';

// About
export { aboutSlides } from './about';
export type { AboutSlide } from './about';
