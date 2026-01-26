import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { notFound } from 'next/navigation';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import BottomNav from '@/app/components/layout/BottomNav';
import SocialBar from '@/app/components/layout/SocialBar';
import Hero from '@/app/features/home/components/Hero';
import ValueProposition from '@/app/features/about/components/ValueProposition';
import Testimonials from '@/app/features/testimonials/components/Testimonials';
import PhotoGallery from '@/app/features/gallery/components/PhotoGallery';
import TourShowcase from '@/app/features/tours/components/TourShowcase';
import Contact from '@/app/features/contact/components/Contact';

// Type guard to validate locale
function isValidLocale(lang: string): lang is Locale {
  return i18n.locales.includes(lang as Locale);
}

// Testimonials data (could be moved to CMS or API later)
const getTestimonials = (lang: Locale) => {
  const isSpanish = lang === 'es';
  return [
    {
      id: '1',
      name: 'Pierre Dubois',
      location: 'Lyon, Francia',
      avatar: 'https://i.pravatar.cc/150?img=11',
      title: isSpanish ? 'Aventura inolvidable' : 'Unforgettable adventure',
      description: isSpanish
        ? 'Jean-Louis conoce cada rincón de los Andes. Nos llevó por rutas que jamás habríamos descubierto solos. Las Royal Enfield son perfectas para este terreno. ¡Volveré!'
        : 'Jean-Louis knows every corner of the Andes. He took us through routes we never would have discovered alone. The Royal Enfields are perfect for this terrain. I\'ll be back!',
      rating: 5
    },
    {
      id: '2',
      name: 'Sarah Mitchell',
      location: 'London, UK',
      avatar: 'https://i.pravatar.cc/150?img=5',
      title: isSpanish ? 'La mejor aventura en moto' : 'The best motorcycle adventure',
      description: isSpanish
        ? 'La mejor aventura en motocicleta que he tenido. Machu Picchu en moto es algo que todos deberían experimentar. Guías profesionales, rutas increíbles y recuerdos inolvidables.'
        : 'The best motorcycle adventure I\'ve ever had. Machu Picchu by bike is something everyone should experience. Professional guides, amazing routes, and unforgettable memories.',
      rating: 5
    },
    {
      id: '3',
      name: 'Hans Werner',
      location: 'Munich, Alemania',
      avatar: 'https://i.pravatar.cc/150?img=12',
      title: isSpanish ? 'Profesionalismo total' : 'Total professionalism',
      description: isSpanish
        ? 'Desde el primer contacto hasta el último día, todo impecable. Las motos estaban en excelente estado y la logística perfecta. Los paisajes del Perú en moto son indescriptibles.'
        : 'From first contact to the last day, everything was impeccable. The bikes were in excellent condition and the logistics were perfect. Peru\'s landscapes by motorcycle are indescribable.',
      rating: 5
    },
    {
      id: '4',
      name: 'Marc Benoit',
      location: 'Brussels, Bélgica',
      avatar: 'https://i.pravatar.cc/150?img=8',
      title: isSpanish ? 'Mi tercer viaje' : 'My third trip',
      description: isSpanish
        ? 'Mi tercer viaje con VRAndes y no será el último. Cada vez descubren nuevas rutas y experiencias. El equipo es como familia.'
        : 'My third trip with VRAndes and it won\'t be the last. Each time they discover new routes and experiences. The team is like family.',
      rating: 5
    },
    {
      id: '5',
      name: 'Emma Thompson',
      location: 'Sydney, Australia',
      avatar: 'https://i.pravatar.cc/150?img=9',
      title: isSpanish ? 'Viaje de ensueño' : 'Dream trip',
      description: isSpanish
        ? 'Viajé sola desde Australia y me sentí segura todo el tiempo. El grupo era increíble y los paisajes superaron todas mis expectativas. El Cañón del Colca es impresionante.'
        : 'I traveled solo from Australia and felt safe the entire time. The group was amazing and the landscapes exceeded all my expectations. Colca Canyon is breathtaking.',
      rating: 5
    }
  ];
};

// Photos data
const getPhotos = (lang: Locale) => {
  const isSpanish = lang === 'es';
  return [
    {
      id: '1',
      src: '/images/tours/canones-1.jpg',
      alt: isSpanish ? 'Motocicleta en cañón andino' : 'Motorcycle in Andean canyon',
      caption: isSpanish ? 'Cañón del Colca - Arequipa' : 'Colca Canyon - Arequipa',
      size: 'large' as const
    },
    {
      id: '2',
      src: '/images/tours/ushuaia-1.jpg',
      alt: isSpanish ? 'Ruta hacia Ushuaia' : 'Route to Ushuaia',
      caption: isSpanish ? 'Camino al fin del mundo' : 'Road to the end of the world',
      size: 'medium' as const
    },
    {
      id: '3',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Vista panorámica de montañas' : 'Panoramic mountain view',
      caption: isSpanish ? 'Altiplano peruano' : 'Peruvian Altiplano',
      size: 'medium' as const
    },
    {
      id: '4',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Lago en el altiplano' : 'Lake in the highlands',
      caption: isSpanish ? 'Lagos de altura' : 'High altitude lakes',
      size: 'wide' as const
    },
    {
      id: '5',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Desierto costero' : 'Coastal desert',
      caption: isSpanish ? 'Costa del Pacífico' : 'Pacific Coast',
      size: 'tall' as const
    },
    {
      id: '6',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Paisaje patagónico' : 'Patagonian landscape',
      caption: isSpanish ? 'Patagonia argentina' : 'Argentine Patagonia',
      size: 'medium' as const
    },
    {
      id: '7',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Montañas nevadas' : 'Snow-capped mountains',
      caption: isSpanish ? 'Volcanes de Arequipa' : 'Arequipa Volcanoes',
      size: 'medium' as const
    },
    {
      id: '8',
      src: '/images/tours/alacarte3.jpeg',
      alt: isSpanish ? 'Carretera en el altiplano' : 'Highway in the highlands',
      caption: isSpanish ? 'Rutas de altura' : 'High altitude routes',
      size: 'large' as const
    }
  ];
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const testimonials = getTestimonials(lang);
  const photos = getPhotos(lang);

  return (
    <main>
      <Header lang={lang} dict={dict} />
      <Hero
        videoSrc="/videos/hero-background.mp4"
        dict={dict}
      />
      <TourShowcase lang={lang} dict={dict} />
      <ValueProposition lang={lang} dict={dict} />
      <Testimonials testimonials={testimonials} dict={dict} />
      <PhotoGallery photos={photos} dict={dict} />
      <Contact lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
      <BottomNav lang={lang} dict={dict} />
      <SocialBar />
    </main>
  );
}
