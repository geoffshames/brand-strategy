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
import ImageBreak from '@/components/strategy/ImageBreak';
import SectionDivider from '@/components/strategy/SectionDivider';
import Footer from '@/components/strategy/Footer';

interface StrategyClientProps {
  strategy: BrandStrategy;
}

export default function StrategyClient({ strategy }: StrategyClientProps) {
  return (
    <>
      <ScrollProgress />
      
      {/* Hero Section */}
      <Hero
        brandName={strategy.brandName}
        tagline={strategy.tagline}
        executiveSummary={strategy.executiveSummary}
      />

      {/* Brand Position */}
      <BrandPosition
        positionStatement={strategy.positionStatement}
        socialAccounts={strategy.socialAccounts}
        voiceTraits={strategy.voiceTraits}
        pressHighlights={strategy.pressHighlights}
      />

      <SectionDivider />

      {/* Competitive Landscape */}
      <CompetitiveLandscape landscape={strategy.competitiveLandscape} />

      <SectionDivider />

      {/* SWOT Analysis */}
      <SWOTAnalysis swot={strategy.swot} />

      <SectionDivider />

      {/* Executive Summary */}
      <ExecutiveSummary summary={strategy.summary} />

      <SectionDivider variant="accent" />

      {/* Audience Intelligence */}
      <AudienceIntelligence audience={strategy.audience} />

      <SectionDivider />

      {/* Strategic Pillars */}
      <StrategicPillars pillars={strategy.strategicPillars} />

      <SectionDivider />

      {/* Phased Roadmap */}
      <PhasedRoadmap phases={strategy.roadmap} />

      <SectionDivider />

      {/* Channel Strategy */}
      <ChannelStrategy channels={strategy.channels} />

      <SectionDivider />

      {/* KPI Framework */}
      <KPIFramework kpis={strategy.kpis} />

      <SectionDivider />

      {/* Risk Matrix */}
      <RiskMatrix risks={strategy.risks} />

      <SectionDivider />

      {/* Recommendations */}
      <Recommendations recommendations={strategy.recommendations} />

      {/* Footer */}
      <Footer />
    </>
  );
}
