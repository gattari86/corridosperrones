import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { FAQ_ITEMS } from "./lib/constants";
import GoogleAnalytics from "./components/GoogleAnalytics";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://www.corridosperrones.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Corridos Personalizados | Tu Historia en Corrido Tradicional",
  description:
    "Corrido personalizado con tu historia. Entrega el mismo dia por WhatsApp. Primero apruebas la letra. Mas de 6,500 canciones vendidas desde 2024.",
  keywords:
    "corridos personalizados, corrido personalizado, corrido con mi nombre, regalo corrido, corrido para mi papa, corrido para mi esposa, corrido para negocio",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Corridos Personalizados | Tu Historia en Corrido Tradicional",
    description:
      "Corrido personalizado con tu historia. Entrega el mismo dia por WhatsApp. Primero apruebas la letra. Mas de 6,500 canciones vendidas desde 2024.",
    type: "website",
    url: SITE_URL,
    locale: "es_MX",
    siteName: "Corridos Perrones",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Corridos Personalizados - Tu historia merece su propio corrido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corridos Personalizados | Tu Historia en Corrido Tradicional",
    description:
      "Corrido personalizado con tu historia. Entrega el mismo dia por WhatsApp. Solo $49.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "5wsCRISkxWibNS8a64C8AFGBgpaqizRY3wG7VZuy79g",
  },
};

// --- JSON-LD Structured Data ---

const organizationSchema = {
  "@type": "Organization",
  name: "Corridos Perrones",
  url: SITE_URL,
  description:
    "Corridos tradicionales personalizados con tu historia, entregados por WhatsApp.",
};

const serviceSchema = {
  "@type": "Service",
  name: "Corridos personalizados",
  description:
    "Corridos tradicionales personalizados con tu historia, entrega por WhatsApp el mismo dia.",
  provider: { "@type": "Organization", name: "Corridos Perrones" },
  areaServed: { "@type": "Country", name: "United States" },
  availableLanguage: { "@type": "Language", name: "Spanish" },
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const webSiteSchema = {
  "@type": "WebSite",
  name: "Corridos Perrones",
  url: SITE_URL,
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, serviceSchema, webSiteSchema, faqSchema],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
