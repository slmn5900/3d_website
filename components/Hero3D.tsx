"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

// Lazy-mount the WebGL canvas after first paint so it never blocks LCP/INP.
export default function Hero3D() {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const idle = (window as any).requestIdleCallback ?? ((fn: () => void) => setTimeout(fn, 200));
    idle(() => setReady(true));
  }, []);
  return <div className="hero3d">{ready && <HeroScene reduced={reduced} />}</div>;
}
