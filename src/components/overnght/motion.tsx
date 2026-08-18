'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import type { MotionValue, Transition, Variants } from 'framer-motion';

export { m };

/* ------------------------------------------------------------------ */
/* Provider                                                            */
/* ------------------------------------------------------------------ */

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

/* ------------------------------------------------------------------ */
/* Presets                                                             */
/* ------------------------------------------------------------------ */

export const presets = {
  rise: { type: 'spring', stiffness: 260, damping: 34, mass: 0.9 },
  riseSoft: { type: 'spring', stiffness: 170, damping: 30, mass: 1 },
  scaleIn: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
  snap: { type: 'spring', stiffness: 420, damping: 30 },
  bar: { type: 'spring', stiffness: 320, damping: 38 },
  fade: { duration: 0.5, ease: 'easeOut' },
  collapse: { duration: 0.28, ease: 'easeInOut' },
} satisfies Record<string, Transition>;

export type RevealPhase = 'static' | 'hidden' | 'shown';

/* ------------------------------------------------------------------ */
/* Tri-state reveal. SSR renders "static" (no styles). "hidden" is     */
/* reachable only inside a live IntersectionObserver callback, and     */
/* only for elements genuinely below the viewport. If the observer     */
/* never runs, nothing is ever hidden.                                 */
/* ------------------------------------------------------------------ */

