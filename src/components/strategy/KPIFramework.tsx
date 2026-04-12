'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

function KPIFramework({ strategy }: { strategy: BrandStrategy }) {
  return (
    <SectionWrapper id="kpis">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Performance</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">KPI Framework</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0]">Success metrics tracking 12-month transformation targets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategy.kpiFramework.map((kpi, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#111] border border-[#262626]/80 hover:border-[#FD3737]/40 transition-colors overflow-hidden"
            >
              <div className="p-6 pb-4">
                <h3 className="text-base font-bold text-[#FD3737] mb-5">{kpi.metric}</h3>
                <div className="flex items-end justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] text-[#666] uppercase tracking-widest mb-1">Now</p>
                    <p className="text-lg font-semibold text-[#B8B8C0]">{kpi.current || 'N/A'}</p>
                  </div>
                  <div className="text-[#444] text-xl">→</div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#666] uppercase tracking-widest mb-1">12-Month Target</p>
                    <p className="text-2xl font-bold text-[#FD3737]">{kpi.target}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-[#0A0A0A] border-t border-[#262626]/40">
                <p className="text-sm text-[#B8B8C0] leading-relaxed">{kpi.rationale}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default KPIFramework;
