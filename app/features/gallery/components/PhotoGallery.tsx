'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { PhotoGalleryProps } from '@/app/types';

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  }, [selectedPhoto, photos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  }, [selectedPhoto, photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container container">
        {/* Header */}
        <div className="gallery__header">
          <span className="gallery__label">Galería</span>
          <h2 className="gallery__title display-text">
            Rutas que quedan
            <span className="gallery__title-highlight">grabadas para siempre</span>
          </h2>
          <p className="gallery__subtitle">
            Cada viaje es una historia, cada foto un recuerdo inolvidable.
            Mira lo que te espera en las carreteras del sur del Perú.
          </p>
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`gallery__item gallery__item--${photo.size || 'medium'}`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery__image-wrapper">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="gallery__overlay">
                  <div className="gallery__overlay-content">
                    <svg className="gallery__overlay-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {photo.caption && (
                      <p className="gallery__caption">{photo.caption}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div className="gallery__lightbox" onClick={closeLightbox}>
          <button
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div
            className="gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery__lightbox-image">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            {photos[selectedPhoto].caption && (
              <p className="gallery__lightbox-caption">
                {photos[selectedPhoto].caption}
              </p>
            )}
            <div className="gallery__lightbox-counter">
              <span className="gallery__lightbox-current">0{selectedPhoto + 1}</span>
              <span className="gallery__lightbox-separator">/</span>
              <span className="gallery__lightbox-total">0{photos.length}</span>
            </div>
          </div>

          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Siguiente"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
