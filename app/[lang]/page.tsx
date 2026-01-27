import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { notFound } from 'next/navigation';

// Layout components
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import BottomNav from '@/app/components/layout/BottomNav';
import SocialBar from '@/app/components/layout/SocialBar';

// Feature components
import Hero from '@/app/features/home/components/Hero';
import TourShowcase from '@/app/features/tours/components/TourShowcase';
import ValueProposition from '@/app/features/about/components/ValueProposition';
import Testimonials from '@/app/features/testimonials/components/Testimonials';
import PhotoGallery from '@/app/features/gallery/components/PhotoGallery';
import Contact from '@/app/features/contact/components/Contact';

// Data
import { getTestimonials, getPhotos } from '@/app/data';

function isValidLocale(lang: string): lang is Locale {
  return i18n.locales.includes(lang as Locale);
}

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
