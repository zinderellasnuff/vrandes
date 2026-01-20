'use client';
import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import { HeaderProps } from '@/app/types';

export default function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${transparent ? 'header-transparent' : ''}`}>
      <div className="header-container container">
        <button 
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-text">Menú</span>
        </button>
        
        <div className="logo">
          <img src="/images/logo.png" alt="Vintage Rides Andes" />
        </div>
        
        <div className="header-actions">
          <Button variant="primary">Ver Tours</Button>
          <button className="btn-language">ES | EN</button>
        </div>
      </div>
    </header>
  );
}
