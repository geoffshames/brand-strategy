'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const FINDINGS = [
  {
    platform: 'TikTok',
    metric: '219.6K plays · 16.7K likes',
    title: 'Commentary on trending topics',
    finding: 'The Cam\'ron/Katt Williams clip is his top performer. Direct-to-camera commentary on cultural moments outperforms everything else. This format should be systematized.',
  },
  {
    platform: 'TikTok',
    metric: '170.3K plays · 7.5K likes',
    title: 'The father-daughter skit',
    finding: 'Scripted multi-character skits with the "Family Man" dynamic are a proven viral formula. High production quality, relatable family humor, clean editing. This is an IP property that should be developed into a series.',
  },
  {
    platform: 'YouTube',
    metric: '561K views · 2.2K likes',
    title: 'Standup on other channels',
    finding: 'His content on KUSH Comedy, LOL Network, and Netflix Is A Joke has 1.5M+ combined views. The demand is proven. The problem: those views are owned by other channels, not captured by Red Grant.',
  },
  {
    platform: 'YouTube',
    metric: '294K views · 4.9K likes',
    title: 'Relatable relationship humor',
    finding: 'The "Kids Are Annoying" clip on LOL Network is his second-highest performer. Observational humor about family and relationships resonates broadly across demographics.',
  },
];

const FORMATS = [
  { format: 'Standup clips', count: '6 of 9', note: 'The core product. Professional, high-energy, proven on stage. Best when re-edited with captions and text overlays for social.' },
  { format: 'Scripted skits', count: '2 of 9', note: 'The top performers on social. "Family Man" series with father-daughter dynamic. High production, relatable, shareable.' },
  { format: 'Commentary', count: '1 of 9', note: 'The highest engagement per view. Direct-to-camera on trending topics. Should be a weekly content vertical.' },
];

export default function ContentIntel() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.rg-ci-head, .rg-ci-finding, .rg-ci-format', { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        '.rg-ci-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 70%' } }
      );

      gsap.utils.toArray<HTMLElement>('.rg-ci-finding').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE_OUT, delay: i * 0.08, scrollTrigger: { trigger: el, start: 'top 88%' } }
        );
      });

      gsap.utils.toArray<HTMLElement>('.rg-ci-format').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7, ease: EASE_OUT, delay: i * 0.1, scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#0D0D0D] py-20 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rg-ci-head mb-12 max-w-3xl md:mb-20">
          <Kicker className="mb-5">Content Intelligence · Pegasus 1.5 Analysis</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            What the top
            <br />
            performers <span className="text-[#FD3737]">reveal.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:text-lg">
            Nine top-performing videos across YouTube and TikTok analyzed with TwelveLabs Pegasus 1.5.
            The data reveals exactly which formats convert and why.
          </p>
        </div>

        {/* Top findings */}
        <div className="space-y-4 md:space-y-5">
          {FINDINGS.map((f, i) => (
            <div
              key={i}
              className="rg-ci-finding grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0E0E0E] p-5 md:grid-cols-[120px_180px_1fr] md:gap-6 md:p-7"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FD3737]">{f.platform}</span>
              <p className="font-display text-lg text-white md:text-xl">{f.metric}</p>
              <div>
                <h3 className="font-display text-base text-white md:text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B8B8C0]">{f.finding}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Format breakdown */}
        <div className="mt-16 md:mt-20">
          <Kicker className="mb-8">Format breakdown</Kicker>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {FORMATS.map((f, i) => (
              <div
                key={i}
                className="rg-ci-format rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 md:p-7"
              >
                <p className="font-display text-2xl text-white md:text-3xl">{f.format}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">{f.count}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#B8B8C0]">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
