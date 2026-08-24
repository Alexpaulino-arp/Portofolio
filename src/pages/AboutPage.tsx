import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  FileText,
  Workflow,
  Terminal,
  Linkedin,
  Github,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { AlexandrePortrait } from '../components/AlexandrePortrait';
import { ActivePage } from '../components/CinematicNavigation';
import { useTheme } from '../context/ThemeContext';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { isLight } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = "alexandrepaulino.arp@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Verbatim Career Timeline from LinkedIn screenshot
  const careerTimeline = [
    {
      role: "Web Developer & UX/UI Manager",
      company: "Splurge Media",
      type: "Full-time",
      period: "May 2022 - Aug 2026",
      duration: "4 yrs 4 mos",
      location: "100 Walnut Avenue, Suite 210 Clark, NJ 07066 · Remote",
      highlights: [
        "Led end-to-end web operations, agile sprint planning, and architectural scoping for client platforms.",
        "Managed multidisciplinary delivery across custom code (React/TypeScript/Tailwind) and no-code platforms (WordPress, Shopify, Duda, HubSpot, GoHighLevel).",
        "Empowered designers and unblocked development squads to maintain zero-defect release cycles.",
        "Engineered scalable integrations and high-converting marketing funnels."
      ],
      current: true
    },
    {
      role: "Web Developer",
      company: "Mediappeal Marketing de Sucesso",
      type: "Full-time",
      period: "Jan 2020 - Feb 2022",
      duration: "2 yrs 2 mos",
      location: "Itatiba, São Paulo, Brazil",
      highlights: [
        "Architected custom e-commerce platforms and high-traffic corporate websites.",
        "Implemented conversion rate optimization (CRO) strategies and Core Web Vitals performance tuning.",
        "Connected complex CRM lead generation pipelines and dynamic customer portals."
      ],
      current: false
    },
    {
      role: "Graphic Designer & Video Editor Manager",
      company: "Avante Digital Agency",
      type: "Full-time",
      period: "Aug 2018 - Aug 2020",
      duration: "2 yrs 1 mo",
      location: "Itatiba, São Paulo, Brazil",
      highlights: [
        "Directed visual identity systems, motion graphics, and high-impact digital campaign assets.",
        "Bridged creative teams with marketing strategy to produce high-retention video collateral."
      ],
      current: false
    },
    {
      role: "Professional Freelancer",
      company: "Self Employed",
      type: "Full-time / Consulting",
      period: "Jan 2012 - Mar 2018",
      duration: "6 yrs 3 mos",
      location: "Itatiba & Global Remote",
      highlights: [
        "Consulted directly with business owners on digital modernization, custom web development, and digital marketing setups.",
        "Delivered over 20 standalone websites, brand identities, and custom digital marketing solutions."
      ],
      current: false
    },
    {
      role: "Graphic Designer",
      company: "PostNet",
      type: "Full-time",
      period: "Jan 2011 - 2014",
      duration: "3 yrs 1 mo",
      location: "Newark, NJ, USA",
      highlights: [
        "Worked with high-profile corporate clients across the United States delivering top-tier print and digital design production.",
        "Established deep discipline in precision typography, print prepress, and brand fidelity."
      ],
      quote: "I've had the privilege to work with many high-profile clients when I was working in PostNet in the USA.",
      current: false
    }
  ];

  // Verbatim Certifications from LinkedIn screenshot
  const certifications = [
    {
      title: "TypeScript",
      issuer: "Mimo",
      date: "Issued Oct 2024 · Expired Dec 2024",
      skills: "TypeScript, Type Safety, Modular Architecture",
      icon: "ts"
    },
    {
      title: "HTML5 Application Development Fundamentals",
      issuer: "Mimo",
      date: "Issued Jul 2024 · Expired Dec 2024",
      skills: "Semantic HTML5, Web Accessibility, DOM Architecture",
      icon: "html"
    },
    {
      title: "CSS - Cascading Style Sheets",
      issuer: "Mimo",
      date: "Issued Aug 2024 · Expired Dec 2024",
      skills: "Modern CSS, Flexbox/Grid, Responsive Layouts",
      icon: "css"
    },
    {
      title: "JavaScript",
      issuer: "SoloLearn",
      date: "Issued Jun 2018",
      credentialId: "1024-9354175",
      skills: "ES6+, Async Programming, DOM Manipulation",
      icon: "js"
    },
    {
      title: "CSS",
      issuer: "SoloLearn",
      date: "Issued May 2018",
      credentialId: "1023-9354175",
      skills: "Styling Standards, Visual Hierarchy",
      icon: "css"
    },
    {
      title: "HTML",
      issuer: "SoloLearn",
      date: "Issued May 2018",
      credentialId: "1014-9354175",
      skills: "Hypertext Markup, Structure",
      icon: "html"
    }
  ];

  const engagementModels = [
    {
      badge: "Full-Time",
      title: "Lead Digital PM / Tech Ops Director",
      description: "Dedicated full-time leadership managing your development sprints, unblocking engineering teams, and orchestrating flawless platform releases.",
      features: ["Full sprint governance", "Cross-team unblocking", "Direct stakeholder alignment", "Complete technical accountability"]
    },
    {
      badge: "Part-Time / Fractional",
      title: "Fractional Web Ops Lead",
      description: "Embed high-level technical management into your agency or startup on a structured weekly rhythm to maintain velocity without full overhead.",
      features: ["Weekly backlog grooming", "Architecture reviews", "QA & deployment gates", "Vendor & tooling optimization"]
    },
    {
      badge: "Freelance / Contract",
      title: "Fixed-Scope Platform Delivery",
      description: "End-to-end custom code or no-code website build, e-commerce re-platforming, or CRM automation workflow delivered on a guaranteed timeline.",
      features: ["Complete turnkey launch", "Core Web Vitals 90+ score", "Figma to code translation", "Full training & handover"]
    }
  ];

  return (
    <div className="relative z-10 pt-28 pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-32 text-neutral-100">
      
      {/* 1. EXECUTIVE HERO & PORTRAIT PRESENTATION */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <AlexandrePortrait showBadge={true} />
              
              {/* Quick Contacts & Social Row */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-600 text-neutral-200 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>{copiedEmail ? 'Email Copied!' : emailAddress}</span>
                </button>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-neutral-400 tracking-[0.25em] uppercase">
                PAGE 02 // ABOUT ALEXANDRE // LEADERSHIP DOSSIER
              </span>
              <span className="text-neutral-500 font-mono text-xs hidden sm:inline">
                / [ USA &amp; GLOBAL ]
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-syne font-extrabold tracking-tight text-white uppercase leading-[1.08]">
                Alexandre Paulino
              </h1>
              <p className="text-lg sm:text-xl font-syne text-neutral-300 font-medium">
                Digital Project Manager | Web &amp; Tech Operations Lead | Custom &amp; No-Code Solutions
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-sm sm:text-base font-light text-neutral-300 leading-relaxed font-sans space-y-4">
              <p>
                With over a decade of experience bridging the gap between technology, design, and digital marketing, I am a <strong>Digital Project Manager and Tech Operations Lead</strong> who thrives on turning complex requirements into seamless digital products.
              </p>
              <p>
                Throughout my career, I have successfully overseen and delivered over <strong>40 custom websites, e-commerce platforms, and digital solutions</strong> for a wide range of clients.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-syne font-bold text-white">10+ YRS</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Industry Track Record</div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-syne font-bold text-white">40+ SITES</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Delivered On-Scope</div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-syne font-bold text-white">USA &amp; LATAM</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">International Scale</div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-syne font-bold text-emerald-400">100% QA</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Quality Gate SLA</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('transmission')}
                className="px-6 py-3.5 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all cursor-pointer shadow-lg shadow-white/10"
              >
                <span>Hire Alexandre (Full-Time / Contract)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('essence')}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>View 3D Delivery Pipeline</span>
                <Workflow className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE TRENCHES ADVANTAGE (CORE LEADERSHIP PILLARS) */}
      <section className="space-y-8 border-t border-neutral-900 pt-20">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-white" />
            CORE ADVANTAGE &amp; PHILOSOPHY
          </div>
          <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white uppercase">
            Why Technical Leadership Matters
          </h2>
          <p className="text-neutral-400 font-light text-sm leading-relaxed">
            Leading high-performing web teams requires more than assigning tickets — it requires deep empathy for the craft and the technical foresight to prevent bottlenecks before they happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Speaking the Language */}
          <div className="p-8 rounded-3xl mono-card border border-neutral-800 space-y-4 bg-neutral-950/60 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-syne font-bold text-white">
                Forged in the Trenches
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                My journey didn't start in management; I spent years in the trenches as a Graphic Designer, Video Editor, and Full-Stack Web Developer. This gives me a unique advantage: <strong>I don't just manage multidisciplinary teams, I speak their language.</strong> I understand the challenges of code, the nuances of UX/UI design, and the logic behind SEO and digital marketing.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
              [ Developer &amp; Designer Empathy ]
            </div>
          </div>

          {/* Pillar 2: Bypassing Technical Limits */}
          <div className="p-8 rounded-3xl mono-card border border-neutral-800 space-y-4 bg-neutral-950/60 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-syne font-bold text-white">
                Creative Architectural Engineering
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                I specialize in bypassing technical limitations to deliver exactly what the business needs. For instance, when a client required a fully bilingual blog presence but their platform restricted multi-language architecture, <strong>I engineered a dedicated, standalone Spanish content ecosystem</strong> that integrated perfectly with their main site without compromising SEO or performance.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
              [ Case in Point: Spanish Ecosystem ]
            </div>
          </div>

          {/* Pillar 3: Fast-Paced Execution */}
          <div className="p-8 rounded-3xl mono-card border border-neutral-800 space-y-4 bg-neutral-950/60 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-syne font-bold text-white">
                Unblocking Teams &amp; Shipping Fast
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                In recent years, I have led web development operations using both custom code and no-code/low-code solutions (including WordPress, Shopify, Duda, HubSpot, GoHighLevel). I excel in fast-paced agency environments, focusing on <strong>unblocking developers, empowering designers</strong>, and ensuring that every project is shipped on time, within scope, and with exceptional quality.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 text-[11px] font-mono text-neutral-500">
              [ 100% On-Time &amp; Within Scope ]
            </div>
          </div>

        </div>
      </section>

      {/* 3. VERIFIED CAREER TIMELINE & WORK EXPERIENCE */}
      <section className="space-y-10 border-t border-neutral-900 pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-white" />
              PROFESSIONAL EXPERIENCE RECORD
            </div>
            <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white uppercase">
              Career Journey &amp; Milestones
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            [ 2011 – 2026 // USA &amp; GLOBAL ]
          </div>
        </div>

        <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-8 space-y-12">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Bullet */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                item.current 
                  ? 'bg-white border-white ring-4 ring-white/20' 
                  : 'bg-neutral-950 border-neutral-600 group-hover:border-white'
              }`} />

              <div className="p-6 sm:p-8 rounded-3xl mono-card border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md space-y-4 hover:border-neutral-600 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-syne font-bold text-white">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-white text-black font-mono font-bold text-[10px] uppercase">
                          Present Role
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-mono text-neutral-300 font-semibold mt-1">
                      {item.company} <span className="text-neutral-500">• {item.type}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs font-mono text-white font-bold">
                      {item.period}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500">
                      {item.duration}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{item.location}</span>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-white shrink-0 mt-1" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Quote if present */}
                {item.quote && (
                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border-l-2 border-white text-xs font-mono text-neutral-300 italic">
                    "{item.quote}"
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED CERTIFICATIONS & ACCREDITATIONS */}
      <section className="space-y-10 border-t border-neutral-900 pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-white" />
              VERIFIED TECHNICAL ACCREDITATIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white uppercase">
              Certifications &amp; Training
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            [ MIMO &amp; SOLOLEARN VERIFIED ]
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-6 rounded-3xl mono-card border border-neutral-800 bg-neutral-950/60 backdrop-blur-md space-y-4 hover:border-neutral-600 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-[10px] font-mono text-neutral-300 font-bold uppercase">
                    {cert.issuer}
                  </span>
                  <Award className="w-4 h-4 text-neutral-400" />
                </div>

                <div>
                  <h3 className="text-base font-syne font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 mt-1">
                    {cert.date}
                  </div>
                </div>

                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-neutral-500 bg-neutral-900/50 p-2 rounded-lg border border-neutral-800">
                    Credential ID: <span className="text-neutral-300">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-900 text-[11px] font-mono text-neutral-400">
                Skills: <span className="text-neutral-200">{cert.skills}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPREHENSIVE TOOLS & STACK ARSENAL */}
      <section className="space-y-8 border-t border-neutral-900 pt-20">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-white" />
            OPERATIONAL &amp; TECHNICAL ARSENAL
          </div>
          <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white uppercase">
            Mastered Tooling Ecosystem
          </h2>
          <p className="text-neutral-400 font-light text-sm">
            Technologies and frameworks utilized daily to lead projects, automate workflows, and deploy high-converting platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl mono-card border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              1. PM &amp; AGILE SPRINT OPS
            </div>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              Jira Software, ClickUp, Notion, Asana, Linear, Trello, Confluence, Daily Standups, QA Gates.
            </p>
          </div>

          <div className="p-6 rounded-2xl mono-card border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              2. CODE &amp; ARCHITECTURE
            </div>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              TypeScript, JavaScript (ES6+), React, Tailwind CSS, HTML5/CSS3, Git, GitHub, REST APIs, JSON.
            </p>
          </div>

          <div className="p-6 rounded-2xl mono-card border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              3. NO-CODE &amp; E-COMMERCE
            </div>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              Shopify (Liquid/Plus), WordPress, Duda, WooCommerce, Webflow, Square, Payment Gateways.
            </p>
          </div>

          <div className="p-6 rounded-2xl mono-card border border-neutral-800 bg-neutral-950/60 space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">
              4. AUTOMATION &amp; CRM
            </div>
            <p className="text-xs font-mono text-neutral-400 leading-relaxed">
              HubSpot, GoHighLevel, Zapier, Make, Klaviyo, ActiveCampaign, Google Analytics 4, Meta Pixel.
            </p>
          </div>

        </div>
      </section>

      {/* 6. HIRING & ENGAGEMENT MODELS */}
      <section className="space-y-10 border-t border-neutral-900 pt-20">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            AVAILABLE FOR HIRE
          </div>
          <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white uppercase">
            Engagement Pathways
          </h2>
          <p className="text-neutral-400 font-light text-sm">
            Whether you are expanding your agency leadership or need a dedicated technical lead for a critical platform build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model, idx) => (
            <div key={idx} className="p-8 rounded-3xl mono-card border border-neutral-800 bg-neutral-950/70 backdrop-blur-md space-y-6 flex flex-col justify-between hover:border-neutral-600 transition-all">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono text-white font-bold uppercase tracking-wider inline-block">
                  {model.badge}
                </span>

                <h3 className="text-xl font-syne font-bold text-white">
                  {model.title}
                </h3>

                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {model.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-neutral-900">
                  {model.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('transmission')}
                className="w-full py-3.5 rounded-xl bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Select Engagement Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FINAL DIRECT CONTACT CTA BANNER */}
      <section className="p-8 sm:p-12 rounded-3xl mono-card border border-neutral-800 bg-gradient-to-b from-neutral-900/90 to-neutral-950 text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white uppercase tracking-tight">
          Ready to Elevate Your Digital Operations?
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Reach out directly to discuss full-time roles, fractional leadership, or custom platform launches. Inquiries route immediately to <strong>{emailAddress}</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('transmission')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-syne font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all cursor-pointer shadow-xl shadow-white/10 flex items-center justify-center gap-2"
          >
            <span>Open Transmission Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Direct Email'}</span>
          </button>
        </div>
      </section>

    </div>
  );
};
