'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface KPIFrameworkProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function KPIFramework({ strategy }: KPIFrameworkProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.section
      ref={ref}
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">KPI Framework</h2>
          <p className="text-lg text-[#B8B8C0]">Success metrics tracking 12-month transformation targets.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategy.kpiFramework.map((kpi, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-lg bg-[#141414] border border-[#262626]"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-base font-bold text-[#FD3737] mb-4">{kpi.metric}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Current</p>
                  <p className="text-sm font-semibold text-[#E4E4E9]">{kpi.current || 'N/A'}</p>
                </div>

                <div>
                  <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Target</p>
                  <p className="text-lg font-bold text-[#FD3737]">{kpi.target}</p>
                </div>

                <div className="p-3 rounded bg-[#1A1A1A] border border-[#262626]">
                  <p className="text-xs text-[#B8B8C0] uppercase tracking-wide mb-1">Benchmark</p>
                  <p className="text-xs text-[#E4E4E9]">{kpi.benchmark}</p>
                </div>

                <div className="border-t border-[#262626] pt-3">
                  <p className="text-xs text-[#B8B8C0] mb-2">{kpi.timeframe}</p>
                  <p className="text-xs text-[#B8B8C0]">{kpi.rationale}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default KPIFramework;
