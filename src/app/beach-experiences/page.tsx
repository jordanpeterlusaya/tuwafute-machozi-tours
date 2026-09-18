import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
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
        copy="Catamaran, kayak, jet ski and jet car, photography, small celebrations, horse riding, a caves day, beach-club recommendations, and 24-hour transfers. These are Tuwafute Machozi Tours packages. They are not the twenty-eight destinations in the Zanzibar Excursions Guide. Prices on request."
      />

      <section className="border-y border-gold/20 bg-sand/55">
        <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Request a price. WhatsApp Joseph Kitali’s team. Nothing here is a
              published tariff.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/60">
              Beach clubs such as Nanasi and Le Saint Lopez are independent
              venues we recommend and book when they have space. Jet ski and
              jet car depend on sea conditions. Transfers run 24 hours with
              whatever suitable car is available on the island.
            </p>
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center border border-ink/15 px-6 py-3 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
          >
            28 PDF excursions
          </Link>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {beachExperiences.map((item) => (
              <article key={item.slug} className="flex flex-col">
                <Link
                  href={`/beach-experiences/${item.slug}`}
                  className="image-reveal group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                  </div>
                  <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-gold">
                    Beach Experience · price on request
                  </p>
                  <h2 className="mt-2 font-display text-3xl transition-colors group-hover:text-lagoon">
                    {item.name}
                  </h2>
                </Link>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink/62">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/enquire?interest=${encodeURIComponent(item.name)}`}
                    className="inline-flex items-center justify-center border border-ink/15 px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:border-gold"
                  >
                    Request price
                  </Link>
                  <a
                    href={whatsappLink(
                      brand.whatsapp,
                      `Hello ${brand.legalName} — I would like to request the price for the Beach Experience: ${item.name}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:opacity-90"
                  >
                    Book via WhatsApp
                  </a>
                  <Link
                    href={`/beach-experiences/${item.slug}`}
                    className="px-2 py-3 text-[10px] tracking-[0.2em] uppercase text-ink/60 hover:text-gold"
                  >
                    View →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
