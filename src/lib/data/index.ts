import { BrandStrategy } from '@/lib/types/strategy';
import { djTimClark } from './dj-tim-clark';

export const strategyMap: Record<string, BrandStrategy> = {
  'dj-tim-clark': djTimClark,
};

export function getStrategy(slug: string): BrandStrategy | null {
  return strategyMap[slug] || null;
}

export function getAllSlugs(): string[] {
  return Object.keys(strategyMap);
}
