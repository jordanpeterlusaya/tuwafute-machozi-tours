"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BackSide, TextureLoader } from "three";

function Sphere({ src }: { src: string }) {
  const texture = useLoader(TextureLoader, src);
  return (
    <mesh>
      <sphereGeometry args={[8, 48, 32]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

export function PanoramaTour({ src }: { src: string }) {
  return (
    <div className="relative h-[70vh] bg-ink">
      <Canvas camera={{ position: [0, 0, 0.1], fov: 70 }} dpr={[1, 1.4]}>
        <Sphere src={src} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
      <p className="absolute bottom-4 left-4 text-[10px] tracking-[0.22em] uppercase text-ivory/50">
        Drag to look around
      </p>
    </div>
  );
}
