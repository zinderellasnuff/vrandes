'use client';
import '@/app/styles/layout/social-bar.css';
import { socialLinks } from '@/app/data';

export default function SocialBar() {
  return (
    <div className="social-bar">
      <div className="social-bar__content">
        <span className="social-bar__label">Síguenos</span>
        <div className="social-bar__links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-bar__link"
              title={social.name}
            >
              <span dangerouslySetInnerHTML={{ __html: social.icon }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
