'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const PHASES = [
  {
    window: 'Sep to Nov 2026',
    title: 'Foundation',
    metric: 'Identity shipped',
    body: 'Account audit, visual identity, and content system built. First show clips reformatted natively. Email capture wired in at every live date. Shows: Hollywood Improv, Cordova TN, Bowie MD, Detroit Fox Theatre.',
  },
  {
    window: 'Dec 2026 to Feb 2027',
    title: 'Content Engine Live',
    metric: 'Email list to 10K',
    body: 'Daily posting cadence locked. Show clips pipeline running. Tour content from Katt Williams dates feeding the engine. Email list to 10K through show capture and social calls to action.',
  },
  {
    window: 'Mar to May 2027',
    title: 'Scale',
    metric: 'Email 25K · TikTok 100K+',
    body: 'Theater routing begins. First branded tour dates booked. Email list to 25K. TikTok growth to 100K+ through native short-form. The owned audience starts to compound.',
  },
  {
    window: 'Jun to Aug 2027',
    title: 'The Special',
    metric: '50K owned · 500K+ reach',
    body: 'Special taping strategy executed. Streaming platform conversations opened. 50K owned audience. 500K+ combined social reach. The machine that did not exist a year ago now funds its own expansion.',
  },
];

export default function Runway() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const line = root.current?.querySelector<SVGPathElement>('.rg-runway-line');

      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: reduced ? 0 : len });
        if (!reduced) {
          gsap.to(line, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.rg-runway-body', start: 'top 70%', end: 'bottom 75%', scrub: 0.4 },
          });
        }
      }

      if (reduced) return;

      gsap.utils.toArray<HTMLElement>('.rg-phase').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
        const dot = el.querySelector('.rg-phase-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            { scale: 1, duration: 0.5, ease: 'back.out(2.2)', scrollTrigger: { trigger: el, start: 'top 78%' } }
          );
        }
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#0D0D0D] py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-20 max-w-3xl md:mb-28">
          <Kicker className="mb-5">The Runway · Twelve months</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Twelve months to
            <br />
            the <span className="text-[#FD3737]">special.</span>
          </h2>
        </div>

        <div className="rg-runway-body relative">
          {/* the drawn line */}
          <svg
            className="pointer-events-none absolute left-[13px] top-0 h-full w-px overflow-visible md:left-1/2"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="rg-runway-line" d="M1 0 L1 1000" stroke="#FD3737" strokeWidth="2" fill="none" opacity="0.75" />
            <path d="M1 0 L1 1000" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.07" />
          </svg>

          <div className="space-y-20 md:space-y-32">
            {PHASES.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div key={i} className={`rg-phase relative grid grid-cols-[28px_1fr] gap-5 md:grid-cols-2 md:gap-0`}>
                  {/* dot */}
                  <span className="rg-phase-dot absolute left-[7px] top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-[#0D0D0D] bg-[#FD3737] md:left-1/2 md:-translate-x-1/2" />

                  <div className="hidden md:block" style={{ order: left ? 1 : 2 }} />
                  <div
                    className={`col-start-2 md:col-start-auto ${left ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                    style={{ order: left ? 2 : 1 }}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#FD3737]">{p.window}</p>
                    <div className={`mt-3 flex items-baseline gap-4 ${left ? 'md:justify-end' : ''}`}>
                      <h3 className="font-display text-3xl text-white md:text-4xl">{p.title}</h3>
                      <span className="font-display text-xl text-[#FD3737] md:text-2xl">{p.metric}</span>
                    </div>
                    <p className={`mt-4 max-w-md text-sm leading-relaxed text-[#B8B8C0] md:text-base ${left ? 'md:ml-auto' : ''}`}>
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
