'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface BrandPositionProps {
  strategy: BrandStrategy;
}


function PlatformIcon({ platform, isNew }: { platform: string; isNew: boolean }) {
  const color = isNew ? '#FD3737' : '#E4E4E9';
  const size = 20;
  switch (platform) {
    case 'Instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'TikTok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.51a8.27 8.27 0 0 0 4.76 1.5V6.56a4.84 4.84 0 0 1-1-.13z" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    case 'SoundCloud':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 16.5a3.5 3.5 0 1 0 0-7h-1a6 6 0 0 0-12-.5" />
          <path d="M2 17h1v-4H2" /><path d="M5 17h1v-6H5" /><path d="M8 17h1V9H8" /><path d="M11 17h1V7h-1" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
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
              const isNew = !!account.isNew;
              const platformBase = account.platform;
              const isKeeping = !isLegacy && !isNew;
              const isHighlight = isNew || isKeeping;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isLegacy
                      ? 'bg-[#111] border-[#262626]/60 opacity-70'
                      : 'bg-[#FD3737]/8 border-[#FD3737]/30 hover:border-[#FD3737]/60'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isHighlight ? 'bg-[#FD3737]/20' : 'bg-[#1A1A1A]'
                    }`}>
                      <PlatformIcon platform={platformBase} isNew={isHighlight} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className={`text-lg font-bold ${isHighlight ? 'text-[#FD3737]' : 'text-white'}`}>
                          {account.platform}
                        </h4>
                        {isLegacy && (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#B8B8C0]/10 text-[#B8B8C0] border border-[#B8B8C0]/20 uppercase tracking-wider">
                            Archiving
                          </span>
                        )}
                        {isNew && (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FD3737]/15 text-[#FD3737] border border-[#FD3737]/30 uppercase tracking-wider">
                            New
                          </span>
                        )}
                      </div>
                      {account.followers && (
                        <p className={`text-sm font-semibold mt-0.5 ${isHighlight ? 'text-[#FD3737]/70' : 'text-[#666]'}`}>
                          {account.followers >= 1000 ? `${(account.followers / 1000).toFixed(account.followers >= 10000 ? 0 : 1)}K` : account.followers} followers
                        </p>
                      )}
                    </div>
                  </div>
                  {account.note && (
                    <p className="text-sm text-[#B8B8C0] leading-relaxed">{account.note}</p>
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
