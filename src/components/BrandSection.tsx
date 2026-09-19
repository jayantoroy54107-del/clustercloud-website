import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BrandItem {
  name: string;
  glowColor: string;
  logo: React.ReactNode;
}

export const BrandSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Line 1 Brands: Exact official brand logos from user reference screenshot 2
  const line1Brands: BrandItem[] = [
    {
      name: 'Google',
      glowColor: 'rgba(66, 133, 244, 0.3)',
      logo: (
        <svg viewBox="0 0 120 38" className="h-7 sm:h-8 w-auto" fill="none">
          <path d="M19.4 17.5v4.9h11.2c-.5 3-2.6 6.8-7.5 6.8-6.4 0-11.6-5.3-11.6-11.8s5.2-11.8 11.6-11.8c3.6 0 6.1 1.6 7.5 2.9l3.9-3.7C32 2.4 27.6.4 21.5.4 10.4.4 1.4 9.4 1.4 20.5s9 20.1 20.1 20.1c11.6 0 19.3-8.2 19.3-19.7 0-1.4-.2-2.3-.4-3.4H19.4z" fill="#4285F4" />
          <path d="M47.7 7.8c-6.8 0-12.2 5.3-12.2 12.3s5.4 12.3 12.2 12.3c6.8 0 12.2-5.3 12.2-12.3s-5.4-12.3-12.2-12.3zm0 19.7c-3.8 0-7-3.1-7-7.4s3.2-7.4 7-7.4 7 3.1 7 7.4-3.2 7.4-7 7.4z" fill="#EA4335" />
          <path d="M74.3 7.8c-6.8 0-12.2 5.3-12.2 12.3s5.4 12.3 12.2 12.3c6.8 0 12.2-5.3 12.2-12.3s-5.4-12.3-12.2-12.3zm0 19.7c-3.8 0-7-3.1-7-7.4s3.2-7.4 7-7.4 7 3.1 7 7.4-3.2 7.4-7 7.4z" fill="#FBBC05" />
          <path d="M99.8 8.5v1.9h-.1c-1.3-1.6-3.8-3.1-7.1-3.1-6.8 0-12.6 5.4-12.6 12.4 0 6.9 5.8 12.3 12.6 12.3 3.3 0 5.8-1.5 7.1-3.1h.1v1.9c0 4.7-2.5 7.3-6.6 7.3-3.3 0-5.4-2.4-6.2-4.5l-4.5 1.9c1.3 3.1 4.7 7.4 10.7 7.4 6.2 0 11.5-3.7 11.5-12.8V8.5h-4.9zm-6.6 19c-3.8 0-6.9-3.2-6.9-7.4 0-4.3 3.1-7.4 6.9-7.4 3.7 0 6.7 3.2 6.7 7.4 0 4.3-3 7.4-6.7 7.4z" fill="#4285F4" />
          <path d="M107.5 1.8h5.2v38.9h-5.2V1.8z" fill="#34A853" />
          <path d="M124.2 27.5c-2.6 0-4.5-1.2-5.7-3.5l15.6-6.4-.5-1.3c-1-2.6-3.9-7.5-9.9-7.5-5.9 0-10.9 4.7-10.9 12.3 0 6.9 5 12.3 12.3 12.3 5.9 0 9.3-3.6 10.7-5.7l-4.1-2.7c-1.4 2-3.3 3.5-6.5 3.5zm-.4-15c1.9 0 3.6 1 4.1 2.4l-9.9 4.1c0-4.6 3.5-6.5 5.8-6.5z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      name: 'Meta',
      glowColor: 'rgba(6, 104, 225, 0.3)',
      logo: (
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 38 24" className="h-7 sm:h-8 w-auto" fill="none">
            <path
              d="M9.8 19.5c-4.4 0-7.8-3.3-7.8-7.5C2 7.7 5.4 4.5 9.8 4.5c3.2 0 5.6 1.7 8.2 5.1 2.6-3.4 5-5.1 8.2-5.1 4.4 0 7.8 3.2 7.8 7.5s-3.4 7.5-7.8 7.5c-3.2 0-5.6-1.7-8.2-5.1-2.6 3.4-5 5.1-8.2 5.1zM26.2 1.5c-4.6 0-8.2 2.5-11.2 6.5C12 4 8.4 1.5 3.8 1.5 0 1.5-2 4.5-2 9c0 6.6 5 12 11.8 12 4.6 0 8.2-2.5 11.2-6.5 3 4 6.6 6.5 11.2 6.5 6.8 0 11.8-5.4 11.8-12 0-4.5-2-7.5-5.8-7.5z"
              fill="#0668E1"
            />
          </svg>
          <span className="font-extrabold text-[#0668E1] text-[22px] sm:text-[24px] tracking-tight leading-none">Meta</span>
        </div>
      ),
    },
    {
      name: 'Shopify',
      glowColor: 'rgba(150, 191, 72, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 28 32" className="h-7 sm:h-8 w-auto" fill="none">
            <path d="M23.7 6.4c-.2 0-.4 0-.6.1-.2-.8-.7-2.6-2.1-3.9C19.4 1 17.5.4 15.9.4c-4.4 0-6.5 2.8-7.3 6.1-.8.2-1.6.5-2.1.7L2.7 27.2c-.4 1.7.8 3.3 2.5 3.3h19.5c1.7 0 3-1.6 2.6-3.3L23.7 6.4z" fill="#96bf48" />
            <path d="M15.9 2.5c1 0 2.3.4 3.2 1.4.9 1 1.3 2.4 1.4 3.2-1.9.7-3.9 1.3-6.1 1.9.6-2.6 2-6.5 4.7-6.5z" fill="#64943e" />
            <path d="M13.1 21.8c0-4.6 6.3-4.8 6.3-8.1 0-1.8-1.3-2.6-2.8-2.6-2.6 0-3.9 2-4.1 2.3l-1.5-2.2c.6-.9 2.7-3 6-3 3.6 0 5.6 2.2 5.6 5.4 0 4.9-6.3 5.3-6.3 8.3 0 1.2.7 1.8 1.8 1.8 1.5 0 3.3-1.3 3.4-1.4l1.3 2.3c-.6.6-2.6 2.1-5.1 2.1-3.1 0-4.6-2.2-4.6-4.9z" fill="#FFFFFF" />
          </svg>
          <span className="font-extrabold text-[#212326] text-[22px] sm:text-[24px] tracking-tight lowercase">shopify</span>
        </div>
      ),
    },
    {
      name: 'HubSpot',
      glowColor: 'rgba(255, 122, 89, 0.3)',
      logo: (
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-[#2D3E50] text-[22px] sm:text-[24px] tracking-tight">HubSp</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF7A59]" fill="none" stroke="currentColor" strokeWidth="3">
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="4" r="2.5" fill="#FF7A59" />
            <line x1="12" y1="6.5" x2="12" y2="7.5" strokeLinecap="round" />
            <circle cx="20" cy="8" r="2.5" fill="#FF7A59" />
            <line x1="17.5" y1="9.5" x2="15.5" y2="10.5" strokeLinecap="round" />
          </svg>
          <span className="font-extrabold text-[#2D3E50] text-[22px] sm:text-[24px] tracking-tight">t</span>
        </div>
      ),
    },
    {
      name: 'WordPress',
      glowColor: 'rgba(33, 117, 155, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-auto text-[#21759B]" fill="currentColor">
            <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M5.5 16c0 4 2.3 7.5 5.6 9.2L5.8 10.3C5.6 12.1 5.5 14 5.5 16zm17.8-1.3c0-1.8-.6-3.1-1.3-4.2-.8-1.2-1.5-2.3-1.5-3.5 0-1.4 1.1-2.7 2.6-2.7.1 0 .2 0 .3.1-2.2-2.1-5.1-3.4-8.4-3.4-4.3 0-8.2 2.3-10.4 5.7 1.3 0 2.6.1 2.6.1.7 0 .5-1-.1-1 0 0-1.4-.1-2.9-.2 1.7-4.8 5-8.4 5-8.4l-4.3 12.7 2.6 7.8 1.3-3.7c.8-2.2 1.5-3.7 1.5-5z" />
          </svg>
          <span className="font-extrabold text-[#21759B] text-[18px] sm:text-[20px] tracking-wider uppercase">WORDPRESS</span>
        </div>
      ),
    },
    {
      name: 'Semrush',
      glowColor: 'rgba(255, 100, 45, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 28 28" className="h-7 w-auto" fill="none">
            <circle cx="14" cy="14" r="12" stroke="#FF642D" strokeWidth="2.5" />
            <path d="M14 6c-4.4 0-8 3.6-8 8 0 3 1.7 5.7 4.2 7l11.5-6.6C19.7 9.7 16.6 6 14 6z" fill="#FF642D" />
          </svg>
          <span className="font-black text-[#1F1F24] text-[20px] sm:text-[22px] tracking-tight uppercase">SEMRUSH</span>
        </div>
      ),
    },
    {
      name: 'Ahrefs',
      glowColor: 'rgba(255, 90, 0, 0.3)',
      logo: (
        <div className="flex items-center gap-1.5">
          <span className="font-black text-[#111625] text-[24px] sm:text-[26px] tracking-tight">ahrefs</span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A00]" />
        </div>
      ),
    },
  ];

  // Line 2 Brands: High-authority digital ecosystem brands
  const line2Brands: BrandItem[] = [
    {
      name: 'Stripe',
      glowColor: 'rgba(99, 91, 255, 0.3)',
      logo: (
        <div className="flex items-center gap-1">
          <span className="font-black text-[#635BFF] text-[26px] sm:text-[28px] tracking-tighter lowercase">stripe</span>
        </div>
      ),
    },
    {
      name: 'Webflow',
      glowColor: 'rgba(20, 110, 245, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 28 28" className="h-7 w-auto" fill="#146EF5">
            <path d="M25.7 5.8c-.8 0-1.5.3-2 .9L18.4 15l-3.2-8.3c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L5.8 15 2.5 6.7C2 5.9 1 5.8.2 6.3s-.1 1.5.4 2l5.2 13.1c.5 1.3 1.7 2.1 3.1 2.1s2.6-.8 3.1-2.1l4.4-11.4 4.4 11.4c.5 1.3 1.7 2.1 3.1 2.1s2.6-.8 3.1-2.1l5.2-13.1c.5-.5.4-1.5-.4-2-.3-.4-.6-.5-.9-.5z" />
          </svg>
          <span className="font-extrabold text-[#146EF5] text-[21px] sm:text-[23px] tracking-tight">webflow</span>
        </div>
      ),
    },
    {
      name: 'Figma',
      glowColor: 'rgba(242, 78, 30, 0.3)',
      logo: (
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 36" className="h-7 w-auto" fill="none">
            <path d="M0 6a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z" fill="#F24E1E" />
            <path d="M12 0h6a6 6 0 0 1 0 12h-6V0z" fill="#FF7262" />
            <path d="M12 12h6a6 6 0 0 1 0 12h-6V12z" fill="#1ABCFE" />
            <path d="M0 18a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z" fill="#A259FF" />
            <path d="M0 30a6 6 0 0 1 6-6h6v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6z" fill="#0ACF83" />
          </svg>
          <span className="font-extrabold text-[#2C2C2C] text-[22px] sm:text-[24px] tracking-tight">Figma</span>
        </div>
      ),
    },
    {
      name: 'Slack',
      glowColor: 'rgba(74, 21, 75, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" className="h-7 w-auto" fill="none">
            <path d="M6 18a3 3 0 1 1 3-3v3H6zm1.5 1.5a1.5 1.5 0 0 1 1.5-1.5H16a3 3 0 1 1 0 6H9a3 3 0 0 1-1.5-4.5z" fill="#E01E5A" />
            <path d="M14 6a3 3 0 1 1 3 3h-3V6zm-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V16a3 3 0 1 1-6 0V9a3 3 0 0 1 4.5-1.5z" fill="#36C5F0" />
            <path d="M26 14a3 3 0 1 1-3 3v-3h3zm-1.5-1.5a1.5 1.5 0 0 1-1.5 1.5H16a3 3 0 1 1 0-6h7a3 3 0 0 1 1.5 4.5z" fill="#2EB67D" />
            <path d="M18 26a3 3 0 1 1-3-3h3v3zm1.5-1.5a1.5 1.5 0 0 1-1.5-1.5V16a3 3 0 1 1 6 0v7a3 3 0 0 1-4.5 1.5z" fill="#ECB22E" />
          </svg>
          <span className="font-extrabold text-[#1D1C1D] text-[22px] sm:text-[24px] tracking-tight">Slack</span>
        </div>
      ),
    },
    {
      name: 'Notion',
      glowColor: 'rgba(0, 0, 0, 0.25)',
      logo: (
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-black text-white flex items-center justify-center font-black text-sm">
            N
          </div>
          <span className="font-extrabold text-[#000000] text-[22px] sm:text-[24px] tracking-tight">Notion</span>
        </div>
      ),
    },
    {
      name: 'LinkedIn',
      glowColor: 'rgba(10, 102, 194, 0.3)',
      logo: (
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#0A66C2">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span className="font-extrabold text-[#0A66C2] text-[21px] sm:text-[23px] tracking-tight">LinkedIn</span>
        </div>
      ),
    },
    {
      name: 'Amazon',
      glowColor: 'rgba(255, 153, 0, 0.3)',
      logo: (
        <div className="flex flex-col items-center">
          <span className="font-black text-[#131921] text-[21px] sm:text-[23px] tracking-tighter leading-none">amazon</span>
          <svg viewBox="0 0 40 10" className="h-2.5 w-auto mt-0.5" fill="none">
            <path d="M2 3c10 4 24 4 36-2" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M35 1l3 1.5-1.5 2.5" fill="#FF9900" />
          </svg>
        </div>
      ),
    },
  ];

  // Triplicate lists for seamless infinite loop
  const duplicatedLine1 = [...line1Brands, ...line1Brands, ...line1Brands];
  const duplicatedLine2 = [...line2Brands, ...line2Brands, ...line2Brands];

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
          {/* Thick on left edge (~70px), sweeps down, dips gently across center, widens at right (~45px) */}
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
          animate={{ y: [-7, 7, -7], x: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
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
          animate={{ y: [7, -7, 7], rotate: [-2, 2, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
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
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-1 sm:pt-2 pb-6 sm:pb-8">
        
        {/* Pill Badge (Cleanly above the title with generous spacing) */}
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

      </div>

      {/* ========================================================================= */}
      {/* 4. DUAL-LINE CONTINUOUS AUTO-MOVING LOGOS (Direct on Canvas, No Boxes!)   */}
      {/* ========================================================================= */}
      <div
        className="relative w-full overflow-hidden pb-10 sm:pb-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft Glass Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/85 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/85 to-transparent z-20" />

        {/* LINE 1: Leftward Auto-Glide */}
        <div className="flex w-full mb-5 sm:mb-7 overflow-hidden">
          <motion.div
            className="flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0 pr-12 sm:pr-16"
            animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 26,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLine1.map((brand, idx) => (
              <div
                key={`${brand.name}-line1-${idx}`}
                className="group flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </div>

        {/* LINE 2: Rightward Auto-Glide */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0 pr-12 sm:pr-16"
            animate={{ x: isHovered ? undefined : ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLine2.map((brand, idx) => (
              <div
                key={`${brand.name}-line2-${idx}`}
                className="group flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default BrandSection;
