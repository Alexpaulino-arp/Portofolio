import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles,
  Zap,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Engineering", href: "#hero" },
    { label: "About & Milestones", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Automation Lab", href: "#automation-lab" },
    { label: "My Works", href: "#case-studies" },
    { label: "Partnership & ROI", href: "#partnership" },
    { label: "Technical QA", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-base text-gradient-blue tracking-tighter">AP</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-slate-100 tracking-tight text-base sm:text-lg">
                  Alexandre Paulino
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  CTO & Web Ops
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wide">
                4+ Yrs Agency Leadership
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Availability Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Q3/Q4 CTO Engagements</span>
            </div>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-500 rounded-xl animate-pulse"></span>
              <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-slate-950 text-white group-hover:bg-slate-900 transition-colors">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Schedule Strategic Consult</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 sm:hidden"
              aria-label="Book Call"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Technical Leadership Engagements</span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Schedule a Strategic Consult</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
