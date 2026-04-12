'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

function StrategicPillars({ strategy }: { strategy: BrandStrategy }) {
  return (
    <SectionWrapper id="pillars">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Strategy</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Strategic Pillars</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0]">{strategy.strategicPillars.length} interconnected pillars driving the 12-month transformation.</p>
        </div>

        <div className="space-y-6">
          {strategy.strategicPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-[#111] border border-[#262626]/80 border-l-4 border-l-[#FD3737] hover:border-[#FD3737]/40 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FD3737] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white flex-1">{pillar.title}</h3>
              </div>

              <p className="text-base text-[#E4E4E9] leading-relaxed mb-6">{pillar.thesis}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-[#FD3737] uppercase tracking-wide mb-3">Key Initiatives</p>
                  <ul className="space-y-2">
                    {pillar.keyInitiatives.map((initiative, j) => (
                      <li key={j} className="text-sm md:text-base text-[#E4E4E9] flex gap-2">
                        <span className="text-[#FD3737] flex-shrink-0">&bull;</span>
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FD3737] uppercase tracking-wide mb-3">Success Metrics</p>
                  <ul className="space-y-2">
                    {pillar.successMetrics.map((metric, j) => (
                      <li key={j} className="text-sm md:text-base text-[#E4E4E9] flex gap-2">
                        <span className="text-[#FD3737] flex-shrink-0">&#10003;</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default StrategicPillars;
