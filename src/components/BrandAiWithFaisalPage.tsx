import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Sparkles,
  Zap,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Workflow,
  Compass,
  Smartphone,
  CheckCircle2,
  Calendar,
  Globe,
  Phone,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { lenis } from '../lib/lenis';

export interface BrandAiWithFaisalPageProps {
  onNavigate?: (route: any, targetSection?: string) => void;
  onNavigateHome?: (section?: string) => void;
  onNavigateContact?: () => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
  onNavigateBrand?: (brandId: 'ai-with-faisal' | 'swift-outlet') => void;
}

export const BrandAiWithFaisalPage: React.FC<BrandAiWithFaisalPageProps> = ({
  onNavigate,
  onNavigateHome,
  onNavigateContact,
  onOpenSearch,
  onOpenGetStarted,
  onNavigateBrand,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.5, immediate: true });
  }, []);

  const coreServices = [
    {
      icon: Bot,
      title: 'AI Chatbots & Agents',
      desc: 'Tireless digital team members trained specifically on your company data. They answer inquiries, qualify prospects, capture leads, and close sales 24/7 without missing a beat.',
      badge: '🤖 Conversational AI',
      color: 'from-violet-500 to-indigo-600',
    },
    {
      icon: Workflow,
      title: 'AI Automation & Workflows',
      desc: 'Kill repetitive manual work. Connect your CRM, email, spreadsheets, and messaging platforms with smart n8n and Make.com workflows that run automatically in real-time.',
      badge: '⚙️ Operational Efficiency',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Compass,
      title: 'AI Strategy & Consulting',
      desc: 'Know exactly where and how AI generates revenue before committing budget. A pragmatic, hype-free roadmap tailored to your specific operational strengths.',
      badge: '🧭 Business Roadmap',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Smartphone,
      title: 'App + AI Integration',
      desc: 'Ship production-ready web and mobile products with native machine intelligence baked in — from automated vision recognition to generative document copilots.',
      badge: '📱 Full-Stack AI',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const featuredApps = [
    {
      name: 'FoodCal AI',
      tag: 'AI Health App',
      desc: 'Snap a single photo of any meal to calculate calories, macronutrients, and hydration automatically with high computer vision accuracy.',
      highlight: 'Vision AI Nutrition',
    },
    {
      name: 'My Water Buddy',
      tag: 'Wellness App',
      desc: 'Smart water reminder & hydration tracker with sleep-aware notifications, habits, streaks, and full 15-language internationalization.',
      highlight: 'Live on Google Play',
    },
    {
      name: 'BD Weather',
      tag: 'Hyperlocal Weather',
      desc: 'Accessible, senior-friendly meteorological forecasting covering all 64 districts of Bangladesh in clean bilingual Bangla & English UI.',
      highlight: 'Zero-ad Community Utility',
    },
    {
      name: 'ColdMail Pro',
      tag: 'B2B Sales Automation',
      desc: 'End-to-end automated email outreach engine featuring dynamic AI persona customization and smart deliverability monitoring.',
      highlight: 'Automated Personalization',
    },
  ];

  const stats = [
    { value: '30+', label: 'Projects Shipped', desc: 'Production web & mobile solutions' },
    { value: '24/7', label: 'AI Agents Live', desc: 'Autonomous customer engagement' },
    { value: '100%', label: 'Custom Architecture', desc: 'Zero cookie-cutter templates' },
    { value: 'Fast', label: 'Rapid Turnaround', desc: 'Swift prototype to deployment' },
  ];

  const techStack = [
    'LLMs & RAG',
    'OpenAI GPT-4o',
    'Anthropic Claude',
    'Google Gemini',
    'n8n Workflows',
    'Flutter Native',
    'Next.js 16',
    'Firebase Cloud',
    'Prompt Engineering',
    'REST & Webhooks',
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Primary Header */}
      <Header
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="brand-ai-with-faisal"
        onNavigate={(route, target) => {
          if (onNavigate) {
            onNavigate(route, target);
            return;
          }
          if (route === 'brand-ai-with-faisal') {
            window.scrollTo(0, 0);
          } else if (route === 'brand-swift-outlet') {
            onNavigateBrand?.('swift-outlet');
          } else if (route === 'contact') {
            onNavigateContact?.();
          } else {
            onNavigateHome?.(target);
          }
        }}
      />

      <main className="relative pt-6 pb-20 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-100/60 via-blue-50/40 to-transparent rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-96 -right-20 w-[450px] h-[450px] bg-cyan-100/40 rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-[800px] -left-20 w-[450px] h-[450px] bg-violet-100/40 rounded-full blur-3xl -z-10" />

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Live Link Chip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-8 border-b border-slate-200/80">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
              <button
                type="button"
                onClick={() => onNavigateHome?.()}
                className="hover:text-[#2563EB] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-slate-400">Our Brands</span>
              <span>/</span>
              <span className="text-[#2563EB] font-bold">AI with Faisal</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://aiwithfaisal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-indigo-700 border border-indigo-200 shadow-xs hover:border-indigo-400 hover:bg-indigo-50/70 transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>aiwithfaisal.com</span>
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <button
                type="button"
                onClick={() => onNavigateBrand?.('swift-outlet')}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#2563EB] hover:bg-white transition-all cursor-pointer"
              >
                <span>Switch to Swift Outlet</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 lg:py-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100/90 text-indigo-700 text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6"
            >
              <Sparkles size={15} className="text-indigo-600" />
              <span>CLUSTER CLOUD ECOSYSTEM BRAND</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]"
            >
              Turn Your Business Into an{' '}
              <span className="bg-gradient-to-r from-[#6366F1] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
                AI-Powered
              </span>{' '}
              Machine
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              Led by AI Solutions Expert <strong>Faisal Ahamed</strong>, <strong>AI with Faisal</strong> designs, builds, and deploys custom intelligent chatbots, autonomous workflow automations, and smart apps that eliminate manual friction and accelerate revenue.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <a
                href="https://aiwithfaisal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:from-[#4F46E5] hover:to-[#0891B2] text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight size={17} strokeWidth={2.4} />
              </a>

              <a
                href="https://calendly.com/ecomwithfaisal/ai-with-faisal-for-project-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <Calendar size={17} className="text-indigo-600" />
                <span>Book AI Discovery Call</span>
              </a>

              <a
                href="https://wa.me/8801717161485?text=Hi%20Faisal%20Ahamed%2C%20I%20found%20AI%20with%20Faisal%20via%20Cluster%20Cloud."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-semibold text-sm border border-emerald-200 shadow-xs transition-all duration-200"
              >
                <Phone size={16} className="text-emerald-600" />
                <span>Direct WhatsApp</span>
              </a>
            </motion.div>

            {/* Key Metrics / Highlights */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow text-left"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Founder Profile Section */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/40 border border-indigo-100 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Founder Card */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="relative">
                    <div className="h-28 w-28 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-1 shadow-lg shadow-indigo-500/20">
                      <div className="h-full w-full rounded-xl bg-slate-900 flex items-center justify-center text-white text-3xl font-black">
                        FA
                      </div>
                    </div>
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white uppercase tracking-wider shadow-xs">
                      Founder
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mt-5">Faisal Ahamed</h3>
                  <p className="text-sm font-bold text-indigo-600">AI Solutions Expert &amp; Developer</p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <Globe size={13} />
                    <span>Serving global clients remotely</span>
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700">
                      <Award size={12} className="text-indigo-600" />
                      Play Store Creator
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700">
                      <ShieldCheck size={12} className="text-emerald-600" />
                      Production AI Systems
                    </span>
                  </div>
                </div>

                {/* Right: Founder Vision & Skills */}
                <div className="lg:col-span-8">
                  <h4 className="text-xl font-bold text-slate-900">
                    Real Production Software — Not Just Slide Decks
                  </h4>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    &quot;Our mission is remarkably simple: use practical artificial intelligence to save you hundreds of hours or directly boost top-line revenue. We build real, dependable systems—from autonomous agents to full-stack Flutter and web platforms—engineered end-to-end with zero buzzword fluff.&quot;
                  </p>

                  {/* Skills Grid */}
                  <div className="mt-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Core Technical Competencies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs hover:border-indigo-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Core Services Grid */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Specialized Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                What AI with Faisal Builds For You
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Modular AI capabilities engineered for enterprise reliability and high conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-md`}>
                          <IconComponent size={22} strokeWidth={2.2} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                      <span>Full Custom Deployment</span>
                      <a
                        href="https://aiwithfaisal.com/#services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        <span>Learn more</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Live Products & Case Studies */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                  Shipped In The Wild
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Featured Products &amp; Case Studies
                </h2>
              </div>
              <a
                href="https://aiwithfaisal.com/case-studies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800"
              >
                <span>View all case studies on aiwithfaisal.com</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredApps.map((app, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3">
                      {app.tag}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">{app.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="text-indigo-600 font-bold">{app.highlight}</span>
                    <CheckCircle2 size={14} className="text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Banner */}
          <section className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-4">
                <Zap size={14} />
                <span>START YOUR AI TRANSFORMATION</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Build Your AI Edge?
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with Faisal Ahamed to discuss project requirements, AI feasibility, and custom workflow development.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="https://aiwithfaisal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all"
                >
                  <span>Open aiwithfaisal.com</span>
                  <ArrowUpRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
                >
                  Contact Cluster Cloud Studio
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer
        onGetStartedClick={onOpenGetStarted}
        onNavigate={(route, target) => {
          if (onNavigate) {
            onNavigate(route, target);
            return;
          }
          if (route === 'contact') {
            onNavigateContact?.();
          } else {
            onNavigateHome?.(target);
          }
        }}
      />
    </div>
  );
};

export default BrandAiWithFaisalPage;
