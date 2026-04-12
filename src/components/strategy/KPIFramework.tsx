'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface KPIFrameworkProps {
  strategy: BrandStrategy;
}

function KPIFramework({ strategy }: KPIFrameworkProps) {
  return (
    <SectionWrapper id="kpis">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Performance</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">KPI Framework</h2>
          <p className="text-base md:text-lg text-[#B8B8C0]">Success metrics tracking 12-month transformation targets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategy.kpiFramework.map((kpi, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 hover:border-[#FD3737]/30 transition-colors"
            >
              <h3 className="text-base font-bold text-[#FD3737] mb-4">{kpi.metric}</h3>
              
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Current</p>
                    <p className="text-sm font-semibold text-[#E4E4E9]">{kpi.current || 'N/A'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Target</p>
                    <p className="text-xl font-bold text-[#FD3737]">{kpi.target}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0A0A0A] border border-[#262626]/40">
                  <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Benchmark</p>
                  <p className="text-sm text-[#E4E4E9]">{kpi.benchmark}</p>
                </div>

                <div className="border-t border-[#262626]/60 pt-3">
                  <p className="text-xs text-[#B8B8C0] mb-1">{kpi.timeframe}</p>
                  <p className="text-sm text-[#B8B8C0] leading-relaxed">{kpi.rationale}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default KPIFramework;
