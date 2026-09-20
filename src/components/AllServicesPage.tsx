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
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface AllServicesPageProps {
  onNavigateHome?: (section?: string) => void;
  onNavigateContact?: () => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
  initialServiceId?: string;
  onNavigateServiceDetail?: (serviceId: string) => void;
}

interface ServiceDef {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ElementType;
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
    shortDesc: 'Automate workflows, scale smarter, and unlock 24/7 autonomous pipeline growth.',
    longDesc: 'We design and deploy intelligent automation systems that eliminate repetitive work and keep your pipeline full around the clock — from AI chatbots and voice agents to CRM workflows and predictive reporting.',
    icon: Bot,
    deliverables: [
      'AI Chatbots & Voice Agents for 24/7 Lead Capture',
      'CRM Automation, Lead Scoring & Smart Nurture Flows',
      'Webhook & API Integrations Across All Tech Stacks',
      'AI-Powered Reporting Dashboards & Predictive Analytics',
    ],
    metrics: '14+ Hours Saved Weekly Per Team With Zero Leaked Leads',
    tools: ['OpenAI API', 'Make.com', 'HubSpot', 'Zapier', 'Voiceflow'],
    category: 'Technology',
  },
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    shortDesc: 'High-converting websites engineered for maximum engagement and brand impact.',
    longDesc: 'Every pixel is intentional. We craft bespoke, performance-first websites that do not just look stunning — they convert visitors into loyal clients using proven UX principles and cutting-edge animation.',
    icon: Globe,
    deliverables: [
      'Next.js 16 & React 19 Enterprise Web Architecture',
      'Conversion-Optimised UI/UX Design & High-Performance Funnels',
      'Interactive Micro-Animations with Framer Motion & GSAP',
      'Sub-Second Page Load Speeds (100/100 Core Web Vitals)',
    ],
    metrics: '+68% Average Uplift in On-Page Visitor Conversion Rate',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Vercel'],
    category: 'Design',
  },
  {
    id: 'app-development',
    number: '03',
    title: 'App Development',
    shortDesc: 'Polished cross-platform mobile apps that delight users and drive retention.',
    longDesc: 'From MVP to enterprise-scale, we build polished cross-platform mobile apps that combine beautiful design with rock-solid engineering — delivered fast and optimised for App Store success.',
    icon: Smartphone,
    deliverables: [
      'React Native & Flutter Cross-Platform App Development',
      'Performance-Optimised iOS & Android Native Builds',
      'App Store Optimisation (ASO) & Launch Growth Strategy',
      'Backend API Architecture & Real-Time Data Integration',
    ],
    metrics: '50+ Apps Launched with 4.7 Star Average Store Rating',
    tools: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'Expo'],
    category: 'Technology',
  },
  {
    id: 'seo-aeo',
    number: '04',
    title: 'SEO & AEO',
    shortDesc: 'Rank higher everywhere — Google, AI Overviews, Perplexity & beyond.',
    longDesc: 'We go beyond traditional SEO. Our dual approach dominates both traditional search rankings and the new AI-powered answer engines like ChatGPT, Perplexity, and Google SGE.',
    icon: Search,
    deliverables: [
      'Semantic Topical Authority & Knowledge Graph Optimisation',
      'AI Answer Engine Optimisation (ChatGPT, Perplexity, Gemini)',
      'High-Authority Digital PR & Inbound Backlink Scaling',
      'Technical Core Web Vitals & Crawl Budget Engineering',
    ],
    metrics: '+240% Organic Inbound Leads Within 6 Months',
    tools: ['Google Search Console', 'Ahrefs', 'Semrush', 'SurferSEO', 'Schema Pro'],
    category: 'Marketing',
  },
  {
    id: 'social-media',
    number: '05',
    title: 'Social Media',
    shortDesc: 'Turn passive followers into loyal, high-value clients and brand champions.',
    longDesc: 'We manage your full social media presence — content, community, DM funnels, and distribution strategy — turning your platforms into always-on lead generation machines.',
    icon: Share2,
    deliverables: [
      'Multi-Platform Short-Form Video Strategy (Reels, TikTok, Shorts)',
      'Community Engagement & Founder Personal Branding',
      'High-Converting Social Funnels & DM Automation',
      'Viral Trend Content with Data-Driven Distribution',
    ],
    metrics: '3.8M+ Monthly Organic Video Impressions Generated',
    tools: ['Figma', 'CapCut Pro', 'Metricool', 'ManyChat', 'Brand24'],
    category: 'Marketing',
  },
  {
    id: 'google-ads',
    number: '06',
    title: 'Google Ads',
    shortDesc: 'Target high-intent searches and scale aggressively with verified, real ROI.',
    longDesc: 'We build and manage high-intent Google Ads campaigns that cut wasted spend and amplify results — from Search and Performance Max to Shopping, Display, and YouTube pre-rolls.',
    icon: BarChart2,
    deliverables: [
      'High-Intent Google Search & Performance Max Campaigns',
      'Smart Bidding Strategy & Waste Spend Elimination',
      'Continuous Creative A/B Testing & Conversion Attribution',
      'Google Shopping, Display & YouTube Ad Integration',
    ],
    metrics: '4.6x Average Verified ROAS Across Client Verticals',
    tools: ['Google Ads', 'Google Analytics 4', 'Search Ads 360', 'Triple Whale'],
    category: 'Advertising',
  },
  {
    id: 'meta-ads',
    number: '07',
    title: 'Meta Ads',
    shortDesc: 'Facebook & Instagram ads engineered to stop scrollers and drive sales.',
    longDesc: 'We craft high-converting Meta ad campaigns using precision audience targeting, dynamic creatives, and data-driven funnel strategy — stopping scrollers and converting them.',
    icon: Target,
    deliverables: [
      'Facebook & Instagram Campaign Architecture & Scaling',
      'Precision Audience Targeting, Lookalikes & Retargeting',
      'High-Converting UGC & Creative Ad Production',
      'Full-Funnel Attribution & ROAS Optimisation',
    ],
    metrics: '3.9x Average Meta ROAS With 40% Lower CPL',
    tools: ['Meta Business Suite', 'Meta Ads Manager', 'Advantage+', 'Hotjar', 'Triple Whale'],
    category: 'Advertising',
  },
  {
    id: 'call-email-handling',
    number: '08',
    title: 'Call & Email Handling',
    shortDesc: 'Intelligent, 24/7 lead qualification and human-grade automated response.',
    longDesc: 'We deploy AI-powered call and email handling systems that respond, qualify, and nurture leads instantly — giving every prospect a professional, personalised experience without adding headcount.',
    icon: PhoneCall,
    deliverables: [
      'AI Voice Agents for Inbound & Outbound Call Handling',
      'Automated Email Sequences & Smart Follow-Up Flows',
      'CRM Integration & Lead Qualification Scoring',
      '24/7 Lead Response with Human-Quality Personalisation',
    ],
    metrics: '94% Lead Response Rate Within 60 Seconds',
    tools: ['Voiceflow', 'Vapi.ai', 'HubSpot', 'ActiveCampaign', 'Twilio'],
    category: 'Technology',
  },
  {
    id: 'image-design',
    number: '09',
    title: 'Image Design',
    shortDesc: 'High-end visual identity and ad creative that cements brand authority.',
    longDesc: 'From brand identity and social graphics to ad creatives and pitch decks, we produce premium visual assets that make your brand look unmistakably premium in every format.',
    icon: Image,
    deliverables: [
      'Brand Identity Design — Logo, Typography & Colour Systems',
      'Social Media Graphics, Banners & Story Templates',
      'Ad Creatives, Thumbnails & Landing Page Imagery',
      'Pitch Decks, Reports & Branded Document Design',
    ],
    metrics: '200+ Brands Elevated with Award-Worthy Visual Identity',
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva Pro', 'Spline'],
    category: 'Design',
  },
  {
    id: 'video-editing',
    number: '10',
    title: 'Video Editing',
    shortDesc: 'Scroll-stopping video content engineered for engagement and virality.',
    longDesc: 'Our video team transforms raw footage into polished, platform-native content — from short-form social reels and ad spots to long-form YouTube content — built to maximise watch time and conversions.',
    icon: Video,
    deliverables: [
      'Short-Form Reels, TikToks & YouTube Shorts Editing',
      'Long-Form YouTube & Podcast Video Production',
      'Ad Video Editing with CTA-Optimised Hooks',
      'Motion Graphics, Captions & Brand Intro/Outros',
    ],
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
  onNavigateServiceDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (initialServiceId && onNavigateServiceDetail) {
      onNavigateServiceDetail(initialServiceId);
    }
  }, [initialServiceId, onNavigateServiceDetail]);

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
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header
        onNavigate={(route, section) => handleNavigate(route, section)}
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
        {/* Ambient Subtle Blue Atmosphere */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-b from-blue-100/50 via-blue-50/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/90 text-[#2563EB] text-xs font-bold uppercase tracking-widest shadow-xs mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>GROWTH &amp; MARKETING SUITE</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5"
          >
            All <span className="text-[#2563EB]">10 Core Services</span>
            <br />
            Engineered for Scale
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            From autonomous AI systems and bespoke digital design to data-driven ad growth — every core capability your brand needs, unified under one roof.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-10 pt-6 border-t border-slate-200/60 max-w-xl mx-auto"
          >
            {[
              { value: '3K+', label: 'Clients Scaled' },
              { value: '10', label: 'Core Services' },
              { value: '98%', label: 'Retention Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="sticky top-[74px] sm:top-[78px] z-30 bg-white/90 backdrop-blur-md border-y border-slate-200/80 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center gap-2.5 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer select-none ${
                  isCatActive
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-[#2563EB]'
                }`}
              >
                <span>{cat}</span>
                {cat !== 'All' && (
                  <span
                    className={`ml-1.5 text-[10px] font-black ${
                      isCatActive ? 'text-white/80' : 'text-slate-400'
                    }`}
                  >
                    {allServices.filter((s) => s.category === cat).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid (Minimal, Uncommon, Pure Blue & White) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  onClick={() => onNavigateServiceDetail ? onNavigateServiceDetail(service.id) : undefined}
                  className={`group relative rounded-[26px] bg-white border border-slate-200/80 hover:border-blue-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_48px_-12px_rgba(37,99,235,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between`}
                >
                  {/* Subtle Top Active Blue Accent Line on Hover */}
                  <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] transition-all duration-300" />

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Header: Monogram Number & Category Badge */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-[11px] font-mono font-extrabold text-slate-400 group-hover:text-[#2563EB] group-hover:border-blue-200 group-hover:bg-blue-50/60 transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-[#2563EB] transition-colors" />
                          <span>{service.number}</span>
                        </div>

                        <span className="px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase text-slate-500 group-hover:text-[#2563EB] bg-slate-100 group-hover:bg-blue-50 border border-transparent group-hover:border-blue-100 transition-colors">
                          {service.category}
                        </span>
                      </div>

                      {/* Unique Frosted Blue Icon Orb */}
                      <div className="h-13 w-13 rounded-2xl bg-blue-50/80 border border-blue-100/90 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] group-hover:scale-105 mb-4">
                        <Icon size={24} className="stroke-[2.2]" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      {/* Service Short Description */}
                      <p className="text-[13px] text-slate-500 leading-relaxed font-normal mt-2 line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Minimalist Deliverables List */}
                      <ul className="space-y-2 mt-5">
                        {service.deliverables.slice(0, 2).map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                            <CheckCircle2 size={14} className="text-[#2563EB] mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metric Outcome Badge */}
                    <div className="mt-6">
                      <div className="p-3 rounded-xl bg-slate-50/80 group-hover:bg-blue-50/60 border border-slate-100 group-hover:border-blue-100 transition-colors flex items-center gap-2.5">
                        <TrendingUp size={14} className="text-[#2563EB] shrink-0" />
                        <span className="text-[11.5px] font-bold text-slate-700 group-hover:text-[#2563EB] leading-tight truncate">
                          {service.metrics}
                        </span>
                      </div>

                      {/* Card Footer Action */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#2563EB] transition-colors">
                        <span>View Blueprint</span>
                        <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore Details</span>
                          <ArrowRight size={13} strokeWidth={2.4} />
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-10 sm:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.3)] text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} />
            <span>Scale With Confidence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Ready to Build Something <br />
            <span className="text-[#60A5FA]">Extraordinary Together?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Pick your services, share your goals, and we will formulate a tailor-made digital blueprint built specifically for your revenue growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigateContact?.()}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm tracking-wide shadow-[0_10px_24px_rgba(37,99,235,0.4)] transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => onNavigateHome?.()}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Back to Home</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer onGetStartedClick={onOpenGetStarted} onNavigate={(route, section) => handleNavigate(route, section)} />
    </div>
  );
};

export default AllServicesPage;
