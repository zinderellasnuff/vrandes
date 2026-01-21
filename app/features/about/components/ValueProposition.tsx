'use client';
import React from 'react';
import Image from 'next/image';

export default function ValueProposition() {
  return (
    <section className="value-proposition">
      {/* Top Section */}
      <div className="value-proposition__intro">
        <div className="container">
          <h2 className="value-proposition__title">Lo que nos hace diferentes</h2>
          <p className="value-proposition__description">
            Por más de 15 años, hemos compartido la pasión por los viajes en motocicleta.
            Conocemos cada ruta, cada mirador, cada secreto que el sur del Perú esconde.
            Aquí no solo alquilas una moto - vives una experiencia auténtica guiada por
            locales que aman estas carreteras.
          </p>
        </div>
      </div>

      {/* Middle Section - Split */}
      <div className="value-proposition__split">
        {/* Left Side - Dark Background */}
        <div className="value-proposition__left">
          <div className="value-proposition__logo">
            <Image
              src="/images/logo.png"
              alt="Vintage Rides Andes"
              width={110}
              height={110}
              priority
            />
          </div>
          <h3 className="value-proposition__slogan">
            <span className="value-proposition__slogan-line">Ve donde</span>
            <span className="value-proposition__slogan-line">la</span>
            <span className="value-proposition__slogan-highlight">aventura</span>
            <span className="value-proposition__slogan-line">te lleve</span>
          </h3>
        </div>

        {/* Right Side - Image */}
        <div className="value-proposition__right">
          <div className="value-proposition__image">
            <Image
              src="/images/tours/canones-1.jpg"
              alt="Aventura en moto por los Andes"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Orange Background */}
      <div className="value-proposition__footer">
        <div className="container">
          <h2 className="value-proposition__footer-title">Solo Vintage Rides</h2>
          <p className="value-proposition__footer-text">
            La única operadora en el sur del Perú asociada con Vintage Rides Francia,
            con presencia en más de 40 países y 25 años liderando el turismo en
            motocicleta.
          </p>
        </div>
      </div>
    </section>
  );
}
