import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journal } from "@/content/journal";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title="Essays from the island and the tide."
        copy="How to arrive, when to obey the tide, and why the name is a compass."
      />
      <Section>
        <Container className="grid gap-12 md:grid-cols-2">
          {journal.map((entry) => (
            <Link key={entry.slug} href={`/journal/${entry.slug}`} className="group">
              <div className="image-reveal relative aspect-[16/10] overflow-hidden">
                <Image src={entry.image} alt={entry.title} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-gold">
                {entry.date} · {entry.read}
              </p>
              <h2 className="mt-2 font-display text-4xl group-hover:text-lagoon">{entry.title}</h2>
              <p className="mt-3 text-ink/60">{entry.excerpt}</p>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
