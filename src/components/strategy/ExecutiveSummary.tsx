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
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Overview</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Executive Summary</h2>
          <div className="w-24 h-1 bg-[#FD3737]" />
        </div>

        {/* Thesis — big, bold callout */}
        <div className="mb-16 p-8 md:p-10 rounded-2xl border-l-4 border-[#FD3737] bg-gradient-to-r from-[#FD3737]/8 to-transparent">
          <p className="text-lg md:text-xl text-[#E4E4E9] leading-relaxed font-medium">
            {summary.thesis}
          </p>
        </div>

        {/* The 1-2-3: What the rebrand must achieve */}
        {summary.rebrandGoals && summary.rebrandGoals.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">What the rebrand must achieve</h3>
            <p className="text-base text-[#B8B8C0] mb-8">Three simultaneous objectives. Non-negotiable.</p>
            <div className="space-y-6">
              {summary.rebrandGoals.map((goal: any) => (
                <div
                  key={goal.number}
                  className="flex gap-6 items-start p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-[#262626]/80 hover:border-[#FD3737]/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#FD3737] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">{goal.number}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{goal.title}</h4>
                    <p className="text-base text-[#B8B8C0] leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Narrative */}
        <div className="mb-16">
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed whitespace-pre-line">
            {summary.fullNarrative}
          </p>
        </div>

        {/* Key Findings — bold grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Key Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {summary.keyFindings.map((finding, i) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-2xl bg-[#111] border border-[#262626]/80">
                <span className="text-[#FD3737] text-xl font-bold flex-shrink-0 mt-0.5">&#9670;</span>
                <p className="text-sm md:text-base text-[#E4E4E9] leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Recommendation — big red-accented card */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#FD3737]/10 to-[#FD3737]/3 border border-[#FD3737]/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FD3737]" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Primary Recommendation</h3>
          </div>
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed mb-6">{summary.primaryRecommendation}</p>
          <div className="flex items-center gap-2 pt-4 border-t border-[#FD3737]/20">
            <span className="text-sm font-semibold text-[#FD3737]">Timeline:</span>
            <span className="text-sm text-[#E4E4E9]">{summary.timelineToTarget}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ExecutiveSummary;
