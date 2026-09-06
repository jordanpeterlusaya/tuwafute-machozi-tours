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
      <section className="bg-ink px-5 pb-20 pt-36 text-ivory md:px-16">
        <Eyebrow>The house</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-5xl md:text-8xl">{brand.tagline}</h1>
        <p className="mt-6 max-w-2xl text-lg text-ivory/65">{brand.meaning}</p>
      </section>

      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[3/4] overflow-hidden bg-forest">
            <Image
              src={founder.portrait}
              alt={founder.portraitAlt}
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
          <div>
            <Eyebrow>About the founder</Eyebrow>
            <p className="mt-3 text-[11px] tracking-[0.22em] uppercase text-gold">
              {founder.role}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-snug md:text-5xl">
              One house. Two doors: the island, and the work that travel funds.
            </h2>
            <p className="mt-6 leading-8 text-ink/65">
              The founder of Tuwafute Machozi Foundation and Tuwafute Machozi
              Tours is the same person guests meet in this portrait — a
              hospitality professional in the house shirt, thumbs up, standing
              for a simple contract: come to Zanzibar, and leave something
              standing for those who need it.
            </p>
            <p className="mt-5 leading-8 text-ink/65">
              We do not publish a legal name that is not clearly given. The
              founding note for the charity says the organisation was created by
              “{founder.documentCredit}” together with other community members.
              We keep that wording as it appears on the document. What is
              certain is the work: {foundation.name} began on{" "}
              {foundation.foundedOn}, and the tours company exists so that
              guests can fund it.
            </p>
            <p className="mt-5 leading-8 text-ink/65">
              In Kiswahili, <em>tuwafute machozi</em> means let us wipe their
              tears. Sixty percent of tour revenue is directed to charity and
              community impact in Zanzibar. The remaining house keeps boats,
              guides and days precise. Travel is not a slogan around the
              charity. It is how the charity is paid for.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/impact">The foundation chapter</Button>
              <Button href="/experiences" variant="line">
                Browse island tours
              </Button>
            </div>
          </div>
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
