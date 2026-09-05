import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getStay, stays } from "@/content/stays";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

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
          <Eyebrow>{item.place}</Eyebrow>
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
            <p className="font-display text-5xl">{formatPrice(item.from)}</p>
            <p className="text-sm text-ink/45">from, per night</p>
            <ul className="mt-8 space-y-2">
              {item.amenities.map((line) => (
                <li key={line} className="text-ink/70">
                  — {line}
                </li>
              ))}
            </ul>
            <Button href="/enquire?interest=stay" className="mt-10">
              Request availability
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
