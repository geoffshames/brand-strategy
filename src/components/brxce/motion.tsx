'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };

/** Ease language for the whole briefing */
export const EASE_OUT = 'power4.out';
export const EASE_INOUT = 'power3.inOut';

/** Split a string into word-wrapped char spans (chars animate, words keep line-breaks clean). */
export function SplitChars({ text, className = '', charClass = 'bx-char' }: { text: string; className?: string; charClass?: string }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom whitespace-pre">
          {Array.from(word).map((ch, ci) => (
            <span key={ci} className={`${charClass} inline-block will-change-transform`} aria-hidden="true">
              {ch}
            </span>
          ))}
          {wi < text.split(' ').length - 1 ? <span aria-hidden="true">{'\u00A0'}</span> : null}
        </span>
      ))}
    </span>
  );
}

/** Split a string into word spans for opacity-scrub reading. */
export function SplitWords({ text, className = '', wordClass = 'bx-word' }: { text: string; className?: string; wordClass?: string }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(' ').map((word, i) => (
        <span key={i} aria-hidden="true" className={`${wordClass} inline-block whitespace-pre`}>
          {word}
          {'\u00A0'}
        </span>
      ))}
    </span>
  );
}

/** Lines that rise out of an overflow mask. Pass an array of lines. */
export function MaskedLines({ lines, className = '', lineClass = 'bx-line' }: { lines: string[]; className?: string; lineClass?: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span className={`${lineClass} block will-change-transform`}>{line}</span>
        </span>
      ))}
    </span>
  );
}

/** Magnetic CTA with the arrow nested in its own circle. */
export function MagneticButton({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className="group inline-flex items-center gap-4 rounded-full bg-[#FD3737] pl-8 pr-2 py-2 text-white font-display uppercase tracking-[0.14em] text-sm md:text-base transition-colors duration-500 hover:bg-[#e02e2e] active:scale-[0.98]"
    >
      {label}
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/** Section eyebrow in house mono style. */
export function Kicker({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-[#FD3737] ${className}`}>{children}</p>
  );
}
