export type Experience = {
  slug: string;
  name: string;
  region: string;
  duration: string;
  priceFrom: number;
  category: "coast" | "marine" | "culture" | "nature" | "adventure";
  image: string;
  summary: string;
  details: string;
  includes: string[];
  notes: string;
  destination: string;
};

export const experiences: Experience[] = [
  {
    slug: "nungwi-beach",
    name: "Nungwi Beach & Village",
    region: "North Zanzibar",
    duration: "Half day",
    priceFrom: 45,
    category: "coast",
    image: "/images/hero-nungwi.jpg",
    summary:
      "The famous northern coastline — white sand, turquoise water, sunset light and the lively atmosphere of the village.",
    details:
      "Walk the curve of Nungwi, swim the clear shallows, and move through the village as the day cools. We keep the rhythm unhurried: beach, local lanes, and a sundowner where the dhows gather.",
    includes: ["Private guide", "Return transfers", "Sunset stop"],
    notes: "Best late afternoon. Tide dependent for the widest sand.",
    destination: "nungwi",
  },
  {
    slug: "kendwa-sunset",
    name: "Kendwa Beach & Sunset",
    region: "North Zanzibar",
    duration: "Half day",
    priceFrom: 40,
    category: "coast",
    image: "/images/hero-resort.jpg",
    summary:
      "A relaxed escape known for its wide beach, swimming, and a sunset that becomes the evening’s entire conversation.",
    details:
      "Kendwa holds its swimming water through the tides. We arrive as the heat softens, swim, and stay for the sky — a northern Zanzibar ritual done properly.",
    includes: ["Transfers", "Beach time", "Sunset seating"],
    notes: "Ideal for families and guests who prefer a quieter north.",
    destination: "kendwa",
  },
  {
    slug: "nungwi-turtles",
    name: "Nungwi Turtle Sanctuary",
    region: "North Zanzibar",
    duration: "2 hours",
    priceFrom: 25,
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "A conservation sanctuary where rescued sea turtles are protected, studied, and — when ready — returned to the ocean.",
    details:
      "Visit with a conservation briefing. Guests meet the work behind the postcard: rescue, rehabilitation, and the slower ethics of marine protection.",
    includes: ["Entrance", "Conservation briefing", "Guide"],
    notes: "A portion of every visit supports sanctuary work.",
    destination: "nungwi",
  },
  {
    slug: "mnemba",
    name: "Mnemba Island Marine Experience",
    region: "North Zanzibar",
    duration: "Full day",
    priceFrom: 160,
    category: "marine",
    image: "/images/nungwi-boats.jpg",
    summary:
      "One of Zanzibar’s finest marine theatres — reef colour, sandbanks, and the chance of dolphins in open water.",
    details:
      "A boat day into the Mnemba conservation area. Snorkel the reef, rest on a sandbank, and travel with skippers who know when to keep distance from wildlife.",
    includes: ["Boat", "Snorkel equipment", "Lunch", "Marine guide"],
    notes: "Responsible viewing only. No chasing of dolphins.",
    destination: "nungwi",
  },
  {
    slug: "dolphin-north",
    name: "Northern Dolphin Morning",
    region: "North Zanzibar",
    duration: "Half day",
    priceFrom: 90,
    category: "marine",
    image: "/images/hero-adventure.jpg",
    summary:
      "An early boat into the Indian Ocean in search of dolphins — memorable, and done with restraint.",
    details:
      "We leave at first light. If dolphins appear, we watch from a respectful distance. The morning remains beautiful even when the ocean keeps its secrets.",
    includes: ["Boat", "Captain & guide", "Light breakfast"],
    notes: "Wildlife is never guaranteed. Weather decides the route.",
    destination: "nungwi",
  },
  {
    slug: "mkokotoni",
    name: "Mkokotoni & North Coast Villages",
    region: "North Zanzibar",
    duration: "Half day",
    priceFrom: 55,
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Traditional fishing communities and a quieter north that most resort itineraries never reach.",
    details:
      "A cultural drive through the working coast — markets, boat yards, and conversations that belong to the island rather than the brochure.",
    includes: ["Guide", "Village visit", "Transfers"],
    notes: "Dress modestly in villages. Photography with permission.",
    destination: "nungwi",
  },
  {
    slug: "paje-beach",
    name: "Paje Beach",
    region: "East Coast",
    duration: "Half or full day",
    priceFrom: 40,
    category: "coast",
    image: "/images/hero-adventure.jpg",
    summary:
      "Palm-fringed east-coast sand — swimming, stillness, and the laid-back atmosphere that defines this shore.",
    details:
      "Time on Paje’s lagoon beach, with optional kite watching in season and long walks when the tide withdraws toward the reef.",
    includes: ["Transfers", "Beach club day pass on request"],
    notes: "Low tide reveals a vast walkable lagoon.",
    destination: "paje",
  },
  {
    slug: "jambiani-village",
    name: "Jambiani Village Walk",
    region: "East Coast",
    duration: "3 hours",
    priceFrom: 35,
    category: "culture",
    image: "/images/hero-resort.jpg",
    summary:
      "Coastal life as it is lived — fishing, seaweed farms, and the peaceful beauty of the south-east.",
    details:
      "Walk with a local host through Jambiani: homes, boats, and the seaweed gardens that appear at low tide like a second coastline.",
    includes: ["Village host", "Tasting stop", "Transfers"],
    notes: "Best at mid to low tide.",
    destination: "jambiani",
  },
  {
    slug: "kuza-cave",
    name: "Kuza Cave",
    region: "East Coast",
    duration: "2–3 hours",
    priceFrom: 30,
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "A limestone cave of clear underground water, wrapped in tropical shade.",
    details:
      "Descend into a still, mineral-blue pool. Swim, listen to the village story of the cave, and return to the heat with the feeling of having slipped into another century.",
    includes: ["Entrance", "Guide", "Transfers"],
    notes: "Bring a swimsuit and water shoes.",
    destination: "paje",
  },
  {
    slug: "the-rock",
    name: "The Rock Restaurant",
    region: "East Coast",
    duration: "Lunch",
    priceFrom: 85,
    category: "coast",
    image: "/images/hero-resort.jpg",
    summary:
      "Zanzibar’s iconic dining room — a restaurant set on a rock in the sea, reached by foot or boat depending on the tide.",
    details:
      "We time the reservation to the tide and the light. The meal is memorable; the crossing is the theatre.",
    includes: ["Reservation handling", "Transfers", "Tide planning"],
    notes: "Menu priced separately. Weather and tide can move the table time.",
    destination: "paje",
  },
  {
    slug: "blue-lagoon",
    name: "Blue Lagoon Snorkeling",
    region: "East Coast",
    duration: "Half day",
    priceFrom: 70,
    category: "marine",
    image: "/images/hero-nungwi.jpg",
    summary:
      "Shallow, clear water and coral gardens — one of the east coast’s most graceful snorkel hours.",
    details:
      "A guided snorkel in protected shallows. Colourful reef fish, easy swimming, and a picnic on the sand if the day allows.",
    includes: ["Boat or transfer", "Equipment", "Guide"],
    notes: "Coral is living. No standing on reef.",
    destination: "paje",
  },
  {
    slug: "kite-surfing",
    name: "Kite Surfing Experience",
    region: "East Coast",
    duration: "2–4 hours",
    priceFrom: 95,
    category: "adventure",
    image: "/images/jetski.jpg",
    summary:
      "Zanzibar’s signature wind sport along the beaches of Paje and Jambiani — try it, or simply watch the sky fill with colour.",
    details:
      "Lessons with certified instructors, or a spectator afternoon with a camera and a cold drink. The east coast wind is the real host.",
    includes: ["Instructor", "Equipment", "Safety briefing"],
    notes: "Seasonal winds. We confirm conditions the evening before.",
    destination: "paje",
  },
  {
    slug: "kizimkazi-dolphin",
    name: "Kizimkazi Dolphin Excursion",
    region: "South Zanzibar",
    duration: "Half day",
    priceFrom: 80,
    category: "marine",
    image: "/images/hero-adventure.jpg",
    summary:
      "A southern boat morning — dolphin waters, swimming when the sea allows, and a coastline of old fishing memory.",
    details:
      "Depart from Kizimkazi with skippers who work these waters daily. We follow a strict code: no crowding, no chasing, and the swim is optional.",
    includes: ["Boat", "Life jackets", "Guide"],
    notes: "Responsible viewing only. Conditions decide whether swimming is offered.",
    destination: "kizimkazi",
  },
  {
    slug: "kizimkazi-mosque",
    name: "Kizimkazi Village & Old Mosque",
    region: "South Zanzibar",
    duration: "2 hours",
    priceFrom: 30,
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "One of Zanzibar’s historic coastal settlements and a mosque that remembers the island’s earliest Islamic chapters.",
    details:
      "A quiet cultural hour: the village, the old mosque, and the long relationship between this coast and the sea.",
    includes: ["Guide", "Entrance where required"],
    notes: "Shoulders and knees covered.",
    destination: "kizimkazi",
  },
  {
    slug: "mtende",
    name: "Mtende Beach",
    region: "South Zanzibar",
    duration: "Half day",
    priceFrom: 55,
    category: "coast",
    image: "/images/hero-nungwi.jpg",
    summary:
      "A less-developed southern beach of rock drama, turquoise water, and almost no crowd.",
    details:
      "For guests who want the island without the soundtrack. Cliffs, clear water, and a picnic if you wish to stay through the afternoon.",
    includes: ["Transfers", "Guide", "Picnic on request"],
    notes: "Bring sun protection; shade is limited.",
    destination: "kizimkazi",
  },
  {
    slug: "maalum-cave",
    name: "Maalum Cave Swim",
    region: "South Zanzibar",
    duration: "2–3 hours",
    priceFrom: 35,
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "A natural swimming cave held in tropical vegetation — cool, mineral, and unexpectedly still.",
    details:
      "Swim in a collapsed limestone chamber. Light falls in from above. It is one of the south’s most intimate hours.",
    includes: ["Entrance", "Transfers"],
    notes: "Not suitable for non-swimmers without a flotation vest.",
    destination: "kizimkazi",
  },
  {
    slug: "menai-bay",
    name: "Menai Bay Conservation Area",
    region: "South Zanzibar",
    duration: "Full day",
    priceFrom: 140,
    category: "marine",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Protected waters, islands and sandbanks — a guided boat day through one of Zanzibar’s most important marine reserves.",
    details:
      "Sail or motor into Menai Bay. Snorkel, walk a sandbank, and eat lunch with your feet in the water. Conservation fees support the reserve.",
    includes: ["Boat", "Lunch", "Snorkel gear", "Park fees"],
    notes: "Seas are kindest from June to October.",
    destination: "kizimkazi",
  },
  {
    slug: "pungume",
    name: "Pungume Island & Sandbank",
    region: "South Zanzibar",
    duration: "Full day",
    priceFrom: 170,
    category: "marine",
    image: "/images/hero-nungwi.jpg",
    summary:
      "A private-island feeling: pristine sandbanks, snorkelling, and the luxury of having the horizon almost to yourself.",
    details:
      "We leave early, claim a sandbank while the tide is generous, and let the day become swimming, shade and silence.",
    includes: ["Private boat", "Picnic", "Shade, chairs, snorkel"],
    notes: "Tide window is essential. We design the day around it.",
    destination: "kizimkazi",
  },
  {
    slug: "stone-town",
    name: "Stone Town Heritage Walk",
    region: "West & Central",
    duration: "3–4 hours",
    priceFrom: 40,
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Narrow streets, Swahili architecture, markets and the cultural landmarks of Zanzibar’s historic old town.",
    details:
      "A historian-guide walk: doors, palaces, the old fort, rooftops, and the stories that sit between the coral walls. We finish when the light turns amber.",
    includes: ["Historian guide", "Entrance fees", "Spice tea"],
    notes: "Wear comfortable shoes. Alleys are uneven and beautiful.",
    destination: "stone-town",
  },
  {
    slug: "spice-farm",
    name: "Spice Farm Tour",
    region: "West & Central",
    duration: "Half day",
    priceFrom: 35,
    category: "culture",
    image: "/images/resort-palms.jpg",
    summary:
      "Clove, vanilla, cinnamon, cardamom — the living reason the world once called this the Spice Island.",
    details:
      "Walk a working farm with a grower, not a performer. Smell, taste, and understand the plants that built Zanzibar’s fortune.",
    includes: ["Farm host", "Tastings", "Transfers"],
    notes: "Combine beautifully with Stone Town or Jozani.",
    destination: "stone-town",
  },
  {
    slug: "prison-island",
    name: "Prison Island",
    region: "West & Central",
    duration: "Half day",
    priceFrom: 65,
    category: "culture",
    image: "/images/hero-nungwi.jpg",
    summary:
      "A short boat crossing to giant Aldabra tortoises, a colonial prison story, and snorkelling off the island’s edge.",
    details:
      "Cross from Stone Town, walk the island, meet the tortoises, and swim if the reef is clear.",
    includes: ["Boat", "Entrance", "Guide"],
    notes: "Tortoise feeding is regulated. Follow sanctuary rules.",
    destination: "stone-town",
  },
  {
    slug: "forodhani",
    name: "Forodhani Gardens Evening",
    region: "West & Central",
    duration: "2–3 hours",
    priceFrom: 25,
    category: "culture",
    image: "/images/hero-resort.jpg",
    summary:
      "Stone Town’s waterfront at night — smoke, spice, grilled seafood, and the island’s most democratic theatre.",
    details:
      "We arrive as the stalls open. Taste with a local host who knows which grills to trust, then walk the seafront as the fort lights come on.",
    includes: ["Host", "Food tasting budget", "Old Town walk"],
    notes: "Evenings only. Vegetarian paths available.",
    destination: "stone-town",
  },
  {
    slug: "darajani",
    name: "Darajani Market",
    region: "West & Central",
    duration: "2 hours",
    priceFrom: 20,
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Produce, spices, seafood and fabric — the everyday island, at full volume.",
    details:
      "A guided market hour that is as much about listening as buying. The best souvenirs are often stories, and a paper cone of cloves.",
    includes: ["Guide", "Market tasting"],
    notes: "Mornings are freshest and coolest.",
    destination: "stone-town",
  },
  {
    slug: "house-of-wonders",
    name: "House of Wonders & Old Fort",
    region: "West & Central",
    duration: "2 hours",
    priceFrom: 25,
    category: "culture",
    image: "/images/nungwi-boats.jpg",
    summary:
      "The historic heart of Stone Town — palaces, the fort, and the long trade memory of the Indian Ocean.",
    details:
      "Architecture and history without the lecture tone. We move through the ceremonial core of the old city and read it as a living street.",
    includes: ["Guide", "Entrances as open"],
    notes: "Some interiors have seasonal opening times.",
    destination: "stone-town",
  },
  {
    slug: "jozani",
    name: "Jozani Forest Walk",
    region: "West & Central",
    duration: "3 hours",
    priceFrom: 45,
    category: "nature",
    image: "/images/resort-palms.jpg",
    summary:
      "Zanzibar’s forest — endemic red colobus monkeys and a walk through the island’s green interior.",
    details:
      "A ranger-led walk. The monkeys are the headline; the forest is the point. We add the mangrove boardwalk when time and tide agree.",
    includes: ["Park fees", "Ranger", "Transfers"],
    notes: "Keep distance from wildlife. No feeding.",
    destination: "jozani",
  },
  {
    slug: "mangrove",
    name: "Mangrove Forest Experience",
    region: "West & Central",
    duration: "2–3 hours",
    priceFrom: 40,
    category: "nature",
    image: "/images/hero-adventure.jpg",
    summary:
      "A guided walk or boat through coastal mangroves — the living architecture that protects Zanzibar’s shore.",
    details:
      "Learn why these trees matter: nurseries for fish, shields against storms, and a quieter kind of beauty.",
    includes: ["Guide", "Boat or boardwalk", "Transfers"],
    notes: "Mosquito protection recommended at dusk.",
    destination: "jozani",
  },
  {
    slug: "sunset-dhow",
    name: "Sunset Dhow Cruise",
    region: "West & Central",
    duration: "2 hours",
    priceFrom: 75,
    category: "coast",
    image: "/images/nungwi-boats.jpg",
    summary:
      "Sail a traditional dhow along the coast as the wind softens and Zanzibar performs its evening.",
    details:
      "A private or shared lateen sail, cold drinks, and the particular silence that arrives when the engine is not invited.",
    includes: ["Dhow", "Captain", "Drinks & canapés on private sail"],
    notes: "Private dhows book quickly in high season.",
    destination: "stone-town",
  },
];

export function getExperience(slug: string) {
  return experiences.find((item) => item.slug === slug);
}
