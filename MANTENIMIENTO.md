# Guía de Mantenimiento - VRAndes

Esta guía explica cómo hacer cambios comunes en el sitio web.

---

## 📁 Estructura del Proyecto

```
app/
├── data/                    ← DATOS (testimonios, tours, fotos, etc.)
├── components/
│   ├── layout/              ← Header, Footer, navegación
│   └── ui/                  ← Botones y componentes reutilizables
├── features/                ← Secciones del sitio (tours, galería, etc.)
├── styles/                  ← Estilos CSS
├── types/                   ← Tipos TypeScript
└── [lang]/                  ← Páginas por idioma

dictionaries/                ← Traducciones (es.json, en.json)
public/images/               ← Imágenes del sitio
```

---

## 🔧 Tareas Comunes

### Agregar un nuevo testimonio

1. Abre `app/data/testimonials.ts`
2. Copia un testimonio existente y pégalo al final del array
3. Modifica los datos:

```typescript
{
  id: '6',  // Número único
  name: 'Nombre del Cliente',
  location: 'Ciudad, País',
  avatar: 'https://i.pravatar.cc/150?img=XX',  // Cambia XX por un número
  rating: 5,
  title: {
    es: 'Título en español',
    en: 'Title in English',
  },
  description: {
    es: 'Descripción en español...',
    en: 'Description in English...',
  },
},
```

### Agregar una foto a la galería

1. Sube la imagen a `public/images/tours/` o `public/images/gallery/`
2. Abre `app/data/gallery.ts`
3. Agrega una nueva entrada:

```typescript
{
  id: '9',
  src: '/images/tours/tu-imagen.jpg',
  size: 'medium',  // large, wide, tall, o medium
  alt: {
    es: 'Descripción de la foto',
    en: 'Photo description',
  },
  caption: {
    es: 'Pie de foto',
    en: 'Photo caption',
  },
},
```

**Tamaños de foto:**
- `large`: 2x2 cuadros (para fotos destacadas)
- `wide`: 2x1 cuadros (fotos panorámicas horizontales)
- `tall`: 1x2 cuadros (fotos verticales)
- `medium`: 1x1 cuadro (tamaño normal)

### Modificar un tour existente

1. Los datos básicos están en `app/data/tours.ts`
2. Los textos están en `dictionaries/es.json` y `dictionaries/en.json` bajo `tours.items.[key]`

Ejemplo en `dictionaries/es.json`:
```json
"tours": {
  "items": {
    "emblematico": {
      "title": "Título del Tour",
      "subtitle": "Subtítulo",
      "duration": "15 días",
      "distance": "2,500 km",
      "description": "Descripción...",
      "highlights": ["Punto 1", "Punto 2", "Punto 3"]
    }
  }
}
```

### Cambiar textos del sitio

Todos los textos están en los archivos de traducción:
- Español: `dictionaries/es.json`
- Inglés: `dictionaries/en.json`

Busca la sección correspondiente y modifica el texto.

### Agregar/cambiar enlaces de redes sociales

1. Abre `app/data/navigation.ts`
2. Busca `socialLinks` y modifica las URLs:

```typescript
export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu-cuenta',
    icon: icons.instagram,
  },
  // ...
];
```

### Cambiar el número de WhatsApp

1. Abre `app/data/navigation.ts`
2. Busca `whatsappConfig` y cambia el número:

```typescript
export const whatsappConfig = {
  number: '51943883777',  // Sin + ni espacios
  url: 'https://wa.me/51943883777',
  icon: icons.whatsapp,
};
```

---

## 🎨 Estilos

Los estilos están organizados en `app/styles/`:

```
styles/
├── base/
│   ├── variables.css    ← Colores, fuentes, espaciados
│   ├── reset.css        ← Reset del navegador
│   └── utilities.css    ← Clases utilitarias
├── components/          ← Estilos de componentes
├── layout/              ← Header, Footer, etc.
└── features/            ← Secciones específicas
```

### Cambiar colores

Abre `app/styles/base/variables.css` y modifica:

```css
--color-primary: #D4B59E;      /* Beige/dorado */
--color-secondary: #2C3E50;    /* Azul oscuro */
--color-accent: #E67E22;       /* Naranja */
```

---

## 📱 Responsive

El sitio tiene breakpoints en:
- Móvil: hasta 480px
- Tablet: hasta 768px
- Desktop: hasta 1024px
- Wide: 1440px+
- Ultrawide: 2560px+

Los media queries están en cada archivo CSS al final.

---

## 🚀 Para subir cambios

```bash
# Ver qué archivos cambiaron
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Subir a GitHub
git push
```

---

## ❓ Problemas Comunes

### Las imágenes no cargan
- Verifica que la ruta empiece con `/images/`
- Verifica que el archivo exista en `public/images/`
- Los nombres de archivo son sensibles a mayúsculas/minúsculas

### Los textos no cambian
- Recarga la página con Ctrl+Shift+R (o Cmd+Shift+R en Mac)
- Verifica que guardaste el archivo JSON correctamente

### Error de TypeScript
- Asegúrate de que las comas y comillas estén correctas
- Los archivos JSON no permiten comas al final del último elemento
