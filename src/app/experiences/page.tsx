import type { Metadata } from "next";
import Link from "next/link";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { MediaCard, QuietLink } from "@/components/ui/MediaCard";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { PrivateGuideNote } from "@/components/brand/PrivateGuideNote";
import { brand } from "@/content/brand";
import {
  experienceRegions,
  experiences,
  guideTravelNotes,
} from "@/content/experiences";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zanzibar Tours & Excursions",
  description:
    "Browse all 28 tours and excursions from the Zanzibar Excursions & Experiences Guide.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Zanzibar tours · 28 excursions"
        title="The island, from north coast to forest."
        copy="Six northern, seven eastern, six southern, and nine west and central experiences."
      />

      <section className="border-y border-gold/20 bg-sand/40">
        <Container className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Request current prices from a person.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/55">
              The source guide lists no prices. A request does not take payment.
            </p>
            <PrivateGuideNote className="mt-2 text-sm leading-6" />
          </div>
          <Link
            href="/explorer"
            className="inline-flex items-center justify-center border border-ink/12 px-6 py-3.5 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
          >
            Explore the map
          </Link>
        </Container>
      </section>

      {experienceRegions.map((region, regionIndex) => {
        const items = experiences.filter((item) => item.region === region.id);
        return (
          <Section
            key={region.id}
            className={regionIndex === 0 ? "pt-16" : "pt-8"}
          >
            <Container>
              <div className="flex items-end justify-between gap-4 border-b border-gold/25 pb-5">
                <div>
                  <p className="eyebrow">Guide region {regionIndex + 1}</p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl">
                    {region.label}
                  </h2>
                </div>
                <p className="text-sm text-ink/40">
                  {items.length} {items.length === 1 ? "excursion" : "excursions"}
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <MediaCard
                    key={item.slug}
                    href={`/experiences/${item.slug}`}
                    image={item.image}
                    alt={item.name}
                    eyebrow={`${item.category} · ${item.coordinates.label}`}
                    title={item.name}
                    summary={item.summary}
                    headingAs="h3"
                  >
                    <AddToTourCartButton slug={item.slug} compact />
                    <QuietLink
                      href={whatsappLink(
                        brand.whatsapp,
                        `Hello ${brand.name} — I would like to book: ${item.name}`,
                      )}
                      external
                    >
                      WhatsApp
                    </QuietLink>
                    <QuietLink href={`/experiences/${item.slug}`}>View tour</QuietLink>
                  </MediaCard>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <Section dark>
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">From the guide</p>
            <span className="quiet-rule mt-6 block" />
            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Travel notes before you request.
            </h2>
          </div>
          <div>
            <ul className="space-y-4 text-sm leading-7 text-ivory/62">
              {guideTravelNotes.map((note) => (
                <li key={note} className="border-t border-ivory/10 pt-4">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
