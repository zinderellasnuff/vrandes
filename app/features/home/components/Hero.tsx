'use client';
import React from 'react';
import Button from '@/app/components/ui/Button';
import { HeroProps } from '@/app/types';

export default function Hero({ videoSrc, title, description }: HeroProps) {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__video">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title display-text">
            {title}
            <span className="hero__subtitle display-text">que solo has</span>
            <span className="hero__title display-text">visto en tus</span>
            <span className="hero__subtitle display-text">sueños</span>
          </h1>
        </div>

        <div className="hero__cta">
          <h2 className="hero__description">{description}</h2>
          <Button variant="outline" size="large">
            <span>+</span>
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
}
