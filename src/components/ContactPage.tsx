import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Check,
  Sparkles,
  Clock,
  Copy,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { lenis } from '../lib/lenis';

export interface ContactPageProps {
  onNavigate?: (route: any, targetSection?: string) => void;
  onNavigateHome: (targetSection?: string) => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onNavigateHome,
  onOpenSearch,
  onOpenGetStarted,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: 'SEO & AI Search Optimization',
    budget: '$5K - $15K',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Copy email handler
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('hello@clustercloud.co');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-speed submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const budgetOptions = ['< $5K', '$5K - $15K', '$15K - $50K', '$50K+'];

  const servicesList = [
    'SEO & AI Search Optimization',
    'Paid Advertising (Google & Meta Ads)',
    'High-Converting Web Design & Development',
    'Social Media & Content Engine',
    'Marketing Automation & CRM',
    'Full-Funnel Growth Partner',
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Background Ambient Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-blue-100/60 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 left-[3%] w-[450px] h-[450px] bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-[3%] w-[500px] h-[500px] bg-indigo-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Dotted Texture Accent */}
      <div
        className="absolute top-24 right-10 w-72 h-72 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* ========================================================================= */}
      {/* 1. Universal Header Navigation with "Contact" Active                      */}
      {/* ========================================================================= */}
      <Header
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="contact"
        onNavigate={(route, section) => {
          if (onNavigate) {
            onNavigate(route, section);
            return;
          }
          if (route === 'home') {
            onNavigateHome(section);
          } else {
            lenis.scrollTo(0, { duration: 0.8 });
          }
        }}
      />

      {/* ========================================================================= */}
      {/* 2. Main Contact Section Container                                         */}
      {/* ========================================================================= */}
      <main className="relative z-10 w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 pb-20 sm:pb-28">
        
        {/* Top Breadcrumb Tag */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="h-[2px] w-8 sm:w-10 bg-[#2563EB]" />
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.22em] text-[#2563EB]">
            CONTACT
          </span>
        </div>

        {/* 3-Column Asymmetric Layout (Left Info + Center Visual Pill + Right Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 1 (Left, col-span-12 lg:col-span-4): Contact Info & Channels    */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[50px] font-black text-[#0F172A] tracking-tight leading-[1.08] mb-4">
                Let's turn <br className="hidden sm:inline" />
                <span className="text-[#2563EB]">your ideas</span> <br />
                into impact.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal mb-8 sm:mb-10 max-w-md">
                Have a project in mind or just want to explore opportunities? We'd love to hear from you.
              </p>

              {/* Contact Channels List */}
              <div className="space-y-4 sm:space-y-5">
                
                {/* 1. Email Channel */}
                <div className="group relative flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/70 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                    <Mail size={22} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <a
                      href="mailto:hello@clustercloud.co"
                      className="block text-[15px] sm:text-base font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors truncate"
                    >
                      hello@clustercloud.co
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="self-center p-2 rounded-lg text-slate-400 hover:text-[#2563EB] hover:bg-blue-50/70 transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                  </button>
                  {copiedEmail && (
                    <span className="absolute -top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md animate-in fade-in zoom-in-95">
                      Copied!
                    </span>
                  )}
                </div>

                {/* 2. Phone Channel */}
                <div className="group flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/70 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                    <Phone size={22} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Call
                    </span>
                    <a
                      href="tel:+14375550123"
                      className="block text-[15px] sm:text-base font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      +1 (437) 555-0123
                    </a>
                  </div>
                </div>

                {/* 3. Visit / Headquarters */}
                <div className="group flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/70 hover:border-blue-200 shadow-xs hover:shadow-md transition-all duration-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                    <MapPin size={22} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Visit
                    </span>
                    <span className="block text-[15px] sm:text-base font-bold text-[#0F172A]">
                      Toronto, ON, Canada
                    </span>
                  </div>
                </div>

                {/* 4. Book a Call Channel */}
                <div
                  onClick={onOpenGetStarted}
                  className="group flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/40 hover:from-blue-100/80 hover:to-blue-50 border border-blue-200/70 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-sm">
                    <Calendar size={22} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                      Book a Call
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      Pick a time that works for you
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Tagline & Pillar Marker */}
            <div className="pt-8 sm:pt-10 mt-6 border-t border-slate-200/80 flex items-center gap-3 select-none">
              <span className="text-[#2563EB] font-black text-sm tracking-wider">01</span>
              <span className="h-[1px] w-12 sm:w-16 bg-blue-200" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.24em] text-slate-500">
                IDEAS TODAY. IMPACT TOMORROW.
              </span>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 2 (Center, col-span-12 lg:col-span-4): Visual Pill Showcase     */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-full min-h-[480px] rounded-[36px] sm:rounded-[42px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.12)] group flex flex-col justify-between p-6 sm:p-8">
              
