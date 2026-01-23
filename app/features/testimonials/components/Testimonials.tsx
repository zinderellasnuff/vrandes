'use client';
import { useState, useEffect } from 'react';
import { TestimonialsProps } from '@/app/types';

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials">
      <div className="testimonials__container container">
        {/* Left Side - Header */}
        <div className="testimonials__header reveal reveal--left">
          <span className="testimonials__label">Testimonios</span>
          <h2 className="testimonials__title display-text">
            Historias de
            <span className="testimonials__title-highlight">aventura</span>
          </h2>
          <p className="testimonials__subtitle">
            Lo que dicen quienes ya vivieron la experiencia Vintage Rides
          </p>

          {/* Navigation */}
          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn"
              onClick={prevTestimonial}
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="testimonials__counter">
              <span className="testimonials__counter-current">0{currentIndex + 1}</span>
              <span className="testimonials__counter-separator">/</span>
              <span className="testimonials__counter-total">0{testimonials.length}</span>
            </div>
            <button
              className="testimonials__nav-btn"
              onClick={nextTestimonial}
              aria-label="Siguiente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Testimonial Card */}
        <div
          className="testimonials__content reveal reveal--right"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonials__quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 7.5V11.5C11 14 9.5 16 7.5 17L6.5 15.5C7.5 15 8.5 13.5 8.5 11.5H6V7.5H11ZM18 7.5V11.5C18 14 16.5 16 14.5 17L13.5 15.5C14.5 15 15.5 13.5 15.5 11.5H13V7.5H18Z"/>
            </svg>
          </div>

          <blockquote className="testimonials__text">
            {currentTestimonial.description}
          </blockquote>

          <div className="testimonials__author">
            <div className="testimonials__avatar">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
              />
            </div>
            <div className="testimonials__author-info">
              <p className="testimonials__author-name">{currentTestimonial.name}</p>
              <p className="testimonials__author-location">{currentTestimonial.location}</p>
            </div>
            <div className="testimonials__rating">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg key={i} className="testimonials__star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="testimonials__progress">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__progress-dot ${index === currentIndex ? 'testimonials__progress-dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
