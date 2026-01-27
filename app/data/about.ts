/**
 * About Section Data
 *
 * Datos para la sección "Nosotros" / Value Proposition.
 * Las imágenes del carrusel y su configuración.
 */

export interface AboutSlide {
  id: number;
  image: string;
}

/**
 * Slides del carrusel de la sección About
 * Los textos están en los diccionarios bajo about.slides.[id]
 */
export const aboutSlides: AboutSlide[] = [
  { id: 1, image: '/images/about/world-map.jpeg' },
  { id: 2, image: '/images/about/founder.jpg' },
  { id: 3, image: '/images/about/riders-group.jpg' },
  { id: 4, image: '/images/about/andes-map.jpg' },
  { id: 5, image: '/images/about/machu-picchu.jpg' },
];
