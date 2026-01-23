import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Lora } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "./components/ScrollRevealInit";

// Optimized fonts with display swap for better performance
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://vrandes.travel"),
  title: {
    default: "Vintage Rides Andes | Tours de Motocicleta en Perú | Descubre el Sur en 2 Ruedas",
    template: "%s | Vintage Rides Andes"
  },
  description: "Tours de motocicleta exclusivos en el sur de Perú. Explora Machu Picchu, Lago Titicaca, Cañón del Colca y los Andes. 15 años de experiencia. Tours desde 5 hasta 13 días. Socio oficial de Vintage Rides Francia.",
  keywords: [
    "tours motocicleta perú",
    "motorcycle tours peru",
    "vintage rides peru",
    "machu picchu motorcycle tour",
    "arequipa motorcycle rental",
    "colca canyon motorcycle",
    "lake titicaca motorcycle tour",
    "cusco motorcycle adventure",
    "sacred valley motorcycle",
    "andes motorcycle tour",
    "peru adventure motorcycle",
    "royal enfield peru",
    "tour en moto por el sur de perú",
    "alquiler de motos para turismo en arequipa",
    "viaje en moto a machu picchu",
    "aventura en moto por los andes"
  ],
  authors: [{ name: "Vintage Rides Andes", url: "https://vrandes.travel" }],
  creator: "Vintage Rides Andes",
  publisher: "Vintage Rides Andes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://vrandes.travel",
    siteName: "Vintage Rides Andes",
    title: "Vintage Rides Andes | Tours de Motocicleta en Perú",
    description: "Tours de motocicleta exclusivos en el sur de Perú. Explora Machu Picchu, Lago Titicaca, Cañón del Colca y los Andes. La vida es un viaje.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vintage Rides Andes - Tours de Motocicleta en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Rides Andes | Tours de Motocicleta en Perú",
    description: "Tours de motocicleta exclusivos en el sur de Perú. Explora Machu Picchu, Lago Titicaca y los Andes.",
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
    canonical: "https://vrandes.travel",
    languages: {
      "es-PE": "https://vrandes.travel",
      "en-US": "https://vrandes.travel/en",
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
  },
  category: "travel",
};

// Viewport configuration for better mobile experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2C3E50" },
    { media: "(prefers-color-scheme: dark)", color: "#1a252f" },
  ],
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Vintage Rides Andes",
  alternateName: "VRAndes",
  description: "Tours de motocicleta exclusivos en el sur de Perú. Socio oficial de Vintage Rides Francia con más de 15 años de experiencia.",
  url: "https://vrandes.travel",
  logo: "https://vrandes.travel/images/logo.png",
  image: "https://vrandes.travel/images/og-image.jpg",
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
    "https://www.vintagerides.com"
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00"
  },
  founder: {
    "@type": "Person",
    name: "Jean-Louis Gelot"
  },
  areaServed: {
    "@type": "Country",
    name: "Peru"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tours de Motocicleta",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Tour Altiplano y Selva",
          description: "11 días, 2000 kms - Arequipa, Cusco, Machu Picchu, Lago Titicaca, Cañón del Colca y Selva Amazónica",
          touristType: "Adventure travelers"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "TouristTrip",
          name: "Tour Cañones y Volcanes",
          description: "6 días, 1000 kms - Volcanes Coropuna y Ampato, Cañones Cotahuasi y Colca",
          touristType: "Adventure travelers"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
