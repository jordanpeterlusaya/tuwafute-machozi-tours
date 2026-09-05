"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useExperienceMode } from "./useExperienceMode";

const DynamicWorld = dynamic(
  () => import("./WorldScene").then((module) => module.WorldScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_40%,#123d39,#07110f_70%)]" />
    ),
  },
);

type WorldLoaderProps = {
  variant?: "hero" | "explorer";
  activeSlug?: string;
  progress?: number;
  className?: string;
  fallbackImage?: string;
  onSelect?: (slug: string) => void;
  onInteracting?: (active: boolean) => void;
};

class WorldErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("3D experience unavailable", error, info.componentStack);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function StaticWorld({ image }: { image: string }) {
  return (
    <div className="absolute inset-0" data-experience="static">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ocean/10 to-ink/70" />
    </div>
  );
}

export function WorldLoader({
  variant = "explorer",
  activeSlug,
  progress,
  className,
  fallbackImage = "/images/hero-nungwi.jpg",
  onSelect,
  onInteracting,
}: WorldLoaderProps) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { mode, ready } = useExperienceMode();

  const handleInteracting = (active: boolean) => {
    window.dispatchEvent(
      new CustomEvent("tuwafute:world-interaction", { detail: { active } }),
    );
    onInteracting?.(active);
  };

  useEffect(() => {
    if (!root.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "240px" },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  const fallback = <StaticWorld image={fallbackImage} />;

  return (
    <div
      ref={root}
      className={`${className ?? ""} ${variant === "explorer" ? "touch-none" : ""}`}
      data-world-mode={ready ? mode : "loading"}
      role="img"
      aria-label={
        variant === "explorer"
          ? "Interactive three-dimensional map of Zanzibar. Use the destination tabs for an accessible alternative."
          : "A stylized three-dimensional Zanzibar island rising from the Indian Ocean."
      }
    >
      {!ready || mode === "static" || !visible ? (
        fallback
      ) : (
        <WorldErrorBoundary fallback={fallback}>
          <DynamicWorld
            mode={mode}
            variant={variant}
            activeSlug={activeSlug}
            progress={progress}
            onSelect={onSelect}
            onInteracting={handleInteracting}
          />
        </WorldErrorBoundary>
      )}
    </div>
  );
}
