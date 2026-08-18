'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const PHASES = [
  {
    id: 'Phase 0',
    window: 'This week',
    name: 'Amsterdam live lab',
    body: 'The World Rowing Championships run August 24 to 30 with Overnght holding US rights. Run the moment engine on it in real time: payoff-first clips within hours of each final, athlete names in every title, C8 as the paid template. The event is both a campaign and the first dataset.',
    proves: 'Clip turnaround speed, event-window paid mechanics, first read on cost per subscriber in an uncontested auction',
  },
  {
    id: 'Phase 1',
    window: 'Weeks 1 to 4',
    name: 'Test the variable, not the asset',
    body: 'Take the same moments and test one dimension at a time: hook mechanic first (payoff-first vs stakes-first vs review-led), then format (real clip vs UGC vs text-forward), holding everything else constant. Concepts C1, C2, C3, and C5 carry the first matrix.',
    proves: 'Which hook dimension wins for each audience: fans, families, athletes. Winners are dimensions, not one-off ads',
  },
  {
    id: 'Phase 2',
    window: 'Weeks 5 to 8',
    name: 'Scale the winning dimension',
    body: 'Concentrate spend into the winning hook and format and iterate within it. Layer the trust claims as retargeting: moment clips open the relationship, month-to-month billing and the stream guarantee close it. C4, C6, and C7 enter as the second wave.',
    proves: 'A repeatable creative recipe per sport and per audience, plus a stable read on cost per subscriber by vertical',
  },
  {
    id: 'Phase 3',
    window: 'Ongoing',
    name: 'The rights calendar is the media calendar',
    body: 'Every rights window becomes a flight running the proven recipe: European water polo club season, USRowing championship season, 3C2A title weeks, and the twelve-month buildup to the first exclusive IFL National Championship in 2027. The moment engine feeds it all year.',
    proves: 'An always-on acquisition system where every new rights deal ships with its own launch playbook',
  },
];

export default function Roadmap() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-rd-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>('.ov-rd-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative border-y border-white/[0.06] bg-[#0D0D0D] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="ov-rd-in">
          <SceneHeader
            kicker="08 / Testing Roadmap"
            title="How the first ninety days run"
            strap="The discipline throughout: test the variable, not the asset. Creative learning compounds only when one dimension changes at a time and the winner gets scaled hard."
          />
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {PHASES.map((p) => (
            <div key={p.id} className="ov-rd-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313] p-7 md:p-9">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <Mono className="text-[#FD3737]">{p.id}</Mono>
                <Mono>{p.window}</Mono>
              </div>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-[#FAFAFA] md:text-3xl">{p.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#B8B8C0]">{p.body}</p>
              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <Mono>What it proves</Mono>
                <p className="mt-2 text-[14px] leading-relaxed text-[#E4E4E9]">{p.proves}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
