'use client';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';
import SectionWrapper from './SectionWrapper';

function FunnelDiagnostic({ strategy }: { strategy: BrandStrategy }) {
  const { ref, isInView } = useInView();
  const funnel = strategy.funnel;
  if (!funnel || funnel.length === 0) return null;

  const copy = strategy.funnelCopy || {};
  const kicker = copy.kicker || 'Diagnosis';
  const title = copy.title || 'The Inverted Funnel';
  const intro =
    copy.intro ||
    'Awareness was bought and earned at the top. Almost none of it has been routed downward into habit, ownership, and revenue. Every pillar in this strategy exists to widen the bottom of this picture.';

  const values = funnel.map((f) => f.value).filter((v) => v > 0);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const logSpan = Math.log(max) - Math.log(min) || 1;
  const widthFor = (v: number) =>
    v <= 0 ? 14 : 22 + 78 * ((Math.log(v) - Math.log(min)) / logSpan);

  return (
    <SectionWrapper id="funnel" className="bg-[#0D0D0D] border-y border-[#1E1E1E]">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">{kicker}</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-3xl">
            {intro}
          </p>
        </div>

        <div ref={ref} className="space-y-2.5">
          {funnel.map((f, i) => {
            const w = widthFor(f.value);
            const brightness = 1 - i * (0.55 / Math.max(funnel.length - 1, 1));
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="relative h-14 md:h-16 rounded-lg overflow-hidden flex items-center justify-between gap-3 px-4 md:px-6"
                  style={{
                    width: isInView ? `${w}%` : '24%',
                    minWidth: 'min(100%, 360px)',
                    background: `linear-gradient(90deg, rgba(212,45,45,${0.22 + brightness * 0.7}), rgba(253,55,55,${0.16 + brightness * 0.55}))`,
                    border: '1px solid rgba(253,55,55,0.25)',
                    transition: `width 1s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms`,
                  }}
                >
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] font-semibold text-white/90 whitespace-nowrap overflow-hidden text-ellipsis">{f.stage}</span>
                  <span className="text-base md:text-xl font-bold text-white tabular-nums whitespace-nowrap flex-shrink-0" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>
                    {f.display}
                  </span>
                </div>
                {f.note && <p className="mt-1 mb-1 text-[11px] text-[#8A8A92]">{f.note}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default FunnelDiagnostic;
