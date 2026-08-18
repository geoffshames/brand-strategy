'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

const PILLARS = [
  {
    id: 'P1',
    name: 'The moment engine',
    thesis:
      'Overnght sits on more live sporting moments per dollar of rights than any platform in the category, and almost none of them become content. The single highest-leverage move available is turning clip production into a system with a service-level agreement, not a mood.',
    moves: [
      'Every streamed event yields three to five payoff-first clips within 24 hours, cut to the five laws',
      'Athlete name in the title, always. People share people, not platforms',
      'Scorebug burned in from frame one, brand card after the peak, replay as the closer',
      'Tag every featured athlete and federation. A clipped athlete is a distribution node with a stronger graph than the brand account',
      'The archive counts: every athlete who transfers up or medals makes old footage new content',
    ],
  },
  {
    id: 'P2',
    name: 'Trust is the offer',
    thesis:
      'The category has trained its customers to expect billing traps, broken share links, and streams that die during the only game that mattered. BallerTV settled a $1.925M class action over auto-renewal. FloSports carries a pattern-of-complaints alert. Overnght can convert the category\'s record into claims only it is willing to make.',
    moves: [
      'Month to month, cancel in one click, no multi-month minimum. Say it in the ads, not the footnotes',
      'A stream guarantee: if a covered event fails to air, the month is on us. Cheap to underwrite at niche concurrency, priceless as a claim',
      'Household access that actually works, sold as the point rather than a limit. The buyer is a family, not a login',
      'Never lead with cheap. The corpus is explicit: customers will pay any price for coverage that works. Lead with the job, not the discount',
    ],
  },
  {
    id: 'P3',
    name: 'The distance audience',
    thesis:
      'The most emotionally loaded language in the entire listening corpus belongs to people watching from far away: the parent working out of state, the grandparent 1,242 miles from the pool deck, the alum who moved. Their season is finite and every missed game is unrecoverable. Nobody in the category speaks to them on purpose.',
    moves: [
      'Paid targeting built around family and fan graphs of rostered sports, not lookalikes of sports fans generally',
      'Creative in the second person: be there from anywhere. The payoff shot is a phone on a kitchen counter, not a jumbotron',
      'European club water polo rights point the same register at diaspora fans across the Americas',
      'Recruiting film and rewatch framing for the athlete side of the same household',
    ],
  },
  {
    id: 'P4',
    name: 'Own the empty auction',
    thesis:
      'FloSports runs zero Meta ads. BallerTV advertises hardware against its own subscription. ESPN buys reach for mega-rights. Direct response for niche sport subscriptions is an uncontested auction, and Overnght has a rights calendar that doubles as a media calendar.',
    moves: [
      'Event-synced flights: every major rights window gets a seven to ten day paid burst built from that event\'s own moment clips',
      'The World Rowing Championships in Amsterdam, August 24 to 30, is the first live lab with US rights in hand',
      'IFL 2027, the first exclusive National Championship, is the twelve-month buildup target',
      'Retarget clip viewers with the trust claims. Moment opens the door, trust closes the account',
    ],
  },
];

export default function Strategy() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-str-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>('.ov-str-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 80%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="strategy" ref={root} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="ov-str-in">
        <SceneHeader
          kicker="06 / Creative Strategy"
          title="Four pillars"
          strap="Everything above reduces to four bets. Each one is grounded in a receipt from the research: a clip that won, a quote that repeated, an auction that sat empty."
        />
      </div>

      <div className="mt-16 flex flex-col gap-6">
        {PILLARS.map((p) => (
          <div key={p.id} className="ov-str-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313]">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
            <div className="grid gap-8 p-7 md:grid-cols-[minmax(280px,1fr)_1.35fr] md:p-10">
              <div>
                <Mono className="text-[#FD3737]">{p.id}</Mono>
                <h3 className="mt-2 font-display text-3xl uppercase leading-[1.02] text-[#FAFAFA] md:text-4xl">{p.name}</h3>
                <p className="mt-5 text-[15px] leading-relaxed text-[#B8B8C0]">{p.thesis}</p>
              </div>
              <div className="flex flex-col justify-center gap-3.5 border-t border-white/[0.06] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                {p.moves.map((m, i) => (
                  <div key={i} className="grid grid-cols-[18px_1fr] gap-3.5">
                    <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-[#FD3737]" aria-hidden="true" />
                    <p className="text-[15px] leading-relaxed text-[#E4E4E9]">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
