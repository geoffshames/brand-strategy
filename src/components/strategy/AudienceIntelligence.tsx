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
          <h2 className="text-4xl md:text-5xl font-bold text-[#E4E4E9]">Who They Are</h2>
        </div>

        {/* Core Demographic */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-2xl p-6 md:p-8">
            <h3 className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Core Demographic</h3>
            <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">
              {audience.coreDemographic}
            </p>
          </div>
        </div>

        {/* Psychographic Drivers */}
        {audience.psychographics && audience.psychographics.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#E4E4E9] mb-6">Psychographic Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {audience.psychographics.map((item: string, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-xl p-5">
                  <div className="flex gap-3">
                    <span className="text-[#FD3737] text-lg flex-shrink-0">&#9670;</span>
                    <p className="text-[#E4E4E9] text-sm leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fan Segments - NO red size badges */}
        {audience.fanSegments && audience.fanSegments.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#E4E4E9] mb-6">Fan Segmentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.fanSegments.map((seg: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-[#E4E4E9] mb-1">{seg.segment}</h4>
                  <p className="text-sm text-[#B8B8C0] mb-3">{seg.size}</p>
                  {seg.characteristics && (
                    <ul className="space-y-1.5 mb-3">
                      {seg.characteristics.map((c: string, i: number) => (
                        <li key={i} className="text-sm text-[#B8B8C0] flex gap-2">
                          <span className="text-[#FD3737]">&bull;</span> {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  {seg.touchpoints && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#262626]">
                      {seg.touchpoints.map((t: string, i: number) => (
                        <span key={i} className="text-xs bg-[#262626] text-[#B8B8C0] px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pain Points & Conversion Barriers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {audience.painPoints && audience.painPoints.length > 0 && (
            <div className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#E4E4E9] mb-4">Pain Points</h3>
              <ul className="space-y-3">
                {audience.painPoints.map((p: string, i: number) => (
                  <li key={i} className="text-sm text-[#B8B8C0] flex gap-2">
                    <span className="text-[#FD3737]">&#9650;</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {audience.conversionBarriers && audience.conversionBarriers.length > 0 && (
            <div className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#E4E4E9] mb-4">Conversion Barriers</h3>
              <ul className="space-y-3">
                {audience.conversionBarriers.map((b: string, i: number) => (
                  <li key={i} className="text-sm text-[#B8B8C0] flex gap-2">
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
            <h3 className="text-2xl font-semibold text-[#E4E4E9] mb-6">Voice of the Fan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.customerQuotes.map((q: any, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 rounded-2xl p-6">
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
