import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  ArrowDown,
  X,
  CheckCircle2,
  Sparkles,
  Zap,
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
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudiesData: CaseStudyItem[] = [
  // 01: Apex Solar Technologies (Renewable Energy)
  {
    id: 'apex-solar',
    number: '01',
    client: 'Apex Solar Technologies',
    category: 'RENEWABLE ENERGY',
    desc: 'Complete SEO overhaul & Google Ads campaign generating over $4.2M in verified project revenue.',
    metric: '+340%',
    metricLabel: 'Inbound Pipeline Growth',
    metricIconType: 'arrow-up-right',
    image: '/work/solar_panel_clean.jpg',
    challenge:
      'High cost-per-acquisition on generic search ads, sluggish local search visibility, and poor conversion on technical commercial solar proposals.',
    solution:
      'Rebuilt the digital presence with hyper-targeted commercial solar SEO, automated lead qualification funnels, and high-intent Google Search campaigns.',
    results: [
      '+340% increase in inbound commercial solar project leads',
      '$4.2M verified pipeline revenue generated in 9 months',
      'Top 3 organic rank for 48 commercial solar search queries',
      '42% lower cost per qualified commercial solar procurement lead',
    ],
  },
  // 02: MedVanguard Health (Healthcare SaaS)
  {
    id: 'medvanguard',
    number: '02',
    client: 'MedVanguard Health',
    category: 'HEALTHCARE SAAS',
    desc: 'Precision B2B LinkedIn and search funnel targeting hospital procurement leads with zero wasted ad spend.',
    metric: '4.8x',
    metricLabel: 'Customer Acquisition ROI',
    metricIconType: 'bar-chart',
    image: '/work/health_building_clean.jpg',
    challenge:
      'Long 9-month enterprise sales cycles with hospital procurement officers and high demo drop-off rates across traditional PPC ads.',
    solution:
      'Implemented an Account-Based Marketing (ABM) engine combining personalized LinkedIn video retargeting with gated clinical ROI calculators.',
    results: [
      '4.8x verified customer acquisition ROI across hospital tiers',
      'Shortened sales cycle from 9 months to 3.8 months',
      'Captured 32 enterprise hospital procurement contract agreements',
      'Zero wasted spend with 100% first-party IP-filtered target lists',
    ],
  },
  // 03: UrbanNest Realty (Commercial Real Estate)
  {
    id: 'urbannest',
    number: '03',
    client: 'UrbanNest Realty',
    category: 'COMMERCIAL REAL ESTATE',
    desc: 'Conversion-rate optimized landing pages paired with automated email lead qualification workflows.',
    metric: '82%',
    metricLabel: 'Lower Cost Per Qualified Lead',
    metricIconType: 'arrow-down',
    image: '/work/luxury_condo_clean.jpg',
    challenge:
      'Low lead quality from residential portals and high friction in scheduling private viewings for luxury multi-unit developments.',
    solution:
      'Designed high-speed mobile-first landing pages with 3D virtual walkthroughs and automated SMS qualification bots for pre-cleared buyers.',
    results: [
      '82% reduction in cost per verified high-net-worth investor lead',
      '94% private viewing attendance rate with automated SMS reminders',
      '$18.5M in luxury apartment units sold within 4 months of campaign launch',
      'Sub-second page load speeds across all luxury property listings',
    ],
  },
];

interface WorkSectionProps {
  onStartProjectClick?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onStartProjectClick }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);

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
              <span>OUR WORK</span>
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
              onClick={() => setSelectedStudy(caseStudiesData[0])}
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
                      onClick={() => setSelectedStudy(study)}
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
                    onClick={() => setSelectedStudy(study)}
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
                <button
                  type="button"
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors mt-5 self-start group cursor-pointer select-none"
                >
                  <span>View Case Study</span>
                  <div className="h-7 w-7 rounded-full border border-slate-300 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight size={13} className="stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 3. Interactive Case Study Detail Modal                                  */}
      {/* ======================================================================= */}
      <AnimatePresence>
        {selectedStudy && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden text-left"
            >
              {/* Header Image */}
              <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden bg-slate-900">
                <img
                  src={selectedStudy.image}
                  alt={selectedStudy.client}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedStudy(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Title & Badge */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-blue-200 mb-1">
                    {selectedStudy.category} • CASE STUDY {selectedStudy.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedStudy.client}
                  </h3>
                </div>
              </div>

              {/* Verified Metric Banner */}
              <div className="rounded-2xl bg-blue-50/80 border border-blue-100 p-4 mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-sm">
                  {renderMetricIcon(selectedStudy.metricIconType)}
                </div>
                <div>
                  <span className="text-2xl font-black text-[#2563EB] leading-none block">
                    {selectedStudy.metric}
                  </span>
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    {selectedStudy.metricLabel}
                  </span>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Zap size={14} className="text-amber-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {selectedStudy.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#2563EB]" />
                    Our Solution
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              {/* Verified Results */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Campaign Outcomes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedStudy.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedStudy(null);
                    onStartProjectClick?.();
                  }}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all text-center cursor-pointer"
                >
                  Scale Results Like {selectedStudy.client} →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedStudy(null)}
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
