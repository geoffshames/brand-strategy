'use client';

const BARS = [0.35, 0.6, 0.45, 0.85, 0.5, 1, 0.65, 0.9, 0.4, 0.75, 0.55, 0.3];

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#FD3737]/30" />
        <div className="flex items-end gap-[3px] h-6">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-[#FD3737]/60 origin-bottom"
              style={{
                height: `${h * 100}%`,
                animation: `wave-pulse ${1.4 + (i % 5) * 0.22}s ease-in-out ${i * 0.09}s infinite`,
              }}
            />
          ))}
        </div>
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#FD3737]/30" />
      </div>
    </div>
  );
}
