import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { itineraries } from "@/content/itineraries";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Journeys" };

export default function ItinerariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Composed days"
        title="Itineraries with room for the unexpected."
        copy="These are starting scores. Every journey is rewritten for tide, season, and the people travelling."
      />
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          {itineraries.map((item) => (
            <Link key={item.slug} href={`/itineraries/${item.slug}`} className="group">
              <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-5 eyebrow">{item.days} days</p>
              <h2 className="mt-2 font-display text-4xl group-hover:text-lagoon">{item.name}</h2>
              <p className="mt-3 text-ink/60">{item.summary}</p>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
