/**
 * Tours Data
 *
 * Datos de los tours disponibles.
 * Para agregar un nuevo tour:
 * 1. Agrega una entrada aquí con su key único
 * 2. Agrega las traducciones en /dictionaries/es.json y /dictionaries/en.json
 *    bajo tours.items.[key]
 */

export type TourKey = 'emblematico' | 'alacarte' | 'raids' | 'alquiler';

export interface Tour {
  id: string;
  key: TourKey;
  images: string[];
  isEmblematic?: boolean;
  bookingUrl?: string;
}

export const tours: Tour[] = [
  {
    id: 'tour-emblematico',
    key: 'emblematico',
    images: [
      '/images/tours/emblematico/rider-altiplano-volcanes.jpg',
      '/images/tours/emblematico/grupo-machu-picchu.jpg',
      '/images/tours/emblematico/islas-flotantes-titicaca.jpg',
      '/images/tours/emblematico/riders-laguna-singrenacocha.jpg',
      '/images/tours/emblematico/mapa.webp',
      '/images/tours/emblematico/rider-cruce-rio.jpg',
      '/images/tours/emblematico/rider-puente-colgante-selva.jpg',
    ],
    isEmblematic: true,
    bookingUrl: 'https://www.vintagerides.com/us/tour-departure-schedule/?dest=2685',
  },
  {
    id: 'a-la-carte',
    key: 'alacarte',
    images: [
      '/images/tours/emblematico/rider-altiplano-volcanes.jpg',
      '/images/tours/emblematico/rider-puente-colgante-selva.jpg',
      '/images/tours/emblematico/rider-cruce-rio.jpg',
    ],
  },
  {
    id: 'raids',
    key: 'raids',
    images: [
      '/images/tours/raids/riders-ruta-fitz-roy.jpg',
      '/images/tours/raids/grupo-llegada-ushuaia.jpg',
      '/images/tours/raids/rider-ruta-recta-patagonia.jpg',
      '/images/tours/raids/motos-embarcadero-lago-titicaca.jpg',
      '/images/tours/raids/grupo-entrada-copahue.jpg',
      '/images/tours/raids/grupo-petroglifos-desierto.jpg',
      '/images/tours/raids/rider-desierto-atacama.jpg',
      '/images/tours/raids/riders-sendero-montanas.jpg',
      '/images/tours/raids/mapa-raid-ushuaia.jpg',
    ],
  },
  {
    id: 'alquiler-motos',
    key: 'alquiler',
    images: [
      '/images/tours/alquiler-motos/rider-offroad-volcanes.jpg',
      '/images/tours/alquiler-motos/rider-garage-himalayan.jpg',
      '/images/tours/alquiler-motos/rider-ruta-andina.jpg',
    ],
  },
];

/**
 * Obtener un tour por su ID
 */
export function getTourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

/**
 * Obtener un tour por su key
 */
export function getTourByKey(key: TourKey): Tour | undefined {
  return tours.find((t) => t.key === key);
}
