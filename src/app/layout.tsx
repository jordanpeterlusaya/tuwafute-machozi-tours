import type { Metadata } from "next";
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
    "Luxury Zanzibar and Tanzania journeys — travel, safaris and social impact. Discover. Experience. Give Back.",
  openGraph: {
    title: `${brand.name} · ${brand.tagline}`,
    description:
      "A cinematic house of travel for Zanzibar and the Tanzanian wilderness.",
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
    "Tanzania safari",
    "Tuwafute Machozi",
    "luxury travel Africa",
    "Stone Town",
    "Serengeti",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ivory font-sans text-ink">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
