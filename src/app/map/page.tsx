import type { Metadata } from "next";
import { AfricaMap } from "@/components/map/AfricaMap";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Map" };

export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow="Cartography"
        title="Tanzania in two gestures: grass, then salt."
        copy="Touch a gold point. The island and the northern circuit, held on one page."
      />
      <Section>
        <Container>
          <AfricaMap />
        </Container>
      </Section>
    </>
  );
}
