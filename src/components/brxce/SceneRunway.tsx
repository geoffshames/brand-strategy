'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const PHASES = [
  {
    window: 'Aug — Oct 2026',
    title: 'Foundation & World',
    listeners: '1.4K',
    body: 'Nostos identity shipped. Flagship hub live with capture wired in. Release calendar locked. The funnel exists before anyone is watching.',
  },
  {
    window: 'Nov 2026 — Jan 2027',
    title: 'Catalog Engine',
    listeners: '→ 10K',
    body: 'The cadence runs — singles, IDs, remixes, world-builders. Social becomes one coordinated world. List builds toward 25K before a single frame airs.',
  },
  {
    window: 'Feb — Apr 2027',
    title: 'The Show Drops',
    listeners: '→ 125K',
    body: 'The detonation. Show-timed releases mirror every on-air beat. The romantic-lead arc drives discovery into a waiting catalog and a live funnel.',
  },
  {
    window: 'May — Aug 2027',
    title: 'The Artist Rise',
    listeners: '→ 250K',
    body: 'Attention converts to economy: festivals, bookings, sync, merch, the label conversation on his terms. The world outgrows the show that lit it.',
  },
];

export default function Runway() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const line = root.current?.querySelector<SVGPathElement>('.bx-runway-line');

      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: reduced ? 0 : len });
        if (!reduced) {
          gsap.to(line, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.bx-runway-body', start: 'top 70%', end: 'bottom 75%', scrub: 0.4 },
          });
        }
      }

      if (reduced) return;

      gsap.utils.toArray<HTMLElement>('.bx-phase').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
        const dot = el.querySelector('.bx-phase-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            { scale: 1, duration: 0.5, ease: 'back.out(2.2)', scrollTrigger: { trigger: el, start: 'top 78%' } }
          );
        }
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#0D0D0D] py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-20 max-w-3xl md:mb-28">
          <Kicker className="mb-5">The Runway · Twelve months, one fixed point</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Everything before the premiere
            <br />
            is <span className="text-[#FD3737]">runway.</span>
          </h2>
        </div>

        <div className="bx-runway-body relative">
          {/* the drawn line */}
          <svg
            className="pointer-events-none absolute left-[13px] top-0 h-full w-px overflow-visible md:left-1/2"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="bx-runway-line" d="M1 0 L1 1000" stroke="#FD3737" strokeWidth="2" fill="none" opacity="0.75" />
            <path d="M1 0 L1 1000" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.07" />
          </svg>

          <div className="space-y-20 md:space-y-32">
            {PHASES.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={i} className={`bx-phase relative grid grid-cols-[28px_1fr] gap-5 md:grid-cols-2 md:gap-0`}>
                  {/* dot */}
                  <span className="bx-phase-dot absolute left-[7px] top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-[#0D0D0D] bg-[#FD3737] md:left-1/2 md:-translate-x-1/2" />

                  <div className="hidden md:block" style={{ order: left ? 1 : 2 }} />
                  <div
                    className={`col-start-2 md:col-start-auto ${left ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                    style={{ order: left ? 2 : 1 }}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#FD3737]">{p.window}</p>
                    <div className={`mt-3 flex items-baseline gap-4 ${left ? 'md:justify-end' : ''}`}>
                      <h3 className="font-display text-3xl text-white md:text-4xl">{p.title}</h3>
                      <span className="font-display text-xl text-[#FD3737] md:text-2xl">{p.listeners}</span>
                    </div>
                    <p className={`mt-4 max-w-md text-sm leading-relaxed text-[#B8B8C0] md:text-base ${left ? 'md:ml-auto' : ''}`}>
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
