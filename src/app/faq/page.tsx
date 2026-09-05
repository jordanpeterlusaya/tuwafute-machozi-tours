import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Practical beauty"
        title="The questions guests actually ask."
        copy="Tides, seasons, dolphins, children, visas — answered without the brochure voice."
      />
      <Section>
        <Container className="max-w-3xl">
          {faqs.map((item) => (
            <details key={item.q} className="group border-t border-ink/10 py-6">
              <summary className="cursor-pointer list-none font-display text-2xl md:text-3xl">
                {item.q}
              </summary>
              <p className="mt-4 leading-8 text-ink/65">{item.a}</p>
            </details>
          ))}
        </Container>
      </Section>
    </>
  );
}
