import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        instgrm?: { Embeds: { process: () => void } };
    }
}

const SCRIPT_SRC = 'https://www.instagram.com/embed.js';
const SCRIPT_ATTR = 'data-instagram-embed-script';

let scriptPromise: Promise<void> | null = null;

/** Load Instagram's embed.js exactly once and resolve when it is ready. */
function loadInstagramEmbedScript(): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve();
    if (window.instgrm?.Embeds) return Promise.resolve();
    if (scriptPromise) return scriptPromise;

    scriptPromise = new Promise<void>((resolve) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[${SCRIPT_ATTR}]`);
        if (existing) {
            if (window.instgrm?.Embeds) {
                resolve();
                return;
            }
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => resolve());
            return;
        }

        const script = document.createElement('script');
        script.src = SCRIPT_SRC;
        script.async = true;
        script.setAttribute(SCRIPT_ATTR, 'true');
        script.addEventListener('load', () => resolve());
        script.addEventListener('error', () => resolve());
        document.body.appendChild(script);
    });

    return scriptPromise;
}

export interface InstagramEmbedProps {
    /** Canonical Instagram post / reel URL, e.g. https://www.instagram.com/reel/XXXX/ */
    url: string;
    caption?: string;
    className?: string;
}

/**
 * Renders an Instagram post/reel as an official Instagram embed.
 * Injects the required `blockquote.instagram-media` markup and loads
 * Instagram's embed.js once, then processes embeds on mount.
 */
export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url, caption, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const embedUrl = `${url}${url.includes('?') ? '&' : '?'}utm_source=ig_embed&utm_campaign=loading`;

    useEffect(() => {
        let cancelled = false;
        loadInstagramEmbedScript().then(() => {
            if (cancelled) return;
            window.instgrm?.Embeds?.process();
        });
        return () => {
            cancelled = true;
        };
    }, [url]);

    const html =
        `<blockquote class="instagram-media" data-instgrm-permalink="${embedUrl}" data-instgrm-version="14" ` +
        `style="background:#FFF;border:0;border-radius:12px;box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);` +
        `margin:1px;max-width:540px;min-width:326px;padding:0;width:99.375%;width:-webkit-calc(100% - 2px);width:calc(100% - 2px);">` +
        `<a href="${embedUrl}" target="_blank" rel="noopener noreferrer">View this post on Instagram</a></blockquote>`;

    return (
        <figure className={className ?? 'w-full max-w-[540px] mx-auto'}>
            <div
                ref={containerRef}
                className="w-full flex justify-center"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            {caption && (
                <figcaption className="mt-1 px-1 text-center text-xs sm:text-[13px] font-semibold text-slate-600">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};
