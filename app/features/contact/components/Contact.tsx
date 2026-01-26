'use client';
import React, { useState } from 'react';
import '@/app/styles/features/contact.css';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  message: string;
}

interface ContactProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Contact({ dict }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact" aria-label={dict.contact.label}>
      <div className="contact__container container">
        {/* Header */}
        <div className="contact__header reveal">
          <span className="contact__label">{dict.contact.label}</span>
          <h2 className="contact__title display-text">
            {dict.contact.title}
            <span className="contact__title-highlight">{dict.contact.titleHighlight}</span>
          </h2>
          <p className="contact__subtitle">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* Form */}
        <form className="contact__form reveal" onSubmit={handleSubmit} aria-label={dict.contact.label}>
          {/* Decorative element */}
          <div className="contact__form-decoration" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="contact__form-icon">
              <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"/>
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>

          <div className="contact__form-grid">
            {/* First Name */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="firstName">
                {dict.contact.form.firstName}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="contact__input"
                placeholder={dict.contact.form.firstNamePlaceholder}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="lastName">
                {dict.contact.form.lastName}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="contact__input"
                placeholder={dict.contact.form.lastNamePlaceholder}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="email">
                {dict.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder={dict.contact.form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="phone">
                {dict.contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="contact__input"
                placeholder={dict.contact.form.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Country */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="country">
                {dict.contact.form.country}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="contact__input"
                placeholder={dict.contact.form.countryPlaceholder}
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            {/* City */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="city">
                {dict.contact.form.city}
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="contact__input"
                placeholder={dict.contact.form.cityPlaceholder}
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            {/* Message - Full width */}
            <div className="contact__field contact__field--full">
              <label className="contact__label-field" htmlFor="message">
                {dict.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder={dict.contact.form.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="contact__submit">
            <span className="contact__submit-text">{dict.contact.form.submit}</span>
            <svg className="contact__submit-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
