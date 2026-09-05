"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  CameraControls,
  Float,
  PerformanceMonitor,
  Sparkles,
  Stars,
} from "@react-three/drei";
import type CameraControlsImpl from "camera-controls";
import * as THREE from "three";
import { destinations } from "@/content/destinations";
import type { ExperienceMode } from "./useExperienceMode";

type WorldSceneProps = {
  mode: ExperienceMode;
  variant?: "hero" | "explorer";
  activeSlug?: string;
  progress?: number;
  onSelect?: (slug: string) => void;
  onInteracting?: (active: boolean) => void;
};

function HeroCameraRig({
  progress = 0,
}: Pick<WorldSceneProps, "progress">) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3());
  const lookAt = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const destination = [
      0.2 + progress * 1.3,
      2.5 - progress * 0.6,
      6.5 - progress,
    ] as const;

    target.current.set(
      destination[0] + pointer.x * 0.18,
      destination[1] + pointer.y * 0.08,
      destination[2],
    );
    camera.position.lerp(target.current, 1 - Math.exp(-delta * 2.4));

    lookAt.current.set(0, 0.15, 0);
    camera.lookAt(lookAt.current);
  });

  return null;
}

function ExplorerCamera({ activeSlug }: { activeSlug?: string }) {
  const controls = useRef<CameraControlsImpl>(null);

  useEffect(() => {
    const active = destinations.find((item) => item.slug === activeSlug);
    if (!controls.current) return;
    const camera = active?.scene.camera ?? ([0.2, 4.5, 7.4] as const);
    const target = active?.scene.position ?? ([0, 0.2, 0] as const);
    void controls.current.setLookAt(
      camera[0],
      camera[1],
      camera[2],
      target[0],
      target[1],
      target[2],
      true,
    );
  }, [activeSlug]);

  return (
    <CameraControls
      ref={controls}
      minDistance={2.6}
      maxDistance={10}
      minPolarAngle={0.28}
      maxPolarAngle={Math.PI / 2.05}
      truckSpeed={0}
      dollySpeed={0.45}
    />
  );
}

function Ocean({ mode }: { mode: ExperienceMode }) {
  const material = useRef<THREE.MeshPhysicalMaterial>(null);
  const rings = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (material.current) {
      material.current.opacity = 0.82 + Math.sin(time * 0.45) * 0.04;
    }
    if (rings.current) {
      rings.current.rotation.z = time * 0.025;
    }
  });

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]}>
        <circleGeometry args={[18, mode === "full" ? 96 : 48]} />
        <meshPhysicalMaterial
          ref={material}
          color="#0d6670"
          roughness={0.18}
          metalness={0.08}
          clearcoat={0.9}
          transparent
          opacity={0.84}
        />
      </mesh>
      <group ref={rings} position={[0, -0.17, 0]}>
        {[4.4, 6.4, 9].map((radius, index) => (
          <mesh key={radius} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius, radius + 0.025, 96]} />
            <meshBasicMaterial
              color={index === 0 ? "#9de7dd" : "#5ba9a6"}
              transparent
              opacity={0.2 - index * 0.045}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function IslandTerrain() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const points = [
      [-0.28, -3.65],
      [0.26, -3.22],
      [0.55, -2.35],
      [0.68, -1.25],
      [1.05, -0.1],
      [0.82, 1.2],
      [0.48, 2.38],
      [0.12, 3.55],
      [-0.26, 3.25],
      [-0.64, 2.25],
      [-0.75, 1.15],
      [-1.05, 0.1],
      [-0.86, -1.25],
      [-0.62, -2.45],
    ];
    shape.moveTo(points[0][0], points[0][1]);
    points.slice(1).forEach(([x, y]) => shape.lineTo(x, y));
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.09,
      bevelThickness: 0.08,
    });
  }, []);

  return (
    <group rotation={[Math.PI / 2, 0, -0.04]} position={[0.08, -0.05, 0]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial color="#cdbd93" roughness={0.82} />
      </mesh>
      <mesh position={[0.03, 0.05, 0.21]}>
        <sphereGeometry args={[0.78, 18, 10]} />
        <meshStandardMaterial color="#315d49" roughness={0.95} flatShading />
      </mesh>
      <mesh position={[0.22, 1.35, 0.19]}>
        <sphereGeometry args={[0.48, 14, 8]} />
        <meshStandardMaterial color="#426f56" roughness={1} flatShading />
      </mesh>
    </group>
  );
}

function Palm({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.32, 0]} rotation={[0, 0, -0.1]} castShadow>
        <cylinderGeometry args={[0.025, 0.04, 0.65, 6]} />
        <meshStandardMaterial color="#765f43" />
      </mesh>
      {[0, 1, 2, 3, 4].map((leaf) => (
        <mesh
          key={leaf}
          position={[0, 0.68, 0]}
          rotation={[0.2, (leaf / 5) * Math.PI * 2, 0.9]}
        >
          <coneGeometry args={[0.1, 0.55, 5]} />
          <meshStandardMaterial color="#294f3d" flatShading />
        </mesh>
      ))}
    </group>
  );
}

