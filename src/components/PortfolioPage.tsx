import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    Sparkles,
    TrendingUp,
    BarChart2,
    Layers,
    Smartphone,
    Gamepad2,
    Cloud,
    Globe,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { caseStudiesData } from '../data/caseStudies';
import marketingCaseStudies from '../data/helloToMarketingCaseStudies.json';
import swiftOutletProducts from '../data/swiftOutletProducts.json';
import webProjectsJson from '../data/webProjects.json';
import { lenis } from '../lib/lenis';

interface MarketingResult {
    label: string;
    value: string;
}

interface MarketingCaseStudy {
    title: string;
    slug: string;
    industry: string;
    client: string;
    excerpt: string;
    link: string;
    image: string;
    results: MarketingResult[];
}

const marketingStudies = marketingCaseStudies as MarketingCaseStudy[];

interface SwiftProduct {
    title: string;
    slug: string;
    kind: 'App' | 'Game' | 'SaaS';
    niche: string;
    tag: string;
    excerpt: string;
    image: string;
    emoji: string;
    accent: string;
    link: string;
}

const swiftProducts = swiftOutletProducts as SwiftProduct[];
const PRODUCT_FILTERS = ['APPS', 'GAMES', 'SAAS'];

interface WebResult {
    label: string;
    value: string;
}

interface WebProject {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    image: string;
    caseStudySlug?: string;
    results: WebResult[];
}

const webProjects = webProjectsJson as WebProject[];

