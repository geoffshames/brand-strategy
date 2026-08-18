'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, SceneHeader, Mono } from './motion';

type Clip = {
  id: string;
  brand: string;
  title: string;
  platform: string;
  views: string;
  signal: string;
  duration: string;
  image: string;
  hook: string;
  beats: { t: string; beat: string }[];
  steal: string;
  url: string;
  negative?: boolean;
};

const FEATURED: Clip[] = [
  {
    id: 'jenna',
    brand: 'Overnght',
    title: 'Jenna Flynn buzzer beater, USA vs Australia',
    platform: 'Instagram Reels',
    views: '46.1K views',
    signal: "The best structure in the entire corpus, and it is already Overnght's",
    duration: '0:35',
    image: '/images/overnght/ovn-jenna.jpg',
    hook: 'Deadline tension. The scorebug does the storytelling from frame one: 10 to 10, ten seconds left, fourth quarter.',
    beats: [
      { t: '0:00', beat: 'Tied score and clock on screen, ball movement, defense reading the play' },
      { t: '0:10', beat: 'Return pass, shot, goal at zero. Scorebug flips to 11-10 USA, crowd erupts' },
      { t: '0:22', beat: 'ON OVERNGHT brand card, placed after the payoff, never before it' },
      { t: '0:24', beat: 'Full replay of the winning goal as the closer' },
    ],
    steal: 'Stakes, payoff, reaction, brand, replay. This is the house format. The strategy is to industrialize it, not invent it.',
    url: 'https://www.instagram.com/reel/Db-DCdQySy1/',
  },
  {
    id: 'guilherme',
    brand: 'FloSports',
    title: 'Guilherme takes Event 20, CrossFit Games',
    platform: 'Instagram Reels',
    views: '522K views',
    signal: '12x the account average. The purest winner anatomy in the set',
    duration: '0:16',
    image: '/images/overnght/flo-guilherme.jpg',
    hook: 'Outcome first. Opens on the decisive lift itself with the result already on screen: GUILHERME MALHEIROS TAKES THE W.',
    beats: [
      { t: '0:00', beat: 'The championship-deciding lift, overhead hold, the drop' },
      { t: '0:04', beat: 'Pure catharsis: fists, shouting, judges and cameras converging' },
      { t: '0:15', beat: 'End. No replay, no preamble, zero wasted beats' },
    ],
    steal: 'Do not build to the moment. Start at it, label it in frame one, and stay long enough for the emotion to land.',
    url: 'https://www.instagram.com/reel/DbRqUFZxN0M/',
  },
];

