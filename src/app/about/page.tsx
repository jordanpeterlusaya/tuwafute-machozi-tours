import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand";
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
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/hero-resort.jpg" alt="Zanzibar coast" fill className="object-cover" />
          </div>
          <div>
            <Eyebrow>A name, not a slogan</Eyebrow>
            <p className="mt-5 font-display text-3xl leading-snug">
              We kept the logo modern, elegant and emotional — a teardrop that becomes palm, wave and sunrise.
            </p>
            <p className="mt-6 leading-8 text-ink/65">
              This is not an orphanage mark. It is jewelry-line work: the tear for those who need support,
              the ocean for Zanzibar, the palm for island life, the sun for a future that is allowed to arrive.
              Zanzibar travel, excursions and social impact — held as equal lines.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <LogoMark className="h-24 w-20" />
              <p className="text-sm leading-7 text-ink/55">
                Follow the house on Instagram{" "}
                <a className="text-gold" href={brand.instagramUrl} target="_blank" rel="noreferrer">
                  @{brand.instagram}
                </a>
                .
              </p>
            </div>
            <Button href="/impact" variant="line" className="mt-10">
              Read the impact chapter
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
