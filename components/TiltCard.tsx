"use client";
import { useRef } from "react";

// CSS 3D tilt following the pointer.
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>{children}</div>;
}