const CLIPS: Clip[] = [
  {
    id: 'sprague',
    brand: 'FloSports',
    title: 'Fittest Man on Earth, James Sprague',
    platform: 'Instagram Reels',
    views: '118.8K views',
    signal: '2.7x account average',
    duration: '0:25',
    image: '/images/overnght/flo-sprague.jpg',
    hook: 'Coronation first. The announcer declares the winner with identity text already on screen.',
    beats: [
      { t: '0:00', beat: 'Announcement, FITTEST MAN ON EARTH title framing' },
      { t: '0:09', beat: 'Sprague sprints in, arms up, embrace with the announcer' },
    ],
    steal: 'The announcement is the hook. The emotion is the body.',
    url: 'https://www.instagram.com/reel/DbRrX0rRHeq/',
  },
  {
    id: 'fatherson',
    brand: 'FloSports',
    title: 'Father and son after the 125c race',
    platform: 'Instagram Reels',
    views: '54.8K views',
    signal: 'Beats account average with zero highlights',
    duration: '1:30',
    image: '/images/overnght/flo-fatherson.jpg',
    hook: 'Raw human emotion, face to camera, inside one second.',
    beats: [
      { t: '0:00', beat: "Father's emotional opening line" },
      { t: '0:17', beat: "Exhausted rider's vulnerable answer in extreme close-up" },
      { t: '1:18', beat: 'Father returns with closing praise' },
    ],
    steal: 'A human story can outperform highlights. Niche sports are full of them and nobody is filming them.',
    url: 'https://www.instagram.com/reel/DbrLYZkRBup/',
  },
  {
    id: 'tony',
    brand: 'FloSports',
    title: "Tony Stewart on Emmett Hahn's induction",
    platform: 'Instagram Reels',
    views: '57.5K views',
    signal: '3,540 likes, interview format',
    duration: '1:29',
    image: '/images/overnght/flo-tony.jpg',
    hook: 'A familiar authority face opens talking, cutaways prove the story.',
    beats: [
      { t: '0:00', beat: 'Tony Stewart talking head' },
      { t: '0:04', beat: 'Dirt-track racing cutaways as proof beats' },
      { t: '0:49', beat: 'Stage, award, photo evidence, closing commentary' },
    ],
    steal: "Borrowed authority carries a niche moment to a general audience. Overnght's Olympian advisors are this asset.",
    url: 'https://www.instagram.com/reel/Dbmrg4nusQc/',
  },
  {
    id: 'teke',
    brand: 'BallerTV',
    title: 'Teke Deng can do it all',
    platform: 'TikTok',
    views: '51.4K views',
    signal: '519 shares, compilation format',
    duration: '0:57',
    image: '/images/overnght/baller-teke.jpg',
    hook: 'Freak-attribute headline plus instant proof, scoreboard visible from frame one.',
    beats: [
      { t: '0:00', beat: 'First dunk lands inside the opening beat' },
      { t: '0:08', beat: 'Proof stack: finish after finish across different gyms' },
    ],
    steal: 'The compilation loop is an athlete showcase machine. No arc needed, just relentless evidence.',
    url: 'https://www.tiktok.com/@ballertv/video/7667731880623541517',
  },
  {
    id: 'poster',
    brand: 'BallerTV',
    title: 'Poster of the summer',
    platform: 'TikTok',
    views: '39.3K views',
    signal: '318 shares on a 12 second clip',
    duration: '0:12',
    image: '/images/overnght/baller-poster.jpg',
    hook: 'Escalation toward collision. INSANE POSTER on screen before the play resolves.',
    beats: [
      { t: '0:00', beat: 'Full-court drive, defender recovering' },
      { t: '0:07', beat: 'One-handed poster over the defender' },
      { t: '0:10', beat: 'Defender down, bleachers erupt' },
    ],
    steal: 'The reaction beat is the payoff amplifier. Always keep the crowd in the cut.',
    url: 'https://www.tiktok.com/@ballertv/video/7667376445756312845',
  },
  {
    id: 'calvin',
    brand: 'BallerTV',
    title: 'Calvin Thompson on his head',
    platform: 'TikTok',
    views: '42.5K views',
    signal: 'Complete unit in 9 seconds',
    duration: '0:09',
    image: '/images/overnght/baller-calvin.jpg',
    hook: 'Transition offense already moving downhill, THIS WAS NASTY framing the chaos.',
    beats: [
      { t: '0:00', beat: 'Transition push and pass ahead' },
      { t: '0:06', beat: 'Finish attempt, contact, floor' },
    ],
    steal: 'One play can be an entire piece of content. Volume comes from treating every play as a candidate.',
    url: 'https://www.tiktok.com/@ballertv/video/7660291208048119053',
  },
  {
    id: 'derrion',
    brand: 'BallerTV',
    title: 'Three years ago, Derrion Reid did this',
    platform: 'TikTok',
    views: '24.7K views',
    signal: '390 shares, archive flashback',
    duration: '0:10',
    image: '/images/overnght/baller-derrion.jpg',
    hook: 'Famous-name flashback. A now-known player, before he was known, on their cameras.',
    beats: [
      { t: '0:00', beat: 'One continuous drive and dunk, branded frame throughout' },
    ],
    steal: 'The archive is an asset. Every athlete who becomes someone makes old footage new content.',
    url: 'https://www.tiktok.com/@ballertv/video/7664643316583042317',
  },
  {
    id: 'promo',
    brand: 'Overnght',
    title: 'One week to go, World Rowing promo',
    platform: 'Instagram Reels',
    views: '613 views',
    signal: 'The anti-pattern, measured',
    duration: '0:55',
    image: '/images/overnght/ovn-promo.jpg',
    hook: 'Location reveal. An Earth zoom into Amsterdam. No competitive payoff in the first ten seconds.',
    beats: [
      { t: '0:00', beat: 'Space to map zoom, canal, bicycle, city imagery' },
      { t: '0:10', beat: 'Event atmosphere, then competition montage' },
      { t: '0:45', beat: 'Brand poster resolution and athlete beauty shots' },
    ],
    steal: 'The inverse lesson: withholding the sporting moment kills reach. Promo grammar is the anti-pattern, and this page exists to retire it.',
    url: 'https://www.instagram.com/reel/DcJP0SyusY2/',
    negative: true,
  },
];

