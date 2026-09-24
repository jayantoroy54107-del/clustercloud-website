import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface AppShowcaseCardProps {
    name: string;
    niche: string;
    kind: string;
    tag: string;
    desc: string;
    image?: string;
    emoji?: string;
    accent?: string;
    link: string;
}

/**
 * A shipped product / app card used in the "Real Work" section of the
 * App Development case study. The whole card links out to the live product.
 */
export const AppShowcaseCard: React.FC<AppShowcaseCardProps> = ({
    name,
    niche,
    kind,
    tag,
    desc,
    image,
    emoji,
    accent,
    link,
}) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 p-6 text-left shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:border-blue-200/90 hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)] transition-all"
    >
        <div className="flex items-center gap-4 mb-5">
            <div
                className="h-14 w-14 shrink-0 rounded-2xl overflow-hidden flex items-center justify-center text-2xl"
                style={{ background: accent ?? 'linear-gradient(135deg,#e2e8f0,#cbd5e1)' }}
            >
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                    <span>{emoji}</span>
                )}
            </div>
            <div className="min-w-0">
                <h3 className="text-base font-black text-[#0F172A] tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors truncate">
                    {name}
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {kind} · {niche}
                </span>
            </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed flex-1">{desc}</p>

        <div className="mt-5 flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                {tag}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                Open
                <ArrowUpRight
                    size={13}
                    className="stroke-[2.6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
            </span>
        </div>
    </a>
);
