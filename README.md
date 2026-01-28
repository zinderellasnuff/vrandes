# Vintage Rides Andes

Sitio web oficial de **Vintage Rides Andes** - Tours en motocicleta por los Andes de Sudamérica.

## Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **CSS Puro** - Estilos con metodología BEM
- **i18n** - Soporte multiidioma (Español/Inglés)

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
vrandes/
├── app/
│   ├── [lang]/              # Páginas por idioma (es, en)
│   ├── components/          # Componentes reutilizables
│   │   ├── layout/          # Header, Footer, navegación
│   │   └── ui/              # Botones, inputs, etc.
│   ├── data/                # Datos del sitio
│   │   ├── testimonials.ts  # Testimonios de clientes
│   │   ├── gallery.ts       # Fotos de la galería
│   │   ├── tours.ts         # Información de tours
│   │   ├── navigation.ts    # Enlaces y redes sociales
│   │   └── about.ts         # Sección nosotros
│   ├── features/            # Secciones del sitio
│   │   ├── home/            # Hero
│   │   ├── tours/           # Showcase de tours
│   │   ├── about/           # Propuesta de valor
│   │   ├── testimonials/    # Testimonios
│   │   ├── gallery/         # Galería de fotos
│   │   └── contact/         # Formulario de contacto
│   ├── styles/              # Estilos CSS
│   │   ├── base/            # Variables, reset, utilities
│   │   ├── components/      # Estilos de componentes
│   │   ├── layout/          # Header, Footer, etc.
│   │   └── features/        # Estilos por sección
│   ├── types/               # Tipos TypeScript
│   └── hooks/               # Hooks personalizados
├── dictionaries/            # Traducciones
│   ├── es.json              # Español
│   └── en.json              # Inglés
├── lib/
│   └── i18n/                # Configuración de idiomas
├── public/
│   ├── images/              # Imágenes del sitio
│   └── videos/              # Videos (hero)
└── MANTENIMIENTO.md         # Guía para hacer cambios
```

## Mantenimiento

Para hacer cambios comunes (agregar testimonios, fotos, modificar textos), consulta la [Guía de Mantenimiento](./MANTENIMIENTO.md).

### Cambios Rápidos

| Tarea | Archivo |
|-------|---------|
| Agregar testimonio | `app/data/testimonials.ts` |
| Agregar foto | `app/data/gallery.ts` |
| Modificar tour | `app/data/tours.ts` + `dictionaries/*.json` |
| Cambiar textos | `dictionaries/es.json` o `dictionaries/en.json` |
| Redes sociales | `app/data/navigation.ts` |
| Colores | `app/styles/base/variables.css` |

## Scripts

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Construir para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Verificar código
```

## Despliegue

El proyecto está configurado para desplegarse en Vercel:

1. Conecta el repositorio a Vercel
2. Los despliegues son automáticos con cada push a `main`

## Idiomas

El sitio soporta dos idiomas:
- Español (`/es`) - Idioma por defecto
- Inglés (`/en`)

El middleware detecta automáticamente el idioma del navegador.

## Licencia

Todos los derechos reservados - Vintage Rides Andes
