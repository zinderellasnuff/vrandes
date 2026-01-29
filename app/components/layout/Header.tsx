'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Get the path without the language prefix for language switching
  const getLocalizedPath = (newLang: Locale) => {
    const pathWithoutLang = pathname.replace(/^\/(es|en)/, '') || '/';
    return `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  };

  const navItems = [
    {
      id: 'hero',
      label: dict.nav.home,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 'tours',
      label: dict.nav.tours,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'about',
      label: dict.nav.about,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'gallery',
      label: dict.nav.gallery,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
    {
      id: 'contact',
      label: dict.nav.contact,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/vrandes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/vintageridesandes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@vintageridesandes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container container">
          {/* Logo - Left side */}
          <a href="#hero" className="header__logo">
            <Image src="/images/logo.png" alt="Vintage Rides Andes" width={115} height={115} />
          </a>

          {/* Navigation Icons - Center */}
          <nav className="header__nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="header__nav-item"
                title={item.label}
              >
                <span className="header__nav-icon">{item.icon}</span>
                <span className="header__nav-label">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right side - Language + Social + CTA (Desktop) */}
          <div className="header__actions">
            {/* Language Selector */}
            <div className="header__lang">
              <Link
                href={getLocalizedPath('es')}
                className={`header__lang-btn ${lang === 'es' ? 'header__lang-btn--active' : ''}`}
                title="Español"
              >
                ES
              </Link>
              <span className="header__lang-separator">|</span>
              <Link
                href={getLocalizedPath('en')}
                className={`header__lang-btn ${lang === 'en' ? 'header__lang-btn--active' : ''}`}
                title="English"
              >
                EN
              </Link>
            </div>

            <div className="header__social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/51943883777"
              target="_blank"
              rel="noopener noreferrer"
              className="header__whatsapp-btn"
              aria-label={dict.common.contactWhatsApp}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{dict.common.whatsapp}</span>
            </a>
          </div>

          {/* Mobile Right Side - Navigation + Language */}
          <div className="header__mobile-right">
            <nav className="header__mobile-nav">
              {navItems.slice(0, 4).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="header__mobile-nav-link"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </nav>
            <div className="header__mobile-lang">
              <Link
                href={getLocalizedPath('es')}
                className={`header__mobile-lang-btn ${lang === 'es' ? 'header__mobile-lang-btn--active' : ''}`}
              >
                ES
              </Link>
              <span className="header__mobile-lang-sep">|</span>
              <Link
                href={getLocalizedPath('en')}
                className={`header__mobile-lang-btn ${lang === 'en' ? 'header__mobile-lang-btn--active' : ''}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`header__menu-overlay ${menuOpen ? 'header__menu-overlay--open' : ''}`}>
        <nav className="header__menu-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="header__menu-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="header__menu-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__menu-footer">
          <div className="header__menu-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header__menu-social-link"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/51943883777"
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp-btn"
            onClick={() => setMenuOpen(false)}
            aria-label={dict.common.contactWhatsApp}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{dict.common.whatsapp}</span>
          </a>
          {/* Language Selector Mobile */}
          <div className="header__menu-lang">
            <Link
              href={getLocalizedPath('es')}
              className={`header__menu-lang-btn ${lang === 'es' ? 'header__menu-lang-btn--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              ES
            </Link>
            <span>|</span>
            <Link
              href={getLocalizedPath('en')}
              className={`header__menu-lang-btn ${lang === 'en' ? 'header__menu-lang-btn--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
