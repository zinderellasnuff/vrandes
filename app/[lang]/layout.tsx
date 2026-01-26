import type { Metadata } from "next";
import { i18n, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ScrollRevealInit from "@/app/components/ScrollRevealInit";
import { notFound } from "next/navigation";

// Type guard to validate locale
function isValidLocale(lang: string): lang is Locale {
  return i18n.locales.includes(lang as Locale);
}

// Generate static params for all locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  const isSpanish = lang === 'es';
  const baseUrl = "https://vrandes.travel";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.metadata.title,
      template: "%s | Vintage Rides Andes"
    },
    description: dict.metadata.description,
    keywords: isSpanish ? [
      "tours motocicleta perú",
      "motorcycle tours peru",
      "vintage rides peru",
      "machu picchu motorcycle tour",
      "arequipa motorcycle rental",
      "colca canyon motorcycle",
      "lake titicaca motorcycle tour",
      "tour en moto por el sur de perú",
      "aventura en moto por los andes"
    ] : [
      "motorcycle tours peru",
      "peru motorcycle adventure",
      "vintage rides peru",
      "machu picchu motorcycle tour",
      "arequipa motorcycle rental",
      "colca canyon motorcycle",
      "lake titicaca motorcycle tour",
      "andes motorcycle tour",
      "adventure motorcycle peru"
    ],
    authors: [{ name: "Vintage Rides Andes", url: baseUrl }],
    creator: "Vintage Rides Andes",
    publisher: "Vintage Rides Andes",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: isSpanish ? "es_PE" : "en_US",
      url: `${baseUrl}/${lang}`,
      siteName: "Vintage Rides Andes",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isSpanish
            ? "Vintage Rides Andes - Tours de Motocicleta en Perú"
            : "Vintage Rides Andes - Motorcycle Tours in Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "es": `${baseUrl}/es`,
        "en": `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
    category: "travel",
  };
}

// JSON-LD Schemas
function getSchemas(lang: Locale) {
  const isSpanish = lang === 'es';
  const baseUrl = "https://vrandes.travel";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${baseUrl}/#organization`,
    name: "Vintage Rides Andes",
    alternateName: ["VRAndes", "Vintage Rides Peru", "VR Andes"],
    description: isSpanish
      ? "Tours de motocicleta exclusivos en el sur de Perú. Socio oficial de Vintage Rides Francia con más de 15 años de experiencia."
      : "Exclusive motorcycle tours in southern Peru. Official partner of Vintage Rides France with over 15 years of experience.",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.png`,
      width: 512,
      height: 512
    },
    image: [
      `${baseUrl}/images/og-image.jpg`,
      `${baseUrl}/images/tours/canones-1.jpg`,
      `${baseUrl}/images/tours/ushuaia-1.jpg`
    ],
    telephone: "+51943883777",
    email: "info@vrandes.travel",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Manuel Ugarteche 401, Urb. Selva Alegre",
      addressLocality: "Arequipa",
      addressRegion: "Arequipa",
      postalCode: "04000",
      addressCountry: "PE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.3988,
      longitude: -71.5369
    },
    sameAs: [
      "https://facebook.com/vintageridesandes",
      "https://instagram.com/vrandes",
      "https://youtube.com/@vintageridesandes",
      "https://www.vintagerides.com"
    ],
    priceRange: "$$-$$$",
    currenciesAccepted: "USD, PEN, EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00"
      }
    ],
    founder: {
      "@type": "Person",
      name: "Jean-Louis Gelot",
      jobTitle: isSpanish ? "Fundador y Director" : "Founder and Director",
      nationality: "French"
    },
    foundingDate: "2020",
    knowsLanguage: ["Spanish", "English", "French"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "127",
      reviewCount: "89"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Vintage Rides Andes",
    description: isSpanish
      ? "Tours de motocicleta exclusivos en el sur de Perú"
      : "Exclusive motorcycle tours in southern Peru",
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: ["es-PE", "en-US"],
  };

  const toursSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${baseUrl}/#tours`,
    name: isSpanish ? "Tours de Motocicleta en Perú" : "Motorcycle Tours in Peru",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "TouristTrip",
          name: isSpanish ? "Tour Emblemático - Altiplano y Selva" : "Signature Tour - Highlands and Jungle",
          description: isSpanish
            ? "11 días y 2,000 km por Arequipa, Cusco, Machu Picchu, Lago Titicaca y Selva Amazónica."
            : "11 days and 2,000 km through Arequipa, Cusco, Machu Picchu, Lake Titicaca and Amazon Rainforest.",
          duration: "P11D",
          provider: { "@id": `${baseUrl}/#organization` }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "TouristTrip",
          name: isSpanish ? "Tours à la Carte" : "Custom Tours",
          description: isSpanish
            ? "Tours personalizados desde 1 día hasta aventuras extendidas."
            : "Custom tours from 1 day to extended adventures.",
          provider: { "@id": `${baseUrl}/#organization` }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "TouristTrip",
          name: isSpanish ? "Cañones y Volcanes" : "Canyons and Volcanoes",
          description: isSpanish
            ? "6 días y 1,000 km de aventura extrema por cañones y volcanes."
            : "6 days and 1,000 km of extreme adventure through canyons and volcanoes.",
          duration: "P6D",
          provider: { "@id": `${baseUrl}/#organization` }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "TouristTrip",
          name: isSpanish ? "Desierto y Playas" : "Desert and Beaches",
          description: isSpanish
            ? "5 días y 1,050 km por la costa peruana."
            : "5 days and 1,050 km along the Peruvian coast.",
          duration: "P5D",
          provider: { "@id": `${baseUrl}/#organization` }
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isSpanish ? [
      {
        "@type": "Question",
        name: "¿Qué experiencia necesito para hacer un tour en moto por Perú?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recomendamos tener al menos 2 años de experiencia en motocicleta y estar cómodo conduciendo en diferentes tipos de terreno."
        }
      },
      {
        "@type": "Question",
        name: "¿Qué incluyen los tours de motocicleta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestros tours incluyen: motocicleta Royal Enfield Himalayan, combustible, alojamiento, desayunos, guía bilingüe, vehículo de soporte y asistencia mecánica."
        }
      },
      {
        "@type": "Question",
        name: "¿Cuál es la mejor época para hacer un tour en moto en Perú?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La mejor época es durante la estación seca, de abril a noviembre. Los meses ideales son mayo, junio, septiembre y octubre."
        }
      }
    ] : [
      {
        "@type": "Question",
        name: "What experience do I need for a motorcycle tour in Peru?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend having at least 2 years of motorcycle experience and being comfortable riding on different types of terrain."
        }
      },
      {
        "@type": "Question",
        name: "What's included in the motorcycle tours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our tours include: Royal Enfield Himalayan motorcycle, fuel, accommodation, breakfasts, bilingual guide, support vehicle, and mechanical assistance."
        }
      },
      {
        "@type": "Question",
        name: "When is the best time for a motorcycle tour in Peru?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best time is during the dry season, from April to November. The ideal months are May, June, September, and October."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Vintage Rides Andes",
    image: `${baseUrl}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Manuel Ugarteche 401, Urb. Selva Alegre",
      addressLocality: "Arequipa",
      addressRegion: "Arequipa",
      postalCode: "04000",
      addressCountry: "PE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.3988,
      longitude: -71.5369
    },
    url: baseUrl,
    telephone: "+51943883777",
    priceRange: "$$-$$$",
    hasMap: "https://maps.google.com/?q=-16.3988,-71.5369"
  };

  return [organizationSchema, websiteSchema, toursSchema, faqSchema, localBusinessSchema];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const schemas = getSchemas(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ScrollRevealInit />
      {children}
    </>
  );
}
