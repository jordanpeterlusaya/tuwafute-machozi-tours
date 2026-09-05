import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";
import { journal } from "@/content/journal";
import { testimonials } from "@/content/testimonials";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal, SplitHeading } from "@/components/motion/Reveal";
import { ScrollStory } from "@/components/home/ScrollStory";

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
              <Eyebrow>The house</Eyebrow>
              <SplitHeading text="Travel that wipes a tear, not as charity — as elegance." />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-8 text-ink/70">
                Tuwafute Machozi is a Zanzibar-born atelier for guests who want to know the island,
                not simply see it. We compose private journeys across coast, culture and community —
                with the restraint of a great host and the heart of a neighbour.
              </p>
              <div className="mt-8 flex flex-wrap gap-8 text-sm tracking-wide text-ink/55">
                <span>TRAVEL</span>
                <span className="text-gold">•</span>
                <span>SAFARIS</span>
                <span className="text-gold">•</span>
                <span>SOCIAL IMPACT</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ScrollStory />

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
          <Eyebrow>Marine journeys</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-5xl md:text-6xl">
              The Indian Ocean, experienced with care
            </h2>
            <Button href="/experiences?category=marine" variant="ghost">
              View ocean experiences
            </Button>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {experiences
              .filter((experience) => experience.category === "marine")
              .slice(0, 3)
              .map((experience) => (
              <Link
                key={experience.slug}
                href={`/experiences/${experience.slug}`}
                className="group"
              >
                <div className="image-reveal relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.name}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.24em] uppercase text-gold">
                  {experience.region} · {experience.duration}
                </p>
                <h3 className="mt-2 font-display text-3xl group-hover:text-gold">
                  {experience.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ivory/60">{experience.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Experiences</Eyebrow>
              <h2 className="mt-4 font-display text-5xl">The island, beyond the resort</h2>
              <p className="mt-5 text-ink/65 leading-8">
                Drawn from our Zanzibar excursions guide — north, east, south, west and the forested centre.
              </p>
              <Button href="/experiences" variant="line" className="mt-8">
                All experiences
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {experiences.slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  href={`/experiences/${item.slug}`}
                  className="border border-ink/8 bg-sand/50 p-6 transition-colors hover:border-gold"
                >
                  <p className="text-[10px] tracking-[0.24em] uppercase text-gold">{item.region}</p>
                  <h3 className="mt-3 font-display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-ink/55">{item.duration}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="absolute inset-0">
          <Image src="/images/hero-adventure.jpg" alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="relative grid min-h-[70vh] items-center px-5 py-24 md:px-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Give back</Eyebrow>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Every journey leaves the island kinder.
            </h2>
            <p className="mt-6 max-w-lg text-ivory/70 leading-8">
              A portion of every booking supports education, marine conservation and family welfare
              in Zanzibar. Guests may visit — as guests, never as spectators.
            </p>
            <Button href="/impact" className="mt-8">
              The impact chapter
            </Button>
          </Reveal>
        </div>
      </section>

      <Section>
        <Container>
          <Eyebrow>Journeys</Eyebrow>
          <h2 className="mt-4 font-display text-5xl">Itineraries with room to breathe</h2>
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
            Tell us how you wish to arrive.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/60">
            A private proposal, not a package. WhatsApp, a written enquiry, or the trip builder.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/enquire">Write to the house</Button>
            <Button href="/planner" variant="ghost">
              Ask the AI planner
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
