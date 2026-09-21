import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { lenis } from '../lib/lenis';

export interface FooterProps {
  onGetStartedClick?: () => void;
  onNavigate?: (route: 'home' | 'contact' | 'blog' | 'allblogs' | 'services', targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetStartedClick, onNavigate }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '/contact' || href === '#contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        window.location.href = '/contact';
      }
      return;
    }

    if (href === '#home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        lenis.scrollTo(0, { duration: 1.2 });
      }
    } else {
      const sectionName = href.replace('#', '');
      if (onNavigate) {
        onNavigate('home', sectionName);
      } else {
        const el = document.querySelector(href);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
        }
      }
    }
  };

  return (
    <footer className="relative w-full bg-white overflow-hidden border-t border-slate-100 pt-16 pb-10">

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* ========================================================================= */}
        {/* Top Main Grid: Left Column, Center 3D Isometric Art, Right Column          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center pb-16"
        >

          {/* ----------------------------------------------------------------------- */}
          {/* 1. Left Side: Brand Logo, Slogan, Taglines, Pillar Marker               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-3.5 group select-none text-decoration-none mb-6"
            >
              <div className="relative flex items-center justify-center h-12 w-12 shrink-0 drop-shadow-xs">
                <img
                  src="/logo-icon.png"
                  alt="Cluster Cloud"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[23px] font-extrabold leading-none tracking-tight text-[#0F172A]">
                  Cluster <span className="text-[#2563EB]">Cloud</span>
                </span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B] leading-none whitespace-nowrap">
                  GROWTH &amp; MARKETING STUDIO
                </span>
              </div>
            </a>

            {/* Tagline text from screenshot */}
            <div className="text-slate-500 text-[14.5px] leading-relaxed mb-10 max-w-xs font-normal">
              <p>Strategy. Content. Automation.</p>
              <p>Real Growth.</p>
            </div>

            {/* Pillar Marker: 01 ── BUILDING BRANDS THAT LAST */}
            <div className="flex items-center gap-4">
              <span className="text-[#2563EB] font-bold text-sm tracking-wide">01</span>
              <span className="h-[1px] w-20 sm:w-24 bg-blue-200" />
              <div className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 leading-tight">
                <p>BUILDING BRANDS</p>
                <p>THAT LAST</p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 2. Center: 3D Isometric Translucent Glass Stack + Flowing Curves         */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative select-none">

            {/* Top Text: IDEAS TO IMPACT */}
            <div className="text-center mb-1">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-slate-400 leading-tight">
                IDEAS<br />TO<br />IMPACT
              </p>
            </div>

            {/* 3D Isometric Stack Canvas */}
            <div className="relative w-full max-w-[380px] h-[260px] flex items-center justify-center">
              <svg
                viewBox="0 0 500 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Glowing Core Radial Gradients */}
                  <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
                    <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.65" />
                    <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="ambientPedestalGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </radialGradient>

                  {/* Translucent Glass Layer Gradients */}
                  <linearGradient id="glassLayerTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#F1F5F9" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.45" />
                  </linearGradient>

                  <linearGradient id="glassLayerMid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#EFF6FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.4" />
                  </linearGradient>

                  <linearGradient id="blueGlassLayer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.95" />
                  </linearGradient>

                  {/* Pedestal Side Shading */}
                  <linearGradient id="pedestalLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>
                  <linearGradient id="pedestalRight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EDF2F7" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </linearGradient>

                  {/* Filter Blur for ambient floor shadow */}
                  <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                </defs>

                {/* ------------------------------------------------------------- */}
                {/* 1. Sinuous Flowing Wave Lines Extending Left & Right           */}
                {/* ------------------------------------------------------------- */}
                {/* Left flowing curve */}
                <path
                  d="M 220 185 C 160 170 120 220 50 215 C 10 212 -40 230 -110 240"
                  stroke="#BFDBFE"
                  strokeWidth="1.6"
                  strokeDasharray="none"
                  fill="none"
                  opacity="0.85"
                />
                {/* Left Node Dot */}
                <circle cx="95" cy="208" r="3.5" fill="#3B82F6" />
                <circle cx="95" cy="208" r="7" fill="#3B82F6" opacity="0.25" />

                {/* Right flowing curve */}
                <path
                  d="M 280 185 C 340 170 380 220 450 215 C 490 212 540 230 610 240"
                  stroke="#BFDBFE"
                  strokeWidth="1.6"
                  strokeDasharray="none"
                  fill="none"
                  opacity="0.85"
                />
                {/* Right Node Dot */}
                <circle cx="405" cy="208" r="3.5" fill="#3B82F6" />
                <circle cx="405" cy="208" r="7" fill="#3B82F6" opacity="0.25" />

                {/* ------------------------------------------------------------- */}
                {/* 2. Ambient Shadow & Base Pedestal Glow                         */}
                {/* ------------------------------------------------------------- */}
                <ellipse cx="250" cy="285" rx="140" ry="42" fill="#E2E8F0" opacity="0.6" filter="url(#softBlur)" />
                <ellipse cx="250" cy="260" rx="95" ry="32" fill="url(#ambientPedestalGlow)" />

                {/* ------------------------------------------------------------- */}
                {/* 3. Solid 3D Base Pedestal Platform                            */}
                {/* ------------------------------------------------------------- */}
                {/* Left Side Extrusion */}
                <path
                  d="M 155 242 L 250 278 L 250 302 L 155 266 Z"
                  fill="url(#pedestalLeft)"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                />
                {/* Right Side Extrusion */}
                <path
                  d="M 250 278 L 345 242 L 345 266 L 250 302 Z"
                  fill="url(#pedestalRight)"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                {/* Pedestal Top Face */}
                <path
                  d="M 250 206 L 345 242 L 250 278 L 155 242 Z"
                  fill="#FFFFFF"
                  stroke="#E2E8F0"
                  strokeWidth="1.2"
                />

                {/* Intense Blue Core Light Source on Top of Pedestal */}
                <ellipse cx="250" cy="242" rx="55" ry="22" fill="url(#centerCoreGlow)" />

                {/* ------------------------------------------------------------- */}
                {/* 4. Tier 4: Vibrant Blue Translucent Glowing Glass Plate        */}
                {/* ------------------------------------------------------------- */}
                <path
                  d="M 250 178 L 330 210 L 250 242 L 170 210 Z"
                  fill="url(#blueGlassLayer)"
                  stroke="#93C5FD"
                  strokeWidth="1.2"
                  opacity="0.88"
                />

                {/* ------------------------------------------------------------- */}
                {/* 5. Tier 3: Frosted Translucent Glass Plate                     */}
                {/* ------------------------------------------------------------- */}
                <path
                  d="M 250 146 L 330 178 L 250 210 L 170 178 Z"
                  fill="url(#glassLayerMid)"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                  opacity="0.85"
                />

                {/* ------------------------------------------------------------- */}
                {/* 6. Tier 2: Frosted Translucent Glass Plate                     */}
                {/* ------------------------------------------------------------- */}
                <path
                  d="M 250 114 L 330 146 L 250 178 L 170 146 Z"
                  fill="url(#glassLayerMid)"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  opacity="0.9"
                />

                {/* ------------------------------------------------------------- */}
                {/* 7. Tier 1: Top Frosted Translucent Glass Plate                 */}
                {/* ------------------------------------------------------------- */}
                <path
                  d="M 250 82 L 330 114 L 250 146 L 170 114 Z"
                  fill="url(#glassLayerTop)"
                  stroke="#F1F5F9"
                  strokeWidth="1.2"
                  opacity="0.95"
                />

                {/* ------------------------------------------------------------- */}
                {/* 8. Vertical Data Connector with Glowing Nodes                 */}
                {/* ------------------------------------------------------------- */}
                <line x1="250" y1="12" x2="250" y2="82" stroke="#93C5FD" strokeWidth="1.5" />
                {/* Top Node */}
                <circle cx="250" cy="18" r="3" fill="#3B82F6" />
                <circle cx="250" cy="18" r="6" fill="#3B82F6" opacity="0.3" />
                {/* Mid Node */}
                <circle cx="250" cy="46" r="3" fill="#2563EB" />
                <circle cx="250" cy="46" r="6.5" fill="#2563EB" opacity="0.3" />
              </svg>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* 3. Right Side: Navigation Links, Circular CTA Button, Social Icons      */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full">

            {/* Top Navigation Links Row */}
            <div className="flex flex-wrap items-center gap-7 sm:gap-9 mb-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[14.5px] font-semibold text-slate-800 hover:text-[#2563EB] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Circular CTA Button + "LET'S BUILD TOGETHER" */}
            <div className="flex items-center gap-4 mb-10">
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                  } else if (onGetStartedClick) {
                    onGetStartedClick();
                  }
                }}
                className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-50/90 hover:bg-blue-100/90 border border-blue-100 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.18)] hover:shadow-[0_12px_30px_-4px_rgba(37,99,235,0.28)] transition-all duration-300 cursor-pointer"
                title="Let's Build Together"
                aria-label="Let's Build Together"
              >
                <ArrowRight
                  size={20}
                  strokeWidth={2.4}
                  className="text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-700 leading-tight text-left">
                <p>LET&apos;S</p>
                <p>BUILD</p>
                <p>TOGETHER</p>
              </div>
            </div>

            {/* Social Icons Row (Pixel-perfect matching screenshot) */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 hover:bg-blue-50 border border-slate-200/60 text-slate-600 hover:text-[#2563EB] hover:border-blue-200 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 hover:bg-blue-50 border border-slate-200/60 text-slate-600 hover:text-[#2563EB] hover:border-blue-200 transition-all duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 hover:bg-blue-50 border border-slate-200/60 text-slate-600 hover:text-[#2563EB] hover:border-blue-200 transition-all duration-200 cursor-pointer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 hover:bg-blue-50 border border-slate-200/60 text-slate-600 hover:text-[#2563EB] hover:border-blue-200 transition-all duration-200 cursor-pointer"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>

        </motion.div>

        {/* ========================================================================= */}
        {/* Bottom Bar: Copyright & Slogan Ribbon                                     */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-100/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs sm:text-[13px] font-medium">
            &copy; 2026 Cluster Cloud. All rights reserved.
          </p>

          <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-400">
            GROW &nbsp;/&nbsp; AUTOMATE &nbsp;/&nbsp; SCALE &nbsp;/&nbsp; TOGETHER
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
