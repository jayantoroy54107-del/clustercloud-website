import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, ArrowUpRight, Menu, X, Sparkles, Globe } from 'lucide-react';
import { lenis } from '../lib/lenis';
import { serviceNameToSlug } from '../lib/slugs';

export type NavRoute =
  | 'home'
  | 'contact'
  | 'blog'
  | 'allblogs'
  | 'services'
  | 'service-detail'
  | 'portfolio'
  | 'brand-ai-with-faisal'
  | 'brand-swift-outlet'
  | 'brand-hello-to-marketing'
  | 'brand-clipping-fly'
  | 'brand-ecom-with-faisal';

export type BrandId =
  | 'ai-with-faisal'
  | 'swift-outlet'
  | 'hello-to-marketing'
  | 'clipping-fly'
  | 'ecom-with-faisal';

// Brand ecosystem routes follow the `brand-<id>` convention.
export const brandIdToRoute = (brandId: BrandId): NavRoute => `brand-${brandId}` as NavRoute;

export const brandRouteToPath = (route: NavRoute): string =>
  typeof route === 'string' && route.startsWith('brand-') ? `/brands/${route.slice('brand-'.length)}` : '/';

export interface HeaderProps {
  onSearchClick?: () => void;
  onGetStartedClick?: () => void;
  currentRoute?: NavRoute;
  onNavigate?: (route: NavRoute, targetSection?: string) => void;
}

export interface BrandItem {
  id: BrandId;
  name: string;
  tagline: string;
  url: string;
  badge: string;
  // Only brands with an internal showcase page define a route.
  route?: NavRoute;
}

