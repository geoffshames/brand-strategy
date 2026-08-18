'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SplitChars, Kicker, Mono } from './motion';

export default function Opening() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>('.ov-char');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) return;

      // Never pre-hide content with JS: from-states apply only when the tween
      // actually starts (immediateRender: false), so a tab with suspended rAF
      // still shows the full hero. A setTimeout watchdog snaps the timeline to
      // its end state if ticks never arrive.
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(chars, { yPercent: 112 }, { yPercent: 0, duration: 1.1, ease: EASE_OUT, stagger: 0.03, immediateRender: false }, 0.1)
        .fromTo(
          '.ov-fade',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.1, immediateRender: false },
          0.75
        );

      const watchdog = window.setTimeout(() => {
        if (tl.progress() < 1) tl.progress(1);
      }, 3000);

      // Slow orb drift
      gsap.to('.ov-orb-a', { xPercent: 6, yPercent: -8, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.ov-orb-b', { xPercent: -8, yPercent: 6, duration: 17, yoyo: true, repeat: -1, ease: 'sine.inOut' });

      // Exit scrub
      gsap.to('.ov-hero-stage', {
        yPercent: -10,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: '30% top', end: 'bottom top', scrub: true },
      });

      return () => window.clearTimeout(watchdog);
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Ambient field */}
      <div className="ov-orb-a absolute left-[8%] top-[18%] h-[46vmax] w-[46vmax] rounded-full bg-[radial-gradient(circle,rgba(253,55,55,0.16),transparent_62%)] opacity-50 blur-2xl" />
      <div className="ov-orb-b absolute bottom-[6%] right-[4%] h-[38vmax] w-[38vmax] rounded-full bg-[radial-gradient(circle,rgba(253,55,55,0.10),transparent_60%)] opacity-35 blur-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent,rgba(10,10,10,0.9))]" />

      <div className="ov-hero-stage relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-16 text-center md:px-10">
        <div className="ov-fade mb-9 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#FD3737]/70" />
          <Kicker>Creative Strategy / Crowd Control Digital</Kicker>
          <span className="h-px w-10 bg-[#FD3737]/70" />
        </div>

        <h1 className="font-display uppercase leading-[0.9] tracking-tight text-[#FAFAFA]">
          <span className="block text-[15vw] md:text-[9.5rem]">
            <SplitChars text="OVERNGHT" />
          </span>
          <span className="mt-3 block text-[5.4vw] text-[#FD3737] md:text-4xl">
            <SplitChars text="CREATIVE STRATEGY" />
          </span>
        </h1>

        <p className="ov-fade mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#B8B8C0] md:text-lg">
          The rights are signed. Exclusive rowing through 2028, European club water polo across the Americas,
          the biggest media deal in IFL history. What is not built yet is the audience those rights deserve.
          This is the creative system that builds it: what the category&apos;s winners actually do on camera,
          what its customers are begging for out loud, and the ads Overnght should run first.
        </p>

        <div className="ov-fade mt-12 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-8">
          <Mono>August 2026</Mono>
          <Mono className="hidden md:inline">Prepared for Overnght</Mono>
          <Mono>10 competitor creatives analyzed by video AI</Mono>
        </div>

        <div className="ov-fade mt-16">
          <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
            <div className="h-2 w-[3px] animate-bounce rounded-full bg-[#FD3737]" />
          </div>
        </div>
      </div>
    </section>
  );
}
