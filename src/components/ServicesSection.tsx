import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Bot,
  Globe,
  Smartphone,
  Search,
  Share2,
  BarChart2,
  ArrowRight,
  TrendingUp,
  Play,
} from 'lucide-react';

export interface ServicesSectionProps {
  onStartProjectClick?: () => void;
  onWatchStoryClick?: () => void;
  onExploreAllServices?: () => void;
  onViewServiceDetail?: (serviceId: string) => void;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  accent: {
    name: string;
    haloBg: string;
    iconGradient: string;
    iconShadow: string;
    card3dGlow: string;
    textColor: string;
    nodeColor: string;
    arrowBg: string;
    glowHex: string;
  };
  deliverables: string[];
  metrics: string;
  tools: string[];
  positionStyle: {
    top: string;
    left?: string;
    right?: string;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
  };
  directionalShadow: string;
  iconPosition: 'left' | 'right';
  arrowPosition: 'under-icon' | 'bottom-right';
}

const servicesData: ServiceItem[] = [
  // 01: AI Automation (Top-Left)
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    shortDesc: 'Automate workflows, scale smarter, and unlock 24/7 growth.',
    icon: Bot,
    accent: {
      name: 'Blue',
      haloBg: 'bg-blue-100/70',
      iconGradient: 'from-[#38BDF8] via-[#0070F3] to-[#0A3D91]',
      iconShadow: 'shadow-[0_12px_28px_rgba(0,112,243,0.45)]',
      card3dGlow: 'hover:shadow-[-8px_18px_32px_-6px_rgba(0,112,243,0.09)]',
      textColor: 'text-[#0070F3]',
      nodeColor: '#0070F3',
      arrowBg: 'bg-blue-50 text-[#0070F3] hover:bg-[#0070F3] hover:text-white',
      glowHex: '#0070F3',
    },
    deliverables: [
      'AI Chatbots & Voice Agents for 24/7 Lead Capture',
      'CRM Automation, Lead Scoring & Smart Nurture Flows',
      'Webhook & API Integrations Across All Tech Stacks',
      'AI-Powered Reporting Dashboards & Predictive Analytics',
    ],
    metrics: '14+ Hours Saved Weekly Per Team With Zero Leaked Leads',
    tools: ['OpenAI API', 'Make.com', 'HubSpot', 'Zapier', 'Voiceflow'],
    positionStyle: {
      top: '4%',
      left: '6%',
      rotateX: 12,
      rotateY: 18,
      rotateZ: -4,
    },
    directionalShadow: 'shadow-[-16px_22px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(0,112,243,0.12)]',
    iconPosition: 'right',
    arrowPosition: 'under-icon',
  },
  // 02: Website Design (Top-Right)
  {
    id: 'website-design',
    number: '02',
    title: 'Website Design',
    shortDesc: 'High-converting websites engineered for growth & brand impact.',
    icon: Globe,
    accent: {
      name: 'Purple',
      haloBg: 'bg-purple-100/70',
      iconGradient: 'from-[#C084FC] via-[#8B5CF6] to-[#4C1D95]',
      iconShadow: 'shadow-[0_12px_28px_rgba(139,92,246,0.45)]',
      card3dGlow: 'hover:shadow-[8px_18px_32px_-6px_rgba(139,92,246,0.09)]',
      textColor: 'text-[#7C3AED]',
      nodeColor: '#8B5CF6',
      arrowBg: 'bg-purple-50 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white',
      glowHex: '#8B5CF6',
    },
    deliverables: [
      'Next.js 16 & React 19 Enterprise Web Architecture',
      'Conversion-Optimised UI/UX Design & High-Performance Funnels',
      'Interactive Micro-Animations with Framer Motion & GSAP',
      'Sub-Second Page Load Speeds (100/100 Core Web Vitals)',
    ],
    metrics: '+68% Average Uplift in On-Page Visitor Conversion Rate',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Vercel'],
    positionStyle: {
      top: '4%',
      right: '6%',
      rotateX: 12,
      rotateY: -18,
      rotateZ: 4,
    },
    directionalShadow: 'shadow-[16px_22px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(139,92,246,0.12)]',
    iconPosition: 'left',
    arrowPosition: 'under-icon',
  },
  // 03: App Development (Mid-Right)
  {
    id: 'app-development',
    number: '03',
    title: 'App Development',
    shortDesc: 'Cross-platform apps that delight users & drive retention.',
    icon: Smartphone,
    accent: {
      name: 'Orange',
      haloBg: 'bg-orange-100/70',
      iconGradient: 'from-[#FDBA74] via-[#FB923C] to-[#9A3412]',
      iconShadow: 'shadow-[0_12px_28px_rgba(249,115,22,0.45)]',
      card3dGlow: 'hover:shadow-[8px_18px_32px_-6px_rgba(249,115,22,0.09)]',
      textColor: 'text-[#EA580C]',
      nodeColor: '#F97316',
      arrowBg: 'bg-orange-50 text-[#EA580C] hover:bg-[#EA580C] hover:text-white',
      glowHex: '#F97316',
    },
    deliverables: [
      'React Native & Flutter Cross-Platform App Development',
      'Performance-Optimised iOS & Android Native Builds',
      'App Store Optimisation (ASO) & Launch Growth Strategy',
      'Backend API Architecture & Real-Time Data Integration',
    ],
    metrics: '50+ Apps Launched with 4.7★ Average Store Rating',
    tools: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'Expo'],
    positionStyle: {
      top: '37%',
      right: '1.5%',
      rotateX: 3,
      rotateY: -20,
      rotateZ: 2,
    },
    directionalShadow: 'shadow-[18px_20px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(249,115,22,0.12)]',
    iconPosition: 'left',
    arrowPosition: 'bottom-right',
  },
  // 04: SEO & AEO (Bottom-Right)
  {
    id: 'seo-aeo',
    number: '04',
    title: 'SEO & AEO',
    shortDesc: 'Rank higher everywhere — Google, AI Overviews & beyond.',
    icon: Search,
    accent: {
      name: 'Green',
      haloBg: 'bg-emerald-100/70',
      iconGradient: 'from-[#6EE7B7] via-[#10B981] to-[#064E3B]',
      iconShadow: 'shadow-[0_12px_28px_rgba(16,185,129,0.45)]',
      card3dGlow: 'hover:shadow-[8px_18px_32px_-6px_rgba(16,185,129,0.09)]',
      textColor: 'text-[#059669]',
      nodeColor: '#10B981',
      arrowBg: 'bg-emerald-50 text-[#059669] hover:bg-[#059669] hover:text-white',
      glowHex: '#10B981',
    },
    deliverables: [
      'Semantic Topical Authority & Knowledge Graph Optimisation',
      'AI Answer Engine Optimisation (ChatGPT, Perplexity, Gemini)',
      'High-Authority Digital PR & Inbound Backlink Scaling',
      'Technical Core Web Vitals & Crawl Budget Engineering',
    ],
    metrics: '+240% Organic Inbound Leads Within 6 Months',
    tools: ['Google Search Console', 'Ahrefs', 'Semrush', 'SurferSEO', 'Schema Pro'],
    positionStyle: {
      top: '68%',
      right: '5.5%',
      rotateX: -12,
      rotateY: -18,
      rotateZ: -4,
    },
    directionalShadow: 'shadow-[16px_18px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(16,185,129,0.12)]',
    iconPosition: 'left',
    arrowPosition: 'bottom-right',
  },
  // 05: Social Media (Bottom-Left)
  {
    id: 'social-media',
    number: '05',
    title: 'Social Media',
    shortDesc: 'Turn followers into loyal, high-value customers.',
    icon: Share2,
    accent: {
      name: 'Red',
      haloBg: 'bg-rose-100/70',
      iconGradient: 'from-[#FCA5A5] via-[#EF4444] to-[#7F1D1D]',
      iconShadow: 'shadow-[0_12px_28px_rgba(239,68,68,0.45)]',
      card3dGlow: 'hover:shadow-[-8px_18px_32px_-6px_rgba(239,68,68,0.09)]',
      textColor: 'text-[#DC2626]',
      nodeColor: '#EF4444',
      arrowBg: 'bg-rose-50 text-[#DC2626] hover:bg-[#DC2626] hover:text-white',
      glowHex: '#EF4444',
    },
    deliverables: [
      'Multi-Platform Short-Form Video Strategy (Reels, TikTok, Shorts)',
      'Community Engagement & Founder Personal Branding',
      'High-Converting Social Funnels & DM Automation',
      'Viral Trend Content with Data-Driven Distribution',
    ],
    metrics: '3.8M+ Monthly Organic Video Impressions Generated',
    tools: ['Figma', 'CapCut Pro', 'Metricool', 'ManyChat', 'Brand24'],
    positionStyle: {
      top: '68%',
      left: '5.5%',
      rotateX: -12,
      rotateY: 18,
      rotateZ: 4,
    },
    directionalShadow: 'shadow-[-16px_18px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(239,68,68,0.12)]',
    iconPosition: 'right',
    arrowPosition: 'under-icon',
  },
  // 06: Google Ads (Mid-Left)
  {
    id: 'google-ads',
    number: '06',
    title: 'Google Ads',
    shortDesc: 'Target the right searches. Scale with real, measurable ROI.',
    icon: BarChart2,
    accent: {
      name: 'Violet',
      haloBg: 'bg-indigo-100/70',
      iconGradient: 'from-[#A5B4FC] via-[#6366F1] to-[#312E81]',
      iconShadow: 'shadow-[0_12px_28px_rgba(99,102,241,0.45)]',
      card3dGlow: 'hover:shadow-[-8px_18px_32px_-6px_rgba(99,102,241,0.09)]',
      textColor: 'text-[#4F46E5]',
      nodeColor: '#6366F1',
      arrowBg: 'bg-indigo-50 text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white',
      glowHex: '#6366F1',
    },
    deliverables: [
      'High-Intent Google Search & Performance Max Campaigns',
      'Smart Bidding Strategy & Waste Spend Elimination',
      'Continuous Creative A/B Testing & Conversion Attribution',
      'Google Shopping, Display & YouTube Ad Integration',
    ],
    metrics: '4.6x Average Verified ROAS Across Client Verticals',
    tools: ['Google Ads', 'Google Analytics 4', 'Search Ads 360', 'Triple Whale'],
    positionStyle: {
      top: '37%',
      left: '1.5%',
      rotateX: 3,
      rotateY: 20,
      rotateZ: -2,
    },
    directionalShadow: 'shadow-[-18px_20px_45px_-8px_rgba(15,23,42,0.12),_0_0_25px_rgba(99,102,241,0.12)]',
    iconPosition: 'left',
    arrowPosition: 'bottom-right',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onStartProjectClick: _onStartProjectClick,
  onWatchStoryClick,
  onExploreAllServices,
  onViewServiceDetail,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FBFDFF] to-[#F1F6FE]/50 pt-16 sm:pt-20 pb-20 sm:pb-28 lg:pb-32 select-none"
    >
      {/* ======================================================================= */}
      {/* 1. Ambient Background Atmosphere & Corner Wave Accents                  */}
      {/* ======================================================================= */}
      {/* Top-Left Abstract Smooth Blue Wave Corner Accent matching reference */}
      <div className="absolute top-0 left-0 w-[420px] h-[340px] pointer-events-none -z-10 opacity-85">
        <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M -40 -40 C 140 -20 220 100 120 200 C 40 280 -20 320 -60 340 Z"
            fill="url(#cornerBlue1)"
            opacity="0.3"
          />
          <path
            d="M -50 -50 C 90 -40 170 70 80 170 C 0 250 -40 270 -80 290 Z"
            fill="url(#cornerBlue2)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="cornerBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cornerBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D68F7" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Right Abstract Smooth Lilac/Blue Wave Accent matching reference */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[360px] pointer-events-none -z-10 opacity-70">
        <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M 520 400 C 340 380 260 250 360 150 C 440 70 500 30 540 10 Z"
            fill="url(#cornerBlue1)"
            opacity="0.25"
          />
          <path
            d="M 540 420 C 380 400 300 280 400 180 C 480 100 520 80 560 60 Z"
            fill="url(#cornerBlue2)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Center ambient radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-blue-100/40 via-indigo-50/30 to-violet-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* ======================================================================= */}
      {/* 2. Outer Screen Gutters: Left & Right Vertical Milestone Trackers       */}
      {/* ======================================================================= */}
      {/* Left Gutter: → IDEAS → STRATEGY → EXECUTION → GROWTH (Moved left & slightly down, perfect arrow alignment) */}
      <div className="hidden xl:flex absolute left-3 sm:left-4 lg:left-6 2xl:left-8 top-[56%] -translate-y-1/2 w-8 flex-col items-center pointer-events-none z-20 select-none">
        <div className="relative flex items-center justify-center h-[370px] w-8">
          <div className="absolute flex items-center gap-2.5 rotate-[-90deg] origin-center text-[10px] 2xl:text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 whitespace-nowrap">
            {/* Arrow 1 */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1D68F7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="leading-none text-slate-500">IDEAS</span>

            {/* Arrow 2 */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1D68F7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="leading-none text-slate-500">STRATEGY</span>

            {/* Arrow 3 */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1D68F7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="leading-none text-slate-500">EXECUTION</span>

            {/* Arrow 4 */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1D68F7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span className="leading-none text-slate-800 font-black">GROWTH</span>
          </div>
        </div>
        {/* Continuous vertical line extending downward */}
        <div className="w-[1.5px] h-24 bg-gradient-to-b from-slate-300 via-slate-300 to-transparent -mt-1" />
      </div>

      {/* Right Gutter: PLAN / BUILD / GROW (Outside Card Stage) */}
      <div className="hidden xl:flex absolute right-3 sm:right-4 lg:right-6 2xl:right-8 top-[52%] -translate-y-1/2 flex-col items-center gap-2.5 pointer-events-none z-20 text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 select-none">
        <span>PLAN</span>
        <div className="relative flex items-center justify-center my-0.5">
          <div className="w-[1.5px] h-10 bg-slate-300" />
          <span className="absolute h-2.5 w-2.5 rounded-full bg-[#1D68F7] shadow-[0_0_8px_#1D68F7]" />
        </div>
        <span className="text-[#1D68F7] font-black">BUILD</span>
        <div className="w-[1.5px] h-10 bg-slate-300 my-0.5" />
        <span>GROW</span>
      </div>

      {/* ======================================================================= */}
      {/* 3. Main Stage Container                                                 */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Header Area */}
        <div className="relative text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          
          {/* Small Pill Badge: OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#1D68F7] text-[11px] font-black uppercase tracking-[0.2em] shadow-xs mb-3.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#1D68F7]" />
            <span>OUR SERVICES</span>
          </motion.div>

          {/* Large Bold Headline: From Strategy to Scale — All in One Place. */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#0F172A] tracking-tight leading-[1.12] mb-3.5"
          >
            From Strategy to Scale <br className="hidden sm:inline" />
            <span className="text-[#1D68F7]">
              — All in One Place.
            </span>
          </motion.h2>

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-2xl mx-auto"
          >
            We combine strategy, creativity, AI and data to deliver real business growth.
            <br className="hidden sm:inline" />
            Pick a service, explore the details, and see how we can make an impact together.
          </motion.p>
        </div>

        {/* Top-Right Handwritten Annotation: "More Than Services A Growth Partner" with curved arrow */}
        <div className="hidden lg:block absolute right-6 sm:right-10 lg:right-16 top-16 sm:top-20 pointer-events-none z-20 select-none">
          <div className="relative font-handwriting text-2xl xl:text-3xl text-slate-800 leading-[1.08] font-semibold">
            <span>More</span><br />
            <span>Than Services</span><br />
            <span className="text-slate-900 font-bold">A Growth Partner</span>
            {/* Hand-drawn curved arrow pointing down-left */}
            <div className="absolute -bottom-7 -left-3 w-12 h-10 text-slate-700">
              <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M 42 4 C 30 10 12 18 16 34"
                  stroke="#334155"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 26 L 16 34 L 24 30"
                  stroke="#334155"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>


        {/* ===================================================================== */}
        {/* 4. Main Stage: Orbital Growth Ecosystem (Desktop & Mobile)            */}
        {/* ===================================================================== */}
        <div className="relative w-full max-w-[1240px] xl:max-w-[1280px] mx-auto min-h-[720px] sm:min-h-[760px] lg:min-h-[780px] flex items-center justify-center">

          {/* ----------------------------------------------------------------- */}
          {/* A. Background Orbit Rings & Connecting SVG System (Desktop Centered)*/}
          {/* ----------------------------------------------------------------- */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none z-0">
            <svg
              viewBox="0 0 1200 760"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.35" />
                </linearGradient>

                <linearGradient id="pedestalRim" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#0070F3" />
                </linearGradient>

                <radialGradient id="pedestalFloorGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#0070F3" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0070F3" stopOpacity="0" />
                </radialGradient>

                {/* Path for text along bottom orbit arc */}
                <path
                  id="bottomOrbitTextPath"
                  d="M 370 540 C 445 615 755 615 830 540"
                  fill="none"
                />
              </defs>

              {/* 3D Perspective Elliptical Orbit Rings */}
              {/* Outer Orbit Ring */}
              <ellipse
                cx="600"
                cy="410"
                rx="480"
                ry="215"
                stroke="url(#orbitGlow)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                opacity="0.4"
              />

              {/* Middle Orbit Ring */}
              <ellipse
                cx="600"
                cy="410"
                rx="370"
                ry="165"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.4"
              />

              {/* Inner Orbit Ring */}
              <ellipse
                cx="600"
                cy="410"
                rx="260"
                ry="115"
                stroke="#60A5FA"
                strokeWidth="1.2"
                opacity="0.3"
              />

              {/* Concentric Base Holographic Pedestal under the Cube */}
              {/* Soft floor glow pool */}
              <ellipse
                cx="600"
                cy="450"
                rx="180"
                ry="70"
                fill="url(#pedestalFloorGlow)"
              />

              {/* Pedestal 3D Base Cylinder */}
              <ellipse
                cx="600"
                cy="455"
                rx="140"
                ry="55"
                fill="#0F45B5"
                opacity="0.85"
              />
              <path
                d="M 460 445 C 460 475 740 475 740 445 L 740 455 C 740 485 460 485 460 455 Z"
                fill="#0C3691"
              />

              {/* Pedestal Top Glowing Rim */}
              <ellipse
                cx="600"
                cy="445"
                rx="140"
                ry="52"
                fill="#0051CB"
              />
              <ellipse
                cx="600"
                cy="445"
                rx="140"
                ry="52"
                stroke="url(#pedestalRim)"
                strokeWidth="3.5"
                className="drop-shadow-[0_0_12px_#00F0FF]"
              />
              <ellipse
                cx="600"
                cy="445"
                rx="110"
                ry="38"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
              />

              {/* Connecting Lines between Orbit and 6 Service Nodes */}
              {/* Line to Card 01 (SEO - Top Left) */}
              <path
                d="M 440 330 C 400 290 350 240 310 200"
                stroke="#0070F3"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="440" cy="330" r="4.5" fill="#0070F3" />

              {/* Line to Card 02 (Paid Ads - Top Right) */}
              <path
                d="M 760 330 C 800 290 850 240 890 200"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="760" cy="330" r="4.5" fill="#8B5CF6" />

              {/* Line to Card 03 (Social - Mid Right) */}
              <path
                d="M 870 410 C 915 410 950 415 985 415"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="870" cy="410" r="4.5" fill="#F97316" />

              {/* Line to Card 04 (Web Dev - Bottom Right) */}
              <path
                d="M 760 495 C 800 535 850 580 890 620"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="760" cy="495" r="4.5" fill="#10B981" />

              {/* Line to Card 05 (YouTube - Bottom Left) */}
              <path
                d="M 440 495 C 400 535 350 580 310 620"
                stroke="#EF4444"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="440" cy="495" r="4.5" fill="#EF4444" />

              {/* Line to Card 06 (Automation - Mid Left) */}
              <path
                d="M 330 410 C 285 410 250 415 215 415"
                stroke="#6366F1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.65"
              />
              <circle cx="330" cy="410" r="4.5" fill="#6366F1" />

              {/* Arc Text on Lower Orbit: BRANDS • LEADS • REVENUE • LONG-TERM GROWTH */}
              <text className="text-[10px] font-extrabold uppercase tracking-[0.28em] fill-slate-400">
                <textPath href="#bottomOrbitTextPath" startOffset="50%" textAnchor="middle">
                  BRANDS • LEADS • REVENUE • LONG-TERM GROWTH
                </textPath>
              </text>
            </svg>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* B. Centerpiece: 3D Isometric Cluster Cloud Logo Cube               */}
          {/* ----------------------------------------------------------------- */}
          <div className="relative lg:absolute lg:left-1/2 lg:top-[48%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none mb-10 lg:mb-0">
            
            {/* Handwritten callout above logo: "Your Digital Growth Partner" */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative font-handwriting text-2xl xl:text-3xl text-slate-800 leading-none font-semibold mb-1 select-none text-center"
            >
              <span>Your</span><br />
              <span className="text-slate-900 font-bold">Digital Growth</span><br />
              <span>Partner</span>
              <div className="flex justify-center mt-1 text-slate-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M 12 2 L 12 18 M 6 12 L 12 18 L 18 12" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* 3D Isometric Cluster Cloud Official Logo */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [-4, 4, -4],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ willChange: 'transform' }}
              className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 filter drop-shadow-[0_22px_35px_rgba(0,112,243,0.35)] flex items-center justify-center pointer-events-none"
            >
              <img
                src="/cluster-3d-logo.png"
                alt="Cluster Cloud 3D Logo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain select-none"
              />
            </motion.div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* C. 6 Asymmetric Floating Service Cards                            */}
          {/* ----------------------------------------------------------------- */}
          {/* DESKTOP VIEW: Absolute Orbital Arrangement matching Reference in True 3D Perspective */}
          <div
            className="hidden lg:block w-full h-full absolute inset-0 z-10"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            {servicesData.map((service, idx) => (
              <DesktopOrbitalCard
                key={service.id}
                service={service}
                onClick={() => onViewServiceDetail ? onViewServiceDetail(service.id) : onExploreAllServices?.()}
                customDelay={0.08 + idx * 0.04}
              />
            ))}
          </div>

          {/* TABLET / MOBILE VIEW: Responsive 2-Column / 1-Column Grid */}
          <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 z-10">
            {servicesData.map((service, idx) => (
              <MobileServiceCard
                key={service.id}
                service={service}
                onClick={() => onViewServiceDetail ? onViewServiceDetail(service.id) : onExploreAllServices?.()}
                customDelay={0.08 + idx * 0.04}
              />
            ))}
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* D. Desktop Bottom Row: Left Badge, Centered CTAs, Right Note       */}
          {/* ----------------------------------------------------------------- */}
          <div className="hidden lg:block absolute -bottom-6 xl:-bottom-8 inset-x-0 z-20 pointer-events-auto">
            <div className="relative w-full h-16 flex items-center justify-between">
              
              {/* Bottom-Left: Businesses Scaled 3K+ (Moved to Far Left Red Box) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08)] border border-slate-100 rotate-[-3.5deg] hover:rotate-0 transition-transform duration-300 select-none cursor-default -ml-6 xl:-ml-16 2xl:-ml-28"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={22} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Businesses Scaled
                  </span>
                  <span className="text-xl font-black text-[#0F172A] tracking-tight">
                    3K+ <span className="text-emerald-500 text-sm font-bold">↗</span>
                  </span>
                </div>
              </motion.div>

              {/* Bottom-Center: Dual CTA Buttons (Moved DOWN into Center Red Box) */}
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-6 flex items-center gap-5 xl:gap-6 whitespace-nowrap">
                {/* Primary Action Button: Explore All Services */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onExploreAllServices?.()}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D68F7] hover:bg-[#185ADB] text-white font-bold text-sm tracking-wide shadow-[0_10px_24px_rgba(29,104,247,0.35)] transition-all cursor-pointer"
                >
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </motion.button>

                {/* Secondary Action: Watch How We Work in 60 Seconds */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onWatchStoryClick}
                  className="inline-flex items-center gap-3 transition-all text-left cursor-pointer group"
                >
                  <div className="h-11 w-11 rounded-full bg-blue-100/80 group-hover:bg-[#1D68F7] text-[#1D68F7] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                    <Play size={15} className="fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="block text-[13px] font-bold text-slate-800 leading-tight">
                      Watch How We Work
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 leading-tight">
                      In 60 Seconds
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* Bottom-Right: Same Services Greater Possibilities (Moved to Far Right Red Box) */}
              <div className="select-none -mr-6 xl:-mr-16 2xl:-mr-28">
                <div className="relative font-handwriting text-2xl xl:text-3xl text-slate-800 leading-[1.08] font-semibold text-right">
                  <span>Same Services</span><br />
                  <span className="text-slate-900 font-bold">Greater Possibilities</span>
                  <div className="flex justify-end mt-0.5 mr-3 text-slate-700">
                    <svg width="38" height="30" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 38 4 C 34 16 22 24 10 30"
                        stroke="#334155"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 18 30 L 10 30 L 12 22"
                        stroke="#334155"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile / Tablet Bottom CTA Bar */}
        <div className="lg:hidden relative mt-8 pt-2 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
          {/* Businesses Scaled */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-100">
            <div className="h-10 w-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Businesses Scaled
              </span>
              <span className="text-xl font-black text-[#0F172A] tracking-tight">
                3K+ <span className="text-emerald-500 text-sm font-bold">↗</span>
              </span>
            </div>
          </div>

          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onExploreAllServices?.()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1D68F7] hover:bg-[#185ADB] text-white font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onWatchStoryClick}
              className="inline-flex items-center gap-3 text-left cursor-pointer group py-1"
            >
              <div className="h-10 w-10 rounded-full bg-blue-100/80 text-[#1D68F7] flex items-center justify-center shadow-xs">
                <Play size={15} className="fill-current ml-0.5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-800 leading-tight">
                  Watch How We Work
                </span>
                <span className="text-[10px] font-medium text-slate-400 leading-tight">
                  In 60 Seconds
                </span>
              </div>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};

/* ============================================================================= */
/* Subcomponent: Desktop Orbital Service Card (Absolute Positioned)              */
/* ============================================================================= */
interface DesktopOrbitalCardProps {
  service: ServiceItem;
  onClick: () => void;
  customDelay: number;
}

const DesktopOrbitalCard: React.FC<DesktopOrbitalCardProps> = ({
  service,
  onClick,
  customDelay,
}) => {
  const Icon = service.icon;
  const isIconRight = service.iconPosition === 'right';
  const hasArrowUnderIcon = service.arrowPosition === 'under-icon';

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        rotateX: service.positionStyle.rotateX,
        rotateY: service.positionStyle.rotateY,
        rotateZ: service.positionStyle.rotateZ,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotateX: service.positionStyle.rotateX,
        rotateY: service.positionStyle.rotateY,
        rotateZ: service.positionStyle.rotateZ,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: customDelay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.06,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        z: 60,
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: service.positionStyle.top,
        left: service.positionStyle.left,
        right: service.positionStyle.right,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
      }}
      className="group w-[325px] xl:w-[355px] 2xl:w-[370px] cursor-pointer select-none"
    >
      {/* 3D Glassmorphic Chamfered Slab with Directional Depth & Volumetric Glow */}
      <div
        className={`relative rounded-[32px] xl:rounded-[36px] bg-gradient-to-br from-white/98 via-white/95 to-slate-50/92 backdrop-blur-2xl p-5 xl:p-6 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-slate-200/60 ${service.directionalShadow} ${service.accent.card3dGlow} group-hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 flex items-center justify-between gap-4`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: 'inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 1), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Directional 3D Glass Specular Reflection Highlight */}
        <div className="absolute inset-0 rounded-[32px] xl:rounded-[36px] bg-gradient-to-tr from-transparent via-white/20 to-white/70 pointer-events-none opacity-80" />

        {/* Ambient Neon Accent Floor Glow on Hover - very subtle and soft */}
        <div
          className="absolute -inset-0.5 rounded-[36px] blur-md opacity-0 group-hover:opacity-8 transition-opacity duration-300 pointer-events-none -z-10"
          style={{ backgroundColor: service.accent.glowHex }}
        />

        {/* Left Icon (if iconPosition === 'left') */}
        {!isIconRight && (
          <div
            className="relative shrink-0 flex flex-col items-center gap-2.5 z-10"
            style={{ transform: 'translateZ(34px)' }}
          >
            {/* 3D Floating Orb with Specular Shading */}
            <div className={`p-1.5 rounded-full ${service.accent.haloBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
              <div
                className={`relative h-13 w-13 xl:h-14 xl:w-14 rounded-full bg-gradient-to-br ${service.accent.iconGradient} text-white flex items-center justify-center shadow-[inset_0_4px_6px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.32)] ${service.accent.iconShadow}`}
              >
                {/* 3D Glossy Light Spot */}
                <div className="absolute top-1.5 left-2.5 w-4 h-2 rounded-full bg-white/45 blur-[0.6px] pointer-events-none" />
                <Icon size={24} className="stroke-[2.4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </div>
            </div>
            {/* Small Action Arrow directly beneath the left icon */}
            {hasArrowUnderIcon && (
              <div className={`h-6 w-6 rounded-full ${service.accent.arrowBg} flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:scale-110`}>
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              </div>
            )}
          </div>
        )}

        {/* Text Content with 3D Spatial Depth */}
        <div
          className={`flex-1 text-left z-10 ${isIconRight ? 'order-1' : 'order-2'}`}
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Number Pill Badge */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100/90 border border-white text-[10px] font-black text-slate-400 tracking-wider shadow-2xs group-hover:text-slate-700 transition-colors">
              {service.number}
            </span>
            <div
              className="h-1.5 w-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: service.accent.glowHex }}
            />
          </div>

          {/* Title */}
          <h3 className="text-[16px] xl:text-[17.5px] font-black text-[#0F172A] tracking-tight group-hover:text-[#1D68F7] transition-colors leading-snug mb-1">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-[12px] xl:text-[12.5px] text-slate-500 leading-relaxed line-clamp-2 font-medium">
            {service.shortDesc}
          </p>
        </div>

        {/* Right Icon (if iconPosition === 'right') */}
        {isIconRight && (
          <div
            className="relative shrink-0 order-2 flex flex-col items-center gap-2.5 z-10"
            style={{ transform: 'translateZ(34px)' }}
          >
            {/* 3D Floating Orb with Specular Shading */}
            <div className={`p-1.5 rounded-full ${service.accent.haloBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
              <div
                className={`relative h-13 w-13 xl:h-14 xl:w-14 rounded-full bg-gradient-to-br ${service.accent.iconGradient} text-white flex items-center justify-center shadow-[inset_0_4px_6px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.32)] ${service.accent.iconShadow}`}
              >
                {/* 3D Glossy Light Spot */}
                <div className="absolute top-1.5 left-2.5 w-4 h-2 rounded-full bg-white/45 blur-[0.6px] pointer-events-none" />
                <Icon size={24} className="stroke-[2.4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </div>
            </div>
            {/* Small Action Arrow directly beneath the right icon */}
            {hasArrowUnderIcon && (
              <div className={`h-6 w-6 rounded-full ${service.accent.arrowBg} flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:scale-110`}>
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
              </div>
            )}
          </div>
        )}

        {/* Bottom-Right Arrow Button (if not under-icon) */}
        {!hasArrowUnderIcon && (
          <div
            className="absolute bottom-4 right-4 xl:bottom-5 xl:right-5 z-10"
            style={{ transform: 'translateZ(26px)' }}
          >
            <div className={`h-6 w-6 rounded-full ${service.accent.arrowBg} flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:scale-110`}>
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
};

/* ============================================================================= */
/* Subcomponent: Mobile / Tablet Responsive Service Card                         */
/* ============================================================================= */
interface MobileServiceCardProps {
  service: ServiceItem;
  onClick: () => void;
  customDelay: number;
}

const MobileServiceCard: React.FC<MobileServiceCardProps> = ({
  service,
  onClick,
  customDelay,
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: customDelay }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="group w-full cursor-pointer"
    >
      <div
        className={`rounded-2xl bg-gradient-to-br from-white/98 to-slate-50/92 backdrop-blur-md border-t-2 border-l-2 border-white border-b border-r border-slate-200/60 p-5 shadow-[0_14px_30px_-6px_rgba(15,23,42,0.08)] ${service.accent.card3dGlow} transition-all duration-300 flex items-center gap-4`}
        style={{
          boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 1), 0 14px 30px -6px rgba(15,23,42,0.08)',
        }}
      >
        <div className={`p-1.5 rounded-full ${service.accent.haloBg} shrink-0`}>
          <div className={`relative h-12 w-12 rounded-full bg-gradient-to-br ${service.accent.iconGradient} text-white flex items-center justify-center shadow-[inset_0_3px_5px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(0,0,0,0.3)] ${service.accent.iconShadow}`}>
            <div className="absolute top-1 left-2 w-3 h-1.5 rounded-full bg-white/40 blur-[0.5px] pointer-events-none" />
            <Icon size={22} className="stroke-[2.3] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]" />
          </div>
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center justify-between mb-0.5">
            <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-black text-slate-400 tracking-wider">
              {service.number}
            </span>
            <span className={`h-5 w-5 rounded-full ${service.accent.arrowBg} flex items-center justify-center shadow-2xs`}>
              <ArrowRight size={10} className="stroke-[2.5]" />
            </span>
          </div>
          <h3 className="text-base font-black text-[#0F172A] tracking-tight group-hover:text-[#1D68F7] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mt-0.5">
            {service.shortDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
