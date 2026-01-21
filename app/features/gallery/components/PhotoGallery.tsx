'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PhotoGalleryProps } from '@/app/types';

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__header">
        <div className="photo-gallery__badge">
          <span className="photo-gallery__badge-icon">📸</span>
          <span className="photo-gallery__badge-text">AVENTURAS CAPTURADAS</span>
        </div>
        <h2 className="photo-gallery__title">
          Rutas que quedan<br />
          grabadas para siempre
        </h2>
        <p className="photo-gallery__subtitle">
          Cada viaje es una historia, cada foto un recuerdo inolvidable.<br />
          Mira lo que te espera en las carreteras del sur del Perú.
        </p>
      </div>

      <div className="photo-gallery__grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`photo-gallery__item photo-gallery__item--${photo.size || 'medium'}`}
            onClick={() => openLightbox(index)}
          >
            <div className="photo-gallery__image-wrapper">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="photo-gallery__overlay">
                <div className="photo-gallery__overlay-content">
                  <span className="photo-gallery__overlay-icon">🔍</span>
                  {photo.caption && (
                    <p className="photo-gallery__caption">{photo.caption}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div className="photo-gallery__lightbox" onClick={closeLightbox}>
          <button
            className="photo-gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            className="photo-gallery__lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous photo"
          >
            ←
          </button>

          <div
            className="photo-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="photo-gallery__lightbox-image">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            {photos[selectedPhoto].caption && (
              <p className="photo-gallery__lightbox-caption">
                {photos[selectedPhoto].caption}
              </p>
            )}
          </div>

          <button
            className="photo-gallery__lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
