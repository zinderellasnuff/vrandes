'use client';
import '@/app/styles/layout/social-bar.css';
import { socialLinks } from '@/app/data';

export default function SocialBar() {
  return (
    <>
      {/* Desktop Social Bar */}
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

      {/* Mobile Social Bar - All social links including WhatsApp */}
      <div className="social-bar-mobile">
        <div className="social-bar-mobile__content">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-bar-mobile__link ${social.name === 'WhatsApp' ? 'social-bar-mobile__link--whatsapp' : ''}`}
              title={social.name}
            >
              <span dangerouslySetInnerHTML={{ __html: social.icon }} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
