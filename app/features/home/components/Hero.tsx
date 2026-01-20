'use client';
import React from 'react';
import Button from '@/app/components/ui/Button';
import { HeroProps } from '@/app/types';

export default function Hero({ videoSrc, title, subtitle, description }: HeroProps) {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title display-text">
            {title}
            <span className="hero-subtitle display-text">{subtitle}</span>
          </h1>
        </div>
        
        <div className="hero-cta">
          <h2 className="hero-description">{description}</h2>
          <Button variant="outline" size="large">
            <span>+</span>
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
