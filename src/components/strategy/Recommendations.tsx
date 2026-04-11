'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/useInView';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface RecommendationsProps {
  recommendations: BrandStrategy['recommendations'];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Recommendations({ recommendations }: RecommendationsProps) {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper id="recommendations" className="py-20">
      <div ref={ref} className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#E4E4E9]">Strategic Recommendations</h2>
          <p className="text-[#B8B8C0] text-lg max-w-2xl">
            Prioritized action items to accelerate brand growth and market penetration.
          </p>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214] hover:border-[#FD3737] transition-all group"
            >
              {/* Priority Number */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FD3737] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#E4E4E9] group-hover:text-[#FD3737] transition-colors">
                      {rec.title}
                    </h3>
                    {rec.timeline && (
                      <p className="text-xs text-[#B8B8C0] mt-1">
                        {rec.timeline}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#B8B8C0] text-sm mb-4 leading-relaxed">
                {rec.description}
              </p>

              {/* Key Actions */}
              {rec.keyActions && rec.keyActions.length > 0 && (
                <div className="pt-4 border-t border-[#2A2A2E]">
                  <p className="text-xs font-semibold text-[#E4E4E9] mb-3 uppercase tracking-wider">
                    Key Actions
                  </p>
                  <ul className="space-y-2">
                    {rec.keyActions.map((action, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#B8B8C0] flex gap-2"
                      >
                        <span className="text-[#FD3737] flex-shrink-0">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              {rec.impact && (
                <div className="pt-4 border-t border-[#2A2A2E] mt-4">
                  <p className="text-xs font-semibold text-[#E4E4E9] uppercase tracking-wider mb-2">
                    Expected Impact
                  </p>
                  <p className="text-xs text-[#B8B8C0]">
                    {rec.impact}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Implementation Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-[#2A2A2E]"
        >
          <div className="bg-[#121214] border border-[#2A2A2E] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#E4E4E9] mb-3">
              Implementation Strategy
            </h3>
            <p className="text-[#B8B8C0] text-sm leading-relaxed">
              Recommendations are prioritized by impact and feasibility. Begin with quick wins (Items 1-3) to build momentum, 
              then transition to medium-term initiatives (Items 4-5) that establish competitive advantage. Reserve long-term 
              strategic investments (Items 6-7) for post-launch optimization phase.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
