'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';
import { useState } from 'react';

interface PhasedRoadmapProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function PhasedRoadmap({ strategy }: PhasedRoadmapProps) {
  const { ref, isInView } = useInView();
  const [expandedPhase, setExpandedPhase] = useState(0);

  return (
    <motion.section
      ref={ref}
      id="roadmap"
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Phased Roadmap</h2>
          <p className="text-lg text-[#E4E4E9]">12-month transformation roadmap with quarterly acceleration checkpoints.</p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeUp} className="relative mb-16">
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FD3737] via-[#FD3737]/50 to-transparent" />

          <div className="space-y-8">
            {strategy.roadmap.map((phase, i) => (
              <motion.div
                key={i}
                className="md:pl-32 cursor-pointer"
                onClick={() => setExpandedPhase(expandedPhase === i ? -1 : i)}
                whileHover={{ x: 8 }}
              >
                <div className="absolute left-0 w-7 h-7 bg-[#FD3737] rounded-full md:left-0 mt-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>

                <div className="p-6 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#FD3737]/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-xs font-bold text-[#FD3737] uppercase tracking-wide mb-1">{phase.phase}</p>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-[#B8B8C0]">{phase.duration}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedPhase === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-5 h-5 text-[#FD3737]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: expandedPhase === i ? 'auto' : 0, opacity: expandedPhase === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-[#262626]">
                      <p className="text-base text-[#E4E4E9] mb-6">{phase.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-3">Key Actions</p>
                          <ul className="space-y-2">
                            {phase.actions.slice(0, 3).map((action, j) => (
                              <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                                <span className="text-[#FD3737]">→</span>
                                <span>{action.action}</span>
                              </li>
                            ))}
                            {phase.actions.length > 3 && (
                              <li className="text-sm text-[#B8B8C0]">+ {phase.actions.length - 3} more</li>
                            )}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#B8B8C0] uppercase tracking-wide mb-3">Expected Outcomes</p>
                          <ul className="space-y-2">
                            {phase.expectedOutcomes.map((outcome, j) => (
                              <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                                <span className="text-[#FD3737]">✓</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PhasedRoadmap;
