import React, { useState, useEffect } from 'react';
import { CinematicNavigation, ActivePage } from './components/CinematicNavigation';
import { AtmosphericSoundscapeHUD } from './components/AtmosphericSoundscapeHUD';
import { CinematicIntroSequence } from './components/CinematicIntroSequence';
import { CinematicSpotlight } from './components/CinematicSpotlight';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AboutPage } from './pages/AboutPage';
import { EssencePage } from './pages/EssencePage';
import { ArchivesPage } from './pages/ArchivesPage';
import { TransmissionPage } from './pages/TransmissionPage';
import { triggerInteractiveResonance } from './utils/soundscapeEngine';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Refined, subtle page transition (No aggressive blur or circular distortion)
const cleanPageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

function AppContent() {
  const { isLight } = useTheme();
  const [activePage, setActivePage] = useState<ActivePage>('essence');
  const [showIntroSequence, setShowIntroSequence] = useState<boolean>(true);
  const [replayKey, setReplayKey] = useState<number>(0);

  const handlePageChange = (page: ActivePage) => {
    triggerInteractiveResonance('nav');
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayIntro = () => {
    setReplayKey((prev) => prev + 1);
    setShowIntroSequence(true);
  };

  const handleIntroComplete = () => {
    setShowIntroSequence(false);
  };

  return (
    <div className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-400 ${
      isLight 
        ? 'bg-[#fafafa] text-neutral-900 selection:bg-black selection:text-white' 
        : 'bg-[#030303] text-neutral-100 selection:bg-white selection:text-black'
    }`}>
      
      {/* 0. Cinematic Sequence Initial Overlay */}
      <AnimatePresence>
        {showIntroSequence && (
          <CinematicIntroSequence
            key={`intro-${replayKey}`}
            onComplete={handleIntroComplete}
            replayKey={replayKey}
          />
        )}
      </AnimatePresence>

      {/* 1. Ultra-subtle ambient spotlight glow */}
      <CinematicSpotlight 
        enabled={true}
        spotlightRadius={420}
        intensity={isLight ? 0.3 : 0.6}
        showReticle={false}
      />

      {/* 3. Ultra-minimalistic top scroll progress bar */}
      <ScrollProgressBar />

      {/* 4. Minimalist Navigation */}
      <CinematicNavigation
        activePage={activePage}
        onPageChange={handlePageChange}
        onReplayIntro={handleReplayIntro}
      />

      {/* 5. Ambient Atmospheric Soundscape HUD & Visualizer */}
      <AtmosphericSoundscapeHUD />

      {/* 6. Main Clean Content Views */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activePage === 'about' && (
            <motion.div
              key="about"
              variants={cleanPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <AboutPage onNavigate={handlePageChange} />
            </motion.div>
          )}

          {activePage === 'essence' && (
            <motion.div
              key="essence"
              variants={cleanPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <EssencePage onNavigate={handlePageChange} />
            </motion.div>
          )}

          {activePage === 'archives' && (
            <motion.div
              key="archives"
              variants={cleanPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ArchivesPage onNavigate={handlePageChange} />
            </motion.div>
          )}

          {activePage === 'transmission' && (
            <motion.div
              key="transmission"
              variants={cleanPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <TransmissionPage onNavigate={handlePageChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

