import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Globe,
  Smartphone,
  Search,
  Share2,
  BarChart2,
  Target,
  PhoneCall,
  Image,
  Video,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface AllServicesPageProps {
  onNavigateHome?: (section?: string) => void;
  onNavigateContact?: () => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
  initialServiceId?: string;
}

interface ServiceDef {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ElementType;
  gradient: string;
  shadow: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
  deliverables: string[];
  metrics: string;
  tools: string[];
  category: string;
}

const allServices: ServiceDef[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    shortDesc: 'Automate workflows, scale smarter, and unlock 24/7 growth.',
    longDesc: 'We design and deploy intelligent automation systems that eliminate repetitive work and keep your pipeline full around the clock — from AI chatbots and voice agents to CRM workflows and predictive reporting.',
    icon: Bot,
    gradient: 'from-[#38BDF8] via-[#0070F3] to-[#0A3D91]',
    shadow: 'shadow-[0_16px_40px_rgba(0,112,243,0.32)]',
    textColor: 'text-[#0070F3]',
    borderColor: 'border-blue-200',
    bgLight: 'bg-blue-50',
    deliverables: ['AI Chatbots & Voice Agents for 24/7 Lead Capture','CRM Automation, Lead Scoring & Smart Nurture Flows','Webhook & API Integrations Across All Tech Stacks','AI-Powered Reporting Dashboards & Predictive Analytics'],
    metrics: '14+ Hours Saved Weekly Per Team With Zero Leaked Leads',
    tools: ['OpenAI API', 'Make.com', 'HubSpot', 'Zapier', 'Voiceflow'],
    category: 'Technology',
  },
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    shortDesc: 'High-converting websites engineered for growth & brand impact.',
    longDesc: 'Every pixel is intentional. We craft bespoke, performance-first websites that do not just look stunning — they convert visitors into loyal clients using proven UX principles and cutting-edge animation.',
    icon: Globe,
    gradient: 'from-[#C084FC] via-[#8B5CF6] to-[#4C1D95]',
    shadow: 'shadow-[0_16px_40px_rgba(139,92,246,0.32)]',
    textColor: 'text-[#7C3AED]',
    borderColor: 'border-purple-200',
    bgLight: 'bg-purple-50',
    deliverables: ['Next.js 16 & React 19 Enterprise Web Architecture','Conversion-Optimised UI/UX Design & High-Performance Funnels','Interactive Micro-Animations with Framer Motion & GSAP','Sub-Second Page Load Speeds (100/100 Core Web Vitals)'],
    metrics: '+68% Average Uplift in On-Page Visitor Conversion Rate',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Vercel'],
    category: 'Design',
  },
  {
    id: 'app-development',
    number: '03',
    title: 'App Development',
    shortDesc: 'Cross-platform apps that delight users & drive retention.',
    longDesc: 'From MVP to enterprise-scale, we build polished cross-platform mobile apps that combine beautiful design with rock-solid engineering — delivered fast and optimised for App Store success.',
    icon: Smartphone,
    gradient: 'from-[#FDBA74] via-[#FB923C] to-[#9A3412]',
    shadow: 'shadow-[0_16px_40px_rgba(249,115,22,0.32)]',
    textColor: 'text-[#EA580C]',
    borderColor: 'border-orange-200',
    bgLight: 'bg-orange-50',
    deliverables: ['React Native & Flutter Cross-Platform App Development','Performance-Optimised iOS & Android Native Builds','App Store Optimisation (ASO) & Launch Growth Strategy','Backend API Architecture & Real-Time Data Integration'],
    metrics: '50+ Apps Launched with 4.7 Star Average Store Rating',
    tools: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'Expo'],
    category: 'Technology',
  },
  {
    id: 'seo-aeo',
    number: '04',
    title: 'SEO & AEO',
    shortDesc: 'Rank higher everywhere — Google, AI Overviews & beyond.',
    longDesc: 'We go beyond traditional SEO. Our dual approach dominates both traditional search rankings and the new AI-powered answer engines like ChatGPT, Perplexity, and Google SGE.',
    icon: Search,
    gradient: 'from-[#6EE7B7] via-[#10B981] to-[#064E3B]',
    shadow: 'shadow-[0_16px_40px_rgba(16,185,129,0.32)]',
    textColor: 'text-[#059669]',
    borderColor: 'border-emerald-200',
    bgLight: 'bg-emerald-50',
    deliverables: ['Semantic Topical Authority & Knowledge Graph Optimisation','AI Answer Engine Optimisation (ChatGPT, Perplexity, Gemini)','High-Authority Digital PR & Inbound Backlink Scaling','Technical Core Web Vitals & Crawl Budget Engineering'],
    metrics: '+240% Organic Inbound Leads Within 6 Months',
    tools: ['Google Search Console', 'Ahrefs', 'Semrush', 'SurferSEO', 'Schema Pro'],
    category: 'Marketing',
  },
  {
    id: 'social-media',
    number: '05',
    title: 'Social Media',
    shortDesc: 'Turn followers into loyal, high-value customers.',
    longDesc: 'We manage your full social media presence — content, community, DM funnels, and distribution strategy — turning your platforms into always-on lead generation machines.',
    icon: Share2,
    gradient: 'from-[#FCA5A5] via-[#EF4444] to-[#7F1D1D]',
    shadow: 'shadow-[0_16px_40px_rgba(239,68,68,0.32)]',
    textColor: 'text-[#DC2626]',
    borderColor: 'border-rose-200',
    bgLight: 'bg-rose-50',
    deliverables: ['Multi-Platform Short-Form Video Strategy (Reels, TikTok, Shorts)','Community Engagement & Founder Personal Branding','High-Converting Social Funnels & DM Automation','Viral Trend Content with Data-Driven Distribution'],
    metrics: '3.8M+ Monthly Organic Video Impressions Generated',
    tools: ['Figma', 'CapCut Pro', 'Metricool', 'ManyChat', 'Brand24'],
    category: 'Marketing',
  },
  {
    id: 'google-ads',
    number: '06',
    title: 'Google Ads',
    shortDesc: 'Target the right searches. Scale with real, measurable ROI.',
    longDesc: 'We build and manage high-intent Google Ads campaigns that cut wasted spend and amplify results — from Search and Performance Max to Shopping, Display, and YouTube pre-rolls.',
    icon: BarChart2,
    gradient: 'from-[#A5B4FC] via-[#6366F1] to-[#312E81]',
    shadow: 'shadow-[0_16px_40px_rgba(99,102,241,0.32)]',
    textColor: 'text-[#4F46E5]',
    borderColor: 'border-indigo-200',
    bgLight: 'bg-indigo-50',
    deliverables: ['High-Intent Google Search & Performance Max Campaigns','Smart Bidding Strategy & Waste Spend Elimination','Continuous Creative A/B Testing & Conversion Attribution','Google Shopping, Display & YouTube Ad Integration'],
    metrics: '4.6x Average Verified ROAS Across Client Verticals',
    tools: ['Google Ads', 'Google Analytics 4', 'Search Ads 360', 'Triple Whale'],
    category: 'Advertising',
  },
  {
    id: 'meta-ads',
    number: '07',
    title: 'Meta Ads',
    shortDesc: 'Facebook & Instagram ads that sell, not just scroll.',
    longDesc: 'We craft high-converting Meta ad campaigns using precision audience targeting, dynamic creatives, and data-driven funnel strategy — stopping scrollers and converting them.',
    icon: Target,
    gradient: 'from-[#93C5FD] via-[#3B82F6] to-[#1E3A8A]',
    shadow: 'shadow-[0_16px_40px_rgba(59,130,246,0.32)]',
    textColor: 'text-[#1D4ED8]',
    borderColor: 'border-blue-300',
    bgLight: 'bg-blue-50',
    deliverables: ['Facebook & Instagram Campaign Architecture & Scaling','Precision Audience Targeting, Lookalikes & Retargeting','High-Converting UGC & Creative Ad Production','Full-Funnel Attribution & ROAS Optimisation'],
    metrics: '3.9x Average Meta ROAS With 40% Lower CPL',
    tools: ['Meta Business Suite', 'Meta Ads Manager', 'Advantage+', 'Hotjar', 'Triple Whale'],
    category: 'Advertising',
  },
  {
    id: 'call-email-handling',
    number: '08',
    title: 'Call & Email Handling',
    shortDesc: 'Never miss a lead — intelligent, human-quality follow-up.',
    longDesc: 'We deploy AI-powered call and email handling systems that respond, qualify, and nurture leads instantly — giving every prospect a professional, personalised experience without adding headcount.',
    icon: PhoneCall,
    gradient: 'from-[#6EE7B7] via-[#14B8A6] to-[#134E4A]',
    shadow: 'shadow-[0_16px_40px_rgba(20,184,166,0.32)]',
    textColor: 'text-[#0D9488]',
    borderColor: 'border-teal-200',
    bgLight: 'bg-teal-50',
    deliverables: ['AI Voice Agents for Inbound & Outbound Call Handling','Automated Email Sequences & Smart Follow-Up Flows','CRM Integration & Lead Qualification Scoring','24/7 Lead Response with Human-Quality Personalisation'],
    metrics: '94% Lead Response Rate Within 60 Seconds',
    tools: ['Voiceflow', 'Vapi.ai', 'HubSpot', 'ActiveCampaign', 'Twilio'],
    category: 'Technology',
  },
  {
    id: 'image-design',
    number: '09',
    title: 'Image Design',
    shortDesc: 'Visual assets that stop the scroll and build brand authority.',
    longDesc: 'From brand identity and social graphics to ad creatives and pitch decks, we produce premium visual assets that make your brand look unmistakably premium in every format.',
    icon: Image,
    gradient: 'from-[#F9A8D4] via-[#EC4899] to-[#831843]',
    shadow: 'shadow-[0_16px_40px_rgba(236,72,153,0.32)]',
    textColor: 'text-[#DB2777]',
    borderColor: 'border-pink-200',
    bgLight: 'bg-pink-50',
    deliverables: ['Brand Identity Design — Logo, Typography & Colour Systems','Social Media Graphics, Banners & Story Templates','Ad Creatives, Thumbnails & Landing Page Imagery','Pitch Decks, Reports & Branded Document Design'],
    metrics: '200+ Brands Elevated with Award-Worthy Visual Identity',
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva Pro', 'Spline'],
    category: 'Design',
  },
  {
    id: 'video-editing',
    number: '10',
    title: 'Video Editing',
    shortDesc: 'Scroll-stopping video content engineered for virality.',
    longDesc: 'Our video team transforms raw footage into polished, platform-native content — from short-form social reels and ad spots to long-form YouTube content — built to maximise watch time and conversions.',
    icon: Video,
    gradient: 'from-[#FDE68A] via-[#F59E0B] to-[#78350F]',
    shadow: 'shadow-[0_16px_40px_rgba(245,158,11,0.32)]',
    textColor: 'text-[#D97706]',
    borderColor: 'border-amber-200',
    bgLight: 'bg-amber-50',
    deliverables: ['Short-Form Reels, TikToks & YouTube Shorts Editing','Long-Form YouTube & Podcast Video Production','Ad Video Editing with CTA-Optimised Hooks','Motion Graphics, Captions & Brand Intro/Outros'],
    metrics: '50M+ Views Generated Across Client Video Content',
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Descript'],
    category: 'Content',
  },
];

