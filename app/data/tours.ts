/**
 * Tours Data
 *
 * Datos de los tours disponibles.
 * Para agregar un nuevo tour:
 * 1. Agrega una entrada aquí con su key único
 * 2. Agrega las traducciones en /dictionaries/es.json y /dictionaries/en.json
 *    bajo tours.items.[key]
 */

export type TourKey = 'emblematico' | 'alacarte' | 'canones' | 'desierto';

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
      '/images/tours/altiplano-1.jpg',
      '/images/tours/canones-1.jpg',
      '/images/tours/ushuaia-1.jpg',
      '/images/tours/altiplano-2.jpg',
    ],
    isEmblematic: true,
    bookingUrl: 'https://www.vintagerides.com/us/tour-departure-schedule/?dest=2685',
  },
  {
    id: 'a-la-carte',
    key: 'alacarte',
    images: [
      '/images/tours/canones-2.jpg',
      '/images/tours/desierto-1.jpg',
      '/images/tours/canones-3.jpg',
    ],
  },
  {
    id: 'canones-volcanes',
    key: 'canones',
    images: [
      '/images/tours/canones-1.jpg',
      '/images/tours/canones-2.jpg',
      '/images/tours/canones-3.jpg',
    ],
  },
  {
    id: 'desierto-playas',
    key: 'desierto',
    images: [
      '/images/tours/desierto-1.jpg',
      '/images/tours/desierto-2.jpg',
      '/images/tours/desierto-3.jpg',
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
