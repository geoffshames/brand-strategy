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
import StatBand from '@/components/strategy/StatBand';
import FunnelDiagnostic from '@/components/strategy/FunnelDiagnostic';
import TrajectoryChart from '@/components/strategy/TrajectoryChart';
import FullBleedBreak from '@/components/strategy/FullBleedBreak';
import MarqueeBand from '@/components/strategy/MarqueeBand';
import CursorGlow from '@/components/strategy/CursorGlow';
import LaunchArc from '@/components/strategy/LaunchArc';
import PricingSection from '@/components/strategy/PricingSection';
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
  const breaks = active.imageBreaks || [];

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      {hasKo && <LanguageToggle locale={locale} setLocale={setLocale} />}
      <Hero strategy={active} />
      <StatBand strategy={active} />
      <MarqueeBand strategy={active} />
      <BrandPosition strategy={active} />
      <FunnelDiagnostic strategy={active} />
      <SWOTAnalysis strategy={active} />
      {breaks[0] && <FullBleedBreak {...breaks[0]} />}
      <SectionDivider />
      <ExecutiveSummary strategy={active} />
      {active.launchArc && <LaunchArc arc={active.launchArc} />}
      <AudienceIntelligence strategy={active} />
      {breaks[1] && <FullBleedBreak {...breaks[1]} />}
      <SectionDivider />
      <CompetitiveLandscape strategy={active} />
      <StrategicPillars strategy={active} />
      {breaks[2] && <FullBleedBreak {...breaks[2]} />}
      <SectionDivider />
      <PhasedRoadmap strategy={active} />
      <SectionDivider />
      <ChannelStrategy strategy={active} />
      <SectionDivider />
      <TrajectoryChart strategy={active} />
      <KPIFramework strategy={active} />
      {breaks[3] && <FullBleedBreak {...breaks[3]} />}
      <RiskMatrix strategy={active} />
      <SectionDivider />
      <Recommendations strategy={active} />
      <PricingSection strategy={active} />
      {breaks[4] && <FullBleedBreak {...breaks[4]} />}
      <Footer />
    </>
  );
}
