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
  details: string;
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
    image: "/images/places/nungwi-beach.jpg",
    summary:
      "Enjoy Zanzibar’s famous northern coastline, beautiful white sand, turquoise water, sunset views and the lively local atmosphere.",
    details:
      "Nungwi sits at the island’s northern tip, where the sand stays pale and the water holds its colour through the day. Village life and the beach share one shoreline: fishing boats, evening walks, and a sunset that guests come specifically to see.",
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
    image: "/images/places/kendwa-sunset.jpg",
    summary:
      "A relaxed beach escape known for its wide sandy beach, swimming, spectacular sunsets and evening atmosphere.",
    details:
      "Kendwa is the quieter northern sister: a broad beach made for swimming and an unhurried dusk. We use it when guests want the same Indian Ocean light as Nungwi, with more space to sit still.",
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
    image: "/images/places/nungwi-turtles.jpg",
    summary:
      "Visit a conservation sanctuary where you can learn about and observe rescued sea turtles and marine protection.",
    details:
      "The Nungwi sanctuary is a place of rescue and teaching. Guests meet the work behind the postcard: injured turtles, rehabilitation, and the slower ethics of marine protection on a working coast.",
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
    image: "/images/places/mnemba.jpg",
    summary:
      "Explore one of Zanzibar’s best-known marine areas with snorkeling, clear water, colorful reef life, sandbanks and dolphin-spotting opportunities.",
    details:
      "Mnemba is a marine morning: reef colour, sandbanks and the chance of dolphins in open water. The pin on the map is a representative marine area; the exact boat line follows the sea and the skipper.",
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
    image: "/images/places/dolphin-north.jpg",
    summary:
      "Head out by boat in search of dolphins and enjoy a memorable morning on the Indian Ocean, with responsible wildlife viewing recommended.",
    details:
      "A northern boat morning in search of dolphins. Wildlife is never guaranteed. Responsible viewing means distance, no chasing, and turning for home when the sea or the animals ask for it.",
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
    image: "/images/places/mkokotoni.jpg",
    summary:
      "Discover local coastal life, traditional fishing communities and a quieter side of northern Zanzibar.",
    details:
      "Mkokotoni and the working north-coast villages sit away from the resort strip. This is fishing life, harbour traffic and a slower introduction to how the island still earns its living from the sea.",
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
    image: "/images/places/paje-beach.jpg",
    summary:
      "A beautiful palm-fringed beach ideal for swimming, relaxing, kitesurfing and enjoying the laid-back east-coast atmosphere.",
    details:
      "Paje is the east-coast lagoon: palms, a long pale beach, and wind that turns the sky into a kite field in season. At low tide the water withdraws and the walk becomes part of the day.",
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
    image: "/images/places/jambiani-village.jpg",
    summary:
      "Experience authentic coastal life, local culture, traditional fishing and the peaceful beauty of the south-eastern coast.",
    details:
      "Jambiani is village first, beach second. Fishing, seaweed plots at low tide, and a pace that still belongs to the south-east. It is one of the most honest hours on the island.",
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
    image: "/images/places/kuza-cave.jpg",
    summary:
      "Explore a natural limestone cave with clear underground water and a tranquil setting surrounded by tropical vegetation.",
    details:
      "Kuza is a limestone chamber of still water under tropical shade. Guests come to swim, listen, and step out of the heat. Bring a swimsuit; the cave sets the hour, not the clock.",
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
    image: "/images/places/the-rock.jpg",
    summary:
      "Visit Zanzibar’s iconic oceanfront restaurant, dramatically positioned on a small rock in the sea, for a memorable dining experience.",
    details:
      "The Rock sits on a stone in the sea off Pingwe. You walk or take a boat depending on the tide. The meal is booked separately; we handle the timing so the crossing is part of the theatre, not a scramble.",
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
    image: "/images/places/michamvi-chwaka-bay.jpg",
    summary:
      "Enjoy scenic coastal landscapes, quiet beaches, mangroves and beautiful views around the bay.",
    details:
      "Michamvi and Chwaka Bay are the quieter east: mangrove edges, still water and long views across the bay. The pin marks the area, not a single jetty.",
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
    image: "/images/places/blue-lagoon.jpg",
    summary:
      "Discover colorful coral, tropical fish and clear shallow waters in one of the east coast’s popular snorkeling areas.",
    details:
      "Blue Lagoon is a shallow snorkel hour: coral gardens, tropical fish and water you can read from the surface. Coral is living. No standing on reef.",
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
    image: "/images/places/kite-surfing.jpg",
    summary:
      "Try or watch one of Zanzibar’s signature water sports along the windy beaches of Paje and Jambiani.",
    details:
      "Kite season belongs to the east-coast wind. Guests can take a lesson or simply watch the lagoon fill with colour. Conditions are confirmed the evening before.",
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
    image: "/images/places/kizimkazi-dolphin.jpg",
    summary:
      "Explore the southern coast by boat, with opportunities for dolphin spotting and swimming in the Indian Ocean when conditions allow.",
    details:
      "From Kizimkazi the southern waters open toward dolphins. Swimming is offered only when the sea allows. We do not crowd pods and we do not chase.",
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
    image: "/images/places/kizimkazi-mosque.jpg",
    summary:
      "Discover one of Zanzibar’s historic coastal settlements and learn about its long connection with fishing and maritime culture.",
    details:
      "Kizimkazi Dimbani holds a historic mosque and a fishing memory older than tourism. Shoulders and knees covered. The visit is cultural, not a performance.",
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
    image: "/images/places/mtende.jpg",
    summary:
      "Visit a dramatic and less-developed southern beach known for striking rock formations, turquoise water and beautiful scenery.",
    details:
      "Mtende is rock, turquoise water and almost no crowd. Shade is limited. It is the south without a soundtrack — bring sun protection and time.",
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
    image: "/images/places/maalum-cave.jpg",
    summary:
      "Enjoy a natural swimming experience in a beautiful cave surrounded by lush tropical vegetation.",
    details:
      "Maalum is a natural cave swim held in tropical vegetation. Light falls from above. Not suitable for non-swimmers without flotation.",
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
    image: "/images/places/menai-bay.jpg",
    summary:
      "Explore protected coastal waters, islands, sandbanks and marine life through a guided boat experience.",
    details:
      "Menai Bay is a conservation area of islands, sandbanks and protected water. A guided boat day; seas are kindest in the dry months. Conservation rules travel with you.",
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
    image: "/images/places/pungume.jpg",
    summary:
      "Spend time on pristine sandbanks and clear waters, with opportunities for snorkeling, swimming and a private island-style escape.",
    details:
      "Pungume is sandbank light: clear water, snorkel and the feeling of a private island for a tide window. The day is designed around the water, not a clock.",
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
    image: "/images/places/stone-town.jpg",
    summary:
      "Walk through Zanzibar’s historic Old Town, exploring narrow streets, Swahili architecture, historic buildings, markets and cultural landmarks.",
    details:
      "Stone Town is a living archive: carved doors, coral-stone lanes, rooftops and the call to prayer. We walk it at the cooler hours. Wear shoes that can take uneven alleys.",
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
    image: "/images/places/spice-farm.jpg",
    summary:
      "Discover Zanzibar’s famous spice heritage with a guided visit to a farm where you can see, smell and learn about cloves, vanilla, cinnamon, cardamom and other tropical plants.",
    details:
      "The spice farm is why the world once called this the Spice Island. Clove, vanilla, cinnamon, cardamom — walked with a grower, smelled and tasted, not performed.",
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
    image: "/images/places/prison-island.jpg",
    summary:
      "Take a boat across the sea to explore the island’s history, visit the giant Aldabra tortoises and enjoy snorkeling in the surrounding waters.",
    details:
      "Changuu — Prison Island — is a short crossing from Stone Town: colonial history, giant Aldabra tortoises, and a snorkel if the reef is clear. Sanctuary rules apply.",
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
    image: "/images/places/forodhani.jpg",
    summary:
      "Experience the atmosphere of Stone Town’s waterfront and discover Zanzibar’s popular evening food scene.",
    details:
      "Forodhani is Stone Town’s waterfront at night: smoke, spice, grilled seafood and the island’s most democratic theatre. Evenings only.",
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
    image: "/images/places/darajani.jpg",
    summary:
      "Explore one of Stone Town’s main markets and experience local produce, spices, seafood, fabrics and everyday island life.",
    details:
      "Darajani is the everyday island at full volume: produce, spices, seafood and fabric. Mornings are freshest. A guide helps you listen as much as buy.",
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
    image: "/images/places/house-of-wonders.jpg",
    summary:
      "Discover the historic heart of Stone Town and learn about Zanzibar’s rich cultural and trading history.",
    details:
      "The House of Wonders and Old Fort mark the ceremonial heart of Stone Town. Some interiors have seasonal opening times; the streets around them are the living museum.",
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
    image: "/images/places/jozani.jpg",
    summary:
      "Walk through Zanzibar’s famous forest and look for the endemic Zanzibar red colobus monkey while learning about the island’s unique ecosystem.",
    details:
      "Jozani is the island’s green interior: endemic red colobus, a ranger-led walk, and a reminder that Zanzibar is also a forest. Keep distance. No feeding.",
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
    image: "/images/places/mangrove.jpg",
    summary:
      "Explore coastal mangroves by guided walk or boat and learn about these important ecosystems and their role in protecting Zanzibar’s shoreline.",
    details:
      "Mangroves are the living architecture that protects the shore and shelters fish. Walk or boat with a guide. Mosquito protection is wise near dusk.",
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
    image: "/images/places/sunset-dhow.jpg",
    summary:
      "Sail along the coast on a traditional dhow while enjoying the ocean breeze and a beautiful Zanzibar sunset.",
    details:
      "A traditional dhow along the Stone Town waterfront as the wind softens. The luxury is the lateen sail and the hour when the engine is not invited.",
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
