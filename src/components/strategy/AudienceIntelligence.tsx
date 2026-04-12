'use client';

import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface AudienceIntelligenceProps {
  strategy: BrandStrategy;
}

function AudienceIntelligence({ strategy }: AudienceIntelligenceProps) {
  const audience = strategy.audienceIntelligence;

  return (
    <SectionWrapper id="audience">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="space-y-4 mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold">Audience Intelligence</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#E4E4E9]">Who They Are</h2>
          <div className="w-24 h-1 bg-[#FD3737]" />
        </div>

        {/* Core Demographic */}
        <div className="mb-12">
          <div className="bg-[#111] border border-[#262626]/80 rounded-2xl p-6 md:p-8 border-l-4 border-l-[#FD3737]">
            <h3 className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Core Demographic</h3>
            <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">
              {audience.coreDemographic}
            </p>
          </div>
        </div>

        {/* Psychographic Drivers */}
        {audience.psychographics && audience.psychographics.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#E4E4E9] mb-6">Psychographic Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {audience.psychographics.map((item: string, idx: number) => (
                <div key={idx} className="bg-[#111] border border-[#262626]/80 rounded-xl p-5 hover:border-[#FD3737]/40 transition-colors">
                  <div className="flex gap-3">
                    <span className="text-[#FD3737] text-lg flex-shrink-0">&#9670;</span>
                    <p className="text-[#E4E4E9] text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fan Segments — NO sizes, NO touchpoint pills */}
        {audience.fanSegments && audience.fanSegments.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#E4E4E9] mb-6">Fan Segmentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.fanSegments.map((seg: any, idx: number) => (
                <div key={idx} className="bg-[#111] border border-[#262626]/80 rounded-2xl p-6 hover:border-[#FD3737]/40 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-3">{seg.segment}</h4>
                  {seg.characteristics && (
                    <ul className="space-y-2">
                      {seg.characteristics.map((c: string, i: number) => (
                        <li key={i} className="text-sm md:text-base text-[#B8B8C0] flex gap-2">
                          <span className="text-[#FD3737] flex-shrink-0">&bull;</span> {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pain Points & Conversion Barriers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {audience.painPoints && audience.painPoints.length > 0 && (
            <div className="bg-[#111] border border-[#262626]/80 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#E4E4E9] mb-4">Pain Points</h3>
              <ul className="space-y-3">
                {audience.painPoints.map((p: string, i: number) => (
                  <li key={i} className="text-sm md:text-base text-[#B8B8C0] flex gap-2">
                    <span className="text-[#FD3737]">&#9650;</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {audience.conversionBarriers && audience.conversionBarriers.length > 0 && (
            <div className="bg-[#111] border border-[#262626]/80 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#E4E4E9] mb-4">Conversion Barriers</h3>
              <ul className="space-y-3">
                {audience.conversionBarriers.map((b: string, i: number) => (
                  <li key={i} className="text-sm md:text-base text-[#B8B8C0] flex gap-2">
                    <span className="text-[#FD3737]">&#9679;</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Customer Quotes */}
        {audience.customerQuotes && audience.customerQuotes.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-[#E4E4E9] mb-6">Voice of the Fan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.customerQuotes.map((q: any, idx: number) => (
                <div key={idx} className="bg-[#111] border border-[#262626]/80 rounded-2xl p-6 border-l-4 border-l-[#FD3737]/50">
                  <p className="text-[#E4E4E9] italic text-base leading-relaxed mb-3">&ldquo;{q.quote}&rdquo;</p>
                  <p className="text-xs text-[#B8B8C0] uppercase tracking-wider">&mdash; {q.context || q.source}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default AudienceIntelligence;
