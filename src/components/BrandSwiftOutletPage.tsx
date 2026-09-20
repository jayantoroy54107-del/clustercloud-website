import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Gamepad2,
  Cloud,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Flame,
  Mail,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { lenis } from '../lib/lenis';

export interface BrandSwiftOutletPageProps {
  onNavigateHome?: (section?: string) => void;
  onNavigateContact?: () => void;
  onOpenSearch?: () => void;
  onOpenGetStarted?: () => void;
  onNavigateBrand?: (brandId: 'ai-with-faisal' | 'swift-outlet') => void;
}

export const BrandSwiftOutletPage: React.FC<BrandSwiftOutletPageProps> = ({
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

  const ecosystemCategories = [
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      subtitle: 'Utility & lifestyle apps designed to elevate everyday routines.',
      color: 'from-blue-500 to-indigo-600',
      badge: 'iOS & Android',
      details: 'Built with modern cross-platform Flutter and React Native engines, focusing on sub-second load times, fluid gesture animations, and intuitive UX.',
    },
    {
      icon: Gamepad2,
      title: 'Gaming Studio',
      subtitle: 'High-adrenaline mobile gaming experiences.',
      color: 'from-pink-500 to-rose-600',
      badge: 'Multiplayer Arena',
      details: 'Engaging real-time multiplayer titles engineered for mobile graphics performance, minimal latency, and sustained player retention.',
    },
    {
      icon: Cloud,
      title: 'SaaS & Cloud Platforms',
      subtitle: 'Business automation software for modern creators and enterprises.',
      color: 'from-emerald-500 to-teal-600',
      badge: 'Cloud Scalable',
      details: 'Specialized enterprise dispatch CRMs, AI-driven B2B cold email engines, and real-time operations dashboards.',
    },
  ];

  const productCatalog = [
    {
      id: 'foodcal-ai',
      name: 'FoodCal AI',
      category: 'Health & Fitness',
      rating: '⭐ 4.8 Rating',
      desc: 'Smart, personal nutrition companion. Track daily calories, macronutrient splits, and water intake effortlessly using advanced AI photo recognition.',
      link: 'https://www.swiftoutlet.com/foodcal-ai/',
      status: 'Live & Featured',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'my-water-buddy',
      name: 'My Water Buddy',
      category: 'Health & Wellness',
      rating: '🌍 15 Languages',
      desc: 'Smart water reminder and hydration tracker featuring sleep-aware notifications, daily streaks, customizable drink types, and full localization.',
      link: 'https://play.google.com/store/apps/details?id=com.swiftoutlet.mywaterbuddy',
      status: 'Live on Google Play',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'bd-weather',
      name: 'BD Weather',
      category: 'Weather & Utility',
      rating: '🌦️ All 64 Districts',
      desc: 'Senior-friendly Bangla meteorological app crafted for Bangladesh. Zero ads, clean accessibility design, and accurate district-level radar data.',
      link: 'https://play.google.com/store/apps/details?id=com.swiftoutlet.bdweather',
      status: 'Live on Google Play',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'detailing-crm',
      name: 'Mobile Car Detailing CRM',
      category: 'Business / Dispatch CRM',
      rating: '⚡ Live System',
      desc: 'AI dispatch CRM tailored for mobile car-detailing fleets — voice-to-job entry, intelligent technician allocation, automated WhatsApp dispatch, and live P&L reporting.',
      link: 'https://www.swiftoutlet.com/detailing-crm/',
      status: 'Enterprise SaaS',
      tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
    {
      id: 'coldmail-pro',
      name: 'ColdMail Pro',
      category: 'B2B Sales Outreach',
      rating: '🤖 AI Automation',
      desc: 'Automated B2B cold email outreach platform with contextual AI personalization, warmup protection, and automatic conversion follow-ups.',
      link: 'https://www.swiftoutlet.com/#saas',
      status: 'Productivity SaaS',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      id: 'project-nebula',
      name: 'Project Nebula',
      category: 'Sci-Fi Arena Shooter',
      rating: '🎮 Action Game',
      desc: 'Fast-paced multiplayer sci-fi arena shooter designed from the ground up for low-latency competitive gaming on iOS and Android.',
      link: 'https://www.swiftoutlet.com/#games',
      status: 'In Active Studio Dev',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  ];

  const stats = [
    { value: '4.8★', label: 'Store Rating', desc: 'Average user satisfaction' },
    { value: '15+', label: 'Languages', desc: 'Global app internationalization' },
    { value: 'Multi', label: 'Platform Ready', desc: 'iOS, Android & Web Cloud' },
    { value: '100%', label: 'In-House Engineered', desc: 'Crafted with precision code' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Primary Header */}
      <Header
        onSearchClick={onOpenSearch}
        onGetStartedClick={onOpenGetStarted}
        currentRoute="brand-swift-outlet"
        onNavigate={(route, target) => {
          if (route === 'brand-swift-outlet') {
            window.scrollTo(0, 0);
          } else if (route === 'brand-ai-with-faisal') {
            onNavigateBrand?.('ai-with-faisal');
          } else if (route === 'contact') {
            onNavigateContact?.();
          } else {
            onNavigateHome?.(target);
          }
        }}
      />

      <main className="relative pt-6 pb-20 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/50 via-cyan-50/40 to-transparent rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-96 -right-20 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-[850px] -left-20 w-[450px] h-[450px] bg-rose-100/30 rounded-full blur-3xl -z-10" />

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
              <span className="text-[#2563EB] font-bold">Swift Outlet</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.swiftoutlet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-blue-700 border border-blue-200 shadow-xs hover:border-blue-400 hover:bg-blue-50/70 transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>swiftoutlet.com</span>
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </a>
              <button
                type="button"
                onClick={() => onNavigateBrand?.('ai-with-faisal')}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-[#2563EB] hover:bg-white transition-all cursor-pointer"
              >
                <span>Switch to AI with Faisal</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 lg:py-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/90 text-[#2563EB] text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-6"
            >
              <Flame size={15} className="text-orange-500" />
              <span>DIGITAL PRODUCTS &amp; SAAS STUDIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]"
            >
              Next-Gen{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
                Digital Products
              </span>
              , Apps &amp; SaaS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              <strong>SwiftOutlet</strong> is a modern digital product studio and marketplace engineered to discover, build, and publish high-performance consumer mobile applications, gaming experiences, and business-critical SaaS tools.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <a
                href="https://www.swiftoutlet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-[#1D4ED8] hover:to-[#0891B2] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore swiftoutlet.com</span>
                <ArrowUpRight size={17} strokeWidth={2.4} />
              </a>

              <a
                href="https://www.swiftoutlet.com/#services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <Layers size={17} className="text-[#2563EB]" />
                <span>Hire SwiftOutlet Studio</span>
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
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow text-left"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Three Ecosystem Pillars */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                Product Verticals
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                The SwiftOutlet Digital Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Engineered across consumer utilities, action gaming, and intelligent B2B cloud software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ecosystemCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
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

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        {cat.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mt-3.5">
                        {cat.details}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                      <span>Production Quality</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Product Directory / Showcase */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Marketplace Products
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Active Products &amp; SaaS Platforms
                </h2>
              </div>
              <a
                href="https://www.swiftoutlet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2563EB] hover:text-blue-800"
              >
                <span>View entire catalog on swiftoutlet.com</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCatalog.map((item) => (
                <div
                  key={item.id}
                  className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
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

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
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
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Agency & Custom Software Dev Section */}
          <section className="py-12 border-t border-slate-200/80">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                    Custom Software Services
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    Need Custom Software? <span className="text-[#2563EB]">Hire SwiftOutlet.</span>
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Beyond developing and scaling our proprietary product ecosystem, SwiftOutlet delivers end-to-end custom application and cloud platform engineering for high-growth businesses and creator brands worldwide.
                  </p>
                  
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                      <span>Bespoke iOS &amp; Android Native Apps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                      <span>Custom Operations CRMs &amp; Dispatch Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                      <span>High-Conversion Next.js &amp; React Web Apps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                      <span>AI Model Fine-Tuning &amp; API Integrations</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center justify-center text-center">
                  <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 w-full text-center">
                    <span className="text-xs font-bold uppercase text-blue-700 tracking-wider">
                      Ready to build?
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">
                      Start Your Project
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Turn your product blueprint into scalable reality.
                    </p>
                    <a
                      href="https://www.swiftoutlet.com/#services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all"
                    >
                      <span>Get a Quote on swiftoutlet.com</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Conversion Banner */}
          <section className="mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-4">
                <Sparkles size={14} />
                <span>EXPLORE THE MARKETPLACE</span>
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Discover Next-Gen Products with SwiftOutlet
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Browse our active apps, try live SaaS platforms, or partner with our engineering studio today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="https://www.swiftoutlet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold text-sm shadow-lg hover:opacity-95 transition-all"
                >
                  <span>Open swiftoutlet.com</span>
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

export default BrandSwiftOutletPage;
