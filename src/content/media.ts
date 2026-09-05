export const coastFilms = [
  {
    slug: "sandbar",
    title: "Zanzibar sandbar",
    navLabel: "Sandbar",
    video: "/media/hero-nungwi.mp4",
    mobileVideo: "/media/hero-nungwi-mobile.mp4",
    poster: "/images/hero-nungwi.jpg",
    copy:
      "Turquoise shallows and an open sandbar filmed along Zanzibar’s coast; the exact beach was not recorded.",
  },
  {
    slug: "palm-shore",
    title: "Palm-lined Zanzibar shore",
    navLabel: "Palm shore",
    video: "/media/hero-resort.mp4",
    mobileVideo: "/media/hero-resort-mobile.mp4",
    poster: "/images/hero-resort.jpg",
    copy:
      "A quiet ribbon of sand and palms filmed along Zanzibar’s coast; the exact beach was not recorded.",
  },
  {
    slug: "beach-canopy",
    title: "Zanzibar beach canopy",
    navLabel: "Beach canopy",
    video: "/media/hero-coast.mp4",
    mobileVideo: "/media/hero-coast-mobile.mp4",
    poster: "/images/hero-coast.jpg",
    copy:
      "A broad white beach beneath a green palm canopy on Zanzibar’s coast; the exact beach was not recorded.",
  },
] as const;

export function getCoastFilm(slug: string) {
  return coastFilms.find((film) => film.slug === slug);
}
