'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MotionProvider, BarShell } from './motion';
import { Shell } from './ui';
import S00Hero from './S00Hero';
import S01Rights from './S01Rights';
import S02Voice from './S02Voice';
import S03PaidLane from './S03PaidLane';
import S04Teardown from './S04Teardown';
import S05Messaging from './S05Messaging';
import S06Pillars from './S06Pillars';
import S07Builds from './S07Builds';
import S08Concepts from './S08Concepts';
import S09Roadmap from './S09Roadmap';

export const SECTIONS = [
  { id: 's01-rights', n: '01', title: 'Rights vs Audience', gist: 'The portfolio is built. The audience is not.', stat: '6 deals / 14.2K' },
  { id: 's02-voice', n: '02', title: 'The Customer Record', gist: 'Verbatim, sourced, furious.', stat: '$1.925M' },
  { id: 's03-paid', n: '03', title: 'The Paid Lane', gist: 'Nobody runs subscription ads.', stat: '0 ads' },
  { id: 's04-teardown', n: '04', title: 'The Clip Teardown', gist: 'Five laws, ten dossiers.', stat: '46K vs 613' },
  { id: 's05-messaging', n: '05', title: 'The Messaging Teardown', gist: 'Your best line already exists.', stat: 'The hierarchy' },
  { id: 's06-pillars', n: '06', title: 'Strategy Pillars', gist: 'Four moves, each anchored to a finding.', stat: '4 pillars' },
  { id: 's07-builds', n: '07', title: 'Sample Ad Builds', gist: 'The strategy at export size, in your brand.', stat: '6 builds' },
  { id: 's08-concepts', n: '08', title: 'Ad Concept Library', gist: 'Eight scripted concepts, beat by beat.', stat: '8 concepts' },
  { id: 's09-roadmap', n: '09', title: 'Testing Roadmap', gist: 'Ninety days, opening on Worlds.', stat: 'Aug 24' },
];

export default function OvernghtExperience() {
  const [active, setActive] = useState(0);
  const [indexOpen, setIndexOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Section tracking */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* Index overlay: esc close, scroll lock, focus return */
  useEffect(() => {
    if (!indexOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndexOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      triggerRef.current?.focus();
    };
  }, [indexOpen]);

  const jump = useCallback((id: string) => {
    setIndexOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const current = SECTIONS[active];

  return (
    <MotionProvider>
      <main className="relative bg-[#0A0A0A] text-[#E4E4E9] antialiased selection:bg-[#FD3737] selection:text-white">
        {/* Sticky chrome */}
        <BarShell className="h-14 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
          <Shell className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-5 w-auto" />
              <span className="hidden font-mono uppercase text-xs tracking-[0.16em] text-[#B8B8C0] md:inline">
                {current.n} / 09 {current.title}
              </span>
            </div>
            <button
              ref={triggerRef}
              onClick={() => setIndexOpen(true)}
              className="flex h-14 items-center gap-3 px-2 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FAFAFA] transition-colors hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
              aria-haspopup="dialog"
              aria-expanded={indexOpen}
            >
              Index {current.n}/09
            </button>
          </Shell>
        </BarShell>

        {/* Index overlay */}
        {indexOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Page index"
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#0A0A0A]/[0.98]"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIndexOpen(false);
            }}
          >
            <Shell className="py-10 md:py-16">
              <div className="flex items-center justify-between">
                <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">
                  Full read 14 min / Skim 2 min
                </p>
                <button
                  onClick={() => setIndexOpen(false)}
                  className="flex h-11 w-11 items-center justify-center border border-white/20 font-mono text-lg text-[#FAFAFA] transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
                  aria-label="Close index"
                >
                  X
                </button>
              </div>
              <nav className="mt-8 flex flex-col">
                {SECTIONS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => jump(s.id)}
                    className="group grid grid-cols-[56px_1fr] items-baseline gap-4 border-b border-white/10 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737] md:grid-cols-[72px_1fr_220px] md:py-5"
                  >
                    <span className={`font-mono text-sm tracking-[0.1em] ${i === active ? 'text-[#FD3737]' : 'text-[#8A8A93]'}`}>
                      {s.n}
                    </span>
                    <span>
                      <span className="font-display uppercase text-2xl leading-tight text-[#E4E4E9] transition-colors group-hover:text-[#FAFAFA] md:text-4xl">
                        {s.title}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-[#8A8A93] md:text-base">{s.gist}</span>
                    </span>
                    <span className="hidden justify-self-end font-mono text-sm tabular-nums tracking-[0.08em] text-[#B8B8C0] md:block">
                      {s.stat}
                    </span>
                  </button>
                ))}
              </nav>
            </Shell>
          </div>
        ) : null}

        {/* Grain */}
        <div
          className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <S00Hero onJump={jump} />
        <S01Rights />
        <S02Voice />
        <S03PaidLane />
        <S04Teardown />
        <S05Messaging />
        <PlanDivider />
        <S06Pillars />
        <S07Builds />
        <S08Concepts />
        <S09Roadmap />
      </main>
    </MotionProvider>
  );
}

function PlanDivider() {
  return (
    <section className="border-y border-white/10 bg-[#111111] py-16 md:py-24" aria-label="The plan">
      <Shell>
        <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FD3737]">Act two</p>
        <h2 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.01em] text-[#FAFAFA]">
          The plan
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg md:text-xl leading-[1.5] text-[#E4E4E9]">
          Five findings, all documented. What follows is what we do with them.
        </p>
      </Shell>
    </section>
  );
}
