import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";

export type PlannerInput = {
  season: string;
  party: string;
  energy: string;
  must: string;
};

export function planJourney(input: PlannerInput) {
  const wantsSafari = /safari|serengeti|ngorongoro|tarangire/i.test(input.must);
  const days = wantsSafari || input.energy === "full" ? 10 : 7;

  const base =
    wantsSafari
      ? itineraries.find((item) => item.slug === "ocean-and-plain")
      : input.energy === "full"
        ? itineraries.find((item) => item.slug === "east-and-south")
        : itineraries.find((item) => item.slug === "zanzibar-essential");

  const picks = experiences
    .filter((item) => {
      if (input.must.toLowerCase().includes("kite")) return item.category === "adventure";
      if (input.must.toLowerCase().includes("stone")) return item.destination === "stone-town";
      if (input.party === "family") return item.category !== "adventure";
      return true;
    })
    .slice(0, 5);

  const note =
    input.season === "rains"
      ? "April–May favours forest, spice and empty beaches. We keep boat days flexible."
      : input.season === "kite"
        ? "East-coast winds are the host. We leave mornings free for the lagoon."
        : "Dry-season light is crystalline. Safari pairing is especially strong.";

  return {
    title: base?.name ?? "A private composition",
    days,
    note,
    story: `${input.party === "family" ? "Paced for children" : "Paced for two or a private party"}, with ${input.energy} days and room for ${input.must || "whatever the island offers"}.`,
    daysPlan: base?.daysPlan.slice(0, Math.min(days, base.daysPlan.length)) ?? [],
    experiences: picks.map((item) => item.name),
  };
}
