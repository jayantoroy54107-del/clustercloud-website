import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import {
  Search,
  X,
  CheckCircle2,
  Sparkles,
  Send,
} from 'lucide-react';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const quickSearches = [
    'SEO & AI Search Optimization',
    'Paid Advertising',
    'Web Design & Development',
    'Content Marketing',
    'Marketing Automation',
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* ========================================================================= */}
      {/* 01. Dual Header System (Floating Pill at Top + Full-Width Sticky on Scroll) */}
      {/* ========================================================================= */}
      <Header
        onSearchClick={() => setIsSearchOpen(true)}
        onGetStartedClick={() => setIsGetStartedOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 02. Exact-Match Animated 3D Hero Section (Home)                           */}
      {/* ========================================================================= */}
      <div id="home">
        <Hero onStartProjectClick={() => setIsGetStartedOpen(true)} />
      </div>

      {/* ========================================================================= */}
      {/* 03. Exact-Match Brand Section ("Brands That Grow With Us")                */}
      {/* ========================================================================= */}
      <BrandSection />

      {/* ========================================================================= */}
      {/* 04. Futuristic 3D Growth Ecosystem Services Section                       */}
      {/* ========================================================================= */}
      <ServicesSection
        onStartProjectClick={() => setIsGetStartedOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 05. Industries Section ("Different Industries. Same Growth Mindset.")       */}
      {/* ========================================================================= */}
      <IndustriesSection
        onStartProjectClick={() => setIsGetStartedOpen(true)}
        onWatchImpactClick={() => setIsGetStartedOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 06. Work / Case Studies Section                                           */}
      {/* ========================================================================= */}
      <WorkSection
        onStartProjectClick={() => setIsGetStartedOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 07. About Section                                                         */}
      {/* ========================================================================= */}
      <AboutSection
        onStartProjectClick={() => setIsGetStartedOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 08. Exact-Match 3D Isometric Footer Component                             */}
      {/* ========================================================================= */}
      <div id="contact">
        <Footer onGetStartedClick={() => setIsGetStartedOpen(true)} />
      </div>

      {/* ========================================================================= */}
      {/* 09. Interactive Search Spotlight Modal                                     */}
      {/* ========================================================================= */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3 w-full">
                <Search size={22} className="text-[#2563EB]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, industries, case studies..."
                  className="w-full text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                  autoFocus
                />
              </div>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="pt-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Recommended Shortcuts</p>
              <div className="flex flex-wrap gap-2">
                {quickSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setSearchQuery(term);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 text-xs font-semibold text-[#2563EB] transition cursor-pointer"
                  >
                    <Sparkles size={12} />
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10. Interactive Get Started Modal                                         */}
      {/* ========================================================================= */}
      {isGetStartedOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsGetStartedOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img src="/logo-icon.png" alt="Logo" className="h-8 w-8 object-contain" />
                <h3 className="text-lg font-bold text-slate-900">Book Strategy Consultation</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsGetStartedOpen(false);
                  setSubmitted(false);
                }}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Inquiry Received!</h4>
                <p className="text-sm text-slate-500 max-w-sm mb-4">
                  Our agency strategy pod will review your details and respond within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsGetStartedOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="py-5 space-y-4">
                  <p className="text-sm text-slate-600">
                    Enter your contact details to connect with the Cluster Cloud growth team.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Faisal Ahmed"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsGetStartedOpen(false)}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition cursor-pointer"
                  >
                    <span>Submit</span>
                    <Send size={14} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
