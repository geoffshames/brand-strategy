'use client';

import { useRef, useState } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const CASES = [
  {
    name: 'Karlous Miller',
    from: 'Wild \'N Out',
    proof: '$1.5–3M net worth',
    detail:
      'Wild \'N Out cast member turned the 85 South Show podcast into a massively owned platform with millions of daily viewers and a touring empire. The podcast became the asset; the TV show became the top-of-funnel. Every comic who builds a digital empire starts by owning the platform.',
  },
  {
    name: 'Kountry Wayne',
    from: 'Digital sketches',
    proof: 'Live Nation tour · Netflix is a Joke',
    detail:
      'Turned daily digital sketches into millions of daily views, a Live Nation touring deal, and a Netflix is a Joke Festival headline. The content engine came first — the institutional deals followed. He never waited for permission.',
  },
  {
    name: 'DeRay Davis',
    from: 'Standup to social',
    proof: 'Headlining theaters',
    detail:
      'Built from standup through a growing social media presence into Wild \'N Out and now headlining theaters. The arc is the same: stage credibility becomes social scale, social scale becomes institutional validation, validation becomes a larger live business. Every rung climbed by owning the audience at each step.',
  },
  {
    name: 'D\'Lai',
    from: 'HBO Def Comedy Jam',
    proof: 'Hashtag-driven brand',
    detail:
      'HBO Def Comedy Jam credit turned into the "D\'Lai Show" weekly broadcast, then a merchandising empire built on hashtag-driven brand recognition. He engineered a recurring content property from a single credit, then monetized the recurring property into a product line.',
  },
];

export default function Precedent() {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set(['.rg-prec-head', '.rg-prec-row'], { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.rg-prec-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 70%' } }
      );
      gsap.utils.toArray<HTMLElement>('.rg-prec-row').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE_OUT, delay: i * 0.09, scrollTrigger: { trigger: el, start: 'top 88%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#0D0D0D] py-20 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rg-prec-head mb-12 max-w-3xl md:mb-20">
          <Kicker className="mb-5">The Precedent</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Comedians who built
            <br />
            digital empires<span className="text-[#FD3737]">.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:mt-6 md:text-lg">
            Every one of these comedians started with less stage résumé than Red Grant — and every one
            built an owned platform that turned their career into a compounding asset.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          {CASES.map((c, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(i)}
                onMouseEnter={() => setOpen(i)}
                className={`rg-prec-row block w-full border-b border-white/10 text-left transition-colors duration-500 last:border-b-0 ${
                  isOpen ? 'bg-[#141414]' : 'bg-[#0F0F0F] hover:bg-[#121212]'
                }`}
              >
                <div className="flex flex-col gap-2 px-6 py-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:px-10 md:py-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#FD3737]">0{i + 1}</span>
                    <h3 className={`font-display text-2xl transition-colors duration-500 md:text-4xl ${isOpen ? 'text-white' : 'text-[#B8B8C0]'}`}>
                      {c.name}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B8B8C0] md:text-center">{c.from}</p>
                  <p className={`font-display text-lg transition-colors duration-500 md:text-right md:text-2xl ${isOpen ? 'text-[#FD3737]' : 'text-[#B8B8C0]/60'}`}>
                    {c.proof}
                  </p>
                </div>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="max-w-3xl px-6 pb-7 text-sm leading-relaxed text-[#E4E4E9]/85 md:px-10 md:pl-[4.5rem] md:text-base">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-center font-display text-lg leading-snug text-white md:mt-10 md:text-2xl">
          Every one built an owned platform. Red Grant has the résumé.
          <br />
          <span className="text-[#FD3737]">He doesn't have the platform — yet.</span>
        </p>
      </div>
    </section>
  );
}
