'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, MagneticButton, Kicker } from './motion';

export default function Closing() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-cl-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.ov-cl-in',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.1, scrollTrigger: { trigger: root.current, start: 'top 70%' } }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,55,55,0.10),transparent_62%)] blur-2xl" />

      <div className="relative z-10 mx-auto flex min-h-[80dvh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center md:px-10">
        <div className="ov-cl-in flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#FD3737]/70" />
          <Kicker>The bottom line</Kicker>
          <span className="h-px w-10 bg-[#FD3737]/70" />
        </div>

        <h2 className="ov-cl-in mt-8 font-display text-4xl uppercase leading-[1.02] tracking-tight text-[#FAFAFA] md:text-6xl">
          The rights are signed.
          <br />
          The moments are streaming.
          <br />
          <span className="text-[#FD3737]">Now build the audience.</span>
        </h2>

        <p className="ov-cl-in mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#B8B8C0] md:text-lg">
          The winning creative format is proven, the category&apos;s customers are announcing their switching intent
          in public, and the paid lane is empty. Few brands ever get all three at once.
        </p>

        <div className="ov-cl-in mt-12">
          <MagneticButton href="mailto:info@crowdcontroldigital.com?subject=Overnght%20Creative%20Strategy" label="Talk to Crowd Control" />
        </div>

        <div className="ov-cl-in mt-24 flex w-full flex-col items-center gap-6 border-t border-white/[0.07] pt-10 md:flex-row md:justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-6 w-auto opacity-80" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6E6E76]">
            Crowd Control Digital / info@crowdcontroldigital.com / August 2026
          </p>
        </div>
      </div>
    </section>
  );
}
