'use client';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
