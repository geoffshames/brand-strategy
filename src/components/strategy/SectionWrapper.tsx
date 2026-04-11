'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks/useInView';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function SectionWrapper({ children, id, className = '', delay = 0 }: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 md:py-32 ${className}`}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}
