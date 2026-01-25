'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface Tour {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  images: string[];
  description: string;
  highlights: string[];
  isEmblematic?: boolean;
  bookingUrl?: string;
}

const toursData: Tour[] = [
  {
    id: 'tour-emblematico',
    title: 'TOUR EMBLEMÁTICO',
    subtitle: '11 días, 2,000 kms',
    duration: '11 días',
    distance: '2,000 kms',
    images: [
      '/images/tours/altiplano-1.jpg',
      '/images/tours/canones-1.jpg',
      '/images/tours/ushuaia-1.jpg',
      '/images/tours/altiplano-2.jpg'
    ],
    description: 'Diseñado por nuestro socio VINTAGE RIDES de Francia, los riders tienen una inmersión increíble en las culturas españolas (Arequipa) e incas (Cuzco, Machu Picchu), cruzando paisajes fuera de los senderos trillados, de la cadena occidental de los volcanes, del altiplano con el lago Titicaca y de la selva amazónica. ¿Te imaginas pasar de 4,725 m, al pie de los glaciares, a 600 m en plena selva, en menos de 2 horas? ¡Solo en el Perú!',
    highlights: [
      'Volcán Misti',
      'Lago Titicaca',
      'Selva Amazónica',
      'Machu Picchu',
      'Altiplano Andino'
    ],
    isEmblematic: true,
    bookingUrl: 'https://www.vintagerides.com/us/tour-departure-schedule/?dest=2685'
  },
  {
    id: 'a-la-carte',
    title: 'TOURS A LA CARTE',
    subtitle: 'Tu aventura personalizada',
    duration: '1 a ∞ días',
    distance: 'A medida',
    images: [
      '/images/tours/canones-2.jpg',
      '/images/tours/desierto-1.jpg',
      '/images/tours/canones-3.jpg'
    ],
    description: 'Arequipa es el lugar ideal para empezar a explorar los Andes. En pocas horas, el rider pasa de la costa del Pacífico, al desierto de Atacama, el altiplano andino, los salares bolivianos y la selva amazónica. Vintage Rides Andes customiza tours desde 1 día hasta que el tiempo se agote, para solo rider y grupos de hasta 10 amigos.',
    highlights: [
      'Costa del Pacífico',
      'Desierto de Atacama',
      'Altiplano Andino',
      'Salares Bolivianos',
      'Selva Amazónica'
    ]
  },
  {
    id: 'canones-volcanes',
    title: 'CAÑONES Y VOLCANES',
    subtitle: 'Arequipa Extrema',
    duration: '6 días',
    distance: '1,000 kms',
    images: [
      '/images/tours/canones-1.jpg',
      '/images/tours/canones-2.jpg',
      '/images/tours/canones-3.jpg'
    ],
    description: 'Atraviesa los cañones más profundos de América y rodea volcanes imponentes. Una aventura extrema en el corazón de los Andes del sur.',
    highlights: [
      'Cañón del Colca',
      'Volcanes nevados',
      'Aventura de altura extrema'
    ]
  },
  {
    id: 'desierto-playas',
    title: 'DESIERTO Y PLAYAS',
    subtitle: 'Costa Peruana',
    duration: '5 días',
    distance: '1,050 kms',
    images: [
      '/images/tours/desierto-1.jpg',
      '/images/tours/desierto-2.jpg',
      '/images/tours/desierto-3.jpg'
    ],
    description: 'Explora el contraste entre el desierto costero y las playas del Pacífico. Una ruta que combina arena, sol y la magia de la costa peruana.',
    highlights: [
      'Desiertos costeros únicos',
      'Playas del Pacífico',
      'Gastronomía marina excepcional'
    ]
  }
];

export default function TourShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeTour = toursData[activeIndex];

  const nextImage = useCallback(() => {
    setImageIndex((prev) => (prev + 1) % activeTour.images.length);
  }, [activeTour.images.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextImage]);

  useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  const nextTour = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % toursData.length);
  }, []);

  const prevTour = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + toursData.length) % toursData.length);
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextTour();
    } else if (diff < -threshold) {
      prevTour();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextTour();
      if (e.key === 'ArrowLeft') prevTour();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTour, prevTour]);

  return (
    <section className="tours" id="tours" aria-label="Expediciones disponibles">
      <div
        className="tours__container container"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carrusel de tours"
      >
        {/* Left Side - Tour Info */}
        <div className="tours__info">
          <span className="tours__label">Expediciones</span>

          {activeTour.isEmblematic && (
            <span className="tours__badge">Recomendado</span>
          )}

          <h2 className="tours__title display-text">{activeTour.title}</h2>
          <p className="tours__subtitle display-text">{activeTour.subtitle}</p>

          <div className="tours__stats">
            <div className="tours__stat">
              <span className="tours__stat-value">{activeTour.duration}</span>
              <span className="tours__stat-label">Duración</span>
            </div>
            <div className="tours__stat">
              <span className="tours__stat-value">{activeTour.distance}</span>
              <span className="tours__stat-label">Recorrido</span>
            </div>
          </div>

          <p className="tours__description">{activeTour.description}</p>

          {/* Highlights */}
          <div className="tours__highlights">
            {activeTour.highlights.map((highlight, index) => (
              <span key={index} className="tours__highlight">
                {highlight}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="tours__cta-group">
            {activeTour.bookingUrl ? (
              <a
                href={activeTour.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tours__cta tours__cta--primary"
              >
                <span>Reserva tu tour</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <a href="#contact" className="tours__cta tours__cta--primary">
                <span>Contáctanos</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}

            {/* PDF Button */}
            <a
              href={`/docs/${activeTour.id}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="tours__cta tours__cta--pdf"
              aria-label={`Descargar PDF con información de ${activeTour.title}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Ver PDF</span>
            </a>
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="tours__image-wrapper">
          <div
            className="tours__carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="group"
            aria-roledescription="carrusel de imágenes"
            aria-label={`Imágenes de ${activeTour.title}`}
          >
            {activeTour.images.map((image, index) => (
              <div
                key={index}
                className={`tours__carousel-slide ${index === imageIndex ? 'tours__carousel-slide--active' : ''}`}
              >
                <Image
                  src={image}
                  alt={`${activeTour.title} - ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0 && activeIndex === 0}
                  loading={index === 0 && activeIndex === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Image indicators */}
            <div className="tours__carousel-indicators">
              {activeTour.images.map((_, index) => (
                <button
                  key={index}
                  className={`tours__carousel-dot ${index === imageIndex ? 'tours__carousel-dot--active' : ''}`}
                  onClick={() => setImageIndex(index)}
                  aria-label={`Imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="tours__image-frame"></div>
        </div>

        {/* Edge Navigation Buttons - Full section width */}
        <button
          className="tours__edge-btn tours__edge-btn--prev"
          onClick={prevTour}
          aria-label="Tour anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="tours__edge-btn tours__edge-btn--next"
          onClick={nextTour}
          aria-label="Siguiente tour"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Swipe hint for mobile */}
        <div className="tours__swipe-hint">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Desliza para ver más</span>
        </div>
      </div>
    </section>
  );
}
