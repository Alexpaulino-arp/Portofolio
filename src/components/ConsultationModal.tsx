import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Send,
  Sparkles,
  Layers,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Founder / CEO',
    projectType: 'Fractional CTO & Web Operations',
    budgetRange: '$10k - $25k',
    currentStack: 'Shopify Plus + Next.js',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const projectTypes = [
    "Fractional CTO & Web Operations",
    "Shopify Plus / Headless Architecture",
    "Zapier Enterprise Automation Matrix",
    "Technical SEO & Core Web Vitals Overhaul",
    "Multi-Platform CMS Fleet Migration",
    "Other Custom Full-Stack Project"
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#090e1a] border border-slate-700/90 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-slate-100 flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  DIRECT CTO DISCOVERY SESSION
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Schedule a Strategic Technical Consult
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Consultation Request Dispatched!
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Thank you, <span className="text-blue-400 font-semibold">{formData.name}</span>. Alexandre Paulino has received your technical specifications for <span className="text-white font-medium">{formData.company || 'your organization'}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Track:</span>
                    <span className="text-cyan-400">{formData.projectType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">SLA Response Time:</span>
                    <span className="text-emerald-400">&lt; 4 Business Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Direct Contact:</span>
                    <span className="text-slate-300">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Return to Portfolio
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-col inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. s.jenkins@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Omnichannel Inc."
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Your Executive Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Founder / CEO">Founder / CEO</option>
                      <option value="COO / VP Operations">COO / VP Operations</option>
                      <option value="Agency Owner / Partner">Agency Owner / Partner</option>
                      <option value="Head of Product / Engineering">Head of Product / Engineering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Project Focus Track */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Select Strategic Engagement Track *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Current Stack & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="<$10k">&lt; $10k (Single Sprint)</option>
                      <option value="$10k - $25k">$10k - $25k (Standard Sprint)</option>
                      <option value="$25k - $50k">$25k - $50k (Major Platform)</option>
                      <option value="$6.5k/mo Retainer">$6,500/mo (Fractional CTO)</option>
                      <option value="$50k+ Enterprise">$50,000+ (Enterprise Architecture)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                      Current Stack &amp; Platforms
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shopify, WordPress, Zapier, NetSuite"
                      value={formData.currentStack}
                      onChange={e => setFormData({ ...formData, currentStack: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Technical Constraints, Goals, or Deadlines
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current architectural bottleneck, upcoming migration timeline, or required business automations..."
                    value={formData.projectDetails}
                    onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-display font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        <span>Transmitting Scope to CTO...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>Confirm Strategic Consult Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] font-mono text-slate-500 mt-2">
                    🔒 Strict NDA Protection. Alexandre Paulino replies directly within 4 business hours.
                  </p>
                </div>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
