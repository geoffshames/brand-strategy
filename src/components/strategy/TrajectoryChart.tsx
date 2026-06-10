'use client';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';
import SectionWrapper from './SectionWrapper';

const W = 920;
const H = 360;
const PAD = { top: 40, right: 70, bottom: 46, left: 64 };

function fmt(v: number) {
  return v >= 1000 ? `${Math.round(v / 100) / 10}K` : `${v}`;
}

function TrajectoryChart({ strategy }: { strategy: BrandStrategy }) {
  const { ref, isInView } = useInView();
  const t = strategy.trajectory;
  if (!t || t.actual.length === 0) return null;

  const all = [...t.actual, ...t.projected];
  const maxV = Math.max(...all.map((p) => p.value)) * 1.15;
  const iw = W - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const x = (i: number) => PAD.left + (iw * i) / Math.max(all.length - 1, 1);
  const y = (v: number) => PAD.top + ih - (ih * v) / maxV;

  const actualPts = t.actual.map((p, i) => `${x(i)},${y(p.value)}`).join(' ');
  const lastActualIdx = t.actual.length - 1;
  const projPts = [t.actual[lastActualIdx], ...t.projected]
    .map((p, k) => `${x(lastActualIdx + k)},${y(p.value)}`)
    .join(' ');
  const areaPts = `${PAD.left},${y(0)} ${actualPts} ${x(lastActualIdx)},${y(0)}`;
  const gridVals = [Math.round(maxV * 0.25), Math.round(maxV * 0.5), Math.round(maxV * 0.75)];

  return (
    <SectionWrapper id="trajectory">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Momentum</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">The Trajectory</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-3xl">
            {t.metricLabel}: what the album cycle proved (solid), and the path this plan commits to (dashed).
          </p>
        </div>

        <div
          ref={ref}
          className="rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#262626]/80 p-4 md:p-8 overflow-x-auto"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'none' : 'translateY(16px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[640px]" role="img" aria-label={t.metricLabel}>
            <defs>
              <linearGradient id="trajArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FD3737" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#FD3737" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {gridVals.map((gv, i) => (
              <g key={i}>
                <line x1={PAD.left} y1={y(gv)} x2={W - PAD.right} y2={y(gv)} stroke="#222" strokeDasharray="3 5" />
                <text x={PAD.left - 10} y={y(gv) + 4} textAnchor="end" fontSize="12" fill="#8A8A92">{fmt(gv)}</text>
              </g>
            ))}
            <line x1={PAD.left} y1={y(0)} x2={W - PAD.right} y2={y(0)} stroke="#333" />

            <polygon points={areaPts} fill="url(#trajArea)" />
            <polyline points={actualPts} fill="none" stroke="#FD3737" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={projPts} fill="none" stroke="#FD3737" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.85" />

            {all.map((p, i) => {
              const projected = i > lastActualIdx;
              return (
                <g key={i}>
                  <circle cx={x(i)} cy={y(p.value)} r={projected ? 4.5 : 5.5} fill={projected ? '#0A0A0A' : '#FD3737'} stroke="#FD3737" strokeWidth="2" />
                  <text x={x(i)} y={y(p.value) - 14} textAnchor="middle" fontSize="13" fontWeight="700" fill={projected ? '#E4E4E9' : '#FFFFFF'}>
                    {fmt(p.value)}
                  </text>
                  <text x={x(i)} y={H - 14} textAnchor="middle" fontSize="12" fill="#8A8A92">{p.label}</text>
                </g>
              );
            })}

            <text x={x(all.length - 1) + 12} y={y(all[all.length - 1].value) + 4} fontSize="12" fontWeight="700" fill="#FD3737">TARGET</text>
          </svg>

          <div className="mt-4 flex flex-wrap items-center gap-6 px-2">
            <span className="flex items-center gap-2 text-xs text-[#B8B8C0]"><span className="inline-block w-6 h-0.5 bg-[#FD3737] rounded" /> Actual (Chartmetric)</span>
            <span className="flex items-center gap-2 text-xs text-[#B8B8C0]"><span className="inline-block w-6 h-0.5 rounded" style={{ backgroundImage: 'repeating-linear-gradient(90deg,#FD3737 0 4px,transparent 4px 8px)' }} /> Planned trajectory</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default TrajectoryChart;
