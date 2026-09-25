'use client';

import React from 'react';
import { m, useHeroEntrance, heroVariants, heroTitleVariants, heroStrapVariants, heroMetaVariants } from './motion';
import { Shell, Bug } from './ui';
import { HERO_STATS, SHORT_VERSION } from './data';

export default function Hero({ onJump }: { onJump: (id: string) => void }) {
  const phase = useHeroEntrance();

  return (
    <m.section
      className="relative flex min-h-[92svh] flex-col justify-between pt-24 md:pt-28"
      variants={heroVariants}
      initial={false}
      animate={phase}
      aria-label="Overview"
    >
      {/* Collection still life, right-weighted, fading into the page */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[78svh] md:h-[88svh]" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/wgcologne/hero.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-45 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]" />
      </div>
      <div className="wgc-orb" aria-hidden="true" />

      <Shell className="relative">
        <m.p
          variants={heroMetaVariants}
          className="flex flex-wrap items-center gap-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0]"
        >
          <span className="inline-block h-1.5 w-1.5 bg-[#FD3737]" aria-hidden="true" />
          Crowd Control Digital / Content Strategy / Prepared for WGCologne / Sep 2026
        </m.p>

        <m.h1 variants={heroTitleVariants} className="mt-10 font-display uppercase leading-[0.92] tracking-[-0.015em]">
          <span className="block text-[clamp(3rem,9.5vw,8.25rem)] text-[#FAFAFA]">WGCologne</span>
          <span
            className="block text-[clamp(2rem,6vw,5.25rem)] text-transparent"
            style={{ WebkitTextStroke: '1px rgba(250,250,250,0.85)' }}
          >
            Content Strategy
          </span>
        </m.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <m.p
            variants={heroStrapVariants}
            className="max-w-[54ch] text-lg md:text-xl lg:text-[22px] leading-[1.5] text-[#E4E4E9] lg:col-span-7"
          >
            Twenty-three days, forty-one Shorts, 85K views. The channel has already found its lane: two teen-life POVs
            pulled 37% of every view it has ever had. This plan turns that lane into named series, puts a face and a
            voice on it, and maps the path from a shelf of bottles to a product with the WGC name on it.
          </m.p>
          <m.div variants={heroMetaVariants} className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:justify-end">
            <button
              onClick={() => onJump('s02-content')}
              className="border border-white/25 bg-[#0A0A0A]/60 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              Content analysis / 02
            </button>
            <button
              onClick={() => onJump('s08-series')}
              className="border border-white/25 bg-[#0A0A0A]/60 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              The series / 08
            </button>
            <button
              onClick={() => onJump('s10-ladder')}
              className="border border-white/25 bg-[#0A0A0A]/60 px-4 py-3 font-mono uppercase text-xs md:text-[13px] tracking-[0.14em] text-[#FAFAFA] transition-colors hover:border-[#FD3737] hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              Product ladder / 10
            </button>
          </m.div>
        </div>

        <m.div variants={heroMetaVariants} className="mt-12 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="bg-[#0A0A0A]/70">
              <Bug value={s.value} label={s.label} strong />
            </div>
          ))}
        </m.div>
      </Shell>

      <Shell className="relative pb-8 pt-14 md:pt-20">
        <m.div variants={heroStrapVariants} className="border-t border-white/10 pt-8">
          <p className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FD3737]">The short version</p>
          <ol className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-x-12 xl:grid-cols-3">
            {SHORT_VERSION.map((line, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm tabular-nums text-[#8A8A93]">{i + 1}</span>
                <span className="text-base md:text-[17px] leading-[1.6] text-[#E4E4E9]">{line}</span>
              </li>
            ))}
          </ol>
        </m.div>
      </Shell>

      <style>{`
        .wgc-orb {
          position: absolute;
          top: -22%;
          right: -12%;
          width: 46vmax;
          height: 46vmax;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(253, 55, 55, 0.10), transparent 70%);
          filter: blur(64px);
          pointer-events: none;
          will-change: transform;
          animation: wgc-orb-drift 26s ease-in-out infinite alternate;
        }
        @keyframes wgc-orb-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(-6%, 5%, 0) scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wgc-orb { animation: none; }
        }
      `}</style>
    </m.section>
  );
}
