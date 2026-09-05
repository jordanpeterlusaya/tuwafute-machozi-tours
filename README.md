# Tuwafute Machozi

Zanzibar travel house — Discover. Experience. Give Back.

## Stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis · React Three Fiber · Mapbox GL JS

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Maps

Set `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local` to enable Mapbox Satellite,
terrain, and real building extrusions where Mapbox has coverage. Use a
URL-restricted public token; never place a secret token in source control.

When the token is absent or the Mapbox style fails, the excursion map switches
to interactive OpenStreetMap raster tiles. Reduced-motion and no-WebGL clients
receive an OpenStreetMap embed with the same semantic excursion controls.

## Notes

- Hero video and stills live in `public/media` and `public/images`.
- The canonical 28-record PDF excursion catalog lives in
  `src/content/experiences.ts`.
- Phone and WhatsApp configuration live in `src/content/brand.ts`.
- Tour-request drafts remain in the guest’s browser and checkout opens
  WhatsApp; this is not payment or confirmed inventory.
- `app/api/enquire` returns `501` until a durable delivery service is
  configured; the public enquiry form prepares a WhatsApp message instead.
