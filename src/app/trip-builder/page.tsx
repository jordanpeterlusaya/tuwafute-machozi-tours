import type { Metadata } from "next";
import { TripBuilder } from "@/components/trip/TripBuilder";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Trip Builder" };

export default function TripBuilderPage() {
  return (
    <>
      <PageHero
        eyebrow="Compose"
        title="Build the journey before we write it in ink."
        copy="A few precise questions. A living sketch. Then a human conversation."
      />
      <Section>
        <Container>
          <TripBuilder />
        </Container>
      </Section>
    </>
  );
}
