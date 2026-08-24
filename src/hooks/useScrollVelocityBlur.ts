import { useRef, useEffect, useState } from 'react';
import { useScroll, useVelocity, useSpring, useTransform, MotionValue } from 'motion/react';

export interface ScrollVelocityBlurOptions {
  /**
   * Maximum blur in pixels at peak velocity (default: 8)
   */
  maxBlur?: number;
  /**
   * Maximum vertical stretch scale factor during high-speed scroll (default: 1.025)
   */
  maxScaleY?: number;
  /**
   * Maximum skew angle in degrees for kinetic tilt (default: 1.2)
   */
  maxSkewY?: number;
  /**
   * Velocity threshold in pixels/sec to reach peak motion blur (default: 2400)
   */
  velocityThreshold?: number;
  /**
   * Spring stiffness for momentum recovery (default: 320)
   */
  stiffness?: number;
  /**
   * Spring damping for inertia settling (default: 35)
   */
  damping?: number;
  /**
   * Enable subtle directional parallax shift based on velocity (default: true)
   */
  enableDirectionalShift?: boolean;
}

export interface ScrollVelocityBlurReturn {
  /**
   * Raw scroll velocity MotionValue (px/s)
   */
  scrollVelocity: MotionValue<number>;
  /**
   * Smoothed velocity through a spring physics simulation
   */
  smoothVelocity: MotionValue<number>;
  /**
   * Computed blur amount in pixels (0 to maxBlur)
   */
  blur: MotionValue<number>;
  /**
   * CSS filter string: "blur(Xpx)"
   */
  filter: MotionValue<string>;
  /**
   * Vertical scale stretch MotionValue
   */
  scaleY: MotionValue<number>;
  /**
   * Kinetic skew angle MotionValue
   */
  skewY: MotionValue<number>;
  /**
   * Subtle directional parallax translation MotionValue
   */
  y: MotionValue<number>;
  /**
   * Complete style object ready to be passed directly to any motion.div
   */
  motionStyle: {
    filter: MotionValue<string>;
    scaleY: MotionValue<number>;
    skewY: MotionValue<number>;
    y: MotionValue<number>;
    transformOrigin: string;
    willChange: string;
  };
  /**
   * Current scroll direction: 'down' | 'up' | 'idle'
   */
  direction: 'down' | 'up' | 'idle';
  /**
   * Boolean state indicating if the user is currently scrolling at high velocity
   */
  isHighSpeed: boolean;
  /**
   * Numeric normalized velocity value (0 to 1) for external HUDs or telemetry
   */
  velocityIntensity: number;
}

/**
 * Custom Framer Motion Hook: useScrollVelocityBlur
 * 
 * Computes dynamic scroll velocity and produces directional motion blur, relativistic
 * dimensional stretch, and kinetic tilt for an ultra-high-speed cinematic feeling.
 */
export function useScrollVelocityBlur(options: ScrollVelocityBlurOptions = {}): ScrollVelocityBlurReturn {
  const {
    maxBlur = 8,
    maxScaleY = 1.025,
    maxSkewY = 1.2,
    velocityThreshold = 2400,
    stiffness = 320,
    damping = 35,
    enableDirectionalShift = true
  } = options;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out raw velocity with spring physics
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness,
    damping,
    mass: 0.25,
    restDelta: 0.001
  });

  // Calculate blur (0 to maxBlur px) based on absolute velocity
  const blur = useTransform(smoothVelocity, (latest) => {
    const absV = Math.abs(latest);
    const ratio = Math.min(1, absV / velocityThreshold);
    // Smooth quadratic ease-out curve for natural camera shutter blur
    const eased = 1 - Math.pow(1 - ratio, 2);
    return Math.round((eased * maxBlur) * 100) / 100;
  });

  // Format as CSS filter string
  const filter = useTransform(blur, (b) => (b > 0.1 ? `blur(${b}px)` : 'blur(0px)'));

  // Directional scale stretch (stretching along the Y-axis in the direction of travel)
  const scaleY = useTransform(smoothVelocity, (latest) => {
    const absV = Math.abs(latest);
    const ratio = Math.min(1, absV / velocityThreshold);
    return 1 + ratio * (maxScaleY - 1);
  });

  // Kinetic skew tilt (subtle perspective distortion based on velocity vector)
  const skewY = useTransform(smoothVelocity, (latest) => {
    const clampedV = Math.max(-velocityThreshold, Math.min(velocityThreshold, latest));
    const ratio = clampedV / velocityThreshold;
    return ratio * maxSkewY;
  });

  // Subtle directional micro-shift (compensates for eye tracking during rapid acceleration)
  const y = useTransform(smoothVelocity, (latest) => {
    if (!enableDirectionalShift) return 0;
    const clampedV = Math.max(-velocityThreshold, Math.min(velocityThreshold, latest));
    const ratio = clampedV / velocityThreshold;
    return -ratio * 6; // max 6px directional compensation
  });

  // Reactive state for HUD / telemetry
  const [direction, setDirection] = useState<'down' | 'up' | 'idle'>('idle');
  const [isHighSpeed, setIsHighSpeed] = useState<boolean>(false);
  const [velocityIntensity, setVelocityIntensity] = useState<number>(0);

  useEffect(() => {
    let lastDir: 'down' | 'up' | 'idle' = 'idle';
    let lastHighSpeed = false;

    const unsubscribe = smoothVelocity.on('change', (v) => {
      const absV = Math.abs(v);
      const intensity = Math.min(1, absV / velocityThreshold);
      setVelocityIntensity(Math.round(intensity * 100) / 100);

      const high = absV > 600;
      if (high !== lastHighSpeed) {
        lastHighSpeed = high;
        setIsHighSpeed(high);
      }

      let currentDir: 'down' | 'up' | 'idle' = 'idle';
      if (v > 80) currentDir = 'down';
      else if (v < -80) currentDir = 'up';

      if (currentDir !== lastDir) {
        lastDir = currentDir;
        setDirection(currentDir);
      }
    });

    return () => unsubscribe();
  }, [smoothVelocity, velocityThreshold]);

  return {
    scrollVelocity,
    smoothVelocity,
    blur,
    filter,
    scaleY,
    skewY,
    y,
    motionStyle: {
      filter,
      scaleY,
      skewY,
      y,
      transformOrigin: '50% 50%',
      willChange: 'transform, filter'
    },
    direction,
    isHighSpeed,
    velocityIntensity
  };
}
