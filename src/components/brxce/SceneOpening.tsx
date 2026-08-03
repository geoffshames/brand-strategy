'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SplitChars, Kicker } from './motion';

export default function Opening() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>('.bx-char');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(['.bx-char', '.bx-fade'], { opacity: 1, y: 0 });
        return;
      }

      // Entrance
      gsap.set(chars, { yPercent: 110 });
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to('.bx-veil', { opacity: 0.42, duration: 1.4, ease: 'power2.out' }, 0)
        .to(chars, { yPercent: 0, duration: 1.1, ease: EASE_OUT, stagger: 0.028 }, 0.1)
        .fromTo('.bx-fade', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.12 }, 0.7);

      // Parallax + exit scrub
      gsap.to('.bx-bg', {
        yPercent: 14,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.bx-stage', {
        yPercent: -12,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: '30% top', end: 'bottom top', scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div
        className="bx-bg absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/brxce-grimm/hero1.png)' }}
      />
      <div className="bx-veil absolute inset-0 bg-black opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,transparent,rgba(10,10,10,0.92))]" />

      <div className="bx-stage relative z-10 mx-auto w-full max-w-6xl px-6 pt-20 text-center md:px-10">
        <div className="bx-fade mb-8 flex items-center justify-center gap-4 opacity-0">
          <span className="h-px w-10 bg-[#FD3737]/70" />
          <Kicker>
            Strategy Briefing<span className="hidden md:inline"> · Crowd Control</span>
          </Kicker>
          <span className="h-px w-10 bg-[#FD3737]/70" />
        </div>

        <h1 className="font-display text-[15vw] leading-[0.88] text-white md:text-[10rem] lg:text-[11.5rem]">
          <SplitChars text="BRXCE" className="block" />
          <SplitChars text="GRIMM" className="block text-[#FD3737]" />
        </h1>

        <p className="bx-fade mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#E4E4E9] opacity-0 md:text-xl">
          Twelve years in the wilderness. One primetime detonation already on the calendar.
          This is the plan for the return.
        </p>

        <div className="bx-fade mt-14 flex flex-col items-center gap-3 opacity-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#B8B8C0]">Scroll to begin</p>
          <span className="relative block h-12 w-px overflow-hidden bg-white/15">
            <span className="bx-scrollhint absolute left-0 top-0 h-4 w-px bg-[#FD3737]" />
          </span>
        </div>
      </div>

      <style jsx>{`
        .bx-scrollhint {
          animation: bx-drop 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes bx-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
}
