# Guía de Mantenimiento - VRAndes

Esta guía explica cómo hacer cambios en el sitio web de Vintage Rides Andes.
Está escrita para personas sin experiencia en programación.

---

## Tabla de Contenidos

1. [Antes de Empezar](#-antes-de-empezar)
2. [Cómo Abrir y Editar Archivos](#-cómo-abrir-y-editar-archivos)
3. [Agregar un Testimonio](#-agregar-un-testimonio)
4. [Agregar Fotos a la Galería](#-agregar-fotos-a-la-galería)
5. [Cambiar Imágenes de los Tours](#-cambiar-imágenes-de-los-tours)
6. [Modificar Textos de los Tours](#-modificar-textos-de-los-tours)
7. [Cambiar Textos Generales del Sitio](#-cambiar-textos-generales-del-sitio)
8. [Cambiar Redes Sociales](#-cambiar-redes-sociales)
9. [Cambiar Número de WhatsApp](#-cambiar-número-de-whatsapp)
10. [Subir los Cambios](#-subir-los-cambios)
11. [Problemas Comunes](#-problemas-comunes)

---

## 📋 Antes de Empezar

### ¿Qué necesitas?

1. **Visual Studio Code** (o cualquier editor de texto)
   - Descárgalo gratis de: https://code.visualstudio.com/

2. **Acceso a los archivos del proyecto**
   - La carpeta del proyecto se llama `vrandes`

### Reglas importantes

- **SIEMPRE** haz una copia de seguridad antes de editar
- Las comillas deben ser rectas `"texto"` no curvas `"texto"`
- Cada línea debe terminar con coma `,` EXCEPTO la última del grupo
- Guarda el archivo después de cada cambio (Ctrl+S o Cmd+S en Mac)

---

## 📂 Cómo Abrir y Editar Archivos

### Paso 1: Abrir Visual Studio Code
1. Abre Visual Studio Code
2. Ve a `Archivo` → `Abrir Carpeta`
3. Busca y selecciona la carpeta `vrandes`

### Paso 2: Navegar a los archivos
En el panel izquierdo verás todas las carpetas. Los archivos más importantes son:

```
vrandes/
├── app/
│   └── data/                ← Aquí están los datos
│       ├── testimonials.ts  ← Testimonios de clientes
│       ├── gallery.ts       ← Fotos de la galería
│       ├── tours.ts         ← Datos de los tours
│       └── navigation.ts    ← Redes sociales y WhatsApp
│
├── dictionaries/            ← Aquí están los textos
│   ├── es.json              ← Textos en español
│   └── en.json              ← Textos en inglés
│
└── public/
    └── images/              ← Aquí van las imágenes
        └── tours/           ← Imágenes de los tours
```

### Paso 3: Abrir un archivo
Haz clic en el archivo que quieras editar. Se abrirá en el panel derecho.

---

## ⭐ Agregar un Testimonio

Los testimonios son los comentarios de clientes que aparecen en la sección "Testimonios".

### Archivo a editar
`app/data/testimonials.ts`

### Pasos

1. Abre el archivo `app/data/testimonials.ts`

2. Busca el último testimonio (está cerca del final, antes de `];`)

3. Después del último `},` y antes de `];`, agrega un nuevo testimonio:

```typescript
  {
    id: '5',
    name: 'Nombre del Cliente',
    date: '15 Enero 2025',
    rating: 5,
    description: {
      es: 'Aquí va el comentario en español. Puede ser largo.',
      en: 'Here goes the comment in English. It can be long.',
    },
  },
```

### Ejemplo visual de dónde agregar

```typescript
// ... testimonios anteriores ...
  {
    id: '4',
    name: 'Martine',
    date: '16 Octubre 2024',
    rating: 5,
    description: {
      es: 'Amo estos viajes...',
      en: 'I love these trips...',
    },
  },
  // ← AQUÍ AGREGAS EL NUEVO (después de la coma de arriba)
  {
    id: '5',
    name: 'Nuevo Cliente',
    date: '20 Enero 2025',
    rating: 5,
    description: {
      es: 'Mi comentario en español...',
      en: 'My comment in English...',
    },
  },
];  // ← Este corchete cierra la lista, NO lo borres
```

### Campos explicados

| Campo | Qué es | Ejemplo |
|-------|--------|---------|
| `id` | Número único (el siguiente al último) | `'5'` |
| `name` | Nombre del cliente | `'Richard'` |
| `date` | Fecha del comentario | `'03 Junio 2025'` |
| `rating` | Calificación (siempre 5) | `5` |
| `description.es` | Comentario en español | `'Excelente viaje...'` |
| `description.en` | Comentario en inglés | `'Excellent trip...'` |

---

## 🖼️ Agregar Fotos a la Galería

### Paso 1: Preparar la imagen

1. **Tamaño recomendado**: 1920px de ancho máximo
2. **Formato**: JPG (para fotos) o PNG (si tiene transparencia)
3. **Nombre del archivo**: Sin espacios ni caracteres especiales
   - ✅ Correcto: `machu-picchu-amanecer.jpg`
   - ❌ Incorrecto: `Machu Picchu Amanecer (1).jpg`

### Paso 2: Subir la imagen

1. Copia tu imagen
2. Pégala en la carpeta `public/images/gallery/`

### Paso 3: Agregar al código

1. Abre `app/data/gallery.ts`

2. Busca el array de fotos y agrega una nueva entrada:

```typescript
  {
    id: '10',
    src: '/images/gallery/nombre-de-tu-imagen.jpg',
    size: 'medium',
    alt: {
      es: 'Descripción breve de la foto',
      en: 'Brief photo description',
    },
    caption: {
      es: 'Texto que aparece debajo de la foto',
      en: 'Text that appears below the photo',
    },
  },
```

### Tamaños disponibles

| Tamaño | Cuándo usarlo |
|--------|---------------|
| `'large'` | Fotos muy importantes o destacadas (ocupa 2x2) |
| `'wide'` | Fotos panorámicas horizontales (ocupa 2x1) |
| `'tall'` | Fotos verticales/retratos (ocupa 1x2) |
| `'medium'` | Fotos normales (ocupa 1x1) - **usar por defecto** |

---

## 🏍️ Cambiar Imágenes de los Tours

Cada tour tiene varias imágenes que se muestran en un carrusel.

### Ubicación de las imágenes

```
public/images/tours/
├── emblematico/     ← Imágenes del Tour Emblemático
├── alacarte/        ← Imágenes de A La Carte
├── raids/           ← Imágenes de Raids
└── alquiler-motos/  ← Imágenes de Alquiler de Motos
```

### Para cambiar una imagen

1. Prepara tu nueva imagen (1920px máximo de ancho)
2. Nómbrala de forma descriptiva: `paisaje-colca-canyon.jpg`
3. Cópiala a la carpeta del tour correspondiente
4. Abre `app/data/tours.ts`
5. Busca el tour y actualiza la lista de imágenes:

```typescript
images: [
  '/images/tours/emblematico/tu-nueva-imagen.jpg',
  '/images/tours/emblematico/otra-imagen.jpg',
  // ... más imágenes
],
```

### Recomendaciones

- Usa entre 3 y 6 imágenes por tour
- La primera imagen es la más importante (se muestra primero)
- Optimiza las imágenes antes de subirlas (máximo 500KB por imagen)

---

## 📝 Modificar Textos de los Tours

Los textos de los tours están en los archivos de traducción.

### Archivos a editar

- Español: `dictionaries/es.json`
- Inglés: `dictionaries/en.json`

### Pasos

1. Abre `dictionaries/es.json` (para español)

2. Busca la sección `"tours"` y luego `"items"`

3. Cada tour tiene una clave:
   - `"emblematico"` → Tour Emblemático
   - `"alacarte"` → A La Carte
   - `"raids"` → Raids
   - `"alquiler"` → Alquiler de Motos

4. Modifica los campos que necesites:

```json
"tours": {
  "items": {
    "emblematico": {
      "title": "El Tour Emblemático",
      "subtitle": "La aventura definitiva",
      "badge": "MÁS POPULAR",
      "duration": "15 días",
      "distance": "2,500 km",
      "description": "Aquí va la descripción del tour...",
      "highlights": [
        "Punto destacado 1",
        "Punto destacado 2",
        "Punto destacado 3"
      ]
    }
  }
}
```

### Campos explicados

| Campo | Qué es |
|-------|--------|
| `title` | Nombre del tour |
| `subtitle` | Frase corta debajo del título |
| `badge` | Etiqueta pequeña (ej: "MÁS POPULAR") |
| `duration` | Duración del tour |
| `distance` | Distancia total |
| `description` | Descripción larga del tour |
| `highlights` | Lista de puntos destacados (etiquetas) |

### Texto en negrita

Para poner texto en **negrita**, usa dos asteriscos:

```json
"description": "Este es un texto normal y **este está en negrita**."
```

### ¡IMPORTANTE!

- Edita AMBOS archivos (es.json Y en.json)
- Mantén las comillas y comas exactamente como están
- No borres las llaves `{` `}` ni los corchetes `[` `]`

---

## 🌐 Cambiar Textos Generales del Sitio

Todos los textos del sitio están en:
- `dictionaries/es.json` (español)
- `dictionaries/en.json` (inglés)

### Estructura del archivo

```json
{
  "nav": {
    "home": "Inicio",
    "tours": "Expediciones",
    "about": "Nosotros",
    "gallery": "Galería",
    "contact": "Contacto"
  },
  "hero": {
    "title": "Título principal",
    "subtitle": "Subtítulo"
  },
  "about": {
    "title": "Sobre Nosotros",
    "description": "Descripción..."
  }
  // ... más secciones
}
```

### Para cambiar un texto

1. Abre el archivo de traducción
2. Busca el texto que quieres cambiar (usa Ctrl+F para buscar)
3. Modifica SOLO el texto entre comillas
4. Guarda el archivo
5. Haz lo mismo en el otro idioma

### Ejemplo

Para cambiar "Expediciones" por "Tours":

**Antes:**
```json
"tours": "Expediciones",
```

**Después:**
```json
"tours": "Tours",
```

---

## 📱 Cambiar Redes Sociales

### Archivo a editar
`app/data/navigation.ts`

### Ubicación en el archivo

Busca `export const socialLinks`:

```typescript
export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/vrandes',
    icon: icons.instagram,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/vintageridesandes',
    icon: icons.facebook,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@vintageridesandes',
    icon: icons.youtube,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/51943883777',
    icon: icons.whatsapp,
  },
];
```

### Para cambiar una URL

Solo modifica la parte de `url`:

```typescript
url: 'https://instagram.com/tu-nueva-cuenta',
```

### Redes sociales disponibles

Los íconos disponibles son:
- `icons.instagram`
- `icons.facebook`
- `icons.youtube`
- `icons.whatsapp`

---

## 📞 Cambiar Número de WhatsApp

### Archivo a editar
`app/data/navigation.ts`

### Ubicación

Busca `whatsappConfig`:

```typescript
export const whatsappConfig = {
  number: '51943883777',
  url: 'https://wa.me/51943883777',
  icon: icons.whatsapp,
};
```

### Pasos

1. Cambia el número en AMBOS lugares (`number` y en la `url`)
2. El formato es: código de país + número, SIN espacios ni guiones
   - Perú: `51` + número
   - Ejemplo: `51943883777`

### También actualiza en socialLinks

Busca WhatsApp en `socialLinks` y actualiza la URL ahí también:

```typescript
{
  name: 'WhatsApp',
  url: 'https://wa.me/51943883777',  // ← Cambiar aquí también
  icon: icons.whatsapp,
},
```

---

## 🚀 Subir los Cambios

Después de hacer cambios, debes subirlos para que aparezcan en el sitio web.

### Opción 1: Usando Visual Studio Code (más fácil)

1. En VS Code, haz clic en el ícono de "Source Control" (rama de árbol) en el panel izquierdo
2. Verás los archivos que modificaste
3. Escribe un mensaje describiendo qué cambiaste (ej: "Agregué nuevo testimonio")
4. Haz clic en "✓ Commit"
5. Haz clic en "Sync Changes" o "Push"

### Opción 2: Usando la terminal

1. Abre la terminal en VS Code (`Ver` → `Terminal`)
2. Escribe estos comandos uno por uno:

```bash
git add .
git commit -m "Descripción de lo que cambiaste"
git push
```

### Verificar los cambios

Después de subir, espera unos minutos y revisa el sitio web para ver los cambios.

---

## ❓ Problemas Comunes

### "Las imágenes no aparecen"

**Causas posibles:**
1. La ruta está mal escrita
   - ✅ Correcto: `/images/tours/foto.jpg`
   - ❌ Incorrecto: `images/tours/foto.jpg` (falta el `/` al inicio)

2. El nombre del archivo no coincide
   - Los nombres son sensibles a mayúsculas/minúsculas
   - `Foto.jpg` es diferente de `foto.jpg`

3. La imagen no está en la carpeta correcta
   - Verifica que esté en `public/images/...`

### "Los cambios no se ven en el sitio"

1. **Recarga la página con Ctrl+Shift+R** (limpia la caché)
2. Espera unos minutos si acabas de subir cambios
3. Verifica que guardaste el archivo (Ctrl+S)
4. Verifica que hiciste push de los cambios

### "Error de sintaxis" o "El sitio no carga"

Probablemente hay un error de formato. Verifica:

1. **Comillas**: Deben ser rectas `"texto"` no curvas
2. **Comas**: Cada elemento necesita coma al final, EXCEPTO el último
3. **Llaves y corchetes**: Cada `{` debe tener su `}`, cada `[` su `]`

**Ejemplo correcto:**
```json
{
  "items": [
    "primero",
    "segundo",
    "tercero"
  ]
}
```

**Ejemplo incorrecto:**
```json
{
  "items": [
    "primero",
    "segundo",
    "tercero",   ← Esta coma sobra (es el último)
  ]
}
```

### "No sé qué id poner"

Mira el último elemento de la lista y usa el número siguiente.
- Si el último tiene `id: '4'`, el nuevo será `id: '5'`

### "¿Cómo deshago un cambio?"

1. Si NO guardaste: Cierra el archivo sin guardar
2. Si guardaste pero NO subiste: En VS Code, clic derecho en el archivo → "Discard Changes"
3. Si ya subiste: Contacta al desarrollador

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas que no puedes resolver:

1. **NO** borres archivos que no entiendas
2. **NO** modifiques archivos que no están en esta guía
3. Toma una captura de pantalla del error
4. Contacta al desarrollador con la captura y explicación de qué intentabas hacer

---

## 📋 Resumen Rápido

| Quiero... | Archivo a editar |
|-----------|------------------|
| Agregar testimonio | `app/data/testimonials.ts` |
| Agregar foto a galería | `app/data/gallery.ts` + imagen en `public/images/gallery/` |
| Cambiar texto de tour | `dictionaries/es.json` y `dictionaries/en.json` |
| Cambiar imágenes de tour | `app/data/tours.ts` + imagen en `public/images/tours/` |
| Cambiar redes sociales | `app/data/navigation.ts` |
| Cambiar WhatsApp | `app/data/navigation.ts` |
| Cambiar textos generales | `dictionaries/es.json` y `dictionaries/en.json` |
