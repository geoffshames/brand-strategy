'use client';

import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface RiskMatrixProps {
  strategy: BrandStrategy;
}

function getLikelihoodLabel(val: string | number): string {
  if (typeof val === 'string') return val.charAt(0).toUpperCase() + val.slice(1);
  return String(val);
}

function getImpactLabel(val: string | number): string {
  if (typeof val === 'string') return val.charAt(0).toUpperCase() + val.slice(1);
  return String(val);
}

function getSeverityFromStrings(likelihood: string | number, impact: string | number): { label: string; color: string } {
  const likelihoodMap: Record<string, number> = { low: 1, medium: 2, high: 3 };
  const impactMap: Record<string, number> = { low: 1, medium: 2, high: 3 };
  const l = typeof likelihood === 'string' ? (likelihoodMap[likelihood] || 2) : likelihood;
  const i = typeof impact === 'string' ? (impactMap[impact] || 2) : impact;
  const score = l * i;
  if (score >= 6) return { label: 'High', color: '#FD3737' };
  if (score >= 4) return { label: 'Medium', color: '#FF6B6B' };
  return { label: 'Low', color: '#B8B8C0' };
}

export default function RiskMatrix({ strategy }: RiskMatrixProps) {
  const risks = strategy.riskMatrix;

  return (
    <SectionWrapper id="risks">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Risk Assessment</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E4E4E9] mb-4">Risk Matrix</h2>
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-2xl">
            Identified risks mapped by likelihood and impact, with mitigation strategies.
          </p>
        </div>

        <div className="space-y-4">
          {risks.map((risk, index) => {
            const severity = getSeverityFromStrings(risk.likelihood || 'medium', risk.impact || 'medium');
            return (
              <div
                key={index}
                className="border border-[#262626]/60 rounded-2xl p-6 bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 hover:border-[#FD3737]/30 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[#E4E4E9]">{risk.title}</h3>
                      <p className="text-sm text-[#B8B8C0] leading-relaxed">{risk.description}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex gap-3 text-sm">
                        <span className="text-[#B8B8C0]">Likelihood: <span className="font-semibold text-[#E4E4E9]">{getLikelihoodLabel(risk.likelihood || 'medium')}</span></span>
                        <span className="text-[#B8B8C0]">Impact: <span className="font-semibold text-[#E4E4E9]">{getImpactLabel(risk.impact || 'medium')}</span></span>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full border whitespace-nowrap"
                        style={{ color: severity.color, borderColor: severity.color + '40', backgroundColor: severity.color + '10' }}
                      >
                        {severity.label}
                      </span>
                    </div>
                  </div>

                  {risk.mitigation && (
                    <div className="pt-4 border-t border-[#262626]/60">
                      <p className="text-sm text-[#B8B8C0] leading-relaxed">
                        <span className="text-[#E4E4E9] font-semibold">Mitigation: </span>
                        {risk.mitigation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
