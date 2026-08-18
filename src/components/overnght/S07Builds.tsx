'use client';

import React, { useRef } from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, NextUp } from './ui';

/* Sample ad builds rendered in Overnght's own brand: white ON lockup,
   strictly black and white inside the glass. Broadcast faces (Archivo
   Black, Barlow Condensed) exist only inside mocks, via CSS vars set
   in page.tsx. Red is banned inside every mock. */

const LOGO = '/images/overnght/brand/logo.png';

function Lockup({ size = 64, className = '', invert = false }: { size?: number; className?: string; invert?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO}
      alt="Overnght"
      style={{ width: size, filter: invert ? 'invert(1)' : undefined }}
      className={`h-auto ${className}`}
    />
  );
}

function Scorebug({ left, score, clock, right }: { left: string; score: string; clock: string; right: string }) {
  return (
    <div className="flex h-11 items-stretch border-y border-white/25 bg-black/90">
      <span className="flex items-center px-3 text-lg font-semibold tracking-[0.05em] text-white" style={{ fontFamily: 'var(--font-barlow)' }}>
        {left}
      </span>
      <span className="w-0.5 bg-white/60" />
      <span className="flex items-center px-3 text-2xl font-bold tabular-nums text-white" style={{ fontFamily: 'var(--font-barlow)' }}>
        {score}
      </span>
      <span className="w-0.5 bg-white/60" />
      <span className="flex flex-1 items-center justify-center px-2 font-mono text-[13px] tabular-nums text-white">{clock}</span>
      <span className="w-0.5 bg-white/60" />
      <span className="flex items-center px-3 text-lg font-semibold tracking-[0.05em] text-white" style={{ fontFamily: 'var(--font-barlow)' }}>
        {right}
      </span>
    </div>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[270px] shrink-0 rounded-[44px] border border-white/15 bg-[#131313] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:w-[320px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[34px] bg-black">
        {children}
        {/* Dynamic island + home indicator */}
        <div className="absolute left-1/2 top-2 h-6 w-[84px] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" aria-hidden="true" />
      </div>
    </div>
  );
}

function Square({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[300px] shrink-0 bg-[#131313] p-[10px] shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:w-[420px]">
      <div className="relative aspect-square overflow-hidden bg-black">{children}</div>
    </div>
  );
}

function Plate({ src, className = '' }: { src: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={`absolute inset-0 h-full w-full object-cover grayscale contrast-[1.15] brightness-[0.9] ${className}`} />
  );
}

/* ------------------------------------------------------------------ */
/* The six builds                                                      */
/* ------------------------------------------------------------------ */

function BuildBuzzer() {
  return (
    <Phone>
      <Plate src="/images/overnght/ovn-jenna.jpg" className="scale-[1.6] object-[38%_center]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/80" />
      <div className="absolute left-4 top-12"><Lockup size={54} /></div>
      <p className="absolute right-4 top-12 text-[12px] text-white/50" style={{ fontFamily: 'var(--font-worksans, inherit)' }}>Sponsored</p>
      <div className="absolute inset-x-4 bottom-24">
        <p className="text-[30px] leading-[1.02] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>
          SHE CALLED GAME AT ZERO
        </p>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/70">This was live / the next one is too</p>
      </div>
      <div className="absolute inset-x-0 bottom-10">
        <Scorebug left="USA" score="11-10" clock="0:00 Q4" right="AUS" />
      </div>
    </Phone>
  );
}

function BuildEndCard() {
  return (
    <Phone>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <Lockup size={120} />
        <p className="text-[24px] leading-[1.1] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>
          THIS WAS LIVE. SO IS THE NEXT ONE.
        </p>
        <span className="border border-white px-6 py-3 font-mono text-[13px] uppercase tracking-[0.18em] text-white">
          Watch live
        </span>
      </div>
      <div className="absolute inset-x-5 bottom-12 border-t border-white/25 pt-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.1em] leading-[1.8] text-white/70">
          Sat / USA vs New Zealand / 1:00 AM
          <br />
          Sun / USA vs Australia / 8:00 PM
          <br />
          Mon / World Rowing Championships
        </p>
      </div>
    </Phone>
  );
}

function BuildReview() {
  return (
    <Phone>
      <div className="absolute inset-0 flex flex-col justify-center gap-5 px-6">
        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8L12 2.5z"
                fill={i === 0 ? '#FFFFFF' : 'none'}
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="1.4"
              />
            </svg>
          ))}
        </div>
        <p className="text-[21px] font-medium leading-[1.35] text-white">
          &ldquo;As soon as someone else does a remotely better job I will be the first in line at any price.&rdquo;
        </p>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">1-star review / a competitor&apos;s app store</p>
        <p className="mt-4 text-[30px] leading-none text-white" style={{ fontFamily: 'var(--font-archivo)' }}>
          GET IN LINE.
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2"><Lockup size={72} /></div>
    </Phone>
  );
}

