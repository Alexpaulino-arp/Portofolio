import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Mail, 
  Linkedin, 
  Github, 
  ShieldCheck, 
  Copy, 
  Check, 
  Terminal,
  Heart,
  ExternalLink,
  Code
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterSectionProps {
  onOpenConsultation: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenConsultation }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { label: "Engineering & Architecture", href: "#hero" },
    { label: "Executive About & Timeline", href: "#about" },
    { label: "Specialized Services", href: "#services" },
    { label: "Zapier Automation Lab", href: "#automation-lab" },
    { label: "My Works & Projects", href: "#case-studies" },
    { label: "Partnership & ROI Pricing", href: "#partnership" },
    { label: "Strategic Technical QA", href: "#faq" },
  ];

  return (
    <footer className="relative bg-[#040711] text-slate-400 border-t border-slate-800/80 overflow-hidden">
      
      {/* Huge CTA Banner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-slate-950 to-indigo-950/40 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>READY FOR IMMEDIATE TECHNICAL IMPACT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              LET'S ENGINEER YOUR NEXT PROJECT.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need full-stack architecture, complex Zapier workflows, zero-downtime platform migrations, or elite Fractional CTO leadership—let's build something scalable.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-display font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Schedule a Strategic Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700/80 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedEmail ? "Email Copied to Clipboard!" : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Sitemap & Meta Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-base text-gradient-blue">AP</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-slate-100 text-lg">
                  Alexandre Paulino
                </span>
                <p className="text-xs text-blue-400 font-mono">
                  Full-Stack Web Operations Manager &amp; CTO
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              4+ years agency technical leadership. Scaling high-throughput digital platforms, multi-warehouse integrations, and automated business workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="Email Alexandre"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
              Platform Sitemap
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors py-1 block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Core Technical Stack & Verification Indicator */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
              Technical Stack &amp; Standards
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zapier Certified Architect</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Code className="w-4 h-4" />
                <span>Next.js 15 &amp; React 19 Core</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>Core Web Vitals 99+ Baseline</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Alexandre Paulino. All technical architectures and trademarks reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Crafted with Three.js, React 19 &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
