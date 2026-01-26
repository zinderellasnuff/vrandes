'use client';
import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface HeroProps {
  videoSrc: string;
  dict: Dictionary;
}

export default function Hero({ videoSrc, dict }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !videoRef.current || !contentRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.4;
        const opacityValue = 1 - (scrollY / heroHeight) * 0.5;
        const scaleValue = 1 + (scrollY / heroHeight) * 0.1;

        videoRef.current.style.transform = `translateY(${parallaxValue}px) scale(${scaleValue})`;
        contentRef.current.style.transform = `translateY(${parallaxValue * 0.6}px)`;
        contentRef.current.style.opacity = String(opacityValue);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`} id="hero" ref={heroRef}>
      {/* Video Background */}
      <div className="hero__video" ref={videoRef} aria-hidden="true">
        <video autoPlay loop muted playsInline aria-hidden="true">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="hero__decorations" aria-hidden="true">
        <div className="hero__compass"></div>
        <div className="hero__line hero__line--left"></div>
        <div className="hero__line hero__line--right"></div>
      </div>

      {/* Content */}
      <div className="hero__content container" ref={contentRef}>
        <div className="hero__text">
          <h1 className="hero__title display-text">
            <span className="hero__title-main">{dict.hero.title}</span>
            <span className="hero__subtitle display-text">{dict.hero.subtitle1}</span>
            <span className="hero__title-secondary display-text">{dict.hero.subtitle2}</span>
            <span className="hero__subtitle display-text">{dict.hero.subtitle3}</span>
          </h1>

          {/* CTA Button */}
          <div className="hero__cta-group" role="group" aria-label={dict.hero.cta}>
            <a href="#tours" className="hero__cta hero__cta--primary" role="button">
              <span>{dict.hero.cta}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">{dict.hero.scroll}</span>
          <div className="hero__scroll-line">
            <div className="hero__scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
