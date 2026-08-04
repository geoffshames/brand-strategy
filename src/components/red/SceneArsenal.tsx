'use client';

import { useRef } from 'react';
import { gsap, useGSAP, Kicker } from './motion';

const ARSENAL = [
  {
    title: '30-Year Stage Veteran',
    desc: 'Apollo Theatre 1996 to sold-out arenas. A touring career spanning three decades — the kind of stage time that cannot be faked, bought, or shortcut.',
  },
  {
    title: '11 Film Appearances',
    desc: 'American Hustle, First Sunday, Family Reunion. A screen résumé that most comedians never build — and a credibility lane that compounds with every credit.',
  },
  {
    title: 'Showtime + Comedy Central Specials',
    desc: 'Network-level specials on the two platforms that define comedy prestige. The craft has been validated at the highest level — repeatedly.',
  },
  {
    title: 'Production Company',
    desc: 'MOVIEOS partnership with Lionsgate. Seven Viacom shows produced. He does not just perform for the machine — he has operated inside it.',
  },
  {
    title: 'DC Political Career',
    desc: 'A 2022 mayoral campaign that earned national press. A City Council run after that. A civic profile no other comedian in America can claim.',
  },
  {
    title: 'Nonprofit Founder',
    desc: 'Beyond Your Block Foundation. Golf Beef charity events. Community work that is real, sustained, and story-ready — a brand differentiator hiding in plain sight.',
  },
];

export default function Arsenal() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set(
          ['.rg-ars-line', '.rg-ars-quote', '.rg-ars-reveal', '.rg-ars-grid', '.rg-ars-card'],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      // Master pinned sequence — shorter on mobile to avoid dead space
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=220%',
            pin: true,
            scrub: 0.5,
          },
        });

        tl.fromTo('.rg-ars-line', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
          .to('.rg-ars-line', { opacity: 0, y: -40, duration: 0.8 }, '+=0.6')
          .fromTo('.rg-ars-quote', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1 })
          .to('.rg-ars-quote', { opacity: 0, y: -40, duration: 0.8 }, '+=0.8')
          .fromTo('.rg-ars-reveal', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.2 })
          .fromTo('.rg-ars-grid', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, immediateRender: false }, '<0.2')
          .fromTo(
            '.rg-ars-card',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, immediateRender: false },
            '<0.15'
          );
      });

      mm.add('(max-width: 767px)', () => {
        // Mobile: sequential fade — beat 1, then beat 2, then reveal + cards
        // Beat 1 fades in, then out
        gsap.fromTo('.rg-ars-line', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: '.rg-ars-line', start: 'top 80%' } });
        gsap.to('.rg-ars-line', { opacity: 0, y: -30, duration: 0.5, scrollTrigger: { trigger: '.rg-ars-line', start: 'bottom 60%' } });

        // Beat 2 fades in after beat 1, then out
        gsap.fromTo('.rg-ars-quote', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: '.rg-ars-quote', start: 'top 75%' } });
        gsap.to('.rg-ars-quote', { opacity: 0, y: -30, duration: 0.5, scrollTrigger: { trigger: '.rg-ars-quote', start: 'bottom 55%' } });

        // Beat 3 reveal
        gsap.fromTo('.rg-ars-reveal', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.7, scrollTrigger: { trigger: '.rg-ars-reveal', start: 'top 70%' } });
        gsap.fromTo('.rg-ars-grid', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: '.rg-ars-grid', start: 'top 80%' } });
        gsap.utils.toArray<HTMLElement>('.rg-ars-card').forEach((card, i) => {
          gsap.fromTo(card, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, delay: i * 0.05, scrollTrigger: { trigger: card, start: 'top 88%' } });
        });
      });

      // Ring pulse expands as you keep scrolling
      gsap.utils.toArray<HTMLElement>('.rg-ars-ring').forEach((ring) => {
        gsap.fromTo(
          ring,
          { scale: 0.4, opacity: 0.9 },
          {
            scale: 2.4,
            opacity: 0,
            duration: 1.6,
            ease: 'none',
            scrollTrigger: {
              trigger: '.rg-ars-reveal',
              start: 'top center',
              end: 'bottom center',
              scrub: 0.4,
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="arsenal" ref={root} className="relative overflow-hidden">
      <div className="relative flex min-h-[100dvh] items-center justify-center">
        {/* bg */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/red-grant/hero2.png)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(253,55,55,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

        {/* expanding rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="rg-ars-ring absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FD3737]/60 opacity-0"
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center md:px-10">
          <div className="mb-6 flex items-center justify-center gap-4 md:mb-12">
            <span className="font-display text-sm text-[#FD3737]">III</span>
            <span className="h-px w-12 bg-[#FD3737]/60" />
            <Kicker>The Arsenal</Kicker>
          </div>

          {/* Stacked beats — absolutely centered over each other */}
          <div className="relative grid min-h-[30vh] place-items-center md:min-h-[42vh]">
            {/* Beat 1 */}
            <div className="rg-ars-line col-start-1 row-start-1 opacity-0">
              <p className="mx-auto max-w-3xl font-display text-3xl leading-[1.15] text-white md:text-5xl">
                Most comedians have a bit.
                <br className="hidden md:block" /> Red Grant has an arsenal.
              </p>
            </div>

            {/* Beat 2 — the quote */}
            <figure className="rg-ars-quote col-start-1 row-start-1 opacity-0">
              <blockquote className="mx-auto max-w-3xl font-display text-3xl leading-[1.15] text-white md:text-5xl">
                "He's doing things that other comedians
                <br />
                <span className="text-[#FD3737]">haven't done since Robert Townsend."</span>
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#B8B8C0]">
                — Industry observer
              </figcaption>
            </figure>

            {/* Beat 3 — the reveal */}
            <div className="rg-ars-reveal col-start-1 row-start-1 opacity-0">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#B8B8C0] md:text-sm">Six weapons · One comedian</p>
              <h2 className="mt-4 font-display text-[11vw] leading-[0.9] text-white md:text-[7rem]">
                THE
                <br />
                <span className="text-[#FD3737]">ARSENAL</span>
              </h2>
            </div>
          </div>

          {/* Arsenal grid (arrives with reveal, stays) */}
          <div className="rg-ars-grid mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 opacity-0 md:mt-12 md:grid-cols-3 md:gap-5">
            {ARSENAL.map((item, i) => (
              <div
                key={i}
                className="rg-ars-card rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0E0E0E] p-6 text-left opacity-0 md:p-7"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#FD3737]">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-white md:text-2xl">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#B8B8C0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
