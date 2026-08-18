'use client';

import React from 'react';
import { Reveal, RevealItem } from './motion';
import { Shell, SectionHeader, Mono, NextUp } from './ui';

const PILLARS = [
  {
    id: 'Pillar 01',
    name: 'The moment engine',
    builtOn: 'Built on 04 / the clip teardown',
    thesis:
      'Overnght sits on more live sporting moments per dollar of rights than any platform in the category, and almost none of them become content. The highest-leverage move available is turning clip production into a system with a service-level agreement, not a mood.',
    moves: [
      'Every streamed event yields three to five payoff-first clips within 24 hours, cut to the five laws',
      'Athlete name in the title, always. People share people, not platforms',
      'Scorebug burned in from frame one, brand card after the peak, replay as the closer',
      'Tag every featured athlete and federation. A clipped athlete is a distribution node with a stronger graph than the brand account',
      'The archive counts: every athlete who transfers up or medals makes old footage new content',
    ],
  },
  {
    id: 'Pillar 02',
    name: 'Trust is the offer',
    builtOn: 'Built on 02 / the customer record',
    thesis:
      'The category trained its customers to expect billing traps, broken share links, and streams that die during the only game that mattered. The record is legal and public. Overnght can convert it into claims only it is willing to make.',
    moves: [
      'Month to month, cancel in one click, no multi-month minimum. Say it in the ads, not the footnotes',
      'A stream guarantee: if a covered event fails to air, the month is on us. Cheap to underwrite at niche concurrency, priceless as a claim',
      'Household access that actually works, sold as the point rather than a limit. The buyer is a family, not a login',
      'Never lead with cheap. The record is explicit: customers will pay for coverage that works. Lead with the job, not the discount',
    ],
  },
  {
    id: 'Pillar 03',
    name: 'The distance audience',
    builtOn: 'Built on 02 / the customer record',
    thesis:
      'The most emotionally loaded language in the entire record belongs to people watching from far away: the parent working out of state, the grandparent 1,242 miles from the pool deck, the alum who moved. Their season is finite and every missed game is unrecoverable. Nobody in the category speaks to them on purpose.',
    moves: [
      'Paid targeting built around family and fan graphs of rostered sports, not lookalikes of sports fans generally',
      'Creative in the second person: be there from anywhere. The payoff shot is a phone on a kitchen counter, not a jumbotron',
      'European club water polo rights point the same register at diaspora fans across the Americas',
      'Recruiting film and rewatch framing for the athlete side of the same household',
    ],
  },
  {
    id: 'Pillar 04',
    name: 'Own the empty auction',
    builtOn: 'Built on 03 / the paid lane',
    thesis:
      'FloSports runs zero Meta ads. BallerTV advertises hardware against its own subscription. ESPN buys reach for mega-rights. Direct response for niche sport subscriptions is an uncontested auction, and Overnght has a rights calendar that doubles as a media calendar.',
    moves: [
      'Event-synced flights: every major rights window gets a seven to ten day paid burst built from that event\'s own moment clips',
      'The World Rowing Championships, August 24 to 30, is the first live lab with US rights in hand',
      'IFL 2027, the first exclusive National Championship, is the twelve-month buildup target',
      'Retarget clip viewers with the trust claims. Moment opens the door, trust closes the account',
    ],
  },
];

export default function S06Pillars() {
  return (
    <section className="py-20 md:py-28 lg:py-36" aria-label="Strategy pillars">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s06-pillars"
            index="06"
            act="The Plan"
            title="Strategy pillars"
            strap="Four moves, each one anchored to a finding above. Nothing here is a taste call."
          />
        </Reveal>

        {/* One printed broadsheet: bordered sheet with internal dividers */}
        <Reveal>
          <div className="grid border border-white/10 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.id}
                className={`p-7 md:p-12 ${i % 2 === 1 ? 'md:border-l md:border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10' : i >= 1 ? 'border-t border-white/10 md:border-t' : ''} ${i === 1 ? 'md:border-t-0' : ''}`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <Mono className="text-[#FD3737]">{p.id}</Mono>
                  <Mono className="text-[#8A8A93]">{p.builtOn}</Mono>
                </div>
                <h3 className="mt-3 font-display uppercase text-2xl md:text-3xl lg:text-4xl leading-[1.02] text-[#FAFAFA]">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-[60ch] text-base md:text-[17px] leading-[1.7] text-[#E4E4E9]">{p.thesis}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  {p.moves.map((mv, j) => (
                    <div key={j} className="grid grid-cols-[44px_1fr] gap-3 py-1.5">
                      <span className="font-mono text-sm tabular-nums text-[#8A8A93]">M{j + 1}</span>
                      <p className="text-base md:text-[17px] leading-[1.6] text-[#E4E4E9]">{mv}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <NextUp label="07 Sample Ad Builds" />
      </Shell>
    </section>
  );
}
