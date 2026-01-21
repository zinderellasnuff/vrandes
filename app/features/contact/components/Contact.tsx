'use client';
import React, { useState } from 'react';
import '@/app/styles/features/contact.css';

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  pais: string;
  ciudad: string;
  mensaje: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    pais: '',
    ciudad: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container container">
        {/* Header */}
        <div className="contact__header">
          <span className="contact__label">Contacto</span>
          <h2 className="contact__title display-text">
            Comienza tu
            <span className="contact__title-highlight">aventura</span>
          </h2>
          <p className="contact__subtitle">
            ¿Listo para recorrer las rutas más espectaculares del Perú?
            Escríbenos y planificamos juntos tu próxima aventura.
          </p>
        </div>

        {/* Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          {/* Decorative element */}
          <div className="contact__form-decoration">
            <svg viewBox="0 0 100 100" className="contact__form-icon">
              <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"/>
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>

          <div className="contact__form-grid">
            {/* Nombre */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="contact__input"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            {/* Apellido */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="apellido">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="contact__input"
                placeholder="Tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Teléfono */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="telefono">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="contact__input"
                placeholder="+51 999 999 999"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            {/* País */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="pais">
                País
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                className="contact__input"
                placeholder="Tu país"
                value={formData.pais}
                onChange={handleChange}
              />
            </div>

            {/* Ciudad */}
            <div className="contact__field">
              <label className="contact__label-field" htmlFor="ciudad">
                Ciudad
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                className="contact__input"
                placeholder="Tu ciudad"
                value={formData.ciudad}
                onChange={handleChange}
              />
            </div>

            {/* Mensaje - Full width */}
            <div className="contact__field contact__field--full">
              <label className="contact__label-field" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="contact__textarea"
                placeholder="Cuéntanos sobre la aventura que tienes en mente..."
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="contact__submit">
            <span className="contact__submit-text">Enviar mensaje</span>
            <svg className="contact__submit-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