function Hotspot({
  slug,
  active,
  onSelect,
}: {
  slug: string;
  active: boolean;
  onSelect?: (slug: string) => void;
}) {
  const item = destinations.find((destination) => destination.slug === slug);
  if (!item) return null;

  return (
    <Float speed={1.8} floatIntensity={0.18}>
      <group position={item.scene.position}>
        <mesh
          onClick={(event) => {
            event.stopPropagation();
            onSelect?.(slug);
          }}
          scale={active ? 1.45 : 1}
        >
          <sphereGeometry args={[0.075, 16, 16]} />
          <meshStandardMaterial
            color={item.scene.accent}
            emissive={item.scene.accent}
            emissiveIntensity={active ? 2.2 : 1}
          />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.13, 0.145, 24]} />
          <meshBasicMaterial color={item.scene.accent} transparent opacity={0.55} />
        </mesh>
      </group>
    </Float>
  );
}

function DetailHotspots({ activeSlug }: { activeSlug?: string }) {
  const item = destinations.find((destination) => destination.slug === activeSlug);
  if (!item) return null;
  const [x, y, z] = item.scene.position;
  const points = [
    ...item.stays.slice(0, 2).map((_, index) => ({
      key: `stay-${index}`,
      position: [x - 0.22 - index * 0.13, y + 0.12, z + 0.2] as [number, number, number],
      color: "#f1d39a",
      kind: "stay",
    })),
    ...item.experiences.slice(0, 3).map((_, index) => ({
      key: `experience-${index}`,
      position: [x + 0.2 + index * 0.12, y + 0.08, z - 0.18] as [number, number, number],
      color: "#64d8cc",
      kind: "experience",
    })),
  ];

  return (
    <>
      {points.map((point) => (
        <mesh key={point.key} position={point.position}>
          {point.kind === "stay" ? (
            <boxGeometry args={[0.07, 0.07, 0.07]} />
          ) : (
            <octahedronGeometry args={[0.055]} />
          )}
          <meshStandardMaterial
            color={point.color}
            emissive={point.color}
            emissiveIntensity={0.75}
          />
        </mesh>
      ))}
    </>
  );
}

function SceneContent(props: WorldSceneProps) {
  const { mode, variant = "explorer", activeSlug, progress, onSelect } = props;

  return (
    <>
      <color attach="background" args={[variant === "hero" ? "#081511" : "#06110f"]} />
      <fog attach="fog" args={["#081511", 7, 20]} />
      <ambientLight intensity={0.75} />
      <hemisphereLight args={["#f5d9a4", "#0b3c3e", 1.15]} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={2.1}
        color="#ffe8bd"
        castShadow={mode === "full"}
      />
      <pointLight position={[-5, 2, -2]} intensity={1.2} color="#d19b55" />
      <Ocean mode={mode} />
      <IslandTerrain />
      <Palm position={[-0.4, 0.1, -2.3]} scale={0.9} />
      <Palm position={[0.55, 0.08, 1.45]} scale={0.72} />
      <Palm position={[0.1, 0.1, 2.7]} scale={0.6} />
      {variant === "explorer" &&
        destinations.map((item) => (
          <Hotspot
            key={item.slug}
            slug={item.slug}
            active={activeSlug === item.slug}
            onSelect={onSelect}
          />
        ))}
      {variant === "explorer" && <DetailHotspots activeSlug={activeSlug} />}
      {mode === "full" && (
        <>
          <Stars radius={35} depth={16} count={450} factor={1.4} fade speed={0.2} />
          <Sparkles count={45} scale={[10, 3, 10]} size={1.25} speed={0.15} color="#ead6a8" />
        </>
      )}
      {variant === "hero" ? (
        <HeroCameraRig progress={progress} />
      ) : (
        <ExplorerCamera activeSlug={activeSlug} />
      )}
    </>
  );
}

export function WorldScene(props: WorldSceneProps) {
  const dpr = props.mode === "full" ? [1, 1.5] : [0.75, 1.1];

  useEffect(() => {
    return () => {
      THREE.Cache.clear();
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0.2, 3.2, 7.2], fov: 42 }}
      dpr={dpr as [number, number]}
      shadows={props.mode === "full"}
      gl={{
        antialias: props.mode === "full",
        alpha: true,
        powerPreference: "high-performance",
      }}
      onPointerDown={() => props.onInteracting?.(true)}
      onPointerUp={() => props.onInteracting?.(false)}
      onPointerLeave={() => props.onInteracting?.(false)}
    >
      <PerformanceMonitor onDecline={() => props.onInteracting?.(false)}>
        <SceneContent {...props} />
      </PerformanceMonitor>
    </Canvas>
  );
}
