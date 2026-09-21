import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  ArrowDown,
} from 'lucide-react';

export interface CaseStudyItem {
  id: string;
  number: string;
  client: string;
  category: string;
  desc: string;
  metric: string;
  metricLabel: string;
  metricIconType: 'arrow-up-right' | 'bar-chart' | 'arrow-down';
  image: string;
  link?: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  // 01: Window Cleaning Business (Local Services) — Hello to Marketing case study
  {
    id: 'window-cleaning-google-ads-7-percent-ctr',
    number: '01',
    client: 'Window Cleaning Business',
    category: 'LOCAL SERVICES',
    desc: 'A targeted Google Search campaign for a UK window cleaning business delivering a 7.07% click-through rate and a 2.87% conversion rate.',
    metric: '7.07%',
    metricLabel: 'Click-Through Rate',
    metricIconType: 'arrow-up-right',
    image: '/work/window_cleaning.jpg',
    link: 'https://hellotomarketing.com/case-studies/window-cleaning-google-ads-7-percent-ctr',
    challenge:
      'A UK window cleaning business needed a predictable flow of qualified local leads without wasting budget on broad, low-intent search terms.',
    solution:
      'Built a tightly targeted Google Search campaign with local-intent keywords, negative keyword sculpting and conversion-focused ad copy.',
    results: [
      '7.07% click-through rate on Google Search',
      '2.87% conversion rate on qualified local searches',
      '85.6% Google Ads optimisation score',
      'Scalable cost per qualified lead for the client',
    ],
  },
  // 02: Jewelry E-Commerce Store (E-Commerce) — Hello to Marketing case study
  {
    id: 'jewelry-ecommerce-google-shopping-32k-revenue',
    number: '02',
    client: 'Jewelry E-Commerce Store',
    category: 'E-COMMERCE',
    desc: 'Turned a jewelry Google Shopping campaign into a consistent revenue engine — €32,131 in tracked sales at 1.90x ROAS.',
    metric: '€32K+',
    metricLabel: 'Tracked Revenue',
    metricIconType: 'bar-chart',
    image: '/work/jewelry_shopping.jpg',
    link: 'https://hellotomarketing.com/case-studies/jewelry-ecommerce-google-shopping-32k-revenue',
    challenge:
      'A jewelry e-commerce brand needed its Google Shopping spend to convert into reliable, measurable revenue instead of scattered sales.',
    solution:
      'Optimised the Shopping feed and campaign structure with Target ROAS bidding, product segmentation and ongoing negative keyword management.',
    results: [
      '€32,131 in tracked sales from Google Shopping',
      '1.90x ROAS sustained across the campaign',
      '609 conversions at €27.73 each',
      'Shopping campaign running eligible with a healthy optimisation score',
    ],
  },
  // 03: Dutch SaaS Brand (B2B SaaS) — Hello to Marketing case study
  {
    id: 'saas-google-ads-286-conversions',
    number: '03',
    client: 'Dutch SaaS Brand',
    category: 'B2B SAAS',
    desc: 'Turned a niche B2B SaaS offer into a steady lead engine — 286 qualified conversions at just €7.18 each.',
    metric: '286',
    metricLabel: 'Conversions at €7.18 CPA',
    metricIconType: 'arrow-down',
    image: '/work/saas_ads.jpg',
    link: 'https://hellotomarketing.com/case-studies/saas-google-ads-286-conversions',
    challenge:
      'A Dutch rental and reservation SaaS brand needed qualified demo and trial conversions without an inflated cost per acquisition.',
    solution:
      'Built Search and Performance Max campaigns around high-intent keywords, with conversion tracking and bidding focused on qualified sign-ups.',
    results: [
      '286 qualified conversions at €7.18 cost per conversion',
      '2.09K clicks driving the conversion engine',
      'Search + Performance Max campaign structure',
      'Lower-funnel focus to protect budget efficiency',
    ],
  },
];

