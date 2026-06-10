'use client';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

function StatBand({ strategy }: { strategy: BrandStrategy }) {
  const { ref, isInView } = useInView();
  const stats = strategy.statHighlights;
  if (!stats || stats.length === 0) return null;

  return (
    <div ref={ref} className="relative border-y border-[#1E1E1E] bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_120%_at_50%_-20%,rgba(253,55,55,0.07),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${i * 110}ms, transform 0.6s ease ${i * 110}ms`,
              }}
            >
              <p className="font-bold text-4xl md:text-5xl text-white tracking-tight mb-2" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>
                {s.value}
              </p>
              <div className="w-8 h-0.5 bg-[#FD3737] mx-auto mb-2" />
              <p className="text-[11px] md:text-xs text-[#B8B8C0] uppercase tracking-[0.18em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatBand;
