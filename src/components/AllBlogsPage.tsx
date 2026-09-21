import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Filter,
  X,
  BookOpen,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { blogArticles } from '../data/blogArticles';
import { lenis } from '../lib/lenis';

export interface AllBlogsPageProps {
  onNavigate?: (route: any, targetSection?: string) => void;
  onNavigateHome: (targetSection?: string) => void;
  onNavigateContact: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
}

export const AllBlogsPage: React.FC<AllBlogsPageProps> = ({
  onNavigate,
  onNavigateHome,
  onNavigateContact,
  onSelectArticle,
  onOpenSearch,
  onOpenGetStarted,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.5, immediate: true });
  }, []);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: blogArticles.length,
      SEO: 0,
      AI: 0,
      MARKETING: 0,
      GROWTH: 0,
      BUSINESS: 0,
    };
    blogArticles.forEach((art) => {
      if (counts[art.category] !== undefined) {
        counts[art.category]++;
      }
    });

    return [
      { name: 'ALL', count: 150 }, // Total insights count
      { name: 'SEO', count: 42 },
      { name: 'AI', count: 28 },
      { name: 'MARKETING', count: 26 },
      { name: 'GROWTH', count: 32 },
      { name: 'BUSINESS', count: 24 },
    ];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === 'ALL' || article.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tag.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Flagship featured article (first one)
  const featuredArticle = blogArticles[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">

      {/* 1. Universal Top Header */}
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

      {/* 2. Main Page Content */}
      <main className="relative z-10 w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 pt-8 sm:pt-12 pb-24">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-500 mb-8 select-none">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-[#2563EB] font-bold">
            All Blogs & Growth Insights
          </span>
        </nav>

        {/* ===================================================================== */}
        {/* Page Hero: Title + Search & Category Filters                          */}
        {/* ===================================================================== */}
        <div className="relative pb-12 sm:pb-16 border-b border-slate-200/80">

          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>CLUSTER CLOUD INSIGHTS & STRATEGY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5">
              Actionable Playbooks & Strategies for Modern Growth
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              Explore in-depth research, AI search methodologies, high-converting ad frameworks, and digital systems curated by our senior architects.
            </p>
          </div>

          {/* Search Bar & Stats Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">

            {/* Search Input Box */}
            <div className="relative w-full md:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, keyword, or strategy..."
                className="w-full rounded-full bg-white border border-slate-200/90 pl-11 pr-10 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Total Articles Count */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-500">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Showing <strong className="text-slate-900">{filteredArticles.length}</strong> of{' '}
                <strong className="text-slate-900">150+</strong> curated insights
              </span>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-4 mt-6">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer select-none ${isActive
                      ? 'bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* ===================================================================== */}
        {/* Featured Flagship Article (Hero Card)                                 */}
        {/* ===================================================================== */}
        {selectedCategory === 'ALL' && !searchQuery && featuredArticle && (
          <div className="mt-12 sm:mt-16 text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2563EB] mb-3 block">
              FEATURED ANALYSIS
            </span>

            <div
              onClick={() => onSelectArticle(featuredArticle.slug)}
              className="group relative w-full rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/80 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col lg:flex-row cursor-pointer"
            >
              {/* Image Block */}
              <div className="relative w-full lg:w-[58%] min-h-[300px] sm:min-h-[380px] overflow-hidden bg-slate-900">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  <BookOpen size={13} className="text-[#38BDF8]" />
                  <span>Flagship Report</span>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-[42%] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500 mb-3">
                    <span className="text-[#2563EB] font-black uppercase tracking-wider">
                      {featuredArticle.tag}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-tight mb-4 group-hover:text-[#2563EB] transition-colors duration-200">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {featuredArticle.subtitle}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed font-medium mb-6">
                    <span className="font-bold text-slate-900">Key takeaway: </span>
                    {featuredArticle.keyTakeaways[0]}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="h-10 w-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</p>
                      <p className="text-[11px] text-slate-500 font-medium">{featuredArticle.publishedDate}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] text-white px-5 py-2.5 text-xs font-bold shadow-xs group-hover:bg-[#1D4ED8] transition">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* All Articles Grid                                                     */}
        {/* ===================================================================== */}
        <div className="mt-14 sm:mt-18 text-left">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
              {selectedCategory === 'ALL' ? 'All Growth Playbooks' : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs font-bold text-slate-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center rounded-3xl bg-white border border-slate-200/80 p-8">
              <Filter size={36} className="mx-auto text-slate-400 mb-3" />
              <h4 className="text-lg font-bold text-slate-800 mb-1">No articles found</h4>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                We couldn't find any articles matching your search query "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
                className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold hover:bg-[#1D4ED8] transition cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              {filteredArticles.map((art) => (
                <div
                  key={art.slug}
                  onClick={() => onSelectArticle(art.slug)}
                  className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 hover:border-blue-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Cover Thumbnail */}
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100">
                      <img
                        src={art.coverImage}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-[#2563EB] shadow-xs">
                          {art.tag}
                        </span>
                      </div>
                    </div>

                    {/* Article Details */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {art.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {art.publishedDate}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors duration-200 line-clamp-2">
                        {art.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-3 mb-4">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Row */}
                  <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={art.author.avatar}
                        alt={art.author.name}
                        className="h-7 w-7 rounded-full object-cover border border-slate-200"
                      />
                      <span className="text-xs font-semibold text-slate-700">{art.author.name}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform duration-200">
                      <span>Read More</span>
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===================================================================== */}
        {/* Weekly Growth Blueprint Newsletter Box                                */}
        {/* ===================================================================== */}
        <div className="mt-20 sm:mt-28 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-8 sm:p-14 text-center text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

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
                placeholder="Enter your email"
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

export default AllBlogsPage;
