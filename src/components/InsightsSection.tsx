import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, X, Clock, BookOpen, Share2, Check } from 'lucide-react';
import { blogArticles, BLOG_CATEGORIES, type BlogCategory } from '../data/blogArticles';

export interface InsightArticle {
  id: string;
  slug: string;
  category: BlogCategory;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  content?: string;
  keyTakeaways?: string[];
}

export interface InsightsSectionProps {
  onSelectArticle?: (slug: string) => void;
  onViewAllBlogs?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle, onViewAllBlogs }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Single source of truth: the real blog articles, mapped to this section's shape.
  const articles: InsightArticle[] = blogArticles.map((a) => ({
    id: a.slug,
    slug: a.slug,
    category: a.category,
    tag: a.tag,
    title: a.title,
    excerpt: a.excerpt,
    readTime: a.readTime,
    image: a.coverImage,
    keyTakeaways: a.keyTakeaways,
  }));

  const featuredArticle: InsightArticle | undefined = articles[0];

  const categories = [
    { name: 'ALL', count: articles.length },
    ...BLOG_CATEGORIES.map((c) => ({
      name: c,
      count: articles.filter((a) => a.category === c).length,
    })),
  ];  // Filtered articles based on selected category
  const filteredArticles =
    selectedCategory === 'ALL'
      ? articles
      : articles.filter((a) => a.category === selectedCategory || a.tag.includes(selectedCategory));

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 overflow-hidden text-[#0F172A] border-t border-slate-100">

      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* ========================================================================= */}
        {/* 1. Top Section Header (Headline + Handwritten Doodle + Stats)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between pb-10 sm:pb-12">

          {/* Left: Indicator & Headline */}
          <div className="lg:col-span-6 text-left">
            {/* Top Indicator: INSIGHTS ── */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11.5px] sm:text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F172A]">
                INSIGHTS
              </span>
              <span className="h-[2px] w-12 bg-blue-300 rounded-full" />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-[#0F172A] tracking-tight leading-[1.05]">
              Ideas that <br />
              drive real growth<span className="text-[#2563EB]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Actionable insights, proven strategies, and fresh perspectives on SEO, AI, marketing, and business growth.
            </p>
          </div>

          {/* Center: Whimsical Handwritten Callout ("Learn Apply Grow" + Arrow) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center select-none pointer-events-none self-center pt-2">
            <div
              className="text-[#334155] text-2xl font-bold leading-tight text-center tracking-wide"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              Learn<br />
              Apply<br />
              Grow
            </div>
            {/* Sinuous Curved Arrow pointing down toward featured card */}
            <svg width="40" height="46" viewBox="0 0 42 50" fill="none" className="mt-1 ml-4">
              <path
                d="M 10 4 C 28 14 34 28 16 42"
                stroke="#334155"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 12 34 L 16 42 L 25 40"
                stroke="#334155"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Right: Articles & Category Count Stats */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center self-start lg:self-center">
            <div className="flex items-center gap-6 sm:gap-8">
              <div>
                <span className="block text-3xl sm:text-4xl lg:text-[42px] font-black text-[#2563EB] tracking-tight leading-none">
                  {articles.length}
                </span>
                <span className="mt-1.5 block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  ARTICLES
                </span>
              </div>

              {/* Vertical divider */}
              <div className="h-10 sm:h-12 w-[1px] bg-slate-200" />

              <div>
                <span className="block text-3xl sm:text-4xl lg:text-[42px] font-black text-[#2563EB] tracking-tight leading-none">
                  {categories.filter((c) => c.name !== 'ALL' && c.count > 0).length}
                </span>
                <span className="mt-1.5 block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  TOPIC CATEGORIES
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-[13px] text-slate-500 font-medium tracking-tight">
              Practical knowledge for ambitious brands.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. Middle Featured Article Row & Category Filter List                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch mt-4 sm:mt-6">

          {/* A. Featured Article Card (Left/Center, col-span-12 lg:col-span-8 xl:col-span-9) */}
          {featuredArticle && (
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
              <div className="relative w-full rounded-[28px] sm:rounded-[36px] border border-slate-200/80 bg-white overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col md:flex-row items-stretch group">

                {/* Left Architectural Brand Block with Typography */}
                <div className="relative w-full md:w-[55%] min-h-[280px] sm:min-h-[320px] md:min-h-[360px] overflow-hidden bg-slate-100 flex flex-col justify-between p-6 sm:p-8">
                  {/* Background Architectural Image */}
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Soft Gradient Overlay on Left Side for Typography Clarity */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-100/90 via-slate-100/40 to-transparent pointer-events-none" />

                  {/* Top-Left Category Words Stack */}
                  <div className="relative z-10 text-left select-none">
                    <div className="space-y-1 sm:space-y-1.5 text-[10.5px] sm:text-[11.5px] font-bold text-slate-700 tracking-[0.24em] uppercase">
                      <p>S T R A T E G Y</p>
                      <p>M A R K E T I N G</p>
                      <p>T E C H N O L O G Y</p>
                      <p>G R O W T H</p>
                    </div>
                  </div>

                  {/* Bottom-Left Tagline */}
                  <div className="relative z-10 text-left select-none mt-auto pt-10">
                    <p className="text-[12px] sm:text-[13px] font-semibold text-slate-700 leading-snug max-w-[160px]">
                      A smarter tomorrow for bolder brands.
                    </p>
                  </div>
                </div>

                {/* Right Featured Article Details & Call to Action */}
                <div className="w-full md:w-[45%] p-6 sm:p-8 xl:p-10 flex flex-col justify-center text-left bg-white">
                  <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#2563EB] mb-2.5 block">
                    FEATURED ARTICLE
                  </span>

                  <h3 className="text-2xl sm:text-[26px] xl:text-[28px] font-black text-[#0F172A] tracking-tight leading-[1.18] mb-3 group-hover:text-[#2563EB] transition-colors duration-200">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-slate-600 text-[13.5px] sm:text-[14.5px] leading-relaxed font-normal mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectArticle) {
                          onSelectArticle(featuredArticle.slug);
                        } else {
                          setActiveArticle(featuredArticle);
                        }
                      }}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-3 text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_28px_rgba(37,99,235,0.45)] transition-all duration-200 cursor-pointer"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* B. Category Filter List (Right, col-span-12 lg:col-span-4 xl:col-span-3) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 xl:pl-10">
            <div className="space-y-1.5 w-full text-left">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.name;

                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-5 py-2.5 rounded-full text-[13.5px] font-extrabold transition-all duration-200 cursor-pointer select-none ${isActive
                      ? 'bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]'
                      : 'text-slate-700 hover:text-[#2563EB] hover:bg-slate-100/70'
                      }`}
                  >
                    <span className="tracking-wide uppercase">{cat.name}</span>
                    <span
                      className={`text-xs font-semibold ${isActive ? 'text-white/90' : 'text-slate-400'
                        }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. Bottom 4-Card Article Grid                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-12 sm:mt-16">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col justify-between text-left cursor-pointer"
              onClick={() => {
                if (onSelectArticle) {
                  onSelectArticle(article.slug);
                } else {
                  setActiveArticle(article);
                }
              }}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 shadow-2xs group-hover:shadow-md transition-all duration-300">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Tag */}
                <span className="block mt-4 mb-2 text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
                  {article.tag}
                </span>

                {/* Title */}
                <h4 className="text-base sm:text-[17px] font-extrabold text-[#0F172A] tracking-tight leading-snug mb-2 group-hover:text-[#2563EB] transition-colors duration-200">
                  {article.title}
                </h4>

                {/* Excerpt */}
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Action Row: Read More + (→) */}
              <div className="flex items-center justify-between pt-3 border-t border-transparent group-hover:border-slate-100 transition-colors">
                <span className="text-xs sm:text-[13px] font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  Read More
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                  <ArrowRight size={14} strokeWidth={2.4} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3b. View All Blogs CTA Button (Center-Aligned)                           */}
        {/* ========================================================================= */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <motion.button
            type="button"
            onClick={() => onViewAllBlogs && onViewAllBlogs()}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 py-4 text-[14px] font-extrabold tracking-wide shadow-[0_8px_28px_rgba(15,23,42,0.18)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.26)] transition-all duration-300 cursor-pointer"
          >
            <span>View All Blogs & Insights</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#2563EB] transition-colors duration-200">
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </motion.button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. Interactive Article Reader Modal Dialog                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeArticle && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[11px] font-bold uppercase tracking-wider mb-2">
                    {activeArticle.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {activeArticle.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {activeArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={13} />
                      Cluster Cloud Research
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cover Image */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden my-6 bg-slate-100">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                {activeArticle.content ? (
                  activeArticle.content
                    .split('\n\n')
                    .map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{activeArticle.excerpt}</p>
                )}
              </div>

              {/* Key Takeaways */}
              {activeArticle.keyTakeaways && (
                <div className="my-6 p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2.5">
                    KEY STRATEGIC TAKEAWAYS
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13.5px] text-slate-700">
                    {activeArticle.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={14} />
                      <span>Share Insight</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  {onSelectArticle && (
                    <button
                      type="button"
                      onClick={() => {
                        const slug = activeArticle.slug;
                        setActiveArticle(null);
                        onSelectArticle(slug);
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition cursor-pointer"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} />
                    </button>
                  )}
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2.5 text-xs font-bold transition"
                  >
                    <span>Apply Strategy</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default InsightsSection;