export interface PortfolioPageProps {
    onNavigate?: (route: any, targetSection?: string) => void;
    onNavigateHome: (targetSection?: string) => void;
    onNavigateContact: () => void;
    onViewCaseStudy?: (slug: string) => void;
    onOpenSearch?: () => void;
    onOpenGetStarted?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
    onNavigate,
    onNavigateHome,
    onNavigateContact,
    onViewCaseStudy,
    onOpenSearch,
    onOpenGetStarted,
}) => {
    const [activeFilter, setActiveFilter] = useState<string>('ALL');

    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { duration: 0.5, immediate: true });
    }, []);

    const filters = useMemo(
        () => ['ALL', 'WEB DEVELOPMENT', 'APPS', 'GAMES', 'SAAS', 'SEO & ADS', 'E-COMMERCE', 'LEAD GEN'],
        [],
    );

    // Classify each case study into the active filter bucket.
    // SEO & ADS  -> paid search / social / SEO style performance campaigns
    // E-COMMERCE -> online stores, retail & shopping campaigns
    // LEAD GEN   -> lead, demo, registration & enquiry campaigns
    const matchesFilter = useCallback(
        (text: string) => {
            if (activeFilter === 'ALL') return true;
            // App / Game / SaaS filters belong to the SwiftOutlet products block only,
            // so they never match the marketing or featured case studies.
            if (PRODUCT_FILTERS.includes(activeFilter)) return false;
            // The web-development filter drives its own dedicated section only.
            if (activeFilter === 'WEB DEVELOPMENT') return false;
            const matchers: Record<string, RegExp> = {
                'SEO & ADS':
                    /google|meta|ads|search|shopping|pmax|pay-per-click|\bppc\b|\bseo\b|roas|\bcpc\b|\bctr\b|clicks?/i,
                'E-COMMERCE': /e-?commerce|retail|shopping|\bstore\b|products?/i,
                'LEAD GEN':
                    /lead|registration|sign-?up|demo|cost-per|conversions?|enquir|inquir|claim/i,
            };
            const rx = matchers[activeFilter];
            return rx ? rx.test(text) : true;
        },
        [activeFilter],
    );

    const filteredCaseStudies = useMemo(
        () => caseStudiesData.filter((s) => matchesFilter(`${s.category} ${s.client} ${s.desc}`)),
        [matchesFilter],
    );

    const filteredMarketingStudies = useMemo(
        () => marketingStudies.filter((s) => matchesFilter(`${s.industry} ${s.title} ${s.excerpt}`)),
        [matchesFilter],
    );

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'ALL') return swiftProducts;
        const kindByFilter: Record<string, SwiftProduct['kind']> = {
            APPS: 'App',
            GAMES: 'Game',
            SAAS: 'SaaS',
        };
        const kind = kindByFilter[activeFilter];
        return kind ? swiftProducts.filter((p) => p.kind === kind) : [];
    }, [activeFilter]);

    const filteredWebProjects = useMemo(
        () => (activeFilter === 'ALL' || activeFilter === 'WEB DEVELOPMENT' ? webProjects : []),
        [activeFilter],
    );

    const totalStudies =
        caseStudiesData.length + marketingStudies.length + swiftProducts.length;

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
            {/* 1. Universal Top Header */}
            <Header
                onSearchClick={onOpenSearch}
                onGetStartedClick={onOpenGetStarted}
                currentRoute="portfolio"
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
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-500 mb-8 select-none"
                >
                    <button
                        type="button"
                        onClick={() => onNavigateHome()}
                        className="hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                        Home
                    </button>
                    <ChevronRight size={14} className="text-slate-400" />
                    <span className="text-[#2563EB] font-bold">Portfolio</span>
                </nav>

                {/* Page Hero */}
                <div className="relative pb-12 sm:pb-16 border-b border-slate-200/80">
                    <div className="max-w-3xl text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-4">
                            <Sparkles size={14} />
                            <span>OUR PORTFOLIO</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.08] mb-5">
                            Real Impact for Ambitious Businesses
                        </h1>

                        <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8">
                            Different industries. Real challenges. Measurable results. Explore the campaigns,
                            systems and growth engines we have built for our clients.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-500">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>
                            <strong className="text-slate-900">{totalStudies}</strong> case studies across our
                            brands
                        </span>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-4 mt-6">
                        {filters.map((f) => {
                            const isActive = activeFilter === f;
                            return (
                                <button
                                    key={f}
                                    type="button"
                                    onClick={() => setActiveFilter(f)}
                                    className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-extrabold tracking-wide uppercase transition-all duration-200 cursor-pointer select-none ${isActive
                                        ? 'bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]'
                                        : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    <span>{f}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Featured Case Studies */}
                {filteredCaseStudies.length > 0 && (
                    <section className="mt-14 sm:mt-18 text-left">
                        <div className="flex items-center gap-3 mb-8">
                            <Layers size={20} className="text-[#2563EB]" />
                            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                                Featured Case Studies
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                            {filteredCaseStudies.map((study) => (
                                <article
                                    key={study.id}
                                    className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
                                >
                                    <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-slate-300 via-blue-100 to-blue-200">
                                        <img
                                            src={study.image}
                                            alt={study.client}
                                            loading="lazy"
                                            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                                            {study.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-col flex-1 p-6 sm:p-7">
                                        <span className="text-xs font-extrabold text-slate-300 tracking-tight mb-1">
                                            {study.number}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight leading-snug mb-2.5 group-hover:text-[#2563EB] transition-colors">
                                            {study.client}
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                                            {study.desc}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp size={16} className="text-emerald-500" />
                                                <div>
                                                    <p className="text-base font-black text-[#0F172A] leading-none">
                                                        {study.metric}
                                                    </p>
                                                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mt-1">
                                                        {study.metricLabel}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => onViewCaseStudy?.(study.slug)}
                                                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#2563EB] hover:gap-2.5 transition-all cursor-pointer"
                                            >
                                                <span>Details</span>
                                                <ArrowRight size={13} className="stroke-[2.5]" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Website Development */}
                {filteredWebProjects.length > 0 && (
                    <section className="mt-16 sm:mt-20 text-left">
                        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                            <div className="flex items-center gap-3">
                                <Globe size={20} className="text-[#2563EB]" />
                                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                                    Website Development
                                </h2>
                            </div>
                            <span className="text-xs font-bold text-slate-500">
                                {filteredWebProjects.length}{' '}
                                {filteredWebProjects.length === 1 ? 'project' : 'projects'}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                            {filteredWebProjects.map((project) => {
                                const clickable = Boolean(project.caseStudySlug);
                                return (
                                    <article
                                        key={project.slug}
                                        onClick={() => project.caseStudySlug && onViewCaseStudy?.(project.caseStudySlug)}
                                        className={`group flex flex-col rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300 ${clickable ? 'cursor-pointer' : ''}`}
                                    >
                                        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-slate-300 via-blue-100 to-blue-200">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                        </div>

                                        <div className="flex flex-col flex-1 p-6 sm:p-7">
                                            <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                                                {project.excerpt}
                                            </p>

                                            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                                                {project.results.slice(0, 3).map((r) => (
                                                    <div key={r.label}>
                                                        <p className="text-sm font-black text-[#0F172A] leading-none">{r.value}</p>
                                                        <p className="text-[9.5px] font-bold uppercase tracking-wide text-slate-400 mt-1 leading-tight">
                                                            {r.label}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Performance Marketing Case Studies */}
                {filteredMarketingStudies.length > 0 && (
                    <section className="mt-16 sm:mt-20 text-left">
                        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                            <div className="flex items-center gap-3">
                                <BarChart2 size={20} className="text-[#2563EB]" />
                                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                                    Performance Marketing Case Studies
                                </h2>
                            </div>
                            <span className="text-xs font-bold text-slate-500">
                                {filteredMarketingStudies.length}{' '}
                                {filteredMarketingStudies.length === 1 ? 'study' : 'studies'}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                            {filteredMarketingStudies.map((study) => (
                                <a
                                    key={study.slug}
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
                                >
                                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-slate-300 via-blue-100 to-blue-200">
                                        {study.image ? (
                                            <img
                                                src={study.image}
                                                alt={study.title}
                                                loading="lazy"
                                                onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : null}
                                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                                            {study.industry}
                                        </span>
                                        <span className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-slate-500 group-hover:text-[#2563EB] transition-colors">
                                            <ArrowUpRight size={15} />
                                        </span>
                                    </div>

                                    <div className="flex flex-col flex-1 p-6 sm:p-7">
                                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                                            {study.title}
                                        </h3>

                                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                                            {study.excerpt}
                                        </p>

                                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                                            {study.results.slice(0, 3).map((r) => (
                                                <div key={r.label}>
                                                    <p className="text-sm font-black text-[#0F172A] leading-none">{r.value}</p>
                                                    <p className="text-[9.5px] font-bold uppercase tracking-wide text-slate-400 mt-1 leading-tight">
                                                        {r.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </a>))}
                        </div>
                    </section>
                )}

                {/* Apps, Games & SaaS — products engineered by the SwiftOutlet team */}
                {filteredProducts.length > 0 && (
                    <section className="mt-16 sm:mt-20 text-left">
                        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <Cloud size={20} className="text-[#2563EB]" />
                                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                                    Apps, Games &amp; SaaS
                                </h2>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-600">
                                    <Smartphone size={13} className="text-[#2563EB]" />
                                    {swiftProducts.filter((p) => p.kind === 'App').length} Apps
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-600">
                                    <Gamepad2 size={13} className="text-[#2563EB]" />
                                    {swiftProducts.filter((p) => p.kind === 'Game').length} Games
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200/80 px-3 py-1.5 text-[11px] font-bold text-slate-600">
                                    <Cloud size={13} className="text-[#2563EB]" />
                                    {swiftProducts.filter((p) => p.kind === 'SaaS').length} SaaS
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                            {filteredProducts.map((p) => (
                                <a
                                    key={p.slug}
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
                                >
                                    <div className="relative w-full h-44 sm:h-48 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 opacity-[0.14]" style={{ background: p.accent }} />
                                        {p.image ? (
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                loading="lazy"
                                                className="relative h-20 w-20 rounded-[22px] object-contain drop-shadow-[0_10px_22px_rgba(15,23,42,0.2)] transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <span
                                                className="relative flex h-20 w-20 items-center justify-center rounded-[22px] text-3xl shadow-[0_10px_22px_rgba(15,23,42,0.22)]"
                                                style={{ background: p.accent }}
                                            >
                                                {p.emoji}
                                            </span>
                                        )}
                                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                                            {p.kind}
                                        </span>
                                        <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold text-slate-700">
                                            {p.tag}
                                        </span>
                                    </div>

                                    <div className="flex flex-col flex-1 p-6 sm:p-7">
                                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400 mb-1.5">
                                            {p.niche}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                                            {p.title}
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                                            {p.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-[12px] font-bold text-[#2563EB]">
                                            <span>View {p.kind}</span>
                                            <ArrowUpRight
                                                size={14}
                                                className="stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Empty state when a filter has no matching studies */}
                {activeFilter !== 'ALL' &&
                    filteredCaseStudies.length === 0 &&
                    filteredMarketingStudies.length === 0 &&
                    filteredProducts.length === 0 && (
                        <div className="mt-14 sm:mt-18 py-20 text-center rounded-3xl border border-dashed border-slate-300 bg-white/60">
                            <p className="text-slate-500 font-semibold">
                                No case studies match this filter yet.
                            </p>
                        </div>
                    )}

                {/* CTA */}
                <div className="mt-20 sm:mt-24 rounded-[28px] sm:rounded-[36px] bg-[#0F172A] text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="max-w-xl text-left">
                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3">
                            Ready to become our next case study?
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Tell us about your goals and we will map the strategy, channels and systems to reach
                            them.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onOpenGetStarted}
                        className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 text-sm font-bold transition-colors cursor-pointer"
                    >
                        <span>Start a Project</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </main>

            {/* 3. Universal Footer Component */}
            <Footer onGetStartedClick={onOpenGetStarted} onNavigate={onNavigate} />
        </div>
    );
};