              {/* Architectural Skyline Photo Background */}
              <img
                src="/work/health_glass.jpg"
                alt="Toronto Architecture Headquarters"
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Ambient Glass Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/45 to-slate-900/55 pointer-events-none" />

              {/* Top Row Badges Overlay */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                {/* 01 STRATEGY MEETS EXECUTION */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] shadow-xs select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span>01 STRATEGY MEETS EXECUTION</span>
                </div>

                {/* TORONTO CANADA */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em] shadow-xs select-none">
                  <span className="text-red-400 font-bold text-xs">🍁</span>
                  <span>TORONTO</span>
                </div>
              </div>

              {/* Center / Bottom Editorial Typography Overlay */}
              <div className="relative z-10 mt-auto pt-16">
                <div className="inline-block mb-3 px-3 py-1 rounded-lg bg-blue-600/70 backdrop-blur-sm text-white text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  GROWTH STUDIO
                </div>
                
                <h2 className="text-2xl sm:text-3xl xl:text-[34px] font-black text-white leading-[1.12] tracking-tight mb-4 drop-shadow-md">
                  BETTER IDEAS.<br />
                  <span className="text-blue-300">BRIGHTER</span> TOMORROW.
                </h2>

                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-xs font-normal">
                  Delivering end-to-end digital mastery for ambitious brands worldwide from our Toronto studio.
                </p>

                {/* Status Guarantee Chip */}
                <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-200 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Q2/Q3 Projects</span>
                </div>
              </div>

            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* COLUMN 3 (Right, col-span-12 lg:col-span-4): Send a Message Form       */}
          {/* --------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative w-full rounded-[32px] sm:rounded-[36px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sm:p-8 xl:p-9 text-left">
              
              {/* Form Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#2563EB] mb-1.5">
                  <Sparkles size={14} />
                  <span>SEND A MESSAGE</span>
                </div>
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#0F172A] tracking-tight">
                  Tell us about your project
                </h3>
                <p className="text-slate-500 text-xs sm:text-[13px] mt-1 font-normal">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
              </div>

              {/* Form or Submitted State */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-sm">
                      <CheckCircle2 size={36} strokeWidth={2.4} />
                    </div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-600 max-w-xs mb-6">
                      Thank you for reaching out. Our growth strategy pod has received your message and will contact you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    {/* Full Name & Email side-by-side on sm+ screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name <span className="text-[#2563EB]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email <span className="text-[#2563EB]">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Brand"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* How can we help? Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        How can we help?
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all cursor-pointer"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Estimated Budget Selector Pills */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {budgetOptions.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer text-center select-none ${
                                isSelected
                                  ? 'bg-[#2563EB] text-white shadow-xs border border-[#2563EB]'
                                  : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 border border-slate-200/60'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Message <span className="text-[#2563EB]">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tell us about your project, timeline, and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(37,99,235,0.38)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.5)] transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight
                            size={17}
                            strokeWidth={2.4}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>

                    {/* Response Time Reassurance Note */}
                    <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs font-medium pt-1 text-center">
                      <Clock size={13} className="text-[#2563EB]" />
                      <span>We usually respond within 24 hours</span>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>

              {/* Bottom-Right Decorative Circular Revolving Badge ("LET'S BUILD TOGETHER") */}
              <div className="hidden xl:flex absolute -bottom-14 -right-10 pointer-events-none select-none">
                <div className="relative flex items-center justify-center w-28 h-28">
                  {/* Rotating SVG circular text path */}
                  <svg
                    className="w-full h-full animate-[spin_16s_linear_infinite]"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="contactRevolvingPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[7.2px] font-extrabold uppercase tracking-[0.22em] fill-slate-700">
                      <textPath href="#contactRevolvingPath" startOffset="0%">
                        LET'S BUILD TOGETHER • LET'S BUILD TOGETHER •
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Blue Circle with Arrow */}
                  <div className="absolute inset-0 m-auto flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 text-[#2563EB] border border-blue-100 shadow-md">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* 3. Reassurance & Guarantees Trust Banner                              */}
        {/* ===================================================================== */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Clock size={20} strokeWidth={2.2} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Swift 24h Response</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Direct access to our senior growth architects without layers of sales reps.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Sparkles size={20} strokeWidth={2.2} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Custom Strategy Audit</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Every consultation includes actionable data-driven insights for your industry.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Building2 size={20} strokeWidth={2.2} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Global & Hybrid Reach</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Headquartered in Toronto, serving category leaders across North America and Europe.
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* ========================================================================= */}
      {/* 4. Complete 3D Isometric Footer Component                                 */}
      {/* ========================================================================= */}
      <Footer
        onGetStartedClick={onOpenGetStarted}
        onNavigate={(route, section) => {
          if (onNavigate) {
            onNavigate(route, section);
            return;
          }
          if (route === 'home') {
            onNavigateHome(section);
          } else {
            lenis.scrollTo(0, { duration: 0.8 });
          }
        }}
      />

    </div>
  );
};

export default ContactPage;
