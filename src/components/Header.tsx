import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { lenis } from '../lib/lenis';

export type NavRoute = 'home' | 'contact' | 'blog' | 'allblogs' | 'services';

export interface HeaderProps {
  onSearchClick?: () => void;
  onGetStartedClick?: () => void;
  currentRoute?: NavRoute;
  onNavigate?: (route: NavRoute, targetSection?: string) => void;
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
      : currentRoute === 'services'
      ? 'Services'
      : 'Home'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync activeItem when route changes
  useEffect(() => {
    if (currentRoute === 'contact') {
      setActiveItem('Contact');
    } else if (currentRoute === 'blog' || currentRoute === 'allblogs') {
      setActiveItem('Insights');
    } else if (currentRoute === 'services') {
      setActiveItem('Services');
    } else {
      setActiveItem('Home');
    }
  }, [currentRoute]);

  // Separate dropdown states for floating and sticky headers
  const [floatServicesOpen, setFloatServicesOpen] = useState(false);
  const [floatIndustriesOpen, setFloatIndustriesOpen] = useState(false);

  const [stickyServicesOpen, setStickyServicesOpen] = useState(false);
  const [stickyIndustriesOpen, setStickyIndustriesOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll listener to toggle sticky header ONLY on actual boolean transition (0 redundant re-renders)
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
        setFloatIndustriesOpen(false);
        setStickyServicesOpen(false);
        setStickyIndustriesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const servicesList = [
    'AI Automation',
    'Website Design',
    'App Development',
    'SEO & AEO',
    'Social Media',
    'Google Ads',
    'Meta Ads',
    'Call & Email Handling',
    'Image Design',
    'Video Editing',
  ];

  const industriesList = [
    'Real Estate',
    'E-Commerce',
    'Healthcare',
    'SaaS & Technology',
    'Construction',
    'Professional Services',
    'Hospitality',
  ];

  const navItems = [
    { name: 'Home', type: 'link' },
    { name: 'Services', type: 'dropdown', items: servicesList },
    { name: 'Industries', type: 'dropdown', items: industriesList },
    { name: 'Work', type: 'link' },
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
      onNavigate('services', serviceName);
    } else {
      window.location.href = serviceName ? `/services?service=${encodeURIComponent(serviceName)}` : '/services';
    }
  };

  const handleNavClick = (name: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveItem(name);
    setFloatServicesOpen(false);
    setFloatIndustriesOpen(false);
    setStickyServicesOpen(false);
    setStickyIndustriesOpen(false);
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
      if (currentRoute === 'services') {
        lenis.scrollTo(0, { duration: 0.8 });
      } else if (currentRoute === 'home') {
        const section = document.getElementById('services');
        if (section) {
          lenis.scrollTo(section, { offset: -80, duration: 1.2 });
        }
      } else {
        if (onNavigate) {
          onNavigate('home', 'services');
        } else {
          window.location.href = '/#services';
        }
      }
      return;
    }

    if (currentRoute !== 'home') {
      if (onNavigate) {
        onNavigate('home', name === 'Home' ? undefined : name.toLowerCase());
      } else {
        window.location.href = name === 'Home' ? '/' : `/#${name.toLowerCase()}`;
      }
      return;
    }

