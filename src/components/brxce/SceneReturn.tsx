'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const PILLARS = [
  {
    n: '01',
    title: 'Build the World',
    thesis:
      'Make Nostos unmistakable. One visual system, one story, one flagship hub — so a viewer who looks him up mid-episode lands in a fully-formed world, not a scattering of posts.',
    moves: ['Nostos visual identity across every surface', 'Flagship digital hub with capture wired in', 'First world-carrying merch artifact'],
  },
  {
    n: '02',
    title: 'Run the Catalog Engine',
    thesis:
      'A 686K single proves demand; a six-song catalog cannot hold a primetime audience. The 60-song ambition becomes a paced system — every release with pre-save, pitching, and a reason to exist.',
    moves: ['12-month release calendar, paced not dumped', 'Pre-save + DSP pitching on every drop', 'A “world pack” canon that defines the sound'],
  },
  {
    n: '03',
    title: 'Build the Funnel',
    thesis:
      'Reality hype is a spike. Only an owned list turns a spike into a career. Email/SMS built during the runway captures every on-air peak the moment it happens.',
    moves: ['Email/SMS from day one — 25K by premiere', '100K+ owned contacts by end of window', 'Direct-to-fan rails ready for the surge'],
  },
  {
    n: '04',
    title: 'Unify the Persona',
    thesis:
      'The show says DJ; the ambition says artist. One story ties them: the hero’s journey is the set. Craft visible enough that the underground respects it, story warm enough that the audience falls for it.',
    moves: ['One narrative across DJ sets, artist content, and the show', 'Real bookings that earn the credibility', 'UTA DJ-side management conversation advanced'],
  },
  {
    n: '05',
    title: 'Time the Momentum',
    thesis:
      'The show has a predictable hype curve — cast reveal, love arc, engagement beat. Every on-air moment gets a mirrored release. The artist who times the beat owns the moment.',
    moves: ['Show-timed releases pre-produced and ready', 'Surge playbook written before premiere week', 'Every episode beat mirrored within hours'],
  },
];

export default function Return() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const cards = gsap.utils.toArray<HTMLElement>('.bx-pillar');

      cards.forEach((card, i) => {
        // Each card scales/darkens slightly as the next one covers it
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.45,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top+=120',
              scrub: true,
            },
          });
        }
      });
    },
    { scope: root }
  );

  return (
    <section id="return" ref={root} className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl md:mb-24">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">IV</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Return · Five pillars</Kicker>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Build the machine
            <br />
            before the match is lit<span className="text-[#FD3737]">.</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {PILLARS.map((p, i) => (
            <article
              key={i}
              className="bx-pillar sticky overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0E0E0E] will-change-transform"
              style={{ top: `calc(88px + ${i * 14}px)` }}
            >
              <div className="grid grid-cols-1 gap-6 p-7 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:p-12">
                <span className="font-display text-5xl text-[#FD3737]/90 md:text-7xl">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-white md:text-4xl">{p.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#B8B8C0] md:text-base">{p.thesis}</p>
                </div>
                <ul className="space-y-3 self-center border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  {p.moves.map((m, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#E4E4E9] md:text-[15px]">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FD3737]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
