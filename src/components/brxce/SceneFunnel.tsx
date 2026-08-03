'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const STAGES = [
  { stage: 'Primetime Exposure', display: 'Millions', note: 'The Marriage Market romantic-lead arc, 2027', width: 100 },
  { stage: 'Discovery to Follow', display: '250K+ reach', note: 'IG, TikTok and YT capture the curious mid-episode', width: 80 },
  { stage: 'Owned List', display: '25K → 100K', note: 'Email and SMS built during the runway, surge-ready', width: 62 },
  { stage: 'Catalog Streaming', display: '250K+ listeners', note: 'Pre-saves route attention into a persistent catalog', width: 46 },
  { stage: 'Fan Economy', display: 'Live, sync, merch', note: 'Festivals, bookings and direct-to-fan on his terms', width: 34 },
];

export default function Funnel() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      gsap.fromTo(
        '.bx-fun-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 74%' } }
      );

      gsap.utils.toArray<HTMLElement>('.bx-fun-stage').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scaleX: 0.6, y: 24 },
          {
            opacity: 1,
            scaleX: 1,
            y: 0,
            duration: 0.8,
            ease: EASE_OUT,
            delay: i * 0.1,
            scrollTrigger: { trigger: '.bx-fun-body', start: 'top 78%' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.bx-fun-drop').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.5, ease: 'power2.inOut', delay: 0.25 + i * 0.1, scrollTrigger: { trigger: '.bx-fun-body', start: 'top 78%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="bx-fun-head mb-14 text-center md:mb-18">
          <Kicker className="mb-5">The Machine</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Catch the detonation<span className="text-[#FD3737]">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:text-base">
            Primetime attention arrives at the top in 2027 whether or not anything is built underneath it.
            The five pillars exist to route that attention downward, stage by stage,
            instead of letting it evaporate with the season.
          </p>
        </div>

        <div className="bx-fun-body flex flex-col items-center">
          {STAGES.map((s, i) => (
            <div key={i} className="flex w-full flex-col items-center">
              <div
                className="bx-fun-stage origin-center rounded-xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0D0D0D] px-5 py-5 text-center md:px-8 md:py-6"
                style={{ width: `min(${s.width}%, 100%)`, minWidth: '260px' }}
              >
                <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#FD3737]">{s.stage}</p>
                  <p className="font-display text-xl text-white md:text-2xl">{s.display}</p>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#B8B8C0] md:text-sm">{s.note}</p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="bx-fun-drop h-8 w-px origin-top bg-gradient-to-b from-[#FD3737]/70 to-[#FD3737]/20 md:h-10" />
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-[#B8B8C0] md:text-base">
          Stage values are the plan's twelve-month commitments.
          The narrowing is the point: each layer converts borrowed attention into an owned asset.
        </p>
      </div>
    </section>
  );
}
