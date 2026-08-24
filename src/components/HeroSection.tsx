import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  SearchCheck, 
  FileCode, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { Hero3DCanvas } from './3d/Hero3DCanvas';
import { HERO_SNIPPETS, PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeSnippet = HERO_SNIPPETS[activeSnippetIdx];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stackPills = [
    { name: "Shopify Plus", icon: "🛍️", desc: "Headless & Liquid" },
    { name: "Zapier Certified", icon: "⚡", desc: "Enterprise Workflows" },
    { name: "Next.js / React 19", icon: "⚛️", desc: "Sub-50ms TTFB" },
    { name: "Technical SEO", icon: "🔍", desc: "Core Web Vitals 99+" },
    { name: "Duda & WordPress", icon: "🌐", desc: "Multi-Tenant Fleets" },
    { name: "GoHighLevel CRM", icon: "🚀", desc: "Automated Routing" }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-32 pb-20 overflow-hidden flex flex-col justify-center tech-grid">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Executive Authority Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-mono text-blue-300 shadow-lg shadow-blue-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">ALEXANDRE PAULINO</span>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-medium">FULL-STACK WEB OPERATIONS & CTO</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>4+ Years Agency Leadership</span>
          </div>
        </motion.div>

        {/* Grid Layout: Main Headline & 3D Interactive Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authority Copy & High Conversion CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* H1 Primary Authority Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-display font-extrabold tracking-tight text-white leading-[1.08]"
            >
              WEB DEVELOPMENT <span className="text-gradient-blue block sm:inline">ENGINEERING</span> &amp; <span className="text-gradient-amber">CTO STRATEGY</span>.
            </motion.h1>

            {/* H2 Subheadline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-blue-500/60 pl-4 bg-slate-900/30 py-2 rounded-r-lg"
            >
              {PERSONAL_INFO.subHeadline}
            </motion.h2>

            {/* Core Tech Stack Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2"
            >
              {stackPills.map((pill) => (
                <div 
                  key={pill.name} 
                  className="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all flex items-center gap-2 group"
                >
                  <span className="text-base">{pill.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">
                      {pill.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {pill.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* High-Impact CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={onOpenConsultation}
                id="hero-cta-button"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-display font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>LET'S ENGINEER YOUR NEXT PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#case-studies"
                className="px-6 py-4 rounded-xl bg-slate-900/90 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>VIEW MY WORKS</span>
              </a>
            </motion.div>

            {/* Agency Results summary */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>20+ Enterprise Builds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>500k+ Monthly Zapier Syncs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Core Web Vitals 99+</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D WebGL Sculpture & Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Interactive 3D WebGL Scene */}
            <Hero3DCanvas />

            {/* Live Technical Code Block Tabbed View */}
            <div className="glass-panel rounded-xl overflow-hidden border border-slate-800 shadow-xl">
              {/* Tab Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950/90 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {HERO_SNIPPETS.map((snippet, idx) => (
                    <button
                      key={snippet.tab}
                      onClick={() => setActiveSnippetIdx(idx)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        activeSnippetIdx === idx
                          ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span>{snippet.tab}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 pl-2">
                  <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">{activeSnippet.file}</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code display */}
              <div className="p-4 bg-slate-950/95 overflow-x-auto max-h-[190px] text-[11px] font-mono text-slate-300 leading-relaxed">
                <pre className="font-mono">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
