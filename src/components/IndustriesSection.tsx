import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  Building2,
  ShoppingBag,
  HeartPulse,
  Laptop,
  Hammer,
  Briefcase,
  UtensilsCrossed,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  cardLines: string[];
  image: string;
  icon: LucideIcon;
  deliverables: string[];
  metrics: string;
  tagline: string;
}

const industriesData: IndustryItem[] = [
  // 01: Real Estate
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate',
    subtitle: 'Properties to People. Faster.',
    cardLines: ['PROPERTIES', 'TO PEOPLE'],
    image: '/industries/real-estate.jpg',
    icon: Building2,
    deliverables: [
      'Hyper-Local SEO & Geo-Targeted High-Intent Search Ads',
      'Virtual Tour, Drone Showcase & High-Converting Landing Pages',
      'Luxury Buyer & Institutional Investor Lead Generation',
      'CRM Pipeline Integration & Instant Lead Follow-up Automation',
    ],
    metrics: '3.4x Faster Time-to-Close on Premium Portfolio Listings',
    tagline: 'Connect luxury developments and residential listings with qualified buyers.',
  },
  // 02: E-Commerce
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce',
    subtitle: 'Turn Clicks Into Customers.',
    cardLines: ['GOOD', 'PRODUCTS', 'BETTER', 'PEOPLE'],
    image: '/industries/ecommerce.jpg',
    icon: ShoppingBag,
    deliverables: [
      'Omnichannel Meta, TikTok & Performance Max Scaling',
      'Retention Klaviyo Email & SMS Lifecycle Automations',
      'Conversion Rate Optimization (CRO) & AOV Funnels',
      'First-Party Attribution Modeling & Profit-First Scaling',
    ],
    metrics: '+42% Average Uplift in 90-Day Repeat Customer Value',
    tagline: 'Scale DTC and consumer product brands with profit-first acquisition engines.',
  },
  // 03: Healthcare
  {
    id: 'healthcare',
    number: '03',
    title: 'Healthcare',
    subtitle: 'Healthier People. Stronger Communities.',
    cardLines: ['BETTER', 'CARE', 'BRIGHTER', 'LIVES'],
    image: '/industries/healthcare.jpg',
    icon: HeartPulse,
    deliverables: [
      'HIPAA-Compliant Patient Acquisition & Booking Funnels',
      'Local Medical SEO & Google Maps Top-3 Pack Dominance',
      'Physician Reputation Management & 5-Star Patient Reviews',
      'Telehealth & Automated Online Consultation Scheduling',
    ],
    metrics: '+180% Increase in Monthly Verified Patient Bookings',
    tagline: 'Build trust, medical authority, and frictionless appointment bookings.',
  },
  // 04: SaaS & Technology
  {
    id: 'saas-tech',
    number: '04',
    title: 'SaaS & Technology',
    subtitle: 'Innovations That Scale.',
    cardLines: ['IDEAS', 'PRODUCTS', 'PEOPLE', 'PROGRESS'],
    image: '/industries/saas-tech-hero.png',
    icon: Laptop,
    deliverables: [
      'High-Intent Product-Led Growth (PLG) User Acquisition',
      'Precision B2B LinkedIn ABM & Google Search Intent Funnels',
      'Free Trial & Interactive Demo-to-Paid Conversion Tuning',
      'Enterprise Pipeline Nurturing & Sales Cycle Acceleration',
    ],
    metrics: '$12M+ ARR Scaled for Cloud & AI Software Startups',
    tagline: 'Engineer predictable pipeline engines for high-growth software platforms.',
  },
  // 05: Construction
  {
    id: 'construction',
    number: '05',
    title: 'Construction',
    subtitle: 'Build Visibility. Win More Projects.',
    cardLines: ['SOLID', 'FOUNDATIONS', 'BRIGHTER', 'FUTURES'],
    image: '/industries/construction.jpg',
    icon: Hammer,
    deliverables: [
      'Commercial RFP & General Contractor Tender Marketing',
      'Geo-Targeted Search Ads for Multi-Million Dollar Projects',
      'Architectural Portfolio Showcase & Case Study Videos',
      'Subcontractor & Commercial Client Relationship Funnels',
    ],
    metrics: '$28M+ in Won Commercial Construction & Build Bids',
    tagline: 'Win lucrative commercial and residential building tenders consistently.',
  },
  // 06: Professional Services
  {
    id: 'professional-services',
    number: '06',
    title: 'Professional Services',
    subtitle: 'Expertise That Grows.',
    cardLines: ['PEOPLE', 'STRATEGY', 'RESULTS'],
    image: '/industries/professional-services.jpg',
    icon: Briefcase,
    deliverables: [
      'Executive Thought Leadership & High-Authority Branding',
      'High-Ticket Corporate Retainer Client Acquisition',
      'Legal, Accounting & Advisory Search Engine Strategy',
      'Automated Lead Qualification & High-Value Consultation Booking',
    ],
    metrics: '5.2x ROAS on Targeted Corporate Client Acquisition',
    tagline: 'Position legal, consulting, and advisory firms as undisputed category leaders.',
  },
  // 07: Hospitality
  {
    id: 'hospitality',
    number: '07',
    title: 'Hospitality',
    subtitle: 'Memorable Experiences. Lasting Loyalty.',
    cardLines: ['EXPERIENCES', 'THAT', 'CONNECT'],
    image: '/industries/hospitality.jpg',
    icon: UtensilsCrossed,
    deliverables: [
      'Direct Booking Engine & Zero-Commission OTA Funnels',
      'High-Engagement Social Media & Food/Travel Video Scaling',
      'Private Dining, VIP Event & Seasonal Reservation Campaigns',
      'Guest Loyalty Automations & Repeat Stay Guestbooks',
    ],
    metrics: '+65% Increase in Direct High-Margin Guest Bookings',
    tagline: 'Fill luxury restaurants, boutique hotels, and resorts with loyal high-value guests.',
  },
];

