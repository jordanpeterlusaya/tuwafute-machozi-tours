import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/content/experiences";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Zanzibar excursions across north, east, south, west and central island life.",
};

const categories = ["coast", "marine", "culture", "nature", "adventure"] as const;

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Excursions"
        title="Beyond the resort — ocean, culture, forest, wind."
        copy="A collection drawn from our Zanzibar Excursions & Experiences Guide. Private or shared, always timed to weather, tide and respect."
      />
      {categories.map((category) => {
        const items = experiences.filter((item) => item.category === category);
        return (
          <Section key={category} className="pt-10">
            <Container>
              <p className="eyebrow">{category}</p>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {items.map((item) => (
                  <Link key={item.slug} href={`/experiences/${item.slug}`} className="group">
                    <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
                    </div>
                    <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-gold">
                      {item.duration} · from {formatPrice(item.priceFrom)}
                    </p>
                    <h2 className="mt-2 font-display text-3xl group-hover:text-lagoon">{item.name}</h2>
                    <p className="mt-2 text-sm text-ink/60">{item.region}</p>
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
