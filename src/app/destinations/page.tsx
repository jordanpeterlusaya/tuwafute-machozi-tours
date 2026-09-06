import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations, regions } from "@/content/destinations";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "All 28 destinations from the Zanzibar Excursions & Experiences Guide — north, east, south, west and central.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Zanzibar Excursions Guide · 28 destinations"
        title="Every place named in the guide."
        copy="North, east, south, west and central Zanzibar — the complete list, nothing added."
      />
      {regions.map((region) => {
        const items = destinations.filter((item) => item.region === region.id);
        if (!items.length) return null;
        return (
          <Section key={region.id} className="pt-16">
            <Container>
              <p className="eyebrow">{region.label}</p>
              <p className="mt-3 max-w-xl text-ink/60">{region.copy}</p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <article key={item.slug} className="flex flex-col">
                    <Link href={`/destinations/${item.slug}`} className="image-reveal group">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                        <div className="absolute bottom-0 p-6 text-ivory">
                          <h2 className="font-display text-3xl">{item.name}</h2>
                          <p className="mt-2 line-clamp-2 text-sm text-ivory/70">{item.summary}</p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`/experiences/${item.slug}`}
                      className="mt-4 self-start text-[10px] tracking-[0.2em] uppercase text-gold hover:text-ink"
                    >
                      Book this tour →
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
