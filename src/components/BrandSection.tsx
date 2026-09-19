import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpVariants } from '../lib/animations';

interface BrandItem {
  name: string;
  glowColor: string;
  logo: React.ReactNode;
}

export const BrandSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Line 1 Brands: Official logos from SVGL (svgl.app) + manual SVGs for brands not in SVGL
  const line1Brands: BrandItem[] = [
    {
      name: 'Google',
      glowColor: 'rgba(66, 133, 244, 0.3)',
      logo: (
        <img
          src="/brands/google-wordmark.svg"
          alt="Google"
          loading="lazy"
          decoding="async"
          className="h-7 sm:h-8 w-auto object-contain"
        />
      ),
    },
    {
      name: 'Meta',
      glowColor: 'rgba(6, 104, 225, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/meta.svg"
            alt="Meta"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-[#0668E1] text-[22px] sm:text-[24px] tracking-tight leading-none">Meta</span>
        </div>
      ),
    },
    {
      name: 'Shopify',
      glowColor: 'rgba(150, 191, 72, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/shopify.svg"
            alt="Shopify"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-[#212326] text-[22px] sm:text-[24px] tracking-tight lowercase">shopify</span>
        </div>
      ),
    },
    {
      name: 'HubSpot',
      glowColor: 'rgba(255, 122, 89, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg fill="#FF7A59" viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"/>
          </svg>
          <span className="font-extrabold text-[#33475B] text-[21px] sm:text-[23px] tracking-tight">HubSpot</span>
        </div>
      ),
    },
    {
      name: 'WordPress',
      glowColor: 'rgba(33, 117, 155, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg fill="#21759B" viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
          </svg>
          <span className="font-extrabold text-[#21759B] text-[18px] sm:text-[20px] tracking-wider">WordPress</span>
        </div>
      ),
    },
    {
      name: 'Semrush',
      glowColor: 'rgba(255, 100, 45, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg fill="#FF642D" viewBox="0 0 24 24" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/>
          </svg>
          <span className="font-black text-[#1F1F24] text-[20px] sm:text-[22px] tracking-tight">Semrush</span>
        </div>
      ),
    },
    {
      name: 'Ahrefs',
      glowColor: 'rgba(255, 90, 0, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/ahrefs.svg"
            alt="Ahrefs"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-black text-[#111625] text-[22px] sm:text-[24px] tracking-tight">ahrefs</span>
        </div>
      ),
    },
  ];

  // Line 2 Brands: Official logos from SVGL (svgl.app) + manual SVGs for brands not in SVGL
  const line2Brands: BrandItem[] = [
    {
      name: 'Stripe',
      glowColor: 'rgba(99, 91, 255, 0.3)',
      logo: (
        <img
          src="/brands/stripe-wordmark.svg"
          alt="Stripe"
          loading="lazy"
          decoding="async"
          className="h-6 sm:h-7 w-auto object-contain"
        />
      ),
    },
    {
      name: 'Webflow',
      glowColor: 'rgba(20, 110, 245, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 28 22" className="h-6 sm:h-7 w-auto" fill="#146EF5" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 0c-.7 0-1.3.3-1.7.8L17.4 10 14.5 2.5c-.5-.5-1.1-.8-1.8-.8s-1.3.3-1.8.8L5.5 10 2.6 3C2.2 2.3 1.4 2.2.7 2.6S0 3.9.4 4.5l4.5 11.3c.4 1.1 1.5 1.8 2.7 1.8s2.2-.7 2.7-1.8l3.8-9.8 3.8 9.8c.4 1.1 1.5 1.8 2.7 1.8s2.2-.7 2.7-1.8L28 4.5c.4-.6.3-1.3-.3-1.7-.3-.3-.6-.5-.8-.5-.2-.3-.2-.3-.4-.3z" />
          </svg>
          <span className="font-extrabold text-[#146EF5] text-[21px] sm:text-[23px] tracking-tight">webflow</span>
        </div>
      ),
    },
    {
      name: 'Figma',
      glowColor: 'rgba(242, 78, 30, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/figma.svg"
            alt="Figma"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-[#2C2C2C] text-[22px] sm:text-[24px] tracking-tight">Figma</span>
        </div>
      ),
    },
    {
      name: 'Slack',
      glowColor: 'rgba(74, 21, 75, 0.3)',
      logo: (
        <img
          src="/brands/slack-wordmark.svg"
          alt="Slack"
          loading="lazy"
          decoding="async"
          className="h-7 sm:h-8 w-auto object-contain"
        />
      ),
    },
    {
      name: 'Notion',
      glowColor: 'rgba(0, 0, 0, 0.25)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/notion.svg"
            alt="Notion"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-extrabold text-[#000000] text-[22px] sm:text-[24px] tracking-tight">Notion</span>
        </div>
      ),
    },
    {
      name: 'LinkedIn',
      glowColor: 'rgba(10, 102, 194, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <img
            src="/brands/linkedin.svg"
            alt="LinkedIn"
            loading="lazy"
            decoding="async"
            className="h-7 sm:h-7 w-auto object-contain"
          />
          <span className="font-extrabold text-[#0A66C2] text-[21px] sm:text-[23px] tracking-tight">LinkedIn</span>
        </div>
      ),
    },
    {
      name: 'Amazon',
      glowColor: 'rgba(255, 153, 0, 0.3)',
      logo: (
        <div className="flex flex-col items-center">
          <span className="font-black text-[#131921] text-[22px] sm:text-[24px] tracking-tighter leading-none">amazon</span>
          <svg viewBox="0 0 50 12" className="h-3 w-auto mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4C15 9 30 9 46 2" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M43 1.5L47 3.5L45 7" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ),
    },
  ];

  // Duplicate lists for seamless infinite loop with CSS marquee
  const duplicatedLine1 = [...line1Brands, ...line1Brands];
  const duplicatedLine2 = [...line2Brands, ...line2Brands];

  return (
    <section className="relative w-full overflow-hidden bg-white select-none">
      
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
              <div
                key={`${brand.name}-line1-${idx}`}
                className="group/item flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>

        {/* LINE 2: Rightward Hardware-Accelerated Auto-Glide */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0 pr-12 sm:pr-16">
            {duplicatedLine2.map((brand, idx) => (
              <div
                key={`${brand.name}-line2-${idx}`}
                className="group/item flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default BrandSection;
