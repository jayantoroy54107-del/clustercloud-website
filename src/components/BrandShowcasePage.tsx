import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    ExternalLink,
    CheckCircle2,
    Sparkles,
    Layers,
    Mail,
    type LucideIcon,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { lenis } from '../lib/lenis';

export interface BrandCategory {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color: string;
    badge: string;
    details: string;
}

export interface BrandProduct {
    id: string;
    name: string;
    category: string;
    rating: string;
    desc: string;
    link: string;
    status: string;
    tagColor: string;
}

export interface BrandStat {
    value: string;
    label: string;
    desc: string;
}

export interface BrandSwitch {
    label: string;
    brandId: string;
}

export interface BrandCaseStudyResult {
    label: string;
    value: string;
}

export interface BrandCaseStudy {
    title: string;
    slug: string;
    industry: string;
    client: string | null;
    excerpt: string;
    link: string;
    results: BrandCaseStudyResult[];
}

export interface BrandShowcaseConfig {
    brandName: string;
    route: string;
    url: string;
    urlLabel: string;
    badge: string;
    badgeIcon: LucideIcon;
    badgeClass: string; headingLead: string;
    headingGradientText: string;
    headingGradientClass: string;
    headingTail: string;
    introStrong: string;
    intro: string;
    primaryBtnGradient: string;
    accentText: string;
    accentSolid: string;
    chipClass: string;
    crumbNameClass: string;
    glowA: string;
    glowB: string;
    glowC: string;
    statsGradient: string;
    stats: BrandStat[];
    categoriesLabel: string;
    categoriesLabelClass: string;
    categoriesHeading: string;
    categoriesSubheading: string;
    categories: BrandCategory[];
    productsLabel: string;
    productsLabelClass: string;
    productsHeading: string;
    productsCtaLabel: string;
    products: BrandProduct[];
    customLabel: string;
    customHeadingLead: string;
    customHeadingAccent: string;
    customDesc: string;
    customPoints: string[];
    customCardBg: string;
    customCardLabel: string;
    customCardTitle: string;
    customCardDesc: string;
    customCardBtn: string;
    ctaBannerLabel: string;
    ctaBannerTitle: string;
    ctaBannerDesc: string;
    ctaBannerGradient: string;
    switches: BrandSwitch[];
    caseStudies?: BrandCaseStudy[];
    caseStudiesLabel?: string;
    caseStudiesHeading?: string;
    caseStudiesCtaLabel?: string;
    caseStudiesUrl?: string;
}

export interface BrandShowcasePageProps {
    config: BrandShowcaseConfig;
    onNavigate?: (route: any, targetSection?: string) => void;
    onNavigateHome?: (section?: string) => void;
    onNavigateContact?: () => void;
    onOpenSearch?: () => void;
    onOpenGetStarted?: () => void;
    onNavigateBrand?: (brandId: any) => void;
}

