import Image from "next/image";
import Link from "next/link";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";
import { brand } from "@/content/brand";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const featured = destinations.filter((item) =>
  ["nungwi", "stone-town", "paje", "kizimkazi"].includes(item.slug),
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

export function HomeStory() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Zanzibar tours</Eyebrow>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Twenty-eight excursions across the island.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
              North-coast beaches, east-coast lagoons, Kizimkazi boat days,
              Stone Town, spice farms, Jozani Forest and sunset dhows. Each
              tour has its own photograph, description and booking request.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {featuredTours.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <article className="flex h-full flex-col border border-ink/8 bg-sand/40">
                  <Link
                    href={`/experiences/${item.slug}`}
                    className="image-reveal group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-forest">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-5 pt-5">
                      <p className="text-[10px] tracking-[0.22em] uppercase text-gold">
                        {item.regionLabel}
                      </p>
                      <h3 className="mt-2 font-display text-2xl transition-colors group-hover:text-lagoon">
                        {item.name}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/60">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                  <div className="mt-auto flex flex-wrap items-center gap-3 px-5 pb-5 pt-5">
                    <AddToTourCartButton slug={item.slug} compact />
                    <Link
                      href={`/experiences/${item.slug}`}
                      className="text-[10px] tracking-[0.2em] uppercase text-ink/55 hover:text-gold"
                    >
                      View tour →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/experiences" variant="line">
              See all 28 tours
            </Button>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Destinations</Eyebrow>
              <h2 className="mt-4 font-display text-5xl">Where we take you</h2>
            </div>
            <Button href="/destinations" variant="ghost" className="hidden md:inline-flex">
              All coasts
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <Link
                key={item.slug}
                href={`/destinations/${item.slug}`}
                className="image-reveal group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-forest">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-5 text-ivory">
                    <p className="eyebrow">{item.regionLabel}</p>
                    <h3 className="mt-2 font-display text-3xl">{item.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Sample journeys</Eyebrow>
          <h2 className="mt-4 font-display text-5xl">A few ways to see the island</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {itineraries.map((item) => (
              <article key={item.slug} className="flex flex-col">
                <Link href={`/itineraries/${item.slug}`} className="group">
                  <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <p className="mt-5 eyebrow">{item.days} days</p>
                  <h3 className="mt-2 font-display text-3xl group-hover:text-lagoon">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{item.summary}</p>
                </Link>
                <Button href={`/itineraries/${item.slug}`} variant="line" className="mt-6 self-start">
                  View journey
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="text-center">
        <Container>
          <p className="eyebrow">{brand.legalName}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl md:text-6xl">
            Book a tour. Enable the work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory/65">
            Sixty percent of revenue supports charity in Zanzibar — that is
            why we are called Tuwafute Machozi Tours.
          </p>
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
