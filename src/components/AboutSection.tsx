import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  BarChart3,
  Users,
  Lightbulb,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';

interface AboutSectionProps {
  onStartProjectClick?: () => void;
  heroImage?: string;
  experienceYears?: string;
  experienceLabel?: string;
  experienceSubtext?: string;
  calloutLine1?: string;
  calloutLine2?: string;
  calloutLine3?: string;
  calloutLine4?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onStartProjectClick,
  heroImage = '/about/about_office_base.png',
  experienceYears = '7+',
  experienceLabel = 'Years of Experience',
  experienceSubtext = 'Building brands, driving growth',
  calloutLine1 = 'Ideas',
  calloutLine2 = 'today.',
  calloutLine3 = 'Impact',
  calloutLine4 = 'tomorrow.',
}) => {

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#FAFCFF] pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 border-t border-slate-100 select-none"
    >
      {/* ======================================================================= */}
      {/* SVG ClipPath Definition for the Organic Shaped Container                */}
      {/* Any image passed into this container automatically inherits this shape   */}
      {/* ======================================================================= */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="about-organic-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.38 C 0.04,0.22 0.32,0.02 0.68,0.0 C 0.88,-0.01 1.0,0.06 1.0,0.18 L 1.0,0.76 C 1.0,0.88 0.68,0.98 0.34,1.0 C 0.12,1.01 0.0,0.94 0.0,0.84 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* ================================================================= */}
          {/* Left Column: Typography, Stats, CTAs & 4 Core Pillars              */}
          {/* ================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-left"
          >

            {/* Top Badge: — ABOUT CLUSTER CLOUD */}
            <div className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2563EB] mb-3.5">
              <span className="w-5 h-[2px] bg-[#2563EB]" />
              <span>ABOUT CLUSTER CLOUD</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-4">
              More Than a Marketing<br />
              Agency — A Growth<br />
              <span className="text-[#2563EB]">Partner.</span>
            </h2>

            {/* Body Paragraph */}
            <p className="text-slate-600 font-normal text-sm sm:text-[15px] leading-relaxed max-w-xl mb-7">
              Cluster Cloud was founded on a simple belief — that data, creativity and technology can turn ambitious businesses into market leaders. We combine strategy, AI-powered insights, and full-funnel execution to build digital assets that drive real, measurable growth.
            </p>

            {/* Stats Row (3 Columns) */}
            <div className="flex items-center gap-6 sm:gap-8 mb-8 pb-1">
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">99.4%</span>
                <span className="block text-xs font-semibold text-slate-500 mt-1">Client Retention Rate</span>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight">$48M+</span>
                <span className="block text-xs font-semibold text-slate-500 mt-1">Tracked Client Revenue</span>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div>
                <span className="block text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">300+</span>
                <span className="block text-xs font-semibold text-slate-500 mt-1">Projects Delivered</span>
              </div>
            </div>

            {/* CTA Row: Get to Know Us */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-12 sm:mb-14">
              {/* Primary Pill Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartProjectClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-blue-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/35 cursor-pointer"
              >
                <span>Get to Know Us</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </motion.button>
            </div>

            {/* Bottom 4 Core Feature Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              {/* Strategy First */}
              <div>
                <div className="h-12 w-12 rounded-full bg-blue-50/90 text-[#2563EB] flex items-center justify-center mb-3 shadow-2xs">
                  <Target size={20} className="stroke-[2.2]" />
                </div>
                <h4 className="text-xs font-black text-[#0F172A] mb-1 tracking-tight">Strategy First</h4>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">Data-backed, not guesswork.</p>
              </div>

              {/* Measurable Results */}
              <div>
                <div className="h-12 w-12 rounded-full bg-blue-50/90 text-[#2563EB] flex items-center justify-center mb-3 shadow-2xs">
                  <BarChart3 size={20} className="stroke-[2.2]" />
                </div>
                <h4 className="text-xs font-black text-[#0F172A] mb-1 tracking-tight">Measurable Results</h4>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">Growth you can track.</p>
              </div>

              {/* Long-Term Partners */}
              <div>
                <div className="h-12 w-12 rounded-full bg-blue-50/90 text-[#2563EB] flex items-center justify-center mb-3 shadow-2xs">
                  <Users size={20} className="stroke-[2.2]" />
                </div>
                <h4 className="text-xs font-black text-[#0F172A] mb-1 tracking-tight">Long-Term Partners</h4>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">Your success is our success.</p>
              </div>

              {/* Innovation Driven */}
              <div>
                <div className="h-12 w-12 rounded-full bg-blue-50/90 text-[#2563EB] flex items-center justify-center mb-3 shadow-2xs">
                  <Lightbulb size={20} className="stroke-[2.2]" />
                </div>
                <h4 className="text-xs font-black text-[#0F172A] mb-1 tracking-tight">Innovation Driven</h4>
                <p className="text-[11px] text-slate-500 leading-snug font-medium">Smart workflows that scale.</p>
              </div>
            </div>

          </motion.div>

          {/* ================================================================= */}
          {/* Right Column: Visual Showcase Stage with Organic Image Container    */}
          {/* ================================================================= */}
          <div className="relative w-full flex flex-col items-center justify-center">

            {/* Visual Showcase Stage */}
            <div className="relative w-full max-w-[460px] sm:max-w-[490px] h-[460px] sm:h-[510px] flex items-center justify-center">

              {/* 1. Background Circular Orbit Ring & Glowing Blue Dot */}
              <div className="absolute w-[430px] h-[430px] sm:w-[470px] sm:h-[470px] rounded-full border border-blue-200/55 pointer-events-none -z-10">
                {/* Glowing Blue Dot at 1:30 o'clock */}
                <div className="absolute top-[13%] right-[13%] w-3.5 h-3.5 rounded-full bg-[#2563EB] shadow-[0_0_14px_#2563EB] animate-pulse" />
              </div>

              {/* 2. Dedicated Code-Based Handwritten Callout (Real Typography, No Image) */}
              <motion.div
                initial={{ opacity: 0, rotate: -14, scale: 0.92 }}
                whileInView={{ opacity: 1, rotate: -11, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="absolute -top-3 left-1 sm:-left-4 z-30 pointer-events-none select-none text-left font-handwriting -rotate-[11deg]"
              >
                <div className="text-[27px] sm:text-[31px] font-bold text-[#1E293B] leading-[0.98] tracking-tight">
                  <span className="block">{calloutLine1}</span>
                  <span className="block">{calloutLine2}</span>
                  <span className="block">{calloutLine3}</span>
                  <span className="block">{calloutLine4}</span>
                </div>

                {/* Hand-Drawn SVG Underline */}
                <svg
                  viewBox="0 0 74 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 sm:w-20 h-2.5 mt-1 ml-0.5"
                >
                  <path
                    d="M 2 5 C 18 8, 48 2, 72 5"
                    stroke="#2563EB"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* 3. The Organic Shaped Image Mask Container */}
              {/* WHATEVER image is passed to heroImage, it automatically fits into this shape! */}
              <div className="relative w-[300px] sm:w-[330px] h-[420px] sm:h-[465px] z-10">
                <div
                  className="w-full h-full overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
                  style={{
                    clipPath: 'url(#about-organic-mask)',
                    WebkitClipPath: 'url(#about-organic-mask)',
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Cluster Cloud Office"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 select-none"
                  />
                  {/* Subtle lighting overlay for extra depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 4. Separate Floating Blue Card: 7+ Years of Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }}
                className="absolute left-2 sm:-left-4 bottom-6 sm:bottom-8 z-30 w-[150px] sm:w-[170px] rounded-[24px] sm:rounded-[26px] bg-gradient-to-br from-[#2563EB] via-[#1D68F7] to-[#1D4ED8] p-5 sm:p-5.5 text-white shadow-[0_20px_40px_-10px_rgba(37,99,235,0.48)] border border-white/20 select-none text-left cursor-default"
              >
                <span className="block text-4xl sm:text-5xl font-black text-white leading-none tracking-tight mb-1.5">
                  {experienceYears}
                </span>
                <span className="block text-xs font-bold text-white leading-snug mb-3">
                  {experienceLabel}
                </span>
                <div className="w-full h-[1px] bg-white/25 mb-3" />
                <p className="text-[10.5px] sm:text-[11px] font-medium text-blue-100 leading-snug">
                  {experienceSubtext}
                </p>
              </motion.div>

              {/* 5. Separate Floating White Card: Strategic Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{ willChange: 'transform' }}
                className="absolute right-0 sm:-right-6 top-16 sm:top-20 z-30 w-[180px] sm:w-[200px] rounded-[24px] sm:rounded-[26px] bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.14)] border border-slate-100/90 select-none text-left cursor-default"
              >
                {/* Pillar 1: Strategic Thinking */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                    <Target size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      Strategic
                    </span>
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      Thinking
                    </span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 my-3" />

                {/* Pillar 2: AI-Powered Execution */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                    <Cpu size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      AI-Powered
                    </span>
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      Execution
                    </span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 my-3" />

                {/* Pillar 3: Real Business Growth */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                    <ArrowUpRight size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      Real
                    </span>
                    <span className="block text-xs font-extrabold text-[#0F172A] leading-tight">
                      Business Growth
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom-Right Ticker / Slogan: Aligned with the 4 pillars */}
            <div className="w-full max-w-[460px] sm:max-w-[490px] flex items-center justify-end mt-6 sm:mt-8 pr-2 sm:pr-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-slate-200 hidden sm:block" />
                <div className="w-10 h-[2.5px] bg-[#2563EB]" />
                <div className="text-left font-extrabold uppercase tracking-[0.2em] text-slate-400 text-[10.5px] xl:text-[11px] leading-tight select-none">
                  <span>PEOPLE. STRATEGY.</span><br />
                  <span>TECHNOLOGY. GROWTH.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
