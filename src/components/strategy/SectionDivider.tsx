'use client';

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="flex items-center gap-3">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#FD3737]/30" />
        <div className="w-2 h-2 rounded-full bg-[#FD3737]/40" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#FD3737]/30" />
      </div>
    </div>
  );
}
