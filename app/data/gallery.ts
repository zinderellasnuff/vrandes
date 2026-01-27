/**
 * Gallery Data
 *
 * Datos de las fotos de la galería.
 * Para agregar una nueva foto, copia una existente y modifica los valores.
 *
 * Tamaños disponibles:
 * - 'large': Ocupa 2x2 en el grid (para fotos destacadas)
 * - 'wide': Ocupa 2x1 (para fotos panorámicas)
 * - 'tall': Ocupa 1x2 (para fotos verticales)
 * - 'medium': Ocupa 1x1 (tamaño normal)
 */

import type { Locale } from '@/lib/i18n/config';

export type PhotoSize = 'large' | 'wide' | 'tall' | 'medium';

export interface Photo {
  id: string;
  src: string;
  size: PhotoSize;
  // Textos por idioma
  alt: {
    es: string;
    en: string;
  };
  caption?: {
    es: string;
    en: string;
  };
}

export const photos: Photo[] = [
  {
    id: '1',
    src: '/images/tours/canones-1.jpg',
    size: 'large',
    alt: {
      es: 'Motocicleta en cañón andino',
      en: 'Motorcycle in Andean canyon',
    },
    caption: {
      es: 'Cañón del Colca - Arequipa',
      en: 'Colca Canyon - Arequipa',
    },
  },
  {
    id: '2',
    src: '/images/tours/ushuaia-1.jpg',
    size: 'medium',
    alt: {
      es: 'Ruta hacia Ushuaia',
      en: 'Route to Ushuaia',
    },
    caption: {
      es: 'Camino al fin del mundo',
      en: 'Road to the end of the world',
    },
  },
  {
    id: '3',
    src: '/images/tours/alacarte3.jpeg',
    size: 'medium',
    alt: {
      es: 'Vista panorámica de montañas',
      en: 'Panoramic mountain view',
    },
    caption: {
      es: 'Altiplano peruano',
      en: 'Peruvian Altiplano',
    },
  },
  {
    id: '4',
    src: '/images/tours/alacarte3.jpeg',
    size: 'wide',
    alt: {
      es: 'Lago en el altiplano',
      en: 'Lake in the highlands',
    },
    caption: {
      es: 'Lagos de altura',
      en: 'High altitude lakes',
    },
  },
  {
    id: '5',
    src: '/images/tours/alacarte3.jpeg',
    size: 'tall',
    alt: {
      es: 'Desierto costero',
      en: 'Coastal desert',
    },
    caption: {
      es: 'Costa del Pacífico',
      en: 'Pacific Coast',
    },
  },
  {
    id: '6',
    src: '/images/tours/alacarte3.jpeg',
    size: 'medium',
    alt: {
      es: 'Paisaje patagónico',
      en: 'Patagonian landscape',
    },
    caption: {
      es: 'Patagonia argentina',
      en: 'Argentine Patagonia',
    },
  },
  {
    id: '7',
    src: '/images/tours/alacarte3.jpeg',
    size: 'medium',
    alt: {
      es: 'Montañas nevadas',
      en: 'Snow-capped mountains',
    },
    caption: {
      es: 'Volcanes de Arequipa',
      en: 'Arequipa Volcanoes',
    },
  },
  {
    id: '8',
    src: '/images/tours/alacarte3.jpeg',
    size: 'large',
    alt: {
      es: 'Carretera en el altiplano',
      en: 'Highway in the highlands',
    },
    caption: {
      es: 'Rutas de altura',
      en: 'High altitude routes',
    },
  },
];

/**
 * Obtener fotos formateadas para un idioma específico
 */
export function getPhotos(lang: Locale) {
  return photos.map((p) => ({
    id: p.id,
    src: p.src,
    size: p.size,
    alt: p.alt[lang],
    caption: p.caption?.[lang],
  }));
}
