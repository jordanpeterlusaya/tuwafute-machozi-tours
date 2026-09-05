import type { MetadataRoute } from "next";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";
import { journal } from "@/content/journal";
import { stays } from "@/content/stays";

const staticRoutes = [
  "",
  "/destinations",
  "/experiences",
  "/stays",
  "/itineraries",
  "/explorer",
  "/map",
  "/trip-builder",
  "/planner",
  "/journal",
  "/gallery",
  "/impact",
  "/about",
  "/faq",
  "/enquire",
  "/virtual-tours",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    ...staticRoutes,
    ...destinations.map((item) => `/destinations/${item.slug}`),
    ...experiences.map((item) => `/experiences/${item.slug}`),
    ...stays.map((item) => `/stays/${item.slug}`),
    ...itineraries.map((item) => `/itineraries/${item.slug}`),
    ...journal.map((item) => `/journal/${item.slug}`),
    "/virtual-tours/nungwi",
    "/virtual-tours/resort",
    "/virtual-tours/adventure",
  ];

  return paths.map((path) => ({
    url: `https://tuwafutemachozi.com${path}`,
    lastModified: now,
  }));
}
