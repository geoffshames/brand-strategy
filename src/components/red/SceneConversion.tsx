'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const PILLARS = [
  {
    n: '01',
    title: 'Unify the Brand',
    thesis:
      'Red Grant has a verified presence on every major platform — Instagram (409K), Facebook (78K), TikTok (26.8K), X (26.4K), YouTube (22.8K). The audience is already there. The opportunity is to unify them under one content calendar, one visual system, and one cross-promotion strategy so every post on every platform feeds the others. Facebook currently has two pages that should be consolidated.',
    moves: [
      'Consolidate Facebook pages (red.grant.129 + redgrantlaughs) into one hub',
      'Unified visual identity and content calendar across all five platforms',
      'Cross-promotion system so each platform feeds the others',
    ],
  },
  {
    n: '02',
    title: 'Build the Content Engine',
    thesis:
      'Transform the weekly show and touring footage into a systematic short-form content pipeline. 48 weeks on the road is 48 weeks of raw material. The content already exists — the system to distribute it daily across platforms is what we build.',
    moves: [
      'Daily short-form cut from tour footage',
      'Show clips reformatted natively for each platform',
      'Skit series with recurring characters',
    ],
  },
  {
    n: '03',
    title: 'Own the Audience',
    thesis:
      'Red already captures email on tour through a custom-built system. That system works but is not portable, not integrated with social, and does not feed back into content or show marketing. Port it to Laylo or an equivalent owned-audience platform — one that captures from the stage, the stream, and the social post, then segments and activates. Every comedian who built a digital empire started here, and Red has more raw audience access than any of them did.',
    moves: [
      'Port existing tour email capture to Laylo or equivalent platform',
      'Capture at every live show, stream, and social post through one system',
      '50K+ owned contacts in 12 months, segmented and activatable',
    ],
  },
  {
    n: '04',
    title: 'Activate the Civic Story',
    thesis:
      'The DC mayor run, Beyond Your Block, the political profile — this is a differentiator no other comedian has. It is a story that has never been woven into the brand. Woven in, it becomes a content vertical and a credibility moat.',
    moves: [
      'Documentary-style content on civic work',
      'Beyond Your Block as branded content series',
      'Political comedy as a recurring content vertical',
    ],
  },
  {
    n: '05',
    title: 'Scale the Live Business',
    thesis:
      'From club dates to theater tours to potential special taping. The touring base is real — systematize it. The 48-weeks-a-year work ethic becomes the engine that funds and feeds everything else.',
    moves: [
      'Theater-level routing and venue strategy',
      'Special taping strategy with streaming conversations',
      'Festival pipeline and branded comedy tours',
    ],
  },
];

export default function Conversion() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;

      const cards = gsap.utils.toArray<HTMLElement>('.rg-pillar');

      cards.forEach((card, i) => {
        // Each card scales/darkens slightly as the next one covers it
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.45,
            ease: 'none',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top+=120',
              scrub: true,
            },
          });
        }
      });
    },
    { scope: root }
  );

  return (
    <section id="conversion" ref={root} className="relative py-20 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl md:mb-24">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">IV</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Conversion · Five pillars</Kicker>
          </div>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Turn the résumé
            <br />
            into the machine<span className="text-[#FD3737]">.</span>
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {PILLARS.map((p, i) => (
            <article
              key={i}
              className="rg-pillar sticky overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0E0E0E] will-change-transform"
              style={{ top: `calc(88px + ${i * 14}px)` }}
            >
              <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-[auto_1fr_1fr] md:gap-12 md:p-12">
                <span className="font-display text-4xl text-[#FD3737]/90 md:text-7xl">{p.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-white md:text-4xl">{p.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#B8B8C0] md:text-base">{p.thesis}</p>
                </div>
                <ul className="space-y-3 self-center border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  {p.moves.map((m, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#E4E4E9] md:text-[15px]">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FD3737]" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
