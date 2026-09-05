export type Itinerary = {
  slug: string;
  name: string;
  days: number;
  image: string;
  summary: string;
  who: string;
  daysPlan: { title: string; copy: string }[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "zanzibar-essential",
    name: "The Island Essential",
    days: 7,
    image: "/images/hero-nungwi.jpg",
    summary:
      "Stone Town, spice, forest, and a northern beach — Zanzibar composed as a single, elegant week.",
    who: "First visitors, couples, unhurried families",
    daysPlan: [
      { title: "Arrival · Stone Town", copy: "Land, breathe, and walk the old town as the light falls. Rooftop dinner." },
      { title: "Heritage & spice", copy: "Morning alleys, afternoon spice farm, evening Forodhani if you wish." },
      { title: "Prison Island or dhow", copy: "A short crossing, tortoises, snorkel — or a private sail." },
      { title: "Northward", copy: "Transfer to Nungwi or Kendwa. The ocean becomes the day’s only appointment." },
      { title: "Mnemba or turtles", copy: "A marine morning, a sanctuary hour, a long sunset." },
      { title: "Village & stillness", copy: "Mkokotoni or simply the beach. We leave space on purpose." },
      { title: "Departure", copy: "A last swim if the flight allows. Transfer with time, never haste." },
    ],
  },
  {
    slug: "east-and-south",
    name: "Wind & Wild South",
    days: 6,
    image: "/images/hero-adventure.jpg",
    summary:
      "Paje’s lagoon, Jambiani’s village, caves, and a Menai Bay sandbank day.",
    who: "Active travellers, photographers, kite season guests",
    daysPlan: [
      { title: "Paje arrival", copy: "Settle into the east. Tide walk at dusk." },
      { title: "Kite or Kuza", copy: "Wind lesson, or the cave’s still water." },
      { title: "Jambiani", copy: "Village host, seaweed gardens, The Rock at the right tide." },
      { title: "South", copy: "Kizimkazi mosque, Mtende’s empty beach." },
      { title: "Menai or Pungume", copy: "A full boat day of sandbanks and snorkel." },
      { title: "Slow morning", copy: "Depart, or add a night in Stone Town." },
    ],
  },
  {
    slug: "ocean-and-plain",
    name: "Ocean & Plain",
    days: 10,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80",
    summary:
      "The house signature — Zanzibar’s coast, then the Serengeti or Ngorongoro, with a community visit woven in.",
    who: "Guests who want Tanzania whole",
    daysPlan: [
      { title: "Stone Town", copy: "Arrive. Heritage walk. Sleep in a merchant house." },
      { title: "Spice & Jozani", copy: "The island’s interior — scent and forest." },
      { title: "North coast", copy: "Nungwi light. Sunset dhow." },
      { title: "Marine day", copy: "Mnemba or a private sandbank." },
      { title: "Impact morning", copy: "A community visit — not a performance, a conversation." },
      { title: "Fly inland", copy: "Serengeti or crater highlands." },
      { title: "Safari I", copy: "Light and movement. No checklist." },
      { title: "Safari II", copy: "A second full day. The unexpected is the point." },
      { title: "Safari III", copy: "Dawn drive. Picnic. Last fire." },
      { title: "Return", copy: "Zanzibar swim or Arusha departure." },
    ],
  },
  {
    slug: "honeymoon-light",
    name: "Honeymoon Light",
    days: 8,
    image: "/images/resort-palms.jpg",
    summary:
      "Privacy, tide tables, a private dhow, and one perfect restaurant in the sea.",
    who: "Couples, newlyweds, anniversary travellers",
    daysPlan: [
      { title: "Villa arrival", copy: "Champagne, a still beach, no itinerary on the first night." },
      { title: "Do nothing well", copy: "Spa, swim, sleep. We protect this day." },
      { title: "Private dhow", copy: "Just the two of you and a lateen sail." },
      { title: "The Rock", copy: "A tide-timed lunch on the water." },
      { title: "Cave swim", copy: "Kuza or Maalum — mineral, cool, quiet." },
      { title: "Stone Town night", copy: "One evening of alleys and rooftops." },
      { title: "North sunset", copy: "Kendwa’s wide sand and a long golden hour." },
      { title: "Leave slowly", copy: "A last breakfast facing the reef." },
    ],
  },
];

export function getItinerary(slug: string) {
  return itineraries.find((item) => item.slug === slug);
}
