import type { Metadata } from "next";
import { IslandExplorer } from "@/components/explorer/IslandExplorer";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "3D Explorer" };

export default function ExplorerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hold the island"
        title="Rotate. Zoom. Touch a gold light."
        copy="A lightweight 3D atlas of Zanzibar and the safari circuit — built to stay fast on a phone."
      />
      <IslandExplorer />
    </>
  );
}
