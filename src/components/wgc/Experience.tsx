'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MotionProvider, BarShell } from './motion';
import { Shell } from './ui';
import Hero from './Hero';
import { SChannel, SContent, SAudience } from './Findings';
import { STeardown } from './Teardown';
import { SField, SMarket, SSwot } from './Landscape';
import { PlanDivider, SPillars, SSeries, SRoadmap } from './Plan';
import { SLadder, SSafety, STargets, SRisks, SFirst30, Closing } from './Build';

export const SECTIONS = [
  { id: 's01-channel', n: '01', title: 'The Channel Today', gist: 'Three weeks, 41 Shorts, one clear signal.', stat: '85.3K views' },
  { id: 's02-content', n: '02', title: 'Content Analysis', gist: 'Every format scored. What breaks out and why.', stat: '61% POV' },
  { id: 's03-teardown', n: '03', title: 'Breakout Teardown', gist: 'The two outliers, frame by frame, with Pegasus.', stat: '12 passes each' },
  { id: 's03-audience', n: '04', title: 'The Audience', gist: 'Who is watching and what they ask for.', stat: '97 comments' },
  { id: 's04-field', n: '05', title: 'Creator Landscape', gist: 'Fifteen fragrance creators, three tiers.', stat: '0.8 vs 4.2' },
  { id: 's05-market', n: '06', title: 'Market Context', gist: 'Teen boys, clones and YouTube.', stat: '+22%' },
  { id: 's06-swot', n: '07', title: 'SWOT', gist: 'What the evidence adds up to.', stat: '4 x 4' },
  { id: 's07-pillars', n: '08', title: 'Strategy Pillars', gist: 'Four moves, each tied to a finding.', stat: '4 pillars' },
  { id: 's08-series', n: '09', title: 'Content System', gist: 'Five named series and a weekly rhythm.', stat: '5 series' },
  { id: 's09-roadmap', n: '10', title: '12-Month Roadmap', gist: 'Reset, build, accelerate, own.', stat: 'Oct to Sep' },
  { id: 's10-ladder', n: '11', title: 'Product Ladder', gist: 'From an affiliate code to a WGC product.', stat: '5 rungs' },
  { id: 's11-safety', n: '12', title: 'Safety and Setup', gist: 'How a teen creator runs this safely.', stat: '10 rules' },
  { id: 's12-targets', n: '13', title: 'Targets', gist: 'Now, 90 days, 12 months.', stat: '15K subs' },
  { id: 's13-risks', n: '14', title: 'Risks', gist: 'What could go wrong and the fix.', stat: '6 risks' },
  { id: 's14-first30', n: '15', title: 'First 30 Days', gist: 'Ten moves to start Monday.', stat: '10 moves' },
];

export default function WgcExperience() {
  const [active, setActive] = useState(0);
  const [indexOpen, setIndexOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
      <main className="relative overflow-x-clip bg-[#0A0A0A] text-[#E4E4E9] antialiased selection:bg-[#FD3737] selection:text-white">
        <BarShell className="h-14 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md">
          <Shell className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-5 w-auto" />
              <span className="hidden font-mono uppercase text-xs tracking-[0.16em] text-[#B8B8C0] md:inline">
                {current.n} / 15 {current.title}
              </span>
            </div>
            <button
              ref={triggerRef}
              onClick={() => setIndexOpen(true)}
              className="flex h-14 items-center gap-3 px-2 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FAFAFA] transition-colors hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
              aria-haspopup="dialog"
              aria-expanded={indexOpen}
            >
              Index {current.n}/15
            </button>
          </Shell>
        </BarShell>

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
                  Full read 20 min / Skim 3 min
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
                    className="group grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-white/10 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737] md:grid-cols-[72px_1fr_200px] md:py-5"
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

        <div
          className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <Hero onJump={jump} />
        <SChannel />
        <SContent />
        <STeardown />
        <SAudience />
        <SField />
        <SMarket />
        <SSwot />
        <PlanDivider />
        <SPillars />
        <SSeries />
        <SRoadmap />
        <SLadder />
        <SSafety />
        <STargets />
        <SRisks />
        <SFirst30 />
        <Closing />
      </main>
    </MotionProvider>
  );
}
