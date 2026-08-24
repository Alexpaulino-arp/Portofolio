import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  Zap, 
  SearchCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-7 h-7 text-blue-400" />;
      case 'Code2': return <Code2 className="w-7 h-7 text-indigo-400" />;
      case 'Zap': return <Zap className="w-7 h-7 text-amber-400" />;
      case 'SearchCheck': return <SearchCheck className="w-7 h-7 text-emerald-400" />;
      default: return <Cpu className="w-7 h-7 text-blue-400" />;
    }
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            FULL-STACK TECHNICAL WEB SOLUTIONS.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            I engineer robust, end-to-end technical solutions across diverse stacks and workflows.
          </p>
        </div>

        {/* 4 Interactive 3D Depth Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, idx) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedServiceId(service.id)}
                className={`glass-panel p-6 rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500 bg-slate-900/90 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/50'
                    : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                {/* Active Indicator Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transition-opacity ${
                  isSelected ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1 font-semibold">
                    {service.category}
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono font-medium">
                    {service.impactMetric}
                  </span>
                  <span className={`font-mono transition-transform ${isSelected ? 'text-blue-400 translate-x-1' : 'text-slate-500'}`}>
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Service Deep-Dive Architectural Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DEEP ARCHITECTURAL SCOPE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {selectedService.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.longDesc}
                </p>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                    Core Technologies & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-700/80 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Engineer This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Deliverables List */}
              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    Guaranteed Technical Deliverables
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    Production-Ready SLA
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-blue-300 font-mono">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span>Target Performance Metric</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {selectedService.impactMetric}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