const CATEGORIES = ['All', 'Technology', 'Design', 'Marketing', 'Advertising', 'Content'];

export const AllServicesPage: React.FC<AllServicesPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onOpenSearch,
  onOpenGetStarted,
  initialServiceId,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeService, setActiveService] = useState<ServiceDef | null>(() => {
    if (initialServiceId) {
      return (
        allServices.find(
          (s) =>
            s.id.toLowerCase() === initialServiceId.toLowerCase() ||
            s.title.toLowerCase() === initialServiceId.toLowerCase()
        ) || null
      );
    }
    return null;
  });

  useEffect(() => {
    if (initialServiceId) {
      const match = allServices.find(
        (s) =>
          s.id.toLowerCase() === initialServiceId.toLowerCase() ||
          s.title.toLowerCase() === initialServiceId.toLowerCase()
      );
      if (match) {
        setActiveService(match);
      }
    }
  }, [initialServiceId]);

  const filtered =
    activeCategory === 'All'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  const handleNavigate = (route: string, section?: string) => {
    if (route === 'contact') {
      onNavigateContact?.();
    } else {
      onNavigateHome?.(section);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
      <Header
        onNavigate={(route, section) => handleNavigate(route, section)}
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-blue-100/60 via-indigo-50/30 to-transparent rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-purple-100/50 to-transparent rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={13} className="shrink-0" />
            Everything You Need to Scale
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.06] mb-5">
            All{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">10 Services</span>
            <br />Under One Roof
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From AI automation to stunning design and paid growth — every capability your business needs, delivered by one tightly-integrated team.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {[{ value: '3K+', label: 'Clients Scaled' }, { value: '10', label: 'Core Services' }, { value: '98%', label: 'Retention Rate' }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#0F172A] tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center gap-2.5 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${activeCategory === cat ? 'bg-[#0F172A] text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
              {cat}
              {cat !== 'All' && (
                <span className={`ml-1.5 text-[10px] font-black ${activeCategory === cat ? 'text-white/60' : 'text-slate-400'}`}>
                  {allServices.filter((s) => s.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setActiveService(service)}
                  className="group relative rounded-2xl bg-white border border-slate-200/70 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_40px_rgba(15,23,42,0.12)] transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`} />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[11px] font-black text-slate-300 tracking-widest">{service.number}</span>
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.shadow} flex items-center justify-center text-white`}>
                        <Icon size={22} className="stroke-[2]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-[#0F172A] leading-tight mb-2 group-hover:opacity-80 transition-opacity">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">{service.shortDesc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {service.deliverables.slice(0, 2).map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs text-slate-500">
                          <CheckCircle2 size={13} className={`mt-0.5 shrink-0 ${service.textColor}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className={`text-xs font-bold ${service.bgLight} ${service.textColor} px-2.5 py-1 rounded-full`}>{service.category}</span>
                      <span className={`flex items-center gap-1 text-xs font-bold ${service.textColor} group-hover:gap-2 transition-all`}>
                        Details <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-10 sm:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Ready to Scale?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Let us Build Something<br />
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">Extraordinary Together</span>
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">Pick your services, share your goals, and we will craft a growth plan built specifically for your business.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigateContact?.()}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-wide shadow-[0_10px_24px_rgba(37,99,235,0.4)] transition-all cursor-pointer">
              Start Your Project <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigateHome?.()}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors cursor-pointer">
              Back to Home <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer onGetStartedClick={onOpenGetStarted} onNavigate={(route, section) => handleNavigate(route, section)} />

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className={`h-2 w-full bg-gradient-to-r ${activeService.gradient} rounded-t-3xl`} />
              <div className="p-7 sm:p-9">
                <button onClick={() => setActiveService(null)}
                  className="absolute top-5 right-5 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition cursor-pointer">
                  <X size={15} />
                </button>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${activeService.gradient} ${activeService.shadow} flex items-center justify-center text-white shrink-0`}>
                    {React.createElement(activeService.icon, { size: 26, className: 'stroke-[2]' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 tracking-widest block">{activeService.number}</span>
                    <h3 className="text-2xl font-black text-[#0F172A] leading-tight">{activeService.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{activeService.longDesc}</p>
                <div className="mb-6">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">What You Get</h4>
                  <ul className="space-y-2.5">
                    {activeService.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${activeService.textColor}`} />{d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl ${activeService.bgLight} border ${activeService.borderColor} px-5 py-3.5 mb-6`}>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Proven Result</p>
                  <p className={`text-sm font-black ${activeService.textColor}`}>{activeService.metrics}</p>
                </div>
                <div className="mb-7">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">{tool}</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => { setActiveService(null); onNavigateContact?.(); }}
                  className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${activeService.gradient} text-white font-bold text-sm flex items-center justify-center gap-2 ${activeService.shadow} hover:opacity-90 transition cursor-pointer`}>
                  Get Started with {activeService.title} <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllServicesPage;
