export const brand = {
  name: "Tuwafute Machozi",
  shortName: "Tuwafute",
  wordmark: {
    primary: "TUWAFUTE",
    secondary: "MACHOZI",
  },
  tagline: "Discover. Experience. Give Back.",
  descriptor: "Zanzibar Excursions · Social Impact",
  meaning:
    "In Kiswahili, tuwafute machozi means let us wipe their tears. Every journey we design is an invitation to see Zanzibar fully — and to leave it kinder than we found it.",
  location: "Zanzibar",
  instagram: "tuwafute_255",
  instagramUrl: "https://www.instagram.com/tuwafute_255?igsi=d3FhNWZ4YjUxMDBx",
  email: "hello@tuwafutemachozi.com",
  phoneDisplay: "+255 622 434 657",
  whatsapp: "255622434657",
  founded: "Zanzibar",
} as const;

export const nav = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Zanzibar Tours" },
  { href: "/stays", label: "Stays" },
  { href: "/itineraries", label: "Journeys" },
  { href: "/impact", label: "Impact" },
  { href: "/journal", label: "Journal" },
] as const;

export const secondaryNav = [
  { href: "/explorer", label: "Island Explorer" },
  { href: "/map", label: "Excursion Map" },
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/planner", label: "Excursion Planner" },
  { href: "/gallery", label: "Gallery" },
  { href: "/virtual-tours", label: "Immersive Views" },
  { href: "/about", label: "The House" },
  { href: "/faq", label: "FAQ" },
] as const;
