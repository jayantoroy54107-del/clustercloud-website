export type CaseStudyMetricIcon = 'arrow-up-right' | 'bar-chart' | 'arrow-down';

export interface CaseStudyMetric {
    value: string;
    label: string;
}

export interface CaseStudyGalleryItem {
    src: string;
    caption: string;
}

export interface CaseStudyItem {
    id: string;
    slug: string;
    number: string;
    /** Card title (short client / product name) */
    client: string;
    category: string;
    desc: string;
    metric: string;
    metricLabel: string;
    metricIconType: CaseStudyMetricIcon;
    image: string;
    link?: string;
    challenge: string;
    solution: string;
    results: string[];
    /** --- Dedicated page fields --- */
    headline: string;
    summary: string;
    industry: string;
    timeline: string;
    platform: string;
    services: string[];
    deliverables: string[];
    metrics: CaseStudyMetric[];
    gallery: CaseStudyGalleryItem[];
    testimonial: { quote: string; author: string; role: string };
    liveUrl?: string;
}

/**
 * The three flagship / featured case studies.
 * These appear on the home page (WorkSection) AND as "Featured Case Studies"
 * on the portfolio page, and each has its own dedicated detail page at
 * /case-studies/<slug>.
 */
export const caseStudiesData: CaseStudyItem[] = [
    // 01 — App Development
    {
        id: 'novapulse-fitness-app',
        slug: 'novapulse-fitness-app',
        number: '01',
        client: 'NovaPulse Fitness App',
        category: 'APP DEVELOPMENT',
        desc: 'Launched a cross-platform fitness app from zero to 120K active users in six months, with a 4.8-star store rating.',
        metric: '120K',
        metricLabel: 'Active Users',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/app.png',
        challenge:
            'A fitness startup had a validated concept but no technical team, a tight runway and a hard launch window. They needed a polished product on both iOS and Android without doubling their build cost.',
        solution:
            'We designed and shipped a single-codebase React Native app — guided workout plans, AI form feedback, wearable sync and social streaks — covering strategy, UX and the full native build in 14 weeks.',
        results: [
            '120K active users within six months of launch',
            '4.8-star average rating across the App Store and Google Play',
            'Crash-free sessions above 99.7% at peak load',
            'One codebase shipping to both iOS and Android',
        ],
        headline: 'NovaPulse grew to 120K active users in six months',
        summary:
            'From blank canvas to store launch in 14 weeks — product strategy, UX design, a cross-platform React Native build and post-launch growth for a fitness startup.',
        industry: 'Health & Fitness',
        timeline: '14 weeks',
        platform: 'iOS & Android',
        services: ['App Development', 'Product Design', 'UX Research', 'App Store Optimisation'],
        deliverables: [
            'Product strategy & clickable prototype',
            'Full UI/UX design system for mobile',
            'React Native cross-platform application',
            'Wearable & health-data integration',
            'App Store & Google Play launch package',
        ],
        metrics: [
            { value: '120K', label: 'Active Users' },
            { value: '4.8★', label: 'Average Store Rating' },
            { value: '99.7%', label: 'Crash-Free Sessions' },
            { value: '14 wks', label: 'Time to Launch' },
        ],
        gallery: [
            { src: '/casestudy/app.png', caption: 'Daily activity dashboard' },
            { src: '/work/swiftoutlet/foodcal-ai-icon.png', caption: 'AI nutrition companion module' },
        ],
        testimonial: {
            quote:
                'They took us from an idea on a whiteboard to a live product on both stores in a single quarter. The build quality is genuinely App Store standard.',
            author: 'S. Rahman',
            role: 'Co-founder, NovaPulse',
        },
    },

    // 02 — SaaS Platform
    {
        id: 'detaily-field-service-crm',
        slug: 'detaily-field-service-crm',
        number: '02',
        client: 'Detaily Field-Service CRM',
        category: 'SAAS PLATFORM',
        desc: 'Built a multi-tenant dispatch CRM that cut field-team job dispatch time by 3x and grew into a subscription product with 400+ paying teams.',
        metric: '3x',
        metricLabel: 'Faster Dispatch',
        metricIconType: 'bar-chart',
        image: '/casestudy/saas.png',
        challenge:
            'A fast-growing field-services company was running operations on spreadsheets and group chats. Dispatch took hours, jobs slipped through the cracks and there was no visibility for owners.',
        solution:
            'We engineered a multi-tenant SaaS with role-based access, voice-to-job capture, automatic technician matching, WhatsApp dispatch and live reporting — packaged as a subscription product for other teams.',
        results: [
            '3x faster job dispatch across the field team',
            '400+ paying teams onboarded onto the platform',
            'Voice-to-job entry removed manual data typing',
            'Live operational reporting for owners and managers',
        ],
        headline: 'Detaily turned messy dispatch into a 400-team SaaS product',
        summary:
            'A multi-tenant field-service CRM — voice-to-job capture, smart technician matching, WhatsApp dispatch and real-time reporting — built to scale as a subscription business.',
        industry: 'Field Services / CRM',
        timeline: '10 weeks to MVP, ongoing',
        platform: 'Web app + mobile',
        services: ['SaaS Development', 'Product Architecture', 'API Integration', 'UX Design'],
        deliverables: [
            'Multi-tenant architecture with role-based access',
            'Voice-to-job capture & technician matching engine',
            'WhatsApp dispatch notifications',
            'Live reporting dashboards',
            'Stripe billing & subscription management',
        ],
        metrics: [
            { value: '3x', label: 'Faster Dispatch' },
            { value: '400+', label: 'Paying Teams' },
            { value: '10 wks', label: 'To MVP' },
            { value: '99.9%', label: 'Uptime' },
        ],
        gallery: [
            { src: '/casestudy/saas.png', caption: 'Dispatch & operations dashboard' },
            { src: '/work/swiftoutlet/detailing-crm-icon.svg', caption: 'Detaily platform mark' },
        ],
        testimonial: {
            quote:
                'What was an internal headache is now a product our peers pay for. The dispatch time alone paid for the build within weeks.',
            author: 'M. Iqbal',
            role: 'Operations Director, Detaily',
        },
    },

    // 03 — Website Development
    {
        id: 'meridian-corporate-website',
        slug: 'meridian-corporate-website',
        number: '03',
        client: 'Meridian Corporate Website',
        category: 'WEB DEVELOPMENT',
        desc: 'Rebuilt a slow, outdated corporate site into a sub-second, SEO-ready platform that lifted qualified enquiries by 41%.',
        metric: '+41%',
        metricLabel: 'Qualified Enquiries',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/website.png',
        challenge:
            'A growing B2B company had an outdated website that loaded in seconds, failed to explain its services clearly and converted almost no visitors into enquiries.',
        solution:
            'We rebuilt the site on a modern component-driven stack with a clear content hierarchy, responsive layouts, SEO-ready structure and performance-first loading — deployed with continuous delivery.',
        results: [
            '41% increase in qualified enquiries within 90 days',
            'Sub-second page load with a 98+ performance score',
            'Responsive, accessible design system across all pages',
            'SEO-ready structure with automated deployments',
        ],
        headline: 'Meridian lifted qualified enquiries 41% with a rebuilt site',
        summary:
            'A conversion-focused corporate website rebuild — clear content architecture, a reusable design system, sub-second performance and SEO-ready deployment.',
        industry: 'B2B Professional Services',
        timeline: '6 weeks',
        platform: 'Responsive web',
        services: ['Web Design', 'Web Development', 'SEO Foundations', 'Performance Engineering'],
        deliverables: [
            'Content strategy & information architecture',
            'High-fidelity design system in Figma',
            'Component-driven front-end build',
            'On-page SEO & technical foundations',
            'Automated deployment pipeline',
        ],
        metrics: [
            { value: '+41%', label: 'Qualified Enquiries' },
            { value: '98', label: 'Performance Score' },
            { value: '<1s', label: 'Page Load' },
            { value: '6 wks', label: 'Delivery' },
        ],
        gallery: [
            { src: '/casestudy/website.png', caption: 'Home page design' },
        ],
        testimonial: {
            quote:
                'The new site finally explains what we do — and the enquiries prove it. Faster, cleaner and far easier to update.',
            author: 'A. Chowdhury',
            role: 'Marketing Lead, Meridian',
        },
    },
];

export const getCaseStudyBySlug = (slug?: string): CaseStudyItem | undefined =>
    caseStudiesData.find((c) => c.slug === slug);
