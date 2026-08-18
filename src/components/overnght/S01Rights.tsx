'use client';

import React from 'react';
import { Reveal, RevealItem } from './motion';
import { Shell, SectionHeader, Mono, Callout, StarRow, NextUp } from './ui';

const RIGHTS = [
  { org: 'USRowing', deal: 'Exclusive streaming partner, extended through 2028', detail: 'Every USRowing-hosted regatta including Youth Nationals' },
  { org: 'World Rowing Championships 2026', deal: 'US rights, Amsterdam, August 24 to 30', detail: 'The biggest rowing property of the year, live this week' },
  { org: 'European Aquatics', deal: 'Multi-year exclusive across the Americas', detail: 'Every European club water polo competition, Champions League down' },
  { org: 'USA Water Polo', deal: 'Five-year official streaming partnership', detail: 'National League, Senior Nationals, national team matches' },
  { org: 'Indoor Football League', deal: 'Multi-year media rights, 2026 to 2028', detail: 'Billed by the IFL as the largest media deal in league history. 55+ live games a year, exclusive National Championship in 2027 and 2028' },
  { org: '3C2A California', deal: 'Multi-year, 16 state championships', detail: '28,000+ community college student-athletes in the association' },
];

const AUDIENCE = [
  { value: '14.2K', label: 'Instagram followers' },
  { value: '618', label: 'TikTok followers' },
  { value: '1.39K', label: 'YouTube subscribers' },
];

export default function S01Rights() {
  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="Rights vs audience">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s01-rights"
            index="01"
            act="The Case"
            title="Rights vs audience"
            strap="Exclusive USRowing through 2028. US rights to the 2026 World Rowing Championships. The largest media deal in Indoor Football League history. Continental club water polo, a five-year official USA Water Polo streaming partnership, every California community college championship. Against that: 14.2K on Instagram, 618 on TikTok, a 2.5-star app with 11 ratings. The portfolio is built. The audience is not."
          />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Rights ledger */}
          <Reveal className="lg:col-span-7" stagger={0.07}>
            <Mono>Signed / 6 rights deals</Mono>
            <div className="mt-4 border-t border-white/10">
              {RIGHTS.map((r) => (
                <RevealItem key={r.org} className="grid gap-2 border-b border-white/10 py-5 md:grid-cols-[240px_1fr] md:gap-8">
                  <p className="font-display uppercase text-lg md:text-xl leading-[1.05] text-[#FAFAFA]">{r.org}</p>
                  <div>
                    <p className="text-base md:text-[17px] leading-[1.6] text-[#E4E4E9]">{r.deal}</p>
                    <p className="mt-1 text-base leading-[1.6] text-[#B8B8C0]">{r.detail}</p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>

          {/* Audience stack: the sparse column is the graphic */}
          <Reveal className="lg:col-span-4 lg:col-start-9" stagger={0.08}>
            <Mono>Seen by</Mono>
            <div className="mt-4 border-t border-white/10">
              {AUDIENCE.map((a) => (
                <RevealItem key={a.label} className="border-b border-white/10 py-6">
                  <p className="font-display text-6xl md:text-7xl leading-none tracking-[-0.02em] text-[#FAFAFA] tabular-nums">{a.value}</p>
                  <p className="mt-2 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">{a.label}</p>
                </RevealItem>
              ))}
              <RevealItem className="border-b border-white/10 py-6">
                <StarRow filled={2.5} size={22} />
                <p className="mt-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">
                  App Store rating / 11 reviews
                </p>
              </RevealItem>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-20">
          <Callout
            label="The read"
            headline="Distribution is signed. Demand is not."
            body="Every problem on this page is a marketing problem, and marketing problems are the solvable kind. The rights list above is the hard part of building a sports network, and it is already done. What is missing is a demand engine sized to it."
          />
        </Reveal>

        <NextUp label="02 The Customer Record" />
      </Shell>
    </section>
  );
}
