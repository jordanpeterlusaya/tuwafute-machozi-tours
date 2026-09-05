import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { VirtualTour } from "@/components/virtual/VirtualTour";
import { coastFilms, getCoastFilm } from "@/content/media";

type Props = { params: Promise<{ slug: string }> };

const legacyTourSlugs: Record<string, string> = {
  nungwi: "sandbar",
  resort: "palm-shore",
  adventure: "beach-canopy",
};

export function generateStaticParams() {
  return [
    ...coastFilms.map((film) => ({ slug: film.slug })),
    ...Object.keys(legacyTourSlugs).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = legacyTourSlugs[slug] ?? slug;
  return { title: getCoastFilm(canonicalSlug)?.title ?? "Immersive Coast View" };
}

export default async function VirtualTourPage({ params }: Props) {
  const { slug } = await params;
  const canonicalSlug = legacyTourSlugs[slug] ?? slug;
  if (canonicalSlug !== slug) redirect(`/virtual-tours/${canonicalSlug}`);

  const film = getCoastFilm(slug);
  if (!film) notFound();

  return (
    <>
      <PageHero eyebrow="Spatial view" title={film.title} copy={film.copy} />
      <VirtualTour src={film.poster} activeSlug={slug} />
    </>
  );
}
