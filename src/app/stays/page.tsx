import type { Metadata } from "next";
import { stays } from "@/content/stays";
import { MediaCard, QuietLink } from "@/components/ui/MediaCard";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Stays" };

export default function StaysPage() {
  return (
    <>
      <PageHero
        eyebrow="2-star to 5-star"
        title="Zanzibar hotels, arranged around you."
        copy="Four star bands, each shown with a real island hotel in that standard. Examples we can request — not official partners, and no published room rate."
      />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {stays.map((item) => (
            <MediaCard
              key={item.slug}
              href={`/stays/${item.slug}`}
              image={item.image}
              alt={item.name}
              eyebrow={`${item.kind} · ${item.place}`}
              title={item.name}
              summary={item.summary}
              aspect="aspect-[16/11]"
              headingAs="h2"
              sizes="50vw"
            >
              <QuietLink href={`/enquire?interest=${encodeURIComponent(item.name)}`}>
                Request this band
              </QuietLink>
              <QuietLink href={`/stays/${item.slug}`}>View stay</QuietLink>
            </MediaCard>
          ))}
        </Container>
      </Section>
    </>
  );
}
