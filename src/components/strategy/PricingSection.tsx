'use client';
import { BrandStrategy } from '@/lib/types/strategy';
import SectionWrapper from './SectionWrapper';
import { useInView } from '@/lib/hooks/useInView';

function PricingSection({ strategy }: { strategy: BrandStrategy }) {
  const { ref, isInView } = useInView();
  const pricing = strategy.pricing;
  if (!pricing) return null;

  return (
    <SectionWrapper id="pricing" className="bg-[#0D0D0D] border-y border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">The Deal</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Engagement &amp; Pricing</h2>
          <div className="w-24 h-1 bg-[#FD3737] mb-6" />
          <p className="text-base md:text-lg text-[#B8B8C0] max-w-3xl leading-relaxed">{pricing.intro}</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {pricing.tiers.map((tier, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-[#262626]/80 hover:border-[#FD3737]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(253,55,55,0.35)] overflow-hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FD3737]/70 to-transparent" />
              <div className="p-7 pb-5 flex-1">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <p className="text-[10px] text-[#FD3737] uppercase tracking-[0.25em] font-semibold">Property {String(i + 1).padStart(2, '0')}</p>
                  {tier.badge && (
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#E4E4E9] bg-[#262626] border border-[#333] rounded-full px-3 py-1">{tier.badge}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FD3737] tabular-nums" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>{tier.monthly}</span>
                  <span className="text-sm text-[#B8B8C0]">{tier.cadenceLabel || '/month'}</span>
                </div>
                <p className="text-xs text-[#B8B8C0] mb-5">+ {tier.spendFee} of ad spend &nbsp;·&nbsp; creative at {tier.creativeRate}</p>
                <p className="text-sm text-[#B8B8C0] leading-relaxed mb-6">{tier.description}</p>
                <ul className="space-y-2.5">
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-[#E4E4E9]">
                      <span className="text-[#FD3737] flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {pricing.addons && pricing.addons.map((addon, i) => (
          <div key={i} className="relative rounded-2xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-dashed border-[#3A3A3A] hover:border-[#FD3737]/50 transition-all duration-300 p-7 md:p-8 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="lg:w-[300px] flex-shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-[10px] text-[#FD3737] uppercase tracking-[0.25em] font-semibold">Add-On</p>
                  {addon.badge && (
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#E4E4E9] bg-[#262626] border border-[#333] rounded-full px-3 py-1">{addon.badge}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{addon.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-[#FD3737] tabular-nums" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>{addon.monthly}</span>
                  <span className="text-sm text-[#B8B8C0]">{addon.cadenceLabel || '/month'}</span>
                </div>
                <p className="text-xs text-[#B8B8C0]">+ {addon.spendFee} of ad spend &nbsp;·&nbsp; creative at {addon.creativeRate}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#B8B8C0] leading-relaxed mb-5">{addon.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                  {addon.includes.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-[#E4E4E9]">
                      <span className="text-[#FD3737] flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="relative rounded-2xl border border-[#FD3737]/40 bg-gradient-to-r from-[#1A0D0D] via-[#141010] to-[#1A0D0D] p-7 md:p-9 mb-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_120%_at_50%_-30%,rgba(253,55,55,0.12),transparent)]" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] text-[#FD3737] uppercase tracking-[0.25em] font-semibold mb-2">{pricing.cap.title}</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-bold text-white tabular-nums" style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}>{pricing.cap.monthly}</span>
                <span className="text-sm text-[#B8B8C0]">/month ceiling</span>
              </div>
              <p className="text-sm md:text-base text-[#E4E4E9] leading-relaxed max-w-2xl">{pricing.cap.description}</p>
            </div>
            <a
              href={pricing.ctaHref}
              className="flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-[#FD3737] hover:bg-[#D42D2D] transition-colors px-8 py-4 text-white font-bold uppercase tracking-[0.12em] text-sm"
              style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}
            >
              {pricing.ctaLabel}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricing.terms.map((term, i) => (
            <div key={i} className="flex gap-3 rounded-xl bg-[#111] border border-[#262626]/60 px-5 py-4">
              <span className="text-[#FD3737] font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm text-[#B8B8C0] leading-relaxed">{term}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PricingSection;
