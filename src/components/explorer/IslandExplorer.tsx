"use client";

import dynamic from "next/dynamic";

const IslandScene = dynamic(
  () => import("@/components/explorer/IslandScene").then((mod) => mod.IslandScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[70vh] items-center justify-center bg-ink text-ivory/50">
        Preparing the island…
      </div>
    ),
  },
);

export function IslandExplorer() {
  return <IslandScene />;
}
