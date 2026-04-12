'use client';
import React, { forwardRef } from 'react';

// Motion shim: renders plain HTML elements, ignoring all Framer Motion animation props.
// This fixes the production build issue where animations keep content at opacity: 0.

const MOTION_PROPS = new Set([
  'initial', 'animate', 'exit', 'transition', 'variants',
  'whileHover', 'whileTap', 'whileInView', 'whileFocus', 'whileDrag',
  'drag', 'dragConstraints', 'dragElastic', 'dragMomentum',
  'onAnimationStart', 'onAnimationComplete', 'onDragStart', 'onDragEnd', 'onDrag',
  'layout', 'layoutId', 'layoutDependency', 'layoutScroll',
  'viewport',
]);

function filterMotionProps(props: Record<string, unknown>): Record<string, unknown> {
  const filtered: Record<string, unknown> = {};
  for (const key in props) {
    if (!MOTION_PROPS.has(key)) {
      filtered[key] = props[key];
    }
  }
  return filtered;
}

function createMotionComponent(tag: string) {
  const Component = forwardRef<HTMLElement, Record<string, unknown>>((props, ref) => {
    const filtered = filterMotionProps(props);
    return React.createElement(tag, { ...filtered, ref });
  });
  Component.displayName = `motion.${tag}`;
  return Component;
}

export const motion = new Proxy({} as Record<string, ReturnType<typeof createMotionComponent>>, {
  get(target, prop: string) {
    if (!target[prop]) {
      target[prop] = createMotionComponent(prop);
    }
    return target[prop];
  },
});

// Re-export AnimatePresence as a passthrough
export function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
