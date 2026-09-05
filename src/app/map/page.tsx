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
        title="Zanzibar, held in one gesture."
        copy="Touch a gold point. The island destinations from our excursions guide, held on one page."
      />
      <Section>
        <Container>
          <AfricaMap />
        </Container>
      </Section>
    </>
  );
}
