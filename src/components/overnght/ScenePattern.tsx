'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const LAWS = [
  {
    n: '01',
    title: 'Open on the payoff',
    body: 'The 522K clip starts on the championship-winning lift itself. Not the walkout, not the venue, not context. The weakest clip in the corpus spends ten seconds on an Earth zoom before any sport appears, and it did 613 views.',
  },
  {
    n: '02',
    title: 'Text states the outcome in frame one',
    body: 'Winners tell you what to feel before the play resolves. GUILHERME MALHEIROS TAKES THE W. POSTER OF THE SUMMER. The viewer never has to infer whether the moment mattered.',
  },
  {
    n: '03',
    title: 'The scorebug is the storyteller',
    body: 'Jenna Flynn works because 10-10 with ten seconds left is on screen from the first frame. Stakes made legible turn a good play into a must-watch ending.',
  },
  {
    n: '04',
    title: 'Brand after the payoff, never before',
    body: 'The ON OVERNGHT card lands at 0:22, after the goal, before the replay. BallerTV burns its mark into the frame without interrupting. Nobody who wins puts a logo in front of the moment.',
  },
  {
    n: '05',
    title: 'One complete arc beats a montage',
    body: 'Stakes, payoff, reaction. Clips that give one whole emotional arc outperform montages assembled from many. The athlete-name title is part of the arc: people share people, not platforms.',
  },
];

const MATH = [
  { value: '75x', label: 'Overnght moment clip vs Overnght promo clip, same account, same week' },
  { value: '12x', label: 'Payoff-first outlier vs FloSports account average' },
  { value: '519', label: 'Shares on a single athlete-name clip from a 618-follower TikTok category peer' },
];

export default function Pattern() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-pat-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>('.ov-pat-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 80%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative border-y border-white/[0.06] bg-[#0D0D0D] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="ov-pat-in">
          <SceneHeader
            kicker="05 / The Pattern"
            title="Five laws of the winning clip"
            strap="Across ten creatives and three brands, the anatomy of what works is consistent enough to write down as law. Overnght has already produced the best example in the corpus once. The gap is not capability. It is that the winning format is an accident instead of a system."
          />
        </div>

        <div className="mt-16 flex flex-col divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {LAWS.map((law) => (
            <div key={law.n} className="ov-pat-in grid gap-3 py-8 md:grid-cols-[90px_320px_1fr] md:gap-10">
              <span className="font-mono text-sm text-[#FD3737]">{law.n}</span>
              <h3 className="font-display text-2xl uppercase leading-tight text-[#FAFAFA]">{law.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#B8B8C0]">{law.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {MATH.map((m) => (
            <div key={m.value} className="ov-pat-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313] p-7">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
              <p className="font-display text-5xl text-[#FD3737]">{m.value}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#8A8A93]">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="ov-pat-in mt-12 rounded-xl border border-[#FD3737]/25 bg-[#FD3737]/[0.06] p-7 md:p-9">
          <Mono className="text-[#FD3737]">The strategic read</Mono>
          <p className="mt-4 max-w-4xl font-display text-2xl uppercase leading-[1.2] text-[#FAFAFA] md:text-3xl">
            The moment clip is not content marketing for the product. The moment clip is the product, sampled.
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#E4E4E9]">
            Every buzzer beater Overnght clips is a free taste of the exact thing a subscription buys: live access to
            moments that vanish if you were not watching. That is why the same unit works as an organic post and as a
            paid ad with a distribution end-card. One format, two jobs.
          </p>
        </div>
      </div>
    </section>
  );
}
