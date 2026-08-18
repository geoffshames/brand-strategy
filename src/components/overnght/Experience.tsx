'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './motion';
import Opening from './SceneOpening';
import Position from './ScenePosition';
import Voice from './SceneVoice';
import PaidLane from './ScenePaidLane';
import Teardown from './SceneTeardown';
import Pattern from './ScenePattern';
import Strategy from './SceneStrategy';
import Concepts from './SceneConcepts';
import Roadmap from './SceneRoadmap';
import Closing from './SceneClosing';

const ACTS = [
  { id: 'position', label: 'The Position' },
  { id: 'voice', label: 'Category Voice' },
  { id: 'intel', label: 'Creative Intel' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'concepts', label: 'Concepts' },
];

export default function OvernghtExperience() {
  const [act, setAct] = useState('');
  const progressRef = useRef<HTMLDivElement>(null);

  // Smooth scroll driver
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    return () => lenis.destroy();
  }, []);

  // Progress bar + active act tracking
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    const progress = gsap.to(bar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.4 },
    });

    const triggers = ACTS.map((a) => {
      const el = document.getElementById(a.id);
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: 'top 45%',
        end: 'bottom 45%',
        onEnter: () => setAct(a.id),
        onEnterBack: () => setAct(a.id),
      });
    });

    return () => {
      progress.scrollTrigger?.kill();
      progress.kill();
      triggers.forEach((t) => t?.kill());
    };
  }, []);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative bg-[#0A0A0A] text-[#E4E4E9] selection:bg-[#FD3737] selection:text-white">
      {/* Scroll progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-white/5">
        <div ref={progressRef} className="h-full w-full origin-left scale-x-0 bg-[#FD3737]" />
      </div>

      {/* Act navigation */}
      <nav className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex" aria-label="Sections">
        {ACTS.map((a) => (
          <button
            key={a.id}
            onClick={() => jump(a.id)}
            className="group flex items-center gap-3"
            aria-label={a.label}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 ${
                act === a.id ? 'text-[#FAFAFA] opacity-100' : 'text-[#8A8A93] opacity-0 group-hover:opacity-100'
              }`}
            >
              {a.label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                act === a.id ? 'w-8 bg-[#FD3737]' : 'w-4 bg-white/25 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <Opening />
      <Position />
      <Voice />
      <PaidLane />
      <Teardown />
      <Pattern />
      <Strategy />
      <Concepts />
      <Roadmap />
      <Closing />
    </main>
  );
}
