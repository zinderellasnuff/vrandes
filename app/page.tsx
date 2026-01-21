import Header from './components/layout/Header';
import Hero from './features/home/components/Hero';
import ValueProposition from './features/about/components/ValueProposition';
import TourShowcase from './features/tours/components/TourShowcase';

const tours = [
  {
    id: 'ushuaia-2027',
    title: 'USHUAIA 2027',
    subtitle: 'La Ruta del Fin del Mundo',
    duration: '5 días',
    distance: '1050 kms',
    images: [
      '/images/tours/mapa.webp',
      '/images/tours/ushuaia-1.jpg',
      '/images/tours/ushuaia-2.jpg'
    ],
    description: 'Un viaje épico hacia el fin del mundo. Atraviesa paisajes patagónicos únicos y vive la experiencia de llegar a Ushuaia, la ciudad más austral del planeta.',
    highlights: [
      'Paisajes patagónicos únicos',
      'Experiencia austral inolvidable',
      'Rutas escénicas espectaculares'
    ],
    color: '#E8F4F8'
  },
  {
    id: 'altiplano-selva',
    title: 'ALTIPLANO Y SELVA',
    subtitle: 'Contrastes del Perú',
    duration: '11 días',
    distance: '2000 kms',
    images: [
      '/images/tours/altiplano-1.jpg',
      '/images/tours/altiplano-2.jpg',
      '/images/tours/altiplano-3.jpg'
    ],
    description: 'Descubre los contrastes más impresionantes del Perú. Desde las alturas del altiplano hasta la exuberancia de la selva amazónica, vive una aventura de transformación.',
    highlights: [
      'Del altiplano a la selva amazónica',
      'Diversidad cultural y natural',
      'Aventura de 2000 kilómetros'
    ],
    color: '#FFF9E6'
  },
  {
    id: 'desierto-playas',
    title: 'DESIERTO Y PLAYAS',
    subtitle: 'Costa Peruana',
    duration: '5 días',
    distance: '1050 kms',
    images: [
      '/images/tours/desierto-1.jpg',
      '/images/tours/desierto-2.jpg',
      '/images/tours/desierto-3.jpg'
    ],
    description: 'Explora el contraste entre el desierto costero y las playas del Pacífico. Una ruta que combina arena, sol y la magia de la costa peruana.',
    highlights: [
      'Desiertos costeros únicos',
      'Playas del Pacífico',
      'Gastronomía marina excepcional'
    ],
    color: '#FFE8D6'
  },
  {
    id: 'canones-volcanes',
    title: 'CAÑONES Y VOLCANES',
    subtitle: 'Arequipa Extrema',
    duration: '6 días',
    distance: '1000 kms',
    images: [
      '/images/tours/canones-1.jpg',
      '/images/tours/canones-2.jpg',
      '/images/tours/canones-3.jpg'
    ],
    description: 'Atraviesa los cañones más profundos de América y rodea volcanes imponentes. Una aventura extrema en el corazón de los Andes del sur.',
    highlights: [
      'Cañón del Colca',
      'Volcanes nevados',
      'Aventura de altura extrema'
    ],
    color: '#F0E8FF'
  },
  {
    id: 'a-la-carte',
    title: 'A LA CARTE',
    subtitle: 'Tu Aventura Personalizada',
    duration: 'Personalizado',
    distance: 'A medida',
    images: [
      '/images/tours/custom-1.jpg',
      '/images/tours/custom-2.jpg',
      '/images/tours/custom-3.jpg'
    ],
    description: 'Diseña tu propia aventura. Elige tus destinos, duración y experiencias. Creamos el tour perfecto según tus sueños y expectativas.',
    highlights: [
      'Totalmente personalizable',
      'Rutas exclusivas',
      'Experiencia a tu medida'
    ],
    color: '#FFE8F0'
  }
];

export default function Home() {
  return (
    <main>
      <Header transparent />
      <Hero
        videoSrc="/videos/hero-background.mp4"
        title="Vive el Perú"
        description="No vendemos tours, creamos aventuras."
      />
            <TourShowcase tours={tours} />
      <ValueProposition />
    </main>
  );
}