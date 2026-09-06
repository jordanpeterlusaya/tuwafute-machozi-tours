import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";
import { founder, foundation } from "@/content/founder";

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
    copy: "Our stated policy is that 60% of revenue goes to charity and community impact in Zanzibar. When you book an excursion or a mainland journey, you enable that allocation.",
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
            Your journey enables charity in Zanzibar.
          </h1>
        </div>
      </section>

      <Section>
        <Container className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-[3/4] overflow-hidden bg-forest">
            <Image
              src={founder.portrait}
              alt={founder.portraitAlt}
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div>
            <Eyebrow>{foundation.name}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-snug md:text-5xl">
              The charity the tours were built to fund.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              Book the island. Fund the work. That is the whole sentence. The
              founder started {foundation.name} on {foundation.foundedOn} with
              other community members — the founding note names “
              {founder.documentCredit}” among those who created it — so that
              dedicated resources could reach people society and government do
              not always protect.
            </p>
            <p className="mt-5 leading-8 text-ink/65">
              Children often depend entirely on parents or carers for safety,
              guidance and daily needs. The foundation was created to fill those
              gaps: food, care and presence for the most vulnerable, without
              turning anyone into a tourist attraction.
            </p>
            <p className="mt-5 leading-8 text-ink/65">
              Work began the same day as a WhatsApp group, so members could
              share ideas and take part. About {foundation.membersApprox}{" "}
              members now contribute. {foundation.visitCaption} The founding
              papers also include a chart of how leaders flow; we do not invent
              titles that are not clearly published here.
            </p>
            <p className="mt-5 leading-8 text-ink/65">
              Tuwafute Machozi Tours is the travel door of the same mission.
              Sixty percent of revenue is directed to charity and community
              impact in Zanzibar. Mainland safaris requested from this house
              follow the same policy. The remaining house keeps the guiding,
              boats and days precise.
            </p>
            <Button href="/about" variant="line" className="mt-10">
              Meet the founder
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
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
