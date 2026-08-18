'use client';

import React from 'react';
import { Reveal, RevealItem } from './motion';
import { Shell, SectionHeader, Mono, Tag, NextUp } from './ui';

const BRANDS = [
  {
    name: 'FloSports',
    line: 'The home of live sports streaming.',
    subject: false,
    fields: {
      promise: 'Breadth. 20+ sports, 50,000 events, one subscription. The category-list is the pitch.',
      proof: 'Scale numbers and rights lockups. No customer, no moment, no feeling appears in the copy.',
      cta: 'Watch live. Subscribe. Utility language throughout.',
      gap: 'Nothing about the viewer. A wrestling parent and a dirt-track fan get the same sentence. Breadth is a warehouse claim, and warehouses do not get loved.',
    },
  },
  {
    name: 'BallerTV',
    line: 'Find Your Game.',
    subject: false,
    fields: {
      promise: 'Coverage. Thousands of events streamed, from anywhere, on any device.',
      proof: 'A Dwyane Wade quote and four benefit blocks: improve skills, get recruited, connect with loved ones, scout.',
      cta: 'Get Access. Search. The customer does the work.',
      gap: 'The tagline makes finding the game the customer\'s job, and the reviews show that is exactly where the product fails. The emotional benefit, connecting with loved ones, is buried third in a feature list.',
    },
  },
  {
    name: 'ESPN',
    line: 'All of ESPN. All in one place.',
    subject: false,
    fields: {
      promise: 'Aggregation. Everything the biggest brand in sports makes, one app.',
      proof: 'The brand itself, plus nostalgia: the Sports Forever campaign opens on the first SportsCenter broadcast.',
      cta: 'Subscribe, upgrade, bundle. Tier language customers demonstrably find confusing.',
      gap: 'Unclonable and irrelevant at once: nobody in a niche sport believes ESPN sees them. The everything promise is precisely what a water polo family has learned to distrust.',
    },
  },
  {
    name: 'Overnght',
    line: 'Watch live sports events and exclusive content on Overnght.',
    subject: true,
    fields: {
      promise: 'Currently generic: live sports, exclusive content, HD. Copy any platform could run.',
      proof: 'The actual proof, exclusive federation partnerships and world championships, sits in schedule pages, not in the message.',
      cta: 'Get started. Create account. Standard.',
      gap: 'The best line the brand owns, Make Every Sport Feel Major, is sitting in an Instagram bio instead of leading every surface. It is positioning, promise, and rallying cry in five words, and it is already written.',
    },
  },
];

const HIERARCHY = [
  {
    level: 'Lead line',
    text: 'Make Every Sport Feel Major',
    note: 'Already owned, already true to the product. Moves from Instagram bio to the front of everything: site hero, app store, end cards, ad copy.',
    size: 'lead' as const,
  },
  {
    level: 'Promise plank / the moment',
    text: 'The moments are live, and they do not wait',
    note: 'Speaks to fans and the distance audience. Every moment clip and every event flight carries it.',
    size: 'mid' as const,
  },
  {
    level: 'Promise plank / the trust',
    text: 'The stream works, and the billing is honest',
    note: 'The direct answer to the category record: month to month, working household access, coverage that shows up.',
    size: 'mid' as const,
  },
  {
    level: 'Promise plank / the craft',
    text: 'Filmed by people who know the sport',
    note: 'The production claim auto-camera competitors cannot make. Grounded in the craft register of the customer record.',
    size: 'mid' as const,
  },
];

export default function S05Messaging() {
  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="The messaging teardown">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s05-messaging"
            index="05"
            act="The Case"
            title="The messaging teardown"
            strap="FloSports sells breadth. BallerTV makes finding the game the customer's job. ESPN sells everything. Overnght currently says watch live sports events and exclusive content, while its best line sits in an Instagram bio: Make Every Sport Feel Major. That line should lead everything Overnght ships."
          />
        </Reveal>

        {/* Brand bands */}
        <Reveal className="border-t border-white/10" stagger={0.1}>
          {BRANDS.map((b) => (
            <RevealItem key={b.name} className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-12 lg:gap-8">
              <div className={`lg:col-span-3 ${b.subject ? 'border-l-2 border-white/40 pl-5' : ''}`}>
                <div className="flex items-center gap-3">
                  <h3 className="font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">{b.name}</h3>
                  {b.subject ? <Tag>Subject</Tag> : null}
                </div>
                <blockquote className="mt-3 italic text-lg md:text-xl leading-[1.45] text-[#FAFAFA]">&ldquo;{b.line}&rdquo;</blockquote>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:col-span-9 lg:grid-cols-4">
                {(
                  [
                    ['Promise', b.fields.promise],
                    ['Proof', b.fields.proof],
                    ['CTA language', b.fields.cta],
                    ['The gap', b.fields.gap],
                  ] as const
                ).map(([label, text]) => (
                  <div key={label}>
                    <Mono>{label}</Mono>
                    <p className="mt-2 text-base leading-[1.65] text-[#E4E4E9]">{text}</p>
                  </div>
                ))}
              </div>
            </RevealItem>
          ))}
        </Reveal>

        {/* Recommended hierarchy: type specimen */}
        <Reveal className="mt-16 md:mt-24">
          <Mono className="text-[#FD3737]">Recommended hierarchy / the type is the argument</Mono>
          <div className="mt-6 border-t border-white/10">
            {HIERARCHY.map((h) => (
              <div key={h.level} className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8">
                <Mono className="md:col-span-3">{h.level}</Mono>
                <div className="md:col-span-9">
                  {h.size === 'lead' ? (
                    <p className="font-display uppercase text-3xl md:text-5xl leading-[1.02] text-[#FAFAFA]">{h.text}</p>
                  ) : (
                    <p className="text-xl md:text-2xl font-medium leading-[1.25] text-[#FAFAFA]">{h.text}</p>
                  )}
                  <p className="mt-3 max-w-[60ch] text-base leading-[1.65] text-[#B8B8C0]">{h.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[65ch] text-base md:text-[17px] leading-[1.7] text-[#B8B8C0]">
            Language guidance: lead with the moment and the reliability, never the price. The customer record shows
            willingness to pay for coverage that works; competing on cheap concedes that the category product is
            acceptable. It is not, and that is the more valuable thing to be the answer to.
          </p>
        </Reveal>

        <NextUp label="The Plan" />
      </Shell>
    </section>
  );
}
