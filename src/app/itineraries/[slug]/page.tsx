import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItinerary, itineraries } from "@/content/itineraries";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return itineraries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItinerary(slug);
  return { title: item?.name, description: item?.summary };
}

export default async function ItineraryPage({ params }: Props) {
  const { slug } = await params;
  const item = getItinerary(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[70vh] bg-ink text-ivory">
        <Image src={item.image} alt={item.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>Editorial sample · {item.days}-day sequence</Eyebrow>
          <h1 className="mt-3 font-display text-6xl md:text-8xl">{item.name}</h1>
        </div>
      </section>
      <Section>
        <Container>
          <p className="max-w-3xl font-display text-3xl">{item.summary}</p>
          <p className="mt-4 text-ink/50">{item.who}.</p>
          <p className="mt-6 max-w-3xl border-l border-gold pl-5 text-sm leading-7 text-ink/60">
            This composition is editorial and was assembled from individual
            excursions in the supplied guide. It is not an official PDF
            package; request each excursion’s current price and availability.
          </p>
          <ol className="mt-14 space-y-8">
            {item.daysPlan.map((day, index) => (
              <li key={day.title} className="grid gap-4 border-t border-gold/25 pt-6 md:grid-cols-[140px_1fr]">
                <span className="text-gold">Day {index + 1}</span>
                <div>
                  <Link
                    href={`/experiences/${day.experienceSlug}`}
                    className="font-display text-3xl hover:text-lagoon"
                  >
                    {day.title}
                  </Link>
                  <p className="mt-2 text-ink/65">{day.copy}</p>
                  <AddToTourCartButton
                    slug={day.experienceSlug}
                    compact
                    className="mt-4"
                  />
                </div>
              </li>
            ))}
          </ol>
          <Button href="/trip-builder" className="mt-14">
            Adapt this journey
          </Button>
        </Container>
      </Section>
    </>
  );
}
