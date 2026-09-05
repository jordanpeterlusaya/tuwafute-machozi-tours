import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSafari, safaris } from "@/content/safaris";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return safaris.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSafari(slug);
  return { title: item?.name, description: item?.summary };
}

export default async function SafariPage({ params }: Props) {
  const { slug } = await params;
  const item = getSafari(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[75vh] bg-ink text-ivory">
        <Image src={item.image} alt={item.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex min-h-[75vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>{item.days} days</Eyebrow>
          <h1 className="mt-3 font-display text-6xl md:text-8xl">{item.name}</h1>
        </div>
      </section>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <p className="font-display text-3xl leading-snug">{item.story}</p>
          <div>
            <p className="font-display text-5xl">{formatPrice(item.priceFrom)}</p>
            <p className="text-sm text-ink/45">from, sharing · private vehicle on request</p>
            <p className="mt-6 text-sm text-ink/60">Best season · {item.best}</p>
            <ol className="mt-8 space-y-4">
              {item.rhythm.map((line, index) => (
                <li key={line} className="flex gap-4">
                  <span className="text-gold">0{index + 1}</span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
            <Button href="/enquire?interest=safari" className="mt-10">
              Design this safari
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
