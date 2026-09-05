export type Region = "north" | "east" | "south" | "west" | "safari";

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
  coords: { x: number; y: number; lat: number; lng: number };
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
    image: "/images/hero-nungwi.jpg",
    video: "/media/hero-nungwi.mp4",
    coords: { x: 48, y: 8, lat: -5.726, lng: 39.299 },
    highlights: ["White-sand coast", "Sunset village life", "Turtle sanctuary"],
    stays: "zuri-zanzibar,the-residence".split(","),
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
    image: "/images/resort-palms.jpg",
    video: "/media/hero-resort.mp4",
    coords: { x: 44, y: 12, lat: -5.75, lng: 39.28 },
    highlights: ["All-tide swimming", "Golden hour", "Evening atmosphere"],
    stays: "zuri-zanzibar".split(","),
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
    image: "/images/hero-adventure.jpg",
    video: "/media/hero-adventure.mp4",
    coords: { x: 78, y: 58, lat: -6.266, lng: 39.534 },
    highlights: ["Kite lagoon", "Palm coast", "East-coast ease"],
    stays: "ulambe-house".split(","),
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
    highlights: ["Seaweed farms", "Village culture", "Quiet beaches"],
    stays: "ulambe-house".split(","),
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
    highlights: ["Historic mosque", "Dolphin waters", "Menai Bay"],
    stays: "the-residence".split(","),
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
    image: "https://images.unsplash.com/photo-1589197331516-4d84b72eb2e3?auto=format&fit=crop&w=1800&q=80",
    coords: { x: 28, y: 48, lat: -6.163, lng: 39.198 },
    highlights: ["Heritage lanes", "Forodhani night market", "Spice heritage"],
    stays: "emerson-spice".split(","),
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
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80",
    coords: { x: 52, y: 62, lat: -6.232, lng: 39.408 },
    highlights: ["Red colobus", "Mangrove walk", "Island ecology"],
    stays: "the-residence".split(","),
    experiences: "jozani,mangrove".split(","),
    season: "Year-round; clearest wildlife mornings",
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "safari",
    regionLabel: "Tanzania Mainland",
    eyebrow: "The endless plain",
    summary:
      "Africa’s most storied wilderness — migration, big cats, and light that seems to have no edge.",
    story:
      "The Serengeti is not a park you visit. It is a weather system of animals. We time journeys to the movement of the herds, stay in camps that disappear into the grass, and keep the days unhurried enough for the unexpected — a leopard in a sausage tree, a storm walking across the plain.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80",
    coords: { x: 18, y: 22, lat: -2.333, lng: 34.833 },
    highlights: ["Great Migration", "Big cats", "Horizon light"],
    stays: "serengeti-camp".split(","),
    experiences: "serengeti-safari".split(","),
    season: "Migration: July – October north · December – March south",
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro",
    region: "safari",
    regionLabel: "Tanzania Mainland",
    eyebrow: "The crater world",
    summary:
      "A collapsed caldera holding one of the densest concentrations of wildlife on earth.",
    story:
      "To descend into Ngorongoro is to enter a complete world. Black rhino move through soda-lake flats. Lions rest on the crater floor as if it were a private garden. We pair it with the highlands — Maasai country, cool air, and nights that smell of woodsmoke and cedar.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=80",
    coords: { x: 22, y: 32, lat: -3.163, lng: 35.588 },
    highlights: ["Crater floor", "Black rhino", "Highland air"],
    stays: "crater-lodge".split(","),
    experiences: "ngorongoro-safari".split(","),
    season: "June – October for clarity; green season has its own drama",
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
  {
    id: "safari",
    label: "Mainland Safaris",
    copy: "Serengeti, Ngorongoro, Tarangire and Kilimanjaro country.",
  },
];
