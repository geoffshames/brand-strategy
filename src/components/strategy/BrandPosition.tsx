'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface BrandPositionProps {
  strategy: BrandStrategy;
}

function BrandPosition({ strategy }: BrandPositionProps) {
  const audit = strategy.brandAudit;

  return (
    <SectionWrapper id="brand-position">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Brand Audit</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Current Positioning</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-8" />
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{audit.positioning}</p>
        </div>

        {audit.gap && (
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#FD3737]/10 to-transparent border-l-4 border-[#FD3737]">
            <h3 className="text-xl font-bold text-[#FD3737] mb-3">The Gap</h3>
            <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed">{audit.gap}</p>
          </div>
        )}

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Social Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audit.socialAccounts.map((account, i) => {
              const isLegacy = account.note?.includes('Legacy') || account.note?.includes('fan page');
              const isNew = account.platform.includes('(New)');
              return (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isNew
                      ? 'bg-[#FD3737]/8 border-[#FD3737]/30 hover:border-[#FD3737]/60'
                      : isLegacy
                        ? 'bg-[#111] border-[#262626]/60 opacity-60'
                        : 'bg-[#111] border-[#262626]/80 hover:border-[#FD3737]/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`text-sm font-bold ${isNew ? 'text-[#FD3737]' : 'text-white'}`}>
                      {account.platform}
                    </h4>
                    {isLegacy && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#B8B8C0]/10 text-[#B8B8C0] border border-[#B8B8C0]/20 uppercase tracking-wider">
                        Archiving
                      </span>
                    )}
                    {isNew && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FD3737]/15 text-[#FD3737] border border-[#FD3737]/30 uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#B8B8C0]">{account.handle}</p>
                  {account.followers && (
                    <p className="text-sm text-[#B8B8C0] mt-1">{(account.followers / 1000).toFixed(0)}K followers</p>
                  )}
                  {account.note && (
                    <p className="text-xs text-[#666] mt-2 leading-relaxed italic">{account.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Brand Voice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audit.voiceTraits.map((trait, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111] border border-[#262626]/80 hover:border-[#FD3737]/30 transition-colors">
                <h4 className="text-base font-bold text-[#FD3737] mb-2">{trait.trait}</h4>
                <p className="text-sm md:text-base text-[#B8B8C0] leading-relaxed">{trait.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Press & Recognition</h3>
          <div className="space-y-3">
            {audit.pressHighlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#111] border border-[#262626]/80 hover:border-[#FD3737]/30 transition-colors"
              >
                <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                  highlight.tier === 'tier1' ? 'bg-[#FD3737]/20 text-[#FD3737]' : 'bg-[#1A1A1A] text-[#888]'
                }`}>
                  {highlight.tier === 'tier1' ? 'TIER 1' : highlight.tier === 'tier2' ? 'TIER 2' : 'NICHE'}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{highlight.outlet}</p>
                  <p className="text-sm text-[#B8B8C0]">{highlight.title} — {highlight.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BrandPosition;
