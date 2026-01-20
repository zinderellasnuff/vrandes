'use client';
import { useState, useEffect, useCallback } from 'react';
import { TourShowcaseProps } from '@/app/types';

export default function TourShowcase({ tours }: TourShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeTour = tours[activeIndex];

  const nextImage = useCallback(() => {
    setImageIndex((prev) => (prev + 1) % activeTour.images.length);
  }, [activeTour.images.length]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextImage]);

  useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  const handleTourChange = (index: number) => {
    setActiveIndex(index);
    setImageIndex(0);
  };

  return (
    <section className="tours">
      <div className="tours__container container">
        {/* Left Side - Tour Info */}
        <div className="tours__info">
          <span className="tours__label">Expediciones</span>
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

          <button className="tours__cta">
            <span>Explorar Ruta</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Tour Navigation */}
          <div className="tours__nav">
            {tours.map((tour, index) => (
              <button
                key={tour.id}
                className={`tours__nav-item ${index === activeIndex ? 'tours__nav-item--active' : ''}`}
                onClick={() => handleTourChange(index)}
              >
                <span className="tours__nav-number">0{index + 1}</span>
                <span className="tours__nav-title">{tour.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="tours__image-wrapper">
          <div
            className="tours__carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {activeTour.images.map((image, index) => (
              <div
                key={index}
                className={`tours__carousel-slide ${index === imageIndex ? 'tours__carousel-slide--active' : ''}`}
              >
                <img src={image} alt={`${activeTour.title} - ${index + 1}`} />
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

          {/* Progress indicator */}
          <div className="tours__progress">
            <span className="tours__progress-current">0{activeIndex + 1}</span>
            <div className="tours__progress-line">
              <div
                className="tours__progress-fill"
                style={{ height: `${((activeIndex + 1) / tours.length) * 100}%` }}
              ></div>
            </div>
            <span className="tours__progress-total">0{tours.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
