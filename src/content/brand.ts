export const brand = {
  name: "Tuwafute Machozi",
  legalName: "Tuwafute Machozi Tours",
  shortName: "Tuwafute",
  wordmark: {
    primary: "TUWAFUTE",
    secondary: "MACHOZI",
    tertiary: "TOURS",
  },
  tagline: "Discover. Experience. Give Back.",
  descriptor: "Zanzibar Tours · Charity in Zanzibar",
  meaning:
    "In Kiswahili, tuwafute machozi means let us wipe their tears. Guests who travel with us enable charity work in Zanzibar — 40% of revenue is directed to community impact. That is why the house is called Tuwafute Machozi Tours.",
  location: "Zanzibar",
  instagram: "tuwafute_255",
  instagramUrl: "https://www.instagram.com/tuwafute_255?igsi=d3FhNWZ4YjUxMDBx",
  email: "hello@tuwafutemachozi.com",
  /** Halotel — voice calls. */
  phone: "0622434657",
  phoneDisplay: "+255 622 434 657",
  phoneLocalDisplay: "062 243 4657",
  phoneHref: "tel:+255622434657",
  /** Tigo — WhatsApp. Digits as given; no extra digit. */
  whatsapp: "25567534657",
  whatsappDisplay: "067 534 657",
  privateGuideNote: "Every trip includes a private guide.",
  founded: "Zanzibar",
} as const;

export const nav = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Zanzibar Tours" },
  { href: "/beach-experiences", label: "Beach" },
  { href: "/safaris", label: "Safaris" },
  { href: "/stays", label: "Stays" },
  { href: "/itineraries", label: "Journeys" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "The House" },
  { href: "/journal", label: "Journal" },
] as const;

export const secondaryNav = [
  { href: "/explorer", label: "Island Explorer" },
  { href: "/map", label: "Excursion Map" },
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/planner", label: "Excursion Planner" },
  { href: "/gallery", label: "Gallery" },
  { href: "/virtual-tours", label: "Immersive Views" },
  { href: "/faq", label: "FAQ" },
] as const;
