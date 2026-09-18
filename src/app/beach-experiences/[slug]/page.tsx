import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";
import {
  beachExperiences,
  getBeachExperience,
} from "@/content/beach-experiences";
import { whatsappLink } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return beachExperiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getBeachExperience(slug);
  return {
    title: item?.name ?? "Beach Experience",
    description: item?.summary,
  };
}

export default async function BeachExperiencePage({ params }: Props) {
  const { slug } = await params;
  const item = getBeachExperience(slug);
  if (!item) notFound();

  const directMessage = [
    `Hello ${brand.legalName} — I would like to request the price and availability for:`,
    `Beach Experience: ${item.name}`,
    "",
    "I understand this is a booking request, prices are on request, and it remains pending human confirmation.",
  ].join("\n");

  return (
    <>
      <section className="relative min-h-[70vh] bg-ink text-ivory">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/20" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-5 pb-14 md:px-16">
          <Eyebrow>Beach Experience</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            {item.name}
          </h1>
          <p className="mt-5 text-[10px] tracking-[0.2em] uppercase text-ivory/55">
            Price on request · not one of the 28 PDF excursions
          </p>
        </div>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article>
            <p className="eyebrow">{brand.legalName}</p>
            <p className="mt-5 max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              {item.summary}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-8 text-ink/70">
              {item.details}
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-ink/65">
              {item.notes.map((line) => (
                <li key={line} className="border-t border-gold/25 pt-3">
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="/beach-experiences"
              className="mt-10 inline-flex text-[10px] tracking-[0.22em] uppercase text-gold"
            >
              ← All Beach Experience packages
            </Link>
          </article>

          <aside className="self-start border border-gold/25 bg-sand/45 p-7 md:p-8">
            <p className="eyebrow">Request this package</p>
            <h2 className="mt-3 font-display text-3xl">Plan with a person.</h2>
            <p className="mt-3 text-sm leading-7 text-ink/60">
              WhatsApp {brand.phoneDisplay}, or send a price request. No
              payment is taken here. Founder: Joseph Kitali.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                href={`/enquire?interest=${encodeURIComponent(item.name)}`}
                className="inline-flex w-full items-center justify-center border border-ink/15 px-6 py-3 text-[10px] tracking-[0.2em] uppercase hover:border-gold"
              >
                Request price
              </Link>
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
          </aside>
        </Container>
      </Section>
    </>
  );
}
