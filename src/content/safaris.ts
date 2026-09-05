export type Safari = {
  slug: string;
  name: string;
  days: number;
  priceFrom: number;
  image: string;
  summary: string;
  story: string;
  parks: string[];
  rhythm: string[];
  best: string;
};

export const safaris: Safari[] = [
  {
    slug: "serengeti-classic",
    name: "Serengeti Classic",
    days: 5,
    priceFrom: 2850,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80",
    summary:
      "A five-day immersion in the Serengeti — migration timing, big-cat country, and camps that vanish into the grass.",
    story:
      "We fly or drive in, then slow down. Game drives are designed around light and movement, not a checklist. Evenings return to canvas, fire, and the sound of the plain thinking aloud.",
    parks: ["Serengeti National Park"],
    rhythm: [
      "Arrival and afternoon light drive",
      "Full day in the central or northern herds",
      "Dawn search for cats",
      "Picnic in the kopjes",
      "Final sunrise and flight to Zanzibar or Arusha",
    ],
    best: "July–October north · Dec–March south",
  },
  {
    slug: "ngorongoro-crater",
    name: "Ngorongoro & Highlands",
    days: 3,
    priceFrom: 1650,
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Descend into the crater world, then sleep in the cool highlands above it.",
    story:
      "One of the most complete wildlife theatres on earth, held inside a caldera. We keep the crater day unhurried and pair it with a highland night — cedar, mist, and Maasai country.",
    parks: ["Ngorongoro Conservation Area"],
    rhythm: [
      "Highlands arrival",
      "Full crater descent",
      "Optional Maasai village or Empakaai",
    ],
    best: "June–October for clarity",
  },
  {
    slug: "tarangire-manyara",
    name: "Tarangire & Manyara",
    days: 3,
    priceFrom: 1420,
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Baobab valleys, elephant congregations, and the soda-lake flamingos of Lake Manyara.",
    story:
      "Tarangire is elephant country beneath ancient baobabs. Manyara is a quieter, forested Rift Valley lake. Together they make a graceful overture to a longer northern circuit — or a complete short safari from Zanzibar.",
    parks: ["Tarangire National Park", "Lake Manyara"],
    rhythm: [
      "Tarangire afternoon",
      "Baobab and river drive",
      "Manyara forest and lake",
    ],
    best: "June–October dry season",
  },
  {
    slug: "northern-circuit",
    name: "The Northern Circuit",
    days: 8,
    priceFrom: 4600,
    image:
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1800&q=80",
    summary:
      "Tarangire, Ngorongoro and the Serengeti in a single, beautifully paced journey.",
    story:
      "The classic Tanzania safari, edited for comfort and meaning. We refuse the rushed circuit. Days have room for a long breakfast, a nap, a second drive, and the unexpected.",
    parks: ["Tarangire", "Ngorongoro", "Serengeti"],
    rhythm: [
      "Tarangire elephants and baobabs",
      "Crater descent",
      "Serengeti arrival",
      "Two full days on the plain",
      "Departure via Arusha or Zanzibar",
    ],
    best: "June–October · January–February",
  },
  {
    slug: "zanzibar-safari-bridge",
    name: "Island to Savannah",
    days: 6,
    priceFrom: 3200,
    image: "/images/hero-resort.jpg",
    summary:
      "The Tuwafute signature: three nights of Zanzibar light, then a flight inland to the Serengeti or crater.",
    story:
      "Begin in salt air. End in grass. This is how we believe Tanzania should be felt — ocean first, then the deep interior, with a thread of social impact running through both.",
    parks: ["Zanzibar", "Serengeti or Ngorongoro"],
    rhythm: [
      "Stone Town and spice",
      "Northern beach or dhow",
      "Flight to safari",
      "Two nights in camp",
      "Return to the island or home",
    ],
    best: "Year-round with seasonal park pairing",
  },
];

export function getSafari(slug: string) {
  return safaris.find((item) => item.slug === slug);
}
