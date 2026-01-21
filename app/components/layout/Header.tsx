'use client';
import React, { useState, useEffect } from 'react';
import Button from '@/app/components/ui/Button';
import { HeaderProps } from '@/app/types';

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${transparent ? 'header--transparent' : ''}`}>
        <div className="header__container container">
          <button
            className={`header__menu-btn ${menuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="header__menu-icon-container">
              <span className="header__menu-icon"></span>
              <span className="header__menu-icon"></span>
              <span className="header__menu-icon"></span>
            </div>
            <span className="header__menu-text">{menuOpen ? 'Cerrar' : 'Menú'}</span>
          </button>

          <div className="header__logo">
            <img src="/images/logo.png" alt="Vintage Rides Andes" />
          </div>

          <div className="header__actions">
            <Button variant="primary">Ver Tours</Button>
            <button className="header__lang-btn">ES | EN</button>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      <div className={`header__menu-overlay ${menuOpen ? 'header__menu-overlay--open' : ''}`}>
        <nav className="header__menu-nav">
          <a href="#tours" className="header__menu-link" onClick={() => setMenuOpen(false)}>
            Expediciones
          </a>
          <a href="#about" className="header__menu-link" onClick={() => setMenuOpen(false)}>
            Nosotros
          </a>
          <a href="#gallery" className="header__menu-link" onClick={() => setMenuOpen(false)}>
            Galería
          </a>
          <a href="#contact" className="header__menu-link" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </nav>
        {/* Only show actions on mobile */}
        <div className="header__menu-actions">
          <Button variant="primary" onClick={() => setMenuOpen(false)}>Ver Tours</Button>
          <button className="header__menu-lang-btn" onClick={() => setMenuOpen(false)}>
            ES | EN
          </button>
        </div>
      </div>
    </>
  );
}
