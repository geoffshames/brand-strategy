'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const KPIS = [
  {
    metric: 'Combined social reach',
    now: '563K',
    target: '2M+',
    note: 'Instagram 409K, Facebook 78K, TikTok 26.8K, X 26.4K, YouTube 22.8K — already substantial. Unified content engine and cross-promotion across all five platforms.',
  },
  {
    metric: 'YouTube subscribers',
    now: '22.8K',
    target: '250K+',
    note: 'The weekly show reformatted natively, tour clips as shorts, skit series with recurring characters.',
  },
  {
    metric: 'TikTok followers',
    now: '26.8K',
    target: '500K+',
    note: '335 videos already on @redgranttv. Daily short-form from 48 weeks of tour footage will compound the existing base rapidly.',
  },
  {
    metric: 'Email/SMS owned list',
    now: '0',
    target: '50K+',
    note: 'Existing custom tour capture ported to Laylo. The one asset no algorithm controls, captured from every show, stream, and post.',
  },
  {
    metric: 'Touring venues',
    now: 'Clubs',
    target: 'Theaters',
    note: 'The 48-weeks-a-year work ethic systematized into theater routing, branded tours, and a special taping.',
  },
  {
    metric: 'Content output',
    now: '~5/week',
    target: 'Daily+',
    note: 'A content pipeline that turns every show, every tour date, every skit into platform-native material.',
  },
];

export default function Scoreboard() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      gsap.fromTo(
        '.rg-score-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 72%' } }
      );

      gsap.utils.toArray<HTMLElement>('.rg-kpi').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: EASE_OUT,
            delay: (i % 3) * 0.09,
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      // arrow draw
      gsap.utils.toArray<HTMLElement>('.rg-kpi-arrow').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: 'power2.inOut', scrollTrigger: { trigger: el, start: 'top 86%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-20 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rg-score-head mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker className="mb-5">The Scoreboard</Kicker>
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
              Twelve months,
              <br />
              measured honestly<span className="text-[#FD3737]">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#B8B8C0] md:text-base">
            Every number here is either verified today or a target this plan commits to. No vanity metrics, no padding.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {KPIS.map((k, i) => (
            <div
              key={i}
              className="rg-kpi group rounded-2xl border border-white/10 bg-gradient-to-b from-[#151515] to-[#0E0E0E] p-5 transition-colors duration-500 hover:border-[#FD3737]/40 md:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8B8C0]">{k.metric}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-display text-xl text-[#B8B8C0] md:text-2xl">{k.now}</span>
                <span className="rg-kpi-arrow h-px flex-1 origin-left bg-gradient-to-r from-[#B8B8C0]/40 to-[#FD3737]" />
                <span className="font-display text-2xl text-[#FD3737] md:text-3xl">{k.target}</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#B8B8C0] md:text-sm">{k.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
