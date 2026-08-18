'use client';

import React from 'react';
import { Reveal, RevealItem } from './motion';
import { Shell, SectionHeader, Mono, Callout, NextUp } from './ui';

const FINDINGS = [
  {
    id: 'FND-01',
    name: 'FloSports',
    stat: '0',
    statLabel: 'Active Meta ads',
    read: 'A platform claiming 1M+ subscribers and 50,000 live events a year runs no paid social acquisition on Meta at all. Its growth engine is rights lockup plus search intent, not creative.',
  },
  {
    id: 'FND-02',
    name: 'BallerTV',
    stat: '$399',
    statLabel: 'What their ads sell now',
    read: 'The only active ads from the BallerTV company are for BallerCam, the camera, with the hook JUST $399, NO SUBSCRIPTION. Their own paid creative now sells against the subscription model.',
  },
  {
    id: 'FND-03',
    name: 'ESPN',
    stat: 'REACH',
    statLabel: 'Mega-rights only',
    read: 'Active creative is LALIGA, WWE, FedExCup, MLB.TV and app-install spots. Big-rights reach buying. Nothing direct response, and nothing that speaks to a niche sport fan by name.',
  },
];

export default function S03PaidLane() {
  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="The paid lane">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s03-paid"
            index="03"
            act="The Case"
            title="The paid lane"
            strap="We pulled the Meta Ad Library for every incumbent on Aug 17. FloSports: zero active ads. ESPN: brand reach for mega-rights only. BallerTV's spend now sells a $399 camera with no subscription in the hook. Nobody runs direct response for a niche sports subscription. The lane is empty."
          />
        </Reveal>

        {/* Findings ledger */}
        <Reveal className="border-t border-white/10" stagger={0.1}>
          {FINDINGS.map((f) => (
            <RevealItem key={f.id} className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-2">
                <Mono>{f.id}</Mono>
                <h3 className="mt-2 font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">{f.name}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-display text-6xl md:text-7xl leading-none tracking-[-0.02em] text-[#FAFAFA] tabular-nums">{f.stat}</p>
                <p className="mt-2 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">{f.statLabel}</p>
              </div>
              <p className="max-w-[65ch] text-base md:text-[17px] lg:text-lg leading-[1.7] text-[#E4E4E9] md:col-span-7">{f.read}</p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-16 md:mt-20">
          <Callout
            label="What this means"
            headline="An uncontested auction"
            body="When no competitor is bidding on the same audience with the same message, paid social behaves like a category monopoly: cheaper reach, no creative arms race, and every impression compounds recall that nobody is contesting. Overnght can be the only streaming service a water polo parent, a rowing alum, or an IFL fan ever sees an ad from."
          />
        </Reveal>

        <Reveal className="mt-12 border-y border-white/10 py-4">
          <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#E4E4E9]">
            Window opens Aug 24 / World Rowing Championships / Overnght holds US rights
          </p>
        </Reveal>

        <p className="mt-6 font-mono text-xs tracking-[0.08em] text-[#8A8A93]">
          Meta Ad Library, United States, pulled August 17, 2026. Competitor pricing from published rate pages at the same date.
        </p>

        <NextUp label="04 The Clip Teardown" />
      </Shell>
    </section>
  );
}
