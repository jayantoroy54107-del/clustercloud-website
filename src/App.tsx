import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { lenis } from './lib/lenis';

// Lazy-load all below-fold section components & Pages
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const IndustriesSection = lazy(() => import('./components/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const WorkSection = lazy(() => import('./components/WorkSection').then(m => ({ default: m.WorkSection })));
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const InsightsSection = lazy(() => import('./components/InsightsSection').then(m => ({ default: m.InsightsSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const SingleBlogPage = lazy(() => import('./components/SingleBlogPage').then(m => ({ default: m.SingleBlogPage })));
const AllBlogsPage = lazy(() => import('./components/AllBlogsPage').then(m => ({ default: m.AllBlogsPage })));
const AllServicesPage = lazy(() => import('./components/AllServicesPage').then(m => ({ default: m.AllServicesPage })));

// Lazy-loaded interactive modal dialogs
const SearchModal = lazy(() => import('./components/SearchModal'));
const GetStartedModal = lazy(() => import('./components/GetStartedModal'));

export type AppRoute = 'home' | 'contact' | 'blog' | 'allblogs' | 'services';

export const App: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  // Determine initial slug if deep linked
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '').replace(/\/$/, '');
        if (slug) return slug;
      }
    }
    return 'how-ai-search-is-changing-seo-forever';
  });

  // Determine initial route from URL pathname or hash
  const [route, setRoute] = useState<AppRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/contact' || path.startsWith('/contact/') || hash === '#contact') {
        return 'contact';
      }
      if (path === '/services' || path.startsWith('/services/') || hash === '#services-page') {
        return 'services';
      }
      if (path === '/blogs' || hash === '#blogs') {
        return 'allblogs';
      }
      if (path === '/blog' || path.startsWith('/blog/') || hash.startsWith('#blog')) {
        return 'blog';
      }
    }
    return 'home';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  // Memoized modal handlers
  const handleOpenSearch = useCallback(() => setIsSearchOpen(true), []);
  const handleCloseSearch = useCallback(() => setIsSearchOpen(false), []);
  const handleOpenGetStarted = useCallback(() => setIsGetStartedOpen(true), []);
  const handleCloseGetStarted = useCallback(() => setIsGetStartedOpen(false), []);

  // Update browser document title on route change
  useEffect(() => {
    if (route === 'contact') {
      document.title = "Contact Us | Cluster Cloud - Let's Turn Ideas Into Impact";
    } else if (route === 'services') {
      document.title = "Our Services | Cluster Cloud - AI, Design, Development & Growth";
    } else if (route === 'blog') {
      document.title = "Insights & Strategy | Cluster Cloud Growth Blog";
    } else {
      document.title = "Cluster Cloud | Strategy, Digital & Growth Studio";
    }
  }, [route]);

  // Listen for browser Back and Forward button events
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/contact' || path.startsWith('/contact/') || hash === '#contact') {
        setRoute('contact');
        window.scrollTo(0, 0);
      } else if (path === '/services' || path.startsWith('/services/') || hash === '#services-page') {
        setRoute('services');
        window.scrollTo(0, 0);
      } else if (path === '/blogs' || hash === '#blogs') {
        setRoute('allblogs');
        window.scrollTo(0, 0);
      } else if (path === '/blog' || path.startsWith('/blog/') || hash.startsWith('#blog')) {
        if (path.startsWith('/blog/')) {
          const slug = path.replace('/blog/', '').replace(/\/$/, '');
          if (slug) setSelectedArticleSlug(slug);
        }
        setRoute('blog');
        window.scrollTo(0, 0);
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // View all blogs page
  const handleViewAllBlogs = useCallback(() => {
    setRoute('allblogs');
    window.history.pushState(null, '', '/blogs');
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.6, immediate: true });
  }, []);

  // Select article & navigate to single blog page
  const handleSelectArticle = useCallback((slug: string) => {
    setSelectedArticleSlug(slug);
    setRoute('blog');
    window.history.pushState(null, '', `/blog/${slug}`);
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.6, immediate: true });
  }, []);

  // View all services page
  const handleExploreAllServices = useCallback((serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setRoute('services');
    window.history.pushState(null, '', '/services');
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { duration: 0.6, immediate: true });
  }, []);

  // Central Navigation Handler
  const handleNavigate = useCallback((targetRoute: AppRoute, targetSection?: string) => {
    if (targetRoute === 'contact') {
      window.history.pushState(null, '', '/contact');
      setRoute('contact');
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { duration: 0.6, immediate: true });
    } else if (targetRoute === 'services') {
      setSelectedServiceId(targetSection);
      window.history.pushState(null, '', '/services');
      setRoute('services');
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { duration: 0.6, immediate: true });
    } else if (targetRoute === 'allblogs') {
      window.history.pushState(null, '', '/blogs');
      setRoute('allblogs');
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { duration: 0.6, immediate: true });
    } else if (targetRoute === 'blog') {
      window.history.pushState(null, '', `/blog/${selectedArticleSlug}`);
      setRoute('blog');
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { duration: 0.6, immediate: true });
    } else {
      const newUrl = targetSection ? `/#${targetSection}` : '/';
      window.history.pushState(null, '', newUrl);
      setRoute('home');
      
      if (targetSection) {
        // Wait for Home layout to render before scrolling to target section
        setTimeout(() => {
          const section = document.getElementById(targetSection);
          if (section) {
            lenis.scrollTo(section, { offset: -80, duration: 1.2 });
          } else {
            window.scrollTo(0, 0);
          }
        }, 80);
      } else {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { duration: 0.6, immediate: true });
      }
    }
  }, [selectedArticleSlug]);

  // Dedicated All Services page
  if (route === 'services') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="h-8 w-8 rounded-full border-3 border-[#2563EB] border-t-transparent animate-spin" /></div>}>
          <AllServicesPage
            initialServiceId={selectedServiceId}
            onNavigateHome={(section) => handleNavigate('home', section)}
            onNavigateContact={() => handleNavigate('contact')}
            onOpenSearch={handleOpenSearch}
            onOpenGetStarted={handleOpenGetStarted}
          />
        </Suspense>

        <Suspense fallback={null}>
          {isSearchOpen && (
            <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {isGetStartedOpen && (
            <GetStartedModal isOpen={isGetStartedOpen} onClose={handleCloseGetStarted} />
          )}
        </Suspense>
      </div>
    );
  }

  // All Blogs archive page
  if (route === 'allblogs') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="h-8 w-8 rounded-full border-3 border-[#2563EB] border-t-transparent animate-spin" /></div>}>
          <AllBlogsPage
            onNavigateHome={(section) => handleNavigate('home', section)}
            onNavigateContact={() => handleNavigate('contact')}
            onSelectArticle={handleSelectArticle}
            onOpenSearch={handleOpenSearch}
            onOpenGetStarted={handleOpenGetStarted}
          />
        </Suspense>

        <Suspense fallback={null}>
          {isSearchOpen && (
            <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {isGetStartedOpen && (
            <GetStartedModal isOpen={isGetStartedOpen} onClose={handleCloseGetStarted} />
          )}
        </Suspense>
      </div>
    );
  }

  // If currently on dedicated Single Blog Post page
  if (route === 'blog') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="h-8 w-8 rounded-full border-3 border-[#2563EB] border-t-transparent animate-spin" /></div>}>
          <SingleBlogPage
            articleSlug={selectedArticleSlug}
            onNavigateHome={(section) => handleNavigate('home', section)}
            onNavigateContact={() => handleNavigate('contact')}
            onSelectArticle={handleSelectArticle}
            onOpenSearch={handleOpenSearch}
            onOpenGetStarted={handleOpenGetStarted}
          />
        </Suspense>

        {/* Lazy Loaded Modals */}
        <Suspense fallback={null}>
          {isSearchOpen && (
            <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {isGetStartedOpen && (
            <GetStartedModal isOpen={isGetStartedOpen} onClose={handleCloseGetStarted} />
          )}
        </Suspense>
      </div>
    );
  }

  // If currently on dedicated Contact page
  if (route === 'contact') {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="h-8 w-8 rounded-full border-3 border-[#2563EB] border-t-transparent animate-spin" /></div>}>
          <ContactPage
            onNavigateHome={(section) => handleNavigate('home', section)}
            onOpenSearch={handleOpenSearch}
            onOpenGetStarted={handleOpenGetStarted}
          />
        </Suspense>

        {/* Lazy Loaded Modals */}
        <Suspense fallback={null}>
          {isSearchOpen && (
            <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
          )}
        </Suspense>

        <Suspense fallback={null}>
          {isGetStartedOpen && (
            <GetStartedModal isOpen={isGetStartedOpen} onClose={handleCloseGetStarted} />
          )}
        </Suspense>
      </div>
    );
  }

  // Otherwise, render full Home Page
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* ========================================================================= */}
      {/* 01. Dual Header System (Floating Pill at Top + Full-Width Sticky on Scroll) */}
      {/* ========================================================================= */}
      <Header
        onSearchClick={handleOpenSearch}
        onGetStartedClick={handleOpenGetStarted}
        currentRoute="home"
        onNavigate={handleNavigate}
      />

      {/* ========================================================================= */}
      {/* 02. Exact-Match Animated 3D Hero Section (Home)                           */}
      {/* ========================================================================= */}
      <div id="home">
        <Hero onStartProjectClick={handleOpenGetStarted} />
      </div>

      {/* ========================================================================= */}
      {/* 03. Exact-Match Brand Section ("Brands That Grow With Us")                */}
      {/* ========================================================================= */}
      <BrandSection />

      {/* ========================================================================= */}
      {/* 04. Futuristic 3D Growth Ecosystem Services Section                       */}
      {/* ========================================================================= */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ServicesSection
          onStartProjectClick={handleOpenGetStarted}
          onExploreAllServices={() => handleExploreAllServices()}
        />
      </Suspense>

      {/* ========================================================================= */}
      {/* 05. Industries Section ("Different Industries. Same Growth Mindset.")       */}
      {/* ========================================================================= */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <IndustriesSection
          onStartProjectClick={handleOpenGetStarted}
          onWatchImpactClick={handleOpenGetStarted}
        />
      </Suspense>

      {/* ========================================================================= */}
      {/* 06. Work / Case Studies Section                                           */}
      {/* ========================================================================= */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <WorkSection
          onStartProjectClick={handleOpenGetStarted}
        />
      </Suspense>

      {/* ========================================================================= */}
      {/* 07. About Section                                                         */}
      {/* ========================================================================= */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutSection
          onStartProjectClick={handleOpenGetStarted}
        />
      </Suspense>

      {/* ========================================================================= */}
      {/* 08. Exact-Match Insights Section ("Ideas that drive real growth.")       */}
      {/* ========================================================================= */}
      <div id="insights">
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <InsightsSection
            onSelectArticle={handleSelectArticle}
            onViewAllBlogs={handleViewAllBlogs}
          />
        </Suspense>
      </div>

      {/* ========================================================================= */}
      {/* 09. Exact-Match 3D Isometric Footer Component                             */}
      {/* ========================================================================= */}
      <div id="contact">
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Footer
            onGetStartedClick={handleOpenGetStarted}
            onNavigate={handleNavigate}
          />
        </Suspense>
      </div>

      {/* ========================================================================= */}
      {/* 09. Lazy Loaded Interactive Search Spotlight Modal                        */}
      {/* ========================================================================= */}
      <Suspense fallback={null}>
        {isSearchOpen && (
          <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
        )}
      </Suspense>

      {/* ========================================================================= */}
      {/* 10. Lazy Loaded Interactive Get Started Modal                             */}
      {/* ========================================================================= */}
      <Suspense fallback={null}>
        {isGetStartedOpen && (
          <GetStartedModal isOpen={isGetStartedOpen} onClose={handleCloseGetStarted} />
        )}
      </Suspense>

    </div>
  );
};

export default App;
