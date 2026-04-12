'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

function getSeverity(likelihood: string | number, impact: string | number) {
  const map: Record<string, number> = { low: 1, medium: 2, high: 3 };
  const l = typeof likelihood === 'string' ? (map[likelihood] || 2) : likelihood;
  const i = typeof impact === 'string' ? (map[impact] || 2) : impact;
  const score = l * i;
  if (score >= 6) return { label: 'High', color: '#FD3737' };
  if (score >= 4) return { label: 'Medium', color: '#FF6B6B' };
  return { label: 'Low', color: '#B8B8C0' };
}

function cap(s: string | number) {
  if (typeof s === 'string') return s.charAt(0).toUpperCase() + s.slice(1);
  return String(s);
}

export default function RiskMatrix({ strategy }: { strategy: BrandStrategy }) {
  return (
    <SectionWrapper id="risks">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Risk Assessment</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#E4E4E9] mb-4">Risk Matrix</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-2xl">Identified risks with mitigation strategies.</p>
        </div>

        <div className="space-y-4">
          {strategy.riskMatrix.map((risk, index) => {
            const severity = getSeverity(risk.likelihood || 'medium', risk.impact || 'medium');
            return (
              <div
                key={index}
                className="border border-[#262626]/80 rounded-2xl p-6 bg-[#111] hover:border-[#FD3737]/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#E4E4E9]">{risk.title}</h3>
                    <p className="text-sm text-[#B8B8C0] leading-relaxed mt-1">{risk.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="flex gap-3 text-sm">
                      <span className="text-[#B8B8C0]">L: <span className="font-bold text-[#E4E4E9]">{cap(risk.likelihood || 'medium')}</span></span>
                      <span className="text-[#B8B8C0]">I: <span className="font-bold text-[#E4E4E9]">{cap(risk.impact || 'medium')}</span></span>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{ color: severity.color, borderColor: severity.color + '40', backgroundColor: severity.color + '10' }}
                    >
                      {severity.label}
                    </span>
                  </div>
                </div>
                {risk.mitigation && (
                  <div className="pt-4 border-t border-[#262626]/60">
                    <p className="text-sm text-[#B8B8C0] leading-relaxed">
                      <span className="text-[#FD3737] font-bold">Mitigation: </span>
                      {risk.mitigation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
