import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand";
import { founder, foundation } from "@/content/founder";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { LogoMark } from "@/components/brand/Logo";

export const metadata: Metadata = { title: "The House" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink px-5 pb-16 pt-32 text-ivory md:px-16 md:pb-20 md:pt-36">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-[3/4] overflow-hidden bg-forest">
            <Image
              src={founder.portrait}
              alt={founder.portraitAlt}
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div>
            <Eyebrow>The founder</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              {founder.name}
            </h1>
            <p className="mt-4 text-[11px] tracking-[0.22em] uppercase text-gold">
              {founder.role}
            </p>
            <p className="mt-8 font-display text-2xl leading-snug text-ivory/90 md:text-4xl">
              One house. Two doors: the island, and the work that travel funds.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
              Joseph Kitali founded Tuwafute Machozi Foundation and Tuwafute
              Machozi Tours. He is the person guests meet in this portrait — a
              hospitality professional in the house shirt, thumbs up, standing
              for a simple contract: come to Zanzibar, and leave something
              standing for those who need it.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ivory/65">
              Joseph Kitali started the charity with other community members.{" "}
              {foundation.name} began on {foundation.foundedOn}, and the tours
              company exists so that guests can fund it.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ivory/65">
              In Kiswahili, <em>tuwafute machozi</em> means let us wipe their
              tears. Sixty percent of tour revenue is directed to charity and
              community impact in Zanzibar. About {foundation.membersApprox}{" "}
              members now contribute. {foundation.visitCaption}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/impact">The foundation chapter</Button>
              <Button href="/experiences" variant="ghost">
                Browse island tours
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow>The house</Eyebrow>
          <h2 className="mt-5 max-w-4xl font-display text-4xl md:text-6xl">
            {brand.tagline}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            {brand.meaning}
          </p>
        </Container>
      </Section>

      <Section dark>
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>A name, not a slogan</Eyebrow>
            <p className="mt-5 font-display text-3xl leading-snug">
              We kept the logo modern, elegant and emotional — a teardrop that becomes palm, wave and sunrise.
            </p>
            <p className="mt-6 leading-8 text-ivory/65">
              This is not an orphanage mark. It is jewelry-line work: the tear for those who need support,
              the ocean for Zanzibar, the palm for island life, the sun for a future that is allowed to arrive.
              Zanzibar travel, excursions and social impact — held as equal lines.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <LogoMark className="h-24 w-20" />
              <p className="text-sm leading-7 text-ivory/55">
                Follow the house on Instagram{" "}
                <a className="text-gold" href={brand.instagramUrl} target="_blank" rel="noreferrer">
                  @{brand.instagram}
                </a>
                .
              </p>
            </div>
          </div>
          <p className="font-display text-3xl leading-snug text-ivory/80 md:text-4xl">
            Guests book the coast. The foundation wipes tears. That is why both
            names share one sentence.
          </p>
        </Container>
      </Section>
    </>
  );
}
