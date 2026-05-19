import { BrandStrategy } from '@/lib/types/strategy';
import { djTimClark } from './dj-tim-clark';
import { keyveatz } from './keyveatz';
import { quenlinBlackwell } from './quenlin-blackwell';
import { beautySchoolDropout } from './beauty-school-dropout';
import { eightyTwoMajor } from './82major';
import { eightyTwoMajorKo } from './82major-ko';

export const strategyMap: Record<string, BrandStrategy> = {
  'dj-tim-clark': djTimClark,
  'keyveatz': keyveatz,
  'quenlin-blackwell': quenlinBlackwell,
  'beauty-school-dropout': beautySchoolDropout,
  '82major': eightyTwoMajor,
};

// Locale-specific overrides — when a slug has a translation, getStrategyForLocale returns the localized version
export const strategyMapKo: Record<string, BrandStrategy> = {
  '82major': eightyTwoMajorKo,
};

export function getStrategy(slug: string): BrandStrategy | null {
  return strategyMap[slug] || null;
}

export function getStrategyForLocale(slug: string, locale: 'en' | 'ko'): BrandStrategy | null {
  if (locale === 'ko' && strategyMapKo[slug]) {
    return strategyMapKo[slug];
  }
  return strategyMap[slug] || null;
}

export function hasLocale(slug: string, locale: 'en' | 'ko'): boolean {
  if (locale === 'en') return slug in strategyMap;
  return slug in strategyMapKo;
}

export function getAllSlugs(): string[] {
  return Object.keys(strategyMap);
}
