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
        service: 'App Development',
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
        service: 'SaaS',
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
        service: 'Web Design and Development',
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

    // 04 — AI Automation
    {
        id: 'flowforge-ai-automation',
        slug: 'flowforge-ai-automation',
        number: '04',
        client: 'FlowForge Ops',
        category: 'AI Automation',
        service: 'AI Automation',
        desc: 'Replaced manual back-office workflows with AI automations that reclaimed 14+ hours of team time every week.',
        metric: '14+ Hrs Saved Weekly',
        metricLabel: 'Team Time Reclaimed',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/aiautomation.png',
        challenge:
            'FlowForge\u2019s operations team was drowning in repetitive work \u2014 copying data between tools, chasing approvals and writing the same follow-ups by hand, every single day.',
        solution:
            'We mapped their core workflows and built AI-assisted automations: inbox triage, document parsing, auto-generated summaries and cross-tool syncs that run without human touch.',
        results: [
            '14+ hours of manual work removed from the team every week',
            'Inbox and document triage fully automated end to end',
            'Handoffs between tools synced in real time with no re-typing',
            'Error-prone manual data entry cut to near zero',
        ],
        headline: 'FlowForge reclaimed 14+ hours a week with AI automation',
        summary:
            'A workflow automation programme \u2014 process mapping, AI-assisted triage and cross-tool syncs that gave an operations team its week back.',
        industry: 'Operations / SaaS',
        timeline: '8 weeks',
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
            { value: '14+', label: 'Hours Saved Weekly' },
            { value: '6', label: 'Workflows Automated' },
            { value: '8 wks', label: 'Delivery' },
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
        desc: 'A focused SEO and answer-engine strategy grew organic leads by 240% for a boutique law firm.',
        metric: '+240% Organic Leads',
        metricLabel: 'Organic Lead Growth',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/SEO.png',
        challenge:
            'Northstar ranked for almost nothing, competed with national firms on pricey keywords and was invisible in AI-generated search answers.',
        solution:
            'We built a topic-cluster content strategy, optimised for answer engines with structured data and concise direct answers, and earned authoritative citations across the practice areas.',
        results: [
            '240% growth in organic leads within nine months',
            'Top-three rankings for high-intent local practice areas',
            'Featured in AI answer results for core legal questions',
            'Steady, compounding organic pipeline without paid spend',
        ],
        headline: 'Northstar Legal grew organic leads 240% in nine months',
        summary:
            'An SEO and answer-engine optimisation programme \u2014 topic clusters, structured data and citable content that turned search into a lead engine.',
        industry: 'Legal Services',
        timeline: '9 months',
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
            { value: '+240%', label: 'Organic Leads' },
            { value: 'Top 3', label: 'Core Keyword Ranks' },
            { value: '9 mo', label: 'Programme' },
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
        desc: 'A full social content engine took a lifestyle brand to 3.8M monthly impressions across platforms.',
        metric: '3.8M Monthly Impressions',
        metricLabel: 'Monthly Reach',
        metricIconType: 'bar-chart',
        image: '/casestudy/socialmedia.png',
        challenge:
            'Lumen posted inconsistently with no clear voice, so reach stayed flat and followers rarely engaged or converted.',
        solution:
            'We built a monthly content system \u2014 content pillars, short-form video, a consistent visual identity and a community-response playbook across every major platform.',
        results: [
            '3.8M monthly impressions sustained across platforms',
            'Consistent posting cadence with a recognisable brand voice',
            'Sharp rise in saves, shares and profile visits',
            'Community responses handled within the hour',
        ],
        headline: 'Lumen Social reached 3.8M monthly impressions',
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
            { value: '3.8M', label: 'Monthly Impressions' },
            { value: '5x', label: 'Posting Cadence' },
            { value: '+62%', label: 'Engagement Rate' },
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
        desc: 'A rebuilt Google Ads account delivered a verified 4.6x return on ad spend for a fitness studio chain.',
        metric: '4.6x Verified ROAS',
        metricLabel: 'Return On Ad Spend',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/googleadd.png',
        challenge:
            'PeakForm was burning budget on broad match keywords with poor tracking, so they could never tell which campaigns actually brought in members.',
        solution:
            'We rebuilt the account around high-intent search, tightened targeting and negatives, and installed conversion tracking so every dollar could be attributed to a sign-up.',
        results: [
            '4.6x verified return on ad spend across the account',
            'Cost per lead cut sharply through intent-based targeting',
            'Full conversion tracking tied to real sign-ups',
            'Scalable campaign structure ready for new locations',
        ],
        headline: 'PeakForm Fitness hit a verified 4.6x ROAS',
        summary:
            'A full Google Ads rebuild \u2014 high-intent keyword structure, clean tracking and continuous optimisation that turned ad spend into predictable sign-ups.',
        industry: 'Health & Fitness',
        timeline: '6 months',
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
            { value: '4.6x', label: 'Verified ROAS' },
            { value: '-38%', label: 'Cost Per Lead' },
            { value: '6 mo', label: 'Campaign Run' },
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
        desc: 'Creative-led Meta campaigns delivered a 3.9x return on ad spend for a skincare brand\u2019s launch.',
        metric: '3.9x Meta ROAS',
        metricLabel: 'Return On Ad Spend',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/metaadd.png',
        challenge:
            'Aurora\u2019s Meta ads relied on tired creative and broad audiences, so costs climbed while sales plateaued.',
        solution:
            'We rebuilt around a creative-testing engine \u2014 fresh hooks and formats weekly, tight retargeting, and a clean purchase funnel tracked end to end.',
        results: [
            '3.9x return on ad spend across Meta campaigns',
            'Winning creative angles identified through rapid testing',
            'Cost per purchase reduced with tighter retargeting',
            'A repeatable creative pipeline for future launches',
        ],
        headline: 'Aurora Skincare reached a 3.9x Meta ROAS',
        summary:
            'A creative-led Meta advertising programme \u2014 structured testing, refined audiences and full-funnel tracking that made new-customer acquisition profitable.',
        industry: 'Beauty & Skincare',
        timeline: '4 months',
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
            { value: '3.9x', label: 'Meta ROAS' },
            { value: '-31%', label: 'Cost Per Purchase' },
            { value: '4 mo', label: 'Campaign Run' },
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
        desc: 'A dedicated handling desk ensured 94% of inbound leads were answered and routed, not lost.',
        metric: '94% Leads Answered',
        metricLabel: 'Inbound Answer Rate',
        metricIconType: 'bar-chart',
        image: '/casestudy/call-email.png',
        challenge:
            'Vertex agents were constantly in viewings, so calls and emails went unanswered and warm buyer leads slipped away to competitors.',
        solution:
            'We set up a professional handling desk \u2014 trained responders, clear qualification scripts, and instant routing of qualified leads straight to the right agent.',
        results: [
            '94% of inbound calls and emails answered and logged',
            'Qualified leads routed to agents within minutes',
            'Zero lost enquiries outside business hours',
            'Clean CRM records for every conversation',
        ],
        headline: 'Vertex Realty answered 94% of inbound leads',
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
            { value: '94%', label: 'Leads Answered' },
            { value: '<5 min', label: 'Avg. Response Time' },
            { value: '24/7', label: 'Coverage' },
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
        desc: 'A refined image design and art direction system elevated 200+ brand assets for a design house.',
        metric: '200+ Brands Elevated',
        metricLabel: 'Assets Delivered',
        metricIconType: 'bar-chart',
        image: '/casestudy/Imageediting.png',
        challenge:
            'Maison Atelier\u2019s visuals were inconsistent across channels, diluting a premium positioning and slowing every marketing launch.',
        solution:
            'We created a cohesive art-direction system \u2014 templates, retouching standards and a reusable asset library \u2014 then produced a large batch of on-brand imagery.',
        results: [
            '200+ polished brand assets delivered on a consistent system',
            'Visual identity aligned across every marketing channel',
            'Production turnaround cut with reusable templates',
            'A premium look that reinforced the brand positioning',
        ],
        headline: 'Maison Atelier elevated 200+ brand assets',
        summary:
            'An image design and art-direction programme \u2014 a reusable style system, professional retouching and a well-organised asset library for a premium brand.',
        industry: 'Design & Lifestyle',
        timeline: '10 weeks',
        platform: 'Design system & asset library',
        services: ['Image Design', 'Art Direction', 'Retouching'],
        deliverables: [
            'Art direction & style guide',
            'Reusable template system',
            '200+ designed and retouched assets',
            'Organised, searchable asset library',
            'Usage guidelines for the team',
        ],
        metrics: [
            { value: '200+', label: 'Assets Delivered' },
            { value: '2x', label: 'Faster Turnaround' },
            { value: '10 wks', label: 'Delivery' },
        ],
        gallery: [
            { src: '/casestudy/Imageediting.png', caption: 'Signature campaign imagery' },
            { src: '/casestudy/website.png', caption: 'Art-direction style guide' },
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
        desc: 'High-volume video editing and repurposing helped a creator studio pass 50M total views.',
        metric: '50M+ Views Generated',
        metricLabel: 'Total Video Views',
        metricIconType: 'arrow-up-right',
        image: '/casestudy/video%20editing.png',
        challenge:
            'Reelworks had raw footage piling up but no editing capacity, so slow turnaround meant trends and momentum were missed.',
        solution:
            'We built a fast editing pipeline \u2014 hooks, captions, pacing and repurposing long-form into short clips \u2014 delivered on a predictable weekly schedule.',
        results: [
            '50M+ total views generated across published clips',
            'Turnaround shortened from days to under 24 hours',
            'Long-form content repurposed into high-performing shorts',
            'A steady content cadence that kept momentum alive',
        ],
        headline: 'Reelworks Studio generated 50M+ views',
        summary:
            'A high-volume video editing pipeline \u2014 punchy hooks, captions and repurposing that turned a backlog of footage into 50M+ views.',
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
            { value: '50M+', label: 'Total Views' },
            { value: '<24 hrs', label: 'Turnaround' },
            { value: '4x', label: 'Output Volume' },
        ],
        gallery: [
            { src: '/casestudy/video%20editing.png', caption: 'Edited short-form clip' },
            { src: '/casestudy/app.png', caption: 'Editing timeline preview' },
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
