"use client";

import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, Stars } from "@react-three/drei";
import { destinations } from "@/content/destinations";
import Link from "next/link";

function Island() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
        <circleGeometry args={[18, 64]} />
        <meshStandardMaterial color="#0c4a52" roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[3.6, 48]} />
        <meshStandardMaterial color="#d9c7a2" />
      </mesh>
      <mesh position={[0.2, 0.35, -0.2]}>
        <dodecahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial color="#2c5342" flatShading />
      </mesh>
      <mesh position={[-1.1, 0.55, 0.6]}>
        <coneGeometry args={[0.18, 1.4, 6]} />
        <meshStandardMaterial color="#1a322c" />
      </mesh>
      <mesh position={[1.3, 0.45, 0.4]}>
        <coneGeometry args={[0.16, 1.1, 6]} />
        <meshStandardMaterial color="#1a322c" />
      </mesh>
    </group>
  );
}

function Hotspot({
  dest,
  onSelect,
}: {
  dest: (typeof destinations)[number];
  onSelect: (slug: string) => void;
}) {
  const position = useMemo<[number, number, number]>(
    () => [(dest.coords.x - 50) / 12, 0.85, (dest.coords.y - 45) / 12],
    [dest],
  );

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.25}>
      <mesh position={position} onClick={() => onSelect(dest.slug)}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#c9a86a" emissive="#c9a86a" emissiveIntensity={0.6} />
        <Html distanceFactor={8} center>
          <button
            type="button"
            onClick={() => onSelect(dest.slug)}
            className="whitespace-nowrap rounded-full bg-ink/80 px-2 py-1 text-[10px] tracking-[0.18em] uppercase text-gold backdrop-blur"
          >
            {dest.name}
          </button>
        </Html>
      </mesh>
    </Float>
  );
}

export function IslandScene() {
  const [active, setActive] = useState(destinations[0].slug);
  const current = destinations.find((item) => item.slug === active) ?? destinations[0];

  return (
    <div className="grid min-h-[80vh] lg:grid-cols-[1.4fr_0.8fr]">
      <div className="relative h-[70vh] bg-[#06110f] lg:h-auto">
        <Canvas
          camera={{ position: [0, 4.2, 7.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <color attach="background" args={["#06110f"]} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[6, 8, 4]} intensity={1.2} color="#f3ebe0" />
          <pointLight position={[-4, 2, -3]} intensity={0.5} color="#3ec6b8" />
          <Stars radius={40} depth={20} count={800} factor={2} fade />
          <Island />
          {destinations.map((dest) => (
            <Hotspot key={dest.slug} dest={dest} onSelect={setActive} />
          ))}
          <OrbitControls enablePan={false} minDistance={4} maxDistance={12} maxPolarAngle={Math.PI / 2.15} />
        </Canvas>
        <p className="absolute bottom-4 left-4 text-[10px] tracking-[0.24em] uppercase text-ivory/40">
          Drag to orbit · scroll to zoom
        </p>
      </div>
      <aside className="bg-ink p-8 text-ivory md:p-10">
        <p className="eyebrow">{current.regionLabel}</p>
        <h2 className="mt-4 font-display text-5xl">{current.name}</h2>
        <p className="mt-4 leading-8 text-ivory/65">{current.story}</p>
        <ul className="mt-6 space-y-2 text-sm text-gold">
          {current.highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <Link href={`/destinations/${current.slug}`} className="mt-8 inline-block text-[11px] tracking-[0.28em] uppercase text-gold">
          Open destination →
        </Link>
      </aside>
    </div>
  );
}
