import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { coastFilms } from "@/content/media";

export const metadata: Metadata = { title: "Immersive Coast Views" };

export default function VirtualToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Look around"
        title="Framed hours from the island’s own light."
        copy="Step inside stills drawn from our original coast footage. Move across the frame, then come in person."
      />
      <Section>
        <Container className="grid gap-8 md:grid-cols-3">
          {coastFilms.map((film) => (
            <Link key={film.slug} href={`/virtual-tours/${film.slug}`} className="group">
              <div className="image-reveal relative aspect-[3/4] overflow-hidden">
                <Image
                  src={film.poster}
                  alt={film.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
              <h2 className="mt-4 font-display text-3xl group-hover:text-lagoon">
                {film.title}
              </h2>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
