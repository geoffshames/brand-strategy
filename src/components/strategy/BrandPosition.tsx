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
        {/* Positioning */}
        <div className="mb-16">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Brand Audit</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Positioning</h2>
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{audit.positioning}</p>
        </div>

        {/* The Gap */}
        {audit.gap && (
          <div className="mb-16 p-6 md:p-8 rounded-2xl bg-[#FD3737]/5 border border-[#FD3737]/20">
            <h3 className="text-lg font-bold text-[#FD3737] mb-3">The Gap</h3>
            <p className="text-base text-[#E4E4E9] leading-relaxed">{audit.gap}</p>
          </div>
        )}

        {/* Social Accounts */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Social Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audit.socialAccounts.map((account, i) => {
              const isLegacy = account.note?.includes('Legacy') || account.note?.includes('fan page');
              const isNew = account.platform.includes('(New)');
              return (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isNew
                      ? 'bg-[#FD3737]/5 border-[#FD3737]/20'
                      : isLegacy
                        ? 'bg-[#141414]/80 border-[#262626]/40 opacity-70'
                        : 'bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border-[#262626]/60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`text-sm font-semibold ${isNew ? 'text-[#FD3737]' : 'text-white'}`}>
                      {account.platform}
                    </h4>
                    {isLegacy && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#B8B8C0]/10 text-[#B8B8C0] border border-[#B8B8C0]/20">
                        ARCHIVING
                      </span>
                    )}
                    {isNew && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FD3737]/10 text-[#FD3737] border border-[#FD3737]/20">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#B8B8C0]">{account.handle}</p>
                  {account.followers && (
                    <p className="text-sm text-[#B8B8C0] mt-1">{(account.followers / 1000).toFixed(0)}K followers</p>
                  )}
                  {account.note && (
                    <p className="text-xs text-[#888] mt-2 leading-relaxed italic">{account.note}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Voice Traits */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Brand Voice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audit.voiceTraits.map((trait, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60">
                <h4 className="text-base font-semibold text-[#FD3737] mb-2">{trait.trait}</h4>
                <p className="text-sm text-[#B8B8C0] leading-relaxed">{trait.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Highlights */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Press & Recognition</h3>
          <div className="space-y-3">
            {audit.pressHighlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60"
              >
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  highlight.tier === 'tier1' ? 'bg-[#FD3737]/20 text-[#FD3737]' : 'bg-[#1A1A1A] text-[#B8B8C0]'
                }`}>
                  {highlight.tier === 'tier1' ? 'TIER 1' : highlight.tier === 'tier2' ? 'TIER 2' : 'NICHE'}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{highlight.outlet}</p>
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
