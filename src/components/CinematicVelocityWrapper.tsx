import React from 'react';
import { motion } from 'motion/react';
import { useScrollVelocityBlur, ScrollVelocityBlurOptions } from '../hooks/useScrollVelocityBlur';

interface CinematicVelocityWrapperProps extends ScrollVelocityBlurOptions {
  children: React.ReactNode;
  className?: string;
  showVelocityHud?: boolean;
}

/**
 * CinematicVelocityWrapper
 * 
 * High-performance motion container that applies real-time directional motion blur,
 * relativistic vertical stretch, and kinetic tilt based on the user's scroll velocity.
 */
export const CinematicVelocityWrapper: React.FC<CinematicVelocityWrapperProps> = ({
  children,
  className = '',
  showVelocityHud = false,
  ...options
}) => {
  const { motionStyle, isHighSpeed, direction, velocityIntensity } = useScrollVelocityBlur(options);

  return (
    <div className={`relative ${className}`}>
      {/* Dynamic Motion Blurred Container */}
      <motion.div
        style={motionStyle}
        className="w-full relative origin-center"
      >
        {children}
      </motion.div>

      {/* Optional High-Speed Telemetry Indicator */}
      {showVelocityHud && isHighSpeed && (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md text-[10px] font-mono text-neutral-300 shadow-2xl transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-bold tracking-wider uppercase">
            WARP VELOCITY: {Math.round(velocityIntensity * 100)}% [{direction.toUpperCase()}]
          </span>
        </div>
      )}
    </div>
  );
};
