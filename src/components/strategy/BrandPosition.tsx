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

export function BrandPosition({ strategy }: BrandPositionProps) {
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
      <div className="max-w-6xl mx-auto px-6">
        {/* Positioning */}
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Positioning</h2>
          <p className="text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{audit.positioning}</p>
        </motion.div>

        {/* Social Accounts */}
        <motion.div variants={fadeUp} className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Social Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audit.socialAccounts.map((account, i) => (
              <motion.a
                key={i}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FD3737] transition-colors group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-base font-semibold text-white group-hover:text-[#FD3737] transition-colors">
                    {account.platform}
                  </h4>
                  <svg className="w-5 h-5 text-[#FD3737] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-[#B8B8C0]">{account.handle}</p>
                {account.followers && (
                  <p className="text-xs text-[#B8B8C0] mt-2">{(account.followers / 1000).toFixed(0)}K followers</p>
                )}
              </motion.a>
            ))}
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
