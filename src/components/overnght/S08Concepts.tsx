'use client';

import React, { useState } from 'react';
import { Reveal, Collapse, PlusMark } from './motion';
import { Shell, SectionHeader, Mono, NextUp } from './ui';

type Concept = {
  id: string;
  name: string;
  hook: string;
  meta: string;
  register: string;
  laws: string;
  script: { t: string; beat: string }[];
  cta: string;
  grounded: string;
  why: string;
  dossier?: string;
};

const CONCEPTS: Concept[] = [
  {
    id: 'AD-01',
    name: 'The buzzer beater',
    hook: 'Scorebug on screen at 0:00. Tied game. Ten seconds left.',
    meta: 'Real moment clip / 20-30s / 9:16 + 1:1 / Meta, TikTok, Shorts / cold + warm',
    register: 'The moment',
    laws: 'Laws 1-4',
    script: [
      { t: '0:00', beat: 'Live broadcast frame, scorebug legible, no intro of any kind' },
      { t: '0:08', beat: 'The play resolves. Goal, gun, or finish at zero. Natural crowd audio only' },
      { t: '0:14', beat: 'Reaction: bench, teammates, the athlete. Two full seconds minimum' },
      { t: '0:18', beat: 'ON OVERNGHT card, then one line: This was live. So is the next one' },
      { t: '0:22', beat: 'End card: the next three events in the same sport' },
    ],
    cta: 'Watch live on Overnght',
    grounded: 'Direct adaptation of the Jenna Flynn structure, the corpus-best clip.',
    why: 'The ad is a sample of the product itself: a live moment you would have missed. Nothing to explain, nothing to claim.',
    dossier: 'See dossier 01',
  },
  {
    id: 'AD-02',
    name: 'First in line',
    hook: 'A one-star review fills the screen, word by word.',
    meta: 'Text-forward / 15s / static + motion / Meta, Reddit / retargeting',
    register: 'The trap',
    laws: 'Law 2',
    script: [
      { t: '0:00', beat: 'On black, mono type: category reviews about broken streams and billing traps, anonymized, one line each' },
      { t: '0:06', beat: 'The last review holds: As soon as someone else does a remotely better job I will be the first in line' },
      { t: '0:10', beat: 'Cut to one clean live moment clip, full bleed, crowd audio' },
      { t: '0:13', beat: 'Line on screen: Get in line. Then the Overnght mark' },
    ],
    cta: 'Try Overnght this week',
    grounded: 'The centerpiece quote from the customer record. Real category language, no invented claims.',
    why: 'It makes the incumbents\' own customers the copywriter. The switching intent already exists; the ad gives it an address.',
  },
  {
    id: 'AD-03',
    name: 'Be there from anywhere',
    hook: 'A phone propped on a kitchen counter, a race about to start, a grandparent leaning in.',
    meta: 'UGC-style / 20-30s / 9:16 / Meta, TikTok / cold, family graphs',
    register: 'The distance',
    laws: 'Laws 1, 5',
    script: [
      { t: '0:00', beat: 'Kitchen, morning light, phone against the fruit bowl. On screen: 1,242 miles from the pool deck' },
      { t: '0:05', beat: 'The stream goes live. The grandparent stops drying dishes' },
      { t: '0:12', beat: 'The moment hits. The grandparent reacts like they are in the bleachers' },
      { t: '0:18', beat: 'Phone screen close-up: the athlete waves at the camera after the race' },
      { t: '0:22', beat: 'Line: Every game she has left, live. On Overnght' },
    ],
    cta: 'Never miss one',
    grounded: 'The distance register: out-of-state parents, the 1,242 miles review, the broken share links.',
    why: 'The purchase is love expressed as attendance, and the category keeps failing this buyer at the exact moment it matters.',
  },
  {
    id: 'AD-04',
    name: 'The camera knows the sport',
    hook: 'Left side: a wide static angle where you cannot find the ball. Right side: the broadcast.',
    meta: 'Split-screen / 15-20s / 9:16 + 16:9 / Meta, YouTube / warm, sport communities',
    register: 'The craft',
    laws: 'Law 1',
    script: [
      { t: '0:00', beat: 'Split screen. Left labeled: how your sport usually gets filmed. A generic wide, action ambiguous' },
      { t: '0:05', beat: 'Right side labeled: how we film it. Tight follow, underwater angle, the play legible' },
      { t: '0:11', beat: 'Right side takes over full frame for the payoff moment' },
      { t: '0:15', beat: 'Line: Filmed by people who know the sport. Overnght mark' },
    ],
    cta: 'See the difference live',
    grounded: 'The craft register: auto-cams off the ball a quarter of the game, phones on poles.',
    why: 'Production quality is the category\'s most visible failure and the hardest one for an auto-camera company to answer.',
  },
  {
    id: 'AD-05',
    name: 'Month to month',
    hook: 'A billing screen designed like a receipt, every line the opposite of the category.',
    meta: 'Receipt static + 10s motion / Meta, Reddit / retargeting, decision stage',
    register: 'The trap',
    laws: 'Law 2',
    script: [
      { t: '0:00', beat: 'Mono receipt prints: Month to month. Cancel in one click. No minimums. No surprise renewal' },
      { t: '0:06', beat: 'Last line prints: The stream works, or the month is on us' },
      { t: '0:09', beat: 'Overnght mark, app badges' },
    ],
    cta: 'Subscribe without the trap',
    grounded: 'The trap register: the $1.925M settlement, the BBB pattern alert, the dark pattern reviews.',
    why: 'Billing hygiene is nearly free to build and impossible for the incumbents to copy without repricing their model.',
  },
  {
    id: 'AD-06',
    name: 'The last game',
    hook: 'On black: every athlete gets a finite number of games.',
    meta: 'Emotional montage / 30s / 9:16 + 16:9 / Meta, YouTube / cold, parents',
    register: 'The finite window',
    laws: 'Law 5',
    script: [
      { t: '0:00', beat: 'Type on black: There are only so many games' },
      { t: '0:04', beat: 'Real moment clips in sequence: a first goal, a title, a ceremony on a pool deck' },
      { t: '0:16', beat: 'Type: Some of them are the last one' },
      { t: '0:20', beat: 'One held shot: an athlete finding family in the crowd' },
      { t: '0:25', beat: 'Line: Watch every one you can. Live on Overnght' },
    ],
    cta: 'Do not miss the ones that matter',
    grounded: 'The finite window register: final game ever, age-out year, the inning he was pitching.',
    why: 'The category treats a dead stream as a support ticket. The customer experiences it as a loss. Naming that truth builds the brand the trust claims back up.',
  },
  {
    id: 'AD-07',
    name: 'Film forever',
    hook: 'A juco athlete screen-records their own highlight and posts it.',
    meta: 'Athlete-facing demo / 15-20s / 9:16 / TikTok, Reels / cold, athletes + coaches',
    register: 'The craft',
    laws: 'Law 5',
    script: [
      { t: '0:00', beat: 'Phone screen: an athlete scrubs the on-demand replay of their own game' },
      { t: '0:05', beat: 'They clip their play, save it, drop it straight into a recruiting DM' },
      { t: '0:11', beat: 'Type: Your film. Unlimited rewatch. No download caps' },
      { t: '0:15', beat: 'The clip posts. The tag reads the athlete\'s name, not ours' },
    ],
    cta: 'Your season, on demand',
    grounded: 'The athlete register plus 3C2A: 28,000 athletes whose next roster spot runs on film.',
    why: 'For a juco athlete, film is the transfer mechanism. Serve the athlete and the athlete distributes the platform.',
  },
  {
    id: 'AD-08',
    name: 'Countdown to Amsterdam',
    hook: 'A world title decided this week, and the US watches in one place.',
    meta: 'Event template / 10-15s / 9:16 / Meta, TikTok, Shorts / event windows',
    register: 'The moment',
    laws: 'Laws 1, 2',
    script: [
      { t: '0:00', beat: 'Best archive moment of the sport, payoff first, name on screen' },
      { t: '0:05', beat: 'Type: The 2026 World Rowing Championships. Amsterdam. August 24 to 30' },
      { t: '0:09', beat: 'Type: Live in the US on Overnght. Schedule strip of finals days' },
    ],
    cta: 'Watch the worlds live',
    grounded: 'The rights calendar as media calendar. The template reloads for every future window: European water polo, IFL playoffs, USRowing Youth Nationals.',
    why: 'Event urgency is the one moment cold audiences behave like warm ones. A reusable template turns every rights window into a flight.',
    dossier: 'See dossier 10',
  },
];

