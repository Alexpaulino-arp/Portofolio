import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sliders, 
  Sparkles, 
  Radio, 
  Activity, 
  ChevronUp, 
  ChevronDown,
  X,
  Disc,
  Headphones,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  subscribeSoundscape, 
  toggleCinematicSoundscape, 
  setSoundscapeVolume, 
  setSoundscapeMode, 
  setInteractiveFxEnabled,
  getSoundscapeAnalyser,
  triggerInteractiveResonance,
  SoundscapeMode 
} from '../utils/soundscapeEngine';
import { useTheme } from '../context/ThemeContext';

export const AtmosphericSoundscapeHUD: React.FC = () => {
  const { isLight } = useTheme();
  const [soundState, setSoundState] = useState({
    isPlaying: false,
    mode: 'interstellar' as SoundscapeMode,
    volume: 0.75,
    interactiveFxEnabled: true,
    tempo: 66,
    currentChordName: 'A Minor (Day One)'
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Subscribe to engine state
  useEffect(() => {
    const unsubscribe = subscribeSoundscape((st) => {
      setSoundState(st);
    });
    return () => unsubscribe();
  }, []);

  // Visualizer Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const draw = () => {
      const analyser = getSoundscapeAnalyser();
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      if (soundState.isPlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Draw frequency bars
        const barWidth = (width / bufferLength) * 2.2;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * (height * 0.85);
          
          // Monochrome gradient
          const alpha = Math.max(0.2, dataArray[i] / 255);
          ctx.fillStyle = isLight ? `rgba(0, 0, 0, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
          
          ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
          x += barWidth;
        }

        // Draw smooth sinusoidal overlay wave
        ctx.beginPath();
        ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.2;
        for (let j = 0; j < width; j++) {
          const y = height / 2 + Math.sin(j * 0.05 + phase) * 4;
          if (j === 0) ctx.moveTo(j, y);
          else ctx.lineTo(j, y);
        }
        ctx.stroke();
        phase += 0.04;
      } else {
        // Idle heartbeat line when off
        ctx.beginPath();
        ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.2)' : 'rgba(115, 115, 115, 0.3)';
        ctx.lineWidth = 1;
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [soundState.isPlaying, isLight]);

  const handleToggle = () => {
    triggerInteractiveResonance('click');
    toggleCinematicSoundscape();
  };

  const modes: { id: SoundscapeMode; label: string; sub: string }[] = [
    { id: 'interstellar', label: '01 // INTERSTELLAR (HANS ZIMMER)', sub: 'Church organ, Day One arpeggios & clock ticks' },
    { id: 'sentimental', label: '02 // SENTIMENTAL SOUL', sub: 'D-Minor cinematic space chord' },
    { id: 'deep-sub', label: '03 // DEEP SUB MONOLITH', sub: '36Hz monolithic sub-bass drone' },
    { id: 'celestial', label: '04 // CELESTIAL HORIZON', sub: 'High ether & harmonic shimmer' }
  ];

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-40 pointer-events-auto">
      <motion.div
        layout
        className={`mono-card rounded-2xl border shadow-2xl overflow-hidden transition-colors ${
          isLight 
            ? 'bg-white/95 border-neutral-200 shadow-neutral-300/40 text-neutral-800' 
            : 'bg-neutral-950/90 border-neutral-800 shadow-black/80 text-white'
        }`}
      >
        {/* Minimized Bar */}
        <div className="p-2.5 sm:p-3 flex items-center gap-3">
          {/* Visualizer Canvas Badge */}
          <div className={`w-16 h-7 rounded-lg overflow-hidden border flex items-center justify-center relative ${
            isLight ? 'bg-neutral-100 border-neutral-300' : 'bg-neutral-900/90 border-neutral-800'
          }`}>
            <canvas
              ref={canvasRef}
              width={64}
              height={28}
              className="w-full h-full block"
            />
          </div>

          {/* Toggle Button */}
          <button
            onClick={handleToggle}
            className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              soundState.isPlaying
                ? isLight
                  ? 'bg-black text-white border-black font-bold'
                  : 'bg-white text-black border-white font-bold'
                : isLight
                  ? 'bg-neutral-100 border-neutral-300 text-neutral-600 hover:text-black'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
            title="Toggle Soundscape"
          >
            {soundState.isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline text-[11px]">SOUND [ON]</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">OFF</span>
              </>
            )}
          </button>

          {/* Expand / Minimize Controls */}
          <button
            onClick={() => {
              triggerInteractiveResonance('click');
              setIsExpanded(!isExpanded);
            }}
            className={`p-2 rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer text-[11px] font-mono ${
              isLight
                ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black border-neutral-300'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border-neutral-800'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">CONSOLE</span>
            {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
        </div>

          {/* Expanded Control Matrix */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-5 border-t space-y-5 w-72 sm:w-80 ${
                  isLight ? 'border-neutral-200' : 'border-neutral-900'
                }`}
              >
                {/* Header status */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className={`uppercase tracking-widest font-bold ${isLight ? 'text-neutral-700' : 'text-neutral-400'}`}>
                      INTERSTELLAR TELEMETRY
                    </span>
                    <span className={soundState.isPlaying ? (isLight ? 'text-emerald-600' : 'text-emerald-400') : (isLight ? 'text-neutral-400' : 'text-neutral-600')}>
                      ● {soundState.isPlaying ? 'PLAYING ~66 BPM' : 'STANDBY'}
                    </span>
                  </div>
                  {soundState.isPlaying && (
                    <div className={`text-[10px] font-mono px-2 py-1 rounded border flex items-center justify-between ${
                      isLight ? 'text-neutral-800 bg-neutral-100 border-neutral-300' : 'text-neutral-300 bg-neutral-900 border-neutral-800'
                    }`}>
                      <span className={isLight ? 'text-neutral-500' : 'text-neutral-400'}>CHORD:</span>
                      <span className={`font-bold ${isLight ? 'text-black' : 'text-white'}`}>{soundState.currentChordName || 'A Minor'}</span>
                    </div>
                  )}
                </div>

                {/* Soundscape Presets */}
                <div className="space-y-2">
                  <div className={`text-[10px] font-mono uppercase tracking-wider ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    Atmospheric Modes
                  </div>
                  <div className="space-y-1.5">
                    {modes.map((m) => {
                      const isSelected = soundState.mode === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => {
                            triggerInteractiveResonance('nav');
                            setSoundscapeMode(m.id);
                            if (!soundState.isPlaying) {
                              toggleCinematicSoundscape(true, m.id);
                            }
                          }}
                          className={`w-full p-2.5 rounded-xl text-left font-mono transition-all flex flex-col cursor-pointer border ${
                            isSelected
                              ? isLight
                                ? 'bg-black text-white border-black font-semibold shadow-md'
                                : 'bg-white text-black border-white font-semibold shadow-lg shadow-white/5'
                              : isLight
                                ? 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
                                : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                          }`}
                        >
                          <span className="text-xs font-bold">{m.label}</span>
                          <span className={`text-[10px] mt-0.5 ${isSelected ? (isLight ? 'text-neutral-300' : 'text-neutral-600') : (isLight ? 'text-neutral-400' : 'text-neutral-500')}`}>
                            {m.sub}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Volume Slider */}
                <div className="space-y-1.5">
                  <div className={`flex items-center justify-between text-[10px] font-mono ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    <span>MASTER GAIN LEVEL</span>
                    <span>{Math.round(soundState.volume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={soundState.volume}
                    onChange={(e) => setSoundscapeVolume(parseFloat(e.target.value))}
                    className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer ${
                      isLight ? 'bg-neutral-200 accent-black' : 'bg-neutral-800 accent-white'
                    }`}
                  />
                </div>

                {/* Interactive Acoustic FX Toggle */}
                <div className={`pt-2 border-t flex items-center justify-between text-xs font-mono ${
                  isLight ? 'border-neutral-200' : 'border-neutral-900'
                }`}>
                  <div className="space-y-0.5">
                    <div className={`text-[11px] font-medium ${isLight ? 'text-neutral-800' : 'text-neutral-300'}`}>UI Acoustic Haptics</div>
                    <div className={`text-[9px] ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>Resonant clicks &amp; transitions</div>
                  </div>
                  <button
                    onClick={() => {
                      triggerInteractiveResonance('click');
                      setInteractiveFxEnabled(!soundState.interactiveFxEnabled);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors cursor-pointer border ${
                      soundState.interactiveFxEnabled
                        ? isLight
                          ? 'bg-black border-black text-white font-bold'
                          : 'bg-neutral-800 border-neutral-600 text-white font-bold'
                        : isLight
                          ? 'bg-neutral-100 border-neutral-300 text-neutral-500'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-500'
                    }`}
                  >
                    {soundState.interactiveFxEnabled ? 'ENABLED' : 'MUTED'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
};