export const Header: React.FC<HeaderProps> = React.memo(({
  onSearchClick,
  onGetStartedClick,
  currentRoute = 'home',
  onNavigate,
}) => {
  const [activeItem, setActiveItem] = useState(
    currentRoute === 'contact'
      ? 'Contact'
      : currentRoute === 'blog' || currentRoute === 'allblogs'
        ? 'Insights'
        : currentRoute === 'services' || currentRoute === 'service-detail'
          ? 'Services'
          : currentRoute === 'portfolio'
            ? 'Portfolio'
            : currentRoute.startsWith('brand-')
              ? 'Our Brands'
              : 'Home'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync activeItem when route changes
  useEffect(() => {
    if (currentRoute === 'contact') {
      setActiveItem('Contact');
    } else if (currentRoute === 'blog' || currentRoute === 'allblogs') {
      setActiveItem('Insights');
    } else if (currentRoute === 'services' || currentRoute === 'service-detail') {
      setActiveItem('Services');
    } else if (currentRoute === 'portfolio') {
      setActiveItem('Portfolio');
    } else if (currentRoute.startsWith('brand-')) {
      setActiveItem('Our Brands');
    } else {
      setActiveItem('Home');
    }
  }, [currentRoute]);

  // Separate dropdown states for floating and sticky headers
  const [floatServicesOpen, setFloatServicesOpen] = useState(false);
  const [floatBrandsOpen, setFloatBrandsOpen] = useState(false);

  const [stickyServicesOpen, setStickyServicesOpen] = useState(false);
  const [stickyBrandsOpen, setStickyBrandsOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileBrandsExpanded, setMobileBrandsExpanded] = useState(false);

  // Scroll listener to toggle sticky header ONLY on actual boolean transition
  useEffect(() => {
    let lastState = window.scrollY > 90;
    setIsScrolled(lastState);

    const lenisScrollHandler = (instance: { scroll: number }) => {
      const nowScrolled = instance.scroll > 90;
      if (nowScrolled !== lastState) {
        lastState = nowScrolled;
        setIsScrolled(nowScrolled);
      }
    };
    lenis.on('scroll', lenisScrollHandler);

    return () => {
      lenis.off('scroll', lenisScrollHandler);
    };
  }, []);

  // Close dropdowns on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFloatServicesOpen(false);
        setFloatBrandsOpen(false);
        setStickyServicesOpen(false);
        setStickyBrandsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const servicesList = [
    'AI Automation',
    'Web Design and Development',
    'App Development',
    'SEO & AEO',
    'Social Media Management',
    'Google Advertising',
    'Meta Advertising',
    'Call & Email Handling',
    'Image Design',
    'Video Editing',
  ];

  const brandsList: BrandItem[] = [
    {
      id: 'ai-with-faisal',
      name: 'AI with Faisal',
      tagline: 'Custom AI Chatbots, Workflows & Automations',
      url: 'https://aiwithfaisal.com/',
      badge: 'AI Studio',
      route: 'brand-ai-with-faisal',
    },
    {
      id: 'swift-outlet',
      name: 'Swift Outlet',
      tagline: 'Next-Gen Mobile Apps, Games & Cloud SaaS',
      url: 'https://www.swiftoutlet.com/',
      badge: 'Apps & SaaS',
      route: 'brand-swift-outlet',
    },
    {
      id: 'hello-to-marketing',
      name: 'Hello to Marketing',
      tagline: 'Full-Service Digital Marketing & Growth Agency',
      url: 'https://hellotomarketing.com/',
      badge: 'Marketing',
      route: 'brand-hello-to-marketing',
    },
    {
      id: 'clipping-fly',
      name: 'Clipping Fly',
      tagline: 'Professional Video Editing, Clipping & Repurposing',
      url: 'https://new.clippingfly.com/',
      badge: 'Video Editing',
      route: 'brand-clipping-fly',
    },
    {
      id: 'ecom-with-faisal',
      name: 'Ecom with Faisal',
      tagline: 'E-commerce Growth, Store Scaling & Fulfilment',
      url: 'https://ecomwithfaisal.com/',
      badge: 'E-commerce',
      route: 'brand-ecom-with-faisal',
    },
  ];

  const navItems = [
    { name: 'Home', type: 'link' },
    { name: 'Services', type: 'dropdown', dropdownType: 'services', items: servicesList },
    { name: 'Our Brands', type: 'dropdown', dropdownType: 'brands', brands: brandsList },
    { name: 'Portfolio', type: 'link', target: 'work' },
    { name: 'About', type: 'link' },
    { name: 'Insights', type: 'link' },
    { name: 'Contact', type: 'link' },
  ];

  const handleServiceClick = (serviceName?: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveItem('Services');
    setFloatServicesOpen(false);
    setStickyServicesOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      if (serviceName) {
        onNavigate('service-detail', serviceName);
      } else {
        onNavigate('services');
      }
    } else {
      const slug = serviceName ? serviceNameToSlug(serviceName) : '';
      window.location.href = slug ? `/services/${slug}` : '/services';
    }
  };

  const handleBrandClick = (route: NavRoute, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveItem('Our Brands');
    setFloatBrandsOpen(false);
    setStickyBrandsOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.href = brandRouteToPath(route);
    }
  };

  const handleNavClick = (name: string, e?: React.MouseEvent, target?: string) => {
    e?.preventDefault();
    setActiveItem(name);
    setFloatServicesOpen(false);
    setFloatBrandsOpen(false);
    setStickyServicesOpen(false);
    setStickyBrandsOpen(false);
    setMobileMenuOpen(false);

    if (name === 'Contact') {
      if (currentRoute === 'contact') {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        if (onNavigate) {
          onNavigate('contact');
        } else {
          window.location.href = '/contact';
        }
      }
      return;
    }

    if (name === 'Services') {
      if (currentRoute === 'home') {
        const section = document.getElementById('services');
        if (section) {
          lenis.scrollTo(section, { offset: -80, duration: 1.2 });
        } else {
          if (onNavigate) {
            onNavigate('services');
          } else {
            window.location.href = '/services';
          }
        }
      } else {
        if (onNavigate) {
          onNavigate('services');
        } else {
          window.location.href = '/services';
        }
      }
      return;
    }

    if (name === 'Our Brands') {
      if (onNavigate) {
        onNavigate('brand-ai-with-faisal');
      } else {
        window.location.href = '/brands/ai-with-faisal';
      }
      return;
    }

    if (name === 'Portfolio') {
      if (onNavigate) {
        onNavigate('portfolio');
      } else {
        window.location.href = '/portfolio';
      }
      return;
    }

    if (currentRoute !== 'home') {
      if (onNavigate) {
        onNavigate('home', name === 'Home' ? undefined : (target ?? name.toLowerCase()));
      } else {
        window.location.href = name === 'Home' ? '/' : `/#${target ?? name.toLowerCase()}`;
      }
      return;
    }

    if (name === 'Home') {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      const section = document.getElementById(target ?? name.toLowerCase());
      if (section) {
        lenis.scrollTo(section, { offset: -80, duration: 1.2 });
      }
    }
  };

  const renderBrandsDropdown = (setOpen: (val: boolean) => void) => (
    <div className="rounded-2xl bg-white p-3 shadow-[0_22px_44px_-8px_rgba(15,23,42,0.18)] border border-slate-100 ring-1 ring-black/5 w-80 sm:w-88">
      <div className="px-2.5 py-1.5 border-b border-slate-100 mb-2 flex items-center justify-between">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
          Cluster Cloud Brands
        </span>
        <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#2563EB] bg-blue-50/80 px-2 py-0.5 rounded-full">
          <Sparkles size={10} />
          <span>{brandsList.length} Ecosystem Brands</span>
        </span>
      </div>

      <div className="space-y-1">
        {brandsList.map((brand) => (
          <div
            key={brand.id}
            onClick={(e) => {
              setOpen(false);
              if (brand.route) handleBrandClick(brand.route, e);
              else window.open(brand.url, '_blank', 'noopener,noreferrer');
            }}
            className="group/brand p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/70 transition-all duration-150 flex items-start gap-3 cursor-pointer text-left"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 via-[#1E3A8A] to-[#0EA5E9] text-white flex items-center justify-center shrink-0 shadow-sm ring-1 ring-white/10 group-hover/brand:scale-105 transition-transform">
              <Globe size={20} strokeWidth={1.9} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="font-bold text-[14px] text-slate-800 group-hover/brand:text-[#2563EB] transition-colors truncate">
                  {brand.name}
                </span>
                <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
                  {brand.badge}
                </span>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5 line-clamp-1">
                {brand.tagline}
              </p>
              <div className="mt-2 flex items-center gap-2.5">
                {brand.route && (
                  <>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] group-hover/brand:underline">
                      <span>Showcase Page</span>
                      <ArrowRight size={11} className="transition-transform group-hover/brand:translate-x-0.5" />
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                  </>
                )}
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                  title={`Open ${brand.url} in new tab`}
                >
                  <span>Live Website</span>
                  <ArrowUpRight size={11} strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-2 text-[11px] text-slate-400 font-medium">
        <span>Curated digital ecosystem</span>
        <span className="text-emerald-600 font-bold flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Active Live
        </span>
      </div>
    </div>
  );

  const renderServicesDropdown = (list: string[], setOpen: (val: boolean) => void) => (
    <div className="rounded-2xl bg-white p-2.5 shadow-[0_22px_44px_-8px_rgba(15,23,42,0.14)] border border-slate-100 ring-1 ring-black/5 w-76">
      <div className="px-3 py-1.5 border-b border-slate-100 mb-1.5 flex items-center justify-between">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
          Core Services
        </span>
        <span className="text-[10.5px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full">
          10 Services
        </span>
      </div>

      <div className="space-y-0.5">
        {list.map((sub) => (
          <a
            key={sub}
            href={`/services/${serviceNameToSlug(sub)}`}
            onClick={(e) => {
              setOpen(false);
              handleServiceClick(sub, e);
            }}
            className="flex items-center justify-between px-3 py-2 rounded-xl text-[13.5px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#2563EB] transition-all duration-150 group/sub"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] group-hover/sub:scale-125 transition-transform" />
              <span>{sub}</span>
            </div>
            <ArrowRight size={12} className="opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all text-[#2563EB]" />
          </a>
        ))}
      </div>

      <div className="pt-2 mt-1.5 border-t border-slate-100">
        <button
          type="button"
          onClick={(e) => {
            setOpen(false);
            handleServiceClick(undefined, e);
          }}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[12.5px] font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
        >
          <span>Explore All 10 Services</span>
          <ArrowRight size={13} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* PART 1: FLOATING HEADER (Non-Sticky, Main Header at Page Top)             */}
      {/* ========================================================================= */}
      <div className="w-full pt-5 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 relative z-30">
        <div
          className="w-full max-w-[1360px] mx-auto bg-white/95 backdrop-blur-md rounded-full border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.1)] hover:shadow-[0_16px_44px_-6px_rgba(15,23,42,0.14)] transition-all duration-300 h-[74px] sm:h-[78px] px-5 sm:px-7 md:px-8 flex items-center justify-between"
          style={{ width: '100%', maxWidth: '1360px', marginLeft: 'auto', marginRight: 'auto', boxSizing: 'border-box' }}
        >
          {/* Logo (Left) */}
          <a
            href="#"
            onClick={(e) => handleNavClick('Home', e)}
            className="flex shrink-0 items-center gap-3 sm:gap-3.5 group select-none transition-transform duration-200 hover:opacity-95"
            style={{ textDecoration: 'none' }}
          >
            <div className="relative flex items-center justify-center h-11 w-11 shrink-0 drop-shadow-xs">
              <img
                src="/logo-icon.png"
                alt="Cluster Cloud"
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="text-[20px] sm:text-[22px] font-extrabold leading-none tracking-tight text-[#0F172A]">
                Cluster <span className="text-[#2563EB]">Cloud</span>
              </span>
              <span className="mt-1 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B] leading-none whitespace-nowrap">
                DIGITAL • STRATEGY • SUCCESS
              </span>
            </div>
          </a>

          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-1 px-4">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;

              if (item.type === 'dropdown') {
                const isServices = item.name === 'Services';
                const isBrands = item.name === 'Our Brands';
                const isOpen = isServices ? floatServicesOpen : floatBrandsOpen;
                const setOpen = isServices ? setFloatServicesOpen : setFloatBrandsOpen;
                const list = item.items || [];

                return (
                  <div
                    key={item.name}
                    className="relative group py-2 flex items-center"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          if (isServices) {
                            handleNavClick('Services', e);
                          } else if (isBrands) {
                            handleBrandClick('brand-ai-with-faisal', e);
                          } else {
                            setOpen(!isOpen);
                          }
                        }}
                        className={`text-[15px] font-semibold transition-colors duration-200 cursor-pointer select-none ${isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                          }`}
                      >
                        {item.name}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpen(!isOpen);
                        }}
                        className="p-0.5 text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <ChevronDown
                          size={14}
                          strokeWidth={2.4}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2563EB]' : 'group-hover:text-[#2563EB]'
                            }`}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {isBrands
                          ? renderBrandsDropdown(setOpen)
                          : renderServicesDropdown(list, setOpen)}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${(item as { target?: string }).target ?? item.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item.name, e, (item as { target?: string }).target)}
                  className={`relative inline-flex items-center justify-center py-2 text-[15px] font-semibold transition-colors duration-200 group select-none ${isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                    }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[30px] h-[2.5px] rounded-full bg-[#2563EB] animate-in fade-in duration-200" />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2.5px] rounded-full bg-[#2563EB] transition-all duration-200 group-hover:w-[22px]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-3.5 shrink-0">
            <button
              type="button"
              onClick={onSearchClick}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-[#2563EB] shadow-xs hover:border-[#2563EB] hover:bg-blue-50/70 hover:shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
              title="Search"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={onGetStartedClick}
              className="group hidden lg:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] px-6 sm:px-7 py-2.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{ borderRadius: '9999px' }}
            >
              <span>Get Started</span>
              <ArrowRight
                size={17}
                strokeWidth={2.4}
                className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PART 2: FULL-WIDTH STICKY HEADER (Appears on Page Scroll)                  */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 ease-in-out ${isScrolled
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        <div
          className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 h-[74px] flex items-center justify-between"
          style={{ width: '100%', maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', boxSizing: 'border-box' }}
        >
          {/* Logo (Left) */}
          <a
            href="#"
            onClick={(e) => handleNavClick('Home', e)}
            className="flex shrink-0 items-center gap-3.5 group select-none transition-transform duration-200 hover:opacity-95"
            style={{ textDecoration: 'none' }}
          >
            <div className="relative flex items-center justify-center h-11 w-11 shrink-0 drop-shadow-xs">
              <img
                src="/logo-icon.png"
                alt="Cluster Cloud"
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="text-[21px] sm:text-[22px] font-extrabold leading-none tracking-tight text-[#0F172A]">
                Cluster <span className="text-[#2563EB]">Cloud</span>
              </span>
              <span className="mt-1 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B] leading-none whitespace-nowrap">
                DIGITAL • STRATEGY • SUCCESS
              </span>
            </div>
          </a>

          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 flex-1 px-4">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;

              if (item.type === 'dropdown') {
                const isServices = item.name === 'Services';
                const isBrands = item.name === 'Our Brands';
                const isOpen = isServices ? stickyServicesOpen : stickyBrandsOpen;
                const setOpen = isServices ? setStickyServicesOpen : setStickyBrandsOpen;
                const list = item.items || [];

                return (
                  <div
                    key={item.name}
                    className="relative group py-2 flex items-center"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          if (isServices) {
                            handleNavClick('Services', e);
                          } else if (isBrands) {
                            handleBrandClick('brand-ai-with-faisal', e);
                          } else {
                            setOpen(!isOpen);
                          }
                        }}
                        className={`text-[15px] font-semibold transition-colors duration-200 cursor-pointer select-none ${isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                          }`}
                      >
                        {item.name}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpen(!isOpen);
                        }}
                        className="p-0.5 text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <ChevronDown
                          size={14}
                          strokeWidth={2.4}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#2563EB]' : 'group-hover:text-[#2563EB]'
                            }`}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {isBrands
                          ? renderBrandsDropdown(setOpen)
                          : renderServicesDropdown(list, setOpen)}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${(item as { target?: string }).target ?? item.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item.name, e, (item as { target?: string }).target)}
                  className={`relative inline-flex items-center justify-center py-2 text-[15px] font-semibold transition-colors duration-200 group select-none ${isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                    }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[30px] h-[2.5px] rounded-full bg-[#2563EB] animate-in fade-in duration-200" />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2.5px] rounded-full bg-[#2563EB] transition-all duration-200 group-hover:w-[22px]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="flex items-center justify-end gap-3.5 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={onSearchClick}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-[#2563EB] shadow-xs hover:border-[#2563EB] hover:bg-blue-50/70 hover:shadow-sm active:scale-95 transition-all duration-200 cursor-pointer"
              title="Search"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={onGetStartedClick}
              className="group hidden lg:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] px-7 py-2.5 sm:px-8 sm:py-3 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{ borderRadius: '9999px' }}
            >
              <span>Get Started</span>
              <ArrowRight
                size={17}
                strokeWidth={2.4}
                className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* PART 3: MOBILE DRAWER MENU                                                */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-0 bottom-0 bg-white z-60 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="Cluster Cloud" className="h-9 w-9 object-contain" />
              <span className="font-extrabold text-xl text-slate-900">
                Cluster <span className="text-[#2563EB]">Cloud</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div key={item.name} className="py-1">
                    <div className="flex items-center justify-between py-1.5">
                      <button
                        type="button"
                        onClick={(e) => handleNavClick('Services', e)}
                        className={`text-lg font-bold transition-colors ${activeItem === 'Services' ? 'text-[#2563EB]' : 'text-slate-800'
                          }`}
                      >
                        Services
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className="p-1 text-slate-500 hover:text-[#2563EB]"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'
                            }`}
                        />
                      </button>
                    </div>

                    {mobileServicesExpanded && (
                      <div className="mt-2 ml-3 pl-3 border-l-2 border-blue-100 space-y-2 py-1 animate-in fade-in">
                        <button
                          type="button"
                          onClick={(e) => handleServiceClick(undefined, e)}
                          className="w-full text-left font-bold text-xs text-[#2563EB] bg-blue-50/80 px-3 py-2 rounded-lg"
                        >
                          Explore All 10 Services →
                        </button>
                        {servicesList.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={(e) => handleServiceClick(s, e)}
                            className="block w-full text-left font-semibold text-sm text-slate-700 hover:text-[#2563EB] py-1"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.name === 'Our Brands') {
                return (
                  <div key={item.name} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileBrandsExpanded(!mobileBrandsExpanded)}
                      className={`w-full flex items-center justify-between text-lg font-bold py-1.5 transition-colors ${activeItem === 'Our Brands' ? 'text-[#2563EB]' : 'text-slate-800'
                        }`}
                    >
                      <span>Our Brands</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileBrandsExpanded ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'
                          }`}
                      />
                    </button>

                    {mobileBrandsExpanded && (
                      <div className="mt-2 ml-3 pl-3 border-l-2 border-blue-100 space-y-3 py-1 animate-in fade-in">
                        {brandsList.map((b) => (
                          <div key={b.id} className="flex flex-col gap-1">
                            <button
                              type="button"
                              onClick={(e) => (b.route ? handleBrandClick(b.route, e) : window.open(b.url, '_blank', 'noopener,noreferrer'))}
                              className="text-left font-bold text-[15px] text-slate-800 hover:text-[#2563EB] flex items-center gap-2"
                            >
                              <Globe size={16} strokeWidth={2} className="text-[#2563EB] shrink-0" />
                              <span>{b.name}</span>
                            </button>
                            <a
                              href={b.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-slate-500 hover:text-[#2563EB] inline-flex items-center gap-1 pl-4"
                            >
                              <span>Visit {b.url.replace('https://', '').replace('/', '')}</span>
                              <ArrowUpRight size={12} />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${(item as { target?: string }).target ?? item.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item.name, e, (item as { target?: string }).target)}
                  className={`text-lg font-bold py-1.5 transition-colors ${activeItem === item.name ? 'text-[#2563EB]' : 'text-slate-800'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStartedClick?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default Header;
