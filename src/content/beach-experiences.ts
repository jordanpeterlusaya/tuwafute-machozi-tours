export type BeachExperience = {
  slug: string;
  name: string;
  category: "beach-experience";
  image: string;
  imageAlt: string;
  summary: string;
  details: string;
  notes: string[];
};

/**
 * House beach packages — not items from the 28-excursion PDF guide.
 * Kuza Cave and Maalum Cave remain in that guide as separate site visits.
 * This caves package covers Salaam, Kuza, Maalum and other caves together.
 * Prices are on request.
 */
export const beachExperiences: BeachExperience[] = [
  {
    slug: "catamaran-experience",
    name: "Catamaran experience",
    category: "beach-experience",
    image: "/images/beach/catamaran-experience.jpg",
    imageAlt:
      "A sailing boat with guests on deck in turquoise water off a small Zanzibar island",
    summary:
      "A private catamaran or sailing boat — swimming, shade on deck, a day set to the tide. Price on request.",
    details:
      "Tuwafute Machozi Tours arranges a catamaran experience for your party: time on the water, swimming when the sea allows, and a skipper who knows the local line. The vessel confirmed for your date may be a catamaran or a comparable sailing boat — we do not publish a fleet list here. Joseph Kitali’s team confirms the boat, pickup and sea state before you leave. This is not one of the twenty-eight PDF guide excursions.",
    notes: [
      "Price, duration and inclusions are confirmed for your date.",
      "Sea conditions can change the route or the hour we go out.",
    ],
  },
  {
    slug: "kayak-experience",
    name: "Kayak experience",
    category: "beach-experience",
    image: "/images/beach/kayak-experience.jpg",
    imageAlt: "A clear kayak with flowers on turquoise Zanzibar water",
    summary:
      "Paddle a lagoon or quiet coast. Clear kayaks for photographs when available. Price on request.",
    details:
      "A kayak hour on Zanzibar’s sheltered water — usually the east-coast lagoon, confirmed with you. We can request a clear kayak when you want photographs; standard kayaks are the everyday option. This is a guided outing, not a rental desk. Conditions depend on wind and tide. Not listed in the twenty-eight-destination PDF guide.",
    notes: [
      "Suitable for beginners when the lagoon is calm.",
      "Clear-kayak styling is arranged when available — ask in the request.",
    ],
  },
  {
    slug: "jetski-jet-car",
    name: "Jetski & jet car",
    category: "beach-experience",
    image: "/images/beach/jetski-jet-car.jpg",
    imageAlt:
      "An amphibious jet car in the shallows with a jet ski on the sand behind it",
    summary:
      "Jet ski and jet-car time when the sea allows. Price on request.",
    details:
      "Jet ski and jet car (amphibious water car) sessions are arranged on the island through operators we know — Tuwafute Machozi Tours does not own the machines. Availability, licence rules, age limits and sea state all decide the hour. We will not send you out in unsafe water. Ask Joseph Kitali’s team for the current price and which beach the session uses on your date.",
    notes: [
      "Depends on weather, sea conditions and operator availability.",
      "Safety briefing and local rules apply. Price on request.",
    ],
  },
  {
    slug: "drone-shoot-photography",
    name: "Drone shoot & photography",
    category: "beach-experience",
    image: "/images/beach/drone-shoot-photography.jpg",
    imageAlt:
      "Aerial view of a sailing boat and sandbank in clear turquoise water",
    summary:
      "A photographer and, where rules allow, a drone shoot. Price on request.",
    details:
      "We arrange a photographer for beach, boat or sandbank work, and a drone shoot where local rules allow. Permissions, no-fly zones and weather decide whether the drone flies. Still photographs can still be made if the drone stays grounded. This is a booking we make for you — not a studio we own. Share the occasion and preferred coast in the request.",
    notes: [
      "Drone flights follow local rules and weather. Not always possible.",
      "Location, length of the session and delivery of files are confirmed with you.",
    ],
  },
  {
    slug: "proposal-small-events",
    name: "Proposal & small events",
    category: "beach-experience",
    image: "/images/beach/proposal-small-events.jpg",
    imageAlt: "A couple standing together on a sailing boat over turquoise water",
    summary:
      "Proposals, birthdays and small celebrations on the beach or on the water. Price on request.",
    details:
      "We help plan a proposal or a small event — birthday, anniversary, a quiet gathering — with flowers, a boat, a beach hour or a photographer as you ask. These are small events, not hotel weddings or nightclub hire. Venues and décor are arranged with partners; Tuwafute Machozi Tours coordinates, it does not own the beach clubs or restaurants. Tell us the date, the size of the party and how private you need it to be.",
    notes: [
      "Birthdays and small events only — not large conferences.",
      "Setup, flowers and photography are priced for your brief.",
    ],
  },
  {
    slug: "horse-riding",
    name: "Horse riding",
    category: "beach-experience",
    image: "/images/beach/horse-riding.jpg",
    imageAlt: "Two riders on horseback along a white tropical beach",
    summary:
      "Horse riding on the beach or inland trails, booked with island stables. Price on request.",
    details:
      "Horse riding is booked through stables on the island — beach rides or quieter inland trails depending on the horses, the tide and your experience. Helmets and a guide are part of a proper ride. Tuwafute Machozi Tours arranges the booking; we do not keep our own horses. Weight limits, age and riding level are confirmed before the hour. This package is not in the PDF excursions guide.",
    notes: [
      "Level, duration and beach versus inland trail are confirmed with the stable.",
      "Availability depends on the horses and the tide, not a published timetable.",
    ],
  },
  {
    slug: "caves-experience",
    name: "Caves experience",
    category: "beach-experience",
    image: "/images/beach/caves-experience.jpg",
    imageAlt:
      "A limestone cave pool with clear turquoise water under a rock overhang",
    summary:
      "Salaam, Kuza, Maalum and other cave pools when they are open. Price on request.",
    details:
      "This is a Beach Experience package: Salaam Cave, Kuza Cave, Maalum Cave, and other caves we can include for your date. Kuza Cave and Maalum Cave also appear as separate site visits in the twenty-eight-excursion PDF guide; this package is the combined caves day, not a replacement of those listings. Swimming is in natural water. Non-swimmers need flotation. Opening hours and conservation rules belong to each site — we confirm them before you go.",
    notes: [
      "Named caves: Salaam Cave, Kuza Cave, Maalum Cave, plus others when open.",
      "Does not remove Kuza or Maalum from the PDF excursion catalog.",
    ],
  },
  {
    slug: "beach-clubs",
    name: "Beach clubs recommending",
    category: "beach-experience",
    image: "/images/beach/beach-clubs.jpg",
    imageAlt:
      "Palm-lined beach club with daybeds, umbrellas and a lagoon-style pool to the coast",
    summary:
      "Days at clubs such as Nanasi and Le Saint Lopez — we book, we do not own them. Price on request.",
    details:
      "Nanasi, Le Saint Lopez, and similar beach clubs on the island are independent venues. Tuwafute Machozi Tours recommends, books a table or daybed when the club accepts it, and handles transfer. Entry, food and minimum spend belong to the club, not to us. Availability changes with season and private events. Ask for current options that match your coast and the size of your party.",
    notes: [
      "Recommendations and arrangements only — not owned venues.",
      "Club prices, dress codes and opening hours are set by each venue.",
    ],
  },
  {
    slug: "transfer-services",
    name: "Transfer services 24hr",
    category: "beach-experience",
    image: "/images/beach/transfer-services.jpg",
    imageAlt: "A white transfer van used for airport and hotel pickups",
    summary:
      "Airport, hotel and inter-coast transfers, twenty-four hours. Price on request.",
    details:
      "Transfers run around the clock: Abeid Amani Karume Airport, Stone Town, the north and east coasts, and other island points. We use cars that are actually available that day — saloon, minibus, 4×4 or similar — rather than promising a single fleet photograph. Night arrivals are normal. Share flight numbers, hotel names and how many bags you carry so Joseph Kitali’s team can price the right vehicle.",
    notes: [
      "24-hour service. Any car type available on the island for your party size.",
      "Quoted per route and vehicle, not as a published tariff.",
    ],
  },
];

export function getBeachExperience(slug: string) {
  return beachExperiences.find((item) => item.slug === slug);
}
