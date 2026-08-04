'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const PANELS = [
  {
    tag: 'The Tour Host',
    title: 'Katt Williams\' Golden Age',
    body: 'Currently hosting the biggest comedy tour in the country. Arena-sized audiences, nightly, for months. The exposure is enormous — the capture infrastructure to turn those fans into a owned audience is the next step.',
    image: '/images/red-grant/hero2.png',
  },
  {
    tag: 'The Morning Show',
    title: 'Red Grant in the Morning',
    body: 'A weekly live show simulcast across YouTube, Instagram, Facebook, Twitch, Kick, and X. The content engine runs every Monday at 10 AM — the opportunity is to systematize the output so each episode compounds across platforms instead of disappearing after the live stream ends.',
    image: '/images/red-grant/editorial.png',
  },
  {
    tag: 'The Political Run',
    title: 'DC Mayor to Council Run',
    body: 'A 2022 mayoral campaign that earned national press. A City Council run after that. A civic profile most comedians would kill for — and a story that belongs front and center in the brand, not separate from it.',
    image: '/images/red-grant/texture.png',
  },
  {
    tag: 'The Social Footprint',
    title: '5 platforms, no system',
    body: 'Instagram: 409K followers. Facebook: 78K likes. TikTok (@redgranttv): 26.8K. X (@rodneyredgrant): 26.4K. YouTube: 22.8K. The audience is real and substantial across every platform. His standup clips on other channels (KUSH Comedy, LOL Network, Netflix Is A Joke) have over 1.5 million combined views. The opportunity is to unify under one content calendar, cross-promote, and capture the audience that already exists but is scattered across accounts that do not feed each other. Facebook has two pages that should be consolidated.',
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
      <div className="flex min-h-[100dvh] flex-col justify-center py-10 pt-[70px] md:py-0 md:pt-[60px]">
        <div className="mx-auto mb-10 w-full max-w-6xl px-6 md:mb-14 md:px-10">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">II</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Opportunity · Where to scale</Kicker>
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
              Time to be found.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#B8B8C0]">
              The career is arena-scale. The digital footprint is real but unsystematized. Four opportunities to take what is already working and multiply it.
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
