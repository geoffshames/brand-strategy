'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface SWOTAnalysisProps {
  strategy: BrandStrategy;
}

const quadrantConfig = [
  { key: 'strengths', title: 'Strengths', borderColor: 'border-[#FD3737]/30', bgColor: 'bg-[#FD3737]/5', titleColor: 'text-[#FD3737]' },
  { key: 'weaknesses', title: 'Weaknesses', borderColor: 'border-[#E4E4E9]/20', bgColor: 'bg-[#E4E4E9]/5', titleColor: 'text-[#E4E4E9]' },
  { key: 'opportunities', title: 'Opportunities', borderColor: 'border-[#FF6B6B]/25', bgColor: 'bg-[#FF6B6B]/5', titleColor: 'text-[#FF6B6B]' },
  { key: 'threats', title: 'Threats', borderColor: 'border-[#B8B8C0]/20', bgColor: 'bg-[#B8B8C0]/5', titleColor: 'text-[#B8B8C0]' },
] as const;

function SWOTAnalysis({ strategy }: SWOTAnalysisProps) {
  const swot = strategy.swot;
  const dataMap: Record<string, Array<{ title: string; description: string }>> = {
    strengths: swot.strengths,
    weaknesses: swot.weaknesses,
    opportunities: swot.opportunities,
    threats: swot.threats,
  };

  return (
    <SectionWrapper id="swot">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Strategic Assessment</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">SWOT Analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {quadrantConfig.map(({ key, title, borderColor, bgColor, titleColor }) => (
            <div key={key} className={`p-6 md:p-8 rounded-2xl border ${borderColor} ${bgColor}`}>
              <h3 className={`text-lg font-bold mb-6 uppercase tracking-wider ${titleColor}`}>
                {title}
              </h3>
              <div className="space-y-5">
                {dataMap[key]?.map((item, i) => (
                  <div key={i}>
                    <p className="text-base font-semibold text-[#E4E4E9] mb-1.5">{item.title}</p>
                    <p className="text-sm text-[#B8B8C0] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60">
          <h3 className="text-xl font-bold text-white mb-4">Strategic Synthesis</h3>
          <p className="text-base text-[#E4E4E9] leading-relaxed">{swot.synthesis}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SWOTAnalysis;
