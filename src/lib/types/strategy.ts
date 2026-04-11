// ─── Voice & Brand Identity ───

export interface VoiceTrait {
  trait: string;
  evidence: string;
}

export interface SocialAccount {
  platform: string;
  handle: string;
  url: string;
  followers?: number;
}

export interface PressHighlight {
  outlet: string;
  title: string;
  date: string;
  url?: string;
  tier: "tier1" | "tier2" | "niche";
}

export interface BrandAudit {
  positioning: string;
  voiceTraits: VoiceTrait[];
  keyOfferings: string[];
  socialAccounts: SocialAccount[];
  pressHighlights: PressHighlight[];
  credibilityScore: number;
  gap: string;
}

// ─── Competitive Intelligence ───

export interface Competitor {
  name: string;
  website: string;
  spotifyMonthlyListeners: number;
  instagram: string;
  instagramFollowers?: number;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  exploitableGaps: string[];
}

export interface CompetitiveLandscape {
  competitors: Competitor[];
  marketAnalysis: string;
  crowdedness: "low" | "moderate" | "high" | "saturated";
  opportunities: string[];
}

// ─── Audience Intelligence ───

export interface CustomerQuote {
  quote: string;
  context: string;
}

export interface FanSegmentation {
  segment: string;
  size: string;
  characteristics: string[];
  touchpoints: string[];
}

export interface AudienceIntelligence {
  coreDemographic: string;
  psychographics: string[];
  fanSegments: FanSegmentation[];
  onlineBehavior: { platform: string; behavior: string }[];
  customerQuotes: CustomerQuote[];
  painPoints: string[];
  conversionBarriers: string[];
}

// ─── Video Intelligence (for artist/music brands) ───

export interface AnalyzedVideo {
  title: string;
  url: string;
  views: number;
  keyFrames: string[];
  narrative: string;
}

export interface VideoIntelligence {
  topPerformingVideos: AnalyzedVideo[];
  visualThemes: string[];
  narrativePatterns: string[];
  engagementInsights: string[];
}

// ─── Artist-Specific Intelligence ───

export interface ArtistIntelligence {
  spotifyMonthlyListeners: number;
  topSoundingReleases: { title: string; date: string; features?: string }[];
  labelConnections: string[];
  festivalExperience: string[];
  collaborationHistory: string[];
  influencerRelationships: string[];
  radioDJSupport: string[];
}

// ─── SWOT Analysis ───

export interface SWOTItem {
  title: string;
  description: string;
  evidence?: string;
}

export interface SWOTAnalysis {
  strengths: SWOTItem[];
  weaknesses: SWOTItem[];
  opportunities: SWOTItem[];
  threats: SWOTItem[];
  synthesis: string;
}

// ─── Strategic Framework ───

export interface ExecutiveSummary {
  thesis: string;
  keyFindings: string[];
  primaryRecommendation: string;
  timelineToTarget: string;
  fullNarrative: string;
}

export interface StrategicPillar {
  title: string;
  thesis: string;
  successMetrics: string[];
  keyInitiatives: string[];
}

// ─── Roadmap & Execution ───

export interface RoadmapAction {
  action: string;
  ownedBy?: string;
  deadline?: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
  actions: RoadmapAction[];
  expectedOutcomes: string[];
}

// ─── Channel Strategy ───

export interface ChannelPlan {
  name: string;
  objective: string;
  tactics: string[];
  contentTypes: string[];
  frequency: string;
}

export interface AllocationSplit {
  channel: string;
  allocation: number;
}

export interface ChannelAllocation {
  channels: AllocationSplit[];
  total: number;
}

export interface ChannelStrategy {
  overview: string;
  channelPlans: ChannelPlan[];
  allocationModel: ChannelAllocation;
  integratedTactics: string[];
}

// ─── KPI & Performance ───

export interface KPITarget {
  metric: string;
  current?: string;
  target: string;
  benchmark: string;
  timeframe: string;
  rationale: string;
}

// ─── Risk Management ───

export interface Risk {
  title: string;
  description: string;
  likelihood: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  mitigation: string;
}

// ─── Recommendations ───

export interface Recommendation {
  title: string;
  description: string;
  rationale: string;
  timeline: string;
  priority: "critical" | "high" | "medium";
  expectedOutcome: string;
}

// ─── Images ───

export interface StrategyImages {
  hero1: string;
  hero2: string;
  editorial: string;
  texture: string;
  data: string;
  closing: string;
}

// ─── Strategy Window ───

export interface StrategyWindow {
  start: string;
  end: string;
}

// ─── Main Strategy Document ───

export interface BrandStrategy {
  id: string;
  slug: string;
  brandName: string;
  industry: string;
  isArtist: boolean;
  tagline: string;
  accentColor: string;
  timeHorizon: string;
  strategyWindow: StrategyWindow;
  
  // Core Analysis
  brandAudit: BrandAudit;
  competitiveLandscape: CompetitiveLandscape;
  audienceIntelligence: AudienceIntelligence;
  videoIntelligence?: VideoIntelligence;
  artistIntelligence?: ArtistIntelligence;
  swot: SWOTAnalysis;
  
  // Strategic Framework
  executiveSummary: ExecutiveSummary;
  strategicPillars: StrategicPillar[];
  
  // Execution
  roadmap: RoadmapPhase[];
  channelStrategy: ChannelStrategy;
  kpiFramework: KPITarget[];
  riskMatrix: Risk[];
  recommendations: Recommendation[];
  
  // Metadata
  images: StrategyImages;
  preparedFor: string;
  preparedBy: string;
  date: string;
  version: string;
}
