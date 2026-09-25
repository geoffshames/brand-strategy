'use client';

import React from 'react';
import { Reveal } from './motion';
import { Shell, SectionHeader, Mono, Callout } from './ui';
import { LADDER, SAFETY, KPIS, RISKS, FIRST_30, PULL_DATE } from './data';

/* ------------------------------------------------------------------ */
/* 10 Product Ladder                                                   */
/* ------------------------------------------------------------------ */

export function SLadder() {
  return (
    <section id="s10-ladder" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="11"
          act="Plan"
          title="Product Ladder"
          strap="Five rungs from an affiliate code to a WGC fragrance. Each rung has a gate, and nothing gets made before the audience has proven it buys."
        />

        <div className="flex flex-col gap-6">
          {LADDER.map((r) => (
            <Reveal
              key={r.rung}
              className={`grid gap-8 border border-white/10 p-6 md:p-10 ${r.image ? 'lg:grid-cols-[1fr_380px]' : ''}`}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="font-display text-6xl leading-none text-[#FD3737] tabular-nums">{r.rung}</span>
                  <h3 className="font-display uppercase text-3xl md:text-4xl leading-[1] text-[#FAFAFA]">{r.name}</h3>
                </div>
                <div className="mt-5 inline-flex max-w-full flex-wrap items-baseline gap-2 border border-white/20 px-3 py-2">
                  <Mono className="text-[#FD3737]">Gate</Mono>
                  <span className="text-[15px] leading-[1.45] text-[#FAFAFA]">{r.gate}</span>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <Mono>What</Mono>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#E4E4E9]">{r.what}</p>
                  </div>
                  <div>
                    <Mono>Who holds what</Mono>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#E4E4E9]">{r.who}</p>
                  </div>
                  <div>
                    <Mono>Why this rung</Mono>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#E4E4E9]">{r.why}</p>
                  </div>
                </div>
              </div>
              {r.image ? (
                <figure>
                  <div className="aspect-[4/3] overflow-hidden border border-white/15">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.image} alt={`Example concept: ${r.name}`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A93]">
                    Example concept. Directional only.
                  </figcaption>
                </figure>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Callout
            label="On partners"
            headline="Any decant partner works"
            body={
              <p>
                Arvella appears here because the channel already features it and its public catalog shows the pieces this
                ladder needs: an affiliate program, teen-coded bundles and its own juice. The same terms can be put to any
                reputable decant shop. Negotiate above the standard rate once the code has order data behind it.
              </p>
            }
          />
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 11 Safety and Setup                                                 */
/* ------------------------------------------------------------------ */

export function SSafety() {
  return (
    <section id="s11-safety" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="12"
          act="Plan"
          title="Safety and Setup"
          strap="Ten rules for running a teen creator channel with a face, a following and eventually a product. Most take ten minutes to set up once."
        />
        <Reveal className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
          {SAFETY.map((s, i) => (
            <div key={s.title} className="bg-[#0A0A0A] p-5 md:p-6">
              <span className="font-mono text-sm tabular-nums text-[#FD3737]">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-3 font-display uppercase text-lg leading-[1.1] text-[#FAFAFA]">{s.title}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#E4E4E9]">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 12 Targets                                                          */
/* ------------------------------------------------------------------ */

export function STargets() {
  return (
    <section id="s12-targets" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader
          index="13"
          act="Plan"
          title="Targets"
          strap="Where the channel is today, where it should be by the end of December, and where it should be in September 2027."
        />
        <Reveal className="border border-white/10">
          <div className="hidden grid-cols-[1.4fr_0.7fr_0.2fr_0.7fr_0.2fr_0.8fr_1.4fr] gap-3 border-b border-white/10 bg-[#111111] px-5 py-3 lg:grid">
            {['Metric', 'Now', '', '90 days', '', '12 months', 'Context'].map((h, i) => (
              <Mono key={i}>{h}</Mono>
            ))}
          </div>
          <ul>
            {KPIS.map((k) => (
              <li
                key={k.metric}
                className="grid grid-cols-3 gap-x-3 gap-y-2 border-b border-white/10 px-5 py-5 last:border-b-0 lg:grid-cols-[1.4fr_0.7fr_0.2fr_0.7fr_0.2fr_0.8fr_1.4fr] lg:items-center"
              >
                <span className="col-span-3 font-display uppercase text-lg leading-tight text-[#FAFAFA] lg:col-span-1">{k.metric}</span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A93] lg:hidden">Now</span>
                  <span className="font-display text-2xl tabular-nums text-[#B8B8C0]">{k.now}</span>
                </span>
                <span className="hidden font-mono text-[#8A8A93] lg:block" aria-hidden="true">
                  &rarr;
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A93] lg:hidden">90 days</span>
                  <span className="font-display text-2xl tabular-nums text-[#FAFAFA]">{k.d90}</span>
                </span>
                <span className="hidden font-mono text-[#8A8A93] lg:block" aria-hidden="true">
                  &rarr;
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A93] lg:hidden">12 months</span>
                  <span className="font-display text-2xl tabular-nums text-[#FD3737]">{k.m12}</span>
                </span>
                <span className="col-span-3 text-sm leading-[1.5] text-[#B8B8C0] lg:col-span-1">{k.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="mt-4 max-w-[75ch] text-sm leading-[1.6] text-[#B8B8C0]">
          Baseline pulled {PULL_DATE}. Targets assume the face-and-voice shift and the series launch in October. Review
          every Sunday; reset the 12-month numbers at the end of Phase 2 with real data.
        </p>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 13 Risks                                                            */
/* ------------------------------------------------------------------ */

const LEVEL_TONE: Record<string, string> = {
  High: 'border-[#FD3737] text-[#FD3737]',
  Medium: 'border-white/50 text-[#FAFAFA]',
  Low: 'border-white/25 text-[#B8B8C0]',
};

export function SRisks() {
  return (
    <section id="s13-risks" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader index="14" act="Plan" title="Risks" strap="Six things that could slow the plan down, and what handles each one." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {RISKS.map((r) => (
            <Reveal key={r.title} className="flex flex-col border border-white/10 p-6">
              <span className={`self-start border px-2 py-1 font-mono uppercase text-xs tracking-[0.14em] ${LEVEL_TONE[r.level]}`}>
                Risk: {r.level}
              </span>
              <p className="mt-4 font-display uppercase text-xl leading-[1.1] text-[#FAFAFA]">{r.title}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#E4E4E9]">{r.body}</p>
              <div className="mt-auto border-t border-white/10 pt-4">
                <Mono className="text-[#FD3737]">Handled by</Mono>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#FAFAFA]">{r.fix}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 14 First 30 Days                                                    */
/* ------------------------------------------------------------------ */

export function SFirst30() {
  return (
    <section id="s14-first30" className="scroll-mt-16 border-t border-white/10 py-20 md:py-32">
      <Shell>
        <SectionHeader index="15" act="Plan" title="First 30 Days" strap="Ten moves, in order. Most of them happen in the first week." />
        <Reveal>
          <ol className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {FIRST_30.map((f, i) => (
              <li key={f} className="grid grid-cols-[48px_1fr] gap-3 bg-[#0A0A0A] p-5 md:p-6">
                <span className="font-display text-3xl tabular-nums leading-none text-[#FD3737]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-base leading-[1.55] text-[#FAFAFA]">{f}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Shell>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing + sources                                                   */
/* ------------------------------------------------------------------ */

const SOURCES: { label: string; href?: string }[] = [
  { label: 'YouTube: Partner Program eligibility and 2027 changes', href: 'https://support.google.com/youtube/answer/12843009' },
  { label: 'YouTube: Monetization policies and reused content', href: 'https://support.google.com/youtube/answer/1311392' },
  { label: 'YouTube: Fair use and credit', href: 'https://support.google.com/youtube/answer/9783148' },
  { label: 'YouTube: Paid product placements and endorsements', href: 'https://support.google.com/youtube/answer/154235' },
  { label: 'YouTube: Made for kids', href: 'https://support.google.com/youtube/answer/9528076' },
  { label: 'YouTube: Child safety policy', href: 'https://support.google.com/youtube/answer/2801999' },
  { label: 'YouTube: Shorts length', href: 'https://support.google.com/youtube/answer/15424877' },
  { label: 'Search Engine Journal: How the Shorts algorithm works', href: 'https://www.searchenginejournal.com/youtube-explains-how-shorts-algorithm-works/494953/' },
  { label: 'FTC: Disclosures 101 for social media influencers', href: 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers' },
  { label: 'Glossy: The year teen boys discovered beauty', href: 'https://www.glossy.co/beauty/the-year-teen-boys-discovered-beauty/' },
  { label: 'DECA: Piper Sandler Spring 2025 teen survey', href: 'https://www.decadirect.org/articles/deca-and-piper-sandler-complete-49th-semi-annual-survey' },
  { label: 'Reuters via US News: Gen Z and fragrance', href: 'https://money.usnews.com/investing/news/articles/2025-11-07/gen-z-shoppers-cant-get-enough-of-perfumes-coty-estee-are-benefiting' },
  { label: 'GCI Magazine: The 2024 to 2025 fragrance boom', href: 'https://www.gcimagazine.com/brands-products/fragrance-home/news/22933512/decoding-the-20242025-fragrance-boom-prestige-x-value' },
  { label: 'Spate: Fragrance trends decoded', href: 'https://www.spate.nyc/blog/fragrance-trends-decoded-what-consumer-search-and-social-data-reveals-about-scent-discovery' },
  { label: 'Spate: 2026 fragrance report', href: 'https://www.spate.nyc/reports/2026-fragrance-report-key-trends-brands-and-scents' },
  { label: 'Circana: Holiday fragrance trends', href: 'https://www.circana.com/post/unwrapping-fragrance-trends-what-to-expect-this-holiday-season' },
  { label: 'Pew Research Center: Teens, social media and AI chatbots 2025', href: 'https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/' },
  { label: 'USPS: Shipping perfume', href: 'https://news.usps.com/2025/12/03/when-it-comes-to-shipping-this-item-these-precautions-make-scents/' },
  { label: 'FDA: Modernization of Cosmetics Regulation Act (MoCRA)', href: 'https://www.fda.gov/cosmetics/cosmetics-laws-regulations/modernization-cosmetics-regulation-act-2022-mocra' },
  { label: 'MultiState: Laws protecting minor content creators', href: 'https://www.multistate.us/insider/2025/6/25/protecting-young-influencers-new-laws-protect-content-creators-that-are-minors' },
  { label: 'Kickstarter: Fragrance One Office for Men', href: 'https://www.kickstarter.com/projects/jeremyfragrance/fragrance-one-office-for-men' },
  { label: 'Fragrantica: Rasasi Hawas Sapphire', href: 'https://www.fragrantica.com/perfume/Rasasi/Hawas-Sapphire-136382.html' },
  { label: 'Qstomize: Custom perfume atomizer', href: 'https://www.qstomize.com/products/custom-perfume-atomizer' },
  { label: 'Arvella Fragrance and its affiliate program', href: 'https://arvellafragrance.com/' },
  { label: 'Perfumer & Flavorist: Oakcha x Paul Fino “That Girl” first-year sales' },
  { label: 'Channel, comment and creator data: YouTube public pages, pulled Sep 25, 2026' },
];

export function Closing() {
  return (
    <footer className="border-t border-white/10">
      <section className="relative overflow-hidden py-24 md:py-36">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(70% 60% at 50% 100%, rgba(253,55,55,0.12), transparent 70%)' }}
        />
        <Shell className="relative text-center">
          <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.01em] text-[#FAFAFA]">
            Ready to take control?
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-lg md:text-xl leading-[1.5] text-[#E4E4E9]">
            Questions on any part of this plan, or ready to start Phase 1, reach the Crowd Control team directly.
          </p>
          <a
            href="mailto:info@crowdcontroldigital.com?subject=WGCologne%20content%20strategy"
            className="mt-10 inline-flex items-center gap-4 bg-[#FD3737] px-8 py-4 font-display uppercase tracking-[0.14em] text-sm md:text-base text-white transition-colors hover:bg-[#e02e2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Hit us up
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Shell>
      </section>

      <Shell className="border-t border-white/10 py-12">
        <Mono className="text-[#FAFAFA]">Sources</Mono>
        <ul className="mt-5 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {SOURCES.map((s) => (
            <li key={s.label} className="text-sm leading-[1.5] text-[#B8B8C0]">
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-[#FAFAFA] hover:decoration-[#FD3737]">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[90ch] text-sm leading-[1.6] text-[#8A8A93]">
          YouTube rounds public subscriber and view counts, so competitor figures are approximate. Face-on-camera status was
          checked from each channel’s recent thumbnails. Example frames and product concepts on this page are AI-generated
          illustrations, labeled as directional.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" className="h-6 w-auto" />
          <p className="font-mono uppercase text-xs tracking-[0.16em] text-[#B8B8C0]">
            Prepared by Crowd Control Digital / Sep 2026 / info@crowdcontroldigital.com
          </p>
        </div>
      </Shell>
    </footer>
  );
}
