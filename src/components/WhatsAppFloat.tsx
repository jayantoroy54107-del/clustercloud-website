import React, { useEffect, useState } from 'react';

export interface WhatsAppFloatProps {
    /** WhatsApp number in international format without '+' or spaces (e.g. 8801717161485). */
    phone?: string;
    /** Pre-filled message shown in the WhatsApp chat box. */
    message?: string;
    /** Text of the pill label shown next to the button. */
    label?: string;
    /** Delay (ms) before the button animates in. */
    appearDelay?: number;
}

const WhatsAppGlyph: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
        <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.29.6 4.44 1.65 6.31L3 29l6.86-1.62A12.94 12.94 0 0 0 16.001 29C23.17 29 29 23.168 29 16S23.17 3 16.001 3Zm0 23.5c-1.98 0-3.83-.55-5.41-1.5l-.39-.23-4.07.96.98-3.97-.25-.41A10.42 10.42 0 0 1 5.5 16C5.5 10.2 10.2 5.5 16 5.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5Zm5.76-7.79c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37Z" />
    </svg>
);

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
    phone = '8801717161485',
    message = 'Hi Cluster Cloud! I found your website and would like to know more about your services.',
    label = 'Live Chat',
    appearDelay = 700,
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), appearDelay);
        return () => clearTimeout(timer);
    }, [appearDelay]);

    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <div
            className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            {/* Pulsing attention ring */}
            <style>{`@keyframes wa-ping { 0% { transform: scale(1); opacity: .5; } 70% { transform: scale(1.8); opacity: 0; } 100% { transform: scale(1.8); opacity: 0; } }`}</style>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Cluster Cloud on WhatsApp"
                className="group flex items-center gap-3"
            >
                {/* Live Chat pill label */}
                <span className="hidden sm:inline-flex items-center rounded-full bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md border border-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.35)] transition-colors">
                    {label}
                </span>

                {/* WhatsApp circular button */}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-4 ring-[#25D366]/20 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                    <span
                        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
                        style={{ animation: 'wa-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                    />
                    <WhatsAppGlyph className="relative z-10 h-7 w-7" />
                </span>
            </a>
        </div>
    );
};

export default WhatsAppFloat;
