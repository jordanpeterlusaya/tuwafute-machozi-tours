import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Italiana, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { brand } from "@/content/brand";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const accent = Italiana({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuwafutemachozi.com"),
  title: {
    default: `${brand.name} · ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Private Zanzibar excursions, cultural journeys and social impact. Discover. Experience. Give Back.",
  openGraph: {
    title: `${brand.name} · ${brand.tagline}`,
    description:
      "A cinematic Zanzibar travel house for coast, culture, nature and community.",
    images: ["/images/hero-nungwi.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline,
    images: ["/images/hero-nungwi.jpg"],
  },
  icons: { icon: "/favicon.svg" },
  keywords: [
    "Zanzibar tours",
    "Tuwafute Machozi",
    "luxury Zanzibar travel",
    "Stone Town",
    "Zanzibar excursions",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <Providers>
          <a
            href="#main-content"
            className="fixed left-4 top-3 z-[100] -translate-y-20 bg-gold px-4 py-2 text-sm text-ink transition-transform focus:translate-y-0"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
