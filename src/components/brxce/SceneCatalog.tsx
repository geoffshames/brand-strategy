'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const TRACKS = [
  { title: "Don't Cross That Line", year: '2023', plays: 686126, display: '686K' },
  { title: 'Naughty', year: '2018', plays: 438216, display: '438K' },
  { title: 'SAD HOUR', year: '2025', plays: 198714, display: '199K' },
  { title: 'My World', year: '2024', plays: 120352, display: '120K' },
  { title: 'TENNESSEE GROUND', year: '2025', plays: 13582, display: '14K' },
];

const MAX = TRACKS[0].plays;

export default function Catalog() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      gsap.fromTo(
        '.bx-cat-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 74%' } }
      );

      gsap.utils.toArray<HTMLElement>('.bx-cat-row').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASE_OUT, delay: i * 0.06, scrollTrigger: { trigger: el, start: 'top 90%' } }
        );
      });

      gsap.utils.toArray<HTMLElement>('.bx-cat-bar').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: 'power3.inOut', delay: i * 0.08, scrollTrigger: { trigger: el, start: 'top 90%' } }
        );
      });

      gsap.fromTo(
        '.bx-cat-verdict',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, scrollTrigger: { trigger: '.bx-cat-verdict', start: 'top 90%' } }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="bx-cat-head mb-14 md:mb-18">
          <Kicker className="mb-5">The Receipts</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            The demand is already
            <br />
            on the board<span className="text-[#FD3737]">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:text-base">
            Lifetime plays per track, verified on Spotify today. This is not a projection.
            It is proof that when a song lands, the audience shows up.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-7">
          {TRACKS.map((t, i) => (
            <div key={i} className="bx-cat-row">
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <p className="font-display text-base text-white md:text-lg">
                  {t.title}
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#B8B8C0]">{t.year}</span>
                </p>
                <p className="font-display text-lg text-white md:text-xl">{t.display}</p>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.07] md:h-3">
                <div
                  className="bx-cat-bar h-full origin-left rounded-full bg-gradient-to-r from-[#7A1B1B] to-[#FD3737]"
                  style={{ width: `${Math.max((t.plays / MAX) * 100, 2)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bx-cat-verdict mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          <div className="bg-[#0D0D0D] p-8 md:p-10">
            <p className="font-display text-4xl text-white md:text-5xl">1.46M</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">lifetime plays across five tracks</p>
            <p className="mt-2 text-sm leading-relaxed text-[#B8B8C0]">The catalog has already reached seven figures of listening.</p>
          </div>
          <div className="bg-[#0D0D0D] p-8 md:p-10">
            <p className="font-display text-4xl text-white md:text-5xl">1,395</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">monthly listeners retained</p>
            <p className="mt-2 text-sm leading-relaxed text-[#B8B8C0]">
              The gap between those two numbers is the whole strategy: demand proven, machine missing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
