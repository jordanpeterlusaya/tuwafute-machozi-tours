import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stays } from "@/content/stays";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Stays" };

export default function StaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Houses of rest"
        title="The right Zanzibar base, chosen around you."
        copy="Accommodation styles, not unverified hotel claims. We create a current shortlist after learning your dates, pace and preferred coast."
      />
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          {stays.map((item) => (
            <Link key={item.slug} href={`/stays/${item.slug}`} className="group">
              <div className="image-reveal relative aspect-[16/11] overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.22em] uppercase text-gold">
                {item.kind} · {item.place}
              </p>
              <h2 className="mt-2 font-display text-4xl group-hover:text-lagoon">{item.name}</h2>
              <p className="mt-3 text-ink/60">{item.summary}</p>
              <p className="mt-2 text-sm text-ink/40">Current shortlist on request</p>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
