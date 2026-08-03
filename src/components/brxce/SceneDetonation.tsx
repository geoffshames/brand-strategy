'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

export default function Detonation() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(['.bx-det-line', '.bx-det-quote', '.bx-det-reveal', '.bx-det-metawrap', '.bx-det-meta'], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      // Master pinned sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=320%',
          pin: true,
          scrub: 0.5,
        },
      });

      // Beat 1: the setup lines
      tl.fromTo('.bx-det-line-1', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
        .to('.bx-det-line-1', { opacity: 0, y: -40, duration: 0.8 }, '+=0.6')
        // Beat 2: the quote
        .fromTo('.bx-det-quote', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1 })
        .to('.bx-det-quote', { opacity: 0, y: -40, duration: 0.8 }, '+=0.8')
        // Beat 3: the reveal — FOX 2027
        .fromTo('.bx-det-flash', { opacity: 0 }, { opacity: 1, duration: 0.12, immediateRender: false })
        .to('.bx-det-flash', { opacity: 0, duration: 0.5 })
        .fromTo('.bx-det-reveal', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2 }, '<0.1')
        .fromTo('.bx-det-metawrap', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, immediateRender: false }, '<0.35')
        .fromTo('.bx-det-meta', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, immediateRender: false }, '<0.15')
        // Ring pulse expands as you keep scrolling
        .fromTo(
          '.bx-det-ring',
          { scale: 0.4, opacity: 0.9 },
          { scale: 2.4, opacity: 0, duration: 1.6, stagger: 0.25, immediateRender: false },
          '<'
        );
    },
    { scope: root }
  );

  return (
    <section id="detonation" ref={root} className="relative overflow-hidden">
      <div className="relative flex min-h-[100dvh] items-center justify-center">
        {/* bg */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/images/brxce-grimm/hero2.png)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(253,55,55,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

        {/* white flash */}
        <div className="bx-det-flash pointer-events-none absolute inset-0 bg-white opacity-0" />

        {/* expanding rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="bx-det-ring absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FD3737]/60 opacity-0"
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center md:px-10">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">III</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Detonation</Kicker>
          </div>

          {/* Stacked beats — absolutely centered over each other */}
          <div className="relative grid min-h-[46vh] place-items-center">
            {/* Beat 1 */}
            <div className="bx-det-line bx-det-line-1 col-start-1 row-start-1 opacity-0">
              <p className="mx-auto max-w-3xl font-display text-3xl leading-[1.15] text-white md:text-5xl">
                One month after an impulse buy of DJ decks,
                <br className="hidden md:block" /> he left to shoot a reality show.
              </p>
            </div>

            {/* Beat 2 — the quote */}
            <figure className="bx-det-quote col-start-1 row-start-1 opacity-0">
              <blockquote className="mx-auto max-w-3xl font-display text-3xl leading-[1.15] text-white md:text-5xl">
                “The executives love that you’re a DJ.
                <br />
                <span className="text-[#FD3737]">Just lean into it.”</span>
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#B8B8C0]">
                — Production, on location
              </figcaption>
            </figure>

            {/* Beat 3 — the reveal */}
            <div className="bx-det-reveal col-start-1 row-start-1 opacity-0">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#B8B8C0] md:text-sm">FOX · Primetime · 2027</p>
              <h2 className="mt-4 font-display text-[13vw] leading-[0.9] text-white md:text-[9rem]">
                MARRIAGE
                <br />
                <span className="text-[#FD3737]">MARKET</span>
              </h2>
            </div>
          </div>

          {/* Meta row (arrives with reveal, stays) */}
          <div className="bx-det-metawrap mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 opacity-0 md:grid-cols-3">
            {[
              ['Main storyline', 'A romantic-lead arc watched by millions'],
              ['Hosted by Whitney Cummings', 'FOX’s flagship new unscripted format'],
              ['~82% female audience', 'His exact target wedge, pre-assembled'],
            ].map(([a, b], i) => (
              <div key={i} className="bx-det-meta bg-[#0C0C0C]/90 p-5 text-left opacity-0 md:p-6">
                <p className="font-display text-base text-white md:text-lg">{a}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#B8B8C0] md:text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
