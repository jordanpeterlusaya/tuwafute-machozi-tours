export type Safari = {
  slug: string;
  name: string;
  region: string;
  image: string;
  summary: string;
  details: string;
  highlights: string[];
};

/**
 * Mainland Tanzania journeys requested by the house.
 * These are not transcribed from the Zanzibar Excursions & Experiences Guide.
 * Prices, durations and inclusions are given on request.
 */
export const safaris: Safari[] = [
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    region: "Northern circuit",
    image: "/images/safaris/serengeti.jpg",
    summary:
      "Open-plains game drives across Tanzania’s most famous park — wildebeest, lion country, and the scale of the migration season.",
    details:
      "The Serengeti is the classic northern-circuit day: vast grassland, predator country, and herds that rewrite the horizon when the migration is moving. We arrange this as a mainland journey from the Zanzibar house — fly or connect via Arusha — with a private vehicle and guiding confirmed for your dates. Wildlife is never guaranteed. This offering is not listed in the Zanzibar Excursions Guide; price, lodge style and number of nights are set with you.",
    highlights: [
      "Game drives on the open plains",
      "Migration season when timing allows",
      "Private vehicle arranged for your party",
    ],
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    region: "Northern circuit",
    image: "/images/safaris/ngorongoro.jpg",
    summary:
      "Descend the conservation area into the crater floor — a compact, high-density wildlife theatre beneath the rim.",
    details:
      "Ngorongoro Conservation Area holds the world’s best-known intact volcanic caldera. A crater day is slower than a Serengeti sweep: one descent, a floor of grassland and lake, and a density of animals that makes the hour feel close. Permits, rim timing and vehicle access are arranged for your party. This is a requested mainland journey, not a Zanzibar PDF excursion. Ask for current crater fees and the night before on the rim or nearby.",
    highlights: [
      "Crater-floor game drive",
      "Rim viewpoints above the caldera",
      "Conservation-area permits arranged",
    ],
  },
  {
    slug: "tarangire",
    name: "Tarangire National Park",
    region: "Northern circuit",
    image: "/images/safaris/tarangire.jpg",
    summary:
      "Baobab country and elephant herds along the Tarangire River — the third park of a classic northern circuit.",
    details:
      "Tarangire is the northern circuit’s elephant and baobab park: riverine woodland, dry-season congregations, and a landscape that feels different from Serengeti’s open grass. It pairs naturally with Ngorongoro and the Serengeti when guests want three parks rather than two. We do not invent lodge names or published rates here. Request the current circuit that fits your dates after Zanzibar.",
    highlights: [
      "Elephant herds and baobab skyline",
      "River and woodland game drives",
      "Pairs with Serengeti and Ngorongoro",
    ],
  },
  {
    slug: "kilimanjaro",
    name: "Mount Kilimanjaro trek",
    region: "Northern Tanzania",
    image: "/images/safaris/kilimanjaro.jpg",
    summary:
      "A guided climb of Africa’s highest mountain — route, days and support crew confirmed for your fitness and season.",
    details:
      "Kilimanjaro is a trek, not a game park: successive climate zones, a support crew, and a summit attempt that depends on weather and acclimatisation. The house arranges this as a mainland journey after or before Zanzibar — it is not in the island excursions guide. We do not publish a single route or a fixed price. Tell us the number of days you can give, and we will propose an honest route and crew.",
    highlights: [
      "Guided route chosen for your days",
      "Porter and guide crew on request",
      "Summit attempt subject to conditions",
    ],
  },
];

export function getSafari(slug: string) {
  return safaris.find((item) => item.slug === slug);
}
