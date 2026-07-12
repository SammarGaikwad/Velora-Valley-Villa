import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avenorhospitality.com"),
  title: "Velora Valley Villa | Luxury Mountain Sanctuary by Avenor Hospitality",
  description: "Immerse yourself in serenity at Velora Valley Villa. A high-end minimalist 3 BHK family stay amidst the mountains, featuring panoramic Dhom Dam & Elephant Head Point views.",
  keywords: ["Velora Valley Villa", "Avenor Hospitality", "3 BHK Villa Mahabaleshwar", "Luxury Villa Booking", "Mountain View Stay"],
  icons: {
    icon: [
      { url: '/icon.svg?v=2', type: 'image/svg+xml' }
    ],
  },
  openGraph: {
    title: "Velora Valley Villa | Luxury Mountain Sanctuary",
    description: "Experience premium comfort and spectacular mountain vistas. Avenor Hospitality presents an elegant 3 BHK villa with Elephant Head Point and Dhom Dam views.",
    images: [{ url: "/images/Velora Valley Villa Ad1.jpeg", width: 1200, height: 630, alt: "Velora Valley Villa Sunset View" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} antialiased scroll-smooth`}
    >
      <body className="bg-bg-primary text-text-primary min-h-screen font-sans selection:bg-gold/20 selection:text-gold-dark">
        {children}
      </body>
    </html>
  );
}
