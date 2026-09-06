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

// Photo credits: public/images/stays/CREDITS.md (Wikimedia Commons, CC).
export const stays: Stay[] = [
  {
    slug: "two-star",
    name: "2-star · Shangani Hotel",
    stars: 2,
    place: "Stone Town",
    kind: "2-star",
    image: "/images/stays/two-star.jpg",
    summary:
      "Simple Stone Town houses in this band. Shangani Hotel on Kenyatta Road is a real named example — a modest street hotel, booked on request.",
    details:
      "Shangani Hotel is a working Stone Town house in this simpler standard, not an official partner and not the only option. We shortlist current 2-star guesthouses after your dates. No published room rate.",
    amenities: ["Simple rooms", "Stone Town base", "Availability on request"],
    vibe: "Straightforward island rest",
  },
  {
    slug: "three-star",
    name: "3-star · Tembo House Hotel",
    stars: 3,
    place: "Stone Town seafront",
    kind: "3-star",
    image: "/images/stays/three-star.jpg",
    summary:
      "Mid-range Stone Town hotels. Tembo House Hotel on the Forodhani seafront is a real island house in this standard — confirmed live, never as a catalogue rate.",
    details:
      "Tembo House Hotel is a known Stone Town seafront hotel used here as an example of the 3-star band. We do not own it and we do not claim a partnership. We check what is open for your dates, then request current availability.",
    amenities: ["Mid-range comfort", "Seafront town position", "Availability on request"],
    vibe: "Easy, practical comfort",
  },
  {
    slug: "four-star",
    name: "4-star · Ocean Paradise",
    stars: 4,
    place: "Pwani Mchangani",
    kind: "4-star",
    image: "/images/stays/four-star.jpg",
    summary:
      "East-coast 4-star resorts. Ocean Paradise Resort & Spa at Pwani Mchangani is a real named house in this band — arranged around your dates, not from a partner list.",
    details:
      "Ocean Paradise is a known 4-star resort on Zanzibar’s north-east coast, shown as an example of this standard. We do not publish a rate and we do not claim a brand alliance. Ask and we confirm current availability.",
    amenities: ["Upscale rooms", "East-coast beach resort", "Availability on request"],
    vibe: "Polished island stay",
  },
  {
    slug: "five-star",
    name: "5-star · Baraza Resort",
    stars: 5,
    place: "Bwejuu",
    kind: "5-star",
    image: "/images/stays/five-star.jpg",
    summary:
      "Luxury east-coast resorts. Baraza Resort & Spa on Bwejuu Beach is a real 5-star island hotel in this band — booked on request, never as a printed price.",
    details:
      "Baraza Resort & Spa is a known luxury house on the south-east coast, used as an example of the 5-star standard. We do not own the hotel and we do not claim an official partnership. We match dates and coast, then request current availability.",
    amenities: ["Luxury rooms or villas", "South-east coast", "Availability on request"],
    vibe: "Quiet luxury",
  },
];

export function getStay(slug: string) {
  const resolved = stayAliases[slug] ?? slug;
  return stays.find((item) => item.slug === resolved);
}
