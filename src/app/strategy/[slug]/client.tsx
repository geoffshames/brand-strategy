'use client';

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

interface StrategyClientProps {
  strategy: BrandStrategy;
}

export default function StrategyClient({ strategy }: StrategyClientProps) {
  return (
    <>
      <ScrollProgress />
      <Hero strategy={strategy} />
      <BrandPosition strategy={strategy} />
      <SWOTAnalysis strategy={strategy} />
      <SectionDivider />
      <ExecutiveSummary strategy={strategy} />
      <AudienceIntelligence strategy={strategy} />
      <SectionDivider />
      <CompetitiveLandscape strategy={strategy} />
      <StrategicPillars strategy={strategy} />
      <SectionDivider />
      <PhasedRoadmap strategy={strategy} />
      <SectionDivider />
      <ChannelStrategy strategy={strategy} />
      <SectionDivider />
      <KPIFramework strategy={strategy} />
      <RiskMatrix strategy={strategy} />
      <SectionDivider />
      <Recommendations strategy={strategy} />
      <Footer />
    </>
  );
}
