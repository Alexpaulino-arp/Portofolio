import React, { useRef } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

export type ParallaxDepthTier = 'deep' | 'background' | 'midground' | 'foreground' | 'floating';

export interface DepthParallaxOptions {
  /**
   * Depth tier or custom numeric factor.
   * 'deep': slow background layer (moves slightly up or stays back)
   * 'background': subtle parallax (speed ~ 0.15)
   * 'midground': neutral baseline (speed 0 or subtle)
   * 'foreground': faster forward layer (speed ~ 0.35, lifts off z-plane)
   * 'floating': extreme high-velocity forward layer (speed ~ 0.65, strong z-elevation)
   */
  depth?: ParallaxDepthTier | number;
  /**
   * Custom speed multiplier (positive moves against scroll, negative moves with scroll)
   */
  speed?: number;
  /**
   * Maximum translation Y in pixels (default: 120)
   */
  maxOffset?: number;
  /**
   * Z-elevation in pixels for 3D depth perception (e.g. 40px)
   */
  zElevation?: number;
  /**
   * Subtle 3D perspective tilt on scroll (default: false)
   */
  enableTilt?: boolean;
  /**
   * Target element container ref (optional, defaults to window scroll)
   */
  targetRef?: React.RefObject<HTMLElement | null>;
  /**
   * Spring smoothing config
   */
  spring?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export interface DepthParallaxReturn {
  y: MotionValue<number>;
  z: MotionValue<number>;
  rotateX: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  style: {
    y: MotionValue<number>;
    z: MotionValue<number>;
    rotateX: MotionValue<number>;
    scale: MotionValue<number>;
    transformStyle: string;
    willChange: string;
  };
}

const DEPTH_SPEED_MAP: Record<ParallaxDepthTier, { speed: number; z: number; scale: number }> = {
  deep: { speed: -0.15, z: -80, scale: 0.95 },
  background: { speed: -0.08, z: -30, scale: 0.98 },
  midground: { speed: 0.05, z: 0, scale: 1.0 },
  foreground: { speed: 0.22, z: 45, scale: 1.02 },
  floating: { speed: 0.45, z: 90, scale: 1.05 }
};

/**
 * useDepthParallax
 * 
 * Custom hook that creates depth-aware spatial layers responding to scroll position,
 * delivering an infinite cinematic field of view.
 */
export function useDepthParallax(options: DepthParallaxOptions = {}): DepthParallaxReturn {
  const {
    depth = 'midground',
    speed: customSpeed,
    maxOffset = 180,
    zElevation: customZ,
    enableTilt = false,
    targetRef,
    spring = { stiffness: 280, damping: 30, mass: 0.2 }
  } = options;

  const { scrollY, scrollYProgress } = useScroll(
    targetRef?.current ? { target: targetRef, offset: ['start end', 'end start'] } : {}
  );

  let speedFactor = 0.05;
  let baseZ = 0;
  let baseScale = 1.0;

  if (typeof depth === 'number') {
    speedFactor = depth;
    baseZ = depth * 60;
    baseScale = 1 + depth * 0.05;
  } else if (DEPTH_SPEED_MAP[depth]) {
    const config = DEPTH_SPEED_MAP[depth];
    speedFactor = config.speed;
    baseZ = config.z;
    baseScale = config.scale;
  }

  if (customSpeed !== undefined) {
    speedFactor = customSpeed;
  }
  if (customZ !== undefined) {
    baseZ = customZ;
  }

  // Smooth scroll progression
  const smoothProgress = useSpring(
    targetRef?.current ? scrollYProgress : scrollY,
    { stiffness: spring.stiffness, damping: spring.damping, mass: spring.mass }
  );

  // Y-translation calculation
  const rawY = useTransform(smoothProgress, (val) => {
    if (targetRef?.current) {
      // Progress 0 -> 1 mapped around center 0.5
      const delta = (val - 0.5) * 2;
      return -delta * speedFactor * maxOffset;
    } else {
      // Direct window scrollY in pixels
      const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, val * speedFactor));
      return -clampedOffset;
    }
  });

  const y = useSpring(rawY, { stiffness: spring.stiffness, damping: spring.damping });

  // 3D Z-elevation
  const rawZ = useTransform(smoothProgress, (val) => {
    if (targetRef?.current) {
      const distFromCenter = 1 - Math.abs(val - 0.5) * 2;
      return baseZ * Math.max(0.4, distFromCenter);
    }
    return baseZ;
  });
  const z = useSpring(rawZ, { stiffness: 200, damping: 25 });

  // Subtle 3D perspective pitch (rotateX)
  const rawRotateX = useTransform(smoothProgress, (val) => {
    if (!enableTilt) return 0;
    if (targetRef?.current) {
      return (val - 0.5) * 8 * (speedFactor > 0 ? 1 : -1);
    }
    return Math.sin(val * 0.002) * 4;
  });
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 28 });

  // Scale depth cue
  const scale = useTransform(z, (currentZ) => {
    return baseScale + (currentZ / 1000);
  });

  // Opacity falloff for extreme deep elements
  const opacity = useTransform(z, (currentZ) => {
    if (currentZ < -50) return 0.75;
    return 1.0;
  });

  return {
    y,
    z,
    rotateX,
    scale,
    opacity,
    style: {
      y,
      z,
      rotateX,
      scale,
      transformStyle: 'preserve-3d',
      willChange: 'transform'
    }
  };
}