    if (name === 'Home') {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      const section = document.getElementById(name.toLowerCase());
      if (section) {
        lenis.scrollTo(section, { offset: -80, duration: 1.2 });
      }
    }
  };

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
                const isOpen = isServices ? floatServicesOpen : floatIndustriesOpen;
                const setOpen = isServices ? setFloatServicesOpen : setFloatIndustriesOpen;
                const list = item.items || [];

                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItem(item.name);
                        setOpen(!isOpen);
                      }}
                      className={`inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200 cursor-pointer select-none ${
                        isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={14}
                        strokeWidth={2.4}
                        className={`text-[#64748B] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#2563EB]' : 'group-hover:text-[#2563EB]'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <div className="rounded-2xl bg-white p-2.5 shadow-[0_20px_40px_-8px_rgba(15,23,42,0.14)] border border-slate-100 ring-1 ring-black/5">
                          {list.map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              onClick={(e) => {
                                if (isServices) {
                                  handleServiceClick(sub, e);
                                } else {
                                  e.preventDefault();
                                  setActiveItem(item.name);
                                  setOpen(false);
                                  if (currentRoute !== 'home') {
                                    onNavigate ? onNavigate('home', item.name.toLowerCase()) : (window.location.href = `/#${item.name.toLowerCase()}`);
                                  } else {
                                    const section = document.getElementById(item.name.toLowerCase());
                                    if (section) {
                                      lenis.scrollTo(section, { offset: -80, duration: 1.2 });
                                    }
                                  }
                                }
                              }}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13.5px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#2563EB] transition-all duration-150"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                              <span>{sub}</span>
                            </a>
                          ))}
                          {isServices && (
                            <div className="pt-2 mt-1 border-t border-slate-100">
                              <button
                                type="button"
                                onClick={(e) => handleServiceClick(undefined, e)}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[12.5px] font-bold text-[#2563EB] bg-blue-50/70 hover:bg-blue-100/70 transition-colors cursor-pointer"
                              >
                                <span>Explore All 10 Services</span>
                                <ArrowRight size={13} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item.name, e)}
                  className={`relative inline-flex items-center justify-center py-2 text-[15px] font-semibold transition-colors duration-200 group select-none ${
                    isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
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
          <div className="flex items-center justify-end gap-3 sm:gap-3.5 shrink-0">
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
        className={`fixed top-0 inset-x-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 ease-in-out ${
          isScrolled
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
                const isOpen = isServices ? stickyServicesOpen : stickyIndustriesOpen;
                const setOpen = isServices ? setStickyServicesOpen : setStickyIndustriesOpen;
                const list = item.items || [];

                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItem(item.name);
                        setOpen(!isOpen);
                      }}
                      className={`inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200 cursor-pointer select-none ${
                        isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={14}
                        strokeWidth={2.4}
                        className={`text-[#64748B] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#2563EB]' : 'group-hover:text-[#2563EB]'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-72 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <div className="rounded-2xl bg-white p-2.5 shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)] border border-slate-100 ring-1 ring-black/5">
                          {list.map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              onClick={(e) => {
                                if (isServices) {
                                  handleServiceClick(sub, e);
                                } else {
                                  e.preventDefault();
                                  setActiveItem(item.name);
                                  setOpen(false);
                                  if (currentRoute !== 'home') {
                                    onNavigate ? onNavigate('home', item.name.toLowerCase()) : (window.location.href = `/#${item.name.toLowerCase()}`);
                                  } else {
                                    const section = document.getElementById(item.name.toLowerCase());
                                    if (section) {
                                      lenis.scrollTo(section, { offset: -80, duration: 1.2 });
                                    }
                                  }
                                }
                              }}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13.5px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#2563EB] transition-all duration-150"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                              <span>{sub}</span>
                            </a>
                          ))}
                          {isServices && (
                            <div className="pt-2 mt-1 border-t border-slate-100">
                              <button
                                type="button"
                                onClick={(e) => handleServiceClick(undefined, e)}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[12.5px] font-bold text-[#2563EB] bg-blue-50/70 hover:bg-blue-100/70 transition-colors cursor-pointer"
                              >
                                <span>Explore All 10 Services</span>
                                <ArrowRight size={13} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(item.name, e)}
                  className={`relative inline-flex items-center justify-center py-2 text-[15px] font-semibold transition-colors duration-200 group select-none ${
                    isActive ? 'text-[#2563EB]' : 'text-[#1E293B] hover:text-[#2563EB]'
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

          <div className="flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => handleNavClick(item.name, e)}
                className={`text-lg font-bold py-1.5 transition-colors ${
                  activeItem === item.name ? 'text-[#2563EB]' : 'text-slate-800'
                }`}
              >
                {item.name}
              </a>
            ))}
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
