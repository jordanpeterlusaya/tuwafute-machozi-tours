import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Social Impact",
  description: brand.meaning,
};

const principles = [
  {
    title: "The name is the work",
    copy: "Tuwafute Machozi means let us wipe their tears. The house is called Tuwafute Machozi Tours so guests never mistake this for a slogan. Travel is how the work is funded.",
  },
  {
    title: "60% of revenue",
    copy: "Our stated policy is that 60% of revenue goes to charity and community impact in Zanzibar. When you book an excursion, you enable that allocation.",
  },
  {
    title: "Dignity, not spectacle",
    copy: "Impact should not turn people into attractions. We do not sell orphanage tourism. Guests may visit as guests — never as spectators.",
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
          <Eyebrow>{brand.legalName}</Eyebrow>
          <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-gold">
            Why guests travel with us
          </p>
          <h1 className="mt-2 max-w-5xl font-display text-5xl md:text-7xl">
            Your safari enables charity in Zanzibar.
          </h1>
        </div>
      </section>

      <Section>
        <Container>
          <p className="max-w-3xl font-display text-3xl leading-snug md:text-4xl">
            Book the island. Fund the work. That is the whole sentence.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/65">
            The owner wants every visitor to understand this before they
            enquire: Tuwafute Machozi Tours exists so that a journey across
            Zanzibar can wipe a tear in Zanzibar. Sixty percent of revenue is
            directed to charity and community impact. The remaining house keeps
            the guiding, boats and days precise.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
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
                  Current photographs and updates live on the official Instagram
                  profile. We do not copy those images here.
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
