'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { tours } from '@/app/data';

interface TourShowcaseProps {
  lang: Locale;
  dict: Dictionary;
}

export default function TourShowcase({ dict }: TourShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeTour = tours[activeIndex];
  const tourContent = dict.tours.items[activeTour.key];

  const nextImage = useCallback(() => {
    setImageIndex((prev) => (prev + 1) % activeTour.images.length);
  }, [activeTour.images.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextImage]);

  const nextTour = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % tours.length);
    setImageIndex(0);
  }, []);

  const prevTour = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + tours.length) % tours.length);
    setImageIndex(0);
  }, []);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextTour();
      if (e.key === 'ArrowLeft') prevTour();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTour, prevTour]);

  return (
    <section className="tours" id="tours" aria-label={dict.tours.label}>
      <div
        className="tours__container container"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription={dict.tours.tourCarousel}
      >
                {/* Swipe hint for mobile */}
        <div className="tours__swipe-hint">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{dict.tours.swipeHint}</span>
        </div>
        
        {/* Left Side - Tour Info */}
        <div className="tours__info">
          <span className="tours__label">{dict.tours.label}</span>

          {activeTour.isEmblematic && (
            <span className="tours__badge">{dict.tours.recommended}</span>
          )}

          <h2 className="tours__title display-text">{tourContent.title}</h2>
          <p className="tours__subtitle display-text">{tourContent.subtitle}</p>

          <div className="tours__stats">
            <div className="tours__stat">
              <span className="tours__stat-value">{tourContent.duration}</span>
              <span className="tours__stat-label">{dict.tours.duration}</span>
            </div>
            <div className="tours__stat">
              <span className="tours__stat-value">{tourContent.distance}</span>
              <span className="tours__stat-label">{dict.tours.distance}</span>
            </div>
          </div>

          <p className="tours__description">{tourContent.description}</p>

          {/* Highlights */}
          <div className="tours__highlights">
            {tourContent.highlights.map((highlight, index) => (
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
                <span>{dict.tours.bookTour}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <a href="#contact" className="tours__cta tours__cta--primary">
                <span>{dict.tours.contactUs}</span>
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
              aria-label={`${dict.tours.downloadPdf} ${tourContent.title}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{dict.tours.viewPdf}</span>
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
            aria-roledescription={dict.tours.imageCarousel}
            aria-label={tourContent.title}
          >
            {activeTour.images.map((image, index) => (
              <div
                key={index}
                className={`tours__carousel-slide ${index === imageIndex ? 'tours__carousel-slide--active' : ''}`}
              >
                <Image
                  src={image}
                  alt={`${tourContent.title} - ${dict.tours.image} ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0 && activeIndex === 0}
                  loading={index === 0 && activeIndex === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Floating Navigation Buttons - Inside Image */}
            <button
              className="tours__float-btn tours__float-btn--prev"
              onClick={prevTour}
              aria-label={dict.tours.previousTour}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="tours__float-btn tours__float-btn--next"
              onClick={nextTour}
              aria-label={dict.tours.nextTour}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Image indicators */}
            <div className="tours__carousel-indicators">
              {activeTour.images.map((_, index) => (
                <button
                  key={index}
                  className={`tours__carousel-dot ${index === imageIndex ? 'tours__carousel-dot--active' : ''}`}
                  onClick={() => setImageIndex(index)}
                  aria-label={`${dict.tours.image} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="tours__image-frame"></div>
        </div>

      </div>
    </section>
  );
}
