'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface SWOTAnalysisProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SwotGrid = ({ title, items, color }: { title: string; items: Array<{ title: string; description: string }>; color: string }) => (
  <div className={`p-8 rounded-lg border ${color}`}>
    <h3 className={`text-lg font-bold mb-6 ${color.includes('red') ? 'text-[#FD3737]' : color.includes('green') ? 'text-green-400' : color.includes('yellow') ? 'text-yellow-400' : 'text-blue-400'}`}>
      {title}
    </h3>
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
          <p className="text-xs text-[#B8B8C0]">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

function SWOTAnalysis({ strategy }: SWOTAnalysisProps) {
  const { ref, isInView } = useInView();
  const swot = strategy.swot;

  return (
    <motion.section
      ref={ref}
      id="swot"
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">SWOT Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SwotGrid
              title="Strengths"
              items={swot.strengths}
              color="border-green-400/20 bg-green-400/5"
            />
            <SwotGrid
              title="Weaknesses"
              items={swot.weaknesses}
              color="border-red-400/20 bg-red-400/5"
            />
            <SwotGrid
              title="Opportunities"
              items={swot.opportunities}
              color="border-blue-400/20 bg-blue-400/5"
            />
            <SwotGrid
              title="Threats"
              items={swot.threats}
              color="border-yellow-400/20 bg-yellow-400/5"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="p-8 rounded-lg bg-[#141414] border border-[#262626]">
          <h3 className="text-xl font-bold text-white mb-4">Strategic Synthesis</h3>
          <p className="text-base text-[#E4E4E9] leading-relaxed">{swot.synthesis}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SWOTAnalysis;
