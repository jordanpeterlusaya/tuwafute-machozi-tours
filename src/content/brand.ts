export const brand = {
  name: "Tuwafute Machozi",
  shortName: "Tuwafute",
  wordmark: {
    primary: "TUWAFUTE",
    secondary: "MACHOZI",
  },
  tagline: "Discover. Experience. Give Back.",
  descriptor: "Travel · Safaris · Social Impact",
  meaning:
    "In Kiswahili, tuwafute machozi means let us wipe their tears. Every journey we design is an invitation to see Tanzania fully — and to leave it kinder than we found it.",
  location: "Zanzibar & Tanzania",
  instagram: "tuwafute_255",
  instagramUrl: "https://www.instagram.com/tuwafute_255",
  email: "hello@tuwafutemachozi.com",
  phoneDisplay: "+255 772 455 255",
  whatsapp: "255772455255",
  founded: "Zanzibar",
} as const;

export const nav = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/safaris", label: "Safaris" },
  { href: "/stays", label: "Stays" },
  { href: "/itineraries", label: "Journeys" },
  { href: "/impact", label: "Impact" },
  { href: "/journal", label: "Journal" },
] as const;

export const secondaryNav = [
  { href: "/explorer", label: "3D Explorer" },
  { href: "/map", label: "Map" },
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/planner", label: "AI Planner" },
  { href: "/gallery", label: "Gallery" },
  { href: "/virtual-tours", label: "360° Tours" },
  { href: "/about", label: "The House" },
  { href: "/faq", label: "FAQ" },
] as const;
