export type ExperienceRegion = "north" | "east" | "south" | "west-central";

export type ExperienceCategory =
  | "coast"
  | "marine"
  | "culture"
  | "nature"
  | "adventure";

export type Experience = {
  slug: string;
  name: string;
  region: ExperienceRegion;
  regionLabel: string;
  category: ExperienceCategory;
  image: string;
  summary: string;
  destination: string;
  coordinates: {
    lat: number;
    lng: number;
    label: string;
    precision: "site" | "locality" | "area" | "departure";
  };
};

export const experienceRegions: {
  id: ExperienceRegion;
  label: string;
  expectedCount: number;
}[] = [
  { id: "north", label: "North Zanzibar", expectedCount: 6 },
  { id: "east", label: "East Coast Zanzibar", expectedCount: 7 },
  { id: "south", label: "South Zanzibar", expectedCount: 6 },
  { id: "west-central", label: "West & Central Zanzibar", expectedCount: 9 },
];

/**
 * Canonical catalog transcribed from the seven-page Zanzibar Excursions &
 * Experiences Guide supplied to the project. The guide provides no prices,
 * durations, inclusions, packages, or availability guarantees.
 *
 * Named sites and localities were checked against OpenStreetMap place data.
 * Pins marked "area" or "departure" are honest reference points for
 * experiences that do not have one fixed on-land location.
 */
