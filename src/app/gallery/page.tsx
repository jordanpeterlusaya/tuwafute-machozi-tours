import type { Metadata } from "next";
import Image from "next/image";
import { CinematicVideo } from "@/components/media/CinematicVideo";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { coastFilms } from "@/content/media";

export const metadata: Metadata = { title: "Gallery" };

const frames = [
  {
    src: "/images/hero-nungwi.jpg",
    alt: "Aerial view of turquoise Zanzibar shallows",
    caption: "Zanzibar shallows · location unrecorded",
  },
  { src: "/images/nungwi-boats.jpg", alt: "Traditional boats along the coast", caption: "Dhows at rest" },
  { src: "/images/hero-resort.jpg", alt: "Palm-lined Zanzibar coast", caption: "Palm and tide" },
  { src: "/images/resort-palms.jpg", alt: "Resort palms", caption: "The garden shore" },
  { src: "/images/hero-adventure.jpg", alt: "Jet ski on turquoise water", caption: "Ocean motion" },
  { src: "/images/jetski.jpg", alt: "Ocean adventure", caption: "Salt and speed" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Light"
        title="A private reel from the island."
        copy="Original Zanzibar footage from the house. More island chapters as the seasons turn."
      />
      <Section dark>
        <Container>
          <Eyebrow>Coast films</Eyebrow>
          <p className="mt-5 max-w-2xl font-display text-3xl leading-snug text-ivory/85 md:text-4xl">
            Three original aerial studies of sand, palms, and Indian Ocean light.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {coastFilms.map((film) => (
              <figure key={film.slug}>
                <div className="image-reveal relative aspect-[9/16] overflow-hidden bg-ink">
                  <CinematicVideo
                    src={film.video}
                    mobileSrc={film.mobileVideo}
                    poster={film.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                    ariaLabel={film.title}
                    posterSizes="(max-width: 767px) 100vw, 33vw"
                    preloadPoster={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                </div>
                <figcaption className="mt-4">
                  <h2 className="font-display text-2xl">{film.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ivory/50">{film.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {frames.map((frame) => (
            <figure key={frame.src} className="image-reveal mb-5 break-inside-avoid">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 text-sm tracking-wide text-ink/50">{frame.caption}</figcaption>
            </figure>
          ))}
        </Container>
      </Section>
    </>
  );
}
