'use client';

import React from 'react';
import { m, useHeroEntrance, heroVariants, heroTitleVariants, heroStrapVariants, heroMetaVariants } from './motion';
import { Shell, Ruler, Bug } from './ui';

const STATS: { value: string; label: string }[] = [
  { value: '6', label: 'Rights deals signed' },
  { value: '14.2K', label: 'IG followers today' },
  { value: '$1.925M', label: 'Competitor settlement' },
  { value: '0', label: 'Competitor Meta ads' },
  { value: '75x', label: 'Best vs worst clip' },
  { value: 'AUG 24', label: 'Worlds opens' },
];

const SHORT_VERSION = [
  'Overnght holds a rights portfolio far larger than the audience that knows about it. The rights are not the problem.',
  'The category’s customers are on record: a $1.925M auto-renewal settlement, a BBB alert, streams that died during unrepeatable games. One review says “first in line at any price.”',
  'None of the three incumbents runs a single direct-response subscription ad on Meta. The most efficient acquisition channel in the category is empty.',
  'The craft is not a mystery. Ten clips torn down frame by frame produced five laws, and Overnght’s own account proves them: 46K following the laws, 613 ignoring them, same week.',
  'What follows: one message, four pillars, six finished ad builds, eight scripted concepts, and a 90-day test that opens on Worlds, Aug 24.',
];

export default function S00Hero({ onJump }: { onJump: (id: string) => void }) {
  const phase = useHeroEntrance();

  return (
    <m.section
      className="relative flex min-h-[92svh] flex-col justify-between pt-24 md:pt-28"
      variants={heroVariants}
      initial={false}
      animate={phase}
      aria-label="Overview"
    >
      {/* Ambient radial + orb */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(120% 80% at 50% 0%, rgba(255,255,255,0.05), transparent 60%)' }}
      />
      <div className="ovn-orb" aria-hidden="true" />

      <Shell className="relative">
        <m.p variants={heroMetaVariants} className="flex items-center gap-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]">
          <span className="inline-block h-1.5 w-1.5 bg-[#FD3737]" aria-hidden="true" />
          Crowd Control Digital / Creative Strategy / Prepared for Overnght / Aug 2026
        </m.p>

        <m.h1 variants={heroTitleVariants} className="mt-10 font-display uppercase leading-[0.92] tracking-[-0.015em]">
          <span className="block text-[clamp(3.25rem,9.5vw,8.25rem)] text-[#FAFAFA]">Overnght</span>
          <span
            className="block text-[clamp(2rem,6vw,5.25rem)] text-transparent"
            style={{ WebkitTextStroke: '1px rgba(250,250,250,0.85)' }}
          >
            Creative Strategy
          </span>
        </m.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <m.p variants={heroStrapVariants} className="max-w-[52ch] text-lg md:text-xl lg:text-[22px] leading-[1.5] text-[#E4E4E9] lg:col-span-7">
            The rights are signed: USRowing through 2028, the biggest media deal in IFL history, continental water
            polo, the 2026 World Rowing Championships. The audience is 14.2K followers and a 2.5-star app. This is
            the plan to close that gap, and the clock starts in Amsterdam on Aug 24.
          </m.p>
          <m.div variants={heroMetaVariants} className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:justify-end">
            <button
              onClick={() => onJump('s07-builds')}
              className="border border-white/25 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              See the ad builds / 07
            </button>
            <button
              onClick={() => onJump('s09-roadmap')}
              className="border border-white/25 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              See the roadmap / 09
            </button>
          </m.div>
        </div>

        {/* Six-number scorebug strip */}
        <m.div variants={heroMetaVariants} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {STATS.map((s) => (
            <Bug key={s.label} value={s.value} label={s.label} strong />
          ))}
        </m.div>
      </Shell>

      <Shell className="relative pb-8 pt-14 md:pt-20">
        {/* The short version */}
        <m.div variants={heroStrapVariants} className="border-t border-white/10 pt-8">
          <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FD3737]">The short version</p>
          <ol className="mt-5 grid gap-4 md:grid-cols-2 lg:gap-x-12 xl:grid-cols-3">
            {SHORT_VERSION.map((line, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm tabular-nums text-[#8A8A93]">{i + 1}</span>
                <span className="text-base md:text-[17px] leading-[1.6] text-[#E4E4E9]">{line}</span>
              </li>
            ))}
          </ol>
        </m.div>

        <m.div variants={heroMetaVariants} className="mt-12">
          <Ruler ticks={['01', '02', '03', '04', '05', '06', '07', '08', '09']} activeIndex={0} />
        </m.div>
      </Shell>

      <style>{`
        .ovn-orb {
          position: absolute;
          top: -22%;
          right: -12%;
          width: 46vmax;
          height: 46vmax;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(253, 55, 55, 0.12), transparent 70%);
          filter: blur(64px);
          pointer-events: none;
          will-change: transform;
          animation: ovn-orb-drift 26s ease-in-out infinite alternate;
        }
        @keyframes ovn-orb-drift {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(-6%, 5%, 0) scale(1.12);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ovn-orb {
            animation: none;
          }
        }
      `}</style>
    </m.section>
  );
}
