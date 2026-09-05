import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/content/experiences";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperience(slug);
  return { title: item?.name ?? "Experience", description: item?.summary };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[70vh] bg-ink text-ivory">
        <Image src={item.image} alt={item.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-end px-5 pb-14 md:px-16">
          <Eyebrow>{item.region}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">{item.name}</h1>
        </div>
      </section>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-3xl leading-snug">{item.details}</p>
            <p className="mt-6 leading-8 text-ink/65">{item.summary}</p>
          </div>
          <aside className="border border-gold/25 bg-sand/40 p-8">
            <p className="eyebrow">The hour</p>
            <p className="mt-4 text-ink/70">{item.duration}</p>
            <p className="mt-2 font-display text-4xl">{formatPrice(item.priceFrom)}</p>
            <p className="text-sm text-ink/45">from, per guest · private on request</p>
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              {item.includes.map((line) => (
                <li key={line}>— {line}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-ink/50">{item.notes}</p>
            <Button href={`/enquire?interest=${item.slug}`} className="mt-8 w-full">
              Hold this day
            </Button>
          </aside>
        </Container>
      </Section>
    </>
  );
}
