'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const RIGHTS = [
  { org: 'USRowing', deal: 'Exclusive streaming partner, extended through 2028', detail: 'Every USRowing-hosted regatta including Youth Nationals' },
  { org: 'World Rowing Championships 2026', deal: 'US rights, Amsterdam, August 24 to 30', detail: 'The biggest rowing property of the year, live this week' },
  { org: 'European Aquatics', deal: 'Multi-year exclusive across the Americas', detail: 'Every European club water polo competition, Champions League down' },
  { org: 'USA Water Polo', deal: 'Five-year official streaming partnership', detail: 'National League, Senior Nationals, national team matches' },
  { org: 'Indoor Football League', deal: 'Multi-year, multi-million media rights, 2026 to 2028', detail: 'Billed by the IFL as the largest media deal in league history. 55+ live games a year, exclusive National Championship in 2027 and 2028' },
  { org: '3C2A California', deal: 'Multi-year, 16 state championships', detail: '28,000+ community college student-athletes in the association' },
];

const AUDIENCE = [
  { value: '14.2K', label: 'Instagram followers' },
  { value: '618', label: 'TikTok followers' },
  { value: '1.39K', label: 'YouTube subscribers' },
  { value: '2.5', label: 'App Store rating, 11 reviews' },
];

export default function Position() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-pos-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.ov-pos-in',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: EASE_OUT,
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: 'top 68%' },
        }
      );
    },
    { scope: root }
  );

  return (
    <section id="position" ref={root} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="ov-pos-in">
        <SceneHeader
          kicker="01 / The Position"
          title="The rights outrun the audience"
          strap="Overnght has quietly assembled a rights portfolio that a platform ten times its size would envy. The audience infrastructure has not caught up. That gap is not a weakness to hide. It is the entire marketing opportunity."
        />
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Rights column */}
        <div className="ov-pos-in">
          <Mono className="text-[#FD3737]">What is already signed</Mono>
          <div className="mt-5 flex flex-col divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {RIGHTS.map((r) => (
              <div key={r.org} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
                <p className="font-display text-lg uppercase leading-tight text-[#FAFAFA]">{r.org}</p>
                <div>
                  <p className="text-[15px] leading-relaxed text-[#E4E4E9]">{r.deal}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#8A8A93]">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience column */}
        <div className="ov-pos-in">
          <Mono className="text-[#FD3737]">The audience today</Mono>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {AUDIENCE.map((a) => (
              <div key={a.label} className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313] p-6">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
                <p className="font-display text-4xl text-[#FAFAFA]">{a.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-[#8A8A93]">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[#FD3737]/25 bg-[#FD3737]/[0.06] p-6">
            <p className="text-[15px] leading-relaxed text-[#E4E4E9]">
              A subscription priced around $10 a month sits on top of this. Distribution is locked. Demand is not.
              Every problem on this page is a marketing problem, and marketing problems are the solvable kind.
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#6E6E76]">
            Social and App Store figures pulled August 17, 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
