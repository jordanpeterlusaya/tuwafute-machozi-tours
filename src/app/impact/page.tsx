import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Social Impact" };

const pillars = [
  {
    title: "Dignity first",
    copy: "We do not sell poverty as a viewpoint. Community visits are conversations, hosted by the community, with no applause required.",
  },
  {
    title: "Marine protection",
    copy: "Turtle sanctuary support, reef-safe practice, and skippers who will disappoint a guest rather than chase a dolphin.",
  },
  {
    title: "Education & families",
    copy: "A portion of every journey funds school materials, family welfare and the quieter emergencies that never trend.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="relative min-h-[70vh] bg-ink text-ivory">
        <Image src="/images/nungwi-boats.jpg" alt="Fishing boats in Zanzibar" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>Give back</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
            Luxury is attention. Impact is what attention does next.
          </h1>
        </div>
      </section>
      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="border-t border-gold pt-6">
                <h2 className="font-display text-3xl">{item.title}</h2>
                <p className="mt-4 leading-8 text-ink/65">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-3xl">
            If you travel with us, you will still receive the masterpiece. You will also receive the conversation after it.
          </p>
          <div className="mt-10 text-center">
            <Button href="/enquire?interest=impact">Travel with purpose</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
