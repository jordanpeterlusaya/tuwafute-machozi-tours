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
    slug: "zuri-zanzibar",
    name: "Zuri Zanzibar",
    place: "Kendwa · North",
    kind: "Beach lodge",
    image: "/images/hero-resort.jpg",
    summary:
      "A contemporary north-coast lodge of makuti roofs, tropical gardens, and a private stretch of Kendwa sand.",
    details:
      "We place guests here when they want design, space, and a swimming beach that does not vanish with the tide. Villas sit in greenery; the ocean is a short barefoot walk.",
    amenities: ["Private beach", "Spa", "Villas with pool", "Ocean dining"],
    from: 420,
    vibe: "Modern island luxury",
  },
  {
    slug: "the-residence",
    name: "The Residence Zanzibar",
    place: "Southwest coast",
    kind: "Resort villa",
    image: "/images/resort-palms.jpg",
    summary:
      "A generous villa estate on a quieter southwest shore — privacy, palms, and a long horizon.",
    details:
      "For honeymoons and families who want a self-contained world: butler service, a still lagoon beach, and room to disappear for a week.",
    amenities: ["Private villa pools", "Kids club", "Golf", "Spa"],
    from: 550,
    vibe: "Secluded grandeur",
  },
  {
    slug: "emerson-spice",
    name: "Emerson Spice",
    place: "Stone Town",
    kind: "Heritage house",
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72eb2e3?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A restored merchant house in the old town — carved details, rooftop theatre, and the sound of the city below.",
    details:
      "Stone Town should be slept in, not merely toured. Emerson is our preferred address when the journey begins or ends among the doors and alleys.",
    amenities: ["Rooftop restaurant", "Antique rooms", "Old Town location"],
    from: 220,
    vibe: "Poetic heritage",
  },
  {
    slug: "ulambe-house",
    name: "Ulambe House",
    place: "Paje · East",
    kind: "Boutique stay",
    image: "/images/hero-adventure.jpg",
    summary:
      "A small east-coast house for guests who want kite light, village proximity, and no resort armour.",
    details:
      "Simple, beautiful rooms a walk from the lagoon. Ideal after a safari, or as a base for caves, The Rock, and long tidal walks.",
    amenities: ["Beach walk", "Boutique rooms", "Local hosts"],
    from: 180,
    vibe: "Barefoot elegance",
  },
  {
    slug: "serengeti-camp",
    name: "Mobile Serengeti Camp",
    place: "Serengeti",
    kind: "Safari camp",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A seasonal camp that follows the herds — canvas, lantern light, and the grass as your garden.",
    details:
      "We work with camps that move with the migration rather than asking the migration to visit a hotel. The luxury is proximity and silence.",
    amenities: ["Canvas suites", "Private guide", "Bush dining"],
    from: 780,
    vibe: "Wilderness intimacy",
  },
  {
    slug: "crater-lodge",
    name: "Crater Highland Lodge",
    place: "Ngorongoro",
    kind: "Highland lodge",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
    summary:
      "Cool air, cedar, and a view that falls into the caldera. A fire is not decoration here — it is necessary.",
    details:
      "After the crater floor, the highlands feel like another country. We use this lodge for the contrast: heat and dust below, blankets and mist above.",
    amenities: ["Fireplace suites", "Crater access", "Highland walks"],
    from: 640,
    vibe: "Alpine Africa",
  },
];

export function getStay(slug: string) {
  return stays.find((item) => item.slug === slug);
}
