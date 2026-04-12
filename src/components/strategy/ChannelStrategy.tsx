'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

interface ChannelStrategyProps {
  strategy: BrandStrategy;
}

function ChannelStrategy({ strategy }: ChannelStrategyProps) {
  const channels = strategy.channelStrategy;

  return (
    <SectionWrapper id="channels">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Distribution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Channel Strategy</h2>
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{channels.overview}</p>
        </div>

        {/* Allocation Model */}
        <div className="mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60">
          <h3 className="text-2xl font-bold text-white mb-8">Budget Allocation</h3>
          <div className="space-y-4">
            {channels.allocationModel.channels.map((channel, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#E4E4E9]">{channel.channel}</span>
                  <span className="text-sm font-bold text-[#FD3737]">{channel.allocation}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#0A0A0A] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FD3737] to-[#FF6B6B]/70 rounded-full"
                    style={{ width: `${channel.allocation}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Plans - ALL tactics shown */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Channel Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.channelPlans.map((plan, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A]/80 to-[#141414]/50 border border-[#262626]/60 hover:border-[#FD3737]/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-[#FD3737] mb-2">{plan.name}</h4>
                <p className="text-sm text-[#B8B8C0] mb-4 leading-relaxed">{plan.objective}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[#E4E4E9] uppercase tracking-wider mb-2">Tactics</p>
                    <ul className="text-sm text-[#E4E4E9] space-y-1.5">
                      {plan.tactics.map((tactic, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#FD3737] flex-shrink-0">&bull;</span>
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plan.contentTypes && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#262626]/60">
                      {plan.contentTypes.map((type, j) => (
                        <span key={j} className="text-xs bg-[#262626] text-[#B8B8C0] px-2 py-0.5 rounded">{type}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-[#B8B8C0] border-t border-[#262626]/60 pt-3">
                    <span className="font-semibold text-[#E4E4E9]">Frequency:</span> {plan.frequency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ChannelStrategy;
