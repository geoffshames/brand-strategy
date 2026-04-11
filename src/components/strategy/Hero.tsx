'use client';
import { motion } from 'framer-motion';
import { BrandStrategy } from '@/lib/types/strategy';

interface HeroProps {
  strategy: BrandStrategy;
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function Hero({ strategy }: HeroProps) {
  return (
    <div className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-[#0A0A0A]">
      {/* Background image if available */}
      {strategy.images.hero1 && (
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            backgroundImage: `url(${strategy.images.hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full border border-[#FD3737]/30 text-[#FD3737] text-sm font-medium">
            Brand Strategy
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {strategy.brandName}
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl text-[#E4E4E9] mb-8 leading-relaxed">
          {strategy.tagline}
        </motion.p>

        <motion.p variants={item} className="text-base md:text-lg text-[#B8B8C0] max-w-2xl mx-auto leading-relaxed">
          {strategy.executiveSummary.thesis}
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#swot"
            className="px-8 py-3 rounded-lg bg-[#FD3737] text-white font-semibold hover:bg-[#FD3737]/90 transition-colors"
          >
            View Strategy
          </a>
          <a
            href="#roadmap"
            className="px-8 py-3 rounded-lg border border-[#FD3737] text-[#FD3737] font-semibold hover:bg-[#FD3737]/10 transition-colors"
          >
            See Roadmap
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-[#B8B8C0]">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-[#B8B8C0] flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#B8B8C0] rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
