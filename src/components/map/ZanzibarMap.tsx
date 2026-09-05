"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type {
  Map as MapboxMap,
  Marker as MapboxMarker,
  StyleSpecification,
} from "mapbox-gl";
import { AddToTourCartButton } from "@/components/booking/TourCart";
import {
  experienceRegions,
  experiences,
  type Experience,
} from "@/content/experiences";
import { cx } from "@/lib/utils";

const INITIAL_CENTER: [number, number] = [39.335, -6.11];
const OSM_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    "open-street-map": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: "open-street-map",
      type: "raster",
      source: "open-street-map",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

type RenderMode =
  | "loading"
  | "satellite"
  | "osm"
  | "reduced-motion"
  | "no-webgl"
  | "error";

function zoomFor(item: Experience) {
  if (item.coordinates.precision === "site") return 14.5;
  if (item.coordinates.precision === "locality") return 13;
  if (item.coordinates.precision === "departure") return 13.5;
  return 11.4;
}

function osmEmbedUrl(item: Experience) {
  const spread = item.coordinates.precision === "area" ? 0.075 : 0.025;
  const { lat, lng } = item.coordinates;
  const bbox = [lng - spread, lat - spread, lng + spread, lat + spread].join(",");
  const params = new URLSearchParams({
    bbox,
    layer: "mapnik",
    marker: `${lat},${lng}`,
  });
  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`;
}

function moveSelection(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  select: (item: Experience) => void,
) {
  if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
    return;
  }
  event.preventDefault();
  let next = index;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = experiences.length - 1;
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    next = (index + 1) % experiences.length;
  }
  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    next = (index - 1 + experiences.length) % experiences.length;
  }
  const target = document.querySelector<HTMLButtonElement>(
    `[data-excursion-control="${experiences[next].slug}"]`,
  );
  target?.focus();
  select(experiences[next]);
}

export function ZanzibarMap({
  immersive = false,
  className,
}: {
  immersive?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<MapboxMarker[]>([]);
  const markerElementsRef = useRef(new Map<string, HTMLButtonElement>());
  const mapStyleModeRef = useRef<"satellite" | "osm">("osm");
  const [activeSlug, setActiveSlug] = useState(experiences[0].slug);
  const [renderMode, setRenderMode] = useState<RenderMode>("loading");
  const [status, setStatus] = useState("Preparing the geographic map…");
  const active =
    experiences.find((item) => item.slug === activeSlug) ?? experiences[0];
  const grouped = useMemo(
    () =>
      experienceRegions.map((region) => ({
        ...region,
        items: experiences.filter((item) => item.region === region.id),
      })),
    [],
  );

  const syncMarkers = (slug: string) => {
    markerElementsRef.current.forEach((element, markerSlug) => {
      const selected = markerSlug === slug;
      element.dataset.active = String(selected);
      element.setAttribute("aria-pressed", String(selected));
    });
  };

  const select = (item: Experience) => {
    setActiveSlug(item.slug);
    syncMarkers(item.slug);
    const map = mapRef.current;
    if (!map) return;
    const camera = {
      center: [item.coordinates.lng, item.coordinates.lat] as [number, number],
      zoom: zoomFor(item),
      pitch: mapStyleModeRef.current === "satellite" ? 58 : 0,
      bearing: mapStyleModeRef.current === "satellite" ? -16 : 0,
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      map.jumpTo(camera);
    } else {
      map.flyTo({ ...camera, duration: 1250, essential: false });
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;
    let map: MapboxMap | null = null;
    let styleTimer: number | undefined;
    const markerElements = markerElementsRef.current;

    const initialise = async () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) {
        setRenderMode("reduced-motion");
        setStatus("Reduced-motion mode · OpenStreetMap view.");
        return;
      }

      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        if (cancelled) return;
        if (!mapboxgl.supported()) {
          setRenderMode("no-webgl");
          setStatus("WebGL is unavailable · OpenStreetMap view.");
          return;
        }

        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.trim();
        let requestedMode: "satellite" | "osm" = token ? "satellite" : "osm";
        let requestedStyleLoaded = false;
        if (token) mapboxgl.accessToken = token;

        map = new mapboxgl.Map({
          container: containerRef.current!,
          style: token
            ? "mapbox://styles/mapbox/satellite-streets-v12"
            : OSM_STYLE,
          center: INITIAL_CENTER,
          zoom: immersive ? 9.35 : 8.75,
          pitch: token ? 42 : 0,
          bearing: token ? -10 : 0,
          antialias: false,
          attributionControl: true,
          cooperativeGestures: true,
          maxPitch: 70,
          minZoom: 7.4,
          maxZoom: 18,
          failIfMajorPerformanceCaveat: true,
        });
        mapRef.current = map;
        map.addControl(
          new mapboxgl.NavigationControl({ showCompass: true }),
          "top-right",
        );

        for (const item of experiences) {
          const markerButton = document.createElement("button");
          markerButton.type = "button";
          markerButton.className = "zanzibar-map-marker";
          markerButton.dataset.active = String(item.slug === activeSlug);
          markerButton.setAttribute("aria-pressed", String(item.slug === activeSlug));
          markerButton.setAttribute(
            "aria-label",
            `Show ${item.name} on the map`,
          );
          markerButton.title = item.name;
          markerButton.addEventListener("click", () => select(item));
          markerElementsRef.current.set(item.slug, markerButton);
          markersRef.current.push(
            new mapboxgl.Marker({
              element: markerButton,
              anchor: "center",
            })
              .setLngLat([item.coordinates.lng, item.coordinates.lat])
              .addTo(map),
          );
        }

        const activateOsmFallback = (reason: string) => {
          if (!map || requestedMode === "osm") return;
          requestedMode = "osm";
          mapStyleModeRef.current = "osm";
          requestedStyleLoaded = false;
          if (styleTimer) window.clearTimeout(styleTimer);
          setRenderMode("osm");
          setStatus(`${reason} OpenStreetMap fallback is active.`);
          map.setPitch(0);
          map.setBearing(0);
          map.setStyle(OSM_STYLE);
        };

        map.on("error", () => {
          if (requestedMode === "satellite" && !requestedStyleLoaded) {
            activateOsmFallback("The satellite style could not load.");
          }
        });

        map.on("style.load", () => {
          if (!map || cancelled) return;
          requestedStyleLoaded = true;
          if (styleTimer) window.clearTimeout(styleTimer);

          if (requestedMode === "osm") {
            mapStyleModeRef.current = "osm";
            setRenderMode("osm");
            setStatus(
              token
                ? "OpenStreetMap fallback · satellite style unavailable."
                : "OpenStreetMap · add NEXT_PUBLIC_MAPBOX_TOKEN for satellite terrain.",
            );
            return;
          }

          mapStyleModeRef.current = "satellite";
          setRenderMode("satellite");
          setStatus(
            "Mapbox satellite · terrain and mapped 3D buildings appear where coverage exists.",
          );

          try {
            if (!map.getSource("mapbox-dem")) {
              map.addSource("mapbox-dem", {
                type: "raster-dem",
                url: "mapbox://mapbox.mapbox-terrain-dem-v1",
                tileSize: 512,
                maxzoom: 14,
              });
            }
            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.15 });
            map.setFog({
              color: "rgb(225, 235, 230)",
              "high-color": "rgb(196, 221, 224)",
              "horizon-blend": 0.14,
              "space-color": "rgb(8, 17, 15)",
              "star-intensity": 0,
            });
          } catch {
            // Satellite remains useful when a device cannot render terrain.
          }

          try {
            const layers = map.getStyle().layers ?? [];
            const firstLabel = layers.find(
              (layer) =>
                layer.type === "symbol" &&
                typeof layer.layout?.["text-field"] !== "undefined",
            )?.id;
            if (map.getSource("composite") && !map.getLayer("mapped-3d-buildings")) {
              map.addLayer(
                {
                  id: "mapped-3d-buildings",
                  source: "composite",
                  "source-layer": "building",
                  type: "fill-extrusion",
                  minzoom: 14.5,
                  filter: ["==", ["get", "extrude"], "true"],
                  paint: {
                    "fill-extrusion-color": "#d8c9ad",
                    "fill-extrusion-height": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14.5,
                      0,
                      15.5,
                      ["coalesce", ["get", "height"], 0],
                    ],
                    "fill-extrusion-base": [
                      "interpolate",
                      ["linear"],
                      ["zoom"],
                      14.5,
                      0,
                      15.5,
                      ["coalesce", ["get", "min_height"], 0],
                    ],
                    "fill-extrusion-opacity": 0.78,
                  },
                },
                firstLabel,
              );
            }
          } catch {
            // Building extrusions only appear where the Mapbox style exposes data.
          }
        });

        if (requestedMode === "satellite") {
          styleTimer = window.setTimeout(
            () => activateOsmFallback("The satellite style timed out."),
            12_000,
          );
        }
      } catch {
        if (!cancelled) {
          setRenderMode("error");
          setStatus("The WebGL map could not start · OpenStreetMap view.");
        }
      }
    };

    void initialise();
    return () => {
      cancelled = true;
      if (styleTimer) window.clearTimeout(styleTimer);
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      markerElements.clear();
      map?.remove();
      mapRef.current = null;
    };
    // The map is intentionally initialised once; selections use mapRef.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immersive]);

  const useIframe =
    renderMode === "reduced-motion" ||
    renderMode === "no-webgl" ||
    renderMode === "error";

  return (
    <section
      className={cx(
        "grid overflow-hidden border border-gold/20 bg-ink text-ivory lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]",
        immersive ? "min-h-[88vh]" : "min-h-[720px]",
        className,
      )}
      aria-label="Geographic Zanzibar excursion map"
    >
      <div className="relative min-h-[58vh] overflow-hidden bg-[#d6e4df] lg:min-h-full">
        <div
          ref={containerRef}
          className={cx("absolute inset-0", useIframe && "invisible")}
          aria-label="Interactive map of Zanzibar"
        />
        {renderMode === "loading" && (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_45%_40%,#235b58,#08110f_75%)] px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-ivory/70">
              Loading Zanzibar’s geographic map…
            </p>
          </div>
        )}
        {useIframe && (
          <iframe
            key={active.slug}
            title={`OpenStreetMap showing ${active.name}`}
            src={osmEmbedUrl(active)}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-5 pt-16">
          <p className="max-w-2xl text-[10px] tracking-[0.15em] uppercase text-ivory/75">
            {status}
          </p>
        </div>
      </div>

      <div className="flex max-h-[88vh] flex-col bg-ink">
        <div className="border-b border-ivory/10 p-6 md:p-8">
          <p className="eyebrow">{active.regionLabel}</p>
          <h2 className="mt-3 font-display text-4xl">{active.name}</h2>
          <p className="mt-3 text-sm leading-7 text-ivory/65">{active.summary}</p>
          <p className="mt-4 text-[10px] tracking-[0.15em] uppercase text-ivory/45">
            Pin: {active.coordinates.label}
            {active.coordinates.precision === "area" ? " · representative area" : ""}
            {active.coordinates.precision === "departure" ? " · departure area" : ""}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AddToTourCartButton slug={active.slug} compact />
            <Link
              href={`/experiences/${active.slug}`}
              className="inline-flex items-center px-4 py-2 text-[10px] tracking-[0.18em] uppercase text-gold"
            >
              View excursion →
            </Link>
          </div>
        </div>

        <nav
          aria-label="Choose an excursion to show on the map"
          className="min-h-0 flex-1 overflow-y-auto p-5 md:p-6"
        >
          {grouped.map((region) => (
            <div key={region.id} className="mb-7 last:mb-0">
              <h3 className="mb-3 text-[9px] tracking-[0.24em] uppercase text-gold">
                {region.label} · {region.items.length}
              </h3>
              <div className="grid gap-1">
                {region.items.map((item) => {
                  const index = experiences.findIndex(
                    (experience) => experience.slug === item.slug,
                  );
                  const selected = item.slug === active.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      data-excursion-control={item.slug}
                      aria-pressed={selected}
                      onClick={() => select(item)}
                      onKeyDown={(event) =>
                        moveSelection(event, index, select)
                      }
                      className={cx(
                        "flex w-full items-center justify-between gap-3 border-l px-3 py-2 text-left text-sm transition-colors",
                        selected
                          ? "border-gold bg-gold/10 text-ivory"
                          : "border-ivory/10 text-ivory/55 hover:border-gold/60 hover:text-ivory",
                      )}
                    >
                      <span>{item.name}</span>
                      <span aria-hidden className="text-gold">
                        {selected ? "●" : "○"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <p className="border-t border-ivory/10 px-6 py-4 text-[10px] leading-5 text-ivory/40">
          Map pins are geographic reference points. Marine routes and conditions
          vary; final arrangements require human confirmation.
        </p>
      </div>
    </section>
  );
}
