import React, { useState } from 'react';
import { X, CheckCircle2, Code2, Layers, Cpu, ExternalLink, ArrowRight, ShieldCheck, Terminal, Copy, Check, Globe, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ArchiveItem } from '../data/monochromeData';
import { BrandLogoIcon } from './BrandLogoIcon';
import { triggerInteractiveResonance } from '../utils/soundscapeEngine';

interface ArtifactModalProps {
  item: ArchiveItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ item, onClose, onInquire }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'code' | 'flow'>('blueprint');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!item) return null;

  const handleCopyCode = () => {
    triggerInteractiveResonance('click');
    navigator.clipboard.writeText(item.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleTabChange = (tab: 'blueprint' | 'code' | 'flow') => {
    triggerInteractiveResonance('click');
    setActiveTab(tab);
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
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-neutral-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-start sm:items-center justify-between p-6 sm:p-8 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md gap-4">
            <div className="flex items-center gap-4">
              {/* Brand Logo in Modal */}
              <div className="w-16 h-10 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 text-white">
                <BrandLogoIcon id={item.id} className="w-full h-full object-contain" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono text-neutral-400 tracking-widest uppercase font-bold">
                    {item.romanId} // {item.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="text-[11px] font-mono text-neutral-500">{item.client}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-syne font-bold text-white">
                  {item.title}
                </h2>
              </div>
            </div>

            <button
              onClick={() => {
                triggerInteractiveResonance('click');
                onClose();
              }}
              className="p-2.5 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader Navigation Tabs & Live Site Trigger */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 sm:px-8 pt-3 border-b border-neutral-900 text-xs font-mono">
            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => handleTabChange('blueprint')}
                className={`pb-3 px-3 transition-colors border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'blueprint'
                    ? 'border-white text-white font-bold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>PROJECT BLUEPRINT</span>
              </button>

              <button
                onClick={() => handleTabChange('flow')}
                className={`pb-3 px-3 transition-colors border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'flow'
                    ? 'border-white text-white font-bold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>EXECUTION PIPELINE</span>
              </button>

              <button
                onClick={() => handleTabChange('code')}
                className={`pb-3 px-3 transition-colors border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'code'
                    ? 'border-white text-white font-bold'
                    : 'border-transparent text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>PRODUCTION SPECS</span>
              </button>
            </div>

            {/* Live Website Link Badge */}
            {item.url && (
              <div className="pb-3 flex items-center gap-2">
                {item.urls ? (
                  <div className="flex items-center gap-1.5">
                    {item.urls.map((u) => (
                      <a
                        key={u.url}
                        href={u.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-[11px] font-mono flex items-center gap-1 transition-all"
                      >
                        <span>{u.label}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black border border-neutral-800 text-[11px] font-mono flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span>Live Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
            
            {/* TAB 1: BLUEPRINT */}
            {activeTab === 'blueprint' && (
              <div className="space-y-8">
                {/* First-Person Project Narrative */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>Project Delivery Overview (Alexandre Paulino Narrative)</span>
                  </div>
                  <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 space-y-3">
                    <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
                      {item.summary}
                    </p>
                    <p className="text-sm font-cinzel italic text-neutral-400 border-l border-neutral-700 pl-4 py-1">
                      "{item.poeticInsight}"
                    </p>
                  </div>
                </div>

                {/* 3 Metric cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-1">
                      <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-2xl font-syne font-bold text-white">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {m.sublabel}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architecture Specifications */}
                <div className="space-y-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    Delivered Technical Scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continuous Platform Evolution Advisory */}
                <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
                      <span>Live Platform Evolution &amp; Continuous Updates</span>
                      <span className="px-2 py-0.5 text-[9px] rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800">
                        Active Production
                      </span>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">
                      {item.liveUpdateNotice || "Because this is an active production commercial platform subject to continuous client updates, seasonal campaigns, and ongoing web operations, the current live website may differ in layout, copy, or visual components from the initial baseline architecture documented in this project showcase."}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Deployed Technology Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SYSTEM FLOW */}
            {activeTab === 'flow' && (
              <div className="space-y-6">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  End-to-End Execution Sequence:
                </div>
                <div className="space-y-4 relative before:absolute before:top-4 before:bottom-4 before:left-5 before:w-px before:bg-neutral-800">
                  {item.systemFlow.map((flow) => (
                    <div key={flow.step} className="flex items-start gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
                        {flow.step}
                      </div>
                      <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex-1">
                        <div className="text-sm font-syne font-bold text-white mb-1">
                          {flow.title}
                        </div>
                        <div className="text-xs text-neutral-400 font-mono leading-relaxed">
                          {flow.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: CODE SNIPPET */}
            {activeTab === 'code' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    Configuration / Schema: <span className="text-white">{item.codeSnippet.filename}</span> ({item.codeSnippet.lang})
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-800 transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Configuration'}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-black border border-neutral-800 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed max-h-[400px]">
                  <code>{item.codeSnippet.code}</code>
                </pre>
              </div>
            )}

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-neutral-900 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400">
              Governance: <span className="text-neutral-200">Alexandre Paulino Web Operations &amp; Digital PM</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 font-mono text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Inquire About Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
