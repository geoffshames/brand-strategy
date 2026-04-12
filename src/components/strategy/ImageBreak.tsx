'use client';

import Image from 'next/image';
import { motion } from '@/lib/motion-shim';
import { useInView } from '@/lib/hooks/useInView';

interface ImageBreakProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBreak({ src, alt, caption }: ImageBreakProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className="py-12"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden border border-[#2A2A2E]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      {caption && (
        <p className="mt-4 text-sm text-[#B8B8C0] text-center italic">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
