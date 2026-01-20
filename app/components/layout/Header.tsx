'use client';
import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import { HeaderProps } from '@/app/types';

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${transparent ? 'header--transparent' : ''}`}>
      <div className="header__container container">
        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="header__menu-icon-container">
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
          </div>
          <span className="header__menu-text">Menú</span>
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
  );
}
