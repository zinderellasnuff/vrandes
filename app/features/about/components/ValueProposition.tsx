'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface Slide {
  id: number;
  image: string;
}

const slidesData: Slide[] = [
  { id: 1, image: '/images/about/world-map.jpeg' },
  { id: 2, image: '/images/about/founder.jpg' },
  { id: 3, image: '/images/about/riders-group.jpg' },
  { id: 4, image: '/images/about/andes-map.jpg' },
  { id: 5, image: '/images/about/machu-picchu.jpg' }
];

interface ValuePropositionProps {
  lang: Locale;
  dict: Dictionary;
}

export default function ValueProposition({ dict }: ValuePropositionProps) {
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlide = slidesData[currentSlide];
  const slideContent = dict.about.slides[String(activeSlide.id)];

  return (
    <section className="value-proposition" id="about">
      {/* Top Section */}
      <div className="value-proposition__intro">
        <div className="container">
          <h2 className="value-proposition__title reveal">{dict.about.title}</h2>
          <p className="value-proposition__description reveal">
            {dict.about.description}
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
              <span className="value-proposition__slogan-line">{slideContent.title}</span>
              <span className="value-proposition__slogan-highlight">{slideContent.highlight}</span>
              {slideContent.subtitle && (
                <span className="value-proposition__slogan-line">{slideContent.subtitle}</span>
              )}
            </h3>
            <p className="value-proposition__slide-content">{slideContent.content}</p>
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
                  alt={`${slideContent.title} ${slideContent.highlight}`}
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

        {/* Edge Navigation Buttons */}
        <button
          className="value-proposition__edge-btn value-proposition__edge-btn--prev"
          onClick={prevSlide}
          aria-label={dict.about.previous}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="value-proposition__edge-btn value-proposition__edge-btn--next"
          onClick={nextSlide}
          aria-label={dict.about.next}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Section - Orange Background */}
      <div className="value-proposition__footer">
        <div className="container">
          <h2 className="value-proposition__footer-title reveal">{dict.about.footer}</h2>
        </div>
      </div>
    </section>
  );
}
