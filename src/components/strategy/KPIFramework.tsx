'use client';
import { BrandStrategy, KPITarget } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';
import { useInView } from '@/lib/hooks/useInView';

// "27,890 (Chartmetric, Jun 2026)" -> { display: "27,890", note: "Chartmetric, Jun 2026", num: 27890 }
function parseStat(raw?: string): { display: string; note: string; num: number | null } {
  if (!raw) return { display: 'N/A', note: '', num: null };
  const m = raw.match(/^([^(]+?)\s*(?:\((.+)\))?$/);
  const display = (m?.[1] || raw).trim();
  const note = (m?.[2] || '').trim();
  const numMatch = display.replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  let num = numMatch ? parseFloat(numMatch[0]) : null;
  if (num !== null && /\d\s*K\b/i.test(display)) num *= 1000;
  if (num !== null && /\d\s*M\b/i.test(display)) num *= 1000000;
  return { display, note, num };
}

function KPICard({ kpi, index }: { kpi: KPITarget; index: number }) {
  const { ref, isInView } = useInView();
  const now = parseStat(kpi.current);
  const target = parseStat(kpi.target);
  const pct =
    now.num !== null && target.num !== null && target.num > 0
      ? Math.max(0, Math.min(100, (now.num / target.num) * 100))
      : null;

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#262626]/80 hover:border-[#FD3737]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(253,55,55,0.3)] overflow-hidden"
    >
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FD3737]/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
      {/* ghost index */}
      <span className="absolute top-4 right-5 text-[2.6rem] leading-none font-bold text-[#1F1F1F] group-hover:text-[#2A1212] transition-colors select-none" aria-hidden>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="p-6 pb-5 flex-1">
        <p className="text-[10px] text-[#FD3737] uppercase tracking-[0.25em] font-semibold mb-2">KPI {String(index + 1).padStart(2, '0')}</p>
        <h3 className="text-lg font-bold text-white mb-6 pr-12">{kpi.metric}</h3>

        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[10px] text-[#8A8A92] uppercase tracking-widest mb-1.5">Now</p>
            <p className="text-3xl font-bold text-[#FAFAFA] tabular-nums leading-none truncate">{now.display}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[#8A8A92] uppercase tracking-widest mb-1.5">12-Month Target</p>
            <p className="text-3xl font-bold text-[#FD3737] tabular-nums leading-none">{target.display}</p>
          </div>
        </div>

        {pct !== null ? (
          <div className="mt-6">
            <div className="h-1.5 rounded-full bg-[#262626] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#D42D2D] to-[#FD3737]"
                style={{
                  width: isInView ? `${pct}%` : '0%',
                  transition: `width 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${index * 90}ms`,
                }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="text-[11px] text-[#B8B8C0] truncate">{now.note || ' '}</p>
              <p className="text-[11px] text-[#B8B8C0] tabular-nums flex-shrink-0">{Math.round(pct)}% of target</p>
            </div>
          </div>
        ) : (
          now.note && <p className="mt-6 text-[11px] text-[#B8B8C0]">{now.note}</p>
        )}
      </div>

      <div className="px-6 py-4 bg-[#0A0A0A]/80 border-t border-[#262626]/50">
        <p className="text-sm text-[#B8B8C0] leading-relaxed">{kpi.rationale}</p>
      </div>
    </div>
  );
}

function KPIFramework({ strategy }: { strategy: BrandStrategy }) {
  return (
    <SectionWrapper id="kpis">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Performance</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">KPI Framework</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0]">Success metrics tracking 12-month transformation targets. Bars show current position against target.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {strategy.kpiFramework.map((kpi, i) => (
            <KPICard key={i} kpi={kpi} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default KPIFramework;
