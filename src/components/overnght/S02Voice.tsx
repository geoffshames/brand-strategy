'use client';

import React from 'react';
import { Reveal, RevealItem, ScrubQuote } from './motion';
import { Shell, SectionHeader, Mono, FactCard, StarRow, NextUp } from './ui';

const REGISTERS = [
  {
    name: 'The distance',
    read: 'The buyer is rarely in the building. Parents working out of state, grandparents a time zone away. The purchase is emotional and the failure is a loss, not an inconvenience.',
    quotes: [
      { text: 'I had purchased BallerTv because my husband works out of state and my sons grandparents live out of state. Well the magic link didn’t work.', src: 'BallerTV App Store review' },
      { text: 'She’s a freshman catcher playing at a university in Southern California, roughly 1242 miles away. Sadly, FLO is taking financial advantage of our uninterrupted devotion.', src: 'FloSports App Store review' },
    ],
  },
  {
    name: 'The finite window',
    read: 'Youth and amateur careers end. Every missed stream is a game that never comes back, and the category keeps missing them.',
    quotes: [
      { text: 'We payed $120 for a game pass for our family to watch our child’s final game ever just for none of the live streams to work.', src: 'BallerTV App Store review' },
      { text: 'Thanks for losing the stream during an inning my son was pitching.', src: 'FloSports App Store review' },
    ],
  },
  {
    name: 'The trap',
    read: 'Billing is where the category burned its trust. The record below is legal and public, not anecdotal.',
    quotes: [
      { text: 'Based on their audience, they know a large percentage are going to accidentally pay for a year.', src: 'BallerTV App Store review, titled It’s called a Dark Pattern' },
      { text: 'I continued to be charged for approximately 5 additional months, totaling $100. My cancellation requests were either ignored, unsuccessful due to system issues, or not honored.', src: 'BBB complaint against FloSports, February 2026' },
    ],
  },
  {
    name: 'The craft',
    read: 'Auto-cameras and student crews keep missing the thing people paid to see. Sport-specific filming is a real moat, and viewers can tell.',
    quotes: [
      { text: 'The camera software is unable to ball track properly and was off the ball at least a 1/4 of the game.', src: 'BallerTV App Store review' },
      { text: 'They had iPhones on poles with cups on top to keep them from overheating.', src: 'r/youthsoccer, February 2026' },
    ],
  },
];

const HERO_QUOTE =
  'Buggy, poorly organized, impossible to find what I want, laggy, but the only place to watch some of the sports that I like, so I keep coming back. As soon as someone else does a remotely better job I will be the first in line at any price.';

export default function S02Voice() {
  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="The customer record">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s02-voice"
            index="02"
            act="The Case"
            title="The customer record"
            strap="Nobody churns from a sports stream casually. They lose their kid's final game to a frozen feed, or find a charge for a season that ended months ago, and they remember. Everything below is public record and verbatim."
          />
        </Reveal>
      </Shell>

      {/* The 1-star stage */}
      <div className="flex min-h-[70vh] items-center py-16 md:py-24">
        <Shell className="flex flex-col items-center text-center">
          <Reveal>
            <div className="flex justify-center">
              <StarRow filled={1} firstRed size={22} />
            </div>
          </Reveal>
          <ScrubQuote
            text={HERO_QUOTE}
            className="mx-auto mt-10 max-w-[30ch] font-medium text-[26px] md:text-4xl lg:text-[44px] leading-[1.22] text-[#FAFAFA]"
          />
          <Reveal className="mt-10">
            <Mono>1-star review / competitor app / App Store</Mono>
            <p className="mx-auto mt-6 max-w-[52ch] text-base md:text-[17px] leading-[1.7] text-[#B8B8C0]">
              That is a paying customer announcing the switching cost is zero and the price objection is fake. The
              rest of the record sorts into four registers, and each one is a creative brief.
            </p>
          </Reveal>
        </Shell>
      </div>

      <Shell>
        {/* Register columns: a letters page, no boxes */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {REGISTERS.map((r) => (
            <Reveal key={r.name} className="border-l border-white/15 pl-6" stagger={0.08}>
              <RevealItem>
                <h3 className="font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">{r.name}</h3>
                <p className="mt-3 text-base leading-[1.6] text-[#B8B8C0]">{r.read}</p>
              </RevealItem>
              {r.quotes.map((q, i) => (
                <RevealItem key={i} className="mt-6">
                  <blockquote className="italic text-base md:text-lg leading-[1.55] text-[#FAFAFA]">&ldquo;{q.text}&rdquo;</blockquote>
                  <p className="mt-2 font-mono uppercase text-xs tracking-[0.14em] text-[#8A8A93]">{q.src}</p>
                </RevealItem>
              ))}
            </Reveal>
          ))}
        </div>

        {/* Documented facts */}
        <Reveal className="mt-16 grid gap-4 md:grid-cols-2" stagger={0.1}>
          <RevealItem>
            <FactCard
              fact="Baller, Inc. settled Rickey v. Baller, Inc., a California class action over auto-renewal disclosure, for $1,925,000, covering subscribers from 2019 to 2023."
              source="ballersettlement.com / settled class action"
            />
          </RevealItem>
          <RevealItem>
            <FactCard
              fact="FloSports carries a Better Business Bureau pattern-of-complaints alert: 97 complaints in three years, 39 categorized as billing issues."
              source="BBB business profile / pulled Aug 2026"
            />
          </RevealItem>
        </Reveal>
      </Shell>

      {/* Category law band */}
      <div className="mt-20 border-y border-white/10 bg-[#111111] py-16 md:py-24">
        <Shell className="text-center">
          <Reveal>
            <Mono className="text-[#FD3737]">Category law</Mono>
            <p className="mx-auto mt-6 max-w-4xl font-display uppercase text-[26px] md:text-4xl lg:text-[44px] leading-[1.22] text-[#FAFAFA]">
              People are not unwilling to pay for niche sport coverage. They are unwilling to pay for coverage that
              does not work.
            </p>
            <p className="mx-auto mt-6 max-w-[52ch] text-base md:text-[17px] leading-[1.7] text-[#B8B8C0]">
              Paraphrasing the niche sport trade press and every review above. Ninety percent of a niche sport&apos;s
              fans never attend a match in a season. The stream is the sport.
            </p>
          </Reveal>
        </Shell>
      </div>

      <Shell>
        <NextUp label="03 The Paid Lane" />
      </Shell>
    </section>
  );
}
