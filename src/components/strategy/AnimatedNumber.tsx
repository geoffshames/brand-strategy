'use client';

import { useEffect, useState } from 'react';
import { motion } from '@/lib/motion-shim';
import { useInView } from '@/lib/hooks/useInView';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedNumber({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className="font-bold text-[#FD3737]">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
