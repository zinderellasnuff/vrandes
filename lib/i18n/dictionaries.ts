import type { Locale } from './config';

// Dictionary type based on the structure
export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    tours: string;
    about: string;
    gallery: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    cta: string;
    scroll: string;
  };
  tours: {
    label: string;
    recommended: string;
    duration: string;
    distance: string;
    bookTour: string;
    contactUs: string;
    viewPdf: string;
    downloadPdf: string;
    previousTour: string;
    nextTour: string;
    swipeHint: string;
    imageCarousel: string;
    tourCarousel: string;
    image: string;
    items: {
      emblematico: TourItem;
      alacarte: TourItem;
      raids: TourItem;
      alquiler: TourItem;
    };
  };
  about: {
    title: string;
    description: string;
    footer: string;
    previous: string;
    next: string;
    slides: {
      [key: string]: {
        title: string;
        highlight: string;
        subtitle: string;
        content: string;
      };
    };
  };
  testimonials: {
    label: string;
    title: string;
  };
  gallery: {
    label: string;
    title: string;
    close: string;
    previous: string;
    next: string;
  };
  contact: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    form: {
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      country: string;
      countryPlaceholder: string;
      city: string;
      cityPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  footer: {
    slogan: string;
    explore: string;
    followUs: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  common: {
    whatsapp: string;
    contactWhatsApp: string;
  };
}

interface TourItem {
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  description: string;
  highlights: string[];
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
