'use client';
import { useInView } from '@/lib/hooks/useInView';
import { LaunchArcData } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

const W = 960;
const H = 400;
const PAD = { top: 46, right: 70, bottom: 58, left: 70 };

function fmt(v: number) {
  if (v >= 1000000) return `${Math.round(v / 10000) / 100}M`;
  if (v >= 1000) return `${Math.round(v / 100) / 10}K`;
  return `${v}`;
}

export default function LaunchArc({ arc }: { arc: LaunchArcData }) {
  const { ref, isInView } = useInView();

  const stages = arc.stages;
  const all = [...stages];
  const maxV = Math.max(...all.map((p) => p.value), arc.anchorValue) * 1.18;
  const iw = W - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const n = all.length;

  // Anchor sits between stage 2 and 3 (the detonation). Build a full path that
  // rises to the anchor, spikes, then compounds on the artist curve.
  const xs = (i: number) => PAD.left + (iw * i) / Math.max(n - 1, 1);
  const y = (v: number) => PAD.top + ih - (ih * v) / maxV;

  const anchorIdx = 2; // detonation spike lands after the first two build stages

  const points: Array<[number, number]> = stages.map((s, i) => [xs(i), y(s.value)]);
  const path = points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt[0]},${pt[1]}`).join(' ');
  const area = `${path} L${xs(n - 1)},${y(0)} L${xs(0)},${y(0)} Z`;
  const gridVals = [Math.round(maxV * 0.25), Math.round(maxV * 0.5), Math.round(maxV * 0.75)];

  // anchor marker sits exactly on the detonation stage point
  const ax = xs(anchorIdx);
  const ay = y(stages[anchorIdx].value);

  return (
    <SectionWrapper id="launch-arc" className="bg-[#0A0A0A] border-y border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-14 max-w-4xl">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.25em] font-semibold mb-4">{arc.kicker}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{arc.title}</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-8" />
          <p className="text-base md:text-lg text-[#B8B8C0] leading-relaxed">{arc.intro}</p>
        </div>

        <div
          ref={ref}
          className="rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#262626]/80 p-4 md:p-8 overflow-hidden"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'none' : 'translateY(16px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[680px]" role="img" aria-label={arc.title}>
            <defs>
              <linearGradient id="arcArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FD3737" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#FD3737" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#71717A" />
                <stop offset="34%" stopColor="#FD3737" />
                <stop offset="100%" stopColor="#FD3737" />
              </linearGradient>
            </defs>

            {gridVals.map((gv, i) => (
              <g key={i}>
                <line x1={PAD.left} y1={y(gv)} x2={W - PAD.right} y2={y(gv)} stroke="#222" strokeDasharray="3 5" />
                <text x={PAD.left - 12} y={y(gv) + 4} textAnchor="end" fontSize="12" fill="#8A8A92">{fmt(gv)}</text>
              </g>
            ))}
            <line x1={PAD.left} y1={y(0)} x2={W - PAD.right} y2={y(0)} stroke="#333" />

            <polygon points={area} fill="url(#arcArea)" />
            <path d={path} fill="none" stroke="url(#arcStroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

            {/* Detonation anchor marker */}
            <g>
              <line x1={ax} y1={PAD.top - 14} x2={ax} y2={y(0)} stroke="#FD3737" strokeWidth="1.5" strokeDasharray="2 6" opacity="0.7" />
              <circle cx={ax} cy={ay} r="13" fill="none" stroke="#FD3737" strokeWidth="2.5" />
              <circle cx={ax} cy={ay} r="5.5" fill="#FD3737" />
              <text x={ax} y={PAD.top - 24} textAnchor="middle" fontSize="12" fontWeight="700" fill="#FD3737" letterSpacing="0.1em">{arc.anchor}</text>
            </g>

            {points.map((pt, i) => {
              const isAnchor = i === anchorIdx;
              return (
                <g key={i}>
                  <circle cx={pt[0]} cy={pt[1]} r={isAnchor ? 0 : 5.5} fill="#FD3737" stroke="#0A0A0A" strokeWidth="2" />
                  <text x={pt[0]} y={pt[1] - (isAnchor ? 24 : 16)} textAnchor="middle" fontSize="14" fontWeight="700" fill="#FFFFFF">{stages[i].display}</text>
                  <text x={pt[0]} y={H - 34} textAnchor="middle" fontSize="12" fill="#8A8A92">{stages[i].phase}</text>
                  <text x={pt[0]} y={H - 18} textAnchor="middle" fontSize="11" fontWeight="600" fill="#E4E4E9">{stages[i].timeframe}</text>
                </g>
              );
            })}
          </svg>

          <div className="mt-2 flex flex-wrap items-center gap-6 px-2">
            <span className="flex items-center gap-2 text-xs text-[#B8B8C0]"><span className="inline-block w-6 h-0.5 bg-[#FD3737] rounded" /> Compounding trajectory</span>
            <span className="flex items-center gap-2 text-xs text-[#B8B8C0]"><span className="inline-block w-3 h-3 rounded-full bg-[#FD3737]" /> {arc.anchor} — the detonation</span>
          </div>
        </div>

        {/* Stage cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stages.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-[#262626]/80 p-6 hover:border-[#FD3737]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-2">{s.phase} · {s.timeframe}</p>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{s.title}</h3>
              <p className="text-sm text-[#B8B8C0] leading-relaxed">{s.description}</p>
              <p className="mt-4 pt-4 border-t border-[#262626] text-xl font-bold text-white" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>{s.display}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg md:text-2xl font-bold text-white uppercase leading-snug max-w-4xl mx-auto" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>
          {arc.claim}
        </p>
      </div>
    </SectionWrapper>
  );
}
