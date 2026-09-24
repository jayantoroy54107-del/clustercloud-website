import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';

export interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Web3Forms access key — submissions are delivered to the email this key was
// registered with (info@clustercloud.org). Public by design (safe in client
// code); can be overridden per-environment via VITE_WEB3FORMS_ACCESS_KEY.
const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
  'e1496bb0-cefd-4f79-b222-889c0e4fd4a7';

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const reset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setError(null);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Strategy Consultation Request — ClusterCloud Website',
          from_name: 'ClusterCloud Website',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(
          data?.message || 'Could not send your request. Please email info@clustercloud.org directly.',
        );
      }
    } catch {
      setError('Network error. Please email info@clustercloud.org directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={handleClose}
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
            onClick={handleClose}
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
              onClick={handleClose}
              className="px-5 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="py-5 space-y-4">
              <p className="text-sm text-slate-600">
                Enter your contact details to connect with the Cluster Cloud growth team.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
                    placeholder="e.g. Faisal Ahmed"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell us a bit about your project, goals, and timeline..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed px-6 py-2.5 text-sm font-semibold text-white shadow-md transition cursor-pointer"
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                <Send size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetStartedModal;
