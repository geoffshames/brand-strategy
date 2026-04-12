'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface ExecutiveSummaryProps {
  strategy: BrandStrategy;
}

function ExecutiveSummary({ strategy }: ExecutiveSummaryProps) {
  const summary = strategy.executiveSummary;

  return (
    <SectionWrapper id="executive-summary">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Overview</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Executive Summary</h2>
        </div>

        <div className="mb-12">
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed whitespace-pre-line">
            {summary.fullNarrative}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {summary.keyFindings.map((finding, i) => (
            <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60">
              <p className="text-sm text-[#E4E4E9] leading-relaxed">{finding}</p>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-[#FD3737]/5 border border-[#FD3737]/20">
          <h3 className="text-lg font-bold text-white mb-3">Primary Recommendation</h3>
          <p className="text-base text-[#E4E4E9] leading-relaxed">{summary.primaryRecommendation}</p>
          <p className="text-sm text-[#B8B8C0] mt-4">Timeline: {summary.timelineToTarget}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ExecutiveSummary;
