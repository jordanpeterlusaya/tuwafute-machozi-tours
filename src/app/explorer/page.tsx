import type { Metadata } from "next";
import { IslandExplorer } from "@/components/explorer/IslandExplorer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Zanzibar Island Explorer",
  description:
    "Explore all 28 Zanzibar excursions on a geographic satellite map of the island.",
};

export default function ExplorerPage() {
  return (
    <>
      <PageHero
        eyebrow="The geographic island"
        title="See where every excursion begins."
        copy="Explore all 28 guide locations on real Zanzibar map data. Satellite terrain and mapped buildings appear where coverage exists."
      />
      <IslandExplorer />
    </>
  );
}
