import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpVariants } from '../lib/animations';

type BrandShape = 'rounded' | 'square' | 'circle' | 'hex' | 'diamond' | 'shield';
type WordStyle = 'title' | 'lower' | 'upper' | 'wide';

interface BrandItem {
  name: string;
  /** Accent color used for the logo mark. */
  color: string;
  /** Shape of the logo mark badge. */
  shape?: BrandShape;
  /** Wordmark typography variant. */
  wordStyle?: WordStyle;
  /** Optional path/URL to a real logo image (takes precedence over the generated mark). */
  logo?: string;
}

// Monogram: first letters of up to two significant words (skips stopwords).
const STOPWORDS = new Set(['&', 'and', 'the', 'of']);
const monogram = (name: string): string =>
  name
    .split(' ')
    .filter((w) => !STOPWORDS.has(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

// Distinct badge silhouettes so each brand reads as its own little logo.
const SHAPES: Record<BrandShape, string> = {
  rounded: 'inset(0px round 9px)',
  square: 'inset(0px round 3px)',
  circle: 'circle(50% at 50% 50%)',
  hex: 'polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)',
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  shield: 'polygon(50% 0%, 100% 16%, 100% 55%, 50% 100%, 0% 55%, 0% 16%)',
};

// Wordmark typography variants for visual variety.
const WORD_STYLES: Record<WordStyle, string> = {
  title: 'tracking-tight',
  lower: 'tracking-tight lowercase',
  upper: 'tracking-[0.12em] uppercase',
  wide: 'tracking-[0.2em] uppercase',
};

export const BrandSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Line 1 Brands — distinct logo marks (shape + wordmark) per brand.
  const line1Brands: BrandItem[] = [
    { name: 'NovaPeak Studio', color: '#4F46E5', shape: 'hex', wordStyle: 'title' },
    { name: 'BrightNest Digital', color: '#F59E0B', shape: 'circle', wordStyle: 'title' },
    { name: 'Elevora Labs', color: '#7C3AED', shape: 'diamond', wordStyle: 'title' },
    { name: 'PixelCraft Media', color: '#EC4899', shape: 'square', wordStyle: 'lower' },
    { name: 'GrowthHive Co.', color: '#16A34A', shape: 'rounded', wordStyle: 'title' },
    { name: 'UrbanLeaf Living', color: '#059669', shape: 'hex', wordStyle: 'title' },
    { name: 'CloudNest Solutions', color: '#0EA5E9', shape: 'circle', wordStyle: 'title' },
    { name: 'MarketFlow Hub', color: '#2563EB', shape: 'rounded', wordStyle: 'title' },
    { name: 'ApexCore Digital', color: '#DC2626', shape: 'shield', wordStyle: 'upper' },
    { name: 'BlueOrbit Creative', color: '#1D4ED8', shape: 'circle', wordStyle: 'title' },
    { name: 'ThriveNest', color: '#65A30D', shape: 'hex', wordStyle: 'title' },
    { name: 'VertexWave', color: '#0891B2', shape: 'diamond', wordStyle: 'upper' },
    { name: 'GreenOak Interiors', color: '#15803D', shape: 'shield', wordStyle: 'title' },
    { name: 'Craftora Studio', color: '#9333EA', shape: 'square', wordStyle: 'title' },
    { name: 'ScaleBridge', color: '#EA580C', shape: 'rounded', wordStyle: 'title' },
    { name: 'Pure Pour Concreat', color: '#475569', shape: 'square', wordStyle: 'title' },
    { name: 'Deco Scape', color: '#0F766E', shape: 'hex', wordStyle: 'title' },
    { name: 'Cava Granite', color: '#6B7280', shape: 'diamond', wordStyle: 'title' },
  ];

  // Line 2 Brands — distinct logo marks (shape + wordmark) per brand.
  const line2Brands: BrandItem[] = [
    { name: 'LumiCore Labs', color: '#D946EF', shape: 'circle', wordStyle: 'title' },
    { name: 'PrimeVista Group', color: '#1E40AF', shape: 'shield', wordStyle: 'title' },
    { name: 'NorthPeak Media', color: '#334155', shape: 'hex', wordStyle: 'upper' },
    { name: 'EverNova Solutions', color: '#0D9488', shape: 'rounded', wordStyle: 'title' },
    { name: 'BrightPath Academy', color: '#CA8A04', shape: 'circle', wordStyle: 'title' },
    { name: 'Oakline Renovations', color: '#92400E', shape: 'square', wordStyle: 'title' },
    { name: 'PureVista Cleaning', color: '#38BDF8', shape: 'circle', wordStyle: 'title' },
    { name: 'EverStone Outdoor', color: '#57534E', shape: 'hex', wordStyle: 'title' },
    { name: 'MapleCraft Design', color: '#B91C1C', shape: 'diamond', wordStyle: 'title' },
    { name: 'Horizon Dental Care', color: '#06B6D4', shape: 'rounded', wordStyle: 'title' },
    { name: 'RiverStone Realty', color: '#4338CA', shape: 'shield', wordStyle: 'title' },
    { name: 'UrbanEdge Fitness', color: '#111827', shape: 'hex', wordStyle: 'upper' },
    { name: 'ClearView Plumbing', color: '#0284C7', shape: 'circle', wordStyle: 'title' },
    { name: 'WestPeak Construction', color: '#B45309', shape: 'square', wordStyle: 'title' },
    { name: 'Bloom & Co.', color: '#DB2777', shape: 'circle', wordStyle: 'wide' },
    { name: 'Ever Struct', color: '#0369A1', shape: 'shield', wordStyle: 'upper' },
    { name: 'Al Haddaf Car Wash', color: '#1E3A8A', logo: '/brands/al-haddaf-car-wash.svg' },
    { name: 'Red And White Cleaning Service', color: '#DC2626', shape: 'rounded', wordStyle: 'title' },
  ];

  const renderBrand = (brand: BrandItem) => {
    if (brand.logo) {
      return (
        <div className="group/item flex items-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300" title={brand.name}>
          <img
            src={brand.logo}
            alt={brand.name}
            loading="lazy"
            decoding="async"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>
      );
    }
    return (
      <div className="group/item flex items-center gap-2.5 shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300" title={brand.name}>
        <span
          className="flex h-8 w-8 items-center justify-center text-white text-[13px] font-black leading-none shrink-0"
          style={{ backgroundColor: brand.color, clipPath: SHAPES[brand.shape ?? 'rounded'] }}
        >
          {monogram(brand.name)}
        </span>
        <span
          className={`font-extrabold text-[#0F172A] text-[19px] sm:text-[21px] whitespace-nowrap ${WORD_STYLES[brand.wordStyle ?? 'title']}`}
        >
          {brand.name}
        </span>
      </div>
    );
  };

  // Duplicate lists for seamless infinite loop with CSS marquee
  const duplicatedLine1 = [...line1Brands, ...line1Brands];
  const duplicatedLine2 = [...line2Brands, ...line2Brands];

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ========================================================================= */}
      {/* 1. TOP DYNAMIC FLUID ROYAL BLUE WAVE BANNER (Exact Match to Screenshot 2) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden pointer-events-none -mt-1">
        <svg
          viewBox="0 0 1440 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 sm:h-28 lg:h-32 object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topWaveBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="25%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="75%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="topWaveIce" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#EFF6FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.85" />
            </linearGradient>
            <filter id="topWaveShadow" x="-5%" y="-10%" width="110%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#2563EB" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Layer 1: Ethereal upper soft wave contour */}
          <path
            d="M 0,0 C 280,60 560,25 840,45 C 1120,65 1320,20 1440,35 L 1440,0 L 0,0 Z"
            fill="url(#topWaveIce)"
          />

          {/* Layer 2: Subtle translucent accent wave */}
          <path
            d="M 0,20 C 300,75 580,35 880,55 C 1160,75 1340,30 1440,45 L 1440,0 L 0,0 Z"
            fill="#EFF6FF"
            opacity="0.6"
          />

          {/* Layer 3: Main Sweeping Royal Blue Fluid Wave Ribbon */}
          <path
            d="M 0,15 C 240,65 480,75 720,52 C 960,30 1200,55 1440,25 L 1440,68 C 1220,95 980,68 720,82 C 480,95 240,92 0,85 Z"
            fill="url(#topWaveBlue)"
            filter="url(#topWaveShadow)"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. Floating 3D Assets (Side Accents from Screenshot 2)                    */}
      {/* ========================================================================= */}
      {/* Left: 3D Glossy Blue Sphere with Dotted Trailing Arc */}
      <div className="hidden lg:block absolute left-8 xl:left-14 top-[195px] -translate-y-1/2 pointer-events-none z-20">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [-7, 7, -7], x: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
          className="relative"
        >
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="absolute -bottom-5 -left-3 opacity-60">
            <path d="M 50 10 C 35 25 15 28 2 20" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1E40AF] via-[#2563EB] to-[#93C5FD] shadow-[0_8px_24px_rgba(37,99,235,0.45)] ring-1 ring-white/40" />
        </motion.div>
      </div>

      {/* Right: 3D Translucent Faceted Crystal Gem with Dotted Trailing Arc */}
      <div className="hidden lg:block absolute right-8 xl:right-14 top-[190px] -translate-y-1/2 pointer-events-none z-20">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [7, -7, 7], rotate: [-2, 2, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
          className="relative"
        >
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="absolute -bottom-6 -right-2 opacity-60">
            <path d="M 10 10 C 25 25 45 28 58 20" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
          <div className="w-14 h-14 drop-shadow-[0_12px_24px_rgba(147,197,253,0.5)]">
            <svg viewBox="0 0 80 80" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gemT" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gemM" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="gemB" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <polygon points="40,5 75,32 40,48 5,32" fill="url(#gemT)" stroke="#EFF6FF" strokeWidth="1" />
              <polygon points="5,32 40,48 40,75" fill="url(#gemM)" stroke="#DBEAFE" strokeWidth="0.8" />
              <polygon points="40,48 75,32 40,75" fill="url(#gemB)" stroke="#93C5FD" strokeWidth="0.8" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 3. Central Title Area (Tight, balanced spacing, exact match to screenshot)*/}
      {/* ========================================================================= */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-1 sm:pt-2 pb-6 sm:pb-8"
      >
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-[#2563EB] text-[11px] font-bold uppercase tracking-[0.18em] shadow-xs mb-3.5">
          <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span>TRUSTED BY AMBITIOUS BRANDS</span>
        </div>

        {/* Headline with Kinetic Accent Marks */}
        <div className="relative inline-flex items-center justify-center mb-3">
          {/* Left Kinetic Accent Dash */}
          <span className="hidden sm:inline-block absolute -left-11 sm:-left-14 top-1/2 -translate-y-1/2 text-[#2563EB] select-none">
            <svg width="24" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M 5 15 L 20 8" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
            Brands That <span className="text-[#2563EB]">Grow</span> With Us
          </h2>

          {/* Right Kinetic Accent Double Dash */}
          <span className="hidden sm:inline-block absolute -right-11 sm:-right-14 top-1/2 -translate-y-1/2 text-[#2563EB] select-none">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M 8 18 L 18 10" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 14 26 L 24 18" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
          From startups to global companies, we&apos;ve had the privilege to work with amazing brands across industries.
        </p>

      </motion.div>

      {/* ========================================================================= */}
      {/* 4. DUAL-LINE CONTINUOUS AUTO-MOVING LOGOS (Hardware-Accelerated CSS Marquee)*/}
      {/* ========================================================================= */}
      <div className="group relative w-full overflow-hidden pb-10 sm:pb-16">
        {/* Soft Glass Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/85 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/85 to-transparent z-20" />

        {/* LINE 1: Leftward Hardware-Accelerated Auto-Glide */}
        <div className="flex w-full mb-5 sm:mb-7 overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0 pr-12 sm:pr-16">
            {duplicatedLine1.map((brand, idx) => (
              <React.Fragment key={`${brand.name}-line1-${idx}`}>
                {renderBrand(brand)}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* LINE 2: Rightward Hardware-Accelerated Auto-Glide */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0 pr-12 sm:pr-16">
            {duplicatedLine2.map((brand, idx) => (
              <React.Fragment key={`${brand.name}-line2-${idx}`}>
                {renderBrand(brand)}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default BrandSection;
