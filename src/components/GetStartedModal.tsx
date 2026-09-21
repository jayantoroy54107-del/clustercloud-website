import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={() => {
        onClose();
        setSubmitted(false);
      }}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="Logo" className="h-8 w-8 object-contain" width={32} height={32} />
            <h3 className="text-lg font-bold text-slate-900">Book Strategy Consultation</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
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
                onClose();
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Faisal Ahmed"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about your project, goals, and timeline..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
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
  );
};

export default GetStartedModal;
