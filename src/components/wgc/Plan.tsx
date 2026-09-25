'use client';

import React from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, Callout } from './ui';
import { THESIS, PILLARS, VERDICT, SERIES, WEEK, RETIRE, ROADMAP } from './data';

/* ------------------------------------------------------------------ */
/* Divider into the plan                                               */
/* ------------------------------------------------------------------ */

export function PlanDivider() {
  return (
    <section className="relative overflow-hidden border-y border-white/10" aria-label="The plan">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/wgcologne/mist.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[35%_center] opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30" aria-hidden="true" />
      <Shell className="relative py-24 md:py-36">
        <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FD3737]">Part two</p>
        <h2 className="mt-4 font-display uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.01em] text-[#FAFAFA]">
          The plan
        </h2>
        <p className="mt-8 max-w-[46ch] font-display text-2xl md:text-3xl leading-[1.25] text-[#FAFAFA]">{THESIS}</p>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 07 Strategy Pillars                                                 */
/* ------------------------------------------------------------------ */

export function SPillars() {
  return (
    <section id="s07-pillars" className="scroll-mt-16 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="07"
          act="Plan"
          title="Strategy Pillars"
          strap="Four moves. Each one answers a specific finding from part one and carries a number to hit in 90 days."
        />
        <div className="flex flex-col gap-6">
          {PILLARS.map((p) => (
            <Reveal key={p.n} className="grid gap-8 border border-white/10 p-6 md:p-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-sm text-[#FD3737]">Pillar {p.n}</span>
                <h3 className="mt-3 font-display uppercase text-4xl md:text-5xl leading-[0.95] text-[#FAFAFA]">{p.name}</h3>
                <p className="mt-6 text-base md:text-[17px] leading-[1.7] text-[#E4E4E9]">{p.thesis}</p>
              </div>
              <div className="lg:col-span-7">
                <Mono>Initiatives</Mono>
                <ul className="mt-4 flex flex-col divide-y divide-white/10 border-y border-white/10">
                  {p.initiatives.map((i, idx) => (
                    <li key={i} className="grid grid-cols-[32px_1fr] gap-3 py-3.5">
                      <span className="font-mono text-sm tabular-nums text-[#8A8A93]">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-[15px] md:text-base leading-[1.55] text-[#FAFAFA]">{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-l-2 border-[#FD3737] pl-4">
                  <Mono className="text-[#FD3737]">Success metric</Mono>
                  <p className="mt-1 font-display uppercase text-lg md:text-xl leading-[1.15] text-[#FAFAFA]">{p.metric}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border border-white/10 bg-[#111111] p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Mono className="text-[#FD3737]">Signature</Mono>
              <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">The WGC Verdict</h3>
              <p className="mt-4 text-base leading-[1.65] text-[#E4E4E9]">
                One three-word system on every review, spoken and on screen. It is budget-aware, which is what a teen
                audience actually needs, and it is ownable: after fifty episodes, “Spray, Save or Skip” means WGC.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-8">
              {VERDICT.map((v, i) => (
                <div key={v.word} className={`border p-6 ${i === 0 ? 'border-[#FD3737]' : 'border-white/15'}`}>
                  <p className={`font-display uppercase text-5xl leading-none ${i === 0 ? 'text-[#FD3737]' : 'text-[#FAFAFA]'}`}>{v.word}</p>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[#E4E4E9]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 08 Content System                                                   */
/* ------------------------------------------------------------------ */

export function SSeries() {
  return (
    <section id="s08-series" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="08"
          act="Plan"
          title="Content System"
          strap="Five named series replace one-off posts. Three need no new purchases, and all five are built from formats that already work on this channel or across the field."
        />

        <div className="flex flex-col gap-6">
          {SERIES.map((s, idx) => (
            <Reveal
              key={s.name}
              className={`grid gap-8 border border-white/10 p-6 md:p-10 ${s.image ? 'lg:grid-cols-[1fr_260px]' : ''}`}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-[#FD3737]">Series {String(idx + 1).padStart(2, '0')}</span>
                  <span className="border border-white/25 px-2 py-1 font-mono uppercase text-xs tracking-[0.14em] text-[#E4E4E9]">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display uppercase text-4xl md:text-5xl leading-[0.95] text-[#FAFAFA]">{s.name}</h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <Mono>Format</Mono>
                    <p className="mt-2 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">{s.format}</p>
                    <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                      <div>
                        <Mono>Cadence</Mono>
                        <p className="mt-1 text-[15px] text-[#FAFAFA]">{s.cadence}</p>
                      </div>
                      <div>
                        <Mono>Length</Mono>
                        <p className="mt-1 text-[15px] text-[#FAFAFA]">{s.length}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Mono>Hook bank</Mono>
                    <ul className="mt-2 flex flex-col gap-2">
                      {s.hooks.map((h) => (
                        <li key={h} className="border-l border-white/20 pl-3 text-[15px] leading-[1.5] text-[#FAFAFA]">
                          “{h}”
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 border-t border-white/10 pt-5 text-[15px] md:text-base leading-[1.6] text-[#B8B8C0]">
                  <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#FD3737]">Why it works: </span>
                  {s.why}
                </p>
              </div>
              {s.image ? (
                <figure className="mx-auto w-full max-w-[260px]">
                  <div className="aspect-[9/16] overflow-hidden border border-white/15">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={`Example frame for ${s.name}`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A93]">
                    Example frame. Directional only.
                  </figcaption>
                </figure>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Mono className="text-[#FD3737]">The weekly rhythm</Mono>
            <p className="mt-3 max-w-[60ch] text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">
              One Short a day at the same time, plus up to three reactive POVs a week when a trend fits. Seven to ten a
              week, down from fourteen. The two faceless peers with 207 and 326 Shorts show that volume is not the lever.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-7">
              {WEEK.map((d) => (
                <li key={d.day} className="flex gap-3 bg-[#0A0A0A] p-4 sm:flex-col sm:gap-2">
                  <span className="w-10 font-mono uppercase text-xs tracking-[0.14em] text-[#FD3737] sm:w-auto">{d.day}</span>
                  <span className="text-sm leading-[1.4] text-[#FAFAFA]">{d.slot}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <Mono className="text-[#FD3737]">What changes</Mono>
            <ul className="mt-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {RETIRE.map((r) => (
                <li key={r.from} className="grid grid-cols-[1fr_24px_1fr] items-center gap-3 py-4">
                  <span className="text-[15px] text-[#B8B8C0] line-through decoration-white/30">{r.from}</span>
                  <span className="font-mono text-[#FD3737]" aria-hidden="true">
                    &rarr;
                  </span>
                  <span className="text-[15px] text-[#FAFAFA]">{r.to}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <Callout
            label="Showing up, step by step"
            headline="Voice first, then the reaction, then the verdict"
            body={
              <p>
                Weeks one and two: the same shelf footage, now with a spoken pick. Weeks two to four: the face enters in
                the reaction beat at the end of a 7:59 or a Blind Test. From month two: one talking-to-camera Verdict a
                week. The hands-and-shelf look never goes away; it becomes the B-roll signature under a person the
                audience knows.
              </p>
            }
          />
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 09 Roadmap                                                          */
/* ------------------------------------------------------------------ */

export function SRoadmap() {
  return (
    <section id="s09-roadmap" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="09"
          act="Plan"
          title="12-Month Roadmap"
          strap="October 2026 to September 2027. Four phases, each ending in numbers that unlock the next one."
        />
        <div className="relative flex flex-col gap-6">
          {ROADMAP.map((p, i) => (
            <Reveal key={p.phase} className="grid gap-6 border border-white/10 p-6 md:p-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em]">
                  <span className="text-[#FD3737]">{p.phase}</span>
                  <span className="text-[#B8B8C0]"> / {p.when}</span>
                </p>
                <h3 className="mt-3 font-display uppercase text-5xl md:text-6xl leading-[0.9] text-[#FAFAFA]">{p.name}</h3>
                <p className="mt-5 text-[15px] md:text-base leading-[1.65] text-[#E4E4E9]">{p.intro}</p>
              </div>
              <div className="lg:col-span-5">
                <Mono>Actions</Mono>
                <ul className="mt-3 flex flex-col gap-3">
                  {p.actions.map((a) => (
                    <li key={a} className="flex gap-3 text-[15px] leading-[1.55] text-[#FAFAFA]">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-[#FD3737]" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3">
                <Mono>Exit numbers</Mono>
                <ul className="mt-3 flex flex-col gap-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="border border-white/15 px-3 py-2 font-display uppercase text-base leading-[1.2] text-[#FAFAFA]">
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-xs tracking-[0.1em] text-[#8A8A93]">
                  {i < ROADMAP.length - 1 ? `Unlocks ${ROADMAP[i + 1].name}` : 'Sets up year two'}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
