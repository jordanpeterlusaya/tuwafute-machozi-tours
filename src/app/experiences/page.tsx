import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
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
        copy="The complete Zanzibar Excursions & Experiences Guide: six northern, seven eastern, six southern, and nine west and central experiences."
      />

      <section className="border-y border-gold/20 bg-sand/55">
        <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Choose excursions now; request current prices and availability
              from a person.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/60">
              The source guide lists no prices, formal durations, inclusion
              lists, or packages. Sending a request does not take payment or
              confirm inventory.
            </p>
          </div>
          <Link
            href="/explorer"
            className="inline-flex items-center justify-center border border-ink/15 px-6 py-3 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
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
            className={regionIndex === 0 ? "pt-14" : "pt-10"}
          >
            <Container>
              <div className="flex items-end justify-between gap-4 border-b border-gold/25 pb-5">
                <div>
                  <p className="eyebrow">Guide region {regionIndex + 1}</p>
                  <h2 className="mt-3 font-display text-4xl md:text-5xl">
                    {region.label}
                  </h2>
                </div>
                <p className="text-sm text-ink/45">
                  {items.length} {items.length === 1 ? "excursion" : "excursions"}
                </p>
              </div>

              <div className="mt-8 grid gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <article key={item.slug} className="flex flex-col">
                    <Link
                      href={`/experiences/${item.slug}`}
                      className="image-reveal group block"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-forest">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                      </div>
                      <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-gold">
                        {item.category} · {item.coordinates.label}
                      </p>
                      <h3 className="mt-2 font-display text-3xl transition-colors group-hover:text-lagoon">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="mt-3 flex-1 text-sm leading-7 text-ink/62">
                      {item.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <AddToTourCartButton slug={item.slug} />
                      <a
                        href={whatsappLink(
                          brand.whatsapp,
                          `Hello ${brand.name} — I would like to book: ${item.name}`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:opacity-90"
                      >
                        Book via WhatsApp
                      </a>
                      <Link
                        href={`/experiences/${item.slug}`}
                        className="px-2 py-3 text-[10px] tracking-[0.2em] uppercase text-ink/60 hover:text-gold"
                      >
                        View tour →
                      </Link>
                    </div>
                  </article>
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
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Travel notes before you request.
            </h2>
          </div>
          <div>
            <ul className="space-y-4 text-sm leading-7 text-ivory/65">
              {guideTravelNotes.map((note) => (
                <li key={note} className="border-t border-ivory/10 pt-4">
                  {note}
                </li>
              ))}
            </ul>
            <noscript>
              <a
                href={whatsappLink(
                  brand.whatsapp,
                  "Hello Tuwafute Machozi — I would like to request prices for Zanzibar excursions.",
                )}
                className="mt-8 inline-flex bg-gold px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-ink"
              >
                Book via WhatsApp
              </a>
            </noscript>
          </div>
        </Container>
      </Section>
    </>
  );
}
