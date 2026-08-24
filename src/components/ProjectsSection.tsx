import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  TrendingUp, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Server, 
  SearchCheck, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // SVG / Canvas 3D Mockup Visualizers for each case study
  const renderDeviceMockup = (caseStudy: CaseStudy) => {
    switch (caseStudy.imageType) {
      case 'shopify-erp':
        return (
          <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 border border-blue-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-blue-400/60 transition-all">
            {/* Top Mockup Browser Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                shopify-plus-graphql-engine.internal
              </span>
              <span className="text-[10px] font-mono text-emerald-400">● Live 900ms</span>
            </div>

            {/* Middle Data Flow Visual */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400">Shopify Plus</div>
                <div className="text-sm font-bold text-white mt-1">14.2k req/m</div>
                <div className="text-[9px] text-emerald-400 font-mono">100% Ingested</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/40 text-center">
                <div className="text-[10px] font-mono text-blue-300">Redis Queue</div>
                <div className="text-sm font-bold text-cyan-300 mt-1">BullMQ Worker</div>
                <div className="text-[9px] text-blue-400 font-mono">0.9s Latency</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-[10px] font-mono text-slate-400">ERP NetSuite</div>
                <div className="text-sm font-bold text-white mt-1">4 Hubs Sync</div>
                <div className="text-[9px] text-emerald-400 font-mono">99.99% Match</div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Total GMV Volume:</span>
              <span className="text-gradient-amber font-bold font-display text-sm">$48,000,000 / Year</span>
            </div>
          </div>
        );

      case 'zapier-automation':
        return (
          <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-900 border border-amber-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-amber-400/60 transition-all">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="text-xs font-mono text-amber-400 font-bold">Zapier Enterprise Matrix</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                420 hrs/mo Saved
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">1. Inbound Webhook</span>
                <span className="text-cyan-400">&lt; 45 sec Speed-to-Lead</span>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-300">2. Python AI Scoring</span>
                <span className="text-amber-400">VIP Lead Filtered</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">3. GoHighLevel CRM + Slack</span>
                <span className="text-emerald-400">War-Room Created</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Lead-to-Call Conversion:</span>
              <span className="text-emerald-400 font-bold font-display text-sm">+38.4% Lift</span>
            </div>
          </div>
        );

      case 'nextjs-seo':
        return (
          <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-900 border border-emerald-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-emerald-400/60 transition-all">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono text-emerald-400 font-bold">Lighthouse 100/100 Core Web Vitals</span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                Next.js 15 App Router
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 my-auto text-center">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[9px] font-mono text-slate-400">LCP</div>
                <div className="text-base font-bold text-emerald-400">0.9s</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[9px] font-mono text-slate-400">INP</div>
                <div className="text-base font-bold text-emerald-400">22ms</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[9px] font-mono text-slate-400">CLS</div>
                <div className="text-base font-bold text-emerald-400">0.00</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[9px] font-mono text-slate-400">SEO</div>
                <div className="text-base font-bold text-emerald-400">100</div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Organic Revenue Growth:</span>
              <span className="text-emerald-400 font-bold font-display text-sm">+312% Growth</span>
            </div>
          </div>
        );

      case 'cms-fleet':
        return (
          <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group-hover:border-indigo-400/60 transition-all">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono text-indigo-400 font-bold">120+ Multi-Tenant CMS Fleet</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                Duda API + WordPress VIP
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Automated Visual Regression</span>
                <span className="text-emerald-400">GitHub Actions CI</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Automated Security Patches</span>
                <span className="text-cyan-400">0 Incidents / 2 Yrs</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400">Engineering Maintenance Overhead:</span>
              <span className="text-cyan-400 font-bold font-display text-sm">-82% Reduction</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>PROVEN DELIVERED PRODUCTION WORKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              TECHNICAL EXECUTION THAT SCALES.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mt-2">
              Delivered client platforms demonstrating technical problem-solving, architectural design, and measured scalability.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Audited Production Architectures</span>
          </div>
        </div>

        {/* 4 Deep Case Studies Grid */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 hover:border-slate-700 transition-all shadow-2xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: 3D Device Parallax Mockup */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  {renderDeviceMockup(study)}
                </div>

                {/* Right Column: Case Summary & Technical Results */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      CASE 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      {study.clientCategory}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Top Key Results Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800/80">
                    {study.results.map((res, rIdx) => (
                      <div key={rIdx} className="space-y-0.5">
                        <div className="text-[10px] font-mono text-slate-400">{res.label}</div>
                        <div className="text-lg font-display font-extrabold text-white group-hover:text-gradient-blue transition-colors">
                          {res.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">{res.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-mono font-semibold tracking-wider uppercase border border-slate-700 hover:border-blue-500 transition-all flex items-center gap-2 cursor-pointer shadow-lg group/btn"
                    >
                      <Terminal className="w-3.5 h-3.5 text-blue-400 group-hover/btn:text-white" />
                      <span>View Technical Blueprint &amp; Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
