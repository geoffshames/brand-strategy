'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const TOP_VIDEOS = [
  {
    platform: 'YouTube',
    channel: 'KUSH Comedy',
    title: 'I\'ll Call You Gay',
    views: '561K',
    likes: '2.2K',
    comments: '142',
    embedId: 'Mhw5OISJUsE',
    embedType: 'youtube',
    finding: 'Edgy, provocative standup. The confrontational style and physical comedy create strong engagement. Production is professional with clean audio and tight editing.',
  },
  {
    platform: 'YouTube',
    channel: 'LOL Network Stand-Up!',
    title: 'Kids Are Annoying Because They\'re Smart',
    views: '294K',
    likes: '4.9K',
    comments: '262',
    embedId: 'pkOsdMJ0z4M',
    embedType: 'youtube',
    finding: 'Relatable family humor drives the highest like-to-view ratio. Observational comedy about parenting resonates across demographics. This is the sweet spot.',
  },
  {
    platform: 'YouTube',
    channel: 'Netflix Is A Joke',
    title: 'The Epic Maury Joke',
    views: '125K',
    likes: '1.9K',
    comments: '100',
    embedId: '7BkT_yBXUrE',
    embedType: 'youtube',
    finding: 'Prestige placement on Netflix\'s comedy channel. Storytelling-heavy set with a long buildup and explosive punchline. Proves the catalog works at the highest level.',
  },
  {
    platform: 'TikTok',
    channel: '@redgranttv',
    title: 'Cam\'ron vs Katt Williams',
    views: '219.6K',
    likes: '16.7K',
    comments: '724',
    embedId: '7479064040287915294',
    embedType: 'tiktok',
    finding: 'His top performer. Commentary on a trending cultural moment, direct-to-camera. This format outperforms everything else and should be systematized into a weekly vertical.',
  },
  {
    platform: 'TikTok',
    channel: '@redgranttv',
    title: 'POV: Your Daughter Has a Boyfriend',
    views: '170.3K',
    likes: '7.6K',
    comments: '121',
    embedId: '7647491967177215263',
    embedType: 'tiktok',
    finding: 'The "Family Man" skit series is a proven viral formula. Scripted, multi-character, high production quality. This is an IP property that should be developed into a recurring series.',
  },
  {
    platform: 'TikTok',
    channel: '@redgranttv',
    title: 'Party With Her Pops',
    views: '34.4K',
    likes: '2.0K',
    comments: '44',
    embedId: '7452400251656310047',
    embedType: 'tiktok',
    finding: 'The father-daughter dynamic again. Confirms the "Family Man" format is not a one-off. Every skit in this series outperforms standup clips by 3-5x.',
  },
];

const FORMAT_INSIGHTS = [
  { format: 'Standup clips', share: 'The core product', note: 'Proven on stage and on other channels. 1.5M+ combined views on KUSH, LOL, Netflix. Best when re-edited with captions and text overlays for native social.' },
  { format: 'Scripted skits', share: '3-5x outperform', note: 'The "Family Man" father-daughter series is the top social performer. High production, relatable, shareable. Should be developed into a weekly series.' },
  { format: 'Commentary', share: 'Highest engagement', note: 'Direct-to-camera on trending topics. The Katt Williams clip is his #1 video. This format should be a weekly content vertical tied to cultural moments.' },
];

export default function ContentIntel() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        gsap.set('.rg-ci-head, .rg-ci-card, .rg-ci-format', { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        '.rg-ci-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 70%' } }
      );

      gsap.utils.toArray<HTMLElement>('.rg-ci-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE_OUT, delay: (i % 2) * 0.12, scrollTrigger: { trigger: el, start: 'top 88%' } }
        );
      });

      gsap.utils.toArray<HTMLElement>('.rg-ci-format').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7, ease: EASE_OUT, delay: i * 0.1, scrollTrigger: { trigger: el, start: 'top 85%' } }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-[#0D0D0D] py-20 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rg-ci-head mb-12 max-w-3xl md:mb-20">
          <Kicker className="mb-5">Content Intelligence · Pegasus 1.5</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            What the top
            <br />
            performers <span className="text-[#FD3737]">reveal.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:text-lg">
            Six top-performing videos across YouTube and TikTok, analyzed with TwelveLabs Pegasus 1.5.
            The embeds below are the actual content. The stats are real. The findings are from the model.
          </p>
        </div>

        {/* Video shadowbox cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {TOP_VIDEOS.map((v, i) => (
            <div
              key={i}
              className="rg-ci-card group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0E0E0E] transition-colors duration-500 hover:border-[#FD3737]/30"
            >
              {/* Video embed shadowbox */}
              <div className={`relative w-full overflow-hidden bg-black ${v.embedType === 'tiktok' ? 'mx-auto max-w-[320px]' : ''}`}>
                <div className={`relative w-full ${v.embedType === 'tiktok' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  {v.embedType === 'youtube' ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.embedId}`}
                      title={v.title}
                      className="absolute inset-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${v.embedId}`}
                      title={v.title}
                      className="absolute inset-0 h-full w-full"
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>

              {/* Stats overlay bar */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 md:px-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FD3737]">{v.platform}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8B8C0]">{v.channel}</span>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg text-white md:text-xl">{v.title}</h3>

                {/* Stats row */}
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xl text-white md:text-2xl">{v.views}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8B8C0]">{v.platform === 'TikTok' ? 'plays' : 'views'}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-base text-[#E4E4E9] md:text-lg">{v.likes}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8B8C0]">likes</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-base text-[#E4E4E9] md:text-lg">{v.comments}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8B8C0]">comments</span>
                  </div>
                </div>

                {/* Pegasus finding */}
                <p className="mt-4 border-t border-white/5 pt-4 text-sm leading-relaxed text-[#B8B8C0]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FD3737]">Pegasus 1.5 </span>
                  {v.finding}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Format insights */}
        <div className="mt-16 md:mt-20">
          <Kicker className="mb-8">Format insights</Kicker>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {FORMAT_INSIGHTS.map((f, i) => (
              <div
                key={i}
                className="rg-ci-format rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 md:p-7"
              >
                <p className="font-display text-xl text-white md:text-2xl">{f.format}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#FD3737]">{f.share}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#B8B8C0]">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
