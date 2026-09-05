import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { stays } from "@/content/stays";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { CinematicVideo } from "@/components/media/CinematicVideo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getDestination(slug);
  return { title: item?.name ?? "Destination", description: item?.summary };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const item = getDestination(slug);
  if (!item) notFound();

  const related = experiences.filter((exp) => item.experiences.includes(exp.slug));
  const lodging = stays.filter((stay) => item.stays.includes(stay.slug));

  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-ink text-ivory">
        {item.video ? (
          <CinematicVideo
            src={item.video}
            poster={item.image}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image src={item.image} alt={item.name} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30" />
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-end px-5 pb-16 md:px-16">
          <Eyebrow>{item.regionLabel}</Eyebrow>
          <h1 className="mt-4 font-display text-6xl md:text-8xl">{item.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-ivory/75">{item.summary}</p>
        </div>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{item.eyebrow}</Eyebrow>
            <p className="mt-5 font-display text-3xl leading-snug">{item.story}</p>
          </div>
          <div>
            <ul className="space-y-4 border-t border-gold/30 pt-6">
              {item.highlights.map((line) => (
                <li key={line} className="flex gap-3 text-ink/70">
                  <span className="text-gold">▸</span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm tracking-wide text-ink/45">Best season · {item.season}</p>
            <Button href="/enquire" className="mt-8">
              Enquire about {item.name}
            </Button>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section dark>
          <Container>
            <Eyebrow>Experiences</Eyebrow>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((exp) => (
                <Link key={exp.slug} href={`/experiences/${exp.slug}`} className="border border-gold/15 p-6 hover:border-gold">
                  <h3 className="font-display text-2xl">{exp.name}</h3>
                  <p className="mt-2 text-sm text-ivory/55">{exp.duration}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {lodging.length > 0 && (
        <Section>
          <Container>
            <Eyebrow>Stay</Eyebrow>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {lodging.map((stay) => (
                <Link key={stay.slug} href={`/stays/${stay.slug}`} className="image-reveal">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={stay.image} alt={stay.name} fill className="object-cover" sizes="50vw" />
                  </div>
                  <h3 className="mt-4 font-display text-3xl">{stay.name}</h3>
                  <p className="text-sm text-ink/55">{stay.place}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
