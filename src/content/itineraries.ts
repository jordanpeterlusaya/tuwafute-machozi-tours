export type Itinerary = {
  slug: string;
  name: string;
  days: number;
  image: string;
  summary: string;
  who: string;
  daysPlan: { title: string; copy: string; experienceSlug: string }[];
};

/**
 * Editorial examples assembled from excursions in the supplied guide.
 * They are not packages from the PDF and carry no bundled price or inclusions.
 */
export const itineraries: Itinerary[] = [
  {
    slug: "zanzibar-essential",
    name: "North, Heritage & Reef",
    days: 7,
    image: "/images/places/stone-town.jpg",
    summary:
      "An editorial seven-day sequence combining seven individual excursions from the guide.",
    who: "A sample composition only — not an official guide package",
    daysPlan: [
      {
        title: "Stone Town Heritage Tour",
        copy: "Historic Old Town streets, Swahili architecture, markets and cultural landmarks.",
        experienceSlug: "stone-town",
      },
      {
        title: "Spice Farm Tour",
        copy: "A guided introduction to cloves, vanilla, cinnamon, cardamom and other tropical plants.",
        experienceSlug: "spice-farm",
      },
      {
        title: "Prison Island",
        copy: "Island history, giant Aldabra tortoises and surrounding snorkeling waters.",
        experienceSlug: "prison-island",
      },
      {
        title: "Nungwi Beach & Village",
        copy: "Northern white sand, turquoise water, sunset views and local atmosphere.",
        experienceSlug: "nungwi-beach",
      },
      {
        title: "Mnemba Island Marine Experience",
        copy: "Clear water, reef life, sandbanks and possible dolphin spotting.",
        experienceSlug: "mnemba",
      },
      {
        title: "Mkokotoni & North Coast Villages",
        copy: "Fishing communities and a quieter side of northern Zanzibar.",
        experienceSlug: "mkokotoni",
      },
      {
        title: "Kendwa Beach & Sunset",
        copy: "Wide sand, swimming, sunset and evening atmosphere.",
        experienceSlug: "kendwa-sunset",
      },
    ],
  },
  {
    slug: "east-and-south",
    name: "East Coast & Wild South",
    days: 6,
    image: "/images/places/paje-beach.jpg",
    summary:
      "An editorial six-day sequence of east- and south-coast excursions from the guide.",
    who: "A sample composition only — weather and sea conditions still govern",
    daysPlan: [
      {
        title: "Paje Beach",
        copy: "A palm-fringed east-coast beach for swimming, relaxing and kitesurfing.",
        experienceSlug: "paje-beach",
      },
      {
        title: "Kite Surfing Experience",
        copy: "Try or watch Zanzibar’s signature water sport on the Paje and Jambiani coast.",
        experienceSlug: "kite-surfing",
      },
      {
        title: "Jambiani Village",
        copy: "Coastal life, local culture, fishing and the south-eastern shore.",
        experienceSlug: "jambiani-village",
      },
      {
        title: "Kuza Cave",
        copy: "A natural limestone cave with clear underground water and tropical vegetation.",
        experienceSlug: "kuza-cave",
      },
      {
        title: "Kizimkazi Village & Old Mosque",
        copy: "A historic coastal settlement with fishing and maritime culture.",
        experienceSlug: "kizimkazi-mosque",
      },
      {
        title: "Menai Bay Conservation Area",
        copy: "Protected waters, islands, sandbanks and marine life by guided boat.",
        experienceSlug: "menai-bay",
      },
    ],
  },
  {
    slug: "honeymoon-light",
    name: "Coast, Caves & Dhow",
    days: 8,
    image: "/images/places/kendwa-sunset.jpg",
    summary:
      "An editorial eight-day sequence using only named excursions from the supplied guide.",
    who: "A sample composition only — each excursion is requested separately",
    daysPlan: [
      {
        title: "Kendwa Beach & Sunset",
        copy: "Wide sand, swimming and a northern sunset.",
        experienceSlug: "kendwa-sunset",
      },
      {
        title: "Sunset Dhow Cruise",
        copy: "A traditional dhow sail with ocean breeze and Zanzibar sunset.",
        experienceSlug: "sunset-dhow",
      },
      {
        title: "The Rock Restaurant",
        copy: "The iconic oceanfront restaurant on its small rock in the sea.",
        experienceSlug: "the-rock",
      },
      {
        title: "Michamvi & Chwaka Bay",
        copy: "Quiet beaches, mangroves, coastal landscapes and bay views.",
        experienceSlug: "michamvi-chwaka-bay",
      },
      {
        title: "Kuza Cave",
        copy: "Clear underground water in a natural limestone cave.",
        experienceSlug: "kuza-cave",
      },
      {
        title: "Maalum Cave",
        copy: "A natural cave swim surrounded by tropical vegetation.",
        experienceSlug: "maalum-cave",
      },
      {
        title: "Stone Town Heritage Tour",
        copy: "Old Town streets, architecture, markets and cultural landmarks.",
        experienceSlug: "stone-town",
      },
      {
        title: "Nungwi Beach & Village",
        copy: "The northern coastline, village atmosphere and sunset views.",
        experienceSlug: "nungwi-beach",
      },
    ],
  },
];

export function getItinerary(slug: string) {
  return itineraries.find((item) => item.slug === slug);
}
