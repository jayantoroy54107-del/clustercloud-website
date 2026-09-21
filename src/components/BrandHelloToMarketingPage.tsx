import React from 'react';
import { Search, Megaphone, Target, Sparkles } from 'lucide-react';
import {
    BrandShowcasePage,
    type BrandShowcaseConfig,
    type BrandShowcasePageProps,
} from './BrandShowcasePage';
import caseStudiesData from '../data/helloToMarketingCaseStudies.json';

const config: BrandShowcaseConfig = {
    brandName: 'Hello to Marketing',
    route: 'brand-hello-to-marketing',
    url: 'https://hellotomarketing.com/',
    urlLabel: 'hellotomarketing.com',
    badge: 'DIGITAL MARKETING & GROWTH AGENCY',
    badgeIcon: Sparkles,
    badgeClass: 'bg-gradient-to-r from-amber-50 to-red-50 border-amber-100 text-amber-700',
    headingLead: 'Full-Funnel',
    headingGradientText: 'Growth Marketing',
    headingGradientClass: 'from-[#F59E0B] via-[#EA580C] to-[#DC2626]',
    headingTail: ', Engineered for Revenue',
    introStrong: 'Hello to Marketing',
    intro:
        'is a performance-obsessed growth agency blending creative strategy with rigorous measurement — SEO, paid social, performance advertising, content, lifecycle, and analytics working as one engine toward measurable revenue.',
    primaryBtnGradient: 'from-[#F59E0B] to-[#DC2626] shadow-amber-500/25',
    accentText: 'text-[#DC2626]',
    accentSolid: 'bg-[#DC2626] hover:bg-[#B91C1C]',
    chipClass: 'text-amber-700 border border-amber-200 hover:border-amber-400 hover:bg-amber-50/70',
    crumbNameClass: 'text-[#DC2626]',
    glowA: 'bg-gradient-to-b from-amber-100/50 via-red-50/40 to-transparent',
    glowB: 'bg-orange-100/40',
    glowC: 'bg-rose-100/30',
    statsGradient: 'from-amber-600 to-red-600',
    stats: [
        { value: 'ROAS', label: 'Revenue Focused', desc: 'Optimized for return' },
        { value: '360°', label: 'Full-Funnel', desc: 'Awareness to retention' },
        { value: 'Data', label: 'Driven Decisions', desc: 'Every move measured' },
        { value: 'A/B', label: 'Always Testing', desc: 'Continuous optimization' },
    ],
    categoriesLabel: 'Growth Capabilities',
    categoriesLabelClass: 'text-[#DC2626]',
    categoriesHeading: 'Everything Your Growth Engine Needs',
    categoriesSubheading:
        'One team, one strategy, every channel aligned toward revenue.',
    categories: [
        {
            icon: Search,
            title: 'SEO & Organic Growth',
            subtitle: 'Rank higher and compound traffic.',
            color: 'from-amber-500 to-orange-600',
            badge: 'Search First',
            details:
                'Technical audits, keyword architecture, on-page optimization, and authority link building engineered to grow qualified organic traffic month over month.',
        },
        {
            icon: Megaphone,
            title: 'Paid Social Media',
            subtitle: 'Scroll-stopping creative that converts.',
            color: 'from-orange-500 to-red-600',
            badge: 'Meta & TikTok',
            details:
                'Full-funnel paid social across Meta, TikTok, and LinkedIn — audience research, UGC creative testing, and rapid iteration for efficient cost per acquisition.',
        },
        {
            icon: Target,
            title: 'Performance Advertising',
            subtitle: 'ROAS-obsessed media buying.',
            color: 'from-red-500 to-rose-600',
            badge: 'Google & Display',
            details:
                'Google Ads, Performance Max, and programmatic display managed with rigorous budget pacing, bidding strategy, and airtight conversion tracking.',
        },
    ],
    productsLabel: 'Marketing Programs',
    productsLabelClass: 'text-amber-600',
    productsHeading: 'Growth Programs We Run',
    productsCtaLabel: 'View all services on hellotomarketing.com',
    products: [
        {
            id: 'seo-organic-growth',
            name: 'SEO & Organic Growth',
            category: 'Search Engine Optimization',
            rating: '📈 Compounding',
            desc: 'End-to-end technical SEO, content strategy, and link acquisition that builds durable organic visibility and inbound demand.',
            link: 'https://hellotomarketing.com/',
            status: 'Core Service',
            tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
        },
        {
            id: 'paid-social-media',
            name: 'Paid Social Media',
            category: 'Social Advertising',
            rating: '📣 Full-Funnel',
            desc: 'Creative-led Meta and TikTok campaigns with audience segmentation, UGC production, and continuous testing to scale profitable acquisition.',
            link: 'https://hellotomarketing.com/',
            status: 'Core Service',
            tagColor: 'bg-orange-50 text-orange-700 border-orange-200',
        },
        {
            id: 'performance-advertising',
            name: 'Performance Advertising',
            category: 'Paid Media / PPC',
            rating: '🎯 ROAS Driven',
            desc: 'Google Ads, Performance Max, and display campaigns optimized around revenue — not vanity metrics — with transparent reporting.',
            link: 'https://hellotomarketing.com/',
            status: 'Core Service',
            tagColor: 'bg-red-50 text-red-700 border-red-200',
        },
        {
            id: 'content-marketing',
            name: 'Content Marketing',
            category: 'Editorial & Creative',
            rating: '✍️ Authority',
            desc: 'Long-form editorial, landing page copy, and video content engineered to educate, position, and convert at every stage.',
            link: 'https://hellotomarketing.com/',
            status: 'Growth Engine',
            tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
        },
        {
            id: 'email-lifecycle',
            name: 'Email & Lifecycle',
            category: 'Retention Marketing',
            rating: '🔁 Automated',
            desc: 'Welcome flows, abandoned-cart sequences, and lifecycle segmentation that maximize customer lifetime value.',
            link: 'https://hellotomarketing.com/',
            status: 'Retention',
            tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
        },
        {
            id: 'analytics-reporting',
            name: 'Analytics & Reporting',
            category: 'Measurement',
            rating: '📊 Data Backed',
            desc: 'GA4, server-side tracking, and custom dashboards that reveal exactly which channels drive pipeline.',
            link: 'https://hellotomarketing.com/',
            status: 'Measurement',
            tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        },
    ],
    customLabel: 'Custom Marketing Services',
    customHeadingLead: 'Need a Growth Partner?',
    customHeadingAccent: 'Hire Hello to Marketing.',
    customDesc:
        'Beyond running our own performance programs, Hello to Marketing delivers bespoke full-funnel growth partnerships for founders and brands worldwide — from strategy and creative to measurement.',
    customPoints: [
        'Full-Funnel Growth Strategy',
        'Paid Social & Performance Ads',
        'SEO & Content Engines',
        'Analytics, CRO & Reporting',
    ],
    customCardBg: 'bg-amber-50/70 border-amber-100',
    customCardLabel: 'Ready to grow?',
    customCardTitle: 'Start Your Campaign',
    customCardDesc: 'Turn your growth blueprint into measurable results.',
    customCardBtn: 'Get a Quote on hellotomarketing.com',
    ctaBannerLabel: 'LET US GROW YOUR BRAND',
    ctaBannerTitle: 'Build a Marketing Engine That Scales',
    ctaBannerDesc:
        'Get a full-funnel growth partner across SEO, paid media, content, and analytics — or a focused channel sprint for rapid wins.',
    ctaBannerGradient: 'from-[#7C2D12] via-[#9A3412] to-[#7C2D12]',
    caseStudies: caseStudiesData,
    caseStudiesLabel: 'Client Results',
    caseStudiesHeading: 'Case Studies — Real Revenue, Real Clients',
    caseStudiesCtaLabel: 'View all case studies on hellotomarketing.com',
    caseStudiesUrl: 'https://hellotomarketing.com/case-studies',
    switches: [
        { label: 'Clipping Fly', brandId: 'clipping-fly' },
        { label: 'Ecom with Faisal', brandId: 'ecom-with-faisal' },
    ],
};

export const BrandHelloToMarketingPage: React.FC<Omit<BrandShowcasePageProps, 'config'>> = (props) => (
    <BrandShowcasePage {...props} config={config} />
);

export default BrandHelloToMarketingPage;
