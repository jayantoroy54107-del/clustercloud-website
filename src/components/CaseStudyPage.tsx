import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    ArrowLeft,
    ArrowUpRight,
    BarChart2,
    ArrowDown,
    ChevronRight,
    Clock,
    Layers,
    Target,
    CheckCircle2,
    Quote,
    Building2,
    Monitor,
    Smartphone,
    Sparkles,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { InstagramEmbed } from './InstagramEmbed';
import { WebsiteEmbed } from './WebsiteEmbed';
import { AppShowcaseCard } from './AppShowcaseCard';
import { lenis } from '../lib/lenis';
import {
    caseStudiesData,
    getCaseStudyBySlug,
    type CaseStudyMetricIcon,
} from '../data/caseStudies';

export interface CaseStudyPageProps {
    caseStudySlug?: string;
    onNavigate?: (route: any, section?: string) => void;
    onNavigateHome: (section?: string) => void;
    onNavigateContact: () => void;
    onNavigatePortfolio?: () => void;
    onViewCaseStudy?: (slug: string) => void;
    onOpenSearch?: () => void;
    onOpenGetStarted?: () => void;
}

const renderMetricIcon = (type: CaseStudyMetricIcon) => {
    switch (type) {
        case 'arrow-up-right':
            return <ArrowUpRight size={18} className="stroke-[2.8]" />;
        case 'bar-chart':
            return <BarChart2 size={18} className="stroke-[2.8]" />;
        case 'arrow-down':
            return <ArrowDown size={18} className="stroke-[2.8]" />;
    }
};

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
    caseStudySlug,
    onNavigate,
    onNavigateHome,
    onNavigateContact,
    onNavigatePortfolio,
    onViewCaseStudy,
    onOpenSearch,
    onOpenGetStarted,
}) => {
    const study = getCaseStudyBySlug(caseStudySlug) ?? caseStudiesData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { duration: 0.5, immediate: true });
    }, [caseStudySlug]);

    const others = caseStudiesData.filter((c) => c.slug !== study.slug);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
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
                        onNavigateHome(route === 'home' ? section : undefined);
                    }
                }}
            />

            <main className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 pt-8 sm:pt-12 pb-24">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-500 mb-8 select-none flex-wrap"
                >
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
                        onClick={() => (onNavigatePortfolio ? onNavigatePortfolio() : onNavigateHome('work'))}
                        className="hover:text-[#2563EB] transition-colors cursor-pointer"
                    >
                        Case Studies
                    </button>
                    <ChevronRight size={14} className="text-slate-400" />
                    <span className="text-[#2563EB] font-bold">{study.client}</span>
                </nav>

                {/* Back link */}
                <button
                    type="button"
                    onClick={() => (onNavigatePortfolio ? onNavigatePortfolio() : onNavigateHome('work'))}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-600 hover:text-[#2563EB] transition-colors mb-8 cursor-pointer"
                >
                    <ArrowLeft size={15} className="stroke-[2.5]" />
                    <span>All Case Studies</span>
                </button>

                {/* Hero */}
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-5">
                        <Layers size={14} />
                        <span>{study.category}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-[#0F172A] tracking-tight leading-[1.06] mb-5 max-w-4xl">
                        {study.headline}
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-8">
                        {study.summary}
                    </p>

                    {/* Meta strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-slate-200/80">
                        <div>
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                <Building2 size={13} /> Industry
                            </span>
                            <span className="text-sm font-bold text-[#0F172A]">{study.industry}</span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                <Clock size={13} /> Timeline
                            </span>
                            <span className="text-sm font-bold text-[#0F172A]">{study.timeline}</span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                <Monitor size={13} /> Platform
                            </span>
                            <span className="text-sm font-bold text-[#0F172A]">{study.platform}</span>
                        </div>
                        <div>
                            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                <Target size={13} /> Headline Result
                            </span>
                            <span className="text-sm font-bold text-[#2563EB]">
                                {study.metric} {study.metricLabel}
                            </span>
                        </div>
                    </div>
                </motion.header>

                {/* Cover image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full h-64 sm:h-96 lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-slate-200 via-blue-50 to-blue-100 border border-slate-200/80 mt-10 sm:mt-14"
                >
                    <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Metric cards */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
                    {study.metrics.map((m) => (<div
                        key={m.label}
                        className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] text-left"
                    >
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                            {renderMetricIcon(study.metricIconType)}
                        </div>
                        <span className="block text-3xl sm:text-4xl font-black text-[#2563EB] tracking-tight leading-none">
                            {m.value}
                        </span>
                        <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                            {m.label}
                        </span>
                    </div>
                    ))}
                </section>

                {/* Challenge & Solution */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-14 sm:mt-20 text-left">
                    <div className="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                            The Challenge
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                            Our Solution
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{study.solution}</p>
                    </div>
                </section>

                {/* Results + deliverables */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16 text-left">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
                            The Results
                        </h2>
                        <ul className="space-y-4">
                            {study.results.map((r) => (
                                <li key={r} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                        <CheckCircle2 size={15} className="stroke-[2.6]" />
                                    </span>
                                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                                        {r}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
                            What We Delivered
                        </h2>
                        <ul className="flex flex-wrap gap-2.5">
                            {study.deliverables.map((d) => (
                                <li
                                    key={d}
                                    className="inline-flex items-center rounded-full bg-white border border-slate-200/80 px-4 py-2 text-xs sm:text-[13px] font-semibold text-slate-700"
                                >
                                    {d}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {study.services.map((s) => (
                                <span
                                    key={s}
                                    className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-xs font-bold text-[#2563EB] uppercase tracking-wide"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                {study.gallery.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
                            Project Highlights
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {study.gallery.map((g) => (
                                <figure
                                    key={g.caption}
                                    className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                                >
                                    <div className="w-full h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-slate-200 via-blue-50 to-blue-100">
                                        <img
                                            src={g.src}
                                            alt={g.caption}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <figcaption className="px-5 py-4 text-xs sm:text-[13px] font-semibold text-slate-600">
                                        {g.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

                {/* Real Work — embedded Instagram reels */}
                {study.reels && study.reels.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-5">
                            <Layers size={14} />
                            <span>Real Work</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-2">
                            Videos We Delivered
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                            Live reels edited, captioned and delivered by our team — straight from the clients' feeds.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                            {study.reels.map((reel) => (
                                <InstagramEmbed key={reel.url} url={reel.url} caption={reel.caption} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Real Work — live website embeds */}
                {study.websites && study.websites.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-5">
                            <Monitor size={14} />
                            <span>Real Work</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-2">
                            Live Websites We Built
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                            Explore the live sites our team designed and shipped — click "Visit" to open any of them.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {study.websites.map((site) => (
                                <WebsiteEmbed key={site.url} url={site.url} caption={site.caption} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Real Work — shipped apps & products */}
                {study.apps && study.apps.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-5">
                            <Smartphone size={14} />
                            <span>Real Work</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-2">
                            Apps &amp; Products We Shipped
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                            A selection of the mobile apps and products engineered and published by our team — tap any card to open it.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {study.apps.map((app) => (
                                <AppShowcaseCard key={app.name} {...app} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Real Work — image-design project embeds (Behance) */}
                {study.designs && study.designs.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-extrabold uppercase tracking-widest mb-5">
                            <Sparkles size={14} />
                            <span>Real Work</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-2">
                            Selected <span className="text-[#2563EB]">Image Design</span> Projects
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
                            A glimpse of real projects we have designed — explore the full case studies on Behance.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {study.designs.map((design, i) => (
                                <div
                                    key={design.url}
                                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[404px] rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                                >
                                    <iframe
                                        src={design.url}
                                        title={`Image Design project ${i + 1}`}
                                        width="404"
                                        height="316"
                                        allowFullScreen
                                        loading="lazy"
                                        frameBorder="0"
                                        allow="clipboard-write"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        className="w-full h-[316px] block"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Testimonial */}
                <section className="mt-14 sm:mt-20">
                    <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-8 sm:p-12 text-left text-white relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                        <Quote size={34} className="text-[#38BDF8] mb-5" />
                        <blockquote className="text-lg sm:text-2xl font-bold leading-relaxed max-w-3xl">
                            {study.testimonial.quote}
                        </blockquote>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-black text-[#38BDF8]">
                                {study.testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">{study.testimonial.author}</p>
                                <p className="text-xs text-slate-400 font-medium">{study.testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore more */}
                {others.length > 0 && (
                    <section className="mt-14 sm:mt-20 text-left">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mb-6">
                            Explore More Case Studies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {others.map((o) => (
                                <button
                                    key={o.slug}
                                    type="button"
                                    onClick={() => onViewCaseStudy && onViewCaseStudy(o.slug)}
                                    className="group flex items-center gap-5 rounded-3xl bg-white border border-slate-200/80 p-4 sm:p-5 text-left hover:border-blue-200/90 hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)] transition-all cursor-pointer"
                                >
                                    <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 via-blue-50 to-blue-100">
                                        <img src={o.image} alt={o.client} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                                            {o.category}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-snug mb-1 group-hover:text-[#2563EB] transition-colors">
                                            {o.client}
                                        </h3>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                                            <span>{o.metric} {o.metricLabel}</span>
                                            <ArrowRight size={13} className="stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="mt-14 sm:mt-20 rounded-[28px] sm:rounded-[36px] bg-[#0F172A] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                            Want results like this?
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base font-normal max-w-xl">
                            Tell us about your project and we will map the fastest path to measurable growth.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onNavigateContact()}
                        className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(37,99,235,0.35)] transition-all cursor-pointer"
                    >
                        <span>Start a Project</span>
                        <ArrowRight size={16} className="stroke-[2.4]" />
                    </button>
                </section>
            </main>

            <Footer
                onGetStartedClick={onOpenGetStarted}
                onNavigate={(route, section) => {
                    if (route === 'contact') onNavigateContact();
                    else onNavigateHome(section);
                }}
            />
        </div>
    );
};
