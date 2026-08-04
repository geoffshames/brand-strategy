'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, MagneticButton, MaskedLines } from './motion';

export default function Closing() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lines = gsap.utils.toArray<HTMLElement>('.rg-line');

      if (reduced) {
        gsap.set([lines, '.rg-close-fade'], { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.set(lines, { yPercent: 115 });
      gsap.to(lines, {
        yPercent: 0,
        duration: 1.1,
        ease: EASE_OUT,
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: 'top 60%' },
      });
      gsap.fromTo(
        '.rg-close-fade',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.12, scrollTrigger: { trigger: root.current, start: 'top 45%' } }
      );

      // slow drift on the bg
      gsap.fromTo(
        '.rg-close-bg',
        { scale: 1.12 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom bottom', scrub: true } }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      <div
        className="rg-close-bg absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/red-grant/closing.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black/55 to-[#0A0A0A]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <h2 className="font-display text-[11vw] leading-[0.95] text-white md:text-8xl">
          <MaskedLines lines={['THE STAGE IS', 'HIS KINGDOM.']} />
          <MaskedLines lines={['THE SCREEN IS', 'THE FRONTIER.']} className="text-[#FD3737]" />
        </h2>

        <p className="rg-close-fade mt-8 max-w-xl text-base leading-relaxed text-[#E4E4E9] opacity-0 md:text-lg">
          Thirty years of grind. An arsenal no comedian can match. A digital machine that doesn't exist yet.
          The strategy is not to make Red Grant funny — the world already knows that. It is to make him findable,
          ownable, and unstoppable.
        </p>

        <div className="rg-close-fade mt-12 flex flex-col items-start gap-8 opacity-0 md:flex-row md:items-center md:justify-between">
          <MagneticButton href="mailto:info@crowdcontroldigital.com" label="Start the build" />
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/CC-LOGO-2025-PROFILE.png" alt="Crowd Control Digital" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B8B8C0]">Prepared for Red Grant</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#B8B8C0]/60">
                Crowd Control · August 2026 · v1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
