"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Icosahedron, TorusKnot, Octahedron } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<Group>(null);
  useFrame((s, dt) => {
    if (!g.current) return;
    const scroll = typeof window === "undefined" ? 0 : window.scrollY / 800;
    g.current.rotation.y += (s.pointer.x * 0.6 + scroll - g.current.rotation.y) * Math.min(dt * 2, 1);
    g.current.rotation.x += (-s.pointer.y * 0.3 - g.current.rotation.x) * Math.min(dt * 2, 1);
    g.current.position.y = scroll * 1.5;
  });
  return <group ref={g}>{children}</group>;
}

export default function HeroScene({ reduced }: { reduced: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.75]} gl={{ antialias: true, powerPreference: "high-performance" }} aria-hidden>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#a78bfa" />
      <pointLight position={[-6, -3, 2]} intensity={40} color="#22d3ee" />
      <Stars radius={60} depth={40} count={reduced ? 800 : 2500} factor={3} fade speed={reduced ? 0 : 1} />
      <Rig>
        <Float speed={reduced ? 0 : 1.6} rotationIntensity={reduced ? 0 : 1} floatIntensity={reduced ? 0 : 1.5}>
          <Icosahedron args={[1.7, 12]} position={[2.2, 0, 0]}>
            <MeshDistortMaterial color="#7c5cff" emissive="#3b1fb8" emissiveIntensity={0.6} roughness={0.25} metalness={0.15} distort={reduced ? 0 : 0.45} speed={reduced ? 0 : 2} />
          </Icosahedron>
        </Float>
        <Float speed={reduced ? 0 : 2} floatIntensity={reduced ? 0 : 2}>
          <TorusKnot args={[0.45, 0.14, 160, 20]} position={[3.6, 2, -1]}>
            <meshStandardMaterial color="#22d3ee" metalness={0.9} roughness={0.2} />
          </TorusKnot>
        </Float>
        <Float speed={reduced ? 0 : 1.2} floatIntensity={reduced ? 0 : 2.5}>
          <Octahedron args={[0.6]} position={[3.2, -2.2, 0.5]}>
            <meshStandardMaterial color="#f472b6" wireframe />
          </Octahedron>
        </Float>
      </Rig>
    </Canvas>
  );
}
