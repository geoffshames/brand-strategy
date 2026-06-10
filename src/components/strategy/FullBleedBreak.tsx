'use client';
import { useInView } from '@/lib/hooks/useInView';

interface FullBleedBreakProps {
  image: string;
  kicker?: string;
  statement?: string;
}

export default function FullBleedBreak({ image, kicker, statement }: FullBleedBreakProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="relative w-full h-[52vh] md:h-[64vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/35 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent,rgba(10,10,10,0.55))]" />

      {(kicker || statement) && (
        <div className="relative h-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center">
          {kicker && (
            <p
              className="text-xs md:text-sm text-[#FD3737] uppercase tracking-[0.35em] font-semibold mb-5"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(14px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
              }}
            >
              {kicker}
            </p>
          )}
          {statement && (
            <p
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-[1.05] max-w-4xl"
              style={{
                fontFamily: "'N27', 'Work Sans', sans-serif",
                textShadow: '0 4px 40px rgba(0,0,0,0.8)',
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
              }}
            >
              {statement}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
