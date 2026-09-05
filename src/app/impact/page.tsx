import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Social Impact",
  description:
    "Tuwafute Machozi’s policy is to direct 60% of revenue to charity and community impact.",
};

const principles = [
  {
    title: "A clear allocation",
    copy: "The policy is based on revenue: 60% goes to charity and community impact.",
  },
  {
    title: "Dignity in the telling",
    copy: "Impact should not turn people into attractions. We share only details that can be verified and communicated with respect.",
  },
  {
    title: "Follow current work",
    copy: "The official Tuwafute profile is the direct place to follow updates from the team.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative min-h-[72vh] bg-ink text-ivory">
        <Image
          src="/images/nungwi-boats.jpg"
          alt="Fishing boats on the Zanzibar coast"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative z-10 flex min-h-[72vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>Give back</Eyebrow>
          <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-gold">
            Our stated revenue policy
          </p>
          <h1 className="mt-2 max-w-4xl font-display text-6xl md:text-8xl">
            60% goes to charity and community impact.
          </h1>
        </div>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="border-t border-gold pt-6">
                <h2 className="font-display text-3xl">{item.title}</h2>
                <p className="mt-4 leading-8 text-ink/65">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 overflow-hidden bg-ink text-ivory">
            <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">
              <div>
                <p className="eyebrow">Official social profile</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
                  Follow the work from its source.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-ivory/60">
                  We use existing local imagery here rather than copying social
                  photographs. Open the official Instagram profile for current
                  posts and updates.
                </p>
              </div>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-gold px-7 py-4 text-[11px] tracking-[0.24em] uppercase text-ink transition-colors hover:bg-gold-soft"
              >
                Instagram · @{brand.instagram} ↗
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
