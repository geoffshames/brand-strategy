'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface StrategicPillarsProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function StrategicPillars({ strategy }: StrategicPillarsProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.section
      ref={ref}
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Strategic Pillars</h2>
          <p className="text-lg text-[#B8B8C0]">Five interconnected pillars driving the 12-month transformation.</p>
        </motion.div>

        <div className="space-y-8">
          {strategy.strategicPillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 md:p-10 rounded-lg bg-gradient-to-br from-[#141414] to-[#1A1A1A] border border-[#262626] hover:border-[#FD3737]/30 transition-colors"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#FD3737]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#FD3737] font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-white flex-1">{pillar.title}</h3>
              </div>

              <p className="text-base text-[#E4E4E9] leading-relaxed mb-6">{pillar.thesis}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wide mb-3">Key Initiatives</p>
                  <ul className="space-y-2">
                    {pillar.keyInitiatives.map((initiative, j) => (
                      <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                        <span className="text-[#FD3737]">•</span>
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#B8B8C0] uppercase tracking-wide mb-3">Success Metrics</p>
                  <ul className="space-y-2">
                    {pillar.successMetrics.map((metric, j) => (
                      <li key={j} className="text-sm text-[#E4E4E9] flex gap-2">
                        <span className="text-[#FD3737]">✓</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default StrategicPillars;
