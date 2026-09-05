"use client";

import { useEffect, useState } from "react";

export type ExperienceMode = "full" | "lite" | "static";

function detectMode(): ExperienceMode {
  if (typeof window === "undefined") return "static";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "static";

  const canvas = document.createElement("canvas");
  const hasWebGL = Boolean(
    canvas.getContext("webgl2") || canvas.getContext("webgl"),
  );
  if (!hasWebGL) return "static";

  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  const compact = window.matchMedia("(max-width: 767px)").matches;
  const saveData =
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData ?? false;

  if (saveData || memory <= 2 || cores <= 2) return "static";
  if (compact || memory <= 4 || cores <= 4) return "lite";
  return "full";
}

export function useExperienceMode() {
  const [experience, setExperience] = useState<{
    mode: ExperienceMode;
    ready: boolean;
  }>({ mode: "static", ready: false });

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setExperience({ mode: detectMode(), ready: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return experience;
}