export function useRevealPhase<T extends HTMLElement>(disabled: boolean) {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<RevealPhase>('static');

  useEffect(() => {
    if (disabled) {
      setPhase((p) => (p === 'hidden' ? 'shown' : p));
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    let armed = false;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[entries.length - 1];
        const vpBottom = e.rootBounds?.bottom ?? window.innerHeight;
        const vpH = e.rootBounds?.height ?? window.innerHeight;

        if (!armed) {
          armed = true;
          if (e.isIntersecting || e.boundingClientRect.top < vpBottom) {
            io.disconnect();
            return;
          }
          setPhase('hidden');
          return;
        }
        if (e.intersectionRatio >= 0.25 || e.intersectionRect.height >= vpH * 0.35) {
          setPhase('shown');
          io.disconnect();
        }
      },
      { threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [disabled]);

  return { ref, phase };
}

type RevealCustom = { y: number; scale?: number; transition: Transition; stagger?: number };

export const revealVariants: Variants = {
  static: {},
  hidden: (c?: RevealCustom) => ({
    opacity: 0,
    y: c?.y ?? 14,
    ...(c?.scale != null ? { scale: c.scale } : {}),
    transition: { duration: 0 },
  }),
  shown: (c?: RevealCustom) => ({
    opacity: 1,
    y: 0,
    ...(c?.scale != null ? { scale: 1 } : {}),
    transition: {
      ...(c?.transition ?? presets.rise),
      ...(c?.stagger ? { staggerChildren: c.stagger, delayChildren: 0.06 } : {}),
    },
  }),
};

export const revealItemVariants: Variants = {
  static: {},
  hidden: { opacity: 0, y: 12, transition: { duration: 0 } },
  shown: { opacity: 1, y: 0, transition: presets.rise },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
  scale?: number;
  transition?: Transition;
  stagger?: number;
  as?: 'div' | 'section' | 'article' | 'li';
};

export function Reveal({ children, className, style, y = 14, scale, transition = presets.rise, stagger }: RevealProps) {
  const reduced = useReducedMotion();
  const { ref, phase } = useRevealPhase<HTMLDivElement>(!!reduced);
  return (
    <m.div
      ref={ref}
      className={className}
      style={style}
      variants={revealVariants}
      custom={{ y, scale, transition, stagger } satisfies RevealCustom}
      initial={false}
      animate={reduced ? 'static' : phase}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={revealItemVariants}>
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* Collapse: measured height auto tween, content stays mounted.        */
/* ------------------------------------------------------------------ */

const contentIn: Transition = { duration: 0.2, ease: 'easeOut', delay: 0.12 };
const contentOut: Transition = { duration: 0.14, ease: 'easeOut' };
const instant: Transition = { duration: 0 };

export function Collapse({
  open,
  id,
  labelledBy,
  children,
  className,
}: {
  open: boolean;
  id: string;
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <m.div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      aria-hidden={!open}
      className={className}
      style={{ overflow: 'hidden' }}
      initial={false}
      animate={{ height: open ? 'auto' : 0 }}
      transition={reduced ? instant : presets.collapse}
    >
      <m.div
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={reduced ? instant : open ? contentIn : contentOut}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        {children}
      </m.div>
    </m.div>
  );
}

export function PlusMark({ open }: { open: boolean }) {
  const reduced = useReducedMotion();
  return (
    <m.span
      aria-hidden
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 font-mono text-base text-[#FAFAFA]"
      initial={false}
      animate={{ rotate: open ? 45 : 0 }}
      transition={reduced ? instant : presets.snap}
    >
      +
    </m.span>
  );
}

/* ------------------------------------------------------------------ */
/* Chrome: hide-on-down top bar + progress rule.                       */
/* ------------------------------------------------------------------ */

export function useChromeHidden(showAfter = 12, hideAfter = 28, topLock = 96) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);
  const dirRef = useRef<1 | -1>(-1);
  const anchorRef = useRef(0);
  const lastRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const dir: 1 | -1 = y > lastRef.current ? 1 : -1;
    lastRef.current = y;
    if (dir !== dirRef.current) {
      dirRef.current = dir;
      anchorRef.current = y;
    }
    const commit = (v: boolean) => {
      if (hiddenRef.current !== v) {
        hiddenRef.current = v;
        setHidden(v);
      }
    };
    if (y <= topLock) return commit(false);
    const travelled = Math.abs(y - anchorRef.current);
    if (dir === 1 && travelled > hideAfter) commit(true);
    else if (dir === -1 && travelled > showAfter) commit(false);
  });

  return hidden;
}

const topBarVariants: Variants = {
  shown: { y: 0 },
  hidden: { y: '-110%' },
};

export function BarShell({ children, className }: { children: React.ReactNode; className?: string }) {
  const hidden = useChromeHidden();
  const reduced = useReducedMotion();
  return (
    <m.header
      className={className}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      variants={topBarVariants}
      initial={false}
      animate={hidden ? 'hidden' : 'shown'}
      transition={reduced ? instant : presets.bar}
    >
      {children}
      <ScrollProgressBar />
    </m.header>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 36, restDelta: 0.001 });
  return (
    <m.div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        transformOrigin: '0% 50%',
        scaleX,
        background: '#FD3737',
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Hero entrance: SSR fully visible; hides for at most one frame       */
/* pre-paint, then springs in. Late hydration stays static.            */
/* ------------------------------------------------------------------ */

export function useHeroEntrance(maxStartMs = 3000): RevealPhase {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<RevealPhase>('static');

  useLayoutEffect(() => {
    /* Never hide when the tab is not visible: rAF is suspended there, so an
       entrance could strand the hero at its pre-animation state. Hidden tabs
       (and anything screenshotting them) get the fully visible static hero. */
    if (reduced || performance.now() > maxStartMs || document.visibilityState === 'hidden') return;
    setPhase('hidden');
    const raf = requestAnimationFrame(() => setPhase('shown'));
    /* Timers fire even when rAF does not: if the tab loses visibility mid-
       entrance, snap to shown. */
    const watchdog = window.setTimeout(() => setPhase('shown'), 700);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(watchdog);
      setPhase('shown');
    };
  }, [reduced, maxStartMs]);

  return phase;
}

export const heroVariants: Variants = {
  static: {},
  hidden: {},
  shown: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const heroTitleVariants: Variants = {
  static: {},
  hidden: { opacity: 0, y: 20, transition: { duration: 0 } },
  shown: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 28, mass: 1 } },
};

export const heroStrapVariants: Variants = {
  static: {},
  hidden: { opacity: 0, y: 14, transition: { duration: 0 } },
  shown: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 170, damping: 30, mass: 1 } },
};

export const heroMetaVariants: Variants = {
  static: {},
  hidden: { opacity: 0, y: 10, transition: { duration: 0 } },
  shown: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 240, damping: 32, mass: 0.9 } },
};

/* ------------------------------------------------------------------ */
/* Scroll word-scrub quote: SSR words carry no opacity styles.         */
/* ------------------------------------------------------------------ */

export function ScrubQuote({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const reduced = useReducedMotion();
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (reduced) {
      setLive(false);
      return;
    }
    const el = ref.current;
    if (el && el.getBoundingClientRect().top >= window.innerHeight) setLive(true);
  }, [reduced]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <blockquote ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrubWord key={i} word={word} index={i} total={words.length} progress={scrollYProgress} live={live} />
      ))}
    </blockquote>
  );
}

function ScrubWord({
  word,
  index,
  total,
  progress,
  live,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  live: boolean;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 1.5) / total);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  return (
    <>
      <m.span style={live ? { opacity } : undefined}>{word}</m.span>{' '}
    </>
  );
}
