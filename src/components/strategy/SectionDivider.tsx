'use client';

import { motion } from '@/lib/motion-shim';
import { useInView } from '@/lib/hooks/useInView';

interface SectionDividerProps {
  variant?: 'default' | 'accent';
}

export default function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  const { ref, isInView } = useInView();

  const color = variant === 'accent' ? '#FD3737' : '#2A2A2E';

  return (
    <div ref={ref} className="py-8 flex justify-center">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="h-px w-24"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
