import type { Metadata } from "next";
import { IslandExplorer } from "@/components/explorer/IslandExplorer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Zanzibar Island Explorer",
  description:
    "Explore all 28 Zanzibar excursions on a geographic satellite or OpenStreetMap map.",
};

export default function ExplorerPage() {
  return (
    <>
      <PageHero
        eyebrow="The geographic island"
        title="See where every excursion begins."
        copy="Explore all 28 guide locations on real map data. Satellite terrain and mapped 3D buildings appear with Mapbox coverage; OpenStreetMap remains available as the fallback."
      />
      <IslandExplorer />
    </>
  );
}
