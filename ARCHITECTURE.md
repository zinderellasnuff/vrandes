# Arquitectura del Proyecto Vrandes

## Estructura de Carpetas

\`\`\`
app/
├── components/          # Componentes reutilizables
│   ├── common/         # Componentes compartidos
│   ├── layout/         # Componentes de layout (Header, Footer)
│   └── ui/             # Componentes UI básicos (Button, Input)
├── features/           # Funcionalidades por módulo
│   ├── home/          # Página principal
│   └── tours/         # Sección de tours
├── lib/               # Utilidades y helpers
├── types/             # TypeScript types
├── constants/         # Constantes y configuraciones
└── styles/            # Estilos CSS
    ├── base/          # Variables, reset, utilities
    ├── components/    # Estilos de componentes
    └── layout/        # Estilos de layout

public/
├── images/            # Imágenes estáticas
├── videos/            # Videos
└── fonts/             # Fuentes custom
\`\`\`

## Principios

1. **Separación de responsabilidades**: Cada componente tiene una única responsabilidad
2. **Reutilización**: Los componentes en \`ui/\` son reutilizables en todo el proyecto
3. **Modularidad**: Cada feature es independiente
4. **Escalabilidad**: Fácil de añadir nuevas features sin afectar existentes

## Nomenclatura

- Componentes: PascalCase (Button.tsx, Header.tsx)
- Estilos: kebab-case (button.css, header.css)
- Constantes: UPPER_CASE (COLORS, ROUTES)
- Types: PascalCase con sufijo Props (ButtonProps, HeroProps)
