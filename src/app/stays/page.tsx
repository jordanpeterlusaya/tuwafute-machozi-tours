import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stays } from "@/content/stays";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Stays" };

export default function StaysPage() {
  return (
    <>
      <PageHero
        eyebrow="2-star to 5-star"
        title="Zanzibar hotels, arranged around you."
        copy="Four star bands, each shown with a real island hotel in that standard. Those houses are examples we can request — not official partners, and no published room rate."
      />
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          {stays.map((item) => (
            <article key={item.slug} className="flex h-full flex-col">
              <Link href={`/stays/${item.slug}`} className="group block">
                <div className="image-reveal relative aspect-[16/11] overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.22em] uppercase text-gold">
                  {item.kind} · {item.place}
                </p>
                <h2 className="mt-2 font-display text-4xl group-hover:text-lagoon">{item.name}</h2>
                <p className="mt-3 text-ink/60">{item.summary}</p>
                <p className="mt-2 text-sm text-ink/40">Price on request · current shortlist</p>
              </Link>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`/enquire?interest=${encodeURIComponent(item.name)}`}>
                  Request this band
                </Button>
                <Button href={`/stays/${item.slug}`} variant="line">
                  View stay
                </Button>
              </div>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
