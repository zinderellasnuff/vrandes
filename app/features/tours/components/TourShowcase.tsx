'use client';
import React, { useState, useRef, useEffect } from 'react';
import Button from '@/app/components/ui/Button';
import { TourShowcaseProps } from '@/app/types';

export default function TourShowcase({ tours }: TourShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % tours.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, tours.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current - 1 + tours.length) % tours.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % tours.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="tour-showcase">
      {/* Decorative Elements */}
      <div className="tour-showcase__decorations">
        <div className="tour-showcase__decoration tour-showcase__decoration--1"></div>
        <div className="tour-showcase__decoration tour-showcase__decoration--2"></div>
        <div className="tour-showcase__decoration tour-showcase__decoration--3"></div>
        <div className="tour-showcase__decoration tour-showcase__decoration--4"></div>
      </div>

      {/* Header */}
      <div className="tour-showcase__header container">
        <h2 className="tour-showcase__title display-text">
          Nuestros Tours
        </h2>
        <p className="tour-showcase__subtitle">
          Explora el Perú como nunca antes lo has imaginado
        </p>
      </div>

      {/* Carousel Container */}
      <div className="tour-showcase__carousel">
        {/* Navigation Arrows */}
        <button
          className="tour-showcase__arrow tour-showcase__arrow--prev"
          onClick={handlePrevious}
          aria-label="Tour anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          className="tour-showcase__arrow tour-showcase__arrow--next"
          onClick={handleNext}
          aria-label="Siguiente tour"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Cards Container */}
        <div className="tour-showcase__scroll" ref={scrollContainerRef}>
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className={`tour-showcase__card ${
                index === activeIndex ? 'tour-showcase__card--active' : ''
              }`}
              style={{ backgroundColor: tour.color }}
            >
              {/* Card Image */}
              <div className="tour-showcase__card-image">
                <img src={tour.image} alt={tour.title} />
                <div className="tour-showcase__card-overlay"></div>
              </div>

              {/* Card Content */}
              <div className="tour-showcase__card-content">
                <div className="tour-showcase__card-header">
                  <h3 className="tour-showcase__card-title">
                    {tour.title}
                  </h3>
                  <p className="tour-showcase__card-subtitle">
                    {tour.subtitle}
                  </p>
                </div>

                <div className="tour-showcase__card-meta">
                  <div className="tour-showcase__card-meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="tour-showcase__card-meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 17H7A5 5 0 0 1 7 7h2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 7h2a5 5 0 1 1 0 10h-2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{tour.distance}</span>
                  </div>
                </div>

                <p className="tour-showcase__card-description">
                  {tour.description}
                </p>

                {tour.highlights.length > 0 && (
                  <ul className="tour-showcase__card-highlights">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="tour-showcase__card-cta">
                  <Button variant="primary" size="medium">
                    Más Información
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="tour-showcase__dots">
          {tours.map((_, index) => (
            <button
              key={index}
              className={`tour-showcase__dot ${
                index === activeIndex ? 'tour-showcase__dot--active' : ''
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir al tour ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
