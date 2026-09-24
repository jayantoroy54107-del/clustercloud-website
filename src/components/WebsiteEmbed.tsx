import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface WebsiteEmbedProps {
    /** Live site URL rendered as an interactive preview. */
    url: string;
    caption?: string;
}

const getHost = (url: string): string => {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
};

/**
 * Renders a live website as an interactive iframe preview inside a browser-chrome
 * frame, with a "Visit" link as a fallback for sites that block framing.
 */
export const WebsiteEmbed: React.FC<WebsiteEmbedProps> = ({ url, caption }) => {
    const host = getHost(url);

    return (
        <figure className="w-full rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 border-b border-slate-200/80">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
                <span className="ml-2 truncate text-[11px] font-semibold text-slate-500">{host}</span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                    Visit
                    <ArrowUpRight size={12} className="stroke-[2.6]" />
                </a>
            </div>

            {/* Live preview */}
            <div className="relative w-full h-[300px] sm:h-[340px] bg-slate-100">
                <iframe
                    src={url}
                    title={caption ?? host}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {caption && (
                <figcaption className="px-4 py-3 text-xs sm:text-[13px] font-semibold text-slate-600 border-t border-slate-200/80">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
