'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  content: string;
  image: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Estamos en',
    highlight: '15 países',
    subtitle: '',
    content: 'Somos parte de la familia VINTAGE RIDES, la famosa agencia de viajes en moto. Con sede en Lyon, Francia, nació hace 20 años en India y hoy ofrece más de 100 tours en 15 países alrededor del mundo.',
    image: '/images/about/world-map.jpeg'
  },
  {
    id: 2,
    title: 'La aventura',
    highlight: 'comenzó',
    subtitle: 'hace 48 años',
    content: 'Durante los últimos 48 años, Jean-Louis Gelot, francés, ingeniero mecánico y geofísico, recorrió el mundo buscando minerales e hidrocarburos. En 2016 se instaló en Arequipa, Perú. En 2020 creó VINTAGE RIDES ANDES.',
    image: '/images/about/founder.jpg'
  },
  {
    id: 3,
    title: 'Más de',
    highlight: '500 riders',
    subtitle: 'exploraron los Andes',
    content: 'Desde 2021, asegurados de encontrar guías confirmados, soporte logístico y mecánicos listos, vinieron riders de Francia, Suiza, Alemania, UK, USA, Bélgica, Australia, Ucrania y muchos más países.',
    image: '/images/about/riders-group.jpg'
  },
  {
    id: 4,
    title: 'Los secretos de la',
    highlight: 'Cordillera',
    subtitle: 'de los Andes',
    content: 'Con 8,500 kms desde el Caribe hasta la Tierra del Fuego, la Cordillera de los Andes es la más larga del mundo. Un refugio para más de 100 ecosistemas naturales.',
    image: '/images/about/andes-map.jpg'
  },
  {
    id: 5,
    title: 'Un viaje de',
    highlight: '5,000 años',
    subtitle: 'de historia',
    content: 'Los humanos desarrollaron grandes culturas como Caral hace 5,000 años, Inca hace 500 años. La conquista española y migraciones crearon esa cultura tan diversa de hoy.',
    image: '/images/about/machu-picchu.jpg'
  }
];

export default function ValueProposition() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlide = slidesData[currentSlide];

  return (
    <section className="value-proposition" id="about">
      {/* Top Section */}
      <div className="value-proposition__intro">
        <div className="container">
          <h2 className="value-proposition__title reveal">Lo que nos hace diferentes</h2>
          <p className="value-proposition__description reveal">
            Por más de 15 años, hemos compartido la pasión por los viajes en motocicleta.
            Conocemos cada ruta, cada mirador, cada secreto que el sur del Perú esconde.
          </p>
        </div>
      </div>

      {/* Middle Section - Split with Carousel */}
      <div
        className="value-proposition__split"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Side - Dark Background with Carousel Text */}
        <div className="value-proposition__left reveal reveal--left">
          <div className="value-proposition__logo">
            <Image
              src="/images/logo.png"
              alt="Vintage Rides Andes"
              width={110}
              height={110}
              priority
            />
          </div>

          <div className="value-proposition__slogan-wrapper">
            <h3 className="value-proposition__slogan">
              <span className="value-proposition__slogan-line">{activeSlide.title}</span>
              <span className="value-proposition__slogan-highlight">{activeSlide.highlight}</span>
              {activeSlide.subtitle && (
                <span className="value-proposition__slogan-line">{activeSlide.subtitle}</span>
              )}
            </h3>
            <p className="value-proposition__slide-content">{activeSlide.content}</p>
          </div>

          {/* Dots indicator */}
          <div className="value-proposition__dots">
            {slidesData.map((_, index) => (
              <button
                key={index}
                className={`value-proposition__dot ${index === currentSlide ? 'value-proposition__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="value-proposition__right reveal reveal--right">
          <div className="value-proposition__image">
            {slidesData.map((slide, index) => (
              <div
                key={slide.id}
                className={`value-proposition__image-slide ${index === currentSlide ? 'value-proposition__image-slide--active' : ''}`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Edge Navigation Buttons - Full section width */}
        <button
          className="value-proposition__edge-btn value-proposition__edge-btn--prev"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="value-proposition__edge-btn value-proposition__edge-btn--next"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Section - Orange Background */}
      <div className="value-proposition__footer">
        <div className="container">
          <h2 className="value-proposition__footer-title reveal">Solo Vintage Rides Andes</h2>
        </div>
      </div>
    </section>
  );
}
