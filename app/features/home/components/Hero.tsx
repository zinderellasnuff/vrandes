'use client';
import React from 'react';

interface HeroProps {
  videoSrc: string;
  title: string;
}

export default function Hero({ videoSrc, title }: HeroProps) {
  return (
    <section className="hero" id="hero">
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
      </div>
    </section>
  );
}
