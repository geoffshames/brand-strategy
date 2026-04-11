'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/useInView';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface AudienceIntelligenceProps {
  audience: BrandStrategy['audience'];
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

export default function AudienceIntelligence({ audience }: AudienceIntelligenceProps) {
  const { ref, isInView } = useInView();

  return (
    <SectionWrapper id="audience" className="py-20">
      <div ref={ref} className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#E4E4E9]">Audience Intelligence</h2>
          <p className="text-[#B8B8C0] text-lg max-w-2xl">
            Deep insight into fan segments, psychographics, and engagement patterns across streaming and social platforms.
          </p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              label: 'Primary Audience Age',
              value: audience.demographics?.ageRange || 'N/A',
            },
            {
              label: 'Geographic Focus',
              value: audience.demographics?.geography || 'N/A',
            },
            {
              label: 'Top Genre Affinity',
              value: audience.demographics?.genres?.[0] || 'N/A',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214]"
            >
              <p className="text-[#B8B8C0] text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-[#E4E4E9]">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Fan Segments */}
        {audience.fanSegmentation && audience.fanSegmentation.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E4E4E9]">Fan Segments</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {audience.fanSegmentation.map((segment, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214] hover:border-[#FD3737] transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[#E4E4E9]">
                        {segment.name}
                      </h4>
                      <p className="text-[#B8B8C0] text-sm mt-1">
                        {segment.percentage}% of audience
                      </p>
                    </div>
                  </div>

                  <p className="text-[#B8B8C0] text-sm mb-4">
                    {segment.description}
                  </p>

                  {segment.characteristics && (
                    <div className="pt-4 border-t border-[#2A2A2E]">
                      <p className="text-xs font-semibold text-[#E4E4E9] mb-3 uppercase tracking-wider">
                        Key Characteristics
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {segment.characteristics.map((char, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#1A1A1E] text-[#B8B8C0] text-xs rounded border border-[#2A2A2E]"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Psychographics */}
        {audience.psychographics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E4E4E9]">Psychographic Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Values', items: audience.psychographics.values || [] },
                { label: 'Lifestyle', items: audience.psychographics.lifestyle || [] },
                { label: 'Music Discovery', items: audience.psychographics.musicDiscovery || [] },
                { label: 'Platform Behavior', items: audience.psychographics.platformBehavior || [] },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214]"
                >
                  <h4 className="text-sm font-semibold text-[#E4E4E9] uppercase tracking-wider mb-4">
                    {category.label}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-[#B8B8C0] text-sm flex gap-2">
                        <span className="text-[#FD3737] flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Platform Distribution */}
        {audience.videoIntelligence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E4E4E9]">Platform Intelligence</h3>
            <div className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214]">
              <p className="text-[#B8B8C0] text-sm mb-4">
                {audience.videoIntelligence.strategy}
              </p>
              {audience.videoIntelligence.topFormats && (
                <div>
                  <p className="text-sm font-semibold text-[#E4E4E9] mb-3">Top Performing Formats:</p>
                  <div className="flex flex-wrap gap-2">
                    {audience.videoIntelligence.topFormats.map((format, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1A1A1E] text-[#B8B8C0] text-xs rounded border border-[#FD3737]"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Artist Intelligence */}
        {audience.artistIntelligence && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#E4E4E9]">Artist & Collaboration Intelligence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214]">
                <p className="text-xs font-semibold text-[#E4E4E9] uppercase tracking-wider mb-3">
                  Collaboration Targets
                </p>
                <ul className="space-y-2">
                  {(audience.artistIntelligence.collaborationTargets || []).map((artist, idx) => (
                    <li key={idx} className="text-[#B8B8C0] text-sm flex gap-2">
                      <span className="text-[#FD3737] flex-shrink-0">•</span>
                      <span>{artist}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-[#2A2A2E] rounded-lg p-6 bg-[#121214]">
                <p className="text-xs font-semibold text-[#E4E4E9] uppercase tracking-wider mb-3">
                  Radio & Media Partners
                </p>
                <ul className="space-y-2">
                  {(audience.artistIntelligence.radioPartners || []).map((partner, idx) => (
                    <li key={idx} className="text-[#B8B8C0] text-sm flex gap-2">
                      <span className="text-[#FD3737] flex-shrink-0">•</span>
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