interface IndustriesSectionProps {
  onStartProjectClick?: () => void;
}

// 7 Fixed 3D Slot Configurations (Amphitheater Perspective)
// Slot 3 is ALWAYS the Center Hero (facing front, 0deg tilt, taller)
const slotConfigs = [
  { slot: 0, rotateY: 48, scale: 0.96, zIndex: 10, isHero: false, opacity: 0.72 },
  { slot: 1, rotateY: 36, scale: 0.98, zIndex: 15, isHero: false, opacity: 0.82 },
  { slot: 2, rotateY: 22, scale: 0.99, zIndex: 20, isHero: false, opacity: 0.92 },
  { slot: 3, rotateY: 0, scale: 1.06, zIndex: 30, isHero: true, opacity: 1.00 }, // CENTER HERO
  { slot: 4, rotateY: -22, scale: 0.99, zIndex: 20, isHero: false, opacity: 0.92 },
  { slot: 5, rotateY: -36, scale: 0.98, zIndex: 15, isHero: false, opacity: 0.82 },
  { slot: 6, rotateY: -48, scale: 0.96, zIndex: 10, isHero: false, opacity: 0.72 },
];

// Smooth spring used for all card 3D position transitions
const cardSpring = {
  type: 'spring' as const,
  stiffness: 180,
  damping: 28,
  mass: 1.0,
};

