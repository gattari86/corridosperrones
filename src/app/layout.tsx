import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Corridos Personalizados por WhatsApp | Tu Historia, Tu Corrido",
  description:
    "Tu historia merece su propio corrido. Letra personalizada, produccion profesional, entrega el mismo dia por WhatsApp. Solo $49. Mas de 6,500 corridos vendidos.",
  keywords:
    "corridos personalizados, corrido personalizado, corrido con mi nombre, regalo corrido, corrido para mi papa, corrido para mi esposa, corrido para negocio",
  openGraph: {
    title: "Tu Historia Merece Su Propio Corrido",
    description:
      "Corridos personalizados por WhatsApp. Letra a tu medida, produccion profesional, entrega el mismo dia. Solo $49.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
