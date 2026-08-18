'use client';

import React, { useState } from 'react';
import { Reveal, RevealItem, Collapse, PlusMark } from './motion';
import { Shell, SectionHeader, Mono, Tag, Callout, NextUp, Bug } from './ui';

/* ------------------------------------------------------------------ */
/* Laws                                                                */
/* ------------------------------------------------------------------ */

const LAWS = [
  { n: '01', title: 'Open on the payoff', body: 'The 522K clip starts on the championship-winning lift itself. Not the walkout, not the venue, not context. The weakest clip in the corpus spends ten seconds on an Earth zoom before any sport appears, and it did 613 views.' },
  { n: '02', title: 'Text states the outcome in frame one', body: 'Winners tell you what to feel before the play resolves. GUILHERME MALHEIROS TAKES THE W. INSANE POSTER. The viewer never has to infer whether the moment mattered.' },
  { n: '03', title: 'The scorebug is the storyteller', body: 'The Jenna Flynn clip works because 10-10 with ten seconds left is on screen from the first frame. Stakes made legible turn a good play into a must-watch ending.' },
  { n: '04', title: 'Brand after the payoff, never before', body: 'The ON OVERNGHT card lands at 0:22, after the goal, before the replay. BallerTV burns its mark into the frame without interrupting. Nobody who wins puts a logo in front of the moment.' },
  { n: '05', title: 'One complete arc beats a montage', body: 'Stakes, payoff, reaction. Clips that give one whole emotional arc outperform montages assembled from many. The athlete-name title is part of the arc: people share people, not platforms.' },
];

/* ------------------------------------------------------------------ */
/* Dossiers                                                            */
/* ------------------------------------------------------------------ */

type Dossier = {
  n: string;
  slug: string;
  brand: string;
  title: string;
  platform: string;
  views: string;
  duration: string;
  plate: string;
  vertical?: boolean;
  color?: boolean;
  tag?: 'FEATURED' | 'ANTI-PATTERN';
  verdict: string;
  mechanic: string;
  spoken: string[];
  overlays: { t: string; text: string }[];
  grammar: string;
  beats: { name: string; range: string; desc: string }[];
  belief: string;
  reality: string;
  url: string;
};

