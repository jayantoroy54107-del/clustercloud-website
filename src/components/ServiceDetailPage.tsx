import React, { useEffect, useState } from 'react';
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
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Layers,
  Zap,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { serviceNameToSlug } from '../lib/slugs';

export interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate?: (route: any, section?: string) => void;
  onNavigateHome?: (section?: string) => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
}

interface ServiceFullDef {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ElementType;
  accentColor: string;
  deliverables: string[];
  metrics: string;
  tools: string[];
  category: string;
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  realWork?: { url: string }[];
}

const servicesData: ServiceFullDef[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    shortDesc: 'Automate workflows, scale smarter, and unlock 24/7 autonomous pipeline growth.',
    longDesc: 'We design and deploy intelligent automation systems that eliminate repetitive work and keep your pipeline full around the clock. From AI chatbots and voice agents to CRM workflows and predictive reporting — our systems work 24/7 so your team can focus on what only humans can do.',
    icon: Bot,
    accentColor: '#2563EB',
    deliverables: [
      'AI Chatbots & Voice Agents for 24/7 Lead Capture',
      'CRM Automation, Lead Scoring & Smart Nurture Flows',
      'Webhook & API Integrations Across All Tech Stacks',
      'AI-Powered Reporting Dashboards & Predictive Analytics',
    ],
    metrics: '14+ Hours Saved Weekly Per Team With Zero Leaked Leads',
    tools: ['OpenAI API', 'Make.com', 'HubSpot', 'Zapier', 'Voiceflow'],
    category: 'Technology',
    process: [
      { step: '01', title: 'Discovery & Audit', desc: 'We map your current workflows, identify bottlenecks and design the automation architecture.' },
      { step: '02', title: 'Build & Integrate', desc: 'Our team builds and connects all AI agents, CRM flows, and API integrations to your stack.' },
      { step: '03', title: 'Train & Optimise', desc: 'We train the AI models on your data, test edge cases, and fine-tune for maximum accuracy.' },
      { step: '04', title: 'Launch & Monitor', desc: 'Go live with full monitoring dashboards. We provide ongoing optimisation and support.' },
    ],
    faqs: [
      { q: 'How long does it take to set up AI automation?', a: 'Most systems go live within 2-4 weeks depending on complexity. Simple chatbots can be live in 3-5 days.' },
      { q: 'Will it integrate with my existing CRM?', a: 'Yes — we integrate with HubSpot, Salesforce, GoHighLevel, Pipedrive, and virtually any CRM via API.' },
      { q: 'What if the AI makes a mistake?', a: 'All our systems include human-in-the-loop fallbacks and monitoring dashboards to catch edge cases instantly.' },
    ],
  },
  {
    id: 'web-design-and-development',
    number: '02',
    title: 'Web Design and Development',
    shortDesc: 'High-converting websites engineered for maximum engagement and brand impact.',
    longDesc: 'Every pixel is intentional. We craft bespoke, performance-first websites that do not just look stunning — they convert visitors into loyal clients using proven UX principles and cutting-edge animation. Built on Next.js 16 with sub-second load times and perfect Core Web Vitals scores.',
    icon: Globe,
    accentColor: '#0EA5E9',
    deliverables: [
      'Next.js 16 & React 19 Enterprise Web Architecture',
      'Conversion-Optimised UI/UX Design & High-Performance Funnels',
      'Interactive Micro-Animations with Framer Motion & GSAP',
      'Sub-Second Page Load Speeds (100/100 Core Web Vitals)',
    ],
    metrics: '+68% Average Uplift in On-Page Visitor Conversion Rate',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Vercel'],
    category: 'Design',
    process: [
      { step: '01', title: 'Strategy & Wireframes', desc: 'We research your audience, map user journeys, and produce detailed wireframes aligned to your goals.' },
      { step: '02', title: 'Visual Design', desc: 'Full high-fidelity design in Figma with your brand palette, typography, and micro-interaction specs.' },
      { step: '03', title: 'Development', desc: 'Pixel-perfect implementation in Next.js with performance optimised from day one.' },
      { step: '04', title: 'Launch & Growth', desc: 'SEO-ready deployment, A/B testing setup, and ongoing CRO improvements post-launch.' },
    ],
    faqs: [
      { q: 'How long does a website take?', a: 'Landing pages in 1-2 weeks. Full business websites in 3-6 weeks. Large-scale platforms in 6-12 weeks.' },
      { q: 'Do you redesign existing websites?', a: 'Absolutely. We specialise in redesigns that preserve your SEO equity while dramatically improving conversion.' },
      { q: 'What is included post-launch?', a: '30 days of support, bug fixes, and performance monitoring included with every project.' },
    ],
  },
  {
    id: 'app-development',
    number: '03',
    title: 'App Development',
    shortDesc: 'Polished cross-platform mobile apps that delight users and drive retention.',
    longDesc: 'From MVP to enterprise-scale, we build polished cross-platform mobile apps that combine beautiful design with rock-solid engineering — delivered fast and optimised for App Store success. Our apps are built to retain users and generate sustainable revenue.',
    icon: Smartphone,
    accentColor: '#8B5CF6',
    deliverables: [
      'React Native & Flutter Cross-Platform App Development',
      'Performance-Optimised iOS & Android Native Builds',
      'App Store Optimisation (ASO) & Launch Growth Strategy',
      'Backend API Architecture & Real-Time Data Integration',
    ],
    metrics: '50+ Apps Launched with 4.7 Star Average Store Rating',
    tools: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'Expo'],
    category: 'Technology',
    process: [
      { step: '01', title: 'Product Discovery', desc: 'User research, competitor analysis, and feature prioritisation for your MVP roadmap.' },
      { step: '02', title: 'UX & Prototyping', desc: 'Interactive prototype validated with real users before a single line of code is written.' },
      { step: '03', title: 'Agile Development', desc: '2-week sprints with continuous delivery, daily standups, and transparent progress.' },
      { step: '04', title: 'Store Launch & ASO', desc: 'Full App Store and Google Play submission with optimised listings for maximum visibility.' },
    ],
    faqs: [
      { q: 'iOS or Android — which should I build first?', a: 'We recommend cross-platform (React Native or Flutter) to ship to both stores simultaneously at lower cost.' },
      { q: 'How much does an app cost?', a: 'MVPs start from $15,000. Full-featured apps typically range from $30,000-$80,000 depending on scope.' },
      { q: 'Can you take over an existing app?', a: 'Yes — we do code audits, refactors, and feature additions on apps built by other teams.' },
    ],
  },
  {
    id: 'seo-aeo',
    number: '04',
    title: 'SEO & AEO',
    shortDesc: 'Rank higher, answer smarter — dominate both search engines and AI assistants.',
    longDesc: 'Our SEO and Answer Engine Optimisation (AEO) strategy positions your brand at the top of Google search results and inside AI answers from ChatGPT, Perplexity, and Google SGE. We turn your content into a 24/7 lead generation machine.',
    icon: Search,
    accentColor: '#10B981',
    deliverables: [
      'Technical SEO Audit & Core Web Vitals Optimisation',
      'AI-Optimised Content Strategy & Semantic Topic Clusters',
      'Answer Engine Optimisation (AEO) for ChatGPT & Perplexity',
      'Authority Link Building & Digital PR Campaigns',
    ],
    metrics: '+340% Organic Traffic Growth in 6 Months (Average Client)',
    tools: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Surfer SEO', 'Google Search Console'],
    category: 'Marketing',
    process: [
      { step: '01', title: 'Technical Audit', desc: 'Deep crawl of your site to find and fix all technical SEO issues blocking your rankings.' },
      { step: '02', title: 'Keyword & Topical Strategy', desc: 'Build a full semantic keyword map targeting buyer-intent queries in your niche.' },
      { step: '03', title: 'Content & On-Page', desc: 'Create or optimise content that ranks and gets cited by AI engines as an authoritative source.' },
      { step: '04', title: 'Link Building & Reporting', desc: 'White-hat authority links and transparent monthly reporting with real ranking data.' },
    ],
    faqs: [
      { q: 'How long before I see results?', a: 'Most clients see measurable ranking improvements in 60-90 days. Significant traffic growth typically occurs in months 4-6.' },
      { q: 'What is AEO?', a: "Answer Engine Optimisation prepares your content to be cited by AI tools like ChatGPT, Perplexity, and Google's AI Overviews." },
      { q: 'Do you write the content?', a: 'Yes — our team handles all content production, from blog posts to landing pages, optimised for both search and AI.' },
    ],
  },
  {
    id: 'social-media-management',
    number: '05',
    title: 'Social Media Management',
    shortDesc: 'Turn followers into loyal, high-value customers through strategic content.',
    longDesc: 'We turn social media into your most powerful sales channel. Our team creates platform-native content, builds engaged communities, and runs automated DM funnels that convert followers into paying clients — consistently and at scale.',
    icon: Share2,
    accentColor: '#EC4899',
    deliverables: [
      'Multi-Platform Short-Form Video Strategy (Reels, TikTok, Shorts)',
      'Community Engagement & Founder Personal Branding',
      'High-Converting Social Funnels & DM Automation',
      'Viral Trend Content with Data-Driven Distribution',
    ],
    metrics: '3.8M+ Monthly Organic Video Impressions Generated',
    tools: ['Figma', 'CapCut Pro', 'Metricool', 'ManyChat', 'Brand24'],
    category: 'Marketing',
    process: [
      { step: '01', title: 'Brand & Audience Audit', desc: 'We analyse your current presence, audience data, and competitors to build your content strategy.' },
      { step: '02', title: 'Content System', desc: 'Design your brand voice, visual style, content pillars, and a 30-day content calendar.' },
      { step: '03', title: 'Create & Publish', desc: 'Our team produces, edits, captions, and schedules every piece of content at optimal times.' },
      { step: '04', title: 'Engage & Optimise', desc: 'Community management, DM funnels, and weekly analytics reporting to continuously improve performance.' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, TikTok, YouTube Shorts, LinkedIn, Facebook, and X (Twitter). We recommend 2-3 platforms to start.' },
      { q: 'How many posts per week?', a: 'Our packages include 5-14 posts per week depending on the plan. We handle everything including captions and hashtags.' },
      { q: 'Can you grow my personal brand?', a: 'Yes — founder personal branding is one of our specialties. We help CEOs and creators build authority accounts.' },
    ],
  },
  {
    id: 'google-advertising',
    number: '06',
    title: 'Google Advertising',
    shortDesc: 'Target the right searches. Scale with real, measurable ROI.',
    longDesc: 'We manage Google Ads campaigns that target high-intent buyers at exactly the right moment. Our data-driven approach eliminates wasteful spend and continuously optimises for the conversions that matter most to your business growth.',
    icon: BarChart2,
    accentColor: '#4F46E5',
    deliverables: [
      'High-Intent Google Search & Performance Max Campaigns',
      'Smart Bidding Strategy & Waste Spend Elimination',
      'Continuous Creative A/B Testing & Conversion Attribution',
      'Google Shopping, Display & YouTube Ad Integration',
    ],
    metrics: '4.6x Average Verified ROAS Across Client Verticals',
    tools: ['Google Ads', 'Google Analytics 4', 'Search Ads 360', 'Triple Whale'],
    category: 'Advertising',
    process: [
      { step: '01', title: 'Account Audit & Strategy', desc: 'Full audit of your account (or competitor research if starting fresh) to build your campaign blueprint.' },
      { step: '02', title: 'Campaign Setup', desc: 'Keyword research, ad copy writing, landing page alignment, and tracking setup.' },
      { step: '03', title: 'Launch & Optimise', desc: 'Live campaigns with daily bid management, negative keyword pruning, and creative testing.' },
      { step: '04', title: 'Scale & Report', desc: 'Monthly strategy calls, transparent reporting on ROAS, CPA, and revenue attributed to each campaign.' },
    ],
    faqs: [
      { q: 'What is the minimum ad budget?', a: 'We recommend a minimum of $2,000/month ad spend to get statistically meaningful data for optimisation.' },
      { q: 'How quickly will I see results?', a: 'First leads typically come within 24-72 hours of launch. Optimised ROAS is typically achieved by week 4-6.' },
      { q: 'Do you manage shopping campaigns?', a: 'Yes — we manage Search, Shopping, Performance Max, Display, and YouTube campaigns.' },
    ],
  },
  {
    id: 'meta-advertising',
    number: '07',
    title: 'Meta Advertising',
    shortDesc: 'Facebook & Instagram ads that reach, retarget, and reliably convert.',
    longDesc: "We run Meta ad campaigns across Facebook and Instagram that capture cold audiences, retarget warm visitors, and convert lookalike audiences — all with creative that stops the scroll and funnels that close the deal.",
    icon: Target,
    accentColor: '#F59E0B',
    deliverables: [
      'Full-Funnel Meta Campaign Architecture (TOF, MOF, BOF)',
      'Scroll-Stopping Creative Strategy & Ad Copywriting',
      'Pixel Setup, Custom Events & Conversion API Integration',
      'Retargeting Sequences & Lookalike Audience Scaling',
    ],
    metrics: '3.2x Average ROAS on Meta Ad Spend Across Client Brands',
    tools: ['Meta Ads Manager', 'Facebook Pixel', 'Advantage+', 'AdCreative.ai', 'Triple Whale'],
    category: 'Advertising',
    process: [
      { step: '01', title: 'Pixel & Tracking Setup', desc: 'Ensure flawless conversion tracking with Pixel, CAPI, and custom event setup before spending a dollar.' },
      { step: '02', title: 'Creative Production', desc: 'Design scroll-stopping video and static ads tailored to each funnel stage and audience temperature.' },
      { step: '03', title: 'Campaign Launch', desc: 'Structured campaign launch with testing frameworks to quickly identify winning creatives.' },
      { step: '04', title: 'Scale & Retarget', desc: 'Scale winners, suppress losers, and layer retargeting sequences to convert warm audiences.' },
    ],
    faqs: [
      { q: 'Should I run Facebook or Instagram ads?', a: "Both — Meta's algorithm automatically optimises delivery across both platforms for best results." },
      { q: 'What type of creative works best?', a: 'Short-form video (15-30 sec) with strong hooks consistently outperforms static images by 40-60%.' },
      { q: 'How do you handle iOS 14+ tracking?', a: 'We implement the Conversions API (CAPI) alongside the Pixel to recover signal lost after iOS 14.' },
    ],
  },
  {
    id: 'call-email-handling',
    number: '08',
    title: 'Call & Email Handling',
    shortDesc: 'Never miss a lead — AI-powered 24/7 response and follow-up systems.',
    longDesc: 'Every missed call is a missed sale. Our AI-powered call handling and email automation systems ensure every lead is captured, qualified, and nurtured — automatically, around the clock, without adding to your team headcount.',
    icon: PhoneCall,
    accentColor: '#06B6D4',
    deliverables: [
      'AI-Powered 24/7 Missed Call Text-Back System',
      'Automated Email Nurture Sequences & Follow-Up Flows',
      'Lead Qualification Bots & Appointment Booking Automation',
      'Unified Inbox Management & Response Templates',
    ],
    metrics: '92% Response Rate Improvement vs. Manual Follow-Up',
    tools: ['Twilio', 'GoHighLevel', 'ActiveCampaign', 'Make.com', 'Calendly'],
    category: 'Technology',
    process: [
      { step: '01', title: 'System Audit', desc: 'Audit your current lead response process and identify every gap where leads are being lost.' },
      { step: '02', title: 'System Design', desc: 'Map the ideal automated response flow for calls, emails, and SMS with timing and messaging.' },
      { step: '03', title: 'Build & Integrate', desc: 'Connect all systems — phone, email, CRM, and calendar — into a seamless automated pipeline.' },
      { step: '04', title: 'Test & Launch', desc: 'Full QA testing of every trigger and response path, then go live with monitoring in place.' },
    ],
    faqs: [
      { q: 'Can it book appointments automatically?', a: 'Yes — our systems connect to Calendly, Cal.com, or Google Calendar to book meetings without human involvement.' },
      { q: 'What happens if the AI cannot handle a query?', a: 'The system automatically escalates to a human team member and flags the conversation for review.' },
      { q: 'Does it work with my current phone system?', a: 'We integrate with virtually all VoIP and phone systems including RingCentral, Dialpad, and standard carriers via Twilio.' },
    ],
  },
  {
    id: 'image-design',
    number: '09',
    title: 'Image Design',
    shortDesc: 'Brand-consistent visual assets that command attention across every platform.',
    longDesc: 'From social media graphics and ad creatives to presentation decks and brand identity systems, our design team creates visuals that are not just beautiful — they are strategically designed to communicate, convert, and build brand recognition.',
    icon: Image,
    accentColor: '#F97316',
    deliverables: [
      'Social Media Graphics & Platform-Sized Ad Creatives',
      'Brand Identity Systems — Logo, Palette & Typography',
      'Presentation Decks, Pitch Decks & Infographics',
      'Product Mockups, Thumbnails & Digital Assets',
    ],
    metrics: '2.4x Higher CTR on Professionally Designed Ad Creatives',
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva Pro', 'Midjourney'],
    category: 'Design',
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'Deep dive into your brand values, target audience, and visual reference preferences.' },
      { step: '02', title: 'Concept Development', desc: 'Multiple design directions presented for feedback before final direction is selected.' },
      { step: '03', title: 'Design Production', desc: 'Full production of all requested assets in all required formats and sizes.' },
      { step: '04', title: 'Handoff & Revisions', desc: 'Organised asset delivery with 2 rounds of revisions included in every project.' },
    ],
    faqs: [
      { q: 'How many revisions are included?', a: 'All packages include 2 rounds of revisions. Additional rounds can be added at a flat rate.' },
      { q: 'Can you create a complete brand identity?', a: 'Yes — our brand identity packages include logo design, colour system, typography, and brand guidelines document.' },
      { q: 'What file formats do you deliver?', a: 'We deliver all assets in print-ready and digital formats including SVG, PNG, PDF, and any platform-specific sizes.' },
    ],
    realWork: [
      { url: 'https://www.behance.net/embed/project/255802925?ilo0=1' },
      { url: 'https://www.behance.net/embed/project/255092437?ilo0=1' },
      { url: 'https://www.behance.net/embed/project/255090135?ilo0=1' },
      { url: 'https://www.behance.net/embed/project/255087449?ilo0=1' },
      { url: 'https://www.behance.net/embed/project/255085835?ilo0=1' },
    ],
  },
  {
    id: 'video-editing',
    number: '10',
    title: 'Video Editing',
    shortDesc: 'Scroll-stopping video content engineered for engagement and virality.',
    longDesc: 'Our video team transforms raw footage into polished, platform-native content — from short-form social reels and ad spots to long-form YouTube content — built to maximise watch time, drive shares, and convert viewers into customers.',
    icon: Video,
    accentColor: '#7C3AED',
    deliverables: [
      'Short-Form Reels, TikToks & YouTube Shorts Editing',
      'Long-Form YouTube & Podcast Video Production',
      'Ad Video Editing with CTA-Optimised Hooks',
      'Motion Graphics, Captions & Brand Intro/Outros',
    ],
    metrics: '50M+ Views Generated Across Client Video Content',
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Descript'],
    category: 'Content',
    process: [
      { step: '01', title: 'Brief & Raw Footage', desc: 'You share your brief and raw footage (or we source stock if needed). We clarify any questions upfront.' },
      { step: '02', title: 'First Cut', desc: 'We deliver the first edit with cuts, transitions, captions, and music within 48-72 hours.' },
      { step: '03', title: 'Revisions', desc: 'You review and provide feedback. We apply changes quickly and efficiently.' },
      { step: '04', title: 'Final Delivery', desc: 'Final export in all required formats and aspect ratios for every platform.' },
    ],
    faqs: [
      { q: 'How fast is turnaround?', a: 'Short-form content: 24-48 hours. Long-form content: 3-5 business days. Rush options available.' },
      { q: 'Do you add captions and subtitles?', a: "Yes — captions are included in all packages, optimised for each platform's style (TikTok, Reels, YouTube)." },
      { q: 'Can you create content without my footage?', a: 'Yes — we can create fully produced videos using stock footage, motion graphics, and voiceover.' },
    ],
  },
];

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onNavigateHome,
  onNavigateContact,
  onNavigateServices,
  onOpenSearch,
  onOpenGetStarted,
}) => {
  const normalisedId = serviceNameToSlug(serviceId);
  const service =
    servicesData.find(
      (s) =>
        s.id === normalisedId ||
        s.id === (serviceId || '').toLowerCase() ||
        s.title.toLowerCase() === (serviceId || '').toLowerCase()
    ) ?? servicesData[0];
  const Icon = service.icon;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const handleNavigate = (route: string, section?: string) => {
    if (onNavigate) {
      onNavigate(route, section);
      return;
    }
    if (route === 'contact') {
      onNavigateContact?.();
    } else if (route === 'services') {
      onNavigateServices?.();
    } else {
      onNavigateHome?.(section);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header
        onNavigate={(route, section) => handleNavigate(route, section)}
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="services"
      />

      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: `radial-gradient(ellipse at center, ${service.accentColor}33 0%, transparent 70%)` }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-8"
          >
            <button type="button" onClick={() => onNavigateHome?.()} className="hover:text-slate-700 transition-colors cursor-pointer">Home</button>
            <span>/</span>
            <button type="button" onClick={() => onNavigateServices?.()} className="hover:text-slate-700 transition-colors cursor-pointer">Services</button>
            <span>/</span>
            <span className="text-slate-700 font-semibold">{service.title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border text-xs font-bold uppercase tracking-widest shadow-sm mb-6"
                style={{ borderColor: `${service.accentColor}33`, color: service.accentColor }}
              >
                <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }} />
                <span>SERVICE {service.number} • {service.category}</span>
              </motion.div>

              <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0F172A] tracking-tight leading-[1.07] mb-5"
              >
                {service.title}
              </motion.h1>

              <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8"
              >
                {service.longDesc}
              </motion.p>

              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-col sm:flex-row items-start gap-3"
              >
                <button
                  type="button"
                  onClick={() => onOpenGetStarted?.()}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-bold text-sm tracking-wide transition-all cursor-pointer hover:scale-105 active:scale-95"
                  style={{ backgroundColor: service.accentColor, boxShadow: `0 10px 28px ${service.accentColor}40` }}
                >
                  <span>Start with {service.title}</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateServices?.()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold text-sm hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer"
                >
                  <ArrowLeft size={15} />
                  <span>All Services</span>
                </button>
              </motion.div>
            </div>

            {/* Right: Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-15" style={{ backgroundColor: service.accentColor }} />
                <div className="relative w-full h-full rounded-3xl bg-white border border-slate-100 shadow-[0_24px_64px_-12px_rgba(15,23,42,0.08)] flex flex-col items-center justify-center gap-5 p-8">
                  <div className="h-24 w-24 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.accentColor}15`, border: `2px solid ${service.accentColor}30` }}>
                    <Icon size={48} style={{ color: service.accentColor }} strokeWidth={1.8} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: service.accentColor }}>{service.category}</div>
                    <div className="text-2xl font-black text-[#0F172A]">{service.title}</div>
                  </div>
                  <div className="w-full rounded-xl px-4 py-3 text-center"
                    style={{ backgroundColor: `${service.accentColor}0d`, border: `1px solid ${service.accentColor}20` }}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: service.accentColor }}>Verified Result</div>
                    <div className="text-[11px] font-bold text-slate-700">{service.metrics}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Deliverables ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Layers size={12} /><span>What We Deliver</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Everything in Your <span style={{ color: service.accentColor }}>{service.title}</span> Package
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.deliverables.map((del, i) => (
              <motion.div key={del} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
              >
                <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${service.accentColor}15` }}>
                  <CheckCircle2 size={18} style={{ color: service.accentColor }} />
                </div>
                <span className="text-sm text-slate-700 leading-snug font-medium">{del}</span>
              </motion.div>
            ))}
          </div>

          {/* Metric banner */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 rounded-2xl p-6 flex items-center gap-4"
            style={{ backgroundColor: `${service.accentColor}0d`, border: `1px solid ${service.accentColor}25` }}
          >
            <div className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: service.accentColor }}>
              <TrendingUp size={22} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: service.accentColor }}>Verified Performance Benchmark</div>
              <div className="text-base font-bold text-[#0F172A]">{service.metrics}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Work — Behance embeds */}
      {service.realWork && service.realWork.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={12} /><span>Real Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Selected <span style={{ color: service.accentColor }}>{service.title}</span> Projects
              </h2>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto">A glimpse of real projects we have designed — explore the full case studies on Behance.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {service.realWork.map((work, i) => (
                <motion.div key={work.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[404px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
                >
                  <iframe
                    src={work.url}
                    title={`${service.title} project ${i + 1}`}
                    width="404"
                    height="316"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-[316px] block"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Process ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Zap size={12} /><span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              How We Deliver <span style={{ color: service.accentColor }}>Guaranteed Results</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all"
              >
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-[2px] bg-slate-200 z-10" />
                )}
                <div className="text-xs font-black mb-3 inline-block px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}>
                  STEP {step.step}
                </div>
                <h3 className="text-base font-black text-[#0F172A] mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools ──────────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Core Toolstack</div>
              <h2 className="text-2xl font-black text-[#0F172A]">The Platforms We Master</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.tools.map((tool) => (
                <motion.span key={tool} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-300 transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={12} /><span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl bg-white border border-slate-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-sm font-bold text-[#0F172A]">{faq.q}</span>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                        <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-10 sm:p-14 text-white text-center shadow-[0_20px_60px_rgba(15,23,42,0.3)]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-widest mb-5">
              <Sparkles size={12} /><span>Ready to Start?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              Let's Build Your{' '}
              <span style={{ color: service.accentColor }}>{service.title}</span>
              <br />System Together
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Share your goals with us and we will build a tailor-made blueprint specifically for your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenGetStarted?.()}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all cursor-pointer hover:scale-105 active:scale-95 text-white"
                style={{ backgroundColor: service.accentColor, boxShadow: `0 10px 28px ${service.accentColor}50` }}
              >
                <span>Start with {service.title}</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => onNavigateContact?.()}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onGetStartedClick={onOpenGetStarted} onNavigate={(route, section) => handleNavigate(route, section)} />
    </div>
  );
};

export default ServiceDetailPage;