// Inner-card content crossfade — pure opacity, no spatial movement (prevents flicker)
const contentFade = {
  duration: 0.55,
  ease: 'easeInOut' as const,
};

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onStartProjectClick,
}) => {
  const [centerIndex, setCenterIndex] = useState<number>(3);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  // Prevent click spam stacking — ignore clicks while a transition is in flight
  const isAnimating = useRef(false);
  const lockDuration = 700; // ms — matches slower spring settle time

  const navigate = useCallback((dir: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCenterIndex((prev) => (prev + dir + industriesData.length) % industriesData.length);
    setTimeout(() => { isAnimating.current = false; }, lockDuration);
  }, []);

  const handleNext = useCallback(() => navigate(1), [navigate]);
  const handlePrev = useCallback(() => navigate(-1), [navigate]);

  const handleSlotClick = useCallback((slotIndex: number, item: IndustryItem) => {
    if (slotIndex === 3) {
      setSelectedIndustry(item);
    } else {
      const shift = slotIndex - 3;
      navigate(shift > 0 ? 1 : -1);
    }
  }, [navigate]);

  return (
    <section
      id="industries"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FBFDFF] to-[#F1F6FE]/30 pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 select-none"
    >
      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-blue-100/25 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* ======================================================================= */}
      {/* 1. Header Area                                                          */}
      {/* ======================================================================= */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center mb-10 sm:mb-14">

        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#BFDBFE]/60 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1D68F7] mb-4 shadow-2xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#1D68F7]" />
          <span>INDUSTRIES WE SERVE</span>
        </motion.div>

        {/* Large Bold Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.12] mb-4 max-w-4xl mx-auto"
        >
          Different Industries.<br />
          Same{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D68F7] via-[#0070F3] to-[#00A3FF]">
            Growth Mindset.
          </span>
        </motion.h2>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-slate-500 text-sm sm:text-base lg:text-[16px] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          From local businesses to global brands, we understand the unique challenges
          of every industry and create tailored digital growth strategies that deliver real results.
        </motion.p>
      </div>

      {/* ======================================================================= */}
      {/* 2. Side Gutter Micro Details (Desktop)                                   */}
      {/* ======================================================================= */}
      {/* Left side vertical typography: STRATEGY / CREATIVE / TECHNOLOGY / GROWTH */}
      <div className="hidden 2xl:block absolute left-8 xl:left-12 top-[46%] -translate-y-1/2 z-10 pointer-events-none select-none">
        <div className="space-y-1 text-left">
          <p className="text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-400/80">STRATEGY</p>
          <p className="text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-400/80">CREATIVE</p>
          <p className="text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-400/80">TECHNOLOGY</p>
          <p className="text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-400/80">GROWTH</p>
        </div>
      </div>

      {/* Right side handwriting callout: "Industries today. A brighter tomorrow." with curved arrow */}
      <div className="hidden lg:block absolute right-6 xl:right-12 top-[24%] z-10 pointer-events-none select-none">
        <div className="relative font-handwriting text-2xl xl:text-3xl text-slate-800 leading-[1.08] font-semibold text-right">
          <span>Industries</span><br />
          <span>today.</span><br />
          <span>A brighter</span><br />
          <span>tomorrow.</span>
          <div className="flex justify-end mt-1 pr-4 text-slate-700">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path
                d="M 6 4 C 18 4 24 12 24 24 M 17 19 L 24 26 L 29 19"
                stroke="#334155"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 3. True 3D Amphitheater Stage with Outside Arrows                        */}
      {/* ======================================================================= */}
      {/* Outer wrapper: Full width with spacious gutters so arrows sit OUTSIDE the cards */}
      <div className="relative w-full max-w-[1520px] 2xl:max-w-[1580px] mx-auto px-4 sm:px-8 xl:px-14 my-4">

        {/* Navigation Button: Previous (Left) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 xl:left-5 2xl:left-6 top-[40%] -translate-y-1/2 z-40 h-12 w-12 xl:h-13 xl:w-13 rounded-full bg-white border border-slate-200 shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center justify-center text-slate-700 hover:text-[#1D68F7] hover:border-blue-200 transition-colors duration-200 cursor-pointer select-none"
          aria-label="Previous industry"
        >
          <ArrowLeft size={19} className="stroke-[2.5]" />
        </motion.button>

        {/* Navigation Button: Next (Right) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="absolute right-2 sm:right-4 xl:right-5 2xl:right-6 top-[40%] -translate-y-1/2 z-40 h-12 w-12 xl:h-13 xl:w-13 rounded-full bg-white border border-slate-200 shadow-[0_6px_20px_rgba(15,23,42,0.08)] flex items-center justify-center text-slate-700 hover:text-[#1D68F7] hover:border-blue-200 transition-colors duration-200 cursor-pointer select-none"
          aria-label="Next industry"
        >
          <ArrowRight size={19} className="stroke-[2.5]" />
        </motion.button>

        {/* ------------------------------------------------------------------- */}
        {/* DESKTOP 3D AMPHITHEATER ROW — Smooth spring-animated card positions  */}
        {/* ------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-end justify-center gap-3 xl:gap-4 2xl:gap-5 w-full max-w-[1240px] 2xl:max-w-[1300px] mx-auto pt-4 pb-2"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          {slotConfigs.map(({ slot, rotateY, scale, zIndex, isHero, opacity }) => {
            // Which industry item occupies this fixed slot position?
            const itemIndex = (centerIndex - 3 + slot + industriesData.length) % industriesData.length;
            const item = industriesData[itemIndex];

            return (
              <motion.div
                key={slot}
                onClick={() => handleSlotClick(slot, item)}
                className="group flex flex-col items-center cursor-pointer select-none"
                style={{ zIndex }}
                animate={{
                  // Smoothly animate the card's 3D tilt + scale + depth fade on every index change
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={cardSpring}
              >
                {/* Sized card shell — hero is taller & wider */}
                <motion.div
                  animate={{
                    boxShadow: isHero
                      ? '0 24px 50px -10px rgba(29,104,247,0.28)'
                      : '0 16px 36px -10px rgba(15,23,42,0.18)',
                  }}
                  transition={cardSpring}
                  className={`relative rounded-[22px] xl:rounded-[26px] overflow-hidden border border-white/90 ${isHero
                      ? 'w-[165px] xl:w-[195px] 2xl:w-[210px] h-[310px] xl:h-[350px] 2xl:h-[375px] ring-2 ring-[#1D68F7]/50'
                      : 'w-[130px] sm:w-[140px] xl:w-[155px] 2xl:w-[168px] h-[265px] sm:h-[285px] xl:h-[310px] 2xl:h-[330px]'
                    }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Pure opacity crossfade — no scale/translate to prevent flicker in overflow:hidden */}
                  <div className="relative w-full h-full">
                    <AnimatePresence mode="sync" initial={false}>
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={contentFade}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover select-none"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40 pointer-events-none" />
                        {item.id !== 'saas-tech' && (
                          <div className="absolute top-5 left-4 right-4 text-left text-white select-none pointer-events-none">
                            <div className="font-extrabold text-[12px] xl:text-[13px] uppercase tracking-[0.14em] leading-[1.25] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                              {item.cardLines.map((line, lIdx) => (
                                <span key={lIdx} className="block">{line}</span>
                              ))}
                            </div>
                            <div className="mt-1.5 text-white/80 font-bold text-xs tracking-widest">—</div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Specular rim highlight */}
                  <div className="absolute inset-0 rounded-[22px] xl:rounded-[26px] border border-white/40 pointer-events-none" />
                </motion.div>

                {/* Ground shadow — hero has blue tint */}
                <motion.div
                  animate={{ width: isHero ? '85%' : '75%', opacity: isHero ? 0.22 : 0.15 }}
                  transition={cardSpring}
                  className="h-2.5 bg-slate-900 blur-[4px] rounded-full mt-3 pointer-events-none"
                />

                {/* Under-card metadata — smooth opacity fade, no y-movement */}
                <div className="mt-3 text-center select-none w-[130px] sm:w-[140px] xl:w-[160px] 2xl:w-[175px] min-h-[64px] relative">
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut' }}
                      className="absolute inset-0 flex flex-col items-center justify-start pt-0"
                    >
                      <div className="mb-0.5">
                        <span className={`inline-block text-xs font-black tracking-wider ${isHero ? 'text-[#1D68F7]' : 'text-slate-400 group-hover:text-slate-600'
                          }`}>
                          {item.number}
                        </span>
                      </div>
                      <h4 className={`text-sm xl:text-[15px] font-black tracking-tight leading-snug mb-0.5 ${isHero ? 'text-[#0F172A]' : 'text-slate-800 group-hover:text-[#1D68F7]'
                        }`}>
                        {item.title}
                      </h4>
                      <p className="text-[10.5px] xl:text-[11px] text-slate-500 font-medium leading-relaxed">
                        {item.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ------------------------------------------------------------------- */}
        {/* MOBILE / TABLET COVERFLOW SWIPER                                     */}
        {/* ------------------------------------------------------------------- */}
        <div className="lg:hidden w-full flex flex-col items-center">
          <div className="relative w-full max-w-sm flex items-center justify-center min-h-[380px]">
            <AnimatePresence mode="wait">
              {(() => {
                const current = industriesData[centerIndex];
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    onClick={() => setSelectedIndustry(current)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    {/* Card */}
                    <div className="relative w-[210px] sm:w-[230px] h-[330px] sm:h-[360px] rounded-[28px] overflow-hidden border border-white/80 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.22)]">
                      <img
                        src={current.image}
                        alt={current.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40 pointer-events-none" />
                      {current.id !== 'saas-tech' && (
                        <div className="absolute top-6 left-6 right-6 text-left text-white select-none">
                          <div className="font-extrabold text-[14px] uppercase tracking-[0.14em] leading-[1.25] text-white">
                            {current.cardLines.map((line, lIdx) => (
                              <span key={lIdx} className="block">{line}</span>
                            ))}
                          </div>
                          <div className="mt-2 text-white/80 font-bold text-xs tracking-widest">—</div>
                        </div>
                      )}
                    </div>

                    {/* Contact shadow */}
                    <div className="w-3/4 h-3 bg-slate-900/15 blur-sm rounded-full mt-3 pointer-events-none" />

                    {/* Metadata */}
                    <div className="mt-4 text-center select-none max-w-[240px]">
                      <span className="inline-block text-xs font-black text-[#1D68F7] tracking-wider mb-0.5">
                        {current.number}
                      </span>
                      <h4 className="text-base font-black text-[#0F172A] tracking-tight mb-0.5">
                        {current.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {current.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Dots Indicator on Mobile */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {industriesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => navigate(idx > centerIndex ? 1 : -1)}
                className={`h-2 rounded-full transition-all cursor-pointer ${idx === centerIndex
                    ? 'w-6 bg-[#1D68F7]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to industry ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ======================================================================= */}
      {/* 4. Bottom Area: Left Gutter, Center CTAs, Right Gutter                   */}
      {/* ======================================================================= */}
      <div className="w-full max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 mt-14 sm:mt-18">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left Gutter: INDUSTRIES THAT MOVE THE WORLD + Divider Line */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            <div className="text-left select-none shrink-0">
              <span className="block text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 leading-tight">
                INDUSTRIES<br />
                THAT MOVE<br />
                THE WORLD
              </span>
            </div>
            <div className="h-[1px] bg-slate-200/90 flex-1 max-w-[220px]" />
          </div>

          {/* Center Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            {/* Primary Action Button: Explore All Industries */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (onStartProjectClick) {
                  onStartProjectClick();
                } else {
                  setSelectedIndustry(industriesData[centerIndex]);
                }
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D68F7] hover:bg-[#185ADB] text-white font-bold text-sm tracking-wide shadow-[0_10px_24px_rgba(29,104,247,0.35)] transition-all cursor-pointer select-none"
            >
              <span>Explore All Industries</span>
              <ArrowRight size={16} className="stroke-[2.5]" />
            </motion.button>

          </div>

          {/* Right Gutter: Divider Line + DIFFERENT BUSINESSES. A BRIGHTER TOMORROW. */}
          <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
            <div className="h-[1px] bg-slate-200/90 flex-1 max-w-[220px]" />
            <div className="text-right select-none shrink-0">
              <span className="block text-[10px] xl:text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 leading-tight">
                DIFFERENT BUSINESSES.<br />
                A BRIGHTER TOMORROW.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================================= */}
      {/* 5. Interactive Industry Detail Modal                                    */}
      {/* ======================================================================= */}
      <AnimatePresence>
        {selectedIndustry && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden text-left"
            >
              {/* Top Banner Image with Gradient */}
              <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Title & Badge */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-blue-200 mb-1">
                    VERTICAL {selectedIndustry.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedIndustry.title}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {selectedIndustry.tagline}
              </p>

              {/* Projected Growth Metric Banner */}
              <div className="rounded-2xl bg-blue-50/80 border border-blue-100 p-4 mb-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#1D68F7] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wide block">
                    Verified Industry Growth Benchmark
                  </span>
                  <span className="text-xs sm:text-sm font-black text-blue-700">
                    {selectedIndustry.metrics}
                  </span>
                </div>
              </div>

              {/* Specialized Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Tailored Strategic Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedIndustry(null);
                    onStartProjectClick?.();
                  }}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#1D68F7] hover:bg-[#185ADB] text-white font-bold text-sm shadow-md transition-all text-center cursor-pointer"
                >
                  Scale Your {selectedIndustry.title} Business →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors text-center cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
