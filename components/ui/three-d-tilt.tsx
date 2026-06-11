'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees
  perspective?: number; // 3D Perspective depth in pixels
  scale?: number; // Scale factor on hover
}

export const ThreeDTilt: React.FC<ThreeDTiltProps> = ({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.04,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking tilt angles
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Smooth springs for buttery transitions
  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  // Motion values for tracking shininess coordinates
  const shineX = useMotionValue(0);
  const shineY = useMotionValue(0);
  const shineXSpring = useSpring(shineX, springConfig);
  const shineYSpring = useSpring(shineY, springConfig);
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Coordinates relative to the center of the element
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Convert to tilt values (X tilt is vertical tilt from Y mouse movement, and vice versa)
    const rY = (mouseX / (width / 2)) * maxTilt;
    const rX = -(mouseY / (height / 2)) * maxTilt;
    
    rotateX.set(rX);
    rotateY.set(rY);

    // Dynamic metallic shine light beam percentage coordinates
    const shinePercentX = ((e.clientX - rect.left) / width) * 100;
    const shinePercentY = ((e.clientY - rect.top) / height) * 100;
    
    shineX.set(shinePercentX);
    shineY.set(shinePercentY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    shineX.set(50);
    shineY.set(50);
  };

  // Create standard reflection shine overlay
  const shineBg = useTransform(
    [shineXSpring, shineYSpring],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0) 65%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? scale : 1,
        z: isHovered ? 15 : 0,
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: `${perspective}px`,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
      }}
      className={`relative transition-shadow duration-300 ${
        isHovered ? 'shadow-[0_20px_50px_rgba(225,29,72,0.15)] dark:shadow-[0_20px_50px_rgba(225,29,72,0.25)]' : ''
      } ${className}`}
    >
      {/* Shine Reflection Layer */}
      {/* <motion.div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden"
        style={{
          background: shineBg,
          mixBlendMode: 'overlay',
        }}
      /> */}
      
      {/* Depth Inner Wrapper */}
      <div 
        style={{ 
          transform: 'translateZ(30px)', 
          transformStyle: 'preserve-3d' 
        }} 
        className="h-full w-full rounded-[inherit] overflow-hidden"
      >
        {children}
      </div>
    </motion.div>
  );
};
