'use client';

import React from 'react';

/* Shared UI primitives for the Overnght strategy page. CCD system:
   N27 display (font-display), Work Sans body, JetBrains Mono labels.
   No rounded corners in page chrome. Hairlines at white/10. */

export function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-5 md:px-10 xl:px-16 ${className}`}>{children}</div>;
}

export function Mono({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0] ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  act,
  title,
  strap,
  id,
}: {
  index: string;
  act: string;
  title: string;
  strap?: string;
  id?: string;
}) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 md:mb-16">
      <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em]">
        <span className="text-[#FD3737]">{index}</span>
        <span className="text-[#B8B8C0]"> / 09 {act}</span>
      </p>
      <h2 className="mt-4 font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.01em] text-[#FAFAFA]">
        {title}
      </h2>
      {strap ? (
        <p className="mt-6 max-w-[52ch] text-lg md:text-xl lg:text-[22px] leading-[1.5] text-[#E4E4E9]">{strap}</p>
      ) : null}
    </div>
  );
}

export function Tag({ children, tone = 'red' }: { children: React.ReactNode; tone?: 'red' | 'white' }) {
  const cls =
    tone === 'red' ? 'border-[#FD3737] text-[#FD3737]' : 'border-white/40 text-[#E4E4E9]';
  return (
    <span className={`inline-block border px-2 py-1 font-mono uppercase text-xs tracking-[0.14em] ${cls}`}>
      {children}
    </span>
  );
}

/* Red-rule callout: the only place red touches prose. */
export function Callout({
  label,
  headline,
  body,
  className = '',
}: {
  label?: string;
  headline?: string;
  body: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-l-2 border-[#FD3737] pl-6 md:pl-8 ${className}`}>
      {label ? <Mono className="text-[#FD3737]">{label}</Mono> : null}
      {headline ? (
        <p className="mt-3 font-display uppercase text-2xl md:text-3xl leading-[1.1] text-[#FAFAFA]">{headline}</p>
      ) : null}
      <div className="mt-3 max-w-[65ch] text-base md:text-[17px] lg:text-lg leading-[1.7] text-[#E4E4E9]">{body}</div>
    </div>
  );
}

/* Scorebug-styled stat chip: the page motif. */
export function Bug({
  value,
  label,
  strong = false,
}: {
  value: string;
  label: string;
  strong?: boolean;
}) {
  return (
    <div className="flex min-w-0 items-stretch border border-white/25">
      <span
        className={`flex shrink-0 items-center border-r-2 border-white/25 px-3 py-2 font-display text-xl md:text-2xl tabular-nums leading-none ${
          strong ? 'text-[#FAFAFA]' : 'text-[#E4E4E9]'
        }`}
      >
        {value}
      </span>
      <span className="flex min-w-0 items-center px-3 py-2 font-mono uppercase text-xs tracking-[0.12em] leading-tight text-[#B8B8C0]">
        {label}
      </span>
    </div>
  );
}

/* Big anchor stat: one per section maximum. */
export function PullStat({
  value,
  label,
  source,
  className = '',
}: {
  value: string;
  label: string;
  source?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-display leading-none tracking-[-0.02em] text-[#FAFAFA] text-7xl md:text-8xl lg:text-9xl">{value}</p>
      <p className="mt-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">{label}</p>
      {source ? <p className="mt-1 font-mono text-xs tracking-[0.08em] text-[#8A8A93]">{source}</p> : null}
    </div>
  );
}

/* Documented fact card: always source + date. */
export function FactCard({ fact, source }: { fact: string; source: string }) {
  return (
    <div className="border border-white/15 p-5 md:p-6">
      <p className="text-base md:text-[17px] leading-[1.6] text-[#FAFAFA]">{fact}</p>
      <p className="mt-3 font-mono uppercase text-xs tracking-[0.14em] text-[#8A8A93]">{source}</p>
    </div>
  );
}

/* Timecode ruler with tick labels. */
export function Ruler({
  ticks,
  activeIndex = 0,
  className = '',
}: {
  ticks: string[];
  activeIndex?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-white/20" />
      <div className="flex justify-between">
        {ticks.map((t, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`h-2 w-px ${i === activeIndex ? 'bg-[#FD3737]' : 'bg-white/30'}`} />
            <span
              className={`mt-1.5 font-mono text-xs tracking-[0.08em] ${
                i === activeIndex ? 'text-[#FD3737]' : 'text-[#8A8A93]'
              }`}
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NextUp({ label }: { label: string }) {
  return (
    <div className="mt-16 border-t border-white/10 pt-5 md:mt-24">
      <Mono>Next: {label}</Mono>
    </div>
  );
}

export function StarRow({
  filled,
  size = 20,
  firstRed = false,
}: {
  filled: number;
  size?: number;
  firstRed?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${filled} of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const isFilled = i < Math.floor(filled) || (i < filled && filled % 1 !== 0 && i === Math.floor(filled));
        const fillColor = firstRed && i === 0 ? '#FD3737' : '#FAFAFA';
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8L12 2.5z"
              fill={isFilled ? fillColor : 'none'}
              stroke={isFilled ? fillColor : 'rgba(255,255,255,0.4)'}
              strokeWidth="1.4"
            />
          </svg>
        );
      })}
    </div>
  );
}
