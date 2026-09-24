export type CaseStudyMetricIcon = 'arrow-up-right' | 'bar-chart' | 'arrow-down';

export interface CaseStudyMetric {
    value: string;
    label: string;
}

export interface CaseStudyGalleryItem {
    src: string;
    caption: string;
}

export interface CaseStudyReel {
    /** Canonical Instagram post / reel URL, rendered as an official embed. */
    url: string;
    caption: string;
}

export interface CaseStudyWebsite {
    /** Live site URL, rendered as an interactive iframe preview. */
    url: string;
    caption: string;
}

export interface CaseStudyApp {
    /** Shipped app / product name. */
    name: string;
    /** Product type, e.g. App, Game, SaaS. */
    kind: string;
    /** Market / niche. */
    niche: string;
    /** Small status / rating badge, e.g. "⭐ 4.8". */
    tag: string;
    desc: string;
    image?: string;
    emoji?: string;
    accent?: string;
    link: string;
}

export interface CaseStudyDesign {
    /** Behance (or other) embed URL rendered as an interactive iframe. */
    url: string;
}

export interface CaseStudyItem {
    id: string;
    slug: string;
    number: string;
    /** Card title (short client / product name) */
    client: string;
    category: string;
    service?: string;
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
    /** Optional embedded Instagram reels, shown as "Real Work" on the detail page. */
    reels?: CaseStudyReel[];
    /** Optional live website previews, shown as "Real Work" on the detail page. */
    websites?: CaseStudyWebsite[];
    /** Optional shipped apps / products, shown as "Real Work" on the detail page. */
    apps?: CaseStudyApp[];
    /** Optional image-design project embeds (e.g. Behance), shown as "Real Work". */
    designs?: CaseStudyDesign[];
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
        client: 'FoodCal AI, My Water Buddy & BD Weather',
        category: 'APP DEVELOPMENT',
        service: 'App Development',
        desc: 'Took our mobile apps from concept to polished, store-ready products on both iOS and Android, built to App Store standards.',
        metric: 'Shipped',
        metricLabel: 'iOS & Android',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/app.png',
        challenge:
            'We had several validated consumer app concepts and a tight launch window, but limited in-house build capacity. We needed polished products on both iOS and Android without doubling the build cost.',
        solution:
            'We designed and shipped cross-platform React Native apps — guided experiences, AI-assisted features, wearable sync and social sharing — covering strategy, UX and the full native builds on a fast timeline.',
        results: [
            'Shipped to the App Store and Google Play on schedule',
            'Polished, App-Store-standard build quality',
            'Stable, crash-free experience under peak load',
            'One codebase shipping to both iOS and Android',
        ],
        headline: 'FoodCal AI, My Water Buddy & BD Weather shipped to both app stores',
        summary:
            'From blank canvas to store launch — product strategy, UX design, a cross-platform React Native build and post-launch growth for our own app portfolio.',
        industry: 'Consumer Mobile Apps',
        timeline: 'Rapid build',
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
            { value: 'Shipped', label: 'iOS & Android' },
            { value: 'Polished', label: 'Build Quality' },
            { value: 'Stable', label: 'Crash-Free' },
            { value: 'Rapid', label: 'Time to Launch' },
        ],
        gallery: [
            { src: '/casestudy/app.png', caption: 'Daily activity dashboard' },
            { src: '/work/swiftoutlet/foodcal-ai-icon.png', caption: 'AI nutrition companion module' },
        ],
        apps: [
            {
                name: 'FoodCal AI',
                kind: 'App',
                niche: 'Health',
                tag: '⭐ 4.8',
                desc: 'Smart personal nutrition companion — track daily calories, macros and water intake effortlessly with advanced AI photo recognition.',
                image: '/work/swiftoutlet/foodcal-ai-icon.png',
                emoji: '🍎',
                accent: 'linear-gradient(135deg,#34d399,#0d9488)',
                link: 'https://www.swiftoutlet.com/foodcal-ai/',
            },
            {
                name: 'My Water Buddy',
                kind: 'App',
                niche: 'Wellness',
                tag: '💧 Live',
                desc: 'Smart water reminder and hydration tracker with sleep-aware notifications, beautiful animations, streaks and 15-language support.',
                image: '/work/swiftoutlet/mywaterbuddy-icon.png',
                emoji: '💧',
                accent: 'linear-gradient(135deg,#38bdf8,#2563eb)',
                link: 'https://play.google.com/store/apps/details?id=com.swiftoutlet.mywaterbuddy',
            },
            {
                name: 'BD Weather',
                kind: 'App',
                niche: 'Weather',
                tag: '🌦️ Live',
                desc: 'Senior-friendly Bangla weather app built for Bangladesh — zero ads, accessible design and accurate district-level data.',
                image: '/work/swiftoutlet/bdweather-icon.png',
                emoji: '🌦️',
                accent: 'linear-gradient(135deg,#818cf8,#7c3aed)',
                link: 'https://play.google.com/store/apps/details?id=com.swiftoutlet.bdweather',
            },
            {
                name: 'Project Nebula',
                kind: 'Game',
                niche: 'Action',
                tag: 'In Dev',
                desc: 'A fast-paced multiplayer sci-fi arena shooter crafted from the ground up for low-latency play on iOS and Android.',
                emoji: '🚀',
                accent: 'linear-gradient(45deg,#ff007f,#7f00ff)',
                link: 'https://www.swiftoutlet.com/#games',
            },
            {
                name: 'Mobile Car Detailing CRM',
                kind: 'SaaS',
                niche: 'Business / CRM',
                tag: '⚡ Live',
                desc: 'AI dispatch CRM for mobile car-detailing teams — voice-to-job entry, smart technician matching, WhatsApp dispatch and live reports.',
                image: '/work/swiftoutlet/detailing-crm-icon.svg',
                emoji: '🚗',
                accent: 'linear-gradient(135deg,#22d3ee,#2563eb)',
                link: 'https://www.swiftoutlet.com/detailing-crm/',
            },
            {
                name: 'ColdMail Pro',
                kind: 'SaaS',
                niche: 'B2B Sales',
                tag: 'Beta',
                desc: 'Automated B2B cold email outreach platform with contextual AI personalization and automatic conversion follow-ups.',
                emoji: '✉️',
                accent: 'linear-gradient(45deg,#10b981,#3b82f6)',
                link: 'https://www.swiftoutlet.com/#saas',
            },
        ],
        testimonial: {
            quote:
                'They took us from an idea on a whiteboard to a live product on both stores in a single quarter. The build quality is genuinely App Store standard.',
            author: 'S. Rahman',
            role: 'Founder, SwiftOutlet Apps',
        },
    },

    // 02 — SaaS Platform
    {
        id: 'detaily-field-service-crm',
        slug: 'detaily-field-service-crm',
        number: '02',
        client: 'Mobile Car Detailing CRM',
        category: 'SAAS PLATFORM',
        service: 'SaaS',
        desc: 'Built an AI dispatch CRM for mobile car-detailing teams — voice-to-job entry, smart technician matching, WhatsApp dispatch and live reporting — now a subscription product for other teams.',
        metric: 'Faster',
        metricLabel: 'Job Dispatch',
        metricIconType: 'bar-chart',
        image: '/casestudy/saas.png',
        challenge:
            'A fast-growing mobile car-detailing company was running operations on spreadsheets and group chats. Dispatch took hours, jobs slipped through the cracks and there was no visibility for owners.',
        solution:
            'We engineered a multi-tenant SaaS with role-based access, voice-to-job capture, automatic technician matching, WhatsApp dispatch and live reporting — packaged as a subscription product for other teams.',
        results: [
            'Dramatically faster job dispatch across the field team',
            'Other teams onboarded and pay a subscription for the platform',
            'Voice-to-job entry removed manual data typing',
            'Live operational reporting for owners and managers',
        ],
        headline: 'Mobile Car Detailing CRM turned messy dispatch into a subscription product',
        summary:
            'A multi-tenant field-service CRM — voice-to-job capture, smart technician matching, WhatsApp dispatch and real-time reporting — built to scale as a subscription business.',
        industry: 'Mobile Car Detailing / CRM',
        timeline: 'Rapid MVP, then ongoing',
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
            { value: 'Faster', label: 'Job Dispatch' },
            { value: 'Growing', label: 'Paying Teams' },
            { value: 'Rapid', label: 'Path to MVP' },
            { value: 'High', label: 'Uptime' },
        ],
        gallery: [
            { src: '/casestudy/saas.png', caption: 'Dispatch & operations dashboard' },
            { src: '/work/swiftoutlet/detailing-crm-icon.svg', caption: 'Mobile Car Detailing CRM platform mark' },
        ],
        apps: [
            {
                name: 'Mobile Car Detailing CRM',
                kind: 'SaaS',
                niche: 'Automotive Services',
                tag: '⚡ Live',
                desc: 'AI dispatch CRM for mobile car-detailing teams — voice-to-job entry, smart technician matching, WhatsApp dispatch and live owner reports.',
                image: '/work/swiftoutlet/detailing-crm-icon.svg',
                emoji: '🚗',
                accent: 'linear-gradient(135deg,#22d3ee,#2563eb)',
                link: 'https://www.swiftoutlet.com/detailing-crm/',
            },
        ],
        testimonial: {
            quote:
                'What was an internal headache is now a product our peers pay for. The dispatch time alone paid for the build within weeks.',
            author: 'M. Iqbal',
            role: 'Operations Director, Mobile Car Detailing CRM',
        },
    },

    // 03 — Website Development
    {
        id: 'meridian-corporate-website',
        slug: 'meridian-corporate-website',
        number: '03',
        client: 'PurePour Concrete, Everstruct & Cava Granite',
        category: 'WEB DEVELOPMENT',
        service: 'Web Design and Development',
        desc: 'Rebuilt three slow, outdated corporate sites into fast, SEO-ready platforms that lifted qualified enquiries and turned each site into a real lead engine.',
        metric: 'SEO-Ready',
        metricLabel: 'Corporate Rebuild',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/website.png',
        challenge:
            'A growing B2B company had an outdated website that loaded in seconds, failed to explain its services clearly and converted almost no visitors into enquiries.',
        solution:
            'We rebuilt the site on a modern component-driven stack with a clear content hierarchy, responsive layouts, SEO-ready structure and performance-first loading — deployed with continuous delivery.',
        results: [
            'A clear rise in qualified enquiries after launch',
            'Sub-second page load with a top-tier performance score',
            'Responsive, accessible design system across all pages',
            'SEO-ready structure with automated deployments',
        ],
        headline: 'PurePour Concrete, Everstruct & Cava Granite turned outdated sites into lead engines',
        summary:
            'A conversion-focused corporate website rebuild — clear content architecture, a reusable design system, sub-second performance and SEO-ready deployment.',
        industry: 'Construction & Property',
        timeline: 'Fast turnaround',
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
            { value: 'Growing', label: 'Qualified Enquiries' },
            { value: 'Top-Tier', label: 'Performance Score' },
            { value: 'Sub-Second', label: 'Page Load' },
            { value: 'Fast', label: 'Delivery' },
        ],
        gallery: [
            { src: '/casestudy/website.png', caption: 'Home page design' },
        ],
        websites: [
            { url: 'https://purepourconcrete.com/', caption: 'PurePour Concrete' },
            { url: 'https://everstruct.ca/', caption: 'Everstruct' },
            { url: 'https://cavagranite.com/', caption: 'Cava Granite' },
            { url: 'https://alhaddafcarwash.com/', caption: 'Al Haddaf Car Wash' },
            { url: 'https://www.decoscape.com/', caption: 'Decoscape' },
            { url: 'https://redandwhitecleaningservices.com/', caption: 'Red & White Cleaning Services' },
            { url: 'https://oaktree.marketing/', caption: 'Oak Tree Marketing' },
        ],
        testimonial: {
            quote:
                'The new site finally explains what we do — and the enquiries prove it. Faster, cleaner and far easier to update.',
            author: 'A. Chowdhury',
            role: 'Marketing Lead, Everstruct',
        },
    },

    // 04 — AI Automation
    {
        id: 'flowforge-ai-automation',
        slug: 'flowforge-ai-automation',
        number: '04',
        client: 'FlowForge Ops',
        category: 'AI Automation',
        service: 'AI Automation',
        desc: 'Replaced manual back-office workflows with AI automations that reclaimed hours of team time every week.',
        metric: 'Automated',
        metricLabel: 'Weekly Time Saved',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/aiautomation.png',
        challenge:
            'FlowForge\u2019s operations team was drowning in repetitive work \u2014 copying data between tools, chasing approvals and writing the same follow-ups by hand, every single day.',
        solution:
            'We mapped their core workflows and built AI-assisted automations: inbox triage, document parsing, auto-generated summaries and cross-tool syncs that run without human touch.',
        results: [
            'Hours of manual work removed from the team every week',
            'Inbox and document triage fully automated end to end',
            'Handoffs between tools synced in real time with no re-typing',
            'Error-prone manual data entry cut to near zero',
        ],
        headline: 'FlowForge reclaimed hours every week with AI automation',
        summary:
            'A workflow automation programme \u2014 process mapping, AI-assisted triage and cross-tool syncs that gave an operations team its week back.',
        industry: 'Operations / SaaS',
        timeline: 'Rapid rollout',
        platform: 'Cloud workflow stack',
        services: ['AI Automation', 'Process Mapping', 'Systems Integration'],
        deliverables: [
            'Workflow audit & automation roadmap',
            'AI inbox triage & document parsing',
            'Automated cross-tool data syncs',
            'Approval & notification workflows',
            'Monitoring dashboard and runbook',
        ],
        metrics: [
            { value: 'Hours', label: 'Saved Weekly' },
            { value: 'Multiple', label: 'Workflows Automated' },
            { value: 'Fast', label: 'Delivery' },
        ],
        gallery: [
            { src: '/casestudy/aiautomation.png', caption: 'Automation control centre' },
            { src: '/casestudy/saas.png', caption: 'Workflow run history' },
        ],
        testimonial: {
            quote:
                'The automations quietly do the work we used to dread. We gained more than a full working day back every week.',
            author: 'R. Nakamura',
            role: 'Head of Operations, FlowForge',
        },
    },

    // 05 — SEO & AEO
    {
        id: 'northstar-legal-seo',
        slug: 'northstar-legal-seo',
        number: '05',
        client: 'Northstar Legal',
        category: 'SEO & AEO',
        service: 'SEO & AEO',
        desc: 'A focused SEO and answer-engine strategy grew organic leads substantially for a boutique law firm.',
        metric: 'Growing',
        metricLabel: 'Organic Lead Growth',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/SEO.png',
        challenge:
            'Northstar ranked for almost nothing, competed with national firms on pricey keywords and was invisible in AI-generated search answers.',
        solution:
            'We built a topic-cluster content strategy, optimised for answer engines with structured data and concise direct answers, and earned authoritative citations across the practice areas.',
        results: [
            'Strong, compounding growth in organic leads',
            'Top-three rankings for high-intent local practice areas',
            'Featured in AI answer results for core legal questions',
            'Steady, compounding organic pipeline without paid spend',
        ],
        headline: 'Northstar Legal turned search into a steady lead engine',
        summary:
            'An SEO and answer-engine optimisation programme \u2014 topic clusters, structured data and citable content that turned search into a lead engine.',
        industry: 'Legal Services',
        timeline: 'Ongoing programme',
        platform: 'Organic search & AI answers',
        services: ['SEO & AEO', 'Content Strategy', 'Technical SEO'],
        deliverables: [
            'Keyword & intent research',
            'Topic-cluster content plan',
            'Technical SEO and schema markup',
            'Answer-engine optimised pages',
            'Monthly ranking & lead reporting',
        ],
        metrics: [
            { value: 'Growing', label: 'Organic Leads' },
            { value: 'Top', label: 'Core Keyword Ranks' },
            { value: 'Ongoing', label: 'Programme' },
        ],
        gallery: [
            { src: '/casestudy/SEO.png', caption: 'Organic growth dashboard' },
            { src: '/casestudy/website.png', caption: 'Answer-optimised article layout' },
        ],
        testimonial: {
            quote:
                'Our phones ring from people who found us through search. The growth has been steady and, crucially, sustainable.',
            author: 'H. Osei',
            role: 'Managing Partner, Northstar Legal',
        },
    },

    // 06 — Social Media Management
    {
        id: 'lumen-social-media',
        slug: 'lumen-social-media',
        number: '06',
        client: 'Lumen Social',
        category: 'Social Media Management',
        service: 'Social Media Management',
        desc: 'A full social content engine took a lifestyle brand to millions of monthly impressions across platforms.',
        metric: 'Millions',
        metricLabel: 'Monthly Reach',
        metricIconType: 'bar-chart',
        image: '/casestudy/socialmedia.png',
        challenge:
            'Lumen posted inconsistently with no clear voice, so reach stayed flat and followers rarely engaged or converted.',
        solution:
            'We built a monthly content system \u2014 content pillars, short-form video, a consistent visual identity and a community-response playbook across every major platform.',
        results: [
            'Millions of monthly impressions sustained across platforms',
            'Consistent posting cadence with a recognisable brand voice',
            'Sharp rise in saves, shares and profile visits',
            'Community responses handled within the hour',
        ],
        headline: 'Lumen Social scaled reach across every platform',
        summary:
            'A managed social media programme \u2014 content pillars, short-form video, consistent art direction and community management that scaled reach.',
        industry: 'Lifestyle & Consumer',
        timeline: 'Ongoing',
        platform: 'Instagram, TikTok, LinkedIn',
        services: ['Social Media Management', 'Content Production', 'Community Management'],
        deliverables: [
            'Content strategy & pillar framework',
            'Monthly short-form video production',
            'Unified visual and tone guidelines',
            'Publishing calendar & scheduling',
            'Engagement and performance reporting',
        ],
        metrics: [
            { value: 'Millions', label: 'Monthly Impressions' },
            { value: 'Higher', label: 'Posting Cadence' },
            { value: 'Up', label: 'Engagement Rate' },
        ],
        gallery: [
            { src: '/casestudy/socialmedia.png', caption: 'Campaign content grid' },
            { src: '/casestudy/saas.png', caption: 'Monthly analytics snapshot' },
        ],
        testimonial: {
            quote:
                'They gave our brand a real voice and a system that runs. Our reach has never looked like this.',
            author: 'J. Alvarez',
            role: 'Brand Lead, Lumen Social',
        },
    },

    // 07 — Google Advertising
    {
        id: 'peakform-google-ads',
        slug: 'peakform-google-ads',
        number: '07',
        client: 'PeakForm Fitness',
        category: 'Google Advertising',
        service: 'Google Advertising',
        desc: 'A rebuilt Google Ads account delivered a verified, profitable return on ad spend for a fitness studio chain.',
        metric: 'Profitable',
        metricLabel: 'Verified ROAS',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/googleadd.png',
        challenge:
            'PeakForm was burning budget on broad match keywords with poor tracking, so they could never tell which campaigns actually brought in members.',
        solution:
            'We rebuilt the account around high-intent search, tightened targeting and negatives, and installed conversion tracking so every dollar could be attributed to a sign-up.',
        results: [
            'Profitable, tracked return on ad spend across the account',
            'Cost per lead cut sharply through intent-based targeting',
            'Full conversion tracking tied to real sign-ups',
            'Scalable campaign structure ready for new locations',
        ],
        headline: 'PeakForm Fitness turned ad spend into profitable sign-ups',
        summary:
            'A full Google Ads rebuild \u2014 high-intent keyword structure, clean tracking and continuous optimisation that turned ad spend into predictable sign-ups.',
        industry: 'Health & Fitness',
        timeline: 'Ongoing campaign',
        platform: 'Google Ads',
        services: ['Google Advertising', 'Conversion Tracking', 'Landing Page Optimisation'],
        deliverables: [
            'Account audit & restructure',
            'High-intent search campaign build',
            'Conversion tracking & attribution setup',
            'Ad copy and creative testing',
            'Weekly optimisation and reporting',
        ],
        metrics: [
            { value: 'Profitable', label: 'Verified ROAS' },
            { value: 'Lower', label: 'Cost Per Lead' },
            { value: 'Ongoing', label: 'Campaign Run' },
        ],
        gallery: [
            { src: '/casestudy/googleadd.png', caption: 'Campaign performance view' },
            { src: '/casestudy/website.png', caption: 'Conversion landing page' },
        ],
        testimonial: {
            quote:
                'For the first time we know exactly what our ad spend returns. The numbers are real and they keep improving.',
            author: 'D. Whitmore',
            role: 'Owner, PeakForm Fitness',
        },
    },

    // 08 — Meta Advertising
    {
        id: 'aurora-meta-ads',
        slug: 'aurora-meta-ads',
        number: '08',
        client: 'Aurora Skincare',
        category: 'Meta Advertising',
        service: 'Meta Advertising',
        desc: 'Creative-led Meta campaigns delivered a profitable return on ad spend for a skincare brand\u2019s launch.',
        metric: 'Profitable',
        metricLabel: 'Meta ROAS',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/metaadd.png',
        challenge:
            'Aurora\u2019s Meta ads relied on tired creative and broad audiences, so costs climbed while sales plateaued.',
        solution:
            'We rebuilt around a creative-testing engine \u2014 fresh hooks and formats weekly, tight retargeting, and a clean purchase funnel tracked end to end.',
        results: [
            'Profitable return on ad spend across Meta campaigns',
            'Winning creative angles identified through rapid testing',
            'Cost per purchase reduced with tighter retargeting',
            'A repeatable creative pipeline for future launches',
        ],
        headline: 'Aurora Skincare made new-customer acquisition profitable',
        summary:
            'A creative-led Meta advertising programme \u2014 structured testing, refined audiences and full-funnel tracking that made new-customer acquisition profitable.',
        industry: 'Beauty & Skincare',
        timeline: 'Ongoing campaign',
        platform: 'Meta (Facebook & Instagram)',
        services: ['Meta Advertising', 'Creative Strategy', 'Audience Testing'],
        deliverables: [
            'Account and audience audit',
            'Creative testing framework',
            'Full-funnel campaign build',
            'Retargeting and lookalike audiences',
            'Performance dashboard and reporting',
        ],
        metrics: [
            { value: 'Profitable', label: 'Meta ROAS' },
            { value: 'Lower', label: 'Cost Per Purchase' },
            { value: 'Ongoing', label: 'Campaign Run' },
        ],
        gallery: [
            { src: '/casestudy/metaadd.png', caption: 'Ad performance breakdown' },
            { src: '/casestudy/website.png', caption: 'Creative test gallery' },
        ],
        testimonial: {
            quote:
                'The creative testing changed everything. We finally have ads that sell and numbers we trust.',
            author: 'L. Fontaine',
            role: 'Founder, Aurora Skincare',
        },
    },

    // 09 — Call & Email Handling
    {
        id: 'vertex-realty-call-email',
        slug: 'vertex-realty-call-email',
        number: '09',
        client: 'Vertex Realty',
        category: 'Call & Email Handling',
        service: 'Call & Email Handling',
        desc: 'A dedicated handling desk ensured almost every inbound lead was answered and routed, not lost.',
        metric: 'Answered',
        metricLabel: 'Inbound Leads',
        metricIconType: 'bar-chart',
        image: '/casestudy/call-email.png',
        challenge:
            'Vertex agents were constantly in viewings, so calls and emails went unanswered and warm buyer leads slipped away to competitors.',
        solution:
            'We set up a professional handling desk \u2014 trained responders, clear qualification scripts, and instant routing of qualified leads straight to the right agent.',
        results: [
            'Almost all inbound calls and emails answered and logged',
            'Qualified leads routed to agents within minutes',
            'Zero lost enquiries outside business hours',
            'Clean CRM records for every conversation',
        ],
        headline: 'Vertex Realty stopped losing inbound leads',
        summary:
            'An outsourced call and email handling desk \u2014 trained responders, consistent qualification and instant routing that stopped leads falling through the cracks.',
        industry: 'Real Estate',
        timeline: 'Ongoing',
        platform: 'Phone, email & CRM',
        services: ['Call & Email Handling', 'Lead Qualification', 'CRM Integration'],
        deliverables: [
            'Trained handling team & scripts',
            'Lead qualification framework',
            'Instant routing to agents',
            'CRM logging and tagging',
            'Weekly response-time reporting',
        ],
        metrics: [
            { value: 'Nearly All', label: 'Leads Answered' },
            { value: 'Minutes', label: 'Avg. Response Time' },
            { value: 'Round-the-Clock', label: 'Coverage' },
        ],
        gallery: [
            { src: '/casestudy/call-email.png', caption: 'Lead handling dashboard' },
            { src: '/casestudy/app.png', caption: 'Agent view and call log' },
        ],
        testimonial: {
            quote:
                'No more missed calls. Every enquiry is answered, qualified and passed to the right person \u2014 our agents just sell.',
            author: 'T. Bennett',
            role: 'Sales Director, Vertex Realty',
        },
    },

    // 10 — Image Design
    {
        id: 'maison-atelier-image-design',
        slug: 'maison-atelier-image-design',
        number: '10',
        client: 'Maison Atelier',
        category: 'Image Design',
        service: 'Image Design',
        desc: 'A refined image design and art direction system elevated a large set of brand assets for a design house.',
        metric: 'Premium',
        metricLabel: 'Brand Assets',
        metricIconType: 'bar-chart',
        image: '/casestudy/Imageediting.png',
        challenge:
            'Maison Atelier\u2019s visuals were inconsistent across channels, diluting a premium positioning and slowing every marketing launch.',
        solution:
            'We created a cohesive art-direction system \u2014 templates, retouching standards and a reusable asset library \u2014 then produced a large batch of on-brand imagery.',
        results: [
            'A large batch of polished brand assets delivered on a consistent system',
            'Visual identity aligned across every marketing channel',
            'Production turnaround cut with reusable templates',
            'A premium look that reinforced the brand positioning',
        ],
        headline: 'Maison Atelier lifted its brand assets to a premium standard',
        summary:
            'An image design and art-direction programme \u2014 a reusable style system, professional retouching and a well-organised asset library for a premium brand.',
        industry: 'Design & Lifestyle',
        timeline: 'Fast delivery',
        platform: 'Design system & asset library',
        services: ['Image Design', 'Art Direction', 'Retouching'],
        deliverables: [
            'Art direction & style guide',
            'Reusable template system',
            'A large batch of designed and retouched assets',
            'Organised, searchable asset library',
            'Usage guidelines for the team',
        ],
        metrics: [
            { value: 'At Scale', label: 'Assets Delivered' },
            { value: 'Faster', label: 'Turnaround' },
            { value: 'Fast', label: 'Delivery' },
        ],
        gallery: [
            { src: '/casestudy/Imageediting.png', caption: 'Signature campaign imagery' },
            { src: '/casestudy/website.png', caption: 'Art-direction style guide' },
        ],
        designs: [
            { url: 'https://www.behance.net/embed/project/255802925?ilo0=1' },
            { url: 'https://www.behance.net/embed/project/255092437?ilo0=1' },
            { url: 'https://www.behance.net/embed/project/255090135?ilo0=1' },
            { url: 'https://www.behance.net/embed/project/255087449?ilo0=1' },
            { url: 'https://www.behance.net/embed/project/255085835?ilo0=1' },
        ],
        testimonial: {
            quote:
                'Every image now feels unmistakably ours. The system saves us time and makes the brand look genuinely premium.',
            author: 'C. Moreau',
            role: 'Creative Director, Maison Atelier',
        },
    },

    // 11 — Video Editing
    {
        id: 'reelworks-video-editing',
        slug: 'reelworks-video-editing',
        number: '11',
        client: 'Reelworks Studio',
        category: 'Video Editing',
        service: 'Video Editing',
        desc: 'High-volume video editing and repurposing helped a creator studio grow to millions of total views.',
        metric: 'Viral',
        metricLabel: 'Total Views',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/video%20editing.png',
        challenge:
            'Reelworks had raw footage piling up but no editing capacity, so slow turnaround meant trends and momentum were missed.',
        solution:
            'We built a fast editing pipeline \u2014 hooks, captions, pacing and repurposing long-form into short clips \u2014 delivered on a predictable weekly schedule.',
        results: [
            'Millions of views generated across published clips',
            'Turnaround shortened from days to well under a day',
            'Long-form content repurposed into high-performing shorts',
            'A steady content cadence that kept momentum alive',
        ],
        headline: 'Reelworks Studio turned a backlog into millions of views',
        summary:
            'A high-volume video editing pipeline \u2014 punchy hooks, captions and repurposing that turned a backlog of footage into millions of views.',
        industry: 'Media & Entertainment',
        timeline: 'Ongoing',
        platform: 'YouTube, TikTok, Reels',
        services: ['Video Editing', 'Content Repurposing', 'Post Production'],
        deliverables: [
            'Editing pipeline & style guide',
            'Short-form clips from long-form footage',
            'Subtitles, captions and motion graphics',
            'Colour, audio and pacing polish',
            'Predictable weekly delivery schedule',
        ],
        metrics: [
            { value: 'Millions', label: 'Total Views' },
            { value: 'Same-Day', label: 'Turnaround' },
            { value: 'Higher', label: 'Output Volume' },
        ],
        gallery: [
            { src: '/casestudy/video%20editing.png', caption: 'Edited short-form clip' },
            { src: '/casestudy/app.png', caption: 'Editing timeline preview' },
        ],
        reels: [
            { url: 'https://www.instagram.com/reel/DddrTZzzr28/', caption: 'Travel short-form reel \u2014 @familytravelgenie_' },
            { url: 'https://www.instagram.com/reel/DdT9FyMzbfG/', caption: 'Travel short-form reel \u2014 @familytravelgenie_' },
            { url: 'https://www.instagram.com/reel/Dcf8kPizf9L/', caption: 'Travel short-form reel \u2014 @familytravelgenie_' },
            { url: 'https://www.instagram.com/reel/Ddj1ZCzpene/', caption: 'Interior design reel \u2014 @zzdesigninteriors' },
            { url: 'https://www.instagram.com/reel/DdZtplXTPDY/', caption: 'Interior design reel \u2014 @zzdesigninteriors' },
            { url: 'https://www.instagram.com/reel/DdE9CoIBwv3/', caption: 'Interior design reel \u2014 @zzdesigninteriors' },
            { url: 'https://www.instagram.com/reel/DcgmC-_RBLn/', caption: 'Interior design reel \u2014 @zzdesigninteriors' },
        ],
        testimonial: {
            quote:
                'They turned our backlog into a content machine. Fast turnaround, sharp edits, and the views followed.',
            author: 'M. Costa',
            role: 'Founder, Reelworks Studio',
        },
    },
];

export const getCaseStudyBySlug = (slug?: string): CaseStudyItem | undefined =>
    caseStudiesData.find((c) => c.slug === slug);
