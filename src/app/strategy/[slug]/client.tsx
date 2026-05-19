'use client';

import { useState, useEffect } from 'react';
import { BrandStrategy } from '@/lib/types/strategy';
import ScrollProgress from '@/components/strategy/ScrollProgress';
import Hero from '@/components/strategy/Hero';
import BrandPosition from '@/components/strategy/BrandPosition';
import CompetitiveLandscape from '@/components/strategy/CompetitiveLandscape';
import SWOTAnalysis from '@/components/strategy/SWOTAnalysis';
import ExecutiveSummary from '@/components/strategy/ExecutiveSummary';
import StrategicPillars from '@/components/strategy/StrategicPillars';
import PhasedRoadmap from '@/components/strategy/PhasedRoadmap';
import ChannelStrategy from '@/components/strategy/ChannelStrategy';
import KPIFramework from '@/components/strategy/KPIFramework';
import RiskMatrix from '@/components/strategy/RiskMatrix';
import Recommendations from '@/components/strategy/Recommendations';
import AudienceIntelligence from '@/components/strategy/AudienceIntelligence';
import SectionDivider from '@/components/strategy/SectionDivider';
import Footer from '@/components/strategy/Footer';
import LanguageToggle from '@/components/strategy/LanguageToggle';

interface StrategyClientProps {
  strategy: BrandStrategy;
  strategyKo?: BrandStrategy | null;
}

export default function StrategyClient({ strategy, strategyKo }: StrategyClientProps) {
  const [locale, setLocale] = useState<'en' | 'ko'>('en');

  // Restore persisted locale on first mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('82major-locale');
      if (saved === 'ko' && strategyKo) setLocale('ko');
    } catch {}
  }, [strategyKo]);

  const active = locale === 'ko' && strategyKo ? strategyKo : strategy;
  const hasKo = !!strategyKo;

  return (
    <>
      <ScrollProgress />
      {hasKo && <LanguageToggle locale={locale} setLocale={setLocale} />}
      <Hero strategy={active} />
      <BrandPosition strategy={active} />
      <SWOTAnalysis strategy={active} />
      <SectionDivider />
      <ExecutiveSummary strategy={active} />
      <AudienceIntelligence strategy={active} />
      <SectionDivider />
      <CompetitiveLandscape strategy={active} />
      <StrategicPillars strategy={active} />
      <SectionDivider />
      <PhasedRoadmap strategy={active} />
      <SectionDivider />
      <ChannelStrategy strategy={active} />
      <SectionDivider />
      <KPIFramework strategy={active} />
      <RiskMatrix strategy={active} />
      <SectionDivider />
      <Recommendations strategy={active} />
      <Footer />
    </>
  );
}
