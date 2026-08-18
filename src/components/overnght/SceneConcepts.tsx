'use client';

import { useRef, useState } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

type Concept = {
  id: string;
  name: string;
  format: string;
  platforms: string;
  funnel: string;
  hook: string;
  script: { t: string; beat: string }[];
  cta: string;
  grounded: string;
  why: string;
};

const CONCEPTS: Concept[] = [
  {
    id: 'C1',
    name: 'The buzzer beater',
    format: 'Real moment clip, 20 to 30s, 9:16 and 1:1',
    platforms: 'Meta, TikTok, YouTube Shorts',
    funnel: 'Cold and warm',
    hook: 'Scorebug on screen at 0:00. Tied game. Ten seconds left.',
    script: [
      { t: '0:00', beat: 'Live broadcast frame, scorebug legible, no intro of any kind' },
      { t: '0:08', beat: 'The play resolves. Goal, gun, or finish at zero. Natural crowd audio only' },
      { t: '0:14', beat: 'Reaction: bench, teammates, the athlete. Two full seconds minimum' },
      { t: '0:18', beat: 'ON OVERNGHT card, then one line: This was live. So is the next one' },
      { t: '0:22', beat: 'End card: schedule of the next three events in the same sport, app store badges' },
    ],
    cta: 'Watch live on Overnght',
    grounded: 'Direct adaptation of the Jenna Flynn clip, 46.1K views, the corpus-best structure. Laws 1 through 4 applied.',
    why: 'The ad is a sample of the product itself: a live moment you would have missed. Nothing to explain, nothing to claim.',
  },
  {
    id: 'C2',
    name: 'First in line',
    format: 'Text-forward review ad, 15s, static and motion versions',
    platforms: 'Meta, Reddit',
    funnel: 'Warm, retargeting',
    hook: 'A one-star review fills the screen, word by word.',
    script: [
      { t: '0:00', beat: 'On black, mono type: category reviews about broken streams and billing traps, anonymized, one line each' },
      { t: '0:06', beat: 'The last review holds: As soon as someone else does a remotely better job I will be the first in line' },
      { t: '0:10', beat: 'Cut to one clean live moment clip, full bleed, crowd audio' },
      { t: '0:13', beat: 'Line on screen: Get in line. Then the Overnght mark' },
    ],
    cta: 'Try Overnght this week',
    grounded: 'The centerpiece social listening quote, plus the trap register. Real category language, no invented claims.',
    why: 'It weaponizes the incumbent\'s own customers as the copywriter. The switching intent already exists. The ad just gives it an address.',
  },
  {
    id: 'C3',
    name: 'Be there from anywhere',
    format: 'UGC-style shot on phone, 20 to 30s',
    platforms: 'Meta, TikTok',
    funnel: 'Cold, family and fan graphs',
    hook: 'A phone propped on a kitchen counter, a race about to start, a grandparent leaning in.',
    script: [
      { t: '0:00', beat: 'Kitchen, morning light, phone against the fruit bowl. On screen: 1,242 miles from the pool deck' },
      { t: '0:05', beat: 'The stream goes live. The grandparent stops drying dishes' },
      { t: '0:12', beat: 'The moment hits. The grandparent reacts like they are in the bleachers' },
      { t: '0:18', beat: 'Phone screen close-up: the athlete waves at the camera after the race' },
      { t: '0:22', beat: 'Line: Every game she has left, live. On Overnght' },
    ],
    cta: 'Never miss one',
    grounded: 'The distance register: out-of-state parents, the 1,242 miles review, the broken magic link complaints.',
    why: 'The purchase is love expressed as attendance. The category keeps failing this exact buyer at the exact moment it matters most.',
  },
  {
    id: 'C4',
    name: 'The camera knows the sport',
    format: 'Split-screen contrast, 15 to 20s',
    platforms: 'Meta, YouTube',
    funnel: 'Warm, sport communities',
    hook: 'Left side: a wide static angle where you cannot find the ball. Right side: the broadcast.',
    script: [
      { t: '0:00', beat: 'Split screen. Left labeled: how your sport usually gets filmed. A generic wide shot, action ambiguous' },
      { t: '0:05', beat: 'Right side labeled: how we film it. Tight follow, underwater angle, the play legible' },
      { t: '0:11', beat: 'Right side takes over full frame for the payoff moment' },
      { t: '0:15', beat: 'Line: Filmed by people who know the sport. Overnght mark' },
    ],
    cta: 'See the difference live',
    grounded: 'The craft register: auto-cameras off the ball a quarter of the game, iPhones on poles, cameras missing the athlete entirely.',
    why: 'Production quality is the category\'s most visible failure and the hardest one for an auto-camera company to answer.',
  },
  {
    id: 'C5',
    name: 'Month to month',
    format: 'Receipt-style static and 10s motion',
    platforms: 'Meta, Reddit',
    funnel: 'Retargeting, decision stage',
    hook: 'A billing screen designed like a receipt, every line the opposite of the category.',
    script: [
      { t: '0:00', beat: 'Mono receipt scrolls: Month to month. Cancel in one click. No three-month minimum. No surprise renewal' },
      { t: '0:06', beat: 'Last line prints: The stream works, or the month is on us' },
      { t: '0:09', beat: 'Overnght mark, app badges' },
    ],
    cta: 'Subscribe without the trap',
    grounded: 'The trap register: the $1.925M auto-renewal settlement, the BBB pattern alert, the dark pattern reviews.',
    why: 'Billing hygiene is nearly free to build and impossible for the incumbents to copy without repricing their whole model.',
  },
  {
    id: 'C6',
    name: 'The last game',
    format: 'Emotional montage, 30s, brand-building',
    platforms: 'Meta, YouTube',
    funnel: 'Cold, parents of rostered sports',
    hook: 'On black: Every athlete gets a finite number of games.',
    script: [
      { t: '0:00', beat: 'Type on black: There are only so many games' },
      { t: '0:04', beat: 'Real moment clips in sequence: a first goal, a title, a graduation ceremony on a pool deck' },
      { t: '0:16', beat: 'Type: Some of them are the last one' },
      { t: '0:20', beat: 'One held shot: an athlete finding family in the crowd' },
      { t: '0:25', beat: 'Line: Watch every one you can. Live on Overnght' },
    ],
    cta: 'Do not miss the ones that matter',
    grounded: 'The finite window register: final game ever, age-out year, the inning he was pitching.',
    why: 'The category treats a dead stream as a support ticket. The customer experiences it as a loss. Naming that truth builds the brand the guarantee backs up.',
  },
  {
    id: 'C7',
    name: 'Film forever',
    format: 'Athlete-facing demo, 15 to 20s',
    platforms: 'TikTok, Instagram Reels',
    funnel: 'Cold, athletes and coaches',
    hook: 'A juco athlete screen-records their own highlight and posts it.',
    script: [
      { t: '0:00', beat: 'Phone screen: an athlete scrubs the on-demand replay of their own game' },
      { t: '0:05', beat: 'They clip their play, save it, drop it straight into a recruiting DM' },
      { t: '0:11', beat: 'Type: Your film. Unlimited rewatch. No download caps' },
      { t: '0:15', beat: 'The clip posts. The tag reads the athlete\'s name, not ours' },
    ],
    cta: 'Your season, on demand',
    grounded: 'The athlete register: download caps, useless recruiting film complaints, plus 3C2A: 28,000 athletes whose next roster spot runs on film.',
    why: 'For a juco athlete, film is the transfer mechanism. Serve the athlete and the athlete distributes the platform.',
  },
  {
    id: 'C8',
    name: 'Countdown to Amsterdam',
    format: 'Event rapid-response template, 10 to 15s',
    platforms: 'Meta, TikTok, YouTube Shorts',
    funnel: 'Cold and warm, event windows',
    hook: 'A world title decided in the next 72 hours, and the US watches in one place.',
    script: [
      { t: '0:00', beat: 'Best archive moment of the sport, payoff first, name on screen' },
      { t: '0:05', beat: 'Type: The 2026 World Rowing Championships. Amsterdam. August 24 to 30' },
      { t: '0:09', beat: 'Type: Live in the US on Overnght. Schedule strip of finals days' },
    ],
    cta: 'Watch the world decided live',
    grounded: 'Rights calendar as media calendar. US rights confirmed, event opens August 24. The template reloads for every future window: European water polo, IFL playoffs, USRowing Youth Nationals.',
    why: 'Event urgency is the one moment cold audiences behave like warm ones. A reusable template turns every rights window into a flight.',
  },
];

