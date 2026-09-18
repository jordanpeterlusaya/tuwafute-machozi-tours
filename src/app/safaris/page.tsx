import type { Metadata } from "next";
import Link from "next/link";
import { MediaCard, QuietLink } from "@/components/ui/MediaCard";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";
import { safaris } from "@/content/safaris";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tanzania Safaris & Kilimanjaro",
  description:
    "Mainland Tanzania journeys arranged from the Zanzibar house: Serengeti, Ngorongoro Crater, Tarangire and Mount Kilimanjaro. Prices on request — not listed in the island excursions guide.",
};

export default function SafarisPage() {
  return (
    <>
      <PageHero
        eyebrow="Tanzania safaris · mainland journeys"
        title="The northern circuit, arranged from Zanzibar."
        copy="Serengeti, Ngorongoro Crater, Tarangire and Kilimanjaro — requested mainland journeys. Prices confirmed with you."
      />

      <section className="border-y border-gold/20 bg-sand/40">
        <Container className="grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Four journeys. Each one priced for your dates.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/55">
              These parks sit on the mainland. A request does not take payment
              or confirm park fees.
            </p>
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center border border-ink/12 px-6 py-3.5 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
          >
            Island tours instead
          </Link>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {safaris.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/safaris/${item.slug}`}
                image={item.image}
                alt={item.name}
                eyebrow={item.region}
                title={item.name}
                summary={item.summary}
                aspect="aspect-[16/10]"
                headingAs="h2"
                sizes="(max-width: 768px) 100vw, 50vw"
              >
                <QuietLink href={`/enquire?interest=${encodeURIComponent(item.name)}`}>
                  Request price
                </QuietLink>
                <QuietLink
                  href={whatsappLink(
                    brand.whatsapp,
                    `Hello ${brand.name} — I would like to request the price and availability for a mainland journey: ${item.name}. I understand this is arranged from Zanzibar and is not listed in the island excursions guide.`,
                  )}
                  external
                >
                  WhatsApp
                </QuietLink>
                <QuietLink href={`/safaris/${item.slug}`}>View journey</QuietLink>
              </MediaCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="max-w-3xl">
          <p className="eyebrow">An honest note</p>
          <span className="quiet-rule mt-6 block" />
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Island first. Mainland by request.
          </h2>
          <p className="mt-6 text-sm leading-7 text-ivory/62">
            Forty percent of tour revenue still supports charity in Zanzibar.
            A Serengeti or Kilimanjaro day is arranged so guests who want the
            northern circuit can travel with the same house.
          </p>
        </Container>
      </Section>
    </>
  );
}
