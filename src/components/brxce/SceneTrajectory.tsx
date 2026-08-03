'use client';

import { useRef } from 'react';
import { gsap, useGSAP, EASE_OUT, Kicker } from './motion';

const POINTS = [
  { label: 'Aug 26', display: '1,395', value: 1395, verified: true },
  { label: 'Nov 26', display: '4K', value: 4000, verified: false },
  { label: 'Jan 27', display: '10K', value: 10000, verified: false },
  { label: 'Premiere', display: '125K', value: 125000, verified: false, marker: true },
  { label: 'Apr 27', display: '180K', value: 180000, verified: false },
  { label: 'Aug 27', display: '250K', value: 250000, verified: false },
];

// Plot geometry (viewBox 1000 x 430)
const X0 = 70;
const X1 = 950;
const Y_TOP = 70;
const Y_BASE = 360;
const MAXV = 250000;

const xAt = (i: number) => X0 + (i * (X1 - X0)) / (POINTS.length - 1);
const yAt = (v: number) => Y_BASE - (Math.sqrt(v) / Math.sqrt(MAXV)) * (Y_BASE - Y_TOP);

function smoothPath() {
  const pts = POINTS.map((p, i) => ({ x: xAt(i), y: yAt(p.value) }));
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

export default function Trajectory() {
  const root = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const path = pathRef.current;
      if (!path) return;

      const len = path.getTotalLength();

      if (reduced) {
        gsap.set(path, { strokeDasharray: '7 9', strokeDashoffset: 0 });
        gsap.set(['.bx-traj-pt', '.bx-traj-label', '.bx-traj-marker'], { opacity: 1 });
        return;
      }

      // Dashed projection line that draws itself on scroll
      gsap.set(path, { strokeDasharray: `${len}`, strokeDashoffset: len });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.bx-traj-chart', start: 'top 78%', end: 'top 18%', scrub: 0.5 },
        onComplete: () => gsap.set(path, { strokeDasharray: '7 9', strokeDashoffset: 0 }),
      });

      gsap.fromTo(
        '.bx-traj-head',
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 1, ease: EASE_OUT, scrollTrigger: { trigger: root.current, start: 'top 74%' } }
      );

      gsap.utils.toArray<HTMLElement>('.bx-traj-pt, .bx-traj-label').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.6, transformOrigin: 'center' },
          { opacity: 1, scale: 1, duration: 0.5, ease: EASE_OUT, delay: i * 0.05, scrollTrigger: { trigger: '.bx-traj-chart', start: 'top 55%' } }
        );
      });

      gsap.fromTo(
        '.bx-traj-marker',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: EASE_OUT, scrollTrigger: { trigger: '.bx-traj-chart', start: 'top 45%' } }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="bx-traj-head mb-12 md:mb-16">
          <Kicker className="mb-5">The Curve</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] text-white md:text-6xl">
            The shape of
            <br />
            the twelve months<span className="text-[#FD3737]">.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#B8B8C0] md:text-base">
            Spotify monthly listeners. One point on this chart exists today, verified.
            Every other point is a commitment this plan is built to hit, staged by quarter and detonated by the premiere.
          </p>
        </div>

        <div className="bx-traj-chart rounded-2xl border border-white/10 bg-[#0D0D0D] p-5 md:p-10">
          <svg viewBox="0 0 1000 430" className="w-full" role="img" aria-label="Planned Spotify monthly listener trajectory from 1,395 today to 250,000 in August 2027">
            {/* baseline grid */}
            {[Y_BASE, (Y_BASE + Y_TOP) / 2, Y_TOP].map((y, i) => (
              <line key={i} x1={X0 - 20} x2={X1 + 20} y1={y} y2={y} stroke="#FFFFFF" strokeOpacity={0.06} strokeWidth={1} />
            ))}

            {/* premiere marker */}
            <g className="bx-traj-marker" opacity={0}>
              <line x1={xAt(3)} x2={xAt(3)} y1={Y_TOP - 26} y2={Y_BASE} stroke="#FD3737" strokeOpacity={0.35} strokeWidth={1.5} strokeDasharray="3 5" />
              <text x={xAt(3)} y={Y_TOP - 38} textAnchor="middle" className="fill-[#FD3737]" fontSize="13" letterSpacing="2.5" style={{ fontFamily: 'var(--font-mono, monospace)', textTransform: 'uppercase' }}>
                MARRIAGE MARKET AIRS
              </text>
            </g>

            {/* the curve */}
            <path ref={pathRef} d={smoothPath()} fill="none" stroke="#FD3737" strokeWidth={3} strokeLinecap="round" />

            {/* points + labels */}
            {POINTS.map((p, i) => {
              const x = xAt(i);
              const y = yAt(p.value);
              const labelAbove = y - 20;
              return (
                <g key={i}>
                  {p.verified ? (
                    <g className="bx-traj-pt">
                      <circle cx={x} cy={y} r={10} fill="#FD3737" fillOpacity={0.18} />
                      <circle cx={x} cy={y} r={5} fill="#FD3737" />
                    </g>
                  ) : (
                    <circle className="bx-traj-pt" cx={x} cy={y} r={5} fill="#0D0D0D" stroke="#FD3737" strokeWidth={2} />
                  )}
                  <g className="bx-traj-label">
                    <text x={x} y={labelAbove} textAnchor={i === 0 ? 'start' : i === POINTS.length - 1 ? 'end' : 'middle'} className="fill-white" fontSize="19" style={{ fontFamily: 'var(--font-display, sans-serif)' }}>
                      {p.display}
                    </text>
                    <text x={x} y={Y_BASE + 34} textAnchor={i === 0 ? 'start' : i === POINTS.length - 1 ? 'end' : 'middle'} className="fill-[#B8B8C0]" fontSize="12.5" letterSpacing="2" style={{ fontFamily: 'var(--font-mono, monospace)', textTransform: 'uppercase' }}>
                      {p.label}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/10 pt-5">
            <span className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#B8B8C0]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FD3737]" /> Verified today
            </span>
            <span className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#B8B8C0]">
              <span className="inline-block h-2.5 w-2.5 rounded-full border-2 border-[#FD3737] bg-transparent" /> Planned trajectory
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B8B8C0]/70">Compressed scale, values as labeled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