function ConceptRow({ c, open, onToggle }: { c: Concept; open: boolean; onToggle: () => void }) {
  const rowId = `concept-${c.id.toLowerCase()}`;
  const panelId = `concept-panel-${c.id.toLowerCase()}`;
  return (
    <div id={rowId} className="scroll-mt-24 border-b border-white/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737] md:py-6"
      >
        <div className="grid gap-1.5 md:grid-cols-[110px_1fr] md:gap-6">
          <Mono className="text-[#FD3737]">{c.id}</Mono>
          <div>
            <h3 className="font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">{c.name}</h3>
            <p className="mt-1.5 italic text-base md:text-lg leading-[1.5] text-[#E4E4E9]">{c.hook}</p>
            <p className="mt-1.5 font-mono uppercase text-xs tracking-[0.12em] text-[#8A8A93]">
              {c.meta} / {c.register} / {c.laws}
            </p>
          </div>
        </div>
        <PlusMark open={open} />
      </button>

      <Collapse open={open} id={panelId} labelledBy={rowId}>
        <div className="border-l-2 border-white/25 pb-8 pl-5 md:pl-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Mono>Script</Mono>
              <div className="mt-3 flex flex-col gap-2.5">
                {c.script.map((s) => (
                  <div key={s.t} className="grid grid-cols-[56px_1fr] gap-4">
                    <span className="font-mono text-[13px] md:text-sm tabular-nums text-[#FD3737]">{s.t}</span>
                    <span className="text-base md:text-[17px] leading-[1.6] text-[#E4E4E9]">{s.beat}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-l-2 border-[#FD3737] pl-4">
                <p className="text-base md:text-[17px] leading-snug text-[#FAFAFA]">
                  <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#FD3737]">CTA / </span>
                  {c.cta}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <Mono>Grounded in</Mono>
                <p className="mt-2 max-w-[55ch] text-base leading-[1.65] text-[#B8B8C0]">{c.grounded}</p>
              </div>
              <div>
                <Mono>Why it works</Mono>
                <p className="mt-2 max-w-[55ch] text-base leading-[1.65] text-[#B8B8C0]">{c.why}</p>
              </div>
              {c.dossier ? <Mono className="text-[#8A8A93]">{c.dossier}</Mono> : null}
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default function S08Concepts() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const allOpen = openIds.size === CONCEPTS.length;

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="Ad concept library">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s08-concepts"
            index="08"
            act="The Plan"
            title="Ad concept library"
            strap="Eight concepts, each scripted beat by beat with second ranges, each tagged to a law and a customer register. Enough variety to run a real test instead of a coin flip."
          />
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <Mono>8 concepts / multiple can stay open</Mono>
            <button
              onClick={() => setOpenIds(allOpen ? new Set() : new Set(CONCEPTS.map((c) => c.id)))}
              className="font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#FAFAFA] transition-colors hover:text-[#FD3737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
          <div className="mt-2">
            {CONCEPTS.map((c) => (
              <ConceptRow key={c.id} c={c} open={openIds.has(c.id)} onToggle={() => toggle(c.id)} />
            ))}
          </div>
        </Reveal>

        <NextUp label="09 Testing Roadmap" />
      </Shell>
    </section>
  );
}
