'use client';

import React, { useState } from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, Bug, Tag, Callout } from './ui';
import { TEARDOWN_METHOD, DOSSIERS, AUDIO_CLASSES, FORMULA, type Dossier } from './teardown';

const fmt = (n: number) => n.toLocaleString('en-US');

const SEG_TONE: Record<string, string> = {
  hook: 'bg-[#FD3737]',
  setup: 'bg-[#A1A1AA]',
  escalation: 'bg-[#E4E4E9]',
  payoff: 'bg-[#D42D2D]',
  loop: 'bg-[#71717A]',
};

function Timeline({ d }: { d: Dossier }) {
  const pct = (t: number) => `${(t / d.duration) * 100}%`;
  const ticks = Array.from({ length: Math.floor(d.duration) + 1 }, (_, i) => i);
  return (
    <figure className="border border-white/10 bg-[#111111] p-4 md:p-6">
      <figcaption className="flex flex-wrap items-center justify-between gap-3">
        <Mono className="text-[#FAFAFA]">Second-by-second map</Mono>
        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#B8B8C0]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-[2px] bg-[#FD3737]" aria-hidden="true" /> Audio hit
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-[2px] bg-[#FAFAFA]" aria-hidden="true" /> On-screen action
          </span>
        </div>
      </figcaption>

      <div className="relative mt-10 hidden md:block" aria-hidden="true">
        {/* audio markers above */}
        <div className="relative h-8">
          {d.audioMarkers.map((m, i) => (
            <div key={i} className="absolute bottom-0 -translate-x-1/2 text-center" style={{ left: pct(m.t) }}>
              <span className="block whitespace-nowrap font-mono text-[11px] text-[#FD3737]">{m.label}</span>
              <span className="mx-auto mt-1 block h-3 w-[2px] bg-[#FD3737]" />
            </div>
          ))}
        </div>
        {/* segments */}
        <div className="relative flex h-10 w-full overflow-hidden">
          {d.segments.map((s, i) => (
            <div
              key={i}
              className={`flex h-full items-center justify-center border-r border-[#0A0A0A] ${SEG_TONE[s.kind]}`}
              style={{ width: `${((s.end - s.start) / d.duration) * 100}%` }}
            >
              <span className="truncate px-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#0A0A0A]">{s.label}</span>
            </div>
          ))}
        </div>
        {/* action markers below */}
        <div className="relative h-10">
          {d.actionMarkers.map((m, i) => (
            <div key={i} className="absolute top-0 -translate-x-1/2 text-center" style={{ left: pct(m.t) }}>
              <span className="mx-auto block h-3 w-[2px] bg-[#FAFAFA]" />
              <span className="mt-1 block whitespace-nowrap font-mono text-[11px] text-[#E4E4E9]">{m.label}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-1 h-4 border-t border-white/15">
          {ticks.map((t) => (
            <span key={t} className="absolute top-1 -translate-x-1/2 font-mono text-[10px] text-[#8A8A93]" style={{ left: pct(t) }}>
              {t}s
            </span>
          ))}
        </div>
      </div>

      {/* phone layout: stacked list */}
      <div className="mt-6 md:hidden">
        <div className="flex h-8 w-full overflow-hidden" aria-hidden="true">
          {d.segments.map((s, i) => (
            <div
              key={i}
              className={`h-full border-r border-[#0A0A0A] ${SEG_TONE[s.kind]}`}
              style={{ width: `${((s.end - s.start) / d.duration) * 100}%` }}
            />
          ))}
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {d.segments.map((s, i) => (
            <li key={i} className="flex items-baseline gap-3 text-sm text-[#E4E4E9]">
              <span className={`inline-block h-2.5 w-2.5 shrink-0 ${SEG_TONE[s.kind]}`} aria-hidden="true" />
              <span className="w-24 shrink-0 font-mono text-xs tabular-nums text-[#B8B8C0]">
                {s.start.toFixed(1)} to {s.end.toFixed(1)}s
              </span>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-[1.55] text-[#B8B8C0]">
          <span className="font-mono uppercase text-xs tracking-[0.12em] text-[#FD3737]">Audio hits: </span>
          {d.audioMarkers.map((m) => `${m.t.toFixed(1)}s ${m.label}`).join(', ')}
        </p>
        <p className="mt-2 text-sm leading-[1.55] text-[#B8B8C0]">
          <span className="font-mono uppercase text-xs tracking-[0.12em] text-[#FAFAFA]">Actions: </span>
          {d.actionMarkers.map((m) => `${m.t.toFixed(1)}s ${m.label}`).join(', ')}
        </p>
      </div>
    </figure>
  );
}

function FrameStrip({ d }: { d: Dossier }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
      <ul className="flex gap-2 md:grid md:gap-3" style={{ gridTemplateColumns: `repeat(${d.frames.length}, minmax(0, 1fr))` }}>
        {d.frames.map((f) => (
          <li key={f.src} className="w-[124px] shrink-0 md:w-auto">
            <div className="aspect-[9/16] overflow-hidden border border-white/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/wgcologne/teardown/${f.src}.webp`} alt={f.caption} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <p className="mt-2 font-mono text-[11px] tabular-nums text-[#FD3737]">{f.t}</p>
            <p className="mt-1 text-[13px] leading-[1.4] text-[#E4E4E9]">{f.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Scorecard({ d }: { d: Dossier }) {
  return (
    <div className="border border-white/10">
      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 bg-[#111111] p-5 md:p-6">
        <div>
          <Mono>Creative score, weighted, calibrated</Mono>
          <p className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-6xl leading-none tabular-nums text-[#FAFAFA]">{d.overall.toFixed(1)}</span>
            <span className="font-mono text-sm text-[#B8B8C0]">/ 10</span>
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.08em] text-[#8A8A93]">Pegasus raw {d.pegasusOverall.toFixed(1)}</p>
        </div>
        <div className="max-w-[46ch]">
          <Mono>Retention shape</Mono>
          <p className="mt-2 text-[15px] leading-[1.55] text-[#E4E4E9]">{d.retention}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[#B8B8C0]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-5 bg-[#E4E4E9]" aria-hidden="true" /> Calibrated
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-[2px] bg-[#FD3737]" aria-hidden="true" /> Pegasus raw
          </span>
        </div>
      </div>
      <ul>
        {d.dims.map((m) => (
          <li key={m.name} className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[240px_1fr_2fr] md:items-center md:gap-6 md:px-6">
            <span className="flex items-baseline justify-between gap-3 md:block">
              <span className="font-display uppercase text-base leading-tight text-[#FAFAFA]">{m.name}</span>
              <span className="font-mono text-[11px] text-[#8A8A93] md:mt-1 md:block">weight {Math.round(m.weight * 100)}%</span>
            </span>
            <span className="flex items-center gap-3">
              <span className="relative h-3 flex-1 bg-white/[0.06]">
                <span className={`absolute inset-y-0 left-0 ${m.score >= 8 ? 'bg-[#FAFAFA]' : 'bg-[#A1A1AA]'}`} style={{ width: `${m.score * 10}%` }} />
                <span className="absolute -inset-y-1 w-[2px] bg-[#FD3737]" style={{ left: `calc(${m.pegasus * 10}% - 1px)` }} aria-hidden="true" />
              </span>
              <span className="w-8 text-right font-display text-xl tabular-nums text-[#FAFAFA]">{m.score}</span>
            </span>
            <span className="text-[15px] leading-[1.55] text-[#E4E4E9]">{m.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DossierView({ d, index }: { d: Dossier; index: number }) {
  return (
    <article className="flex flex-col gap-10">
      {/* header */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Mono className="text-[#FD3737]">Dossier {String(index + 1).padStart(2, '0')}</Mono>
          <h3 className="mt-3 font-display uppercase text-3xl md:text-5xl leading-[1] text-[#FAFAFA]">“{d.title}”</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>{d.views} views</Tag>
            <Tag tone="white">{d.likes} likes</Tag>
            <Tag tone="white">{d.comments} comments</Tag>
            <Tag tone="white">{d.durationLabel}</Tag>
          </div>
          <p className="mt-6 max-w-[62ch] text-lg md:text-xl leading-[1.5] text-[#FAFAFA]">{d.verdict}</p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <a
            href={`https://www.youtube.com/shorts/${d.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/25 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737]"
          >
            Watch the Short
          </a>
          <div className="mt-6">
            <Mono>On-screen text</Mono>
            <ul className="mt-2 flex flex-col gap-1.5">
              {d.onScreen.map((t) => (
                <li key={t} className="text-[15px] leading-[1.5] text-[#E4E4E9]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FrameStrip d={d} />
      <Timeline d={d} />

      {/* sound + mechanism + comments */}
      <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
        <div className="bg-[#0A0A0A] p-5 md:p-6">
          <Mono className="text-[#FD3737]">The sound</Mono>
          <p className="mt-3 font-display uppercase text-lg leading-[1.15] text-[#FAFAFA]">{d.audioTitle}</p>
          <p className="mt-3 border-l border-white/25 pl-3 text-[15px] italic leading-[1.5] text-[#E4E4E9]">{d.transcript}</p>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#E4E4E9]">{d.audioRead}</p>
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="font-display text-3xl tabular-nums text-[#FAFAFA]">{d.syncStat.value}</p>
            <p className="mt-1 text-sm leading-[1.5] text-[#B8B8C0]">{d.syncStat.label}</p>
          </div>
        </div>
        <div className="bg-[#0A0A0A] p-5 md:p-6">
          <Mono className="text-[#FD3737]">How the joke works</Mono>
          <ol className="mt-4 flex flex-col gap-4">
            {d.mechanism.map((m, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] gap-2">
                <span className="font-mono text-sm tabular-nums text-[#8A8A93]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[15px] leading-[1.6] text-[#E4E4E9]">{m}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 border-t border-white/10 pt-4">
            <Mono>Products on screen</Mono>
            <p className="mt-2 text-sm leading-[1.55] text-[#B8B8C0]">{d.products}</p>
          </div>
        </div>
        <div className="bg-[#0A0A0A] p-5 md:p-6">
          <Mono className="text-[#FD3737]">What the comments did</Mono>
          <p className="mt-3 font-display text-3xl tabular-nums text-[#FAFAFA]">{d.commentStat.value}</p>
          <p className="mt-1 text-sm leading-[1.5] text-[#B8B8C0]">{d.commentStat.label}</p>
          <ul className="mt-4 flex flex-col gap-2">
            {d.commentQuotes.map((q) => (
              <li key={q} className="border border-white/10 px-3 py-2 text-[14px] leading-[1.45] text-[#FAFAFA]">
                “{q}”
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#E4E4E9]">{d.commentRead}</p>
        </div>
      </div>

      <Scorecard d={d} />

      {/* fixes + remake */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Mono className="text-[#FD3737]">Four fixes for the next one</Mono>
          <div className="mt-4 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {d.fixes.map((f) => (
              <div key={f.title} className="bg-[#0A0A0A] p-5">
                <p className="font-display uppercase text-base leading-[1.15] text-[#FAFAFA]">{f.title}</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-[#E4E4E9]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <Mono className="text-[#FD3737]">Remake with a face</Mono>
          <ol className="mt-4 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {d.remake.map((r) => (
              <li key={r.t} className="grid grid-cols-[100px_1fr] gap-3 py-3">
                <span className="font-mono text-xs tabular-nums text-[#B8B8C0]">{r.t}</span>
                <span className="text-[15px] leading-[1.5] text-[#FAFAFA]">{r.shot}</span>
              </li>
            ))}
          </ol>
          <dl className="mt-4 grid gap-3 text-[15px] leading-[1.5]">
            <div>
              <dt className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">Text</dt>
              <dd className="mt-1 text-[#E4E4E9]">{d.remakeText}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">Audio</dt>
              <dd className="mt-1 text-[#E4E4E9]">{d.remakeAudio}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">Pinned comment</dt>
              <dd className="mt-1 text-[#E4E4E9]">{d.remakePin}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

function AudioChart() {
  const max = Math.max(...AUDIO_CLASSES.map((a) => a.median));
  return (
    <figure className="border border-white/10 bg-[#111111] p-4 md:p-8">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-3">
        <Mono className="text-[#FAFAFA]">Median views by soundtrack type, all 40 public Shorts</Mono>
        <Mono>Over 2,000 views</Mono>
      </figcaption>
      <ul className="mt-8 flex flex-col gap-5">
        {AUDIO_CLASSES.map((a) => (
          <li key={a.label} className="grid gap-2 md:grid-cols-[260px_1fr_90px] md:items-center md:gap-5">
            <span>
              <span className={`block font-display uppercase text-base leading-tight ${a.lead ? 'text-[#FD3737]' : 'text-[#FAFAFA]'}`}>{a.label}</span>
              <span className="block font-mono text-[11px] text-[#8A8A93]">{a.n} Shorts</span>
            </span>
            <span className="flex items-center gap-3">
              <span className="relative h-3 flex-1 bg-white/[0.05]">
                <span className={`absolute inset-y-0 left-0 ${a.lead ? 'bg-[#FD3737]' : 'bg-[#A1A1AA]'}`} style={{ width: `${(a.median / max) * 100}%` }} />
              </span>
              <span className="w-16 text-right font-mono text-sm tabular-nums text-[#FAFAFA]">{fmt(a.median)}</span>
            </span>
            <span className="font-mono text-sm tabular-nums text-[#E4E4E9] md:text-right">
              {a.over2k} of {a.n}
            </span>
            <span className="text-sm leading-[1.5] text-[#B8B8C0] md:col-span-3">{a.note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-[1.6] text-[#B8B8C0]">
        Every soundtrack was pulled and transcribed, then sorted by what the audio does in the video. Small samples, but the
        split is clean: when the sound carries the joke, the Short travels; when the sound narrates the product, it does not.
      </p>
    </figure>
  );
}

export function STeardown() {
  const [active, setActive] = useState(0);
  return (
    <section id="s03-teardown" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="03"
          act="Findings"
          title="Breakout Teardown"
          strap="The two outliers taken apart frame by frame. TwelveLabs Pegasus read each Short in twelve passes, and every read was checked against the frames, a transcript of the soundtrack, a beat and motion analysis, and the comments."
        />

        <Reveal className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {TEARDOWN_METHOD.map((m) => (
            <Bug key={m.label} value={m.value} label={m.label} />
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <Callout
            label="The shared finding"
            headline="Both breakouts are jokes the sound finishes"
            body={
              <p>
                Neither Short is about a fragrance. Each sets up a small teenage premise in one line of text, lets a
                recognizable sound deliver the punchline, and leaves one thing wrong enough that viewers have to say so in
                the comments. The deodorant Short contradicts its own caption. “Me before school” uses a clock time that
                does not exist. Nine Shorts on the channel explain a fragrance out loud, and none of them passed 1,437
                views.
              </p>
            }
          />
        </Reveal>

        {/* dossier tabs */}
        <div className="mt-16">
          <div role="tablist" aria-label="Breakout dossiers" className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {DOSSIERS.map((d, i) => (
              <button
                key={d.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`dossier-${d.id}`}
                onClick={() => setActive(i)}
                className={`border px-4 py-3 text-left font-mono uppercase text-xs md:text-[13px] tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737] ${
                  active === i ? 'border-[#FD3737] text-[#FD3737]' : 'border-white/20 text-[#E4E4E9] hover:border-white/50'
                }`}
              >
                {String(i + 1).padStart(2, '0')} / {i === 0 ? 'Deodorant POV' : 'Me before school'} / {d.views}
              </button>
            ))}
          </div>
          <div id={`dossier-${DOSSIERS[active].id}`} role="tabpanel" className="mt-10">
            <DossierView d={DOSSIERS[active]} index={active} />
          </div>
        </div>

        {/* across the channel */}
        <div className="mt-24">
          <Reveal>
            <Mono className="text-[#FD3737]">Tested across all 40 Shorts</Mono>
            <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">What the soundtrack does</h3>
          </Reveal>
          <Reveal className="mt-8">
            <AudioChart />
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <Mono className="text-[#FD3737]">The repeatable part</Mono>
            <h3 className="mt-3 font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">The breakout formula</h3>
          </Reveal>
          <Reveal className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
            {FORMULA.map((f) => (
              <div key={f.n} className="bg-[#0A0A0A] p-5 md:p-6">
                <span className="font-mono text-sm text-[#FD3737]">{f.n}</span>
                <p className="mt-3 font-display uppercase text-lg leading-[1.1] text-[#FAFAFA]">{f.title}</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#E4E4E9]">{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <p className="mt-12 max-w-[90ch] text-sm leading-[1.6] text-[#8A8A93]">
          Method: TwelveLabs Pegasus 1.5, twelve passes per Short (beat map, creative audit, improvement read, ten-dimension
          scoring, product identification, viewer psychology, audio, remake brief, three time-windowed reads and one read
          grounded in verified facts). Frames extracted at 4 per second, soundtracks transcribed with Whisper, beats and
          camera motion measured from the files. Where a model read and the frames disagreed, the frames won, and the
          scores are calibrated to that verified record. Views and comments pulled Sep 25, 2026.
        </p>
      </Shell>
    </section>
  );
}