const DOSSIERS: Dossier[] = [
  {
    n: '01',
    slug: 'jenna-flynn',
    brand: 'Overnght',
    title: 'Jenna Flynn buzzer beater, USA vs Australia',
    platform: 'Instagram Reels',
    views: '46.1K',
    duration: '0:35',
    plate: '/images/overnght/ovn-jenna.jpg',
    color: true,
    tag: 'FEATURED',
    verdict: 'Follows all five laws',
    mechanic: 'One decisive replay after the live climax converts a fast play into a memorable story beat.',
    spoken: [
      'Big fake from Lineback to Romer. Romer just holding to Flynn. Flynn again. Oh, she throws a seed in front of the home crowd. And Jenna Flynn causes an eruption in the stands, 11-10.',
      'As that ends the game, it’s a buzzer beater game winner. How poetic for Jenna Flynn here in San Jose.',
    ],
    overlays: [
      { t: '0:00-0:10', text: 'Scorebug: USA 10 / 0:09 / 10 AUS' },
      { t: '0:10-0:14', text: 'GOAL USA' },
      { t: '0:14-0:22', text: 'Scorebug flips: USA 11 / 0:00 / 10 AUS' },
      { t: '0:22-0:24', text: 'ON OVERNGHT logo card' },
    ],
    grammar:
      'A static wide game shot holds the whole possession so tension comes from clock and spacing, not cutting. A tighter zoom isolates the finish, wider celebratory coverage follows the eruption, a hard graphic bumper stamps the brand, and an alternate-angle replay closes.',
    beats: [
      { name: 'Countdown setup', range: '0:00-0:10', desc: 'Scoreboard visible, announcer sets urgency while the attack rotates' },
      { name: 'Payoff', range: '0:10-0:14', desc: 'The finish lands, the graphic flips to the scoring confirmation' },
      { name: 'Eruption', range: '0:14-0:22', desc: 'Players and crowd register it, announcer reframes it as a buzzer beater' },
      { name: 'Brand seal', range: '0:22-0:24', desc: 'ON OVERNGHT card after the peak, never before it' },
      { name: 'Replay', range: '0:24-0:35', desc: 'One decisive replay turns the score into a story beat' },
    ],
    belief: 'Great sports highlights need a long setup; the score is the story.',
    reality: 'The emotional payload comes from compressed late-clock orchestration: the pass sequence, the instant release, the eruption.',
    url: 'https://www.instagram.com/reel/Db-DCdQySy1/',
  },
  {
    n: '02',
    slug: 'guilherme',
    brand: 'FloSports',
    title: 'Guilherme takes Event 20, CrossFit Games',
    platform: 'Instagram Reels',
    views: '522K',
    duration: '0:16',
    plate: '/images/overnght/flo-guilherme.jpg',
    color: true,
    tag: 'FEATURED',
    verdict: 'Follows laws 1, 2, 4, 5 / 12x account average',
    mechanic: 'Let the headline overlay state the outcome while the footage only shows the emotional aftershock.',
    spoken: ['No spoken words. Live-event atmosphere carries the audio.'],
    overlays: [
      { t: '0:00-0:15', text: 'GUILHERME MALHEIROS TAKES THE W' },
      { t: '0:00-0:15', text: 'LIVE ON FLOELITE' },
    ],
    grammar:
      'A high-angle wide holds the decisive lift with judges, crowd and floor branding in frame, giving context without a single cut. The same camera follows the drop and the first burst of celebration, keeping the athlete’s emotion readable against the event scale.',
    beats: [
      { name: 'Completion', range: '0:00-0:03', desc: 'The final rep lands under event context and crowd presence' },
      { name: 'Release', range: '0:03-0:05', desc: 'The implement drops, body language flips from effort to certainty' },
      { name: 'Victory', range: '0:05-0:15', desc: 'Pure celebration, the overlay does the verbal storytelling' },
    ],
    belief: 'Winning moments should be polished and composed.',
    reality: 'It works because it shows the raw second after completion, the drop and the explosion, more than the exercise itself.',
    url: 'https://www.instagram.com/reel/DbRqUFZxN0M/',
  },
  {
    n: '03',
    slug: 'sprague',
    brand: 'FloSports',
    title: 'Fittest Man on Earth, James Sprague',
    platform: 'Instagram Reels',
    views: '118.8K',
    duration: '0:25',
    plate: '/images/overnght/flo-sprague.jpg',
    verdict: 'Follows laws 1, 2, 5 / coronation-first',
    mechanic: 'Stage the reveal so the verbal announcement lands before the subject physically enters. The entrance becomes the payoff.',
    spoken: ['Your 2026 male CrossFit Games champion.'],
    overlays: [
      { t: '0:00-0:25', text: 'FITTEST MAN ON EARTH' },
      { t: '0:00-0:25', text: 'JAMES SPRAGUE' },
    ],
    grammar:
      'A stationary medium-wide holds the announcer and the marked floor, ceremony-first. A medium pan follows Sprague sprinting in, converting static authority into kinetic release, and the embrace holds long enough for the recognition to register without overcutting.',
    beats: [
      { name: 'Coronation call', range: '0:00-0:09', desc: 'The announcer names the victory before the champion appears' },
      { name: 'Entrance', range: '0:09-0:17', desc: 'Sprague runs into frame, movement replaces suspense' },
      { name: 'Embrace', range: '0:17-0:25', desc: 'The physical embrace completes the recognition ritual' },
    ],
    belief: 'Championship storytelling must center the struggle of competition.',
    reality: 'The coronation moment alone, announcement, entrance, embrace, carries the full emotional weight.',
    url: 'https://www.instagram.com/reel/DbRrX0rRHeq/',
  },
  {
    n: '04',
    slug: 'father-son',
    brand: 'FloSports',
    title: 'Father and son after the 125c race',
    platform: 'Instagram Reels',
    views: '54.8K',
    duration: '1:30',
    plate: '/images/overnght/flo-fatherson.jpg',
    verdict: 'Beats account average with zero highlights',
    mechanic: 'Reframe a performance story through a close family witness so effort feels human before it feels athletic.',
    spoken: ['This is my son. I’m proud.', 'The boy works hard at it. Non-stop.', 'Sorry, I’m tired, but... yeah, it’s brutal.'],
    overlays: [{ t: 'none', text: 'No text overlays. The faces carry it.' }],
    grammar:
      'A tight close-up on the father opens as testimony. Steady observational two-shots hold the pit-tent conversation, then the camera moves tighter on the exhausted rider, drinking, sweating, answering anyway. Handheld angles during cooldown add immediacy; a support figure lands the coda.',
    beats: [
      { name: 'Father’s lens', range: '0:00-0:08', desc: 'Identity and pride established before any racing context' },
      { name: 'Cost of the sport', range: '0:08-0:30', desc: 'The conversation pivots to heat, toughness, exhaustion' },
      { name: 'Testimony', range: '0:30-1:00', desc: 'The spent rider reflects in extreme close-up, the body tells the story' },
      { name: 'Support system', range: '1:00-1:20', desc: 'Water, cooling, gear: the care structure around the athlete' },
      { name: 'Resolve', range: '1:20-1:30', desc: 'Ends on determination, not triumph' },
    ],
    belief: 'Motorsport content works best when it shows speed, action, and winning.',
    reality: 'Its power is depletion, family pride, and recovery. The race matters because of what it costs the kid and what the father sees.',
    url: 'https://www.instagram.com/reel/DbrLYZkRBup/',
  },
  {
    n: '05',
    slug: 'tony-stewart',
    brand: 'FloSports',
    title: 'Tony Stewart on Emmett Hahn’s induction',
    platform: 'Instagram Reels',
    views: '57.5K',
    duration: '1:29',
    plate: '/images/overnght/flo-tony.jpg',
    verdict: 'Authority face carries a niche moment',
    mechanic: 'Frame legacy content with a credible first-person testimonial, then use action inserts only as supporting evidence.',
    spoken: ['I think I can speak for hundreds if not thousands of drivers how much Emmett Hahn means to all of us.'],
    overlays: [
      { t: '0:04-0:16', text: 'Trackside banners in the race footage' },
      { t: '1:19-1:27', text: 'Chili Bowl Nationals banner' },
    ],
    grammar:
      'Tight static talking-head framing creates authority and intimacy. Wide dirt-track action widens scale, close car detail adds texture, and the edit keeps returning to the speaker so the story stays about communal honor rather than competitive climax.',
    beats: [
      { name: 'Tribute setup', range: '0:00-0:04', desc: 'Talking-head testimonial establishes significance' },
      { name: 'Event embodiment', range: '0:04-0:16', desc: 'Race footage reminds you what the event feels like' },
      { name: 'Iconography', range: '0:16-0:24', desc: 'Car detail grounds the tribute in recognizable texture' },
      { name: 'Community proof', range: '0:30-1:00', desc: 'Speaker, race context and event floor intercut' },
      { name: 'Legacy', range: '1:00-1:29', desc: 'Recognition imagery and closing reflection' },
    ],
    belief: 'Motorsport storytelling should center speed, noise, and heroics.',
    reality: 'Racing footage here supports a testimonial about what one figure means to a community. Legacy, not laps.',
    url: 'https://www.instagram.com/reel/Dbmrg4nusQc/',
  },
  {
    n: '06',
    slug: 'teke-deng',
    brand: 'BallerTV',
    title: 'Teke Deng can do it all',
    platform: 'TikTok',
    views: '51.4K',
    duration: '0:57',
    plate: '/images/overnght/baller-teke.jpg',
    verdict: 'Follows laws 1, 2 / 519 shares',
    mechanic: 'Take one simple performance claim and prove it through repetition rather than explanation.',
    spoken: ['Get out of there! Get out of there!', 'Come on, come on!'],
    overlays: [
      { t: '0:00-0:57', text: '7-FOOTER IS UNSTOPPABLE' },
      { t: '0:00-0:30', text: 'BALLERTV mark burned into the frame' },
    ],
    grammar:
      'Wide game-cam basketball with minimal stylization: static or lightly panning full-court views preserve spatial clarity while quick cuts between separate possessions build a montage of repeated rim pressure. The athlete’s size and consistency do the storytelling.',
    beats: [
      { name: 'Proof of concept', range: '0:00-0:08', desc: 'First scoring sequence establishes the mismatch and the headline promise' },
      { name: 'Domination loop', range: '0:08-0:22', desc: 'More near-rim finishes repeat the same advantage' },
      { name: 'Accumulation', range: '0:22-0:57', desc: 'Makes stack until one play becomes a pattern' },
    ],
    belief: 'Basketball highlights need variety to sustain interest.',
    reality: 'Repetition is the hook: the same oversized advantage, shown over and over, becomes the creative thesis.',
    url: 'https://www.tiktok.com/@ballertv/video/7667731880623541517',
  },
  {
    n: '07',
    slug: 'poster',
    brand: 'BallerTV',
    title: 'Poster of the summer',
    platform: 'TikTok',
    views: '39.3K',
    duration: '0:12',
    plate: '/images/overnght/baller-poster.jpg',
    verdict: 'Follows laws 1, 2, 5 / 318 shares in 12 seconds',
    mechanic: 'Name the emotional takeaway in the overlay, then let one clean explosive action justify it.',
    spoken: ['No spoken words. Gym audio only.'],
    overlays: [
      { t: '0:00-0:12', text: 'INSANE POSTER' },
      { t: '0:00-0:12', text: 'BALLERTV mark' },
    ],
    grammar:
      'A wide game-cam tracks the drive, a slight zoom at takeoff increases perceived force, tighter rim-area coverage captures ball-through-hoop and the defender collapsing, then the frame pans out to reactions so the peak gets a social echo.',
    beats: [
      { name: 'Run-up', range: '0:00-0:02', desc: 'Downhill attack with just enough runway to signal what might happen' },
      { name: 'Poster moment', range: '0:02-0:04', desc: 'Takeoff and contact create the defining image' },
      { name: 'Confirmation', range: '0:04-0:06', desc: 'Ball clears, defender drops' },
      { name: 'Aftershock', range: '0:06-0:12', desc: 'Players and bleachers process it' },
    ],
    belief: 'A highlight has to show a full possession or polished sequence.',
    reality: 'Everything compresses into one violent peak. The collision at the rim is the whole story.',
    url: 'https://www.tiktok.com/@ballertv/video/7667376445756312845',
  },
  {
    n: '08',
    slug: 'calvin-thompson',
    brand: 'BallerTV',
    title: 'Calvin Thompson, transition chaos',
    platform: 'TikTok',
    views: '42.5K',
    duration: '0:09',
    plate: '/images/overnght/baller-calvin.jpg',
    verdict: 'A complete unit in nine seconds',
    mechanic: 'Blunt reaction language in the headline frames a clip around consequence, not just execution.',
    spoken: ['No spoken words.'],
    overlays: [
      { t: '0:00-0:09', text: 'THIS WAS NASTY' },
      { t: '0:00-0:09', text: 'BALLERTV mark' },
    ],
    grammar:
      'A single wide game-camera view carries nearly the whole clip. Stationary framing keeps every player in context, so when the incident happens the viewer reads the collective reaction too. The creative choice is restraint: no fancy cutting, just enough duration for the fallout to register.',
    beats: [
      { name: 'Setup', range: '0:00-0:03', desc: 'The drive begins in standard game context' },
      { name: 'Collision', range: '0:03-0:05', desc: 'Contact at the rim creates the nasty turn' },
      { name: 'Consequence', range: '0:05-0:09', desc: 'A player goes down, everyone reorients around the aftermath' },
    ],
    belief: 'Short highlights should celebrate clean skill execution.',
    reality: 'It leans into ugliness and danger. The memorable thing is not elegance but consequence.',
    url: 'https://www.tiktok.com/@ballertv/video/7660291208048119053',
  },
  {
    n: '09',
    slug: 'derrion-reid',
    brand: 'BallerTV',
    title: 'Three years ago, Derrion Reid',
    platform: 'TikTok',
    views: '24.7K',
    duration: '0:10',
    plate: '/images/overnght/baller-derrion.jpg',
    verdict: 'Archive flashback / 390 shares',
    mechanic: 'If the athlete’s name is the hook, make the clip a calling card: one explosive sequence, no exposition.',
    spoken: ['No spoken words.'],
    overlays: [
      { t: '0:00-0:10', text: 'DERRION REID' },
      { t: '0:00-0:10', text: 'BALLERTV mark' },
    ],
    grammar:
      'Wide, mostly stationary game footage with a slight follow as the player drives and rises. The camera keeps space around the rim to show both the attempt and the landing, because the emotional turn comes from the aftermath as much as the leap.',
    beats: [
      { name: 'Approach', range: '0:00-0:02', desc: 'Downhill with intent' },
      { name: 'Apex', range: '0:02-0:04', desc: 'The leap is the adrenaline spike' },
      { name: 'Reset', range: '0:04-0:10', desc: 'Fall and recovery shift the emotion from wow to gasp' },
    ],
    belief: 'Highlights should only feature successful, triumphant outcomes.',
    reality: 'An almost-play can be just as sticky when the athlete’s explosiveness is obvious. The archive makes old footage new content.',
    url: 'https://www.tiktok.com/@ballertv/video/7664643316583042317',
  },
  {
    n: '10',
    slug: 'rowing-promo',
    brand: 'Overnght',
    title: 'One week to go, World Rowing promo',
    platform: 'Instagram Reels',
    views: '613',
    duration: '0:55',
    plate: '/images/overnght/ovn-promo.jpg',
    tag: 'ANTI-PATTERN',
    verdict: 'Breaks laws 1, 2, 3',
    mechanic: 'The inverse lesson: withholding the sporting moment kills reach. Promo grammar is the anti-pattern.',
    spoken: ['In August 2026, the world comes together on the waters. Amsterdam.', 'Every stroke. Every second. Every breath.', 'This is more than rowing. This is power.'],
    overlays: [
      { t: '0:04-0:12', text: 'In August... 2026... Amsterdam' },
      { t: '0:18-0:24', text: 'Every stroke / Every second / Every breath' },
      { t: '0:37-0:42', text: 'This is power / This is focus / Ultimate teamwork' },
      { t: '0:46-0:51', text: '2026 World Rowing Championships lockup' },
    ],
    grammar:
      'A macro establishing escalation, Earth to Amsterdam aerial, then city texture, crowd and venue bridges, athlete fragments, rhythmic race imagery around mantra lines, and an end-card lockup. Beautifully made, and the first competitive payoff arrives half a minute in.',
    beats: [
      { name: 'City reveal', range: '0:00-0:08', desc: 'Globe to city to waterways, no sport yet' },
      { name: 'Invitation', range: '0:08-0:18', desc: 'Voiceover announces an international convergence' },
      { name: 'Mantra', range: '0:18-0:30', desc: 'Rowing reduced to elemental units of effort' },
      { name: 'Intensity', range: '0:30-0:42', desc: 'Faces, crews, fan contact escalate' },
      { name: 'Lockup', range: '0:42-0:55', desc: 'Values named, event branding closes' },
    ],
    belief: 'Sports promos need scale, place and polish to sell an event.',
    reality: 'Measured against the moment clip from the same account in the same week: 613 views against 46,100. The reader should draw the conclusion the numbers draw.',
    url: 'https://www.instagram.com/reel/DcJP0SyusY2/',
  },
];

