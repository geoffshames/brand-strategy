'use client';

import React from 'react';
import { Reveal, RevealItem } from './motion';
import { Shell, SectionHeader, Mono, NextUp } from './ui';

const PHASES = [
  {
    id: 'Phase 0',
    window: 'This week',
    name: 'Amsterdam live lab',
    body: 'The World Rowing Championships run August 24 to 30 with Overnght holding US rights. Run the moment engine on it in real time: payoff-first clips within hours of each final, athlete names in every title, AD-08 as the paid template. The event is both a campaign and the first dataset.',
    proves: 'Clip turnaround speed, event-window paid mechanics, first read on cost per subscriber in an uncontested auction',
    gate: 'Decision gate: does the moment engine hold a 24-hour clip SLA under live conditions',
    hot: true,
  },
  {
    id: 'Phase 1',
    window: 'Weeks 1 to 4',
    name: 'Test the variable, not the asset',
    body: 'Take the same moments and test one dimension at a time: hook mechanic first, payoff-first vs stakes-first vs review-led, then format, real clip vs UGC vs text-forward, holding everything else constant. AD-01, AD-02, AD-03 and AD-05 carry the first matrix.',
    proves: 'Which hook dimension wins for each audience: fans, families, athletes. Winners are dimensions, not one-off ads',
    gate: 'Decision gate: pick the winning hook dimension per audience and kill the rest',
    hot: false,
  },
  {
    id: 'Phase 2',
    window: 'Weeks 5 to 8',
    name: 'Scale the winning dimension',
    body: 'Concentrate spend into the winning hook and format and iterate within it. Layer the trust claims as retargeting: moment clips open the relationship, the receipt closes the account. AD-04, AD-06 and AD-07 enter as the second wave.',
    proves: 'A repeatable creative recipe per sport and per audience, plus a stable read on cost per subscriber by vertical',
    gate: 'Decision gate: set the per-vertical recipe and the always-on budget it earns',
    hot: false,
  },
  {
    id: 'Phase 3',
    window: 'Ongoing',
    name: 'The rights calendar is the media calendar',
    body: 'Every rights window becomes a flight running the proven recipe: European water polo club season, USRowing championship season, 3C2A title weeks, and the twelve-month buildup to the first exclusive IFL National Championship in 2027. The moment engine feeds it all year.',
    proves: 'An always-on acquisition system where every new rights deal ships with its own launch playbook',
    gate: 'Decision gate: which rights window earns the next flight, decided from the data, not the calendar',
    hot: false,
  },
];

export default function S09Roadmap() {
  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="Testing roadmap">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s09-roadmap"
            index="09"
            act="The Plan"
            title="Testing roadmap"
            strap="Ninety days, four phases. Phase zero opens on the World Rowing Championships in Amsterdam, Aug 24 to 30, the biggest audience spike Overnght owns this year. Every phase ends with a decision, not a report."
          />
        </Reveal>

        {/* Timeline: horizontal ruler on desktop, vertical rail on mobile */}
        <Reveal stagger={0.1}>
          {/* Desktop ruler */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="h-px w-full bg-white/20" />
            <div className="grid grid-cols-4">
              {PHASES.map((p) => (
                <div key={p.id} className="relative">
                  <span className={`absolute -top-1 left-0 block h-2 w-2 ${p.hot ? 'bg-[#FD3737]' : 'bg-white'}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-0 grid gap-12 border-l border-white/20 pl-8 lg:mt-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:pl-0">
            {PHASES.map((p) => (
              <RevealItem key={p.id} className="relative">
                <span className={`absolute -left-[37px] top-1.5 block h-2 w-2 lg:hidden ${p.hot ? 'bg-[#FD3737]' : 'bg-white'}`} aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <Mono className={p.hot ? 'text-[#FD3737]' : ''}>{p.id}</Mono>
                  <Mono className="text-[#8A8A93]">{p.window}</Mono>
                </div>
                <h3 className="mt-3 font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">{p.name}</h3>
                <p className="mt-3 text-base leading-[1.65] text-[#E4E4E9]">{p.body}</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <Mono>Proves</Mono>
                  <p className="mt-2 text-base leading-[1.6] text-[#B8B8C0]">{p.proves}</p>
                </div>
                <p className="mt-4 font-mono uppercase text-xs tracking-[0.12em] leading-[1.7] text-[#E4E4E9]">{p.gate}</p>
              </RevealItem>
            ))}
          </div>
        </Reveal>

        {/* Next steps */}
        <Reveal className="mt-16 border border-white/10 p-7 md:mt-24 md:p-12">
          <Mono className="text-[#FD3737]">Next steps</Mono>
          <p className="mt-4 max-w-[60ch] text-lg md:text-xl leading-[1.55] text-[#FAFAFA]">
            Three things put phase zero on air before Worlds: pick the builds to produce from section 07, confirm the
            checkout flow the ads land on, and greenlight the phase zero flight. All three fit inside this week.
          </p>
        </Reveal>
      </Shell>

      {/* Closing */}
      <div className="mt-20 border-t border-white/10 pt-20 md:mt-28 md:pt-28">
        <Shell className="pb-10">
          <p className="max-w-5xl font-display uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.01em] text-[#FAFAFA]">
            The rights are signed. The moments are streaming.
            <span className="text-[#FD3737]"> Now build the audience.</span>
          </p>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <a
              href="mailto:info@crowdcontroldigital.com?subject=Overnght%20Creative%20Strategy"
              className="inline-flex h-12 items-center bg-[#FD3737] px-8 font-mono uppercase text-sm tracking-[0.12em] text-[#0A0A0A] transition-colors hover:bg-[#FAFAFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
            >
              Talk to Crowd Control
            </a>
            <Mono>info@crowdcontroldigital.com</Mono>
          </div>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-6 w-auto opacity-80" />
            <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#8A8A93]">
              Crowd Control Digital / Creative Strategy / Aug 2026
            </p>
          </div>
        </Shell>
      </div>
    </section>
  );
}
