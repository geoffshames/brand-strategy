'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface BrandPositionProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function BrandPosition({ strategy }: BrandPositionProps) {
  const { ref, isInView } = useInView();
  const audit = strategy.brandAudit;

  return (
    <motion.div
      ref={ref}
      className="w-full"
      variants={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Positioning */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Positioning</h2>
          <p className="text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{audit.positioning}</p>
        </motion.div>

        {/* Social Accounts */}
        <motion.div variants={fadeUp} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Social Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audit.socialAccounts.map((account, i) => {
              const isLegacy = account.note?.includes('Legacy') || account.note?.includes('fan page');
              const isNew = account.platform.includes('(New)');
              const Tag = account.url ? 'a' : 'div';
              const linkProps = account.url ? { href: account.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <motion.div
                  key={i}
                  className={`p-5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 ${
                    isNew
                      ? 'bg-[#FD3737]/5 border-[#FD3737]/20 hover:border-[#FD3737]/50'
                      : isLegacy
                        ? 'bg-[#141414] border-[#262626] opacity-70 hover:opacity-100'
                        : 'bg-[#141414] border-[#262626] hover:border-[#FD3737]/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`text-sm font-semibold ${isNew ? 'text-[#FD3737]' : 'text-white'}`}>
                      {account.platform}
                    </h4>
                    {isLegacy && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                        ARCHIVING
                      </span>
                    )}
                    {isNew && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FD3737]/10 text-[#FD3737] border border-[#FD3737]/20">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#B8B8C0]">{account.handle}</p>
                  {account.followers && (
                    <p className="text-xs text-[#B8B8C0] mt-1">{(account.followers / 1000).toFixed(0)}K followers</p>
                  )}
                  {account.note && (
                    <p className="text-[11px] text-[#888] mt-2 leading-relaxed italic">{account.note}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Voice Traits */}
        <motion.div variants={fadeUp} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Brand Voice</h3>
          <div className="space-y-4">
            {audit.voiceTraits.map((trait, i) => (
              <motion.div key={i} className="p-6 rounded-lg bg-[#141414] border border-[#262626]">
                <h4 className="text-base font-semibold text-[#FD3737] mb-2">{trait.trait}</h4>
                <p className="text-sm text-[#B8B8C0]">{trait.evidence}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Highlights */}
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-semibold text-white mb-8">Press & Recognition</h3>
          <div className="space-y-3">
            {audit.pressHighlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#141414] border border-[#262626]"
                whileHover={{ x: 4 }}
              >
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  highlight.tier === 'tier1' ? 'bg-[#FD3737]/20 text-[#FD3737]' : 'bg-[#1A1A1A] text-[#B8B8C0]'
                }`}>
                  {highlight.tier === 'tier1' ? 'TIER 1' : 'NICHE'}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{highlight.outlet}</p>
                  <p className="text-xs text-[#B8B8C0]">{highlight.title} — {highlight.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BrandPosition;
