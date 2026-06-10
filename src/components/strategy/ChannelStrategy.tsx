'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';

function ChannelStrategy({ strategy }: { strategy: BrandStrategy }) {
  const channels = strategy.channelStrategy;

  return (
    <SectionWrapper id="channels">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Distribution</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Channel Strategy</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#E4E4E9] leading-relaxed max-w-3xl">{channels.overview}</p>
        </div>

        <div className="mb-16 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#262626]/80">
          <h3 className="text-2xl font-bold text-white mb-8">Budget Allocation</h3>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-center">
            <div className="relative mx-auto w-[220px] h-[220px]">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {(() => {
                  const palette = ['#FD3737', '#D42D2D', '#A33A3A', '#A1A1AA', '#6E6E76', '#4A4A50', '#333333'];
                  const r = 80;
                  const c = 2 * Math.PI * r;
                  let acc = 0;
                  return channels.allocationModel.channels.map((channel, i) => {
                    const frac = channel.allocation / 100;
                    const seg = (
                      <circle
                        key={i}
                        cx="100" cy="100" r={r}
                        fill="none"
                        stroke={palette[i % palette.length]}
                        strokeWidth="26"
                        strokeDasharray={`${Math.max(frac * c - 3, 1)} ${c}`}
                        strokeDashoffset={-acc * c}
                      />
                    );
                    acc += frac;
                    return seg;
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>100%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A8A92] mt-1">of budget</span>
              </div>
            </div>
            <div className="space-y-3">
              {channels.allocationModel.channels.map((channel, i) => {
                const palette = ['#FD3737', '#D42D2D', '#A33A3A', '#A1A1AA', '#6E6E76', '#4A4A50', '#333333'];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: palette[i % palette.length] }} />
                    <span className="text-sm font-medium text-[#E4E4E9] flex-1">{channel.channel}</span>
                    <span className="text-sm font-bold text-[#FD3737] tabular-nums">{channel.allocation}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Channel Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.channelPlans.map((plan, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#111] border border-[#262626]/80 hover:border-[#FD3737]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_44px_-18px_rgba(253,55,55,0.25)]"
              >
                <h4 className="text-lg font-bold text-[#FD3737] mb-2">{plan.name}</h4>
                <p className="text-sm text-[#B8B8C0] mb-4 leading-relaxed">{plan.objective}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-[#FD3737] uppercase tracking-wider mb-2">Tactics</p>
                    <ul className="text-sm text-[#E4E4E9] space-y-1.5">
                      {plan.tactics.map((tactic, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#FD3737] flex-shrink-0">&bull;</span>
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-[#B8B8C0] border-t border-[#262626]/60 pt-3">
                    <span className="font-bold text-[#E4E4E9]">Frequency:</span> {plan.frequency}
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
