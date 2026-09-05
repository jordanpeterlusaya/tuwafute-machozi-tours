import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getJournal, journal } from "@/content/journal";
import { Container, Eyebrow, Section } from "@/components/ui/Section";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journal.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getJournal(slug);
  return { title: item?.title, description: item?.excerpt };
}

export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params;
  const item = getJournal(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[65vh] bg-ink text-ivory">
        <Image src={item.image} alt={item.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex min-h-[65vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>
            {item.date} · {item.read}
          </Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">{item.title}</h1>
        </div>
      </section>
      <Section>
        <Container className="max-w-2xl">
          {item.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-lg leading-9 text-ink/75">
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>
    </>
  );
}
