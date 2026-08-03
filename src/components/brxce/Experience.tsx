'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './motion';
import Opening from './SceneOpening';
import Wound from './SceneWound';
import Catalog from './SceneCatalog';
import Wilderness from './SceneWilderness';
import Detonation from './SceneDetonation';
import Precedent from './ScenePrecedent';
import Return from './SceneReturn';
import Funnel from './SceneFunnel';
import Runway from './SceneRunway';
import Trajectory from './SceneTrajectory';
import Scoreboard from './SceneScoreboard';
import Closing from './SceneClosing';

const ACTS = [
  { id: 'wound', label: 'The Wound' },
  { id: 'wilderness', label: 'The Wilderness' },
  { id: 'detonation', label: 'The Detonation' },
  { id: 'return', label: 'The Return' },
];

export default function BrxceExperience() {
  const [act, setAct] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);

  // Smooth scroll driver
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1.0 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // Global progress bar + act tracking
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    const actTriggers = ACTS.map((a) =>
      ScrollTrigger.create({
        trigger: `#${a.id}`,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setAct(a.label),
        onEnterBack: () => setAct(a.label),
      })
    );

    return () => {
      st.kill();
      actTriggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="relative w-full max-w-full overflow-x-clip bg-[#0A0A0A] text-[#E4E4E9]">
      {/* Chrome: progress + act + identity */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div ref={progressRef} className="h-[2px] w-full origin-left scale-x-0 bg-[#FD3737]" />
        <div className="flex items-center justify-between px-5 md:px-10 pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" className="h-5 md:h-6 w-auto opacity-90" />
          <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#B8B8C0]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FD3737]" />
            {act || 'Strategy Briefing'}
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B8B8C0]">BG-27</p>
        </div>
      </div>

      <Opening />
      <Wound />
      <Catalog />
      <Wilderness />
      <Detonation />
      <Precedent />
      <Return />
      <Funnel />
      <Runway />
      <Trajectory />
      <Scoreboard />
      <Closing />
    </main>
  );
}
