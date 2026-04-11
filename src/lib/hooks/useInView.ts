'use client';
import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true); // DEFAULT TO TRUE - content visible immediately

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Reset to false, then let observer trigger true for animation effect
    setIsInView(false);
    
    // Small delay to ensure the element is properly mounted
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.05, rootMargin: '50px', ...options }
      );
      observer.observe(el);
      
      // Failsafe: if observer never fires, show content after 2 seconds
      const failsafe = setTimeout(() => setIsInView(true), 2000);
      
      return () => {
        observer.disconnect();
        clearTimeout(failsafe);
      };
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return { ref, isInView };
}
