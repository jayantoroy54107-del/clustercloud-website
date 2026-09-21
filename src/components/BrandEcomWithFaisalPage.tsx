import React from 'react';
import { ShoppingCart, Store, TrendingUp, Sparkles } from 'lucide-react';
import {
    BrandShowcasePage,
    type BrandShowcaseConfig,
    type BrandShowcasePageProps,
} from './BrandShowcasePage';

const config: BrandShowcaseConfig = {
    brandName: 'Ecom with Faisal',
    route: 'brand-ecom-with-faisal',
    url: 'https://ecomwithfaisal.com/',
    urlLabel: 'ecomwithfaisal.com',
    badge: 'E-COMMERCE GROWTH & STORE SCALING',
    badgeIcon: Sparkles,
    badgeClass: 'bg-gradient-to-r from-emerald-50 to-sky-50 border-emerald-100 text-emerald-700',
    headingLead: 'Scale Your',
    headingGradientText: 'E-commerce Store',
    headingGradientClass: 'from-[#10B981] via-[#0EA5E9] to-[#0284C7]',
    headingTail: ' Profitably',
    introStrong: 'Ecom with Faisal',
    intro:
        'helps founders launch, optimize, and scale Shopify stores — from high-converting design and CRO to paid traffic, fulfillment, and the automation that lets you grow without the chaos.',
    primaryBtnGradient: 'from-[#10B981] to-[#0EA5E9] shadow-emerald-500/25',
    accentText: 'text-[#0EA5E9]',
    accentSolid: 'bg-[#10B981] hover:bg-[#059669]',
    chipClass: 'text-emerald-700 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/70',
    crumbNameClass: 'text-[#059669]',
    glowA: 'bg-gradient-to-b from-emerald-100/50 via-sky-50/40 to-transparent',
    glowB: 'bg-teal-100/40',
    glowC: 'bg-cyan-100/30',
    statsGradient: 'from-emerald-600 to-sky-600',
    stats: [
        { value: 'CRO', label: 'Conversion First', desc: 'Store optimized to sell' },
        { value: 'Ads', label: 'Traffic Ready', desc: 'Meta & TikTok scaled' },
        { value: 'AOV', label: 'Basket Growth', desc: 'Upsells & bundles' },
        { value: 'Auto', label: 'Ops Systems', desc: 'Fulfilment & flows' },
    ],
    categoriesLabel: 'Growth Capabilities',
    categoriesLabelClass: 'text-[#0EA5E9]',
    categoriesHeading: 'Everything Your Store Needs to Scale',
    categoriesSubheading:
        'From store setup to paid traffic and automated fulfilment — one e-commerce growth engine.',
    categories: [
        {
            icon: Store,
            title: 'Store Setup & Design',
            subtitle: 'High-converting Shopify storefronts.',
            color: 'from-emerald-500 to-teal-600',
            badge: 'Shopify',
            details:
                'Conversion-focused theme setup, product pages, trust signals, and mobile-first design engineered to turn browsers into buyers from day one.',
        },
        {
            icon: TrendingUp,
            title: 'Paid Traffic & Scaling',
            subtitle: 'Meta & TikTok campaigns that profit.',
            color: 'from-sky-500 to-blue-600',
            badge: 'Meta & TikTok',
            details:
                'Creative testing, audience research, and disciplined budget scaling that grows revenue while protecting unit economics and ROAS.',
        },
        {
            icon: ShoppingCart,
            title: 'Fulfilment & Automation',
            subtitle: 'Operations that run themselves.',
            color: 'from-cyan-500 to-teal-600',
            badge: 'Automated Ops',
            details:
                'Suppliers, dropshipping, order routing, email & SMS flows, and analytics dashboards that remove manual work as order volume climbs.',
        },
    ],
    productsLabel: 'E-commerce Services',
    productsLabelClass: 'text-emerald-600',
    productsHeading: 'What Ecom with Faisal Delivers',
    productsCtaLabel: 'View all services on ecomwithfaisal.com',
    products: [
        {
            id: 'shopify-store-setup',
            name: 'Shopify Store Setup',
            category: 'Store Build',
            rating: '🛍️ Launch Ready',
            desc: 'Complete Shopify build — theme, product pages, payments, shipping, and apps configured for a fast, reliable launch.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Core Service',
            tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        },
        {
            id: 'store-design-cro',
            name: 'Store Design & CRO',
            category: 'Conversion Optimization',
            rating: '📈 CRO Focused',
            desc: 'Data-driven redesign and A/B testing that lift conversion rate, average order value, and revenue per visitor.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Core Service',
            tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
        },
        {
            id: 'product-research',
            name: 'Product Research',
            category: 'Sourcing',
            rating: '🔍 Winner Finding',
            desc: 'Market and trend research to identify winning products with real demand, healthy margins, and scalable ad potential.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Core Service',
            tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
        },
        {
            id: 'facebook-tiktok-ads',
            name: 'Facebook & TikTok Ads',
            category: 'Paid Media',
            rating: '🎯 ROAS Driven',
            desc: 'Full-funnel paid campaigns with creative testing and scaling frameworks built around profitable customer acquisition.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Growth Engine',
            tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        },
        {
            id: 'dropshipping-fulfilment',
            name: 'Dropshipping & Fulfilment',
            category: 'Operations',
            rating: '🚚 Reliable Ops',
            desc: 'Supplier vetting, order routing, and fulfilment workflows that deliver reliably and keep customers coming back.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Operations',
            tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        },
        {
            id: 'email-sms-marketing',
            name: 'Email & SMS Marketing',
            category: 'Retention',
            rating: '🔁 Automated',
            desc: 'Abandoned-cart, welcome, and winback flows plus campaigns that lift repeat purchase and customer lifetime value.',
            link: 'https://ecomwithfaisal.com/',
            status: 'Retention',
            tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
        },
    ],
    customLabel: 'Custom E-commerce Services',
    customHeadingLead: 'Need a Scaling Partner?',
    customHeadingAccent: 'Hire Ecom with Faisal.',
    customDesc:
        'Beyond building our own stores, Ecom with Faisal partners with founders and brands worldwide to launch, optimize, and scale e-commerce — from first sale to seven figures.',
    customPoints: [
        'Shopify Store Build & CRO',
        'Paid Traffic Strategy & Scaling',
        'Fulfilment & Automation Systems',
        'Analytics, Retention & Reporting',
    ],
    customCardBg: 'bg-emerald-50/70 border-emerald-100',
    customCardLabel: 'Ready to scale?',
    customCardTitle: 'Start Your Store',
    customCardDesc: 'Turn your product idea into a profitable store.',
    customCardBtn: 'Get a Quote on ecomwithfaisal.com',
    ctaBannerLabel: 'LET US SCALE YOUR STORE',
    ctaBannerTitle: 'Build an E-commerce Brand That Grows',
    ctaBannerDesc:
        'Get an e-commerce growth partner across store setup, CRO, paid traffic, fulfilment, and automation — built to scale profitably.',
    ctaBannerGradient: 'from-[#064E3B] via-[#0F766E] to-[#0C4A6E]',
    switches: [
        { label: 'Hello to Marketing', brandId: 'hello-to-marketing' },
        { label: 'Clipping Fly', brandId: 'clipping-fly' },
    ],
};

export const BrandEcomWithFaisalPage: React.FC<Omit<BrandShowcasePageProps, 'config'>> = (props) => (
    <BrandShowcasePage {...props} config={config} />
);

export default BrandEcomWithFaisalPage;
