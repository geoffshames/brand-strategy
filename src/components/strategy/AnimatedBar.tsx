'use client';

import { motion } from '@/lib/motion-shim';
import { useInView } from '@/lib/hooks/useInView';

interface AnimatedBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  delay?: number;
}

export default function AnimatedBar({
  label,
  value,
  max = 100,
  color = '#FD3737',
  delay = 0,
}: AnimatedBarProps) {
  const { ref, isInView } = useInView();
  const percentage = (value / max) * 100;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-[#E4E4E9]">{label}</label>
        <span className="text-sm text-[#B8B8C0]">{value}</span>
      </div>
      <div className="h-2 bg-[#2A2A2E] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay }}
          style={{ backgroundColor: color }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}
