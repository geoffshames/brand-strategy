'use client';

import React from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, Callout, Bug, Tag, PullStat } from './ui';
import {
  SHORTS,
  CHANNEL_MEDIAN,
  FORMATS,
  FORMAT_LABEL,
  PROFILE,
  BREAKOUTS,
  BREAKOUT_PATTERN,
  UNDERPERFORMERS,
  SIGNALS,
  HOUSEKEEPING,
  AUDIENCE_QUOTES,
  AUDIENCE_SEGMENTS,
  AUDIENCE_WANTS,
  PULL_DATE,
} from './data';

const fmt = (n: number) => n.toLocaleString('en-US');

/* ------------------------------------------------------------------ */
/* 01 The Channel Today                                                */
/* ------------------------------------------------------------------ */

function ShortsChart() {
  const max = Math.max(...SHORTS.map((s) => s.views));
  const medianPct = (CHANNEL_MEDIAN / max) * 100;
  const ticks = ['Sep 2', 'Sep 9', 'Sep 16', 'Sep 23'];
  return (
    <figure className="border border-white/10 bg-[#111111] p-4 md:p-8">
      <figcaption className="flex flex-wrap items-center justify-between gap-4">
        <Mono className="text-[#FAFAFA]">Views per Short, every upload, oldest to newest</Mono>
        <div className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-[0.12em] text-[#B8B8C0]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#FD3737]" aria-hidden="true" /> Teen-life POV
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-[#71717A]" aria-hidden="true" /> Every other format
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-px w-5 border-t border-dashed border-[#FAFAFA]" aria-hidden="true" /> Median 1,241
          </span>
        </div>
      </figcaption>

      <div
        className="relative mt-8 h-[260px] md:h-[340px]"
        role="img"
        aria-label="Bar chart of views for all 40 public Shorts. Most sit near the 1,241 median. Two teen-life POV Shorts spike to 17,850 and 13,677 views."
      >
        {/* gridlines */}
        {[5000, 10000, 15000].map((v) => (
          <div
            key={v}
            className="absolute inset-x-0 border-t border-white/[0.07]"
            style={{ bottom: `${(v / max) * 100}%` }}
            aria-hidden="true"
          >
            <span className="absolute -top-5 left-0 font-mono text-[11px] text-[#8A8A93]">{v / 1000}K</span>
          </div>
        ))}
        <div
          className="absolute inset-x-0 z-10 border-t border-dashed border-[#FAFAFA]/70"
          style={{ bottom: `${medianPct}%` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-end gap-[2px] md:gap-[4px]">
          {SHORTS.map((s) => {
            const pov = s.format === 'pov';
            const h = Math.max((s.views / max) * 100, 0.8);
            const big = s.views > 10000;
            return (
              <a
                key={s.id}
                href={`https://www.youtube.com/shorts/${s.id}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`${s.date}: ${s.title} (${fmt(s.views)} views, ${FORMAT_LABEL[s.format]})`}
                className="group relative flex-1"
                style={{ height: `${h}%` }}
              >
                <span
                  className={`block h-full w-full transition-opacity group-hover:opacity-80 ${pov ? 'bg-[#FD3737]' : 'bg-[#71717A]'}`}
                />
                {big ? (
                  <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-[11px] text-[#FAFAFA] sm:block">
                    {(s.views / 1000).toFixed(1)}K
                  </span>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-[#8A8A93]" aria-hidden="true">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
        <span>Sep 25</span>
      </div>
      <p className="mt-6 max-w-[70ch] text-sm md:text-base leading-[1.6] text-[#B8B8C0]">
        Tap any bar to open the Short. The two spikes are “POV u don’t wear deodorant because you wear cologne” (Sep 20)
        and “Me before school” (Sep 23). Pulled {PULL_DATE}; one restricted upload is excluded.
      </p>
    </figure>
  );
}

function ShortsWall() {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <Mono className="text-[#FAFAFA]">The full feed</Mono>
        <Mono>Red frame = teen-life POV</Mono>
      </div>
      <ul className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10">
        {SHORTS.map((s) => (
          <li key={s.id}>
            <a
              href={`https://www.youtube.com/shorts/${s.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block aspect-[9/16] overflow-hidden border ${
                s.format === 'pov' ? 'border-[#FD3737]' : 'border-white/10'
              }`}
              title={`${s.title} (${fmt(s.views)} views)`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/wgcologne/shorts/${s.id}.webp`}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-1.5 pb-1 pt-4 font-mono text-[10px] md:text-[11px] tabular-nums text-[#FAFAFA]">
                {s.views >= 1000 ? `${(s.views / 1000).toFixed(1)}K` : s.views}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SChannel() {
  return (
    <section id="s01-channel" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="01"
          act="Findings"
          title="The Channel Today"
          strap="A three-week-old Shorts channel posting twice a day, with one clear signal inside the noise."
        />
        <Reveal className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {PROFILE.map((p) => (
            <Bug key={p.label} value={p.value} label={p.label} />
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <ShortsChart />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <PullStat value="37%" label="Of all views came from 2 of 41 Shorts" source={`YouTube, pulled ${PULL_DATE}`} />
          </Reveal>
          <Reveal className="lg:col-span-7">
            <Callout
              label="How to read the floor"
              headline="The feed is testing, not ignoring"
              body={
                <>
                  <p>
                    36 of 40 public Shorts finished under 3,000 views, most of them within a few hundred of the 1,241
                    median. That floor is the audience YouTube shows a new Short to first. YouTube’s Shorts team puts it
                    simply: the audience is the algorithm, and distribution follows whether viewers watch or swipe away.
                  </p>
                  <p className="mt-4">
                    Two Shorts earned the wider push. Both are teen-life jokes with the collection as the prop. That is
                    the most useful fact on this page, and the rest of the plan is built on it.
                  </p>
                </>
              }
            />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ShortsWall />
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 02 Content Analysis                                                 */
/* ------------------------------------------------------------------ */

const VERDICT_TONE: Record<string, string> = {
  Scale: 'border-[#FD3737] text-[#FD3737]',
  Keep: 'border-white/50 text-[#FAFAFA]',
  'Fold in': 'border-white/25 text-[#B8B8C0]',
  Retire: 'border-white/15 text-[#8A8A93]',
};

function FormatBoard() {
  return (
    <div className="border border-white/10">
      <div className="hidden grid-cols-[1.6fr_0.5fr_0.8fr_0.8fr_2fr_0.8fr] gap-4 border-b border-white/10 bg-[#111111] px-5 py-3 md:grid">
        {['Format', 'Shorts', 'Median', 'Best', 'Share of all views', 'Call'].map((h) => (
          <Mono key={h}>{h}</Mono>
        ))}
      </div>
      <ul>
        {FORMATS.map((f) => (
          <li
            key={f.key}
            className="grid grid-cols-2 gap-x-4 gap-y-2 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[1.6fr_0.5fr_0.8fr_0.8fr_2fr_0.8fr] md:items-center"
          >
            <span className="col-span-2 font-display uppercase text-lg leading-tight text-[#FAFAFA] md:col-span-1">
              {FORMAT_LABEL[f.key]}
            </span>
            <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
              <span className="text-[#8A8A93] md:hidden">Shorts </span>
              {f.n}
            </span>
            <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
              <span className="text-[#8A8A93] md:hidden">Median </span>
              {fmt(f.median)}
            </span>
            <span className="font-mono text-sm tabular-nums text-[#E4E4E9]">
              <span className="text-[#8A8A93] md:hidden">Best </span>
              {fmt(f.best)}
            </span>
            <span className="col-span-2 flex items-center gap-3 md:col-span-1">
              <span className="relative h-2.5 flex-1 bg-white/[0.06]">
                <span
                  className={`absolute inset-y-0 left-0 ${f.key === 'pov' ? 'bg-[#FD3737]' : 'bg-[#A1A1AA]'}`}
                  style={{ width: `${f.share}%` }}
                />
              </span>
              <span className="w-10 text-right font-mono text-sm tabular-nums text-[#FAFAFA]">{f.share}%</span>
            </span>
            <span className="col-span-2 md:col-span-1">
              <span className={`inline-block border px-2 py-1 font-mono uppercase text-xs tracking-[0.14em] ${VERDICT_TONE[f.verdict]}`}>
                {f.verdict}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SContent() {
  return (
    <section id="s02-content" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="02"
          act="Findings"
          title="Content Analysis"
          strap="Every public Short sorted into its format and scored. One format carries the channel; three never leave the floor."
        />

        <Reveal>
          <FormatBoard />
          <p className="mt-4 max-w-[75ch] text-sm leading-[1.6] text-[#B8B8C0]">
            Medians sit close together because almost every Short gets the same first test. The difference is the
            ceiling: teen-life POVs produced every Short over 10K and 61% of all views.
          </p>
        </Reveal>

        {/* Breakouts */}
        <div className="mt-20">
          <Reveal>
            <Mono className="text-[#FD3737]">The two breakouts</Mono>
            <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">Breakout anatomy</h3>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {BREAKOUTS.map((b) => (
              <Reveal key={b.id} className="grid grid-cols-[110px_1fr] gap-5 border border-white/10 p-4 sm:grid-cols-[150px_1fr] md:p-6">
                <a
                  href={`https://www.youtube.com/shorts/${b.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[9/16] overflow-hidden border border-[#FD3737]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/wgcologne/shorts/${b.id}.webp`} alt={b.title} className="h-full w-full object-cover" />
                </a>
                <div className="min-w-0">
                  <p className="font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">“{b.title}”</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag>{b.views} views</Tag>
                    <Tag tone="white">{b.likes} likes</Tag>
                    <Tag tone="white">{b.comments} comments</Tag>
                    <Tag tone="white">{b.dur}</Tag>
                  </div>
                  <p className="mt-4 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">
                    <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">On screen: </span>
                    {b.onScreen}
                  </p>
                  <p className="mt-3 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">
                    <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#FD3737]">Why it worked: </span>
                    {b.why}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {BREAKOUT_PATTERN.map((p) => (
              <div key={p.n} className="bg-[#0A0A0A] p-5 md:p-6">
                <span className="font-mono text-sm text-[#FD3737]">{p.n}</span>
                <p className="mt-3 font-display uppercase text-lg leading-[1.1] text-[#FAFAFA]">{p.title}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#B8B8C0]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Underperformers + signals */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Mono className="text-[#FD3737]">What stays on the floor</Mono>
            <div className="mt-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {UNDERPERFORMERS.map((u) => (
                <div key={u.title} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-display uppercase text-xl text-[#FAFAFA]">{u.title}</p>
                    <Mono>{u.stat}</Mono>
                  </div>
                  <p className="mt-2 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">{u.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <Mono className="text-[#FD3737]">Engagement signals</Mono>
            <div className="mt-6 flex flex-col gap-4">
              {SIGNALS.map((s) => (
                <div key={s.label} className="border border-white/10 p-5">
                  <p className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-display text-4xl tabular-nums text-[#FAFAFA]">{s.value}</span>
                    <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">{s.unit}</span>
                  </p>
                  <p className="mt-2 font-display uppercase text-base text-[#FAFAFA]">{s.label}</p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#E4E4E9]">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Housekeeping */}
        <Reveal className="mt-20">
          <Mono className="text-[#FD3737]">Quick fixes</Mono>
          <div className="mt-6 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
            {HOUSEKEEPING.map((h) => (
              <div key={h.title} className="bg-[#0A0A0A] p-5">
                <p className="font-display uppercase text-lg text-[#FAFAFA]">{h.title}</p>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#B8B8C0]">{h.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 03 The Audience                                                     */
/* ------------------------------------------------------------------ */

export function SAudience() {
  return (
    <section id="s03-audience" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="03"
          act="Findings"
          title="The Audience"
          strap="Teen boys who collect, or want to. They speak the feed’s language, know the clone map cold and notice when a cap is on backwards."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Mono className="text-[#FD3737]">In their words</Mono>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {AUDIENCE_QUOTES.map((q) => (
                <li key={q.quote} className="border border-white/10 p-5">
                  <p className="font-display text-xl leading-[1.2] text-[#FAFAFA]">“{q.quote}”</p>
                  <p className="mt-3 text-sm leading-[1.55] text-[#B8B8C0]">{q.context}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#8A8A93]">
              From 97 comments across the eight most-discussed Shorts, pulled {PULL_DATE}. Commenters are not named.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <Mono className="text-[#FD3737]">Three segments</Mono>
            <div className="mt-6 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {AUDIENCE_SEGMENTS.map((s) => (
                <div key={s.name} className="py-5">
                  <p className="font-display uppercase text-xl text-[#FAFAFA]">{s.name}</p>
                  <p className="mt-2 text-[15px] md:text-base leading-[1.6] text-[#E4E4E9]">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Mono className="text-[#FD3737]">What they want</Mono>
              <ul className="mt-4 flex flex-col gap-3">
                {AUDIENCE_WANTS.map((w) => (
                  <li key={w} className="flex gap-3 text-base leading-[1.5] text-[#FAFAFA]">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-[#FD3737]" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
