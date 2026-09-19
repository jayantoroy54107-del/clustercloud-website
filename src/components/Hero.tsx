import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, Users, Rocket, BarChart3, X } from 'lucide-react';

export interface HeroProps {
  onStartProjectClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProjectClick }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FFFFFF] to-[#F1F5F9]/50 pt-6 sm:pt-10 pb-6 sm:pb-8 lg:pb-10">
      
      {/* ========================================================================= */}
      {/* 1. Background Atmosphere & Ambient Radiant Lighting                       */}
      {/* ========================================================================= */}
      {/* Center top ethereal radial glow (optimized from blur-3xl to blur-2xl) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />
      {/* Left side ambient glow */}
      <div className="absolute top-36 left-[5%] w-[420px] h-[420px] bg-blue-200/30 rounded-full blur-2xl pointer-events-none -z-10" />
      {/* Right side ambient glow */}
      <div className="absolute top-28 right-[5%] w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle Dotted Matrix Texture on Right */}
      <div
        className="absolute top-20 right-8 w-64 h-64 opacity-25 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Subtle Dotted Matrix Texture on Bottom Left */}
      <div
        className="absolute bottom-28 left-8 w-60 h-60 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20">
        
        {/* ========================================================================= */}
        {/* 2. Top Badge with Hand-Drawn Arrow                                        */}
        {/* ========================================================================= */}
        <div className="relative flex justify-center items-center mb-6 pt-2">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-[#2563EB] text-[11px] font-bold uppercase tracking-[0.18em] shadow-xs select-none"
          >
            <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span>AI-POWERED GROWTH STUDIO</span>
          </motion.div>

          {/* Hand-drawn curved arrow pointing to the badge from right */}
          <div className="hidden sm:block absolute left-[calc(50%+160px)] top-[-6px] pointer-events-none select-none">
            <svg width="44" height="40" viewBox="0 0 50 44" fill="none">
              <path
                d="M 5 3 C 28 8 40 22 20 38"
                stroke="#2563EB"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 18 30 L 19 39 L 28 38"
                stroke="#2563EB"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. Main Stage: Hero Content Flanked by Floating Cards & 3D Assets         */}
        {/* ========================================================================= */}
        <div className="relative min-h-[460px] lg:min-h-[520px] flex flex-col items-center justify-center text-center">

          {/* ----------------------------------------------------------------------- */}
          {/* A. LEFT FLOATING ASSETS                                                 */}
          {/* ----------------------------------------------------------------------- */}

          {/* 1. Top-Left Floating Stat Card (More Traffic +278%) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -12 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, x: 0, rotate: -8 }
                : { opacity: 1, x: 0, rotate: -8, y: [-4, 5, -4] }
            }
            transition={{
              opacity: { duration: 0.7, delay: 0.2 },
              x: { duration: 0.7, delay: 0.2 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ willChange: 'transform' }}
            className="hidden md:flex absolute top-2 left-2 lg:left-6 xl:left-12 z-20 items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12)] border border-slate-100 select-none hover:rotate-0 transition-transform duration-300"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shadow-xs">
              <BarChart3 size={22} strokeWidth={2.4} />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-semibold text-slate-400 leading-tight">
                More Traffic
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-emerald-500 leading-tight">
                +278% <span className="inline-block text-xs font-bold text-emerald-500">↗</span>
              </span>
            </div>
          </motion.div>

          {/* 2. 3D Glowing Hexagon Brand Cube with Orbital Rings */}
          <div className="hidden md:block absolute left-4 lg:left-10 xl:left-16 top-[42%] -translate-y-1/2 z-10 select-none pointer-events-none">
            
            {/* Small Floating Sphere Top-Left of Cube */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [-5, 6, -5], x: [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform' }}
              className="absolute -top-6 -left-4 w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-sky-200 shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
            />

            {/* Main 3D Cube Container */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [-8, 8, -8], rotate: [-1, 2, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform' }}
              className="relative w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center"
            >
              {/* Orbital Ring 1 */}
              <svg className="absolute inset-0 w-full h-full overflow-visible animate-[spin_18s_linear_infinite]">
                <ellipse
                  cx="88"
                  cy="88"
                  rx="105"
                  ry="38"
                  fill="none"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  opacity="0.75"
                  transform="rotate(-25 88 88)"
                />
                <circle cx="190" cy="80" r="3.5" fill="#3B82F6" />
              </svg>

              {/* Orbital Ring 2 */}
              <svg className="absolute inset-0 w-full h-full overflow-visible animate-[spin_24s_linear_infinite_reverse]">
                <ellipse
                  cx="88"
                  cy="88"
                  rx="98"
                  ry="32"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  opacity="0.6"
                  transform="rotate(35 88 88)"
                />
                <circle cx="30" cy="110" r="3" fill="#2563EB" />
              </svg>

              {/* 3D Glowing Hexagon Brand Logo (LCP Priority Image) */}
              <div className="relative z-10 w-28 h-28 lg:w-34 lg:h-34 flex items-center justify-center filter drop-shadow-[0_16px_32px_rgba(37,99,235,0.35)]">
                {/* Soft ambient glow behind 3D logo */}
                <div className="absolute inset-2 bg-blue-500/15 rounded-full blur-xl pointer-events-none -z-10" />
                <img
                  src="/cluster-3d-logo.png"
                  alt="Cluster Cloud 3D Logo"
                  fetchPriority="high"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain select-none filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]"
                  draggable={false}
                />
              </div>

              {/* Medium Floating Sphere to Bottom-Right of Cube */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [6, -6, 6], x: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform' }}
                className="absolute -bottom-2 -right-4 w-9 h-9 rounded-full bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#60A5FA] shadow-[0_6px_18px_rgba(37,99,235,0.45)]"
              />
            </motion.div>
          </div>

          {/* 3. Handwritten "Ideas Strategy Growth" + Arrow (Bottom-Left) */}
          <div className="hidden lg:block absolute left-8 xl:left-14 bottom-4 text-left select-none pointer-events-none">
            <p
              className="text-slate-800 text-2xl font-bold leading-tight"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              Ideas<br />Strategy<br />Growth
            </p>
            {/* Curved arrow pointing up toward the 3D logo cube */}
            <svg width="48" height="34" viewBox="0 0 54 36" fill="none" className="mt-1 ml-4">
              <path
                d="M 4 28 C 16 32 36 28 44 8"
                stroke="#64748B"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 36 10 L 45 7 L 46 16"
                stroke="#64748B"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* B. CENTER HERO COPY & ACTIONS                                           */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center px-4">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black text-[#0F172A] tracking-tight leading-[1.06] mb-5"
            >
              We Grow Brands<br />
              With Digital{' '}
              <span className="text-[#2563EB] drop-shadow-xs">Impact.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg mb-9"
            >
              Strategy. Content. Automation. Performance.<br />
              All in one growth partner.
            </motion.p>

            {/* Action CTAs: Start a Project & Watch Our Story with Micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            >
              {/* Primary Pill Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartProjectClick}
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] px-8 sm:px-9 py-3.5 sm:py-4 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(37,99,235,0.38)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.52)] transition-shadow duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight
                  size={18}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>

              {/* Video Story Button */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center gap-3.5 py-2 px-3 rounded-full hover:bg-slate-100/70 transition-colors duration-200 cursor-pointer select-none text-left"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] shadow-xs group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-200">
                  <Play size={16} className="fill-current ml-0.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#0F172A] leading-tight group-hover:text-[#2563EB] transition-colors">
                    Watch Our Story
                  </span>
                  <span className="block text-xs font-semibold text-slate-400 leading-tight mt-0.5">
                    In 60 Seconds
                  </span>
                </div>
              </motion.button>
            </motion.div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* C. RIGHT FLOATING ASSETS                                                */}
          {/* ----------------------------------------------------------------------- */}

          {/* 1. Top-Right Glossy Blue Sphere & Faceted Crystal Gem */}
          <div className="hidden md:block absolute right-[22%] top-2 select-none pointer-events-none">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [-6, 6, -6] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform' }}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
            />
          </div>

          {/* 3D Faceted Crystal Gem Top-Right */}
          <div className="hidden lg:block absolute right-8 xl:right-16 top-0 select-none pointer-events-none">
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [-5, 7, -5], rotate: [-2, 3, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ willChange: 'transform' }}
              className="w-12 h-12"
            >
              <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible drop-shadow-[0_10px_20px_rgba(147,197,253,0.4)]">
                <defs>
                  <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.75" />
                  </linearGradient>
                  <linearGradient id="facetMid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="facetBot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <polygon points="40,5 75,32 40,48 5,32" fill="url(#facetTop)" stroke="#EFF6FF" strokeWidth="1" />
                <polygon points="5,32 40,48 40,75" fill="url(#facetMid)" stroke="#DBEAFE" strokeWidth="0.8" />
                <polygon points="40,48 75,32 40,75" fill="url(#facetBot)" stroke="#93C5FD" strokeWidth="0.8" />
              </svg>
            </motion.div>
          </div>

          {/* 2. Top-Right Stat Card (Happy Clients 3K+) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 10 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, x: 0, rotate: 4 }
                : { opacity: 1, x: 0, rotate: 4, y: [4, -5, 4] }
            }
            transition={{
              opacity: { duration: 0.7, delay: 0.3 },
              x: { duration: 0.7, delay: 0.3 },
              y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ willChange: 'transform' }}
            className="hidden md:flex absolute top-12 right-4 lg:right-10 xl:right-16 z-20 items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12)] border border-slate-100 select-none hover:rotate-0 transition-transform duration-300"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shadow-xs">
              <Users size={22} strokeWidth={2.4} />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-semibold text-slate-400 leading-tight">
                Happy Clients
              </span>
              <span className="text-lg sm:text-xl font-black text-[#0F172A] leading-tight block">
                3K+
              </span>
              {/* Stacked Client Avatars */}
              <div className="flex items-center -space-x-1.5 mt-1">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&auto=format&fit=crop&q=80"
                  alt="Client"
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&auto=format&fit=crop&q=80"
                  alt="Client"
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&auto=format&fit=crop&q=80"
                  alt="Client"
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
                />
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 ring-2 ring-white text-[9px] font-bold text-[#2563EB]">
                  +
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Handwritten "Together to a Bigger Tomorrow" + Arrow (Mid-Right) */}
          <div className="hidden lg:block absolute right-4 xl:right-10 top-[48%] text-left select-none pointer-events-none">
            <p
              className="text-slate-800 text-xl font-bold leading-tight"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              Together<br />to a Bigger<br />Tomorrow
            </p>
            {/* Curved arrow pointing down towards the Leads Generated card */}
            <svg width="34" height="42" viewBox="0 0 38 46" fill="none" className="mt-1 ml-6">
              <path
                d="M 10 4 C 28 14 30 32 8 40"
                stroke="#2563EB"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 6 32 L 8 40 L 16 42"
                stroke="#2563EB"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* 4. Bottom-Right Stat Card (Leads Generated 5.2K) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: -6 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, x: 0, rotate: -3 }
                : { opacity: 1, x: 0, rotate: -3, y: [-4, 5, -4] }
            }
            transition={{
              opacity: { duration: 0.7, delay: 0.4 },
              x: { duration: 0.7, delay: 0.4 },
              y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{ willChange: 'transform' }}
            className="hidden md:flex absolute bottom-4 right-6 lg:right-12 xl:right-20 z-20 items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.12)] border border-slate-100 select-none hover:rotate-0 transition-transform duration-300"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] shadow-xs">
              <Rocket size={22} strokeWidth={2.4} />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-semibold text-slate-400 leading-tight">
                Leads Generated
              </span>
              <span className="text-lg sm:text-xl font-black text-[#0F172A] leading-tight">
                5.2K <span className="inline-block text-xs font-bold text-emerald-500">↗</span>
              </span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* 4. Continuous Connected Sinuous Metrics Wave Bar                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-7xl xl:max-w-[1400px] mx-auto mt-10 sm:mt-14 px-2 sm:px-4 select-none"
        >
          <div className="relative w-full overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 scrollbar-none">
            <div className="relative w-full min-w-[560px] sm:min-w-0 h-[175px] sm:h-[195px] lg:h-[210px]">
              
              {/* Sinuous Wave SVG Line stretching across stats width */}
              <svg
                viewBox="0 0 1000 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.4" />
                    <stop offset="20%" stopColor="#3B82F6" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#2563EB" stopOpacity="0.9" />
                    <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Sinuous curved continuous wave matching Screenshot 2 */}
                <path
                  d="M 0 100 C 80 80 140 30 194 30 C 260 30 330 64 398 64 C 445 64 475 18 510 18 C 545 18 575 30 602 40 C 635 52 665 66 704 66 C 740 66 770 49 806 49 C 855 49 930 80 1000 92"
                  stroke="url(#waveGradient)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Station 1: 300+ Happy Clients (x=194, y=30) */}
                <circle cx="194" cy="30" r="4" fill="#2563EB" />
                <circle cx="194" cy="30" r="8" fill="#3B82F6" opacity="0.25" className="animate-ping" />
                <line x1="194" y1="30" x2="194" y2="72" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Station 2: 7+ Years Experience (x=398, y=64) */}
                <circle cx="398" cy="64" r="4" fill="#2563EB" />
                <circle cx="398" cy="64" r="8" fill="#3B82F6" opacity="0.25" className="animate-ping" />
                <line x1="398" y1="64" x2="398" y2="90" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Station 3: 3K+ Projects Completed (x=602, y=40) */}
                <circle cx="602" cy="40" r="4" fill="#2563EB" />
                <circle cx="602" cy="40" r="8" fill="#3B82F6" opacity="0.25" className="animate-ping" />
                <line x1="602" y1="40" x2="602" y2="84" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Station 4: 130+ Industries Served (x=806, y=49) */}
                <circle cx="806" cy="49" r="4" fill="#2563EB" />
                <circle cx="806" cy="49" r="8" fill="#3B82F6" opacity="0.25" className="animate-ping" />
                <line x1="806" y1="49" x2="806" y2="75" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* 4 Metrics Text Stations aligned directly beneath their nodes */}
              {/* Metric 1 */}
              <div
                className="absolute -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto"
                style={{ left: '19.4%', top: '44%' }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-none">
                  300+
                </span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-500 mt-1 whitespace-nowrap">
                  Happy Clients
                </span>
              </div>

              {/* Metric 2 */}
              <div
                className="absolute -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto"
                style={{ left: '39.8%', top: '55%' }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-none">
                  7+
                </span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-500 mt-1 whitespace-nowrap">
                  Years Experience
                </span>
              </div>

              {/* Metric 3 */}
              <div
                className="absolute -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto"
                style={{ left: '60.2%', top: '51%' }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-none">
                  3K+
                </span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-500 mt-1 whitespace-nowrap">
                  Projects Completed
                </span>
              </div>

              {/* Metric 4 */}
              <div
                className="absolute -translate-x-1/2 flex flex-col items-center text-center pointer-events-auto"
                style={{ left: '80.6%', top: '46%' }}
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-none">
                  130+
                </span>
                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-500 mt-1 whitespace-nowrap">
                  Industries Served
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 5. Interactive Video Modal (Watch Our Story in 60 Seconds)                */}
      {/* ========================================================================= */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-slate-950 overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-600/20 text-[#2563EB] flex items-center justify-center">
                  <Play size={16} className="fill-current" />
                </div>
                <div>
                  <h3 className="text-white text-base font-bold">The Cluster Cloud Story</h3>
                  <p className="text-slate-400 text-xs">How We Engineer Digital Authority in 60 Seconds</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Container / Agency Story Reel */}
            <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Cluster Cloud Agency Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
