'use client';

import { useState, useEffect, useRef } from "react";

export const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;
  const CURSOR_OFFSET = 28; 

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

   
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target?.closest("a, button, img, input, textarea, select"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleOver);

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

     
      const targetX = mousePosition.current.x + CURSOR_OFFSET;
      const targetY = mousePosition.current.y + CURSOR_OFFSET;

      dotPosition.current.x = lerp(dotPosition.current.x, targetX, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, targetY, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, targetX, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, targetY, BORDER_DOT_SMOOTHNESS);

    
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${borderDotPosition.current.x}px, ${borderDotPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted) return null;

  return (
   <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
  <div
    ref={dotRef}
    className="absolute left-0 top-0 rounded-full bg-red-600 shadow-lg"
    style={{
      width: "10px",
      height: "10px",
    }}
  />

  <div
    ref={borderRef}
    className="absolute rounded-full border border-red-600/50 shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-[width,height] duration-300"
    style={{
      width: isHovering ? "50px" : "38px",
      height: isHovering ? "50px" : "38px",
    }}
  />
</div>
  );
};