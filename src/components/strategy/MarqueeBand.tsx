'use client';
import { BrandStrategy } from '@/lib/types/strategy';

export default function MarqueeBand({ strategy }: { strategy: BrandStrategy }) {
  const items = strategy.ticker;
  if (!items || items.length === 0) return null;
  const row = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#1E1E1E] bg-[#0A0A0A] py-4 select-none">
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: 'marquee-scroll 36s linear infinite' }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#E4E4E9]"
              style={{ fontFamily: "'N27', 'Work Sans', sans-serif" }}
            >
              {item}
            </span>
            <span className="mx-6 md:mx-8 text-[#FD3737] text-lg">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
    </div>
  );
}
