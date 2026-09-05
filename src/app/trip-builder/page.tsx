import type { Metadata } from "next";
import { TripBuilder } from "@/components/trip/TripBuilder";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Trip Builder" };

export default function TripBuilderPage() {
  return (
    <>
      <PageHero
        eyebrow="Compose an editorial sample"
        title="Build the journey before we write it in ink."
        copy="A few questions produce a sample composition from guide excursions. It is not an official package, price, or booking confirmation."
      />
      <Section>
        <Container>
          <TripBuilder />
        </Container>
      </Section>
    </>
  );
}