export const BrandShowcasePage: React.FC<BrandShowcasePageProps> = ({
    config,
    onNavigate,
    onNavigateHome,
    onNavigateContact,
    onOpenSearch,
    onOpenGetStarted,
    onNavigateBrand,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { duration: 0.5, immediate: true });
    }, []);

    const handleHeaderNavigate = (route: string, target?: string) => {
        if (onNavigate) {
            onNavigate(route, target);
            return;
        }
        if (route === config.route) {
            window.scrollTo(0, 0);
        } else if (route === 'contact') {
            onNavigateContact?.();
        } else if (typeof route === 'string' && route.startsWith('brand-')) {
            onNavigateBrand?.(route.slice('brand-'.length));
        } else {
            onNavigateHome?.(target);
        }
    };

    const BadgeIcon = config.badgeIcon;

    return (
        <div className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
            <Header
                onSearchClick={onOpenSearch}
                onGetStartedClick={onOpenGetStarted}
                currentRoute={config.route as any}
                onNavigate={handleHeaderNavigate}
            />

            <main className="relative pt-6 pb-20 overflow-hidden">
                {/* Ambient Gradient Glows */}
                <div className={`pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] ${config.glowA} rounded-full blur-3xl -z-10`} />
                <div className={`pointer-events-none absolute top-96 -right-20 w-[450px] h-[450px] ${config.glowB} rounded-full blur-3xl -z-10`} />
                <div className={`pointer-events-none absolute top-[850px] -left-20 w-[450px] h-[450px] ${config.glowC} rounded-full blur-3xl -z-10`} />

                <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs & Live Link Chip */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-8 border-b border-slate-200/80">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                            <button
                                type="button"
                                onClick={() => onNavigateHome?.()}
                                className="hover:text-[#2563EB] transition-colors cursor-pointer"
                            >
                                Home
                            </button>
                            <span>/</span>
                            <span className="text-slate-400">Our Brands</span>
                            <span>/</span>
                            <span className={`font-bold ${config.crumbNameClass}`}>{config.brandName}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={config.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white ${config.chipClass} shadow-xs transition-all`}
                            >
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>{config.urlLabel}</span>
                                <ArrowUpRight size={13} strokeWidth={2.5} />
                            </a>
                            {config.switches[0] && (
                                <button
                                    type="button"
                                    onClick={() => onNavigateBrand?.(config.switches[0].brandId)}
                                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#2563EB] hover:bg-white transition-all cursor-pointer"
                                >
                                    <span>Switch to {config.switches[0].label}</span>
                                    <ArrowRight size={13} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Hero Section */}
                    <section className="py-12 lg:py-16 text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6 ${config.badgeClass}`}
                        >
                            <BadgeIcon size={15} />
                            <span>{config.badge}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]"
                        >
                            {config.headingLead}{' '}
                            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${config.headingGradientClass}`}>
                                {config.headingGradientText}
                            </span>
                            {config.headingTail}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
                        >
                            <strong>{config.introStrong}</strong> {config.intro}
                        </motion.p>

                        {/* Action CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
                        >
                            <a
                                href={config.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r ${config.primaryBtnGradient} text-white font-bold text-sm sm:text-base shadow-lg hover:opacity-95 hover:-translate-y-0.5 transition-all duration-200`}
                            >
                                <span>Explore {config.urlLabel}</span>
                                <ArrowUpRight size={17} strokeWidth={2.4} />
                            </a>              <a
                                href={config.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
                            >
                                <Layers size={17} className={config.accentText} />
                                <span>Full-Service Studio</span>
                            </a>

                            <button
                                type="button"
                                onClick={onOpenGetStarted}
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer"
                            >
                                <Mail size={16} />
                                <span>Request a Quote</span>
                            </button>
                        </motion.div>

                        {/* Key Metrics / Highlights */}
                        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {config.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow text-left"
                                >
                                    <div className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent ${config.statsGradient}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{stat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Ecosystem Capabilities */}
                    <section className="py-12 border-t border-slate-200/80">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className={`text-xs font-bold uppercase tracking-widest ${config.categoriesLabelClass}`}>
                                {config.categoriesLabel}
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                                {config.categoriesHeading}
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 mt-2">
                                {config.categoriesSubheading}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {config.categories.map((cat, idx) => {
                                const IconComponent = cat.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-3 mb-5">
                                                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-tr ${cat.color} text-white flex items-center justify-center shadow-md`}>
                                                    <IconComponent size={22} strokeWidth={2.2} />
                                                </div>
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                                                    {cat.badge}
                                                </span>
                                            </div>

                                            <h3 className={`text-xl font-bold text-slate-900 transition-colors`}>
                                                {cat.title}
                                            </h3>
                                            <p className="text-xs font-semibold text-slate-500 mt-1">
                                                {cat.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-600 leading-relaxed mt-3.5">
                                                {cat.details}
                                            </p>
                                        </div>

                                        <div className={`mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold ${config.accentText}`}>
                                            <span>Production Quality</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Product / Service Directory */}
                    <section className="py-12 border-t border-slate-200/80">
                        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                            <div>
                                <span className={`text-xs font-bold uppercase tracking-widest ${config.productsLabelClass}`}>
                                    {config.productsLabel}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                                    {config.productsHeading}
                                </h2>
                            </div>
                            <a
                                href={config.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${config.accentText}`}
                            >
                                <span>{config.productsCtaLabel}</span>
                                <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {config.products.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${item.tagColor}`}>
                                                {item.category}
                                            </span>
                                            <span className="text-xs font-semibold text-slate-500">
                                                {item.rating}
                                            </span>
                                        </div>

                                        <h3 className={`text-xl font-bold text-slate-900 transition-colors`}>
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                                            <CheckCircle2 size={13} className="text-emerald-500" />
                                            <span>{item.status}</span>
                                        </span>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1 text-xs font-bold ${config.accentText} hover:underline`}
                                        >
                                            <span>Explore</span>
                                            <ArrowUpRight size={13} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Case Studies Section */}
                    {config.caseStudies && config.caseStudies.length > 0 && (
                        <section className="py-12 border-t border-slate-200/80">
                            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                                <div>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${config.productsLabelClass}`}>
                                        {config.caseStudiesLabel ?? 'Case Studies'}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                                        {config.caseStudiesHeading ?? 'Real Results for Real Clients'}
                                    </h2>
                                </div>
                                <a
                                    href={config.caseStudiesUrl ?? config.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${config.accentText}`}
                                >
                                    <span>{config.caseStudiesCtaLabel ?? 'View all case studies'}</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {config.caseStudies.map((cs) => (
                                    <a
                                        key={cs.slug}
                                        href={cs.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                                    {cs.industry}
                                                </span>
                                                <ArrowUpRight size={15} className="text-slate-400 group-hover:text-slate-900 transition-colors shrink-0" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 leading-snug transition-colors group-hover:text-slate-700">
                                                {cs.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                                                {cs.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2">
                                            {cs.results.slice(0, 3).map((r, ri) => (
                                                <div key={ri}>
                                                    <div className={`text-lg sm:text-xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent ${config.statsGradient}`}>
                                                        {r.value}
                                                    </div>
                                                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5 leading-tight">
                                                        {r.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Custom Services Section */}
                    <section className="py-12 border-t border-slate-200/80">
                        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-8">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${config.accentText}`}>
                                        {config.customLabel}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                                        {config.customHeadingLead}{' '}
                                        <span className={config.accentText}>{config.customHeadingAccent}</span>
                                    </h3>
                                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                                        {config.customDesc}
                                    </p>

                                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                                        {config.customPoints.map((point) => (
                                            <div key={point} className="flex items-center gap-2">
                                                <CheckCircle2 size={16} className={`${config.accentText} shrink-0`} />
                                                <span>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center justify-center text-center">
                                    <div className={`p-6 rounded-2xl border w-full text-center ${config.customCardBg}`}>
                                        <span className="text-xs font-bold uppercase tracking-wider">
                                            {config.customCardLabel}
                                        </span>
                                        <h4 className="text-lg font-bold text-slate-900 mt-1">
                                            {config.customCardTitle}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {config.customCardDesc}
                                        </p>
                                        <a
                                            href={config.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl ${config.accentSolid} text-white font-bold text-xs shadow-md transition-all hover:opacity-95`}
                                        >
                                            <span>{config.customCardBtn}</span>
                                            <ArrowUpRight size={13} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Conversion Banner */}
                    <section className={`mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r ${config.ctaBannerGradient} text-white text-center shadow-xl relative overflow-hidden`}>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-4">
                                <Sparkles size={14} />
                                <span>{config.ctaBannerLabel}</span>
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                                {config.ctaBannerTitle}
                            </h3>
                            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                                {config.ctaBannerDesc}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                                <a
                                    href={config.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r ${config.primaryBtnGradient} text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all`}
                                >
                                    <span>Open {config.urlLabel}</span>
                                    <ArrowUpRight size={16} />
                                </a>
                                <button
                                    type="button"
                                    onClick={onOpenGetStarted}
                                    className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
                                >
                                    Contact Cluster Cloud Studio
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer
                onGetStartedClick={onOpenGetStarted}
                onNavigate={(route, target) => {
                    if (onNavigate) {
                        onNavigate(route, target);
                        return;
                    }
                    if (route === 'contact') {
                        onNavigateContact?.();
                    } else {
                        onNavigateHome?.(target);
                    }
                }}
            />
        </div>
    );
};

export default BrandShowcasePage;
