'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const REGISTERS = [
  {
    name: 'The distance',
    read: 'The buyer is rarely in the building. Parents working out of state, grandparents a time zone away. The purchase is emotional and the failure is a loss, not an inconvenience.',
    quotes: [
      { text: 'I had purchased BallerTv because my husband works out of state and my sons grandparents live out of state. Well the magic link didn’t work.', src: 'BallerTV App Store review' },
      { text: 'She’s a freshman catcher playing at a university in Southern California, roughly 1242 miles away. Sadly, FLO is taking financial advantage of our uninterrupted devotion.', src: 'FloSports App Store review' },
      { text: 'My health isn’t allowing me to go watch my daughter so I paid the three month minimum to be able to watch the tournament. Once I paid a countdown clock started but no video ever began.', src: 'BallerTV App Store review' },
    ],
  },
  {
    name: 'The finite window',
    read: 'Youth and amateur careers end. Every missed stream is a game that never comes back, and the category keeps missing them.',
    quotes: [
      { text: 'We payed $120 for a game pass for our family to watch our child’s final game ever just for none of the live streams to work.', src: 'BallerTV App Store review' },
      { text: 'Thank goodness it’s our son’s age out year and we can soon be done with this.', src: 'FloSports App Store review' },
      { text: 'Thanks for losing the stream during an inning my son was pitching.', src: 'FloSports App Store review' },
    ],
  },
  {
    name: 'The trap',
    read: 'Billing is where the category has burned its trust. BallerTV settled a $1.925M California class action over auto-renewal disclosure. FloSports carries a BBB pattern-of-complaints alert with 97 complaints in three years.',
    quotes: [
      { text: 'Based on their audience, they know a large percentage are going to accidentally pay for a year.', src: 'BallerTV App Store review, titled It’s called a Dark Pattern' },
      { text: 'There is a reason they charge you for three months at the minimum.', src: 'BallerTV App Store review' },
      { text: 'I continued to be charged for approximately 5 additional months, totaling $100. My cancellation requests were either ignored, unsuccessful due to system issues, or not honored.', src: 'BBB complaint against FloSports, February 2026' },
    ],
  },
  {
    name: 'The craft',
    read: 'Auto-cameras and student crews keep missing the thing people paid to see. Sport-specific filming is a real moat, and viewers can tell.',
    quotes: [
      { text: 'The camera software is unable to ball track properly and was off the ball at least a 1/4 of the game.', src: 'BallerTV App Store review' },
      { text: 'They had iPhones on poles with cups on top to keep them from overheating.', src: 'r/youthsoccer, February 2026' },
      { text: 'Track and field already had enough going against it, and FloTrack has made it ten times worse.', src: 'FloSports App Store review' },
    ],
  },
];

export default function Voice() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set(['.ov-voice-in', '.ov-voice-word'], { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.ov-voice-in',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, immediateRender: false, stagger: 0.07, scrollTrigger: { trigger: root.current, start: 'top 68%' } }
      );
      gsap.fromTo(
        '.ov-voice-word',
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.02,
          immediateRender: false,
          scrollTrigger: { trigger: '.ov-voice-hero', start: 'top 75%', end: 'bottom 45%', scrub: true },
        }
      );
    },
    { scope: root }
  );

  const heroQuote =
    'Buggy, poorly organized, impossible to find what I want, laggy, but the only place to watch some of the sports that I like, so I keep coming back. As soon as someone else does a remotely better job I will be the first in line at any price.';

  return (
    <section id="voice" ref={root} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="ov-voice-in">
        <SceneHeader
          kicker="02 / Category Voice"
          title="What the category sounds like"
          strap="We mined App Store reviews, BBB complaint dockets, Reddit threads, and the niche sport trade press for how real customers talk about FloSports, BallerTV, and ESPN. The category's customers are not asking for cheaper. They are asking for someone who does the job."
        />
      </div>

      {/* Centerpiece quote */}
      <figure className="ov-voice-hero mx-auto mt-20 max-w-4xl">
        <blockquote className="text-center font-display text-2xl uppercase leading-[1.25] tracking-tight text-[#FAFAFA] md:text-4xl">
          {heroQuote.split(' ').map((w, i) => (
            <span key={i} className="ov-voice-word inline-block whitespace-pre">
              {w}{' '}
            </span>
          ))}
        </blockquote>
        <figcaption className="mt-8 text-center">
          <Mono>One star FloSports App Store review, titled There HAS to be a better way</Mono>
        </figcaption>
      </figure>

      <div className="ov-voice-in mx-auto mt-10 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-[#B8B8C0]">
          That is a paying customer announcing the switching cost is zero and the price objection is fake.
          The rest of the corpus sorts into four registers, and each one is a creative brief.
        </p>
      </div>

      {/* Registers */}
      <div className="mt-20 grid gap-5 md:grid-cols-2">
        {REGISTERS.map((r) => (
          <div key={r.name} className="ov-voice-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313] p-7 md:p-8">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
            <h3 className="font-display text-2xl uppercase text-[#FAFAFA]">{r.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#B8B8C0]">{r.read}</p>
            <div className="mt-6 flex flex-col gap-5">
              {r.quotes.map((q, i) => (
                <figure key={i} className="border-l-2 border-[#FD3737]/50 pl-4">
                  <blockquote className="text-[14px] leading-relaxed text-[#E4E4E9]">&ldquo;{q.text}&rdquo;</blockquote>
                  <figcaption className="mt-1.5">
                    <Mono className="text-[10px]">{q.src}</Mono>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="ov-voice-in mt-12 rounded-xl border border-white/[0.07] bg-[#111111] p-7 md:p-8">
        <p className="text-[15px] leading-relaxed text-[#B8B8C0]">
          The niche sport press states the law of this category plainly: people are not unwilling to pay for water polo,
          they are unwilling to pay for bad water polo coverage. Ninety percent of the sport&apos;s fans will never attend a
          match in person in a season. Streaming is the sport. That is exactly the job Overnght signed up for, and exactly
          the standard the incumbents keep failing.
        </p>
        <p className="mt-3 text-xs text-[#6E6E76]">Source language: Waterpolo 360, May 2025. Settlement figure: ballersettlement.com, Rickey v. Baller, Inc. BBB records pulled August 2026.</p>
      </div>
    </section>
  );
}
