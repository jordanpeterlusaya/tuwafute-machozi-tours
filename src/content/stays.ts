export type Stay = {
  slug: string;
  name: string;
  place: string;
  kind: string;
  image: string;
  summary: string;
  details: string;
  amenities: string[];
  from: number;
  vibe: string;
};

export const stays: Stay[] = [
  {
    slug: "north-coast-beach-stay",
    name: "North Coast Beach Stay",
    place: "Kendwa · North",
    kind: "Accommodation style",
    image: "/images/hero-resort.jpg",
    summary:
      "A handpicked beach base near Kendwa and Nungwi, selected around your preferred atmosphere and budget.",
    details:
      "Tell us whether you value all-tide swimming, privacy, nightlife, or family space. We then recommend current, verified options rather than listing unconfirmed properties.",
    amenities: ["Beach access", "Tailored shortlist", "Verified availability"],
    from: 0,
    vibe: "Northern coast ease",
  },
  {
    slug: "south-coast-private-stay",
    name: "South Coast Private Stay",
    place: "Southwest coast",
    kind: "Accommodation style",
    image: "/images/resort-palms.jpg",
    summary:
      "A quieter villa or boutique base for Kizimkazi, Menai Bay and Zanzibar’s southern coastline.",
    details:
      "We match the stay to the journey after confirming live availability, access, and the experience standards that matter to you.",
    amenities: ["Private options", "Tailored shortlist", "Verified availability"],
    from: 0,
    vibe: "Secluded island calm",
  },
  {
    slug: "stone-town-heritage-stay",
    name: "Stone Town Heritage Stay",
    place: "Stone Town",
    kind: "Accommodation style",
    image: "/images/nungwi-boats.jpg",
    summary:
      "A restored heritage address among Stone Town’s carved doors, rooftop light and living streets.",
    details:
      "Stone Town should be slept in, not merely toured. We recommend an appropriate heritage property after checking current standards and availability.",
    amenities: ["Historic setting", "Central location", "Verified shortlist"],
    from: 0,
    vibe: "Poetic heritage",
  },
  {
    slug: "east-coast-boutique-stay",
    name: "East Coast Boutique Stay",
    place: "Paje · East",
    kind: "Accommodation style",
    image: "/images/hero-adventure.jpg",
    summary:
      "A small east-coast base for guests who want kite light, village proximity, and an unhurried atmosphere.",
    details:
      "We shortlist current options near Paje or Jambiani according to comfort, beach access, and the pace you want from the coast.",
    amenities: ["Beach access", "Local atmosphere", "Verified shortlist"],
    from: 0,
    vibe: "Barefoot elegance",
  },
];

export function getStay(slug: string) {
  return stays.find((item) => item.slug === slug);
}
