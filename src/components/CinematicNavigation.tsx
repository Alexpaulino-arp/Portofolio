import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight, Radio, Compass, Disc, Send, Sparkles, Sun, Moon } from 'lucide-react';
import { toggleCinematicSoundscape, subscribeSoundscape, triggerInteractiveResonance } from '../utils/soundscapeEngine';
import { useTheme } from '../context/ThemeContext';

export type ActivePage = 'about' | 'essence' | 'archives' | 'transmission';

interface CinematicNavigationProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  onReplayIntro?: () => void;
}

export const CinematicNavigation: React.FC<CinematicNavigationProps> = ({ activePage, onPageChange, onReplayIntro }) => {
  const { theme, toggleTheme, isLight, themeLabel } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${minutes}:${seconds} UTC`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsub = subscribeSoundscape((state) => {
      setSoundEnabled(state.isPlaying);
    });
    return () => unsub();
  }, []);

  const handleToggleSound = () => {
    triggerInteractiveResonance('click');
    toggleCinematicSoundscape();
  };

  const handleNav = (page: ActivePage) => {
    triggerInteractiveResonance('nav');
    onPageChange(page);
  };

  const handleToggleTheme = () => {
    triggerInteractiveResonance('click');
    toggleTheme();
  };

  const navItems: { id: ActivePage; number: string; title: string; subtitle: string }[] = [
    { id: 'essence', number: '01', title: 'MY HOME', subtitle: 'Overview & Delivery Pipeline' },
    { id: 'about', number: '02', title: 'ABOUT ALEXANDRE', subtitle: 'Bio, Experience & Certs' },
    { id: 'archives', number: '03', title: 'MY WORKS', subtitle: 'Delivered Projects & Solutions' },
    { id: 'transmission', number: '04', title: 'CONTACT', subtitle: 'Direct Inquiries' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-colors duration-300">
      {/* Top Meta Line / Frame */}
      <div className={`w-full backdrop-blur-xl border-b pointer-events-auto px-4 sm:px-8 py-3.5 flex items-center justify-between text-xs font-mono transition-colors duration-300 ${
        isLight 
          ? 'bg-[#ffffff]/90 border-neutral-200 text-neutral-600 shadow-sm' 
          : 'bg-[#030303]/80 border-neutral-900 text-neutral-400'
      }`}>
        
        {/* Left: Architect Brand & Intro Replay */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={() => handleNav('essence')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className={`w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform ${isLight ? 'bg-black' : 'bg-white'}`} />
            <div>
              <span className={`font-syne font-bold tracking-widest text-sm uppercase transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                ALEXANDRE PAULINO
              </span>
              <span className={`hidden sm:inline-block ml-2 text-[11px] font-mono ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
                [ DIGITAL PM &amp; TECH OPERATIONS ]
              </span>
            </div>
          </button>

          {onReplayIntro && (
            <button
              onClick={() => {
                triggerInteractiveResonance('click');
                onReplayIntro();
              }}
              className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-mono transition-colors cursor-pointer ${
                isLight
                  ? 'border-neutral-300 bg-neutral-100 hover:border-neutral-400 text-neutral-700 hover:text-black'
                  : 'border-neutral-800 bg-neutral-950 hover:border-neutral-600 text-neutral-400 hover:text-white'
              }`}
              title="Re-open Welcome & Layout Selection"
            >
              <Sparkles className="w-3 h-3" />
              <span>LAYOUT SELECTOR</span>
            </button>
          )}
        </div>

        {/* Center: 3 Page Main Tab Switcher */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-2xl border transition-colors ${
          isLight 
            ? 'bg-neutral-100 border-neutral-200' 
            : 'bg-neutral-950 border-neutral-800/80'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-black text-white font-bold shadow-md'
                      : 'bg-white text-black font-bold shadow-lg shadow-white/10'
                    : isLight
                      ? 'text-neutral-600 hover:text-black hover:bg-neutral-200/70'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <span className={`text-[10px] ${isActive ? (isLight ? 'text-neutral-300' : 'text-neutral-600') : (isLight ? 'text-neutral-400' : 'text-neutral-500')}`}>
                  {item.number}
                </span>
                <span className="tracking-wider">{item.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Theme Toggle, Soundscape & Timecode */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* THEME TOGGLE: WHITE & BLACK VS BLACK & WHITE */}
          <button
            onClick={handleToggleTheme}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-mono transition-all cursor-pointer ${
              isLight
                ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-900'
                : 'bg-neutral-950/90 hover:bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
            }`}
            title={`Toggle Layout: currently ${themeLabel}`}
          >
            {isLight ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-black hidden sm:inline">WHITE &amp; BLACK</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-neutral-300" />
                <span className="font-semibold text-white hidden sm:inline">BLACK &amp; WHITE</span>
              </>
            )}
          </button>

          {/* Soundscape Ambience Controller */}
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-mono transition-all cursor-pointer ${
              soundEnabled
                ? isLight
                  ? 'bg-black text-white border-black font-semibold'
                  : 'bg-white text-black border-white font-semibold'
                : isLight
                  ? 'bg-neutral-100 border-neutral-300 text-neutral-600 hover:text-black hover:border-neutral-400'
                  : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
            }`}
            title="Toggle Ambient Cinematic Soundscape"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden lg:inline">OST [ON]</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
                <span className="hidden lg:inline">OST [OFF]</span>
              </>
            )}
          </button>

          {/* Timecode indicator */}
          <div className={`hidden xl:flex items-center gap-2 text-[11px] font-mono ${isLight ? 'text-neutral-500' : 'text-neutral-500'}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isLight ? 'bg-neutral-400' : 'bg-neutral-600'}`} />
            <span>{utcTime}</span>
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => handleNav('transmission')}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              isLight
                ? 'bg-black hover:bg-neutral-800 text-white border-black shadow-sm'
                : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-neutral-200'
            }`}
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Mobile Floating Bottom Bar for 3 Pages */}
      <div className="md:hidden fixed bottom-5 left-4 right-4 z-50 pointer-events-auto">
        <div className={`rounded-2xl p-1.5 flex items-center justify-around border shadow-2xl backdrop-blur-2xl transition-colors ${
          isLight
            ? 'bg-white/95 border-neutral-200 shadow-neutral-300/50'
            : 'bg-neutral-950/90 border-neutral-800 shadow-black/80'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  handleNav(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex-1 py-2 px-1 text-center rounded-xl text-[11px] font-mono transition-all flex flex-col items-center gap-0.5 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'bg-black text-white font-bold'
                      : 'bg-white text-black font-bold'
                    : isLight
                      ? 'text-neutral-600 hover:text-black'
                      : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span className="text-[9px] opacity-60">{item.number}</span>
                <span className="tracking-wider">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