function BuildReceipt() {
  return (
    <Phone>
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="w-full bg-[#FAFAFA] px-5 pb-6 pt-5 text-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 96% 100%, 92% 97%, 88% 100%, 84% 97%, 80% 100%, 76% 97%, 72% 100%, 68% 97%, 64% 100%, 60% 97%, 56% 100%, 52% 97%, 48% 100%, 44% 97%, 40% 100%, 36% 97%, 32% 100%, 28% 97%, 24% 100%, 20% 97%, 16% 100%, 12% 97%, 8% 100%, 4% 97%, 0 100%)' }}>
          <div className="flex justify-center pb-3"><Lockup size={64} invert /></div>
          <div className="border-t border-black/80 pt-3 font-mono text-[12px] uppercase leading-[2.1] tracking-[0.08em]">
            <div className="flex justify-between"><span>Month to month</span><span>YES</span></div>
            <div className="flex justify-between"><span>Cancel in one click</span><span>YES</span></div>
            <div className="flex justify-between"><span>Multi-month minimum</span><span>NONE</span></div>
            <div className="flex justify-between"><span>Surprise renewal</span><span>NONE</span></div>
            <div className="flex justify-between"><span>Household access</span><span>WORKS</span></div>
          </div>
          <div className="mt-3 border-t-2 border-black pt-3" style={{ borderTopStyle: 'double' }}>
            <p className="font-mono text-[12px] font-bold uppercase leading-[1.6] tracking-[0.08em]">
              The stream works, or the month is on us
            </p>
          </div>
          <div
            className="mt-4 h-8 w-full"
            style={{ background: 'repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 5px, #000 5px 6px, transparent 6px 10px)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </Phone>
  );
}

function BuildCountdown() {
  return (
    <Phone>
      <Plate src="/images/overnght/ovn-promo.jpg" className="scale-[1.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85" />
      <div className="absolute inset-x-5 top-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/70">Amsterdam / Aug 24-30</p>
        <p className="mt-2 text-[26px] leading-[1.05] text-white" style={{ fontFamily: 'var(--font-archivo)' }}>
          WORLD ROWING CHAMPIONSHIPS
        </p>
      </div>
      <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 items-end justify-center gap-4">
        {[
          ['07', 'DAYS'],
          ['14', 'HRS'],
          ['32', 'MIN'],
        ].map(([v, l]) => (
          <div key={l} className="text-center">
            <p className="text-[58px] font-bold leading-none tabular-nums text-white" style={{ fontFamily: 'var(--font-barlow)' }}>{v}</p>
            <p className="mt-1 font-mono text-[12px] tracking-[0.2em] text-white/70">{l}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-5 bottom-16 flex flex-col items-center gap-4">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/80">Live in the US, only one place</p>
        <span className="border border-white px-6 py-3 font-mono text-[13px] uppercase tracking-[0.18em] text-white">Watch the worlds live</span>
        <Lockup size={64} />
      </div>
    </Phone>
  );
}

function BuildAthlete() {
  return (
    <Square>
      <Plate src="/images/overnght/ovn-jenna.jpg" className="scale-[1.15] object-[30%_center]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
      <div className="absolute left-5 top-5"><Lockup size={48} /></div>
      <div className="absolute inset-x-5 bottom-5">
        <p className="text-[44px] font-bold uppercase leading-[0.95] text-white" style={{ fontFamily: 'var(--font-barlow)' }}>
          Jenna Flynn
        </p>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70">
          Water polo / USA vs Australia / every game live and on demand
        </p>
      </div>
    </Square>
  );
}

/* ------------------------------------------------------------------ */

const BUILDS = [
  { id: 'SC-01', name: 'The buzzer beater', format: '9:16 feed', note: 'Law 3 does the work: the scorebug at 0:00 is the hook, the payoff is the product, the brand arrives after the peak.', runs: 'Runs in: AD-01', el: <BuildBuzzer /> },
  { id: 'SC-02', name: 'The end card', format: '9:16 closer', note: 'The last three seconds of every moment ad: brand, one line, the next three events. The schedule is the CTA.', runs: 'Runs in: AD-01 / AD-08', el: <BuildEndCard /> },
  { id: 'SC-03', name: 'First in line', format: '9:16 static', note: 'The category record as the copywriter. One verbatim review, one answer. Retargeting after any moment view.', runs: 'Runs in: AD-02', el: <BuildReview /> },
  { id: 'SC-04', name: 'The receipt', format: '9:16 static', note: 'The trust claims typeset as a receipt. Every line is the opposite of the category record, and every line is checkable.', runs: 'Runs in: AD-05', el: <BuildReceipt /> },
  { id: 'SC-05', name: 'Countdown to Amsterdam', format: '9:16 event', note: 'The rapid-response template for every rights window. Digits change, event lockup changes, the system stays.', runs: 'Runs in: AD-08', el: <BuildCountdown /> },
  { id: 'SC-06', name: 'The athlete card', format: '1:1 feed', note: 'Athlete-name titling as a paid unit. The tag reads the athlete, the platform signs it. Built for shares and recruiting film energy.', runs: 'Runs in: AD-07', el: <BuildAthlete /> },
];

export default function S07Builds() {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-white/10 bg-[#0A0A0A] py-20 md:py-28 lg:py-36" aria-label="Sample ad builds">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s07-builds"
            index="07"
            act="The Plan"
            title="Sample ad builds"
            strap="This is what the strategy looks like at export size: the five laws and the message hierarchy, built in Overnght's own brand as real placements, ready for production."
          />
        </Reveal>
      </Shell>

      {/* Mobile: vertical, native size. Desktop: horizontal snap track. */}
      <Reveal>
        <div className="relative">
          <div
            ref={trackRef}
            className="flex flex-col items-center gap-16 px-5 md:snap-x md:snap-mandatory md:flex-row md:items-end md:gap-14 md:overflow-x-auto md:px-14 md:pb-6 md:[scrollbar-width:none]"
          >
            {BUILDS.map((b, i) => (
              <figure key={b.id} className="relative flex flex-col items-center md:snap-center" id={`build-${b.id.toLowerCase()}`}>
                <span
                  className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 font-display text-[10rem] leading-none text-transparent md:block"
                  style={{ WebkitTextStroke: '1px rgba(250,250,250,0.07)' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <figcaption className="relative mb-4 w-[270px] md:w-[320px]">
                  <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em]">
                    <span className="text-[#FD3737]">{b.id}</span>
                    <span className="text-[#B8B8C0]"> / {b.name} / {b.format}</span>
                  </p>
                </figcaption>
                <div className="relative">{b.el}</div>
                <div className="mt-5 w-[270px] md:w-[320px]">
                  <p className="text-base leading-[1.6] text-[#E4E4E9]">{b.note}</p>
                  <p className="mt-2 font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">{b.runs}</p>
                </div>
              </figure>
            ))}
          </div>

          {/* Edge fades, desktop only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-[#0A0A0A] to-transparent md:block" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-[#0A0A0A] to-transparent md:block" aria-hidden="true" />
        </div>

        <Shell className="mt-8 hidden items-center justify-between md:flex">
          <Mono>Drag or arrow through the builds / all six use Overnght&apos;s own mark, black and white only</Mono>
          <div className="flex gap-2">
            <button
              onClick={() => nudge(-1)}
              aria-label="Previous build"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-[#FAFAFA] transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="Next build"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-[#FAFAFA] transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </Shell>
      </Reveal>

      <Shell>
        <NextUp label="08 Ad Concept Library" />
      </Shell>
    </section>
  );
}
