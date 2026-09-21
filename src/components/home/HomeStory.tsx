import Image from "next/image";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { MediaCard, QuietLink } from "@/components/ui/MediaCard";
import { beachExperiences } from "@/content/beach-experiences";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { safaris } from "@/content/safaris";
import { PrivateGuideNote } from "@/components/brand/PrivateGuideNote";
import { brand } from "@/content/brand";
import { founder, foundation } from "@/content/founder";
import { stays } from "@/content/stays";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappLink } from "@/lib/utils";

const featured = destinations.filter((item) =>
  ["paje-beach", "kizimkazi-dolphin", "kendwa-sunset", "jambiani-village"].includes(
    item.slug,
  ),
);

const featuredTours = [
  "nungwi-beach",
  "mnemba",
  "the-rock",
  "stone-town",
  "spice-farm",
  "prison-island",
  "jozani",
  "sunset-dhow",
]
  .map((slug) => experiences.find((item) => item.slug === slug))
  .filter((item): item is (typeof experiences)[number] => Boolean(item));

function SectionHead({
  eyebrow,
  title,
  summary,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  href: string;
  action: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-8">
      <div className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <span className="quiet-rule mt-5 block" />
        <h2 className="mt-5 font-display text-4xl leading-[0.95] md:text-5xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-ink/55">{summary}</p>
      </div>
      <Button href={href} variant="line">
        {action}
      </Button>
    </div>
  );
}

export function HomeStory() {
  return (
    <>
      <Section>
        <Container>
          <SectionHead
            eyebrow="Zanzibar tours"
            title="Twenty-eight island tours."
            summary="Beaches, Stone Town, spice and dhow — each with its own photograph."
            href="/experiences"
            action="All 28 tours"
          />
          <PrivateGuideNote className="mt-5 max-w-xl text-sm leading-7" />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredTours.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <MediaCard
                  href={`/experiences/${item.slug}`}
                  image={item.image}
                  alt={item.name}
                  eyebrow={item.regionLabel}
                  title={item.name}
                  summary={item.summary}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                >
                  <AddToTourCartButton slug={item.slug} compact />
                  <QuietLink href={`/experiences/${item.slug}`}>View tour</QuietLink>
                </MediaCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHead
            eyebrow="Beach Experience"
            title="Nine packages on the water."
            summary="Catamaran to caves. Price on request."
            href="/beach-experiences"
            action="All beach packages"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beachExperiences.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/beach-experiences/${item.slug}`}
                image={item.image}
                alt={item.imageAlt}
                eyebrow="Beach Experience"
                title={item.name}
                summary={item.summary}
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
              </MediaCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHead
            eyebrow="Tanzania safaris"
            title="Mainland by request."
            summary="Serengeti, Ngorongoro, Tarangire, Kilimanjaro. Price on request."
            href="/safaris"
            action="All safaris"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {safaris.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/safaris/${item.slug}`}
                image={item.image}
                alt={item.name}
                eyebrow={item.region}
                title={item.name}
                summary={item.summary}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              >
                <QuietLink
                  href={whatsappLink(
                    brand.whatsapp,
                    `Hello ${brand.name} — I would like to request the price for: ${item.name}.`,
                  )}
                  external
                >
                  Request price
                </QuietLink>
              </MediaCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHead
            eyebrow="Stays"
            title="2-star to 5-star hotels."
            summary="Four bands, each with a real island example. Booked on request."
            href="/stays"
            action="All stays"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stays.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/stays/${item.slug}`}
                image={item.image}
                alt={item.name}
                eyebrow={item.kind}
                title={item.name}
                summary={item.summary}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              >
                <QuietLink href={`/stays/${item.slug}`}>View stay</QuietLink>
              </MediaCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Destinations</Eyebrow>
              <span className="quiet-rule mt-5 block" />
              <h2 className="mt-5 font-display text-4xl md:text-5xl">Where we take you</h2>
            </div>
            <Button href="/destinations" variant="line" className="hidden md:inline-flex">
              All coasts
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <MediaCard
                key={item.slug}
                href={`/destinations/${item.slug}`}
                image={item.image}
                alt={item.name}
                eyebrow={item.regionLabel}
                title={item.name}
                aspect="aspect-[3/4]"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[3/4] overflow-hidden bg-forest md:aspect-[4/5]">
            <Image
              src={founder.portrait}
              alt={founder.portraitAlt}
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <Eyebrow>The founder</Eyebrow>
            <span className="quiet-rule mt-5 block" />
            <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
              {founder.name}
            </h2>
            <p className="mt-4 text-[11px] tracking-[0.28em] uppercase text-gold">
              {founder.role}
            </p>
            <p className="mt-8 max-w-xl font-display text-2xl leading-snug md:text-3xl">
              Travel funds the work that wipes tears.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-ink/62">
              Forty percent of tour revenue goes to charity in Zanzibar. Joseph
              Kitali started the house so guests fund the work — about{" "}
              {foundation.membersApprox} members now.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/about">Meet Joseph Kitali</Button>
              <Button href="/impact" variant="line">
                The foundation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark className="text-center">
        <Container>
          <p className="eyebrow">{brand.legalName}</p>
          <span className="quiet-rule mx-auto mt-6" />
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl md:text-6xl">
            Book a tour. Enable the work.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/experiences">Choose a tour</Button>
            <Button href="/impact" variant="ghost">
              Our impact
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