function ConceptCard({ c }: { c: Concept }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="ov-con-in relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#131313]">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-[#FD3737]/80" />
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-7"
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Mono className="text-[#FD3737]">{c.id}</Mono>
            <Mono>{c.funnel}</Mono>
          </div>
          <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-[#FAFAFA] md:text-3xl">{c.name}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#B8B8C0]">
            <span className="text-[#FD3737]">Hook: </span>
            {c.hook}
          </p>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A93]">
            {c.format} / {c.platforms}
          </p>
        </div>
        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] p-6 md:p-7">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Mono className="text-[#FD3737]">Script</Mono>
                <div className="mt-4 flex flex-col gap-2.5">
                  {c.script.map((s) => (
                    <div key={s.t} className="grid grid-cols-[44px_1fr] gap-3">
                      <span className="font-mono text-[11px] leading-[1.7] text-[#FD3737]">{s.t}</span>
                      <span className="text-[14px] leading-relaxed text-[#E4E4E9]">{s.beat}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[14px] text-[#E4E4E9]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FD3737]">CTA: </span>
                  {c.cta}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <Mono className="text-[#FD3737]">Grounded in</Mono>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#B8B8C0]">{c.grounded}</p>
                </div>
                <div>
                  <Mono className="text-[#FD3737]">Why it works</Mono>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#B8B8C0]">{c.why}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Concepts() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-con-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>('.ov-con-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE_OUT, scrollTrigger: { trigger: el, start: 'top 84%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="concepts" ref={root} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="ov-con-in">
        <SceneHeader
          kicker="07 / Ad Concepts"
          title="Eight concepts, ready to shoot"
          strap="Each concept is reverse-engineered from the teardown and the listening corpus: a proven hook mechanic, a beat-by-beat script, and the receipt it is grounded in. Most are built from footage Overnght already owns."
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {CONCEPTS.map((c) => (
          <ConceptCard key={c.id} c={c} />
        ))}
      </div>
    </section>
  );
}
