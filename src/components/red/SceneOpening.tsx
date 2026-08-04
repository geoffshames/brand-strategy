'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SplitChars, Kicker } from './motion';

export default function Opening() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = gsap.utils.toArray<HTMLElement>('.rg-char');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(['.rg-char', '.rg-fade'], { opacity: 1, y: 0 });
        return;
      }

      // Entrance
      gsap.set(chars, { yPercent: 110 });
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to('.rg-veil', { opacity: 0.42, duration: 1.4, ease: 'power2.out' }, 0)
        .to(chars, { yPercent: 0, duration: 1.1, ease: EASE_OUT, stagger: 0.028 }, 0.1)
        .fromTo('.rg-fade', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.12 }, 0.7);

      // Parallax + exit scrub
      gsap.to('.rg-bg', {
        yPercent: 14,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.rg-stage', {
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
        className="rg-bg absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/red-grant/hero1.png)' }}
      />
      <div className="rg-veil absolute inset-0 bg-black opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,transparent,rgba(10,10,10,0.92))]" />

      <div className="rg-stage relative z-10 mx-auto w-full max-w-6xl px-6 pt-20 text-center md:px-10">
        <div className="rg-fade mb-8 flex items-center justify-center gap-4 opacity-0">
          <span className="h-px w-10 bg-[#FD3737]/70" />
          <Kicker>
            Strategy Briefing<span className="hidden md:inline"> · Crowd Control</span>
          </Kicker>
          <span className="h-px w-10 bg-[#FD3737]/70" />
        </div>

        <h1 className="font-display text-[15vw] leading-[0.88] text-white md:text-[10rem] lg:text-[11.5rem]">
          <SplitChars text="RED" className="block" />
          <SplitChars text="GRANT" className="block text-[#FD3737]" />
        </h1>

        <p className="rg-fade mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#E4E4E9] opacity-0 md:text-xl">
          Thirty years on stage. Forty-eight weeks a year on the road.
          The funniest man most people have never heard of &mdash; yet.
        </p>

        <div className="rg-fade mt-14 flex flex-col items-center gap-3 opacity-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#B8B8C0]">Scroll to begin</p>
          <span className="relative block h-12 w-px overflow-hidden bg-white/15">
            <span className="rg-scrollhint absolute left-0 top-0 h-4 w-px bg-[#FD3737]" />
          </span>
        </div>
      </div>

      <style jsx>{`
        .rg-scrollhint {
          animation: rg-drop 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        @keyframes rg-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
}
