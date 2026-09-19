import React, { useState } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickSearches = [
  'SEO & AI Search Optimization',
  'Paid Advertising',
  'Web Design & Development',
  'Content Marketing',
  'Marketing Automation',
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
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
            onClick={onClose}
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
                onClick={() => setSearchQuery(term)}
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
  );
};

export default SearchModal;
