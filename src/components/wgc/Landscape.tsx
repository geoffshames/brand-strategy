'use client';

import React from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, Callout, FactCard } from './ui';
import { CREATORS, CONVERSION, FIELD_LESSONS, FIELD_NOTES, MARKET, SWOT, PULL_DATE } from './data';

const fmt = (n: number) => n.toLocaleString('en-US');

/* ------------------------------------------------------------------ */
/* 04 Creator Landscape                                                */
/* ------------------------------------------------------------------ */

function MedianChart() {
  const rows = CREATORS.filter((c) => c.median != null).slice().sort((a, b) => (b.median ?? 0) - (a.median ?? 0));
  /* log scale from 1K to 150K */
  const lo = Math.log10(800);
  const hi = Math.log10(150000);
  const w = (v: number) => ((Math.log10(v) - lo) / (hi - lo)) * 100;
  return (
    <figure className="border border-white/10 bg-[#111111] p-4 md:p-8">
      <figcaption className="flex flex-wrap items-center justify-between gap-4">
        <Mono className="text-[#FAFAFA]">Median views per Short, last ~50 Shorts (log scale)</Mono>
        <div className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-[0.12em] text-[#B8B8C0]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#E4E4E9]" aria-hidden="true" /> Face on camera
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#71717A]" aria-hidden="true" /> Faceless
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#FD3737]" aria-hidden="true" /> WGCologne
          </span>
        </div>
      </figcaption>
      <ul className="mt-8 flex flex-col gap-3">
        {rows.map((c) => {
          const self = c.name === 'WGCologne';
          return (
            <li key={c.name} className="grid grid-cols-[minmax(0,130px)_1fr] items-center gap-3 md:grid-cols-[220px_1fr]">
              <span className={`truncate text-sm md:text-[15px] ${self ? 'text-[#FD3737]' : 'text-[#E4E4E9]'}`}>{c.name}</span>
              <span className="flex items-center gap-3">
                <span className="relative h-3 flex-1 bg-white/[0.05]">
                  <span
                    className={`absolute inset-y-0 left-0 ${self ? 'bg-[#FD3737]' : c.face ? 'bg-[#E4E4E9]' : 'bg-[#71717A]'}`}
                    style={{ width: `${w(c.median as number)}%` }}
                  />
                </span>
                <span className="w-[74px] text-right font-mono text-xs md:text-sm tabular-nums text-[#FAFAFA]">
                  {fmt(c.median as number)}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm leading-[1.6] text-[#B8B8C0]">
        Gents Scents (13 Shorts, all 2023) and Demi Rawling (no Shorts since Apr 2025) are measured on older samples.
        Faceless peers are shown as a group median. Pulled {PULL_DATE}; YouTube rounds public counts.
      </p>
    </figure>
  );
}

function ConversionChart() {
  const max = 4.5;
  return (
    <figure className="border border-white/10 bg-[#111111] p-4 md:p-8">
      <figcaption className="flex flex-wrap items-center justify-between gap-4">
        <Mono className="text-[#FAFAFA]">Subscribers earned per 1,000 Shorts views</Mono>
        <div className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-[0.12em] text-[#B8B8C0]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#E4E4E9]" aria-hidden="true" /> Face
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#71717A]" aria-hidden="true" /> Faceless
          </span>
        </div>
      </figcaption>
      <ul className="mt-8 flex flex-col gap-4">
        {CONVERSION.map((c) => (
          <li key={c.name} className="grid grid-cols-[minmax(0,130px)_1fr] items-center gap-3 md:grid-cols-[180px_1fr]">
            <span className={`truncate text-sm md:text-[15px] ${c.self ? 'text-[#FD3737]' : 'text-[#E4E4E9]'}`}>
              {c.name}
            </span>
            <span className="flex items-center gap-3">
              <span className="relative h-3 flex-1 bg-white/[0.05]">
                <span
                  className={`absolute inset-y-0 left-0 ${c.self ? 'bg-[#FD3737]' : c.face ? 'bg-[#E4E4E9]' : 'bg-[#71717A]'}`}
                  style={{ width: `${(c.value / max) * 100}%` }}
                />
              </span>
              <span className="w-10 text-right font-mono text-sm tabular-nums text-[#FAFAFA]">{c.value.toFixed(1)}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-[1.6] text-[#B8B8C0]">
        Total subscribers divided by total Shorts views on each channel. A correlation, not proof, but both face-on
        channels measured convert better than every faceless one.
      </p>
    </figure>
  );
}

function CreatorTable() {
  const tiers: Array<(typeof CREATORS)[number]['tier']> = ['Macro', 'Mid / Shorts-native', 'Teen and peer'];
  return (
    <div className="flex flex-col gap-10">
      {tiers.map((t) => (
        <div key={t}>
          <Mono className="text-[#FD3737]">{t}</Mono>
          <div className="mt-4 border border-white/10">
            <div className="hidden grid-cols-[1.3fr_0.6fr_0.6fr_0.7fr_0.4fr_2fr] gap-4 border-b border-white/10 bg-[#111111] px-5 py-3 lg:grid">
              {['Creator', 'YouTube', 'TikTok', 'Shorts median', 'Face', 'Built on'].map((h) => (
                <Mono key={h}>{h}</Mono>
              ))}
            </div>
            <ul>
              {CREATORS.filter((c) => c.tier === t).map((c) => (
                <li
                  key={c.name}
                  className={`grid grid-cols-2 gap-x-4 gap-y-1.5 border-b border-white/10 px-5 py-4 last:border-b-0 lg:grid-cols-[1.3fr_0.6fr_0.6fr_0.7fr_0.4fr_2fr] lg:items-center ${
                    c.name === 'WGCologne' ? 'bg-[#FD3737]/[0.06]' : ''
                  }`}
                >
                  <span className={`col-span-2 font-display uppercase text-lg leading-tight lg:col-span-1 ${c.name === 'WGCologne' ? 'text-[#FD3737]' : 'text-[#FAFAFA]'}`}>
                    {c.name}
                  </span>
                  <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
                    <span className="text-[#8A8A93] lg:hidden">YT </span>
                    {c.subs}
                  </span>
                  <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
                    <span className="text-[#8A8A93] lg:hidden">TikTok </span>
                    {c.tiktok}
                  </span>
                  <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
                    <span className="text-[#8A8A93] lg:hidden">Median </span>
                    {c.medianNote && c.name.startsWith('Faceless') ? c.medianNote : c.median != null ? fmt(c.median) : 'n/a'}
                  </span>
                  <span className="font-mono text-sm text-[#E4E4E9]">
                    <span className="text-[#8A8A93] lg:hidden">Face </span>
                    {c.face ? 'Yes' : 'No'}
                  </span>
                  <span className="col-span-2 text-[15px] leading-[1.5] text-[#B8B8C0] lg:col-span-1">
                    {c.builtOn}
                    {c.product ? <span className="block text-[#E4E4E9]">Product: {c.product}</span> : null}
                    {c.medianNote && !c.name.startsWith('Faceless') ? <span className="block text-[#8A8A93]">{c.medianNote}</span> : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SField() {
  return (
    <section id="s04-field" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="04"
          act="Findings"
          title="Creator Landscape"
          strap="Fifteen fragrance creators across three tiers, pulled the same day as the channel data. The pattern is blunt: the channels that scaled show a face, and volume alone never saved anyone."
        />

        <div className="grid gap-8 xl:grid-cols-2">
          <Reveal>
            <MedianChart />
          </Reveal>
          <Reveal>
            <ConversionChart />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <CreatorTable />
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <Mono className="text-[#FD3737]">What transfers to a small teen channel</Mono>
            <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">Five proven formats</h3>
          </Reveal>
          <div className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
            {FIELD_LESSONS.map((l) => (
              <Reveal key={l.n} className="bg-[#0A0A0A] p-5 md:p-6">
                <span className="font-mono text-sm text-[#FD3737]">{l.n}</span>
                <p className="mt-3 font-display uppercase text-lg leading-[1.1] text-[#FAFAFA]">{l.title}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#E4E4E9]">{l.body}</p>
                <p className="mt-3 text-sm leading-[1.55] text-[#B8B8C0]">{l.proof}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FIELD_NOTES.map((n) => (
            <Reveal key={n.title}>
              <Callout label="Field note" headline={n.title} body={<p>{n.body}</p>} />
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 05 Market Context                                                   */
/* ------------------------------------------------------------------ */

export function SMarket() {
  return (
    <section id="s05-market" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="05"
          act="Findings"
          title="Market Context"
          strap="The channel sits where the category is growing fastest: teen boys, the clone tier and the platform teens use most."
        />
        <Reveal className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {MARKET.map((m) => (
            <FactCard key={m.fact} fact={m.fact} source={m.source} />
          ))}
        </Reveal>
        <Reveal className="mt-12">
          <Callout
            label="What it means"
            headline="Timing is on the channel’s side"
            body={
              <p>
                Teen boys are the category’s fastest-growing buyers, clones and Middle Eastern houses are its
                fastest-growing tier, and YouTube is where teens spend the most time. A teenager with both sides of the
                clone debate on one shelf is not a niche. It is the center of the market.
              </p>
            }
          />
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 06 SWOT                                                             */
/* ------------------------------------------------------------------ */

const QUADS: { key: keyof Omit<typeof SWOT, 'synthesis'>; label: string; accent: string }[] = [
  { key: 'strengths', label: 'Strengths', accent: 'text-[#FAFAFA]' },
  { key: 'weaknesses', label: 'Weaknesses', accent: 'text-[#B8B8C0]' },
  { key: 'opportunities', label: 'Opportunities', accent: 'text-[#FD3737]' },
  { key: 'threats', label: 'Threats', accent: 'text-[#D42D2D]' },
];

export function SSwot() {
  return (
    <section id="s06-swot" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader index="06" act="Findings" title="SWOT" strap={SWOT.synthesis} />
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {QUADS.map((q) => (
            <Reveal key={q.key} className="bg-[#0A0A0A] p-6 md:p-8">
              <p className={`font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] ${q.accent}`}>{q.label}</p>
              <ul className="mt-6 flex flex-col gap-6">
                {SWOT[q.key].map((item) => (
                  <li key={item.title}>
                    <p className="font-display uppercase text-lg md:text-xl leading-[1.1] text-[#FAFAFA]">{item.title}</p>
                    <p className="mt-2 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
