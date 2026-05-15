import { BrandStrategy } from '@/lib/types/strategy';
import { djTimClark } from './dj-tim-clark';
import { keyveatz } from './keyveatz';
import { quenlinBlackwell } from './quenlin-blackwell';
import { beautySchoolDropout } from './beauty-school-dropout';

export const strategyMap: Record<string, BrandStrategy> = {
  'dj-tim-clark': djTimClark,
  'keyveatz': keyveatz,
  'quenlin-blackwell': quenlinBlackwell,
  'beauty-school-dropout': beautySchoolDropout,
};

export function getStrategy(slug: string): BrandStrategy | null {
  return strategyMap[slug] || null;
}

export function getAllSlugs(): string[] {
  return Object.keys(strategyMap);
}
