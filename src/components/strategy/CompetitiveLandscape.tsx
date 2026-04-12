'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface CompetitiveLandscapeProps {
  strategy: BrandStrategy;
}

function CompetitiveLandscape({ strategy }: CompetitiveLandscapeProps) {
  const landscape = strategy.competitiveLandscape;

  return (
    <SectionWrapper id="competitive">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Market</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Competitive Landscape</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-8" />
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{landscape.marketAnalysis}</p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landscape.competitors.map((competitor, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#111] border border-[#262626]/80 hover:border-[#FD3737]/40 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-4">{competitor.name}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Spotify Monthly Listeners</p>
                    <p className="text-2xl font-bold text-[#FD3737]">{(competitor.spotifyMonthlyListeners / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Positioning</p>
                    <p className="text-sm text-[#E4E4E9] leading-relaxed">{competitor.positioning}</p>
                  </div>
                </div>
                <div className="border-t border-[#262626]/60 pt-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-1">Strengths</p>
                    <ul className="space-y-1">
                      {competitor.strengths.map((s, j) => (
                        <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                          <span className="text-[#FD3737] flex-shrink-0">&bull;</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-1">Exploitable Gap</p>
                    <p className="text-sm text-[#E4E4E9]">{competitor.exploitableGaps[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#FD3737]/10 to-transparent border-l-4 border-[#FD3737]">
          <h3 className="text-xl font-bold text-white mb-4">Market Opportunity</h3>
          <ul className="space-y-3">
            {landscape.opportunities.map((opp, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 text-[#FD3737] font-bold text-lg">&#9670;</span>
                <span className="text-sm md:text-base text-[#E4E4E9] leading-relaxed">{opp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default CompetitiveLandscape;
