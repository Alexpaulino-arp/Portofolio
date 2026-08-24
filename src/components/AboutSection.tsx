import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Boxes, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  Briefcase, 
  Award, 
  Code, 
  TrendingUp, 
  Workflow, 
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { METRIC_CARDS, TIMELINE_MILESTONES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-400" />;
      default: return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  const activeMilestone = TIMELINE_MILESTONES[activeMilestoneIdx];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0f1d] border-t border-b border-slate-800/80">
      {/* Background glow lines */}
      <div className="absolute inset-0 tech-dots opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXECUTIVE BACKGROUND & LEADERSHIP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-display font-bold text-white tracking-tight leading-tight mb-4">
            A CTO with 4+ years of agency leadership, bringing technical engineering to strategic digital business challenges.
          </h2>

          <h3 className="text-lg sm:text-xl font-display font-semibold text-gradient-blue">
            Crafting a Scalable Digital Core.
          </h3>
        </div>

        {/* Dynamic 3D Hover Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {METRIC_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-blue-500/50 transition-all shadow-xl"
            >
              {/* Card top lighting sheen */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-slate-800/80 transition-colors">
                  {getMetricIcon(card.icon)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                  {card.trend}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-1 group-hover:text-blue-300 transition-colors">
                {card.value}
              </div>

              <div className="text-sm font-semibold text-slate-300 mb-2">
                {card.label}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CODE TO MANAGEMENT: Interactive 3D Timeline */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <Workflow className="w-4 h-4" />
                <span>INTERACTIVE CAREER TRAJECTORY</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                CODE TO MANAGEMENT
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                From deep hands-on code craftsmanship to high-level agency operations and executive technical governance.
              </p>
            </div>

            {/* Timeline phase toggle pills */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              {TIMELINE_MILESTONES.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setActiveMilestoneIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeMilestoneIdx === idx
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {m.year.split('–')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-xs border border-blue-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeMilestone.year}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                {activeMilestone.role}
              </h4>

              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Context: {activeMilestone.companyContext}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeMilestone.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 mb-2">Core Tech & Infrastructure Focus:</div>
                <div className="flex flex-wrap gap-2">
                  {activeMilestone.techPillars.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Leadership & Technical Impact Milestones */}
            <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Key Leadership & Architectural Deliverables
                </span>
                <span className="text-[11px] font-mono text-emerald-400 uppercase">
                  Stage: {activeMilestone.stage.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3">
                {activeMilestone.highlights.map((highlight, hIdx) => (
                  <div 
                    key={hIdx} 
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 transition-all flex items-start gap-3"
                  >
                    <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-200">Engineering Philosophy</div>
                  <div className="text-[11px] text-slate-400 font-mono">Zero unmonitored failures • Sub-second performance • Strict SEO equity</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-blue-400 font-bold">100% SLA COMPLIANCE</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
