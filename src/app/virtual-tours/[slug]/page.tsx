import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { VirtualTour } from "@/components/virtual/VirtualTour";

const tours: Record<string, { title: string; image: string; copy: string }> = {
  nungwi: {
    title: "Nungwi",
    image: "/images/hero-nungwi.jpg",
    copy: "Turquoise shallows, wooden boats, the northern curve.",
  },
  resort: {
    title: "Palm shore",
    image: "/images/hero-resort.jpg",
    copy: "Makuti, cabanas, and the garden that meets the tide.",
  },
  adventure: {
    title: "East-coast water",
    image: "/images/hero-adventure.jpg",
    copy: "Wind, wake, and the long white beach of the east.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(tours).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: tours[slug]?.title ?? "360°" };
}

export default async function VirtualTourPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours[slug];
  if (!tour) notFound();

  return (
    <>
      <PageHero eyebrow="360°" title={tour.title} copy={tour.copy} />
      <VirtualTour src={tour.image} activeSlug={slug} />
    </>
  );
}
