'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface CompetitiveLandscapeProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function CompetitiveLandscape({ strategy }: CompetitiveLandscapeProps) {
  const { ref, isInView } = useInView();
  const landscape = strategy.competitiveLandscape;

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Competitive Landscape</h2>
          <p className="text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{landscape.marketAnalysis}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landscape.competitors.map((competitor, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg bg-gradient-to-br from-[#141414] to-[#1A1A1A] border border-[#262626] hover:border-[#FD3737]/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{competitor.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Spotify Monthly Listeners</p>
                    <p className="text-lg font-semibold text-[#FD3737]">{(competitor.spotifyMonthlyListeners / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Positioning</p>
                    <p className="text-sm text-[#E4E4E9]">{competitor.positioning}</p>
                  </div>
                </div>

                <div className="border-t border-[#262626] pt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wide mb-1">Strength</p>
                    <p className="text-sm text-[#E4E4E9]">{competitor.strengths[0]}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wide mb-1">Exploitable Gap</p>
                    <p className="text-sm text-[#E4E4E9]">{competitor.exploitableGaps[0]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="p-8 rounded-lg bg-[#FD3737]/10 border border-[#FD3737]/20">
            <h3 className="text-xl font-bold text-white mb-4">Market Opportunity</h3>
            <ul className="space-y-3">
              {landscape.opportunities.map((opp, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 text-[#FD3737] font-bold">•</span>
                  <span className="text-[#E4E4E9]">{opp}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CompetitiveLandscape;
