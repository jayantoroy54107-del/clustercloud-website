import React from 'react';
import { Scissors, Clapperboard, Film, Sparkles } from 'lucide-react';
import {
    BrandShowcasePage,
    type BrandShowcaseConfig,
    type BrandShowcasePageProps,
} from './BrandShowcasePage';

const config: BrandShowcaseConfig = {
    brandName: 'Clipping Fly',
    route: 'brand-clipping-fly',
    url: 'https://new.clippingfly.com/',
    urlLabel: 'clippingfly.com',
    badge: 'VIDEO EDITING & CONTENT REPURPOSING',
    badgeIcon: Sparkles,
    badgeClass: 'bg-gradient-to-r from-violet-50 to-pink-50 border-violet-100 text-violet-700',
    headingLead: 'Scroll-Stopping',
    headingGradientText: 'Video Content',
    headingGradientClass: 'from-[#8B5CF6] via-[#A855F7] to-[#EC4899]',
    headingTail: ', Edited & Repurposed',
    introStrong: 'Clipping Fly',
    intro:
        'is a professional video editing studio turning long-form content into high-performing short-form clips, polished podcasts, motion graphics, and channel-ready assets — engineered for retention and reach.',
    primaryBtnGradient: 'from-[#8B5CF6] to-[#EC4899] shadow-violet-500/25',
    accentText: 'text-[#8B5CF6]',
    accentSolid: 'bg-[#8B5CF6] hover:bg-[#7C3AED]',
    chipClass: 'text-violet-700 border border-violet-200 hover:border-violet-400 hover:bg-violet-50/70',
    crumbNameClass: 'text-[#8B5CF6]',
    glowA: 'bg-gradient-to-b from-violet-100/50 via-pink-50/40 to-transparent',
    glowB: 'bg-fuchsia-100/40',
    glowC: 'bg-pink-100/30',
    statsGradient: 'from-violet-600 to-pink-600',
    stats: [
        { value: 'Short', label: 'Form First', desc: 'Reels, Shorts & TikToks' },
        { value: 'Long', label: 'Form Ready', desc: 'Podcasts & YouTube' },
        { value: '24h', label: 'Fast Turnaround', desc: 'Rapid clip delivery' },
        { value: '100%', label: 'Retention Focused', desc: 'Hooked from frame one' },
    ],
    categoriesLabel: 'Editing Capabilities',
    categoriesLabelClass: 'text-[#8B5CF6]',
    categoriesHeading: 'Every Video Format, One Studio',
    categoriesSubheading:
        'From podcast repurposing to motion graphics — content that earns attention.',
    categories: [
        {
            icon: Scissors,
            title: 'Short-Form Clipping',
            subtitle: 'Vertical clips engineered to stop the scroll.',
            color: 'from-violet-500 to-purple-600',
            badge: 'Reels & Shorts',
            details:
                'Long-form videos cut into punchy vertical clips with captions, hooks, and pacing optimized for TikTok, Reels, and YouTube Shorts.',
        },
        {
            icon: Clapperboard,
            title: 'Long-Form & Podcasts',
            subtitle: 'Polished edits for YouTube and shows.',
            color: 'from-purple-500 to-fuchsia-600',
            badge: 'YouTube Ready',
            details:
                'Multi-cam podcast edits, clean audio repair, b-roll integration, and branded lower-thirds that keep long-form content engaging end to end.',
        },
        {
            icon: Film,
            title: 'Motion Graphics & Design',
            subtitle: 'Animated assets that elevate the story.',
            color: 'from-pink-500 to-rose-600',
            badge: 'Animated',
            details:
                'Animated titles, kinetic typography, thumbnail design, and brand motion systems that make every frame feel intentional and premium.',
        },
    ],
    productsLabel: 'Editing Services',
    productsLabelClass: 'text-fuchsia-600',
    productsHeading: 'What Clipping Fly Delivers',
    productsCtaLabel: 'View all services on clippingfly.com',
    products: [
        {
            id: 'short-form-clipping',
            name: 'Short-Form Clipping',
            category: 'Vertical Video',
            rating: '📱 Reels & Shorts',
            desc: 'Punchy vertical clips with dynamic captions, hooks, and sound design optimized for maximum retention and reach.',
            link: 'https://new.clippingfly.com/',
            status: 'Most Popular',
            tagColor: 'bg-violet-50 text-violet-700 border-violet-200',
        },
        {
            id: 'podcast-repurposing',
            name: 'Podcast Repurposing',
            category: 'Content Repurposing',
            rating: '🎙️ Repurposed',
            desc: 'Turn one long podcast into a month of clips, audiograms, and quote graphics — reusing every minute of value.',
            link: 'https://new.clippingfly.com/',
            status: 'Core Service',
            tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
        },
        {
            id: 'youtube-editing',
            name: 'YouTube Editing',
            category: 'Long-Form',
            rating: '▶️ Channel Ready',
            desc: 'Full-length YouTube edits with b-roll, motion graphics, pacing, and thumbnails that drive click-through and watch time.',
            link: 'https://new.clippingfly.com/',
            status: 'Core Service',
            tagColor: 'bg-pink-50 text-pink-700 border-pink-200',
        },
        {
            id: 'motion-graphics',
            name: 'Motion Graphics',
            category: 'Animation',
            rating: '✨ Animated',
            desc: 'Animated titles, transitions, kinetic typography, and branded overlays that give content a distinct, professional identity.',
            link: 'https://new.clippingfly.com/',
            status: 'Add-On',
            tagColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
        },
        {
            id: 'subtitles-captions',
            name: 'Subtitles & Captions',
            category: 'Accessibility',
            rating: '💬 Multi-Language',
            desc: 'Accurate, styled captions and burned-in subtitles that boost retention and make content accessible across languages.',
            link: 'https://new.clippingfly.com/',
            status: 'Add-On',
            tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
        },
        {
            id: 'thumbnail-design',
            name: 'Thumbnail Design',
            category: 'Creative',
            rating: '🖼️ Click-Driven',
            desc: 'High-contrast, curiosity-driven thumbnails designed to lift click-through rate across YouTube and beyond.',
            link: 'https://new.clippingfly.com/',
            status: 'Add-On',
            tagColor: 'bg-violet-50 text-violet-700 border-violet-200',
        },
    ],
    customLabel: 'Custom Video Services',
    customHeadingLead: 'Need an Editing Partner?',
    customHeadingAccent: 'Hire Clipping Fly.',
    customDesc:
        'Beyond repurposing our own content, Clipping Fly serves creators, founders, and brands worldwide with end-to-end editing — from raw footage to channel-ready assets.',
    customPoints: [
        'Dedicated Editor & Workflow',
        'Long-Form & Short-Form Suite',
        'Motion Graphics & Thumbnails',
        'Fast, Reliable Turnaround',
    ],
    customCardBg: 'bg-violet-50/70 border-violet-100',
    customCardLabel: 'Ready to edit?',
    customCardTitle: 'Start Your Project',
    customCardDesc: 'Turn raw footage into scroll-stopping video.',
    customCardBtn: 'Get a Quote on clippingfly.com',
    ctaBannerLabel: 'LET US EDIT YOUR STORY',
    ctaBannerTitle: 'Turn Raw Footage Into Content That Performs',
    ctaBannerDesc:
        'Partner with Clipping Fly for short-form clips, podcast repurposing, YouTube edits, and motion graphics that grow your audience.',
    ctaBannerGradient: 'from-[#4C1D95] via-[#7C3AED] to-[#BE185D]',
    switches: [
        { label: 'Hello to Marketing', brandId: 'hello-to-marketing' },
        { label: 'Ecom with Faisal', brandId: 'ecom-with-faisal' },
    ],
};

export const BrandClippingFlyPage: React.FC<Omit<BrandShowcasePageProps, 'config'>> = (props) => (
    <BrandShowcasePage {...props} config={config} />
);

export default BrandClippingFlyPage;