function ClipCard({ clip, wide = false }: { clip: Clip; wide?: boolean }) {
  return (
    <article
      className={`ov-td-in group relative flex flex-col overflow-hidden rounded-xl border bg-[#131313] ${
        clip.negative ? 'border-white/[0.14] border-dashed' : 'border-white/[0.07]'
      } ${wide ? 'md:flex-row' : ''}`}
    >
      <span className={`absolute inset-x-0 top-0 z-10 h-[3px] ${clip.negative ? 'bg-white/25' : 'bg-[#FD3737]/80'}`} />
      <div className={`relative overflow-hidden ${wide ? 'md:w-[42%]' : ''}`}>
        <div
          className={`bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04] ${wide ? 'aspect-[16/10] md:h-full md:min-h-[360px]' : 'aspect-[16/10]'}`}
          style={{ backgroundImage: `url(${clip.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent md:bg-gradient-to-r" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FAFAFA] backdrop-blur">
            {clip.brand}
          </span>
          <span className="rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8A8A93] backdrop-blur">
            {clip.duration}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 md:p-7 ${wide ? 'md:justify-center' : ''}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className={`font-display text-2xl ${clip.negative ? 'text-[#B8B8C0]' : 'text-[#FD3737]'}`}>{clip.views}</span>
          <Mono>{clip.platform}</Mono>
        </div>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A8A93]">{clip.signal}</p>
        <h3 className="mt-3 font-display text-xl uppercase leading-tight text-[#FAFAFA]">{clip.title}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-[#B8B8C0]">{clip.hook}</p>

        <div className="mt-4 flex flex-col gap-1.5 border-t border-white/[0.06] pt-4">
          {clip.beats.map((b) => (
            <div key={b.t} className="grid grid-cols-[44px_1fr] gap-3">
              <span className="font-mono text-[11px] leading-[1.7] text-[#FD3737]">{b.t}</span>
              <span className="text-[13px] leading-relaxed text-[#9E9EA6]">{b.beat}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[14px] leading-relaxed text-[#E4E4E9]">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FD3737]">{clip.negative ? 'The lesson: ' : 'The steal: '}</span>
          {clip.steal}
        </p>

        <a
          href={clip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A8A93] transition-colors hover:text-[#FAFAFA]"
        >
          View source
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Teardown() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.ov-td-in', { opacity: 1, y: 0 });
        return;
      }
      gsap.utils.toArray<HTMLElement>('.ov-td-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.85, ease: EASE_OUT, immediateRender: false, scrollTrigger: { trigger: el, start: 'top 82%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="intel" ref={root} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="ov-td-in">
        <SceneHeader
          kicker="04 / Creative Intelligence"
          title="Ten creatives, frame by frame"
          strap="We pulled the top-performing recent videos from FloSports and BallerTV, plus Overnght's own best and worst, and ran all ten through TwelveLabs video AI for a timestamped teardown of hooks, structure, and branding placement. These are the receipts behind every recommendation on this page."
        />
      </div>

      <div className="mt-16 flex flex-col gap-5">
        {FEATURED.map((c) => (
          <ClipCard key={c.id} clip={c} wide />
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {CLIPS.map((c) => (
          <ClipCard key={c.id} clip={c} />
        ))}
      </div>
    </section>
  );
}
