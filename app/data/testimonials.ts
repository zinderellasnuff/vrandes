/**
 * Testimonials Data
 *
 * Datos de los testimonios de clientes.
 * Para agregar un nuevo testimonio, copia uno existente y modifica los valores.
 */

import type { Locale } from '@/lib/i18n/config';

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  // Textos por idioma
  description: {
    es: string;
    en: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Richard',
    date: '03 Junio 2025',
    rating: 5,
    description: {
      es: 'La organización, liderazgo y logística fueron impecables y absolutamente confiables. El país es fascinante e impresionante. Prepárense para el frío y la altitud. ¡Altamente recomendado!',
      en: 'The organization, leadership and logistics were impeccable and absolutely reliable. The country is fascinating and impressive. Be prepared for the cold and altitude. Highly recommended!',
    },
  },
  {
    id: '2',
    name: 'Olivier',
    date: '26 Noviembre 2024',
    rating: 5,
    description: {
      es: 'Una memoria excepcional.',
      en: 'An exceptional memory.',
    },
  },
  {
    id: '3',
    name: 'Claude',
    date: '22 Octubre 2024',
    rating: 5,
    description: {
      es: 'El viaje fue una emoción intensa, profunda y duradera con una riqueza insospechada. Destacaría el grupo, el motociclismo, el camino y las emociones.',
      en: 'The trip was an intense, deep and lasting emotion with unsuspected richness. I would highlight the group, the motorcycling, the road and the emotions.',
    },
  },
  {
    id: '4',
    name: 'Martine',
    date: '16 Octubre 2024',
    rating: 5,
    description: {
      es: 'Amo estos viajes que me sacan de mis hábitos motociclistas. Me siento segura pero aventurera al mismo tiempo.',
      en: 'I love these trips that take me out of my motorcycling habits. I feel safe yet adventurous at the same time.',
    },
  },
];

/**
 * Obtener testimonios formateados para un idioma específico
 */
export function getTestimonials(lang: Locale) {
  return testimonials.map((t) => ({
    id: t.id,
    name: t.name,
    date: t.date,
    rating: t.rating,
    description: t.description[lang],
  }));
}
