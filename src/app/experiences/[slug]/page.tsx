import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";
import { experiences, getExperience } from "@/content/experiences";
import { whatsappLink } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperience(slug);
  return {
    title: item?.name ?? "Zanzibar excursion",
    description: item?.summary,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) notFound();

  const directMessage = [
    `Hello ${brand.name} — I would like to request the price and availability for:`,
    item.name,
    "",
    "I understand this is a booking request and is pending human confirmation.",
  ].join("\n");
  const mapHref = `/explorer`;

  return (
    <>
      <section className="relative min-h-[70vh] bg-ink text-ivory">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/20" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-5 pb-14 md:px-16">
          <Eyebrow>{item.regionLabel}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            {item.name}
          </h1>
          <p className="mt-5 text-[10px] tracking-[0.2em] uppercase text-ivory/55">
            Excursion {experiences.findIndex((entry) => entry.slug === item.slug) + 1} of{" "}
            {experiences.length}
          </p>
        </div>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article>
            <p className="eyebrow">From the Zanzibar excursions guide</p>
            <p className="mt-5 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              {item.summary}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-ink/70">
              {item.details}
            </p>
            <div className="mt-9 border-l border-gold pl-5 text-sm leading-7 text-ink/60">
              The guide provides this description without a listed price,
              formal duration, inclusion list, or package guarantee. Ask for
              current details for your preferred date and party.
            </div>
            <Link
              href="/experiences"
              className="mt-10 inline-flex text-[10px] tracking-[0.22em] uppercase text-gold"
            >
              ← All 28 excursions
            </Link>
          </article>

          <aside className="self-start border border-gold/25 bg-sand/45 p-7 md:p-8">
            <p className="eyebrow">Request this excursion</p>
            <h2 className="mt-3 font-display text-3xl">Plan with a person.</h2>
            <p className="mt-3 text-sm leading-7 text-ink/60">
              Add it to a multi-excursion request, or begin a direct WhatsApp
              conversation. No payment is taken here.
            </p>
            <div className="mt-6 grid gap-3">
              <AddToTourCartButton slug={item.slug} className="w-full" />
              <a
                href={whatsappLink(brand.whatsapp, directMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center bg-[#25D366] px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-white"
              >
                Book via WhatsApp
              </a>
            </div>
            <p className="mt-5 text-xs leading-6 text-ink/50">
              Booking requests remain pending until availability, price, and
              arrangements are confirmed by the team.
            </p>

            <div className="mt-7 border-t border-gold/20 pt-6">
              <p className="text-[9px] tracking-[0.2em] uppercase text-ink/45">
                Geographic reference
              </p>
              <p className="mt-2 text-sm text-ink/70">
                {item.coordinates.label}
              </p>
              <a href={mapHref} className="mt-2 inline-flex text-xs text-gold">
                See this place on the island map →
              </a>
              {(item.coordinates.precision === "area" ||
                item.coordinates.precision === "departure") && (
                <p className="mt-2 text-xs leading-5 text-ink/45">
                  This pin marks a representative{" "}
                  {item.coordinates.precision === "departure"
                    ? "departure"
                    : "area"}{" "}
                  point, not a fixed marine route.
                </p>
              )}
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
