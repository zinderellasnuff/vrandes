'use client';
import React from 'react';
import Link from 'next/link';
import '@/app/styles/layout/footer.css';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/vrandes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/vrandes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/vrandes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17817 18.2945C2.51803 18.6308 2.93889 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0064 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/51999999999',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const navLinks = [
  {
    name: 'Inicio',
    href: '#hero',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    name: 'Expediciones',
    href: '#tours',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    name: 'Nosotros',
    href: '#about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    name: 'Galería',
    href: '#gallery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    )
  },
  {
    name: 'Contacto',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Main content */}
        <div className="footer__content reveal">
          {/* Brand */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <span className="footer__logo-text">VRANDES</span>
              <span className="footer__logo-tagline">Vintage Rides Andes</span>
            </Link>
            <p className="footer__slogan">
              No vendemos tours, creamos aventuras.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav">
            <span className="footer__nav-title">Explorar</span>
            <div className="footer__nav-icons">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="footer__nav-icon-link"
                  title={link.name}
                >
                  <span className="footer__nav-icon">{link.icon}</span>
                  <span className="footer__nav-label">{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Social */}
          <div className="footer__social">
            <span className="footer__social-title">Síguenos</span>
            <div className="footer__social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative road line */}
        <div className="footer__road">
          <svg viewBox="0 0 1200 20" className="footer__road-svg" preserveAspectRatio="none">
            <path d="M0 10 Q 300 0, 600 10 T 1200 10" stroke="#D4B59E" strokeWidth="1" fill="none" opacity="0.4"/>
            <circle cx="100" cy="10" r="3" fill="#D4B59E" opacity="0.6"/>
            <circle cx="400" cy="8" r="2" fill="#D4B59E" opacity="0.4"/>
            <circle cx="700" cy="12" r="2.5" fill="#D4B59E" opacity="0.5"/>
            <circle cx="1000" cy="9" r="2" fill="#D4B59E" opacity="0.4"/>
          </svg>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Vrandes. Todos los derechos reservados.
          </p>
          <div className="footer__legal">
            <Link href="/privacidad" className="footer__legal-link">
              Privacidad
            </Link>
            <span className="footer__legal-separator">·</span>
            <Link href="/terminos" className="footer__legal-link">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
