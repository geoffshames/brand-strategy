'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';
import { useState } from 'react';

interface PhasedRoadmapProps {
  strategy: BrandStrategy;
}

function PhasedRoadmap({ strategy }: PhasedRoadmapProps) {
  const [expandedPhase, setExpandedPhase] = useState(0);

  return (
    <SectionWrapper id="roadmap">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Execution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Phased Roadmap</h2>
          <p className="text-base md:text-lg text-[#E4E4E9]">12-month transformation with quarterly acceleration checkpoints.</p>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FD3737] via-[#FD3737]/50 to-transparent" />

          <div className="space-y-6">
            {strategy.roadmap.map((phase, i) => (
              <div
                key={i}
                className="pl-10 md:pl-12 relative cursor-pointer"
                onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
              >
                <div className="absolute left-0 w-7 h-7 bg-[#FD3737] rounded-full flex items-center justify-center" style={{ top: '1.25rem' }}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 hover:border-[#FD3737]/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-xs font-bold text-[#FD3737] uppercase tracking-wide mb-1">{phase.phase}</p>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-[#B8B8C0]">{phase.duration}</p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      <svg className={`w-5 h-5 text-[#FD3737] transition-transform duration-300 ${expandedPhase === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {expandedPhase === i && (
                    <div className="pt-4 border-t border-[#262626]/60">
                      <p className="text-base text-[#E4E4E9] mb-6 leading-relaxed">{phase.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-3">Key Actions</p>
                          <ul className="space-y-2">
                            {phase.actions.map((action, j) => (
                              <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                                <span className="text-[#FD3737] flex-shrink-0">&rarr;</span>
                                <span>{action.action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-3">Expected Outcomes</p>
                          <ul className="space-y-2">
                            {phase.expectedOutcomes.map((outcome, j) => (
                              <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                                <span className="text-[#FD3737] flex-shrink-0">&#10003;</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PhasedRoadmap;
