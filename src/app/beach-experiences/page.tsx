import type { Metadata } from "next";
import Link from "next/link";
import { MediaCard, QuietLink } from "@/components/ui/MediaCard";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { PrivateGuideNote } from "@/components/brand/PrivateGuideNote";
import { brand } from "@/content/brand";
import { beachExperiences } from "@/content/beach-experiences";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Beach Experience",
  description:
    "Catamaran, kayak, jet ski and jet car, drone photography, proposals, horse riding, caves, beach-club recommendations and 24-hour transfers. Prices on request — not part of the 28 PDF excursions.",
};

export default function BeachExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Beach Experience · nine house packages"
        title="Water, caves, clubs and cars — arranged, not catalogued."
        copy="Nine house packages. Not the twenty-eight PDF excursions. Prices on request."
      />

      <section className="border-y border-gold/20 bg-sand/40">
        <Container className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Request a price. Nothing here is a published tariff.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/55">
              Beach clubs such as Nanasi and Le Saint Lopez are independent
              venues we recommend when they have space. Transfers run 24 hours.
            </p>
            <PrivateGuideNote className="mt-2 text-sm leading-6" />
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center border border-ink/12 px-6 py-3.5 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
          >
            28 island tours
          </Link>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {beachExperiences.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/beach-experiences/${item.slug}`}
                image={item.image}
                alt={item.imageAlt}
                eyebrow="Beach Experience"
                title={item.name}
                summary={item.summary}
                aspect="aspect-[4/5]"
                headingAs="h2"
              >
                <QuietLink href={`/enquire?interest=${encodeURIComponent(item.name)}`}>
                  Request price
                </QuietLink>
                <QuietLink
                  href={whatsappLink(
                    brand.whatsapp,
                    `Hello ${brand.legalName} — I would like to request the price for the Beach Experience: ${item.name}.`,
                  )}
                  external
                >
                  WhatsApp
                </QuietLink>
                <QuietLink href={`/beach-experiences/${item.slug}`}>View</QuietLink>
              </MediaCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
