import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none overflow-hidden bg-neutral-900/40"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-neutral-500 via-neutral-200 to-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        style={{ scaleX }}
      />
    </div>
  );
};
