import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingDock from "@/components/layout/FloatingDock";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dr. Himanshu Hospital | Oral & Maxillofacial Reconstruction & Multispecialty Care - Etah",
  description:
    "Tertiary-grade maxillofacial reconstructive surgery, Class-100 HEPA laminar airflow modular operation theatres, and 24x7 intensivist-led ICU care in Aruna Nagar, Etah.",
  keywords: [
    "Dr. Himanshu Hospital",
    "Oral and Maxillofacial Surgery Etah",
    "Maxillofacial Surgeon Etah",
    "Hospital in Etah",
    "Ayushman hospital Etah",
    "Emergency trauma hospital Etah",
    "Modular OT Etah",
    "ICU Etah",
  ],
  openGraph: {
    title: "Dr. Himanshu Hospital | Oral & Maxillofacial Reconstruction & Multispecialty Care - Etah",
    description:
      "Dr. Himanshu Hospital delivers tertiary-grade maxillofacial reconstructive surgery, Class-100 HEPA laminar airflow modular operation theatres, and 24x7 intensivist-led ICU care in Aruna Nagar, Etah.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-brand-navy antialiased selection:bg-brand-teal selection:text-white pb-16 md:pb-0">
        <FloatingDock />
        <MobileBottomBar />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
