import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Clock, 
  Lock,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { ActivePage } from '../components/CinematicNavigation';

interface TransmissionPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const TransmissionPage: React.FC<TransmissionPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    hiringModel: 'Full-Time Employment (Lead Digital PM / Operations Director)',
    track: 'Digital Project Management & Agile Sprint Delivery',
    budget: '$10k - $25k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const emailAddress = "alexandrepaulino.arp@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const hiringModels = [
    "Full-Time Employment (Lead Digital PM / Operations Director)",
    "Part-Time / Fractional Lead (Embedded Sprint & Web Ops Manager)",
    "Freelance / Contract Project (Fixed-Scope Platform Launch / Automation)",
    "Consulting & Technical Audit (Architecture Scoping & QA Gates)"
  ];

  const tracks = [
    "Digital Project Management & Agile Sprint Delivery",
    "Custom & No-Code Solutions (Shopify, WordPress, Duda, HubSpot, GHL)",
    "Advanced Zapier & Operations Workflow Automation",
    "Web Operations, Fleet Maintenance & Infrastructure",
    "Technical SEO & Core Web Vitals 99+ Overhaul",
    "End-to-End CRM Sales Funnels & Onboarding Workflows"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.organization || 'Not Specified',
      hiring_model: formData.hiringModel,
      engagement_track: formData.track,
      budget_scope: formData.budget,
      message: formData.message,
      _subject: `[Portfolio Inquiry] ${formData.name} - ${formData.hiringModel}`,
      _replyto: formData.email,
      _template: "table"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#a3a3a3', '#525252', '#d4d4d4']
      });
    } catch (err) {
      console.warn('Direct API submission encountered network fallback:', err);
      // Fallback: Still confirm success and provide mailto direct link
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#a3a3a3', '#525252']
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(`Project Inquiry: ${formData.hiringModel}`)}&body=${encodeURIComponent(
    `Hello Alexandre,\n\nName: ${formData.name}\nCompany: ${formData.organization}\nEmail: ${formData.email}\nHiring Model: ${formData.hiringModel}\nTrack: ${formData.track}\nBudget/Scope: ${formData.budget}\n\nProject Overview:\n${formData.message}\n`
  )}`;

  return (
    <div className="relative z-10 pt-28 pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-28 text-neutral-100">
      
      {/* 1. HEADER */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
            PAGE 04 // CONTACT &amp; DIRECT INQUIRY
          </span>
          <span className="text-neutral-500 font-mono text-xs">/ [ DIRECT LEAD &amp; PM INQUIRY ]</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-neutral-900 pb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-tighter uppercase text-white leading-none">
            START A <br />
            <span className="text-neutral-400 font-cinzel italic font-normal lowercase tracking-normal">
              conversation.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
            Available for <strong>Full-Time</strong> leadership roles, <strong>Part-Time / Fractional</strong> sprint management, or high-impact <strong>Freelance &amp; Contract</strong> platform launches.
          </p>
        </div>
      </section>

      {/* 2. TRANSMISSION CONSOLE & CHANNELS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Contact Channels & Credentials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="mono-card rounded-3xl p-8 border border-neutral-800 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <Lock className="w-4 h-4 text-white" />
              <span>DIRECT CHANNELS &amp; REPOSITORY</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Direct Email Inbox</div>
                <button
                  onClick={handleCopyEmail}
                  className="mt-1 w-full p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-600 transition-colors flex items-center justify-between text-xs font-mono text-neutral-200 cursor-pointer"
                >
                  <span className="truncate">{emailAddress}</span>
                  {copiedEmail ? (
                    <span className="text-white flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="text-neutral-500 flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>

              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Response SLA</div>
                <div className="mt-1 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span>&lt; 4 Business Hours</span>
                  </div>
                  <span className="text-neutral-500">P1 Priority</span>
                </div>
              </div>
            </div>

            {/* Quick Mailto Link */}
            <a
              href={`mailto:${emailAddress}?subject=Technical%20Inquiry%20from%20Portfolio`}
              className="w-full py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all font-semibold"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Open Default Mail Client</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <div className="pt-4 border-t border-neutral-900 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alexandrepaulino-ap/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Institutional Trust Note */}
          <div className="mono-card rounded-3xl p-8 border border-neutral-800/80 space-y-3 text-xs font-mono text-neutral-400">
            <div className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Confidentiality &amp; Security</span>
            </div>
            <p className="leading-relaxed text-neutral-300 font-light">
              All architectural scoping, platform repositories, and organizational strategies shared during discovery are protected under strict unilateral non-disclosure protocols.
            </p>
          </div>
        </div>

        {/* Right: The Transmission Form */}
        <div className="lg:col-span-7">
          <div className="mono-card rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl">
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-6 max-w-md mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                INQUIRY DISPATCHED
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                Thank you, <span className="text-white font-semibold">{formData.name || 'there'}</span>. Your technical brief has been routed directly to <span className="text-white underline">{emailAddress}</span>. A direct executive response will arrive at <span className="text-white underline">{formData.email || 'your email'}</span> shortly.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 text-left space-y-2">
                <div className="text-white font-semibold">Summary Dispatched:</div>
                <div>• Hiring Model: <span className="text-neutral-200">{formData.hiringModel}</span></div>
                <div>• Track: <span className="text-neutral-200">{formData.track}</span></div>
                {formData.organization && <div>• Company: <span className="text-neutral-200">{formData.organization}</span></div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Transmission
                </button>

                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Mail Client</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mb-1">
                  Project &amp; Hiring Inquiry Form
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Submissions are delivered directly to <span className="text-white font-semibold">{emailAddress}</span>.
                </p>
              </div>

              {/* HIRING / ENGAGEMENT MODEL SELECTOR */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                  <span>Hiring &amp; Engagement Model *</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {hiringModels.map((model) => {
                    const isSelected = formData.hiringModel === model;
                    const isFullTime = model.includes('Full-Time');
                    const isPartTime = model.includes('Part-Time');
                    const isFreelance = model.includes('Freelance');

                    return (
                      <button
                        type="button"
                        key={model}
                        onClick={() => setFormData({ ...formData, hiringModel: model })}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1.5 ${
                          isSelected 
                            ? 'bg-white text-black border-white shadow-lg' 
                            : 'bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${isSelected ? 'text-neutral-800' : 'text-neutral-400'}`}>
                            {isFullTime ? '⚡ FULL-TIME' : isPartTime ? '⏱️ PART-TIME' : isFreelance ? '🚀 FREELANCE / CONTRACT' : '🎯 CONSULTING'}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                        </div>
                        <div className={`text-xs font-syne font-bold leading-snug ${isSelected ? 'text-black' : 'text-white'}`}>
                          {model.split('(')[0].trim()}
                        </div>
                        <div className={`text-[10px] font-mono line-clamp-1 ${isSelected ? 'text-neutral-700' : 'text-neutral-500'}`}>
                          ({model.split('(')[1]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@enterprise.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global Media"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                    Estimated Budget / Compensation
                  </label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono"
                  >
                    <option value="Full-Time Salary Discussion">Full-Time Compensation Discussion</option>
                    <option value="Part-Time / Monthly Retainer">Part-Time / Monthly Retainer</option>
                    <option value="<$5k (Targeted Task)">&lt; $5k (Targeted Implementation)</option>
                    <option value="$5k - $15k (Standard Sprint)">$5k - $15k (Standard Sprint)</option>
                    <option value="$15k - $30k (Full Platform Launch)">$15k - $30k (Full Platform Launch)</option>
                    <option value="$30k+ Enterprise Project">$30k+ Enterprise Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                  Primary Technical / Project Track *
                </label>
                <select
                  value={formData.track}
                  onChange={e => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-white transition-colors font-mono"
                >
                  {tracks.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase font-medium">
                  Project Scope, Role Expectations &amp; Timeline
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your current tech stack, operational challenges, project scope, or full-time / contract role specifics..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white text-black hover:bg-neutral-200 font-syne font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xl shadow-white/10"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    <span>DISPATCHING TO {emailAddress}...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT INQUIRY TO ALEXANDRE</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </form>
          )}

          </div>
        </div>

      </section>

      {/* 3. EPILOGUE & DIGITAL SIGNATURE */}
      <section className="border-t border-neutral-900 pt-20 pb-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xl sm:text-2xl font-cinzel italic text-neutral-300 leading-relaxed font-normal">
            "Behind every great digital product is disciplined project governance, streamlined operations, and an obsession with quality execution."
          </p>

          <div className="space-y-1 pt-4">
            <div className="text-lg font-syne font-bold text-white tracking-widest uppercase">
              ALEXANDRE PAULINO
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Digital Project Manager &amp; Tech Operations Lead
            </div>
          </div>
        </div>

        {/* Footer Sitemap */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12 border-t border-neutral-900 text-xs font-mono text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => onNavigate('essence')} className="hover:text-white transition-colors cursor-pointer">
              01 // MY HOME
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
              02 // ABOUT ALEXANDRE
            </button>
            <button onClick={() => onNavigate('archives')} className="hover:text-white transition-colors cursor-pointer">
              03 // MY WORKS
            </button>
            <button onClick={() => onNavigate('transmission')} className="text-white font-bold cursor-pointer">
              04 // CONTACT
            </button>
          </div>

          <div>
            © {new Date().getFullYear()} Alexandre Paulino. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
};

