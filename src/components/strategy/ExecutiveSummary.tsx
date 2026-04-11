'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface ExecutiveSummaryProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ExecutiveSummary({ strategy }: ExecutiveSummaryProps) {
  const { ref, isInView } = useInView();
  const summary = strategy.executiveSummary;

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#141414]"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Executive Summary</h2>
        </motion.div>

        <motion.div variants={fadeUp} className="prose prose-invert max-w-none mb-12">
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed whitespace-pre-wrap mb-6">
            {summary.fullNarrative}
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {summary.keyFindings.map((finding, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg bg-[#1A1A1A] border border-[#262626]"
              whileHover={{ y: -4 }}
            >
              <p className="text-sm text-[#E4E4E9]">{finding}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 p-8 rounded-lg bg-[#FD3737]/10 border border-[#FD3737]/20">
          <h3 className="text-lg font-bold text-white mb-3">Primary Recommendation</h3>
          <p className="text-base text-[#E4E4E9] leading-relaxed">{summary.primaryRecommendation}</p>
          <p className="text-sm text-[#B8B8C0] mt-4">Timeline: {summary.timelineToTarget}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ExecutiveSummary;
