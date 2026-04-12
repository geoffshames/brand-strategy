'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

export default function Recommendations({ strategy }: { strategy: BrandStrategy }) {
  return (
    <SectionWrapper id="recommendations">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Action Plan</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#E4E4E9] mb-4">Strategic Recommendations</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-2xl">Prioritized action items to accelerate brand growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategy.recommendations.map((rec, index) => (
            <div
              key={index}
              className="border border-[#262626]/80 rounded-2xl p-6 bg-[#111] hover:border-[#FD3737]/40 transition-colors"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#FD3737] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#E4E4E9]">{rec.title}</h3>
                  {rec.timeline && <p className="text-xs text-[#B8B8C0] mt-1">{rec.timeline}</p>}
                </div>
              </div>

              <p className="text-sm text-[#B8B8C0] mb-4 leading-relaxed">{rec.description}</p>

              {rec.rationale && (
                <div className="pt-3 border-t border-[#262626]/60">
                  <p className="text-xs text-[#FD3737] uppercase tracking-wider font-bold mb-1">Rationale</p>
                  <p className="text-sm text-[#B8B8C0] leading-relaxed">{rec.rationale}</p>
                </div>
              )}

              {rec.expectedOutcome && (
                <div className="pt-3 border-t border-[#262626]/60 mt-3">
                  <p className="text-xs text-[#FD3737] uppercase tracking-wider font-bold mb-1">Expected Outcome</p>
                  <p className="text-sm text-[#B8B8C0] leading-relaxed">{rec.expectedOutcome}</p>
                </div>
              )}

              {rec.priority && (
                <div className="mt-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    rec.priority === 'critical'
                      ? 'text-[#FD3737] border-[#FD3737]/30 bg-[#FD3737]/10'
                      : rec.priority === 'high'
                        ? 'text-[#FF6B6B] border-[#FF6B6B]/30 bg-[#FF6B6B]/10'
                        : 'text-[#B8B8C0] border-[#B8B8C0]/30 bg-[#B8B8C0]/10'
                  }`}>
                    {rec.priority.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
