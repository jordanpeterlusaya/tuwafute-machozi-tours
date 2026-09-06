import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getStay, stays } from "@/content/stays";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stays.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getStay(slug);
  return { title: item?.name, description: item?.summary };
}

export default async function StayPage({ params }: Props) {
  const { slug } = await params;
  const item = getStay(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[75vh] bg-ink text-ivory">
        <Image src={item.image} alt={item.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 flex min-h-[75vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>
            {item.stars}-star · {item.place}
          </Eyebrow>
          <h1 className="mt-3 font-display text-6xl md:text-8xl">{item.name}</h1>
        </div>
      </section>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-3xl">{item.details}</p>
            <p className="mt-6 text-ink/60 leading-8">{item.vibe}</p>
          </div>
          <div>
            <p className="font-display text-5xl">{item.stars}-star band</p>
            <p className="mt-2 text-sm text-ink/45">
              Price on request · current options confirmed for your dates
            </p>
            <ul className="mt-8 space-y-2">
              {item.amenities.map((line) => (
                <li key={line} className="text-ink/70">
                  — {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={`/enquire?interest=${encodeURIComponent(item.name)}`}>
                Request availability
              </Button>
              <Button href="/stays" variant="line">
                All star bands
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
