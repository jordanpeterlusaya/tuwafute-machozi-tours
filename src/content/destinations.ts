import { coastFilms } from "@/content/media";
import {
  experiences,
  type Experience,
  type ExperienceRegion,
} from "@/content/experiences";

export type Region = "north" | "east" | "south" | "west";

export type Destination = {
  slug: string;
  name: string;
  region: Region;
  regionLabel: string;
  eyebrow: string;
  summary: string;
  story: string;
  image: string;
  video?: string;
  mobileVideo?: string;
  videoLabel?: string;
  coords: { x: number; y: number; lat: number; lng: number };
  scene: {
    position: [number, number, number];
    camera: [number, number, number];
    accent: string;
    elevation: number;
  };
  highlights: string[];
  stays: string[];
  experiences: string[];
  season: string;
};

const regionMap: Record<ExperienceRegion, Region> = {
  north: "north",
  east: "east",
  south: "south",
  "west-central": "west",
};

const stayByRegion: Record<Region, string[]> = {
  north: ["four-star", "three-star"],
  east: ["four-star", "two-star"],
  south: ["five-star", "four-star"],
  west: ["two-star", "three-star"],
};

const accentByRegion: Record<Region, string> = {
  north: "#56d8cf",
  east: "#42cfc2",
  south: "#d8ad72",
  west: "#d4a55f",
};

const filmsBySlug: Partial<
  Record<string, (typeof coastFilms)[number]>
> = {
  "nungwi-beach": coastFilms[0],
  "kendwa-sunset": coastFilms[1],
  "paje-beach": coastFilms[2],
};

/** Old hub URLs from before every PDF place had its own destination page. */
export const destinationAliases: Record<string, string> = {
  nungwi: "nungwi-beach",
  kendwa: "kendwa-sunset",
  paje: "paje-beach",
  jambiani: "jambiani-village",
  kizimkazi: "kizimkazi-dolphin",
};

function staysFor(item: Experience, region: Region) {
  if (item.region === "west-central" && item.category === "nature") {
    return ["five-star"];
  }
  return stayByRegion[region];
}

function sceneFrom(lat: number, lng: number, accent: string) {
  const x = ((lng - 39.16) / 0.4) * 2.5 - 1.25;
  const z = ((lat + 5.72) / 0.76) * 6.4 - 3.25;
  return {
    position: [x, 0.35, z] as [number, number, number],
    camera: [x * 1.15, 1.9, z + 3.8] as [number, number, number],
    accent,
    elevation: 0.35,
  };
}

/**
 * Every named place in the Zanzibar Excursions & Experiences Guide —
 * 6 north, 7 east, 6 south, 9 west & central. Nothing else.
 */
export const destinations: Destination[] = experiences.map((item) => {
  const region = regionMap[item.region];
  const film = filmsBySlug[item.slug];
  const neighbours = experiences
    .filter((entry) => entry.region === item.region)
    .map((entry) => entry.slug);

  return {
    slug: item.slug,
    name: item.name,
    region,
    regionLabel: item.regionLabel,
    eyebrow: item.coordinates.label,
    summary: item.summary,
    story: item.details,
    image: item.image,
    video: film?.video,
    mobileVideo: film?.mobileVideo,
    videoLabel: film
      ? `${film.title} · exact location unrecorded`
      : undefined,
    coords: {
      x: ((item.coordinates.lng - 39.16) / 0.4) * 100,
      y: ((item.coordinates.lat + 5.72) / 0.76) * 100,
      lat: item.coordinates.lat,
      lng: item.coordinates.lng,
    },
    scene: sceneFrom(
      item.coordinates.lat,
      item.coordinates.lng,
      accentByRegion[region],
    ),
    highlights: [
      item.regionLabel,
      item.coordinates.label,
      item.category === "marine"
        ? "Marine experience"
        : item.category === "culture"
          ? "Culture and heritage"
          : item.category === "nature"
            ? "Nature"
            : item.category === "adventure"
              ? "Adventure"
              : "Coast",
    ],
    stays: staysFor(item, region),
    experiences: neighbours,
    season: "Best planned around weather, tides and sea conditions",
  };
});

export function getDestination(slug: string) {
  const resolved = destinationAliases[slug] ?? slug;
  return destinations.find((item) => item.slug === resolved);
}

export const regions: { id: Region; label: string; copy: string }[] = [
  {
    id: "north",
    label: "North Zanzibar",
    copy: "Six destinations from the guide: Nungwi, Kendwa, the turtle sanctuary, Mnemba, dolphins and Mkokotoni.",
  },
  {
    id: "east",
    label: "East Coast Zanzibar",
    copy: "Seven destinations from the guide: Paje, Jambiani, Kuza Cave, The Rock, Michamvi & Chwaka Bay, Blue Lagoon and kite surfing.",
  },
  {
    id: "south",
    label: "South Zanzibar",
    copy: "Six destinations from the guide: Kizimkazi dolphins, the old mosque, Mtende, Maalum Cave, Menai Bay and Pungume.",
  },
  {
    id: "west",
    label: "West & Central Zanzibar",
    copy: "Nine destinations from the guide: Stone Town, spice farm, Prison Island, Forodhani, Darajani, House of Wonders, Jozani, mangroves and the sunset dhow.",
  },
];
