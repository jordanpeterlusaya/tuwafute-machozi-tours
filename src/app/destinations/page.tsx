import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations, regions } from "@/content/destinations";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore north, east, south, west and central Zanzibar.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="The map"
        title="One island. Many ways to experience it."
        copy="From Nungwi’s northern light to Stone Town’s living history — Zanzibar composed as chapters, not checklists."
      />
      {regions.map((region) => {
        const items = destinations.filter((item) => item.region === region.id);
        if (!items.length) return null;
        return (
          <Section key={region.id} className="pt-16">
            <Container>
              <p className="eyebrow">{region.label}</p>
              <p className="mt-3 max-w-xl text-ink/60">{region.copy}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {items.map((item) => (
                  <Link key={item.slug} href={`/destinations/${item.slug}`} className="image-reveal group">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                      <div className="absolute bottom-0 p-6 text-ivory">
                        <h2 className="font-display text-3xl">{item.name}</h2>
                        <p className="mt-2 text-sm text-ivory/70">{item.eyebrow}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
