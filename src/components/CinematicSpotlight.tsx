import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { Sparkles, Eye, Lightbulb } from 'lucide-react';

interface CinematicSpotlightProps {
  enabled?: boolean;
  spotlightRadius?: number;
  intensity?: number;
  color?: string; // e.g., 'rgba(255, 255, 255, 0.08)'
  showReticle?: boolean;
}

/**
 * CinematicSpotlight
 * 
 * Dynamic Stage Spotlight component that follows the cursor using smooth spring physics.
 * Creates an art-gallery/theatrical stage lighting mask over the page content,
 * illuminating text, metallic borders, and interactive elements with optical lens physics.
 */
export const CinematicSpotlight: React.FC<CinematicSpotlightProps> = ({
  enabled = true,
  spotlightRadius = 380,
  intensity = 1.0,
  showReticle = true
}) => {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(false);
  const [spotlightMode, setSpotlightMode] = useState<'stage' | 'focus' | 'minimal'>('stage');
  const [isUserEnabled, setIsUserEnabled] = useState(enabled);

  // Mouse Coordinates with high-precision springs
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Outer lag spring for optical lens ring
  const lagConfig = { damping: 40, stiffness: 120, mass: 0.6 };
  const lagX = useSpring(mouseX, lagConfig);
  const lagY = useSpring(mouseY, lagConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let idleTimer: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsMouseActive(true);

      // Check if mouse is hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, textarea, select, [role="button"], .interactive-target, [data-interactive]')
        );
        setIsHoveringInteractive(isInteractive);
      }

      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        setIsMouseActive(false);
      }, 4000);
    };

    const handleMouseLeave = () => {
      setIsMouseActive(false);
      setIsHoveringInteractive(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.clearTimeout(idleTimer);
    };
  }, [mouseX, mouseY]);

  if (!isUserEnabled) {
    return null;
  }

  // Dynamic radius based on interaction
  const currentRadius = isHoveringInteractive 
    ? spotlightRadius * 1.25 
    : spotlightMode === 'focus' 
      ? spotlightRadius * 0.7 
      : spotlightRadius;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden transition-opacity duration-700"
      style={{ opacity: isMouseActive ? 1 : 0.4 }}
    >
      {/* 1. Main Subtle Stage Glow (Ultra gentle, non-intrusive) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(circle ${currentRadius}px at ${x}px ${y}px, rgba(255, 255, 255, ${0.035 * intensity}) 0%, rgba(255, 255, 255, 0) 70%)`
          ),
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
