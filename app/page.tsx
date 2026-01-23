import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './features/home/components/Hero';
import ValueProposition from './features/about/components/ValueProposition';
import Testimonials from './features/testimonials/components/Testimonials';
import PhotoGallery from './features/gallery/components/PhotoGallery';
import TourShowcase from './features/tours/components/TourShowcase';
import Contact from './features/contact/components/Contact';

const testimonials = [
  {
    id: '1',
    name: 'Sara Mohamed',
    location: 'Jakarta',
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'El mejor sistema de reservas',
    description: 'He estado usando el sistema de reservas durante varios años y se ha convertido en mi plataforma preferida para planear mis viajes. La interfaz es fácil de usar y agradezco la información detallada y la disponibilidad en tiempo real de los hoteles.',
    rating: 5
  },
  {
    id: '2',
    name: 'Atend John',
    location: 'California',
    avatar: 'https://i.pravatar.cc/150?img=13',
    title: 'El mejor sistema de reservas',
    description: 'He estado usando el sistema de reservas durante varios años y se ha convertido en mi plataforma preferida para planear mis viajes. La interfaz es fácil de usar y agradezco la información detallada y la disponibilidad en tiempo real de los hoteles.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sara Mohamed',
    location: 'Jakarta',
    avatar: 'https://i.pravatar.cc/150?img=5',
    title: 'El mejor sistema de reservas',
    description: 'He estado usando el sistema de reservas durante varios años y se ha convertido en mi plataforma preferida para planear mis viajes. La interfaz es fácil de usar y agradezco la información detallada y la disponibilidad en tiempo real de los hoteles.',
    rating: 5
  },
  {
    id: '4',
    name: 'Michael Chen',
    location: 'Singapur',
    avatar: 'https://i.pravatar.cc/150?img=12',
    title: 'Experiencia inolvidable',
    description: 'La aventura por los Andes fue increíble. Los guías conocían cada rincón y nos llevaron a lugares que nunca hubiera encontrado por mi cuenta. ¡Totalmente recomendado!',
    rating: 5
  },
  {
    id: '5',
    name: 'Laura García',
    location: 'Madrid',
    avatar: 'https://i.pravatar.cc/150?img=9',
    title: 'Servicio excepcional',
    description: 'Desde el primer contacto hasta el final del tour, todo fue perfecto. Las motos estaban en excelente estado y la logística impecable. Volveré sin dudas.',
    rating: 5
  }
];

const photos = [
  {
    id: '1',
    src: '/images/tours/canones-1.jpg',
    alt: 'Motocicleta en cañón andino',
    caption: 'Cañón del Colca - Arequipa',
    size: 'large' as const
  },
  {
    id: '2',
    src: '/images/tours/ushuaia-1.jpg',
    alt: 'Ruta hacia Ushuaia',
    caption: 'Camino al fin del mundo',
    size: 'medium' as const
  },
  {
    id: '3',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Vista panorámica de montañas',
    caption: 'Altiplano peruano',
    size: 'medium' as const
  },
  {
    id: '4',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Lago en el altiplano',
    caption: 'Lagos de altura',
    size: 'wide' as const
  },
  {
    id: '5',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Desierto costero',
    caption: 'Costa del Pacífico',
    size: 'tall' as const
  },
  {
    id: '6',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Paisaje patagónico',
    caption: 'Patagonia argentina',
    size: 'medium' as const
  },
  {
    id: '7',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Montañas nevadas',
    caption: 'Volcanes de Arequipa',
    size: 'medium' as const
  },
  {
    id: '8',
    src: '/images/tours/alacarte3.jpeg',
    alt: 'Carretera en el altiplano',
    caption: 'Rutas de altura',
    size: 'large' as const
  }
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        videoSrc="/videos/hero-background.mp4"
        title="Vive el Perú"
      />
      <ValueProposition />
      <TourShowcase />
      <Testimonials testimonials={testimonials} />
      <PhotoGallery photos={photos} />
      <Contact />
      <Footer />
    </main>
  );
}