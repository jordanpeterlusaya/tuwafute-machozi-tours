import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        copy="Serengeti, Ngorongoro Crater, Tarangire and Kilimanjaro — requested mainland journeys, not items from the Zanzibar Excursions Guide. Prices, nights and routes are confirmed with you."
      />

      <section className="border-y border-gold/20 bg-sand/55">
        <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">
              Four journeys. Each one priced for your dates.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/60">
              The Zanzibar house remains the centre of the work. These parks
              sit on the mainland. A request here does not take payment or
              confirm park fees, flights or lodge inventory.
            </p>
          </div>
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center border border-ink/15 px-6 py-3 text-[10px] tracking-[0.22em] uppercase hover:border-gold"
          >
            Island tours instead
          </Link>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
            {safaris.map((item) => (
              <article key={item.slug} className="flex flex-col">
                <Link
                  href={`/safaris/${item.slug}`}
                  className="image-reveal group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                  </div>
                  <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-gold">
                    {item.region}
                  </p>
                  <h2 className="mt-2 font-display text-4xl transition-colors group-hover:text-lagoon">
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
                      `Hello ${brand.name} — I would like to request the price and availability for a mainland journey: ${item.name}. I understand this is arranged from Zanzibar and is not listed in the island excursions guide.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:opacity-90"
                  >
                    Book via WhatsApp
                  </a>
                  <Link
                    href={`/safaris/${item.slug}`}
                    className="px-2 py-3 text-[10px] tracking-[0.2em] uppercase text-ink/60 hover:text-gold"
                  >
                    View journey →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="max-w-3xl">
          <p className="eyebrow">An honest note</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Island first. Mainland by request.
          </h2>
          <p className="mt-6 text-sm leading-7 text-ivory/65">
            Sixty percent of tour revenue still supports charity in Zanzibar.
            A Serengeti or Kilimanjaro day is arranged so guests who want the
            northern circuit can travel with the same house — without mixing
            these parks into the twenty-eight island excursions.
          </p>
        </Container>
      </Section>
    </>
  );
}
