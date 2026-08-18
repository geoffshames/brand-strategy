'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const COMPETITORS = [
  {
    name: 'FloSports',
    price: '$29.99/mo standard, $150/yr',
    status: 'Zero active Meta ads',
    read: 'A platform claiming 1M+ subscribers and 50,000 live events a year is running no paid social acquisition on Meta at all. Its growth engine is rights lockup plus search intent, not creative.',
  },
  {
    name: 'BallerTV',
    price: 'From $44.85 per 3 months, no single month',
    status: 'Ad spend moved to hardware',
    read: 'The only active ads from the BallerTV company are for BallerCam, the $399 camera, with the hook JUST $399, NO SUBSCRIPTION. Their own paid creative is now selling against the subscription model.',
  },
  {
    name: 'ESPN',
    price: 'ESPN Select $12.99/mo, Unlimited $29.99/mo',
    status: 'Reach ads for mega-rights only',
    read: 'Active creative is LALIGA, WWE, FedExCup, MLB.TV and app-install spots. Big-rights reach buying. Nothing direct response, and nothing that speaks to a niche sport fan by name.',
  },
];

export default function PaidLane() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-paid-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.ov-paid-in',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, stagger: 0.09, scrollTrigger: { trigger: root.current, start: 'top 68%' } }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative border-y border-white/[0.06] bg-[#0D0D0D] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="ov-paid-in">
          <SceneHeader
            kicker="03 / The Paid Lane"
            title="Nobody is running ads"
            strap="We pulled the live Meta Ad Library for all three competitors in August 2026. The finding is not which ads are winning. The finding is that the direct response lane for niche sports streaming is empty."
          />
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {COMPETITORS.map((c) => (
            <div key={c.name} className="ov-paid-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313] p-7 md:p-8">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl uppercase text-[#FAFAFA]">{c.name}</h3>
              </div>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A8A93]">{c.price}</p>
              <p className="mt-6 inline-block rounded-full border border-[#FD3737]/40 bg-[#FD3737]/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF7B7B]">
                {c.status}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#B8B8C0]">{c.read}</p>
            </div>
          ))}
        </div>

        <div className="ov-paid-in mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-[#FD3737]/25 bg-[#FD3737]/[0.06] p-7 md:p-8">
            <h3 className="font-display text-xl uppercase text-[#FAFAFA]">What an empty lane is worth</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#E4E4E9]">
              When no competitor is bidding on the same audience with the same message, paid social behaves like a
              category monopoly: cheaper reach, no creative arms race, and every impression compounds brand recall
              that nobody is contesting. Overnght can be the only streaming service a water polo parent, a rowing
              alum, or an IFL fan ever sees an ad from. First mover here is not a slogan. It is an auction position.
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-[#131313] p-7 md:p-8">
            <Mono className="text-[#FD3737]">Timing</Mono>
            <p className="mt-3 text-[15px] leading-relaxed text-[#B8B8C0]">
              The World Rowing Championships open in Amsterdam on August 24 with Overnght holding US rights.
              The first flight has a reason to exist this week.
            </p>
          </div>
        </div>

        <p className="ov-paid-in mt-8 text-xs text-[#6E6E76]">Meta Ad Library, United States, pulled August 17, 2026. Pricing from published rate pages at the same date.</p>
      </div>
    </section>
  );
}
