export type Stay = {
  slug: string;
  name: string;
  stars: 2 | 3 | 4 | 5;
  place: string;
  kind: string;
  image: string;
  summary: string;
  details: string;
  amenities: string[];
  vibe: string;
};

export const stayAliases: Record<string, string> = {
  "north-coast-beach-stay": "four-star",
  "south-coast-private-stay": "five-star",
  "stone-town-heritage-stay": "three-star",
  "east-coast-boutique-stay": "two-star",
};

export const stays: Stay[] = [
  {
    slug: "two-star",
    name: "2-star stays",
    stars: 2,
    place: "Zanzibar",
    kind: "2-star",
    image: "/images/stays/two-star.jpg",
    summary:
      "Simple guesthouses and modest hotels. A clean room, a local host, and a base near the coast or town.",
    details:
      "We shortlist current 2-star houses after your dates and preferred coast. No hotel brand is claimed here, and no rate is published until a house is confirmed for you.",
    amenities: ["Simple rooms", "Local houses", "Verified shortlist"],
    vibe: "Straightforward island rest",
  },
  {
    slug: "three-star",
    name: "3-star stays",
    stars: 3,
    place: "Zanzibar",
    kind: "3-star",
    image: "/images/stays/three-star.jpg",
    summary:
      "Comfortable mid-range hotels. Breakfast, a garden or small pool in many houses, and an easy island pace.",
    details:
      "Three-star stays are the usual working choice for families and couples who want comfort without a luxury brief. We confirm what is open and suitable for your dates.",
    amenities: ["Mid-range comfort", "Breakfast in most houses", "Verified shortlist"],
    vibe: "Easy, practical comfort",
  },
  {
    slug: "four-star",
    name: "4-star stays",
    stars: 4,
    place: "Zanzibar",
    kind: "4-star",
    image: "/images/stays/four-star.jpg",
    summary:
      "Boutique and upscale hotels. Stronger service and a better beach or town position, still chosen around you.",
    details:
      "Four-star houses are shortlisted from what is actually available — not from a partner list. We do not invent a hotel alliance or a published price.",
    amenities: ["Upscale rooms", "Stronger service", "Verified shortlist"],
    vibe: "Polished island stay",
  },
  {
    slug: "five-star",
    name: "5-star stays",
    stars: 5,
    place: "Zanzibar",
    kind: "5-star",
    image: "/images/stays/five-star.jpg",
    summary:
      "Luxury resorts and private villas. Privacy, space and a slower morning — confirmed live, never as a catalogue rate.",
    details:
      "Five-star stays are arranged by request. We match the house to your dates and the coast you want. We do not claim brand partnerships or print a price that has not been confirmed.",
    amenities: ["Luxury rooms or villas", "Privacy first", "Verified shortlist"],
    vibe: "Quiet luxury",
  },
];

export function getStay(slug: string) {
  const resolved = stayAliases[slug] ?? slug;
  return stays.find((item) => item.slug === resolved);
}
