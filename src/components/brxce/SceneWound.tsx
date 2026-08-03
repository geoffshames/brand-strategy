'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SplitWords, Kicker } from './motion';

const MONOLOGUE =
  'Twelve years a singer and songwriter. Always waiting on someone else — a producer, a mixer, a green light that never came. The craft kept sharpening. The traction never followed.';

const TRUTHS = [
  { value: '1,395', label: 'Spotify monthly listeners', sub: 'today — the entire base' },
  { value: '686K', label: 'plays on one single', sub: '“Don’t Cross That Line” proved demand' },
  { value: '12', label: 'years of craft', sub: 'with no machine underneath it' },
];

export default function Wound() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const words = gsap.utils.toArray<HTMLElement>('.bx-word');

      if (reduced) {
        gsap.set(words, { opacity: 1 });
        return;
      }

      // Pinned reading scrub
      gsap.set(words, { opacity: 0.12 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.06,
        ease: 'none',
        scrollTrigger: {
          trigger: '.bx-read',
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.4,
        },
      });

      // Truth cards rise
      gsap.utils.toArray<HTMLElement>('.bx-truth').forEach((el, i) => {
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
      gsap.utils.toArray<HTMLElement>('.bx-count').forEach((el) => {
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
    <section id="wound" ref={root} className="relative">
      {/* Pinned monologue */}
      <div className="bx-read flex min-h-[100dvh] items-center">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">I</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Wound</Kicker>
          </div>
          <p className="font-display text-3xl leading-[1.18] text-white md:text-6xl md:leading-[1.12]">
            <SplitWords text={MONOLOGUE} />
          </p>
        </div>
      </div>

      {/* The hard numbers */}
      <div className="mx-auto max-w-6xl px-6 pb-36 pt-10 md:px-10 md:pb-48">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {TRUTHS.map((t, i) => (
            <div key={i} className="bx-truth bg-[#0D0D0D] p-8 md:p-10">
              <p className="bx-count font-display text-5xl text-white md:text-6xl" data-value={t.value}>
                0
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">{t.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#B8B8C0]">{t.sub}</p>
            </div>
          ))}
        </div>
        <p className="bx-truth mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-[#B8B8C0] md:text-lg">
          The wound is not a lack of talent. It is a decade of demand signals —
          a 686K single, packed villa sets, daily affirmation — with no machine built to convert any of it.
        </p>
      </div>
    </section>
  );
}