interface WorkSectionProps {
  onStartProjectClick?: () => void;
  onViewAllProjects?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onViewAllProjects }) => {

  const renderMetricIcon = (type: 'arrow-up-right' | 'bar-chart' | 'arrow-down') => {
    switch (type) {
      case 'arrow-up-right':
        return <ArrowUpRight size={18} className="stroke-[2.8]" />;
      case 'bar-chart':
        return <BarChart2 size={18} className="stroke-[2.8]" />;
      case 'arrow-down':
        return <ArrowDown size={18} className="stroke-[2.8]" />;
    }
  };

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#FAFCFF] pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 select-none"
    >
      {/* ======================================================================= */}
      {/* 1. Header Area                                                          */}
      {/* ======================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16"
      >

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 relative">

          {/* Left: Badge, Headline & Quote Bar */}
          <div className="max-w-2xl text-left">
            {/* Pill Badge: — OUR WORK */}
            <div className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2563EB] mb-3">
              <span className="w-5 h-[2px] bg-[#2563EB]" />
              <span>OUR PORTFOLIO</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-3.5">
              Real Impact for<br />
              <span className="text-[#2563EB]">
                Ambitious Businesses
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-500 font-medium text-sm sm:text-base mb-5">
              Different industries. Real challenges. Measurable results.
            </p>

            {/* Vertical Left Border Box */}
            <div className="border-l-2 border-slate-300 pl-4 py-0.5 text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-md font-normal">
              We combine strategy, creativity and data to help businesses grow, generate leads and achieve long-term success.
            </div>
          </div>

          {/* Right: Explore Button */}
          <div className="flex items-center lg:self-end pt-2 lg:pt-0">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onViewAllProjects?.()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 text-slate-800 font-bold text-xs tracking-wide transition-shadow cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight size={13} className="stroke-[2.5]" />
            </motion.button>
          </div>

        </div>

      </motion.div>

      {/* ======================================================================= */}
      {/* 2. Three Asymmetric Case Study Columns                                  */}
      {/* ======================================================================= */}
      {/* SVG Clip Path Definition for Organic Continuous Pebble Silhouette */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <clipPath id="workOrganicClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.3308 0.0000 C 0.6154 0.0000, 0.8718 0.0000, 0.9282 0.0000 C 0.9692 0.0000, 0.9974 0.0221, 0.9974 0.0588 L 0.9974 0.8529 C 0.9974 0.9412, 0.9231 0.9985, 0.8205 0.9985 L 0.1538 0.9985 C 0.0513 0.9985, 0.0000 0.9559, 0.0000 0.8824 L 0.0000 0.3971 C 0.0000 0.2206, 0.1282 0.0588, 0.3308 0.0000 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-start">
          {caseStudiesData.map((study, idx) => {
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col justify-between group select-none"
              >
                {/* Visual Card Container: Two distinct columns so text never touches or overlaps the photo */}
                <div className="relative w-full h-[380px] sm:h-[410px] xl:h-[430px] flex items-stretch justify-between">

                  {/* Left-aligned Text Information */}
                  <div className="relative z-10 w-[46%] lg:w-[45%] xl:w-[46%] pt-1 pr-2 text-left flex flex-col justify-start">
                    {/* Number Badge */}
                    <span className="block text-3xl sm:text-4xl font-extrabold text-slate-300 tracking-tight mb-1 select-none">
                      {study.number}
                    </span>

                    {/* Category */}
                    <span className="block text-[10px] xl:text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2.5">
                      {study.category}
                    </span>

                    {/* Client Title */}
                    <h3
                      onClick={() => onViewAllProjects?.()}
                      className="text-lg sm:text-[20px] xl:text-[22px] font-black text-[#0F172A] tracking-tight leading-[1.18] mb-2.5 hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                      {study.client}
                    </h3>

                    {/* Description - Constrained to left column so it never spills into photo */}
                    <p className="text-slate-500 text-xs xl:text-[12px] leading-relaxed break-words font-normal">
                      {study.desc}
                    </p>
                  </div>

                  {/* Right Organic Pebble Photo Container */}
                  <div className="relative w-[53%] lg:w-[54%] xl:w-[53%] h-full flex items-center justify-end">

                    {/* Outer Drop Shadow Wrapper */}
                    <div className="relative w-full h-full filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover:scale-[1.015]">

                      {/* Clipped Container: Any rectangular photo automatically takes this organic silhouette */}
                      <div
                        className="relative w-full h-full overflow-hidden bg-slate-100"
                        style={{ clipPath: 'url(#workOrganicClip)' }}
                      >
                        <img
                          src={study.image}
                          alt={study.client}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover select-none"
                        />

                        {/* Subtle, soft micro-feather at the very edge (Keeps photos 100% natural, clear & crisp) */}
                        <div
                          className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-10"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
                          }}
                        />
                      </div>

                      {/* Handwritten text overlay for Card 1 (Apex Solar) */}
                      {study.id === 'apex-solar' && (
                        <div className="absolute top-4 right-4 z-20 pointer-events-none text-right">
                          <span
                            className="block text-white text-[15px] sm:text-base font-bold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] select-none"
                            style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                          >
                            Clean<br />Energy<br />Brighter<br />Future
                          </span>
                          <div className="w-8 h-[2px] bg-white/90 ml-auto mt-1 rounded-full drop-shadow-sm" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Metric Pill: Perfectly nested over bottom-left notch */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onViewAllProjects?.()}
                    className="absolute left-0 bottom-3 sm:bottom-4 z-20 bg-white rounded-2xl py-3 px-4 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.14)] border border-slate-100/90 flex items-center gap-3 cursor-pointer hover:shadow-[0_16px_36px_-6px_rgba(37,99,235,0.22)] transition-shadow duration-300"
                  >
                    {/* Circle Icon Badge */}
                    <div className="h-9 w-9 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                      {renderMetricIcon(study.metricIconType)}
                    </div>
                    {/* Metric & Label */}
                    <div className="text-left">
                      <span className="block text-2xl xl:text-[25px] font-black text-[#2563EB] leading-none tracking-tight">
                        {study.metric}
                      </span>
                      <span className="block text-[11px] font-semibold text-slate-700 mt-1 leading-tight whitespace-nowrap">
                        {study.metricLabel}
                      </span>
                    </div>
                  </motion.div>

                </div>

                {/* Below Card: View Case Study with Circle Arrow */}
                {study.link ? (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors mt-5 self-start group cursor-pointer select-none"
                  >
                    <span>View Case Study</span>
                    <div className="h-7 w-7 rounded-full border border-slate-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowRight size={13} className="stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onViewAllProjects?.()}
                    className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors mt-5 self-start group cursor-pointer select-none"
                  >
                    <span>View Case Study</span>
                    <div className="h-7 w-7 rounded-full border border-slate-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-200">
                      <ArrowRight size={13} className="stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>


    </section>
  );
};
