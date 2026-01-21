'use client';
import React, { useState } from 'react';
import { TestimonialsProps } from '@/app/types';

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate visible testimonials (show 3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <div className="testimonials__badge">
          <span className="testimonials__badge-icon">⭐</span>
          <span className="testimonials__badge-text">ECOtestimonials</span>
        </div>
        <h2 className="testimonials__title">
          No te quedes solo con<br />
          nuestra palabra
        </h2>
      </div>

      <div className="testimonials__carousel">
        <div className="testimonials__cards">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="testimonials__card">
              <div className="testimonials__card-header">
                <h3 className="testimonials__card-title">{testimonial.title}</h3>
                <p className="testimonials__card-description">{testimonial.description}</p>
              </div>

              <div className="testimonials__card-footer">
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="testimonials__author-info">
                    <p className="testimonials__author-name">{testimonial.name}</p>
                    <p className="testimonials__author-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="testimonials__rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="testimonials__star">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__controls">
          <button
            className="testimonials__control testimonials__control--prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            className="testimonials__control testimonials__control--next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="testimonials__decoration testimonials__decoration--plane-1">✈</div>
      <div className="testimonials__decoration testimonials__decoration--plane-2">✈</div>
      <div className="testimonials__decoration testimonials__decoration--plane-3">✈</div>
    </section>
  );
}
