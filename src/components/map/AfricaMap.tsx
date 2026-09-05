import { ZanzibarMap } from "@/components/map/ZanzibarMap";

/**
 * Kept as a stable import for the existing /map route.
 * The former illustrated map has been replaced with real geographic tiles.
 */
export function AfricaMap() {
  return <ZanzibarMap />;
}
