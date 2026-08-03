'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const PANELS = [
  {
    tag: 'The World',
    title: 'Ruins under jungle',
    body: 'Ancient ruins overgrown by Tulum jungle. Esoteric symbols. A world with a constant feeling of discovery — visual IP no dance artist owns.',
    image: '/images/brxce-grimm/texture.png',
  },
  {
    tag: 'The Mythology',
    title: 'Nostos & Reclamation',
    body: 'The Odyssey’s hero returning home. Reclaiming the childlike self the world scripted away. Every set is an invitation back.',
    image: '/images/brxce-grimm/closing.png',
  },
  {
    tag: 'The Craft',
    title: 'The 8-hour set',
    body: 'Villa afters that run all night and feel like an hour. Self-sufficient producer — no longer handcuffed to anyone’s timeline.',
    image: '/images/brxce-grimm/editorial.png',
  },
  {
    tag: 'The Wedge',
    title: 'House girlies first',
    body: '“If the women are there, the men will come.” The exact audience that dominates dating-reality TV — his target market, pre-assembled.',
    image: '/images/brxce-grimm/hero2.png',
  },
];

export default function Wilderness() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const track = root.current?.querySelector<HTMLElement>('.bx-track');
      if (!track) return;

      if (reduced) return; // panels flow vertically… still readable when unpinned? No — keep horizontal but allow native scroll on mobile instead.

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
        gsap.utils.toArray<HTMLElement>('.bx-panel-img').forEach((img) => {
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
    <section id="wilderness" ref={root} className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="flex min-h-[100dvh] flex-col justify-center py-20 md:py-0">
        <div className="mx-auto mb-10 w-full max-w-6xl px-6 md:mb-14 md:px-10">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-[#FD3737]">II</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Wilderness · Drag through the world</Kicker>
          </div>
        </div>

        <div className="bx-track flex flex-col gap-6 px-6 will-change-transform md:w-max md:flex-row md:gap-8 md:px-10">
          {/* Opening statement card */}
          <div className="flex w-full flex-shrink-0 flex-col justify-center md:w-[38vw]">
            <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
              He did not
              <br />
              wander <span className="text-[#FD3737]">lost.</span>
              <br />
              He built a world.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#B8B8C0]">
              Most artists at 1.4K listeners have a sound. Brxce has a mythology, a vocabulary,
              and a place. The wilderness years were the world-building years.
            </p>
          </div>

          {PANELS.map((p, i) => (
            <article
              key={i}
              className="group relative h-[62vh] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-[68vh] md:w-[44vw]"
            >
              <div
                className="bx-panel-img absolute inset-[-10%] bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
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

          {/* Tail card: the phrases */}
          <div className="flex w-full flex-shrink-0 flex-col justify-center md:w-[34vw] md:pr-16">
            <p className="font-display text-2xl leading-snug text-white md:text-3xl">
              “The Wound.
              <br />
              The Wilderness.
              <br />
              The Return.”
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#B8B8C0]">
              His words. Now the operating structure of this plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
