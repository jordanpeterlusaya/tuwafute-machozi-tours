import type { Metadata } from "next";
import { AfricaMap } from "@/components/map/AfricaMap";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Zanzibar Excursion Map",
  description: "A geographic map of all 28 excursions in the Zanzibar guide.",
};

export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow="Geographic guide"
        title="Twenty-eight places. One real island."
        copy="Choose any guide excursion to see its actual reference point, then move from coast to forest with satellite or OpenStreetMap data."
      />
      <Section>
        <Container>
          <AfricaMap />
        </Container>
      </Section>
    </>
  );
}
