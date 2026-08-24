import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  SearchCheck,
  TrendingUp,
  Activity,
  FileCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ 
  caseStudy, 
  onClose, 
  onOpenConsultation 
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'metrics'>('architecture');

  if (!caseStudy) return null;

  const handleCopyCode = () => {
    if (caseStudy.codeSnippet) {
      navigator.clipboard.writeText(caseStudy.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0b1120] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-slate-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  {caseStudy.clientCategory}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  VERIFIED PRODUCTION CASE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
                {caseStudy.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-950 border-b border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-blue-600 text-white font-semibold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Architecture &amp; Strategy
            </button>
            {caseStudy.codeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'code'
                    ? 'bg-blue-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Code Architecture</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'metrics'
                  ? 'bg-blue-600 text-white font-semibold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Measurable ROI</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                    Engineered Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-700 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge & Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                      The Technical Challenge
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-2">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                      Executive Solution Summary
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {caseStudy.summary}
                    </p>
                  </div>
                </div>

                {/* Solution Architecture Deliverables */}
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Key Architectural Interventions
                  </span>
                  
                  <div className="space-y-3">
                    {caseStudy.solutionArchitecture.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && caseStudy.codeSnippet && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">File:</span>
                    <span className="text-xs font-mono text-blue-400 font-bold">{caseStudy.codeSnippet.fileName}</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Snippet"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <pre>
                    <code>{caseStudy.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.results.map((res, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-slate-400">{res.label}</div>
                      <div className="text-3xl font-display font-extrabold text-gradient-blue">{res.value}</div>
                      <div className="text-xs text-slate-400">{res.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-display font-bold text-white">
                      Need a similar architecture for your infrastructure?
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Let's audit your current stack and formulate a high-throughput execution plan.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono tracking-wider uppercase whitespace-nowrap shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    Schedule Consult
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              Production Case ID: AP-{caseStudy.id}
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Discuss This Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
