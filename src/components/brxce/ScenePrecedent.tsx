'use client';

import { useRef, useState } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const CASES = [
  {
    name: 'Wes Nelson',
    from: 'Love Island',
    proof: '#3 UK single',
    detail:
      'Dating-reality romantic lead → debut single “See Nobody” charts #3 in the UK. The pipeline works — but he had no world and no funnel to compound it.',
  },
  {
    name: 'Harry Jowsey',
    from: 'Too Hot to Handle',
    proof: '5M followers · Netflix spin-off',
    detail:
      'Converted the arc into ~5M Instagram followers, a charting podcast, a book, and his own show. The owned-asset playbook — with the music lane left wide open.',
  },
  {
    name: 'Paris Hilton',
    from: 'Celebrity',
    proof: '$1M/gig DJ economics',
    detail:
      'Cultural gravity cashed out as headline festival DJ bookings for a decade. Attention converts to booking value — she just never had the catalog.',
  },
];

export default function Precedent() {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.bx-prec-head, .bx-prec-row', { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        '.bx-prec-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 70%' } }
      );
      gsap.utils.toArray<HTMLElement>('.bx-prec-row').forEach((el, i) => {
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
    <section ref={root} className="relative bg-[#0D0D0D] py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="bx-prec-head mb-16 max-w-3xl md:mb-20">
          <Kicker className="mb-5">The Precedent</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            This pipeline
            <br />
            has receipts<span className="text-[#FD3737]">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#B8B8C0] md:text-lg">
            Every prior case converted the spotlight — and every one lacked what Brxce brings to it:
            twelve years of craft, a proven single, and an ownable world.
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
                className={`bx-prec-row block w-full border-b border-white/10 text-left transition-colors duration-500 last:border-b-0 ${
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

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-[#B8B8C0]">
          Spotlight × craft × world — no precedent has held all three
        </p>
      </div>
    </section>
  );
}