export const experiences: Experience[] = [
  {
    slug: "nungwi-beach",
    name: "Nungwi Beach & Village",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "coast",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Enjoy Zanzibar’s famous northern coastline, beautiful white sand, turquoise water, sunset views and the lively local atmosphere.",
    destination: "nungwi",
    coordinates: {
      lat: -5.7272268,
      lng: 39.2992016,
      label: "Nungwi village and beachfront",
      precision: "locality",
    },
  },
  {
    slug: "kendwa-sunset",
    name: "Kendwa Beach & Sunset",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "coast",
    image: "/images/hero-resort.jpg",
    summary:
      "A relaxed beach escape known for its wide sandy beach, swimming, spectacular sunsets and evening atmosphere.",
    destination: "kendwa",
    coordinates: {
      lat: -5.7537979,
      lng: 39.2867377,
      label: "Kendwa beachfront",
      precision: "locality",
    },
  },
  {
    slug: "nungwi-turtles",
    name: "Nungwi Turtle Sanctuary",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "Visit a conservation sanctuary where you can learn about and observe rescued sea turtles and marine protection.",
    destination: "nungwi",
    coordinates: {
      lat: -5.72249,
      lng: 39.30271,
      label: "Mnarani marine turtle conservation area",
      precision: "site",
    },
  },
  {
    slug: "mnemba",
    name: "Mnemba Island Marine Experience",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "marine",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Explore one of Zanzibar’s best-known marine areas with snorkeling, clear water, colorful reef life, sandbanks and dolphin-spotting opportunities.",
    destination: "nungwi",
    coordinates: {
      lat: -5.8206139,
      lng: 39.3836917,
      label: "Mnemba Island marine area",
      precision: "area",
    },
  },
  {
    slug: "dolphin-north",
    name: "Dolphin Experience",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "marine",
    image: "/images/hero-adventure.jpg",
    summary:
      "Head out by boat in search of dolphins and enjoy a memorable morning on the Indian Ocean, with responsible wildlife viewing recommended.",
    destination: "nungwi",
    coordinates: {
      lat: -5.7249,
      lng: 39.3016,
      label: "Nungwi boat departure area",
      precision: "departure",
    },
  },
  {
    slug: "mkokotoni",
    name: "Mkokotoni & North Coast Villages",
    region: "north",
    regionLabel: "North Zanzibar",
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Discover local coastal life, traditional fishing communities and a quieter side of northern Zanzibar.",
    destination: "nungwi",
    coordinates: {
      lat: -5.8748653,
      lng: 39.2558883,
      label: "Mkokotoni",
      precision: "locality",
    },
  },
  {
    slug: "paje-beach",
    name: "Paje Beach",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "coast",
    image: "/images/hero-adventure.jpg",
    summary:
      "A beautiful palm-fringed beach ideal for swimming, relaxing, kitesurfing and enjoying the laid-back east-coast atmosphere.",
    destination: "paje",
    coordinates: {
      lat: -6.266745,
      lng: 39.534072,
      label: "Paje beachfront",
      precision: "locality",
    },
  },
  {
    slug: "jambiani-village",
    name: "Jambiani Village",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "culture",
    image: "/images/hero-resort.jpg",
    summary:
      "Experience authentic coastal life, local culture, traditional fishing and the peaceful beauty of the south-eastern coast.",
    destination: "jambiani",
    coordinates: {
      lat: -6.321892,
      lng: 39.546793,
      label: "Jambiani village",
      precision: "locality",
    },
  },
  {
    slug: "kuza-cave",
    name: "Kuza Cave",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "Explore a natural limestone cave with clear underground water and a tranquil setting surrounded by tropical vegetation.",
    destination: "jambiani",
    coordinates: {
      lat: -6.3038005,
      lng: 39.5333981,
      label: "Kuza Cave",
      precision: "site",
    },
  },
  {
    slug: "the-rock",
    name: "The Rock Restaurant",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "coast",
    image: "/images/hero-resort.jpg",
    summary:
      "Visit Zanzibar’s iconic oceanfront restaurant, dramatically positioned on a small rock in the sea, for a memorable dining experience.",
    destination: "paje",
    coordinates: {
      lat: -6.1519,
      lng: 39.5193,
      label: "The Rock, Pingwe",
      precision: "site",
    },
  },
  {
    slug: "michamvi-chwaka-bay",
    name: "Michamvi & Chwaka Bay",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "coast",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Enjoy scenic coastal landscapes, quiet beaches, mangroves and beautiful views around the bay.",
    destination: "paje",
    coordinates: {
      lat: -6.1445297,
      lng: 39.4955208,
      label: "Michamvi and Chwaka Bay area",
      precision: "area",
    },
  },
  {
    slug: "blue-lagoon",
    name: "Blue Lagoon Snorkeling",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "marine",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Discover colorful coral, tropical fish and clear shallow waters in one of the east coast’s popular snorkeling areas.",
    destination: "paje",
    coordinates: {
      lat: -6.1406461,
      lng: 39.5149761,
      label: "Blue Lagoon snorkeling area",
      precision: "area",
    },
  },
  {
    slug: "kite-surfing",
    name: "Kite Surfing Experience",
    region: "east",
    regionLabel: "East Coast Zanzibar",
    category: "adventure",
    image: "/images/jetski.jpg",
    summary:
      "Try or watch one of Zanzibar’s signature water sports along the windy beaches of Paje and Jambiani.",
    destination: "paje",
    coordinates: {
      lat: -6.266745,
      lng: 39.534072,
      label: "Paje and Jambiani kite coast",
      precision: "area",
    },
  },
  {
    slug: "kizimkazi-dolphin",
    name: "Kizimkazi Dolphin Excursion",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "marine",
    image: "/images/hero-adventure.jpg",
    summary:
      "Explore the southern coast by boat, with opportunities for dolphin spotting and swimming in the Indian Ocean when conditions allow.",
    destination: "kizimkazi",
    coordinates: {
      lat: -6.450169,
      lng: 39.4710186,
      label: "Kizimkazi Mkunguni boat departure area",
      precision: "departure",
    },
  },
  {
    slug: "kizimkazi-mosque",
    name: "Kizimkazi Village & Old Mosque",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Discover one of Zanzibar’s historic coastal settlements and learn about its long connection with fishing and maritime culture.",
    destination: "kizimkazi",
    coordinates: {
      lat: -6.4361303,
      lng: 39.4623692,
      label: "Kizimkazi Dimbani old mosque area",
      precision: "site",
    },
  },
  {
    slug: "mtende",
    name: "Mtende Beach",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "coast",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Visit a dramatic and less-developed southern beach known for striking rock formations, turquoise water and beautiful scenery.",
    destination: "kizimkazi",
    coordinates: {
      lat: -6.4616229,
      lng: 39.5395887,
      label: "Mtende Beach",
      precision: "site",
    },
  },
  {
    slug: "maalum-cave",
    name: "Maalum Cave",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "Enjoy a natural swimming experience in a beautiful cave surrounded by lush tropical vegetation.",
    destination: "paje",
    coordinates: {
      lat: -6.2774216,
      lng: 39.5303717,
      label: "Maalum Cave",
      precision: "site",
    },
  },
  {
    slug: "menai-bay",
    name: "Menai Bay Conservation Area",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "marine",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Explore protected coastal waters, islands, sandbanks and marine life through a guided boat experience.",
    destination: "kizimkazi",
    coordinates: {
      lat: -6.4007748,
      lng: 39.3323682,
      label: "Menai Bay Conservation Area",
      precision: "area",
    },
  },
  {
    slug: "pungume",
    name: "Pungume Island & Sandbank",
    region: "south",
    regionLabel: "South Zanzibar",
    category: "marine",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Spend time on pristine sandbanks and clear waters, with opportunities for snorkeling, swimming and a private island-style escape.",
    destination: "kizimkazi",
    coordinates: {
      lat: -6.42528,
      lng: 39.33667,
      label: "Pungume Island and nearby sandbanks",
      precision: "area",
    },
  },
  {
    slug: "stone-town",
    name: "Stone Town Heritage Tour",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Walk through Zanzibar’s historic Old Town, exploring narrow streets, Swahili architecture, historic buildings, markets and cultural landmarks.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1626528,
      lng: 39.1896552,
      label: "Stone Town",
      precision: "area",
    },
  },
  {
    slug: "spice-farm",
    name: "Spice Farm Tour",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/resort-palms.jpg",
    summary:
      "Discover Zanzibar’s famous spice heritage with a guided visit to a farm where you can see, smell and learn about cloves, vanilla, cinnamon, cardamom and other tropical plants.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1068864,
      lng: 39.2524734,
      label: "Kijichi spice-farm area",
      precision: "area",
    },
  },
  {
    slug: "prison-island",
    name: "Prison Island",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Take a boat across the sea to explore the island’s history, visit the giant Aldabra tortoises and enjoy snorkeling in the surrounding waters.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1192184,
      lng: 39.1660983,
      label: "Changuu (Prison) Island",
      precision: "site",
    },
  },
  {
    slug: "forodhani",
    name: "Forodhani Gardens",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/hero-resort.jpg",
    summary:
      "Experience the atmosphere of Stone Town’s waterfront and discover Zanzibar’s popular evening food scene.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1605962,
      lng: 39.1887981,
      label: "Forodhani Gardens",
      precision: "site",
    },
  },
  {
    slug: "darajani",
    name: "Darajani Market",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Explore one of Stone Town’s main markets and experience local produce, spices, seafood, fabrics and everyday island life.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1622107,
      lng: 39.1937312,
      label: "Darajani Market",
      precision: "site",
    },
  },
  {
    slug: "house-of-wonders",
    name: "House of Wonders & Old Fort Area",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Discover the historic heart of Stone Town and learn about Zanzibar’s rich cultural and trading history.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1609088,
      lng: 39.1896248,
      label: "House of Wonders and Old Fort area",
      precision: "site",
    },
  },
  {
    slug: "jozani",
    name: "Jozani Forest",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "Walk through Zanzibar’s famous forest and look for the endemic Zanzibar red colobus monkey while learning about the island’s unique ecosystem.",
    destination: "jozani",
    coordinates: {
      lat: -6.2624536,
      lng: 39.4150035,
      label: "Jozani Forest",
      precision: "area",
    },
  },
  {
    slug: "mangrove",
    name: "Mangrove Forest Experience",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "nature",
    image: "/images/hero-adventure.jpg",
    summary:
      "Explore coastal mangroves by guided walk or boat and learn about these important ecosystems and their role in protecting Zanzibar’s shoreline.",
    destination: "jozani",
    coordinates: {
      lat: -6.228119,
      lng: 39.4041533,
      label: "Jozani–Chwaka Bay National Park mangrove area",
      precision: "area",
    },
  },
  {
    slug: "sunset-dhow",
    name: "Sunset Dhow Cruise",
    region: "west-central",
    regionLabel: "West & Central Zanzibar",
    category: "coast",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Sail along the coast on a traditional dhow while enjoying the ocean breeze and a beautiful Zanzibar sunset.",
    destination: "stone-town",
    coordinates: {
      lat: -6.1605962,
      lng: 39.1887981,
      label: "Stone Town waterfront departure area",
      precision: "departure",
    },
  },
];

export const guideTravelNotes = [
  "Excursions are best planned according to weather, sea conditions and guest preferences.",
  "Marine and wildlife experiences should be conducted responsibly, respecting animals, coral reefs and protected areas.",
  "Some attractions have seasonal opening times or conservation requirements; confirm operational details before departure.",
  "Private and shared experiences can be arranged depending on the desired level of comfort and flexibility.",
] as const;

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}
