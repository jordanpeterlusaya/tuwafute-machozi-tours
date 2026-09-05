import { coastFilms } from "@/content/media";

export type Region = "north" | "east" | "south" | "west";

export type Destination = {
  slug: string;
  name: string;
  region: Region;
  regionLabel: string;
  eyebrow: string;
  summary: string;
  story: string;
  image: string;
  video?: string;
  mobileVideo?: string;
  videoLabel?: string;
  coords: { x: number; y: number; lat: number; lng: number };
  scene: {
    position: [number, number, number];
    camera: [number, number, number];
    accent: string;
    elevation: number;
  };
  highlights: string[];
  stays: string[];
  experiences: string[];
  season: string;
};

export const destinations: Destination[] = [
  {
    slug: "nungwi",
    name: "Nungwi",
    region: "north",
    regionLabel: "North Zanzibar",
    eyebrow: "The northern light",
    summary:
      "Zanzibar’s celebrated northern coastline — powder sand, turquoise shallows, and sunsets that turn the Indian Ocean to molten gold.",
    story:
      "Nungwi is where the island thins into light. Fishermen still push wooden ngalawa into the morning tide, while the beach unfurls in a long, pale curve toward Kendwa. We bring guests here not only for the postcard, but for the slower hour after it — village lanes, turtle conservation, and the first stars over the dhows.",
    image: coastFilms[0].poster,
    video: coastFilms[0].video,
    mobileVideo: coastFilms[0].mobileVideo,
    videoLabel: `${coastFilms[0].title} · exact location unrecorded`,
    coords: { x: 48, y: 8, lat: -5.726, lng: 39.299 },
    scene: { position: [-0.25, 0.42, -3.25], camera: [-0.2, 2.1, 4.2], accent: "#56d8cf", elevation: 0.42 },
    highlights: ["White-sand coast", "Sunset village life", "Turtle sanctuary"],
    stays: ["north-coast-beach-stay"],
    experiences: "nungwi-beach,nungwi-turtles,mnemba,dolphin-north".split(","),
    season: "June – October · December – March",
  },
  {
    slug: "kendwa",
    name: "Kendwa",
    region: "north",
    regionLabel: "North Zanzibar",
    eyebrow: "Wide sand, long light",
    summary:
      "A quieter sister to Nungwi — a broad beach that holds its swimming tide, and evenings that arrive like a ceremony.",
    story:
      "Kendwa is made for lingering. The beach is generous, the water stays deep enough to swim through the tides, and the sky performs every dusk. It is the island at its most cinematic, without ever needing to raise its voice.",
    image: coastFilms[1].poster,
    video: coastFilms[1].video,
    mobileVideo: coastFilms[1].mobileVideo,
    videoLabel: `${coastFilms[1].title} · exact location unrecorded`,
    coords: { x: 44, y: 12, lat: -5.75, lng: 39.28 },
    scene: { position: [-0.62, 0.32, -2.75], camera: [-1.1, 1.8, 3.8], accent: "#e8c985", elevation: 0.32 },
    highlights: ["All-tide swimming", "Golden hour", "Evening atmosphere"],
    stays: ["north-coast-beach-stay"],
    experiences: "kendwa-sunset".split(","),
    season: "Year-round, finest June – October",
  },
  {
    slug: "paje",
    name: "Paje",
    region: "east",
    regionLabel: "East Coast",
    eyebrow: "Wind, palm, horizon",
    summary:
      "A palm-fringed east-coast village where kites colour the sky and the lagoon stays warm and shallow for hours.",
    story:
      "Paje belongs to the wind. In season the lagoon fills with kite-surfers; out of season it returns to fishermen, coconut groves, and long walks at low tide. We use it as a base for the east — Kuza Cave, The Rock, and the quieter villages beyond.",
    image: coastFilms[2].poster,
    video: coastFilms[2].video,
    mobileVideo: coastFilms[2].mobileVideo,
    videoLabel: `${coastFilms[2].title} · exact location unrecorded`,
    coords: { x: 78, y: 58, lat: -6.266, lng: 39.534 },
    scene: { position: [1.1, 0.28, 0.65], camera: [2.8, 1.7, 4.1], accent: "#42cfc2", elevation: 0.28 },
    highlights: ["Kite lagoon", "Palm coast", "East-coast ease"],
    stays: ["east-coast-boutique-stay"],
    experiences: "paje-beach,kite-surfing,blue-lagoon,the-rock".split(","),
    season: "Kite winds: June – August · December – February",
  },
  {
    slug: "jambiani",
    name: "Jambiani",
    region: "east",
    regionLabel: "East Coast",
    eyebrow: "The living village",
    summary:
      "Authentic coastal life — seaweed farms at low tide, wooden boats, and a pace that still belongs to the sea.",
    story:
      "Jambiani is Zanzibar without the filter. Women tend seaweed plots that appear like gardens when the tide withdraws. Children play football on the coral sand. It is one of the most honest places on the island to understand how the coast still lives.",
    image: "/images/nungwi-boats.jpg",
    coords: { x: 80, y: 68, lat: -6.316, lng: 39.545 },
    scene: { position: [1.18, 0.24, 1.42], camera: [2.7, 1.5, 4.2], accent: "#73c9b5", elevation: 0.24 },
    highlights: ["Seaweed farms", "Village culture", "Quiet beaches"],
    stays: ["east-coast-boutique-stay"],
    experiences: "jambiani-village,kite-surfing".split(","),
    season: "Year-round",
  },
  {
    slug: "kizimkazi",
    name: "Kizimkazi",
    region: "south",
    regionLabel: "South Zanzibar",
    eyebrow: "The old coast",
    summary:
      "A historic fishing settlement, dramatic southern beaches, and boat mornings across Menai Bay.",
    story:
      "Kizimkazi holds one of East Africa’s oldest mosques and a maritime memory that predates tourism. From here the southern waters open toward dolphins, sandbanks, and the protected sweep of Menai Bay. We travel with guides who treat the ocean as a neighbour, not a stage.",
    image: "/images/hero-nungwi.jpg",
    coords: { x: 62, y: 88, lat: -6.45, lng: 39.47 },
    scene: { position: [0.48, 0.3, 3.08], camera: [1.2, 1.8, 5.3], accent: "#d8ad72", elevation: 0.3 },
    highlights: ["Historic mosque", "Dolphin waters", "Menai Bay"],
    stays: ["south-coast-private-stay"],
    experiences: "kizimkazi-dolphin,kizimkazi-mosque,menai-bay,pungume".split(","),
    season: "Seas calmest June – October",
  },
  {
    slug: "stone-town",
    name: "Stone Town",
    region: "west",
    regionLabel: "West & Central",
    eyebrow: "The island’s memory",
    summary:
      "A UNESCO labyrinth of carved doors, rooftop light, spice markets, and centuries of Indian Ocean trade.",
    story:
      "Stone Town is not a museum. It is a living archive — Omani palaces, Swahili courtyards, Indian balconies, and the evening theatre of Forodhani. We walk it at the right hours, when the alleys are cool and the call to prayer moves through coral-stone walls.",
    image: "/images/nungwi-boats.jpg",
    coords: { x: 28, y: 48, lat: -6.163, lng: 39.198 },
    scene: { position: [-1.18, 0.45, -0.15], camera: [-3.2, 2.1, 3.3], accent: "#d4a55f", elevation: 0.45 },
    highlights: ["Heritage lanes", "Forodhani night market", "Spice heritage"],
    stays: ["stone-town-heritage-stay"],
    experiences: "stone-town,spice-farm,forodhani,darajani,house-of-wonders".split(","),
    season: "Year-round; coolest June – August",
  },
  {
    slug: "jozani",
    name: "Jozani Forest",
    region: "west",
    regionLabel: "West & Central",
    eyebrow: "The green heart",
    summary:
      "Zanzibar’s last great forest — red colobus monkeys, mangrove boardwalks, and a quieter island ecology.",
    story:
      "Away from the beaches, Jozani is where the island remembers it is also a forest. Endemic red colobus move through the canopy. Mangroves hold the shoreline together. Time here is an education in what luxury actually protects.",
    image: "/images/resort-palms.jpg",
    coords: { x: 52, y: 62, lat: -6.232, lng: 39.408 },
    scene: { position: [0.02, 0.72, 0.95], camera: [0.5, 2.5, 4], accent: "#4c8e68", elevation: 0.72 },
    highlights: ["Red colobus", "Mangrove walk", "Island ecology"],
    stays: ["south-coast-private-stay"],
    experiences: "jozani,mangrove".split(","),
    season: "Year-round; clearest wildlife mornings",
  },
];

export function getDestination(slug: string) {
  return destinations.find((item) => item.slug === slug);
}

export const regions: { id: Region; label: string; copy: string }[] = [
  {
    id: "north",
    label: "North Zanzibar",
    copy: "Nungwi, Kendwa, Mnemba and the turtle coast.",
  },
  {
    id: "east",
    label: "East Coast",
    copy: "Paje, Jambiani, caves, kites and The Rock.",
  },
  {
    id: "south",
    label: "South Zanzibar",
    copy: "Kizimkazi, Menai Bay, Mtende and secret sandbanks.",
  },
  {
    id: "west",
    label: "West & Central",
    copy: "Stone Town, spices, Jozani and sunset dhows.",
  },
];
