'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const PANELS = [
  {
    tag: 'The Tour Host',
    title: 'Katt Williams\' Golden Age',
    body: 'Currently hosting the biggest comedy tour in the country. Nightly exposure to arena-sized audiences — zero owned capture from any of it. Every show is a missed chance to turn a fan into a follower.',
    image: '/images/red-grant/hero2.png',
  },
  {
    tag: 'The Morning Show',
    title: 'Red Grant in the Morning',
    body: 'A weekly live show across YouTube, Instagram, Facebook, Twitch, and Kick. Multiple platforms, inconsistent formatting, 22.8K YouTube subscribers. The content engine runs — it just never compounds.',
    image: '/images/red-grant/editorial.png',
  },
  {
    tag: 'The Political Run',
    title: 'DC Mayor to Council Run',
    body: 'A 2022 mayoral campaign that earned national press. A City Council run after that. A civic profile most comedians would kill for — and a story that has never been woven into the brand.',
    image: '/images/red-grant/texture.png',
  },
  {
    tag: 'The Social Gap',
    title: '78K Facebook likes',
    body: 'Facebook is his strongest platform at 78K likes. Instagram has 409K followers but posting is inconsistent. TikTok is split across multiple accounts — @redgranttv, @redgrant, and others — with no single hub. The show simulcasts on five platforms with no unified format or repurposing. The audience is there — it is scattered across accounts that do not cross-promote, and no single property aggregates it.',
    image: '/images/red-grant/data.png',
  },
];

export default function BlindSpot() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const track = root.current?.querySelector<HTMLElement>('.rg-track');
      if (!track) return;

      if (reduced) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const distance = () => track.scrollWidth - window.innerWidth;

        const scrollTween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        // Per-panel image parallax inside the horizontal run
        gsap.utils.toArray<HTMLElement>('.rg-panel-img').forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: img,
                containerAnimation: scrollTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="blindspot" ref={root} className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="flex min-h-[100dvh] flex-col justify-center py-10 md:py-0">
        <div className="mx-auto mb-10 w-full max-w-6xl px-6 md:mb-14 md:px-10">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">II</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Blind Spot · Drag through the gaps</Kicker>
          </div>
        </div>

        <div className="rg-track flex flex-col gap-6 px-6 will-change-transform md:w-max md:flex-row md:gap-8 md:px-10">
          {/* Opening statement card */}
          <div className="flex w-full flex-shrink-0 flex-col justify-center md:w-[38vw]">
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
              He is
              <br />
              everywhere<span className="text-[#FD3737]">.</span>
              <br />
              And invisible.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#B8B8C0]">
              The career is arena-scale. The digital footprint is a whisper. Four blind spots where
              millions of dollars in audience equity is leaking away every year.
            </p>
          </div>

          {PANELS.map((p, i) => (
            <article
              key={i}
              className="group relative h-[50vh] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-[68vh] md:w-[44vw]"
            >
              <div
                className="rg-panel-img absolute inset-[-10%] bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FD3737]">{p.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#E4E4E9]/90">{p.body}</p>
              </div>
              <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.25em] text-white/50">
                0{i + 1} / 04
              </span>
            </article>
          ))}

          {/* Tail card */}
          <div className="flex w-full flex-shrink-0 flex-col justify-center md:w-[34vw] md:pr-16">
            <p className="font-display text-2xl leading-snug text-white md:text-3xl">
              "The grind.
              <br />
              The blind spot.
              <br />
              The conversion."
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#B8B8C0]">
              The operating diagnosis. Now the structure of the fix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
