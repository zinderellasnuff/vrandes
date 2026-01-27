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
  location: string;
  avatar: string;
  rating: number;
  // Textos por idioma
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Pierre Dubois',
    location: 'Lyon, Francia',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    title: {
      es: 'Aventura inolvidable',
      en: 'Unforgettable adventure',
    },
    description: {
      es: 'Jean-Louis conoce cada rincón de los Andes. Nos llevó por rutas que jamás habríamos descubierto solos. Las Royal Enfield son perfectas para este terreno. ¡Volveré!',
      en: "Jean-Louis knows every corner of the Andes. He took us through routes we never would have discovered alone. The Royal Enfields are perfect for this terrain. I'll be back!",
    },
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    location: 'London, UK',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    title: {
      es: 'La mejor aventura en moto',
      en: 'The best motorcycle adventure',
    },
    description: {
      es: 'La mejor aventura en motocicleta que he tenido. Machu Picchu en moto es algo que todos deberían experimentar. Guías profesionales, rutas increíbles y recuerdos inolvidables.',
      en: "The best motorcycle adventure I've ever had. Machu Picchu by bike is something everyone should experience. Professional guides, amazing routes, and unforgettable memories.",
    },
  },
  {
    id: '3',
    name: 'Hans Werner',
    location: 'Munich, Alemania',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    title: {
      es: 'Profesionalismo total',
      en: 'Total professionalism',
    },
    description: {
      es: 'Desde el primer contacto hasta el último día, todo impecable. Las motos estaban en excelente estado y la logística perfecta. Los paisajes del Perú en moto son indescriptibles.',
      en: "From first contact to the last day, everything was impeccable. The bikes were in excellent condition and the logistics were perfect. Peru's landscapes by motorcycle are indescribable.",
    },
  },
  {
    id: '4',
    name: 'Marc Benoit',
    location: 'Brussels, Bélgica',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    title: {
      es: 'Mi tercer viaje',
      en: 'My third trip',
    },
    description: {
      es: 'Mi tercer viaje con VRAndes y no será el último. Cada vez descubren nuevas rutas y experiencias. El equipo es como familia.',
      en: 'My third trip with VRAndes and it won\'t be the last. Each time they discover new routes and experiences. The team is like family.',
    },
  },
  {
    id: '5',
    name: 'Emma Thompson',
    location: 'Sydney, Australia',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    title: {
      es: 'Viaje de ensueño',
      en: 'Dream trip',
    },
    description: {
      es: 'Viajé sola desde Australia y me sentí segura todo el tiempo. El grupo era increíble y los paisajes superaron todas mis expectativas. El Cañón del Colca es impresionante.',
      en: 'I traveled solo from Australia and felt safe the entire time. The group was amazing and the landscapes exceeded all my expectations. Colca Canyon is breathtaking.',
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
    location: t.location,
    avatar: t.avatar,
    rating: t.rating,
    title: t.title[lang],
    description: t.description[lang],
  }));
}
