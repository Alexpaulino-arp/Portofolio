import React, { useState } from 'react';
import { 
  ArrowRight, 
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';
import { PILLARS, PHILOSOPHY_QUOTES, MASTERED_ARSENAL } from '../data/monochromeData';
import { TechArsenalLogo } from '../components/TechArsenalLogo';
import { BrandShowcase } from '../components/BrandShowcase';
import { AgencyCaseStudy } from '../components/AgencyCaseStudy';
import { PlatformMatrix } from '../components/PlatformMatrix';
import { ProjectManagementPipeline3D } from '../components/ProjectManagementPipeline3D';
import { EngagementWorkflow } from '../components/EngagementWorkflow';
import { WebDevelopmentFAQ } from '../components/WebDevelopmentFAQ';
import { ActivePage } from '../components/CinematicNavigation';

interface EssencePageProps {
  onNavigate: (page: ActivePage) => void;
}

export const EssencePage: React.FC<EssencePageProps> = ({ onNavigate }) => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const metrics = [
    {
      value: "10+ YEARS",
      label: "WEB & TECH OPERATIONS",
      note: "Leading digital projects, cross-functional teams, and seamless web deliveries."
    },
    {
      value: "CUSTOM & NO-CODE",
      label: "END-TO-END SOLUTIONS",
      note: "Architecting and launching robust platforms across Shopify, WordPress, Hubspot, Duda, GHL."
    },
    {
      value: "COMPLEX WORKFLOWS",
      label: "OPERATIONS SCALED",
      note: "Streamlining business processes and scaling efficiency through advanced Zapier integrations."
    },
    {
      value: "99+ SCORE",
      label: "CORE WEB VITALS",
      note: "Lighthouse mobile & desktop speed optimization and technical SEO."
    }
  ];

  return (
    <div className="relative z-10 pt-28 pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-32 text-neutral-100">
      
      {/* 1. HERO STATEMENT */}
      <section className="min-h-[70vh] flex flex-col justify-center relative">
        
        {/* Top subtle tag */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            PAGE 01 // MY HOME &amp; DELIVERY PIPELINE
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ 10+ YEARS EXPERIENCE ]</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-6 max-w-5xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold tracking-tight uppercase leading-[1.05] text-white">
            Digital Project Manager <br />
            <span className="text-neutral-400 font-cinzel italic font-normal tracking-normal capitalize">
              &amp; Tech Operations Lead
            </span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed pt-4 border-l-2 border-neutral-700 pl-6 font-mono">
            I lead web operations and deliver scalable Custom &amp; No-Code solutions. With over 10 years of experience, I manage end-to-end digital projects, streamlining complex workflows and ensuring flawless technical execution across modern platforms.
          </p>
        </div>

        {/* Action Buttons & Quick Nav */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-10">
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-white/10"
          >
            <span>About Alexandre &amp; Experience</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('archives')}
            className="px-8 py-4 rounded-xl mono-card text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-3 hover:border-neutral-500 transition-all cursor-pointer"
          >
            <span>Explore My Works &amp; Projects</span>
          </button>
        </div>

        {/* Metric Blocks */}
        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-neutral-900 mt-14">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-2 p-5 rounded-2xl mono-card border border-neutral-800/80 bg-neutral-950/60 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="text-xl sm:text-2xl font-syne font-bold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 font-semibold tracking-wider uppercase pt-1">
                  {m.label}
                </div>
              </div>
              <div className="text-xs font-mono text-neutral-400 leading-relaxed pt-2 border-t border-neutral-900/80">
                {m.note}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 2. FEATURED AGENCY CASE STUDY: LITTLE FRIENDS (+210% TRAFFIC, +670% SEARCH) */}
      <div className="border-t border-neutral-900 pt-20">
        <AgencyCaseStudy onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 3. PLATFORM MATRIX & ARCHITECTURAL ENGINES (INCLUDING FIGMA & DESIGN SYSTEMS) */}
      <div className="border-t border-neutral-900 pt-20">
        <PlatformMatrix onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 4. 3D END-TO-END PROJECT MANAGEMENT & DEMAND LIFECYCLE PIPELINE */}
      <div className="border-t border-neutral-900 pt-20">
        <ProjectManagementPipeline3D onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 5. BRANDS I HAVE WORKED WITH & BUILT FOR (20+ VERIFIED SITES) */}
      <div className="border-t border-neutral-900 pt-20">
        <BrandShowcase onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 6. 3-STEP ENGAGEMENT SPRINT WORKFLOW (HOW WE WORK) */}
      <div className="border-t border-neutral-900 pt-20">
        <EngagementWorkflow onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 6. THE PHILOSOPHICAL MANIFESTO */}
      <section className="space-y-8 border-t border-neutral-900 pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
              CHAPTER I // OPERATIONAL PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase mt-2">
              DISCIPLINE &amp; EXECUTION.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {PHILOSOPHY_QUOTES.map((_, qIdx) => (
              <button
                key={qIdx}
                onClick={() => setActiveQuoteIdx(qIdx)}
                className={`w-8 h-1 rounded-full transition-all cursor-pointer ${
                  activeQuoteIdx === qIdx ? 'bg-white' : 'bg-neutral-800 hover:bg-neutral-600'
                }`}
                title={`Quote ${qIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sentimental Quote Card */}
        <div className="mono-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-neutral-800">
          <Quote className="absolute top-6 right-8 w-28 h-28 text-white/5 pointer-events-none -rotate-12" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <p className="text-2xl sm:text-3xl md:text-4xl font-cinzel text-neutral-100 leading-snug italic font-normal">
              "{PHILOSOPHY_QUOTES[activeQuoteIdx].quote}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div>
                <div className="font-syne font-bold text-sm text-white">
                  {PHILOSOPHY_QUOTES[activeQuoteIdx].author}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  {PHILOSOPHY_QUOTES[activeQuoteIdx].role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE 4 ARCHITECTURAL PILLARS */}
      <section className="space-y-12 border-t border-neutral-900 pt-20">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
            CHAPTER II // THE 4 OPERATIONAL PILLARS
          </span>
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase">
            THE DELIVERY FRAMEWORK.
          </h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            Every digital system and project led by Alexandre Paulino adheres to four core pillars: agile project governance, custom &amp; no-code architecture, intelligent workflow automation, and web operations performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="mono-card rounded-3xl p-8 sm:p-10 border border-neutral-800 hover:border-neutral-600 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-syne font-bold text-neutral-600 group-hover:text-white transition-colors">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest px-3 py-1 rounded-full border border-neutral-800">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-syne font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {pillar.statement}
                </p>

                <p className="text-xs font-cinzel italic text-neutral-500 mb-8 border-l border-neutral-800 pl-3">
                  "{pillar.poeticNote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900">
                <div className="flex flex-wrap gap-2">
                  {pillar.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-900 text-neutral-400 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE MASTERED ARSENAL */}
      <section className="space-y-8 border-t border-neutral-900 pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
              CHAPTER III // PLATFORMS &amp; TOOLS ARSENAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight uppercase mt-2">
              CORE COMPETENCIES.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400 font-medium">
            [ 12 CORE PLATFORMS &amp; SPECIALTIES ]
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {MASTERED_ARSENAL.map((item) => (
            <div
              key={item.id}
              className="mono-card rounded-2xl p-5 border border-neutral-800/90 hover:border-neutral-500 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header: Brand Icon & Experience Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-200 group-hover:text-white group-hover:border-neutral-700 group-hover:bg-neutral-850 transition-all shadow-inner">
                    <TechArsenalLogo id={item.id} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-neutral-300 bg-neutral-900/90 px-2.5 py-1 rounded-lg border border-neutral-800">
                    {item.experience}
                  </span>
                </div>

                {/* Body: Type & Name */}
                <div className="space-y-1 pt-1">
                  <div className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                    {item.type}
                  </div>
                  <div className="text-lg font-syne font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WEB DEVELOPMENT & CONVERSION FAQS */}
      <div className="border-t border-neutral-900 pt-20">
        <WebDevelopmentFAQ onInquire={() => onNavigate('transmission')} />
      </div>

      {/* 10. PASSAGE TO CHAPTER II CTA */}
      <section className="border-t border-neutral-900 pt-16">
        <div className="mono-card rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 bg-neutral-950">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              NEXT SECTION
            </span>
            <h3 className="text-2xl sm:text-4xl font-syne font-bold text-white">
              EXPLORE MY WORKS &amp; CLIENT DELIVERIES
            </h3>
            <p className="text-sm text-neutral-400 font-light">
              Review delivered production platforms across Shopify Plus, Zapier automations, multi-site fleet operations, GoHighLevel &amp; HubSpot funnels, and technical SEO.
            </p>
          </div>

          <button
            onClick={() => onNavigate('archives')}
            className="px-8 py-4 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>Proceed to My Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
