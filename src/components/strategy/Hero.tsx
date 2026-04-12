'use client';
import { motion } from '@/lib/motion-shim';
import { BrandStrategy } from '@/lib/types/strategy';

interface HeroProps {
  strategy: BrandStrategy;
}

function Hero({ strategy }: HeroProps) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0A0A0A]">
      {strategy.images.hero1 && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${strategy.images.hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full border border-[#FD3737]/40 text-[#FD3737] text-sm font-semibold tracking-wider uppercase">
            Brand Strategy
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
          {strategy.brandName}
        </h1>

        <div className="w-20 h-1 bg-[#FD3737] mx-auto mb-8" />

        <p className="text-xl md:text-2xl text-[#E4E4E9] mb-10 leading-relaxed font-medium">
          {strategy.tagline}
        </p>

        <p className="text-base md:text-lg text-[#B8B8C0] max-w-2xl mx-auto leading-relaxed">
          {strategy.executiveSummary.thesis}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#executive-summary"
            className="px-8 py-3.5 rounded-lg bg-[#FD3737] text-white font-bold hover:bg-[#e02e2e] transition-colors text-base"
          >
            View Strategy
          </a>
          <a
            href="#roadmap"
            className="px-8 py-3.5 rounded-lg border-2 border-[#FD3737] text-[#FD3737] font-bold hover:bg-[#FD3737]/10 transition-colors text-base"
          >
            See Roadmap
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-[#B8B8C0]">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-[#FD3737]/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#FD3737] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
