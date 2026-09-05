"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { TextureLoader, type Group } from "three";
import { useExperienceMode } from "@/components/world/useExperienceMode";

const scenes = [
  { slug: "nungwi", name: "Nungwi coast" },
  { slug: "resort", name: "Palm shore" },
  { slug: "adventure", name: "East-coast water" },
] as const;

function MediaChamber({ src }: { src: string }) {
  const texture = useLoader(TextureLoader, src);
  const group = useRef<Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y +=
      (pointer.x * 0.12 - group.current.rotation.y) * Math.min(1, delta * 2.2);
    group.current.rotation.x +=
      (-pointer.y * 0.055 - group.current.rotation.x) * Math.min(1, delta * 2.2);
  });

  return (
    <group ref={group}>
      <Float speed={0.65} floatIntensity={0.08} rotationIntensity={0.02}>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[6.4, 4.25, 18, 12]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -0.08]}>
          <boxGeometry args={[6.58, 4.43, 0.12]} />
          <meshStandardMaterial color="#b99555" roughness={0.45} metalness={0.25} />
        </mesh>
      </Float>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.35, 0]}>
        <circleGeometry args={[7, 64]} />
        <meshPhysicalMaterial
          color="#0b4247"
          roughness={0.22}
          metalness={0.25}
          clearcoat={0.7}
        />
      </mesh>
    </group>
  );
}

export function PanoramaTour({ src, activeSlug }: { src: string; activeSlug: string }) {
  const { mode, ready } = useExperienceMode();
  const staticMode = !ready || mode === "static";

  return (
    <div className="relative h-[70vh] min-h-[560px] overflow-hidden bg-ink">
      {staticMode ? (
        <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
      ) : (
        <Canvas
          camera={{ position: [0, 0.15, 5.7], fov: 48 }}
          dpr={mode === "full" ? [1, 1.4] : [0.75, 1]}
          gl={{ antialias: mode === "full", powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#07110f"]} />
          <fog attach="fog" args={["#07110f", 7, 14]} />
          <ambientLight intensity={1.1} />
          <directionalLight position={[3, 5, 4]} intensity={1.8} color="#f5d7a0" />
          <Suspense fallback={null}>
            <MediaChamber src={src} />
          </Suspense>
          {mode === "full" && (
            <Sparkles count={30} scale={[8, 5, 4]} size={1} speed={0.1} color="#d8bb80" />
          )}
        </Canvas>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/45" />
      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 md:left-8 md:right-8">
        <div>
          <p className="text-[9px] tracking-[0.22em] uppercase text-ivory/50">
            {staticMode ? "Cinematic still" : "Move your pointer to look across the frame"}
          </p>
          <p className="mt-1 text-xs text-ivory/35">
            Framed spatial film · genuine 360° capture coming with future expeditions
          </p>
        </div>
        <nav className="flex flex-wrap gap-2" aria-label="Virtual tour scenes">
          {scenes.map((scene) => (
            <Link
              key={scene.slug}
              href={`/virtual-tours/${scene.slug}`}
              aria-current={activeSlug === scene.slug ? "page" : undefined}
              className={`rounded-full border px-3 py-1.5 text-[9px] tracking-[0.16em] uppercase ${
                activeSlug === scene.slug
                  ? "border-gold bg-gold text-ink"
                  : "border-ivory/25 bg-ink/50 text-ivory"
              }`}
            >
              {scene.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