/* ------------------------------------------------------------------ */
/* Diff artifact data                                                  */
/* ------------------------------------------------------------------ */

const DIFF_LAWS = [
  { law: 'Opens on stakes or payoff', win: true, lose: false },
  { law: 'Outcome text in frame one', win: true, lose: false },
  { law: 'Scorebug on screen', win: true, lose: false },
  { law: 'Brand after the peak', win: true, lose: true },
  { law: 'One complete arc', win: true, lose: false },
];

/* ------------------------------------------------------------------ */

function DossierRow({ d, open, onToggle }: { d: Dossier; open: boolean; onToggle: () => void }) {
  const rowId = `dossier-${d.slug}`;
  const panelId = `dossier-panel-${d.slug}`;
  return (
    <div id={rowId} className="scroll-mt-24 border-b border-white/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full grid-cols-[44px_96px_1fr_44px] items-center gap-4 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737] md:grid-cols-[56px_120px_1fr_220px_120px_44px] md:gap-6"
      >
        <span className="font-mono text-sm tabular-nums tracking-[0.1em] text-[#8A8A93]">{d.n}</span>
        <span className="relative block aspect-video w-[96px] overflow-hidden md:w-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={d.plate}
            alt=""
            className={`h-full w-full object-cover ${d.color ? '' : 'grayscale contrast-[1.15] brightness-90'}`}
          />
        </span>
        <span>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono uppercase text-xs tracking-[0.14em] text-[#B8B8C0]">{d.brand}</span>
            {d.tag ? <Tag>{d.tag}</Tag> : null}
          </span>
          <span className="mt-1 block text-base md:text-[17px] font-medium leading-snug text-[#FAFAFA]">{d.title}</span>
          <span className="mt-1 block font-mono uppercase text-xs tracking-[0.12em] text-[#8A8A93] md:hidden">
            {d.views} views / {d.duration}
          </span>
        </span>
        <span className="hidden font-mono uppercase text-xs tracking-[0.12em] leading-relaxed text-[#B8B8C0] md:block">
          {d.verdict}
        </span>
        <span className="hidden text-right font-mono text-sm tabular-nums text-[#E4E4E9] md:block">
          {d.views}
          <span className="block text-xs text-[#8A8A93]">{d.duration}</span>
        </span>
        <PlusMark open={open} />
      </button>

      <Collapse open={open} id={panelId} labelledBy={rowId}>
        <div className="border-t border-white/10 bg-[#111111] px-4 py-8 md:px-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.plate}
                  alt={d.title}
                  className={`w-full object-cover ${d.color ? '' : 'grayscale contrast-[1.15] brightness-90'} aspect-video`}
                />
              </div>
              {/* Beat brackets under the plate */}
              <div className="mt-5">
                <div className="h-px w-full bg-white/25" />
                <div className="mt-3 flex flex-col gap-2.5">
                  {d.beats.map((b) => (
                    <div key={b.name} className="grid grid-cols-[96px_1fr] gap-4">
                      <span className="font-mono text-[13px] md:text-sm tabular-nums text-[#FD3737]">{b.range}</span>
                      <span className="text-base leading-[1.55] text-[#E4E4E9]">
                        <span className="font-mono uppercase text-xs tracking-[0.12em] text-[#B8B8C0]">{b.name} / </span>
                        {b.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <p className="font-display text-4xl md:text-5xl leading-none tabular-nums text-[#FAFAFA]">{d.views}</p>
                <Mono>
                  {d.brand} / {d.platform} / {d.duration}
                </Mono>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {d.spoken.map((q, i) => (
                  <blockquote key={i} className="border-l-2 border-white/20 pl-5 italic text-base md:text-lg leading-[1.55] text-[#FAFAFA]">
                    &ldquo;{q}&rdquo;
                  </blockquote>
                ))}
              </div>

              <div className="mt-7">
                <Mono>On-screen text</Mono>
                <div className="mt-3 flex flex-col gap-1.5">
                  {d.overlays.map((o, i) => (
                    <div key={i} className="grid grid-cols-[96px_1fr] gap-4">
                      <span className="font-mono text-[13px] md:text-sm tabular-nums text-[#B8B8C0]">{o.t}</span>
                      <span className="text-base leading-[1.55] text-[#E4E4E9]">{o.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <Mono>Camera grammar</Mono>
                <p className="mt-3 max-w-[65ch] text-base md:text-[17px] leading-[1.7] text-[#E4E4E9]">{d.grammar}</p>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="border-t border-white/15 pt-4">
                  <Mono>Common belief</Mono>
                  <p className="mt-2 text-base leading-[1.6] text-[#B8B8C0]">{d.belief}</p>
                </div>
                <div className="border-t border-white/15 pt-4">
                  <Mono>What the data says</Mono>
                  <p className="mt-2 text-base leading-[1.6] text-[#E4E4E9]">{d.reality}</p>
                </div>
              </div>

              <div className="mt-8 border-l-2 border-[#FD3737] pl-5">
                <Mono className="text-[#FD3737]">Transferable mechanic</Mono>
                <p className="mt-2 max-w-[60ch] text-base md:text-[17px] leading-[1.6] text-[#FAFAFA]">{d.mechanic}</p>
              </div>

              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-mono uppercase text-xs md:text-[13px] tracking-[0.16em] text-[#B8B8C0] transition-colors hover:text-[#FAFAFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD3737]"
              >
                View source clip
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default function S04Teardown() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section className="border-t border-white/10 py-20 md:py-28 lg:py-36" aria-label="The clip teardown">
      <Shell>
        <Reveal>
          <SectionHeader
            id="s04-teardown"
            index="04"
            act="The Case"
            title="The clip teardown"
            strap="Ten real clips through frame-level video AI: the competitors' best and Overnght's own best and worst. Five laws repeat in every winner. The Jenna Flynn buzzer beater follows all five and did 46K. The World Rowing promo follows none of the first three and did 613. Same account, same week. The format is proven; it is just not yet on purpose."
          />
        </Reveal>

        {/* Five laws: numbered manifesto */}
        <Reveal className="border-t border-white/10" stagger={0.08}>
          {LAWS.map((law) => (
            <RevealItem key={law.n} className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-[110px_340px_1fr] md:gap-10 md:py-10">
              <span
                className="font-display text-7xl md:text-8xl leading-none text-transparent"
                style={{ WebkitTextStroke: '1px rgba(250,250,250,0.16)' }}
                aria-hidden="true"
              >
                {law.n}
              </span>
              <h3 className="font-display uppercase text-xl md:text-2xl leading-[1.05] text-[#FAFAFA]">
                <span className="sr-only">Law {law.n}: </span>
                {law.title}
              </h3>
              <p className="max-w-[65ch] text-base md:text-[17px] lg:text-lg leading-[1.7] text-[#E4E4E9]">{law.body}</p>
            </RevealItem>
          ))}
        </Reveal>

        {/* The 46K vs 613 diff: permanent artifact */}
        <Reveal className="mt-16 md:mt-24">
          <Mono>Exhibit / same account, same week</Mono>
          <div className="mt-5 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
            {[0, 1].map((side) => {
              const isWin = side === 0;
              const d = isWin ? DOSSIERS[0] : DOSSIERS[9];
              return (
                <div key={side} className="bg-[#0A0A0A] p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Bug value={isWin ? '46.1K' : '613'} label="views" strong={isWin} />
                    <Tag tone={isWin ? 'red' : 'white'}>{isWin ? 'The winner' : 'The anti-pattern'}</Tag>
                  </div>
                  <p className="mt-5 text-base md:text-[17px] font-medium leading-snug text-[#FAFAFA]">{d.title}</p>
                  <div className="mt-5 flex flex-col gap-2">
                    {DIFF_LAWS.map((l) => {
                      const pass = isWin ? l.win : l.lose;
                      return (
                        <div key={l.law} className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                          <span className="text-base leading-snug text-[#E4E4E9]">{l.law}</span>
                          <span className={`font-mono text-sm ${pass ? 'text-[#FAFAFA]' : 'text-[#8A8A93]'}`}>
                            {pass ? 'YES' : 'NO'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Dossier index */}
        <Reveal className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <Mono>The dossiers / 10 clips, frame by frame</Mono>
            <Mono className="text-[#8A8A93]">Tap a row to open the full file</Mono>
          </div>
          <div className="mt-4 border-t border-white/10">
            {DOSSIERS.map((d) => (
              <DossierRow
                key={d.slug}
                d={d}
                open={openSlug === d.slug}
                onToggle={() => setOpenSlug(openSlug === d.slug ? null : d.slug)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <Callout
            label="The strategic read"
            headline="The moment clip is the product, sampled"
            body="Every buzzer beater Overnght clips is a free taste of the exact thing a subscription buys: live access to moments that vanish if you were not watching. The same unit works as an organic post and as a paid ad with a distribution end-card. One format, two jobs."
          />
        </Reveal>

        <NextUp label="05 The Messaging Teardown" />
      </Shell>
    </section>
  );
}
