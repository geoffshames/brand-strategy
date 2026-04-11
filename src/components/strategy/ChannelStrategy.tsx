'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';
import { useInView } from '@/lib/hooks/useInView';

interface ChannelStrategyProps {
  strategy: BrandStrategy;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function ChannelStrategy({ strategy }: ChannelStrategyProps) {
  const { ref, isInView } = useInView();
  const channels = strategy.channelStrategy;

  return (
    <motion.section
      ref={ref}
      className="w-full"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Channel Strategy</h2>
          <p className="text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{channels.overview}</p>
        </motion.div>

        {/* Allocation Model */}
        <motion.div variants={fadeUp} className="mb-16 p-8 rounded-lg bg-[#141414] border border-[#262626]">
          <h3 className="text-2xl font-bold text-white mb-8">Budget Allocation</h3>
          <div className="space-y-4">
            {channels.allocationModel.channels.map((channel, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#E4E4E9]">{channel.channel}</span>
                  <span className="text-sm font-bold text-[#FD3737]">{channel.allocation}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#1A1A1A] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#FD3737] to-[#FD3737]/70"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${channel.allocation}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: i * 0.05 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Channel Plans */}
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl font-bold text-white mb-8">Channel Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.channelPlans.map((plan, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg bg-[#141414] border border-[#262626]"
                whileHover={{ y: -4 }}
              >
                <h4 className="text-lg font-bold text-[#FD3737] mb-3">{plan.name}</h4>
                <p className="text-sm text-[#B8B8C0] mb-4">{plan.objective}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[#B8B8C0] uppercase mb-2">Tactics</p>
                    <ul className="text-xs text-[#E4E4E9] space-y-1">
                      {plan.tactics.slice(0, 2).map((tactic, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#FD3737]">•</span>
                          <span>{tactic}</span>
                        </li>
                      ))}
                      {plan.tactics.length > 2 && <li className="text-[#B8B8C0]">+ {plan.tactics.length - 2} more</li>}
                    </ul>
                  </div>
                  <p className="text-xs text-[#B8B8C0] border-t border-[#262626] pt-3">
                    <span className="font-semibold">Frequency:</span> {plan.frequency}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
