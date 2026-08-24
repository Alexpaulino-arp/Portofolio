import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ArrowRight, Sparkles, Sun, Moon, Check, Compass, ShieldCheck } from 'lucide-react';
import { toggleCinematicSoundscape, triggerInteractiveResonance } from '../utils/soundscapeEngine';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface CinematicIntroSequenceProps {
  onComplete: () => void;
  replayKey?: number;
}

export const CinematicIntroSequence: React.FC<CinematicIntroSequenceProps> = ({ onComplete, replayKey = 0 }) => {
  const { theme, setTheme } = useTheme();
  const [selectedLayout, setSelectedLayout] = useState<ThemeMode | null>(null);
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const [confirmProgress, setConfirmProgress] = useState<number>(0);
  const [withSound, setWithSound] = useState<boolean>(true);

  // When user picks a layout
  const handleSelectLayout = (mode: ThemeMode) => {
    triggerInteractiveResonance('click');
    setSelectedLayout(mode);
    setTheme(mode);
    setIsConfirming(true);

    if (withSound) {
      toggleCinematicSoundscape(true, 'interstellar');
    }

    // Animate transition progress with adequate time to read the confirmation
    const startTime = Date.now();
    const duration = 3600; // 3.6s transition to allow comfortable reading
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setConfirmProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        triggerInteractiveResonance('nav');
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 30);
  };

  const handleQuickSkip = () => {
    triggerInteractiveResonance('nav');
    onComplete();
  };

  const layoutName = selectedLayout === 'light' ? 'White & Black (Architectural Light)' : 'Black & White (Obsidian Dark)';

  return (
    <motion.div
      key={`intro-${replayKey}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8 lg:p-12 bg-[#050505]/95 backdrop-blur-2xl text-white selection:bg-white selection:text-black overflow-y-auto pointer-events-auto"
    >
      {/* Background Ambient Textures */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-60" />
      <div className="absolute inset-0 subtle-scanlines pointer-events-none opacity-30" />
      
      {/* Horizon Accent Line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* TOP BAR: Telemetry & Audio Settings */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span className="text-neutral-300 font-semibold tracking-widest text-[11px] sm:text-xs">
            ALEXANDRE PAULINO // INITIAL EXPERIENCE SETUP
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerInteractiveResonance('click');
              setWithSound(!withSound);
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 hover:border-neutral-700 transition-colors text-[11px] font-mono cursor-pointer"
          >
            {withSound ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                <span>SOUND [ACTIVE]</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                <span>SOUND [MUTED]</span>
              </>
            )}
          </button>

          <button
            onClick={handleQuickSkip}
            className="px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs font-mono tracking-wider"
          >
            SKIP
          </button>
        </div>
      </div>

      {/* CENTER STAGE: WELCOME & THEME SELECTOR OR TRANSITION CONFIRMATION */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto w-full py-8 text-center">
        <AnimatePresence mode="wait">
          {!isConfirming ? (
            <motion.div
              key="selector-stage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Emblem Monogram */}
              <div className="w-12 h-12 rounded-full border border-neutral-700 bg-neutral-950 flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-white font-syne font-bold text-xs tracking-widest">AP</span>
              </div>

              {/* Title & Welcome Prompt */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight uppercase text-white leading-tight">
                  Welcome
                </h1>
                <p className="text-base sm:text-xl font-cinzel italic text-neutral-300 max-w-2xl mx-auto">
                  Before entering, which aesthetic layout do you prefer for your experience?
                </p>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Select your preferred architectural aesthetic
                </p>
              </div>

              {/* TWO INTERACTIVE OPTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-4 max-w-3xl mx-auto text-left">
                
                {/* OPTION 1: Black and White (Obsidian Dark) */}
                <button
                  onClick={() => handleSelectLayout('dark')}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-neutral-950/90 border-2 border-neutral-800 hover:border-white transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-left overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-700 text-white">
                        <Moon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                        OBSIDIAN DARK
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-syne font-bold text-white group-hover:text-white transition-colors">
                        Black and White
                      </h3>
                      <p className="text-xs font-mono text-neutral-400 mt-1">
                        Obsidian Dark Mode
                      </p>
                    </div>

                    <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                      Deep obsidian canvas, sharp white typography, cinematic contrast, and architectural illumination.
                    </p>

                    {/* Mini Visual Preview Card */}
                    <div className="p-3.5 rounded-xl bg-[#030303] border border-neutral-800 space-y-2 pointer-events-none">
                      <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500">
                        <span>PREVIEW // DARK</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <div className="h-2 w-3/4 bg-white/90 rounded-sm" />
                      <div className="h-1.5 w-1/2 bg-neutral-700 rounded-sm" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-white font-bold group-hover:translate-x-1 transition-transform">
                    <span>SELECT BLACK &amp; WHITE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* OPTION 2: White and Black (Architectural Light) */}
                <button
                  onClick={() => handleSelectLayout('light')}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white text-neutral-950 border-2 border-neutral-300 hover:border-black transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-left overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-neutral-100 border border-neutral-300 text-neutral-950">
                        <Sun className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600 uppercase tracking-wider font-semibold">
                        ARCHITECTURAL LIGHT
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-syne font-bold text-neutral-950 group-hover:text-black transition-colors">
                        White and Black
                      </h3>
                      <p className="text-xs font-mono text-neutral-600 mt-1">
                        Architectural Light Mode
                      </p>
                    </div>

                    <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                      Crystalline bright canvas, high-contrast black typography, editorial clarity, and minimalist refinement.
                    </p>

                    {/* Mini Visual Preview Card */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 pointer-events-none">
                      <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
                        <span>PREVIEW // LIGHT</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                      <div className="h-2 w-3/4 bg-black rounded-sm" />
                      <div className="h-1.5 w-1/2 bg-neutral-400 rounded-sm" />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-black font-bold group-hover:translate-x-1 transition-transform">
                    <span>SELECT WHITE &amp; BLACK</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

              </div>
            </motion.div>
          ) : (
            /* FANTASTIC TRANSITION CONFIRMATION SCREEN */
            <motion.div
              key="confirmation-stage"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-w-2xl mx-auto py-12"
            >
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-2xl shadow-white/20 animate-bounce">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white uppercase tracking-tight">
                  Excellent Choice!
                </h2>
                <p className="text-lg sm:text-2xl font-cinzel italic text-neutral-200 leading-relaxed">
                  Launching your customized experience in <span className="text-white font-bold underline underline-offset-8 decoration-1">{layoutName}</span>.
                </p>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest pt-2">
                  Initializing digital architecture &amp; interactive assets...
                </p>
              </div>

              {/* Dynamic Loading Meter */}
              <div className="space-y-2 max-w-md mx-auto pt-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>PREPARING ENVIRONMENT</span>
                  <span>{Math.round(confirmProgress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                  <motion.div
                    className="h-full bg-white transition-all ease-linear"
                    style={{ width: `${confirmProgress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER BAR */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-neutral-500 pt-4 border-t border-neutral-900/80">
        <span>ALEXANDRE PAULINO // DIGITAL ARCHITECTURE &amp; OPERATIONS</span>
        <span>YOU CAN SWITCH THE THEME AT ANY TIME IN THE TOP NAVIGATION BAR</span>
      </div>
    </motion.div>
  );
};

