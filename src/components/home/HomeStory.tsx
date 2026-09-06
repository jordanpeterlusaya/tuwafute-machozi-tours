import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";
import { journal } from "@/content/journal";
import { testimonials } from "@/content/testimonials";
import { brand } from "@/content/brand";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal, SplitHeading } from "@/components/motion/Reveal";
import { CinematicVideo } from "@/components/media/CinematicVideo";

const featured = destinations.filter((item) =>
  ["nungwi", "stone-town", "paje", "kizimkazi"].includes(item.slug),
);

export function HomeStory() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Eyebrow>{brand.legalName}</Eyebrow>
              <SplitHeading text="Travel that wipes a tear — that is why we exist." />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-8 text-ink/70">
                Tuwafute Machozi Tours is a Zanzibar house of travel. Guests
                come for the coast, the villages and the reef. The name is the
                promise: when you book a journey with us, you enable charity
                work in Zanzibar town and across the island. Sixty percent of
                revenue is directed to that work.
              </p>
              <div className="mt-8 flex flex-wrap gap-8 text-sm tracking-wide text-ink/55">
                <span>TRAVEL</span>
                <span className="text-gold">•</span>
                <span>ZANZIBAR TOURS</span>
                <span className="text-gold">•</span>
                <span>CHARITY</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[52vh]">
            <CinematicVideo
              src="/media/hero-coast.mp4"
              mobileSrc="/media/hero-coast-mobile.mp4"
              poster="/images/hero-coast.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-16">
            <Eyebrow>Why the name</Eyebrow>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Tuwafute Machozi means let us wipe their tears.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/70">
              The owner wants every guest to know this before they book: a
              safari or island day with Tuwafute Machozi Tours is not only a
              holiday. It is the way the house funds charity in Zanzibar. Your
              booking is the engine. The destination is the island. The
              purpose is people.
            </p>
            <p className="mt-5 max-w-xl text-ivory/60 leading-8">
              60% of revenue goes to charity and community impact. We do not
              sell orphanage tourism. We keep the work dignified, and we keep
              the guest experience honest.
            </p>
            <Button href="/impact" className="mt-8 self-start">
              Read the impact promise
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <Container>
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Destinations</Eyebrow>
              <h2 className="mt-4 font-display text-5xl md:text-6xl">Where the light lives</h2>
            </div>
            <Button href="/destinations" variant="line" className="hidden md:inline-flex">
              All destinations
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <Link href={`/destinations/${item.slug}`} className="image-reveal group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 p-7 text-ivory">
                      <p className="eyebrow">{item.regionLabel}</p>
                      <h3 className="mt-3 font-display text-4xl">{item.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-ivory/75">{item.summary}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Eyebrow>Island films</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-5xl md:text-6xl">
              Original footage from the house
            </h2>
            <Button href="/gallery" variant="ghost">
              Open the gallery
            </Button>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                src: "/media/hero-nungwi.mp4",
                mobile: "/media/hero-nungwi-mobile.mp4",
                poster: "/images/hero-nungwi.jpg",
                title: "Northern shore",
              },
              {
                src: "/media/hero-resort.mp4",
                mobile: "/media/hero-resort-mobile.mp4",
                poster: "/images/hero-resort.jpg",
                title: "Palm coast",
              },
              {
                src: "/media/hero-coast.mp4",
                mobile: "/media/hero-coast-mobile.mp4",
                poster: "/images/hero-coast.jpg",
                title: "Open beach",
              },
            ].map((film) => (
              <figure key={film.title}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <CinematicVideo
                    src={film.src}
                    mobileSrc={film.mobile}
                    poster={film.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-[11px] tracking-[0.24em] uppercase text-gold">
                  {film.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Excursions</Eyebrow>
              <h2 className="mt-4 font-display text-5xl">Each attraction, in its own words</h2>
              <p className="mt-5 text-ink/65 leading-8">
                Twenty-eight named experiences from the Zanzibar excursions
                guide. Every card carries its own photograph and description.
              </p>
              <Button href="/experiences" variant="line" className="mt-8">
                All 28 excursions
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {experiences.slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  href={`/experiences/${item.slug}`}
                  className="overflow-hidden border border-ink/8 bg-sand/50 transition-colors hover:border-gold"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="40vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.24em] uppercase text-gold">{item.regionLabel}</p>
                    <h3 className="mt-2 font-display text-2xl">{item.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/55">{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Editorial itinerary ideas</Eyebrow>
          <h2 className="mt-4 font-display text-5xl">Sample compositions with room to breathe</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {itineraries.map((item) => (
              <Link key={item.slug} href={`/itineraries/${item.slug}`} className="group grid gap-5 md:grid-cols-2">
                <div className="image-reveal relative aspect-[4/5] overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="40vw" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="eyebrow">{item.days} days</p>
                  <h3 className="mt-3 font-display text-4xl group-hover:text-lagoon">{item.name}</h3>
                  <p className="mt-4 text-ink/65 leading-7">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="overflow-hidden">
        <Container>
          <Eyebrow>Guest letters</Eyebrow>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="border-t border-gold/25 pt-8">
                <p className="font-display text-3xl leading-snug text-ivory/90">“{item.quote}”</p>
                <footer className="mt-6 text-sm text-gold">
                  {item.name}
                  <span className="block text-ivory/40">{item.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Journal</Eyebrow>
              <h2 className="mt-4 font-display text-5xl">Field notes</h2>
            </div>
            <Button href="/journal" variant="line">
              All essays
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {journal.slice(0, 3).map((entry) => (
              <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group">
                <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                  <Image src={entry.image} alt={entry.title} fill className="object-cover" sizes="33vw" />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-gold">
                  {entry.date} · {entry.read}
                </p>
                <h3 className="mt-2 font-display text-3xl group-hover:text-lagoon">{entry.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{entry.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark className="text-center">
        <Container>
          <p className="eyebrow">Begin</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl md:text-7xl">
            Book the island. Enable the work.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/60">
            A private proposal, not a package. WhatsApp, a written enquiry, or
            the trip builder — then a person confirms the days.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/enquire">Write to the house</Button>
            <Button href="/experiences" variant="ghost">
              Choose excursions
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
