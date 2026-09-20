import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Check,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Copy,
  BookOpen,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { type BlogArticle, blogArticles } from '../data/blogArticles';
import { lenis } from '../lib/lenis';

const LinkedInIcon = ({ size = 15, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
  </svg>
);

const XTwitterIcon = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface SingleBlogPageProps {
  articleSlug?: string;
  onNavigate?: (route: any, targetSection?: string) => void;
  onNavigateHome: (targetSection?: string) => void;
  onNavigateContact: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
}

export const SingleBlogPage: React.FC<SingleBlogPageProps> = ({
  articleSlug = 'how-ai-search-is-changing-seo-forever',
  onNavigate,
  onNavigateHome,
  onNavigateContact,
  onSelectArticle,
  onOpenSearch,
  onOpenGetStarted,
}) => {
  // Find current article or fallback to flagship
  const article: BlogArticle =
    blogArticles.find((a) => a.slug === articleSlug) || blogArticles[0];

  const [readingProgress, setReadingProgress] = useState(0);
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.5, immediate: true });
  }, [articleSlug]);

  // Track Reading Progress Bar & Active Heading in Viewport
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check which section heading is currently active
      const headings = article.tableOfContents.map((toc) => document.getElementById(toc.id));
      const scrollPos = window.scrollY + 180;

      for (let i = headings.length - 1; i >= 0; i--) {
        const h = headings[i];
        if (h && h.offsetTop <= scrollPos) {
          setActiveTocId(article.tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  const handleTocClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      lenis.scrollTo(el, { offset: -100, duration: 1 });
    }
  };

  // Find Next and Previous articles
  const currentIndex = blogArticles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;

  // Filter 3 related articles
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => setNewsletterSubmitted(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* 0. Top Reading Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#1D4ED8] z-70 transition-all duration-150 ease-out shadow-xs"
        style={{ width: `${readingProgress}%` }}
      />

      {/* 1. Header Component */}
      <Header
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="blog"
        onNavigate={(route, section) => {
          if (onNavigate) {
            onNavigate(route, section);
            return;
          }
          if (route === 'contact') {
            onNavigateContact();
          } else {
            onNavigateHome(section);
          }
        }}
      />

      {/* 2. Main Article Container */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 pb-24">
        
        {/* Breadcrumbs Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-500 mb-6 sm:mb-8 select-none">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <button
            type="button"
            onClick={() => onNavigateHome('insights')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Insights
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-[#2563EB] font-bold truncate max-w-[200px] sm:max-w-xs">
            {article.tag}
          </span>
        </nav>

        {/* Back to Insights button */}
        <button
          type="button"
          onClick={() => onNavigateHome('insights')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#2563EB] transition-colors mb-6 cursor-pointer group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to all insights</span>
        </button>

        {/* ===================================================================== */}
        {/* Article Header & Metadata                                             */}
        {/* ===================================================================== */}
        <header className="max-w-4xl text-left mb-10 sm:mb-14">
          
          {/* Category Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#2563EB] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] mb-4 shadow-2xs">
            <Sparkles size={13} />
            <span>{article.tag}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5">
            {article.title}
            <span className="text-[#2563EB]">.</span>
          </h1>

          {/* Subtitle / Executive Summary */}
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8">
            {article.subtitle}
          </p>

          {/* Author & Meta Bar */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-6">
            
            {/* Author Profile */}
            <div className="flex items-center gap-3.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100 shadow-sm"
              />
              <div>
                <span className="block text-sm sm:text-base font-bold text-[#0F172A] leading-tight">
                  {article.author.name}
                </span>
                <span className="block text-xs text-slate-500 font-medium leading-tight mt-0.5">
                  {article.author.role}
                </span>
              </div>
            </div>

            {/* Published Date & Read Time */}
            <div className="flex items-center gap-5 text-xs sm:text-[13px] font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-[#2563EB]" />
                <span>{article.publishedDate}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} className="text-[#2563EB]" />
                <span>{article.readTime}</span>
              </span>
            </div>

            {/* Social Share Bar */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="relative flex h-9 items-center gap-1.5 px-3 rounded-full border border-slate-200 bg-white hover:border-blue-300 text-slate-700 hover:text-[#2563EB] text-xs font-bold transition cursor-pointer shadow-2xs"
                title="Copy Link"
              >
                {copiedLink ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copiedLink ? 'Copied!' : 'Share'}</span>
              </button>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-200 text-slate-600 hover:text-[#2563EB] transition cursor-pointer shadow-2xs"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-200 text-slate-600 hover:text-[#2563EB] transition cursor-pointer shadow-2xs"
                aria-label="Share on X"
              >
                <XTwitterIcon size={14} />
              </a>
            </div>

          </div>

        </header>

        {/* ===================================================================== */}
        {/* Full-Width Hero Cover Image                                           */}
        {/* ===================================================================== */}
        <div className="relative w-full h-[320px] sm:h-[440px] md:h-[540px] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-200/90 shadow-2xl mb-12 sm:mb-16 bg-slate-900 group">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

          {/* Floating Editorial Stamp at Bottom-Left */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
              CLUSTER CLOUD RESEARCH REPORT
            </span>
            <p className="text-white/90 text-xs sm:text-sm font-semibold max-w-md drop-shadow-sm">
              Verified Playbook • Benchmarked Across 300+ Enterprise Deployments
            </p>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 2-Column Editorial Grid: Left Sticky TOC + Right Article Content       */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start text-left">
          
          {/* ------------------------------------------------------------------- */}
          {/* Left Column: Sticky TOC, Author Widget, Quick CTA                   */}
          {/* ------------------------------------------------------------------- */}
          <aside className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28 space-y-8 order-2 lg:order-1">
            
            {/* Table of Contents Card */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                <BookOpen size={16} className="text-[#2563EB]" />
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0F172A]">
                  TABLE OF CONTENTS
                </h3>
              </div>

              <nav className="space-y-2.5">
                {article.tableOfContents.map((toc) => {
                  const isActive = activeTocId === toc.id;
                  return (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      onClick={(e) => handleTocClick(toc.id, e)}
                      className={`block text-[13.5px] py-1 transition-all duration-150 leading-snug cursor-pointer ${
                        isActive
                          ? 'font-bold text-[#2563EB] translate-x-1.5'
                          : 'font-medium text-slate-600 hover:text-[#2563EB]'
                      }`}
                    >
                      {toc.title}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Author Card Widget */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-4 block">
                WRITTEN BY
              </span>
              <div className="flex items-center gap-3.5 mb-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{article.author.name}</h4>
                  <p className="text-xs text-slate-500">{article.author.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Specializing in AI search optimization, algorithmic customer acquisition, and enterprise digital scalability.
              </p>
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#2563EB] text-xs font-bold transition cursor-pointer"
              >
                <span>Consult With Author</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Mini Growth Audit CTA */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 sm:p-7 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-blue-400 mb-2 block">
                GROWTH AUDIT
              </span>
              <h4 className="text-lg font-bold leading-tight mb-2">
                Need Help Executing This Strategy?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Our growth engineering pods audit your digital presence and provide a 90-day actionable roadmap.
              </p>
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] py-3 text-xs font-bold text-white shadow-md transition cursor-pointer"
              >
                <span>Request Free Audit</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </aside>

          {/* ------------------------------------------------------------------- */}
          {/* Right Column: Main Editorial Content                                */}
          {/* ------------------------------------------------------------------- */}
          <article className="lg:col-span-8 xl:col-span-8 order-1 lg:order-2">
            
            {/* Key Strategic Takeaways Highlight Box */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-blue-50/30 border-l-4 border-[#2563EB] p-6 sm:p-8 shadow-xs mb-10 sm:mb-12">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-[#2563EB]" />
                <h3 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#2563EB]">
                  KEY STRATEGIC TAKEAWAYS
                </h3>
              </div>
              <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-slate-800">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intro Paragraphs */}
            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-[1.8] space-y-6 mb-12">
              {article.content.intro.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Editorial Body Sections */}
            <div className="space-y-12 sm:space-y-16">
              {article.content.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  
                  {/* Section Title */}
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-snug mb-5 pb-2 border-b border-slate-100">
                    {section.title}
                  </h2>

                  {/* Section Paragraphs */}
                  <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-[17px] leading-[1.8] space-y-5">
                    {section.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Highlight Quote Box */}
                  {section.highlight && (
                    <div className="my-8 rounded-2xl bg-white border-l-4 border-slate-900 p-5 sm:p-6 shadow-xs">
                      <p className="text-base sm:text-lg font-bold text-slate-900 italic leading-relaxed">
                        "{section.highlight}"
                      </p>
                    </div>
                  )}

                  {/* Comparison Table (if present) */}
                  {section.tableData && (
                    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-extrabold">
                          <tr>
                            {section.tableData.headers.map((h, i) => (
                              <th key={i} className="p-3.5 sm:p-4 whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-blue-50/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3.5 sm:p-4 font-medium leading-relaxed">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* JSON-LD / Code Block (if present) */}
                  {section.codeSnippet && (
                    <div className="my-8 rounded-2xl bg-slate-900 text-slate-200 p-5 sm:p-6 shadow-md overflow-x-auto">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <span>Schema Markup Architecture (JSON-LD)</span>
                        <span>Copy</span>
                      </div>
                      <pre className="font-mono text-xs sm:text-sm leading-relaxed text-blue-300">
                        <code>{section.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                </section>
              ))}
            </div>

            {/* In-Article Conversion Banner */}
            <div className="my-12 sm:my-16 rounded-3xl bg-gradient-to-r from-blue-600 to-[#1D4ED8] p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-200 mb-1 block">
                  ACTIONABLE IMPLEMENTATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight mb-2">
                  Ready to deploy these insights into your business?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Partner with Cluster Cloud to execute data-driven SEO, AI automation, and high-conversion marketing.
                </p>
              </div>
              <button
                type="button"
                onClick={onNavigateContact}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-[#2563EB] hover:bg-blue-50 px-7 py-3.5 text-sm font-bold shadow-lg transition cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Conclusion */}
            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-[1.8] pt-6 border-t border-slate-200">
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-4">Final Verdict</h3>
              <p>{article.content.conclusion}</p>
            </div>

            {/* Bottom Sharing & Tags Row */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">TAGS:</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  #{article.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  #GROWTH2026
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  #STRATEGY
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">SHARE:</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex h-9 items-center gap-1.5 px-3.5 rounded-full border border-slate-200 bg-white hover:border-blue-300 text-slate-700 hover:text-[#2563EB] text-xs font-bold transition cursor-pointer"
                >
                  {copiedLink ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
                </button>
              </div>
            </div>

            {/* Next / Previous Article Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-10 border-t border-slate-200">
              {prevArticle ? (
                <button
                  type="button"
                  onClick={() => onSelectArticle(prevArticle.slug)}
                  className="group flex flex-col p-5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-200 text-left transition-all cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
                    Previous Article
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] line-clamp-1">
                    {prevArticle.title}
                  </span>
                </button>
              ) : <div />}

              {nextArticle ? (
                <button
                  type="button"
                  onClick={() => onSelectArticle(nextArticle.slug)}
                  className="group flex flex-col p-5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-200 text-right transition-all cursor-pointer ml-auto w-full sm:w-auto"
                >
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-end gap-1">
                    Next Article
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] line-clamp-1">
                    {nextArticle.title}
                  </span>
                </button>
              ) : <div />}
            </div>

          </article>

        </div>

        {/* ===================================================================== */}
        {/* Related Articles Section                                              */}
        {/* ===================================================================== */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-slate-200 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2563EB] block mb-1.5">
                CONTINUE READING
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                Related Growth Insights
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateHome('insights')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:underline cursor-pointer"
            >
              <span>Explore all articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onSelectArticle(rel.slug)}
                className="group flex flex-col justify-between p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-200 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer text-left"
              >
                <div>
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-[#2563EB] mb-1.5 block">
                    {rel.tag}
                  </span>
                  <h4 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors line-clamp-2 leading-snug mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* Weekly Growth Newsletter Capture Box                                  */}
        {/* ===================================================================== */}
        <div className="mt-16 sm:mt-20 rounded-[32px] bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute -top-20 -left-20 w-52 h-52 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            WEEKLY GROWTH BLUEPRINT
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
            Get actionable marketing playbooks every Thursday
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-7 leading-relaxed font-normal">
            Join 3,000+ ambitious founders, CMOs, and operators who receive our breakdown of algorithm shifts, AI playbooks, and conversion engineering.
          </p>

          {newsletterSubmitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-bold">
              <CheckCircle2 size={18} />
              <span>You are on the VIP growth list! Watch your inbox this Thursday.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full sm:flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-3 text-sm font-bold text-white shadow-md transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </main>

      {/* 3. Universal Footer Component */}
      <Footer
        onGetStartedClick={onOpenGetStarted}
        onNavigate={(route, section) => {
          if (onNavigate) {
            onNavigate(route, section);
            return;
          }
          if (route === 'contact') {
            onNavigateContact();
          } else {
            onNavigateHome(section);
          }
        }}
      />

    </div>
  );
};

export default SingleBlogPage;
