'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SplitWords, Kicker } from './motion';

const MONOLOGUE =
  'Thirty years. Apollo Theatre to sold-out arenas. Comedy Central, Showtime, Shaq\'s All Star Comedy Jam. Eleven films. A production company with Lionsgate. Seven Viacom shows. Five hundred thousand DVDs sold. He has been everywhere comedy lives — and built a career most comedians would dream of. The next level is making sure the algorithm knows it too.';

const TRUTHS = [
  { value: '30', label: 'years on stage', sub: 'Apollo Theatre 1996 to Katt Williams\' Golden Age Tour 2026' },
  { value: '48', label: 'weeks per year on the road', sub: 'A touring work ethic virtually unmatched in comedy' },
  { value: '11', label: 'film appearances', sub: 'American Hustle, First Sunday, Family Reunion — and counting' },
];

export default function Grind() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const words = gsap.utils.toArray<HTMLElement>('.rg-word');

      if (reduced) {
        gsap.set(words, { opacity: 1 });
        return;
      }

      // Pinned reading scrub
      gsap.set(words, { opacity: 0.12 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.rg-read',
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.4,
        },
      });

      // Truth cards rise
      gsap.utils.toArray<HTMLElement>('.rg-truth').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: EASE_OUT,
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // Numbers count up
      gsap.utils.toArray<HTMLElement>('.rg-count').forEach((el) => {
        const target = el.dataset.value || '';
        const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
        const suffix = target.replace(/[0-9.,]/g, '');
        const obj = { v: 0 };
        gsap.to(obj, {
          v: numeric,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            const val = numeric >= 1000 ? Math.round(obj.v).toLocaleString('en-US') : String(Math.round(obj.v));
            el.textContent = val + suffix;
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="grind" ref={root} className="relative">
      {/* Pinned monologue */}
      <div className="rg-read flex min-h-[100dvh] items-center">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">I</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Grind</Kicker>
          </div>
          <p className="font-display text-2xl leading-[1.2] text-white md:text-5xl md:leading-[1.15]">
            <SplitWords text={MONOLOGUE} />
          </p>
        </div>
      </div>

      {/* The hard numbers */}
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10 md:pb-48 md:pt-10">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {TRUTHS.map((t, i) => (
            <div key={i} className="rg-truth bg-[#0D0D0D] p-8 md:p-10">
              <p className="rg-count font-display text-5xl text-white md:text-6xl" data-value={t.value}>
                0
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">{t.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#B8B8C0]">{t.sub}</p>
            </div>
          ))}
        </div>
        <p className="rg-truth mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#B8B8C0] md:mt-14 md:text-lg">
          The grind is not a lack of opportunity. It is three decades of stage time, film credits,
          and touring — a foundation most comedians never build. The work now is to build the digital machine that matches the scale of the career.
        </p>
      </div>
    </section>
  );
}
