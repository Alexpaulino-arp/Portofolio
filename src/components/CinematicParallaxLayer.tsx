import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { useDepthParallax, ParallaxDepthTier, DepthParallaxOptions } from '../hooks/useDepthParallax';

export interface CinematicParallaxLayerProps extends DepthParallaxOptions {
  children: React.ReactNode;
  className?: string;
  useElementTracking?: boolean;
}

/**
 * CinematicParallaxLayer
 * 
 * Component wrapper that renders its children onto a depth-aware 3D parallax plane.
 * Coordinates with scroll position to produce realistic optical depth, elevation,
 * and spatial separation across the canvas.
 */
export const CinematicParallaxLayer: React.FC<CinematicParallaxLayerProps> = ({
  children,
  className = '',
  useElementTracking = false,
  ...options
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const parallaxOptions: DepthParallaxOptions = {
    ...options,
    targetRef: useElementTracking ? containerRef : undefined
  };

  const { style, opacity } = useDepthParallax(parallaxOptions);

  return (
    <div
      ref={containerRef}
      className="relative [perspective:1200px]"
    >
      <motion.div
        style={{
          ...style,
          opacity
        }}
        className={`w-full relative ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
