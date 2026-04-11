'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/useInView';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface RiskMatrixProps {
  risks: BrandStrategy['risks'];
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

export default function RiskMatrix({ risks }: RiskMatrixProps) {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper id="risks" className="py-20">
      <div ref={ref} className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#E4E4E9]">Risk Matrix</h2>
          <p className="text-[#B8B8C0] text-lg max-w-2xl">
            Identified risks mapped by likelihood and impact, with mitigation strategies to ensure project success.
          </p>
        </motion.div>

        {/* Matrix Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6"
        >
          {risks.map((risk, index) => {
            // Calculate position on matrix (likelihood x impact both 1-5)
            const likelihood = risk.likelihood || 3;
            const impact = risk.impact || 3;
            const severity = likelihood * impact;
            
            // Color coding based on severity
            let severityColor = '#22C55E'; // Low
            if (severity >= 12) severityColor = '#DC2626'; // Critical
            else if (severity >= 9) severityColor = '#EA580C'; // High
            else if (severity >= 6) severityColor = '#F59E0B'; // Medium

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214] hover:border-[#FD3737] transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Risk Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-[#E4E4E9]">
                          {risk.description}
                        </h3>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-[#B8B8C0]">Likelihood:</span>
                            <span className="font-semibold text-[#FD3737]">
                              {likelihood}/5
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#B8B8C0]">Impact:</span>
                            <span className="font-semibold text-[#FD3737]">
                              {impact}/5
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Severity Badge */}
                      <div
                        className="px-3 py-1 rounded text-white text-sm font-semibold whitespace-nowrap"
                        style={{ backgroundColor: severityColor }}
                      >
                        {severity >= 12 ? 'Critical' : severity >= 9 ? 'High' : severity >= 6 ? 'Medium' : 'Low'}
                      </div>
                    </div>

                    {/* Mitigation Strategy */}
                    {risk.mitigation && (
                      <div className="pt-4 border-t border-[#2A2A2E]">
                        <p className="text-sm text-[#B8B8C0]">
                          <span className="text-[#E4E4E9] font-semibold">Mitigation: </span>
                          {risk.mitigation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Risk Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-[#2A2A2E]"
        >
          <p className="text-sm text-[#B8B8C0] mb-4">Risk Severity Levels:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Low', color: '#22C55E' },
              { label: 'Medium', color: '#F59E0B' },
              { label: 'High', color: '#EA580C' },
              { label: 'Critical', color: '#DC2626' },
            ].map((level) => (
              <div key={level.label} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: level.color }}
                />
                <span className="text-sm text-[#B8B8C0]">{level.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
