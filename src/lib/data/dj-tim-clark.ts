import { BrandStrategy } from '@/lib/types/strategy';

export const djTimClark: BrandStrategy = {
  id: 'dj-tim-clark',
  slug: 'dj-tim-clark',
  brandName: 'DJ Tim Clark',
  industry: 'Music & Entertainment',
  isArtist: true,
  tagline: 'Underground big room trance.',
  accentColor: '',
  timeHorizon: '12 months',
  strategyWindow: {
    start: 'April 2026',
    end: 'April 2027',
  },

  // ─── Brand Audit ───
  brandAudit: {
    positioning: 'Las Vegas-based EDM DJ/producer with EDMA awards and Coldharbour pedigree, currently positioned as "finance executive turned DJ" — a narrative liability that undermines artist credibility.',
    voiceTraits: [
      { trait: 'Underground with polish', evidence: 'Produces big room trance with studio-grade quality but underground sensibility. The sound is premium without being commercial.' },
      { trait: 'Relentlessly consistent', evidence: 'Weekly Inspire Radio show across 6+ stations. Committed to a 3-4 week release cadence. Shows up every week.' },
      { trait: 'Craft-first', evidence: 'Leads with production quality and sound design, not persona or backstory. Lets the music do the talking.' },
      { trait: 'Ambitious but undisciplined narrative', evidence: 'Talks openly and frequently about the finance background, which undercuts music credibility. The rebrand must redirect this energy toward music-first storytelling — the ambition is real, the framing needs to change.' },
    ],
    keyOfferings: [
      'Original "underground big room" trance sound (progressive + trance + big room hybrid)',
      'High-production-value EDM releases every 3-4 weeks',
      'Weekly Inspire Radio show on 6+ stations (Insomniac, Dash, Radio Eibiza, etc.)',
      'Coldharbour Recordings distribution network',
    ],
    socialAccounts: [
      { platform: 'Instagram', handle: '@timclarklive', url: 'https://instagram.com/timclarklive', followers: 120000, note: 'Legacy account — transitioning to fan page. Audience heavily botted with low-affinity followers from paid ads.' },
      { platform: 'Instagram (New)', handle: 'TBD — launching with rebrand', note: 'Fresh account with clean audience. Primary account post-rebrand.' },
      { platform: 'TikTok', handle: '@timclarklive', url: 'https://tiktok.com/@timclarklive', note: 'Legacy account — transitioning to fan page. Low-affinity audience from ads.' },
      { platform: 'TikTok (New)', handle: 'TBD — launching with rebrand', note: 'Fresh account for sound seeding with real fans.' },
      { platform: 'Facebook', handle: '@TimClarkLiveFB', url: 'https://facebook.com/TimClarkLiveFB', followers: 3200, note: 'Active page. Event promotion and community engagement.' },
      { platform: 'YouTube', handle: 'Tim Clark Music', url: 'https://youtube.com/@timclarklive', followers: 1800, note: 'DJ set recordings, music videos, Inspire Radio episodes.' },
      { platform: 'SoundCloud', handle: 'tim-clark-music', url: 'https://soundcloud.com/tim-clark-music', followers: 950, note: 'Extended mixes and unreleased edits. Core DJ audience.' },
    ],
    pressHighlights: [
      { outlet: 'Las Vegas Weekly', title: 'Best DJ 2025 — Readers\' Choice', date: '2025', tier: 'tier2' },
      { outlet: 'DJ Mag', title: 'Global Ad Campaign Feature', date: '2025', tier: 'tier1' },
      { outlet: 'Magnetic Magazine', title: 'Exclusive Interview', date: 'Dec 2024', tier: 'niche' },
      { outlet: 'EDMTunes', title: 'Interview Feature', date: 'May 2024', tier: 'niche' },
      { outlet: 'YourEDM', title: 'EDMA Nominee Coverage', date: '2024', tier: 'niche' },
      { outlet: 'L.A. Weekly', title: 'NYE 2024 Coverage', date: '2024', tier: 'tier2' },
    ],
    credibilityScore: 72,
    gap: 'The "finance guy turned DJ" narrative is an anchor. Current press, website, and social lead with Tradebloc background instead of music-first identity. This creates a 50:1 ratio gap: 120K Instagram followers but only 2.4K Spotify monthly listeners. The audience knows Tim Clark the persona; they don\'t know Tim Clark the artist.',
  },

  // ─── Competitive Landscape ───
  competitiveLandscape: {
    competitors: [
      {
        name: 'Nifra',
        website: 'https://djnifra.com',
        spotifyMonthlyListeners: 334800,
        instagram: '@djnifra',
        instagramFollowers: 295000,
        positioning: 'Queen of Coldharbour. Underground techno/trance.',
        strengths: ['Established brand identity', 'Massive streaming base', 'Festival circuit regular'],
        weaknesses: ['Narrow genre positioning', 'Lower social engagement ratio'],
        exploitableGaps: ['Tim\'s "underground big room" hybrid is broader-appeal sound', 'Tim has stronger social/content foundation to build from'],
      },
      {
        name: 'Daxson',
        website: 'https://daxsonmusic.com',
        spotifyMonthlyListeners: 166200,
        instagram: '@daxson_dj',
        instagramFollowers: 85000,
        positioning: 'Manchester-based Coldharbour artist. Emotionally-charged melodies.',
        strengths: ['Strong Coldharbour support', 'Emotional production appeal'],
        weaknesses: ['Limited social media presence', 'Slower release cadence'],
        exploitableGaps: ['Tim\'s content game is stronger', 'Tim can build streaming faster with consistent releases'],
      },
      {
        name: 'Estiva',
        website: 'https://estivamusic.com',
        spotifyMonthlyListeners: 354900,
        instagram: '@estiva_music',
        instagramFollowers: 120000,
        positioning: 'Dutch progressive/trance artist. Album-level artistry.',
        strengths: ['High-quality album releases', 'Festival circuit presence'],
        weaknesses: ['Less active on social', 'Lower engagement rate'],
        exploitableGaps: ['Tim can match streaming with disciplined cadence', 'Tim\'s social strategy is differentiated'],
      },
      {
        name: 'Pavlo Vicci',
        website: 'https://pavlovicci.com',
        spotifyMonthlyListeners: 89500,
        instagram: '@pavlovicci_dj',
        instagramFollowers: 75000,
        positioning: 'Coldharbour rising artist. Vocal-driven pop-crossover trance.',
        strengths: ['Vocal hook appeal', 'Newer audience growth'],
        weaknesses: ['Less established touring', 'Limited international presence'],
        exploitableGaps: ['Tim has higher credibility (EDMA wins)', 'Tim\'s underground positioning differentiates from pop-crossover'],
      },
    ],
    marketAnalysis: 'The underground trance/progressive market is consolidating around Coldharbour and a small cohort of allied labels. Nifra, Estiva, and Daxson are the reference tier, each with 150K–350K monthly listeners. Pavlo Vicci represents the emerging wave. Tim Clark has EDMA wins and Schulz mentorship that rival Nifra\'s credentials, but Spotify listeners are lagging by 130K–330K. The gap is not production quality—it\'s brand visibility and algorithmic seeding. The opportunity: Tim can climb faster because his social foundation (120K Instagram) is being under-leveraged. Most Coldharbour artists have 3–5x Tim\'s streaming with a fraction of his social following. This is a conversion asymmetry.',
    crowdedness: 'moderate',
    opportunities: [
      'The 50:1 social-to-streaming ratio is an untapped conversion engine.',
      'Release cadence discipline (every 3-4 weeks) vs. competitor irregular scheduling.',
      'Coldharbour pipeline + EDMA wins create festival booking credibility.',
      'International touring history (Japan, Amsterdam, Miami) proves demand beyond Vegas.',
    ],
  },

  // ─── Audience Intelligence ───
  audienceIntelligence: {
    coreDemographic: 'Festival-going electronic music enthusiasts, ages 22–42, concentrated in North America and Western Europe. High disposable income for travel and experience. Tech-savvy, discovery-driven, aligned with underground/progressive house and trance.',
    psychographics: [
      'Values authenticity and artist credibility over mainstream commerciality',
      'Seeks discovery via Spotify algorithms, Resident Advisor, and podcast seeding',
      'Willing to pay premium for festival experiences and exclusive content',
      'Follows artist output closely; respects consistent release schedules',
      'Engages deeply with artist social content (TikTok, Instagram Reels, YouTube)',
    ],
    fanSegments: [
      {
        segment: 'Core Streaming Fans',
        size: '~2,400 monthly listeners',
        characteristics: ['Spotify algorithm-driven discovery', 'High repeat-listen rate', 'Engaged with releases'],
        touchpoints: ['Spotify playlists', 'Coldharbour label site', 'YouTube'],
      },
      {
        segment: 'Social-First Audience',
        size: '~120,000 Instagram followers',
        characteristics: ['Content-driven', 'Lower conversion to streaming', 'Interested in lifestyle/behind-the-scenes'],
        touchpoints: ['Instagram', 'TikTok', 'YouTube Shorts'],
      },
      {
        segment: 'Festival Circuit',
        size: 'Estimated 8,000–15,000 annual live attendees',
        characteristics: ['High-intent buyers', 'Travel for specific bookings', 'Loyal repeat-goers'],
        touchpoints: ['Festival lineups', 'Resident Advisor', 'Artist website'],
      },
      {
        segment: 'Radio/Podcast Listeners',
        size: 'Estimated 50,000+ weekly tune-in (Inspire Radio + syndication)',
        characteristics: ['Background consumption', 'Discovery-oriented', 'Multi-platform awareness'],
        touchpoints: ['Insomniac Radio', 'Dash Radio', 'Podcast platforms'],
      },
    ],
    onlineBehavior: [
      { platform: 'Spotify', behavior: 'Discover via Hyperpop/REC recommendations, save for offline playback, build playlists' },
      { platform: 'Instagram', behavior: 'Consume Reels (audio first), follow for announcements, engage with Stories' },
      { platform: 'TikTok', behavior: 'Sound discovery, trend participation, creator seeding, behind-the-scenes' },
      { platform: 'YouTube', behavior: 'Music video discovery, DJ set recordings, Inspire Radio episodes' },
      { platform: 'Resident Advisor', behavior: 'Event discovery, artist research, credibility verification' },
    ],
    customerQuotes: [
      { quote: 'Tim\'s productions are pristine. Not sure why he doesn\'t have more streams.', context: 'Instagram comment from core follower' },
      { quote: 'EDMA winner. Coldharbour co-sign. This guy should be booking massive festivals.', context: 'Twitter/X mention from electronic music journalist' },
      { quote: 'Love his Inspire Radio show. Wish he released more often.', context: 'Fan feedback from radio station community' },
    ],
    painPoints: [
      'Overwhelming artist choice; discovery algorithm fatigue',
      'Inconsistent release schedules across favorite artists',
      'Difficulty finding new trance/progressive sounds outside Spotify algorithm bubbles',
      'High cost of festival tickets; need proof of artist credibility before buying',
    ],
    conversionBarriers: [
      'Low streaming numbers create perception of "not a real artist" despite EDMA wins',
      'Finance background narrative undermines underground credibility',
      'Downtown Vegas residency association suggests "local bar DJ" not "touring artist"',
      'Infrequent social content updates create perception of inactive/fading artist',
      'No email list or direct-to-fan infrastructure; relies entirely on algorithm',
    ],
  },

  // ─── Artist Intelligence ───
  artistIntelligence: {
    spotifyMonthlyListeners: 2400,
    topSoundingReleases: [
      { title: 'You Belong', date: 'Apr 2025', features: 'w/ Markus Schulz ft Linney' },
      { title: 'Pure Life', date: 'Nov 2024', features: 'ft Mars' },
      { title: 'Secrets', date: 'May 2024' },
      { title: 'Chasing Stars', date: 'Mar 2024' },
      { title: 'Descent', date: 'Feb 2024' },
      { title: '"I Can\'t Sing"', date: '2024', features: 'Debuted #12 on Spotify EDM On Stage playlist' },
    ],
    labelConnections: [
      'Coldharbour Recordings (primary)',
      'Black Hole Recordings',
      'Perfecto Records',
      'Warner Music / Tradebloc Music',
    ],
    festivalExperience: [
      'EDC Las Vegas 2023, 2025, 2026 (confirmed)',
      'EDC Orlando 2023',
      'Groove Cruise Miami',
      'Melkweg Amsterdam (ADE 2023)',
    ],
    collaborationHistory: [
      'Markus Schulz "You Belong" (Apr 2025)',
      'Mars "Pure Life" (Nov 2024)',
      'Duke Dumont (Zouk Las Vegas, Resorts World)',
      'Paul Oakenfold (F1 Afterparty)',
    ],
    influencerRelationships: [
      'Direct mentorship with Markus Schulz (Coldharbour founder)',
      'David Guetta playlist inclusion (Spotify)',
      'Support from Coldharbour artist network',
    ],
    radioDJSupport: [
      'Insomniac Radio (weekly Inspire Radio show)',
      'Dash Radio',
      'Radio Eibiza',
      'Multiple syndicated station add-ons',
    ],
  },

  // ─── SWOT Analysis ───
  swot: {
    strengths: [
      {
        title: 'Award-Winning Foundation (Unrealized)',
        description: 'Two EDMA wins and press features (DJ Mag, Las Vegas Weekly) provide a credential base, but these have not translated into bookings or meaningful industry recognition. In their current context, they actually reinforce the "finance guy who bought his way in" perception. Carefully repositioned within a music-first narrative, they become powerful — but left as-is, they are liabilities masquerading as assets.',
        evidence: 'EDMA 2024 & 2025 Winner: Breakthrough Artist of the Year (Trance), Breakout Artist on Tour. Las Vegas Weekly Best DJ 2025 Readers\' Choice. Currently leveraged in press materials alongside finance narrative, undermining their credibility signal.',
      },
      {
        title: 'The Schulz Pipeline',
        description: 'Direct mentorship and label relationship with Markus Schulz (Coldharbour Recordings) provides distribution, touring, and credibility.',
        evidence: 'You Belong collaboration (Apr 2025). Weekly Inspire Radio on Insomniac, Dash, Radio Eibiza. Coldharbour releases on premium labels.',
      },

      {
        title: 'Inspire Radio Distribution Network',
        description: 'A weekly show on Insomniac Radio, Dash Radio, Radio Eibiza, and 6+ stations creates persistent brand touchpoint.',
        evidence: 'Estimated 50K+ weekly listeners across syndicated network.',
      },
      {
        title: 'Self-Funded Independence',
        description: 'Tradebloc Inc. resources allow premium content, touring, and marketing investment most emerging artists lack.',
        evidence: 'Tradebloc Inc. valuation ~$150M. Tradebloc Music label support.',
      },
    ],
    weaknesses: [
      {
        title: 'Social Footprint (Requires Reset)',
        description: '120K Instagram followers exists as a number, but the audience was built through aggressive paid acquisition and bot activity, resulting in low-affinity followers with minimal conversion potential. The accounts cannot be salvaged for artist-building — they should be transitioned to fan pages while fresh accounts are launched with the rebrand to build a real, engaged audience from scratch.',
        evidence: '120K Instagram vs 2.4K Spotify monthly listeners. Rather than an untapped conversion opportunity, this ratio reflects an audience that was never real fans to begin with.',
      },
      {
        title: 'The Finance Guy Problem',
        description: 'Website, press, and social lead with "financial titan turned DJ" narrative. This creates credibility gap in underground community where authenticity is currency.',
        evidence: 'timclarklive.com dedicates more space to Tradebloc Inc. than music. Press coverage emphasizes finance background. About page highlights CEO role.',
      },
      {
        title: 'The Streaming Desert',
        description: '2.4K monthly Spotify listeners against 120K Instagram followers is a 50:1 ratio that screams broken funnel.',
        evidence: 'Daxson: 166K Spotify. Nifra: 335K Spotify. Estiva: 355K Spotify. Tim Clark: 2.4K Spotify.',
      },
      {
        title: 'Downtown Vegas Anchor',
        description: 'Weekly residency at Troy Liquor Bar (Golden Nugget downtown) reads as "local DJ" not "touring artist."',
        evidence: 'Golden Nugget downtown Las Vegas venue association. Not Zouk, XS, or premium tier.',
      },
      {
        title: 'Oversaturation in Local Market',
        description: 'Too many local shows dilute perceived exclusivity. Scarcity drives festival booking interest.',
        evidence: 'Weekly Troy Liquor Bar residency. Multiple downtown Vegas bookings.',
      },
      {
        title: 'Website Needs a Modern Overhaul',
        description: 'timclarklive.com lacks a modern look and feel. It could be significantly improved for better data capture, fan storytelling, and conversion.',
        evidence: 'No email capture infrastructure. No pre-save funnels. Generic template design. Does not communicate sound identity or artistic narrative.',
      },
    ],
    opportunities: [
      {
        title: 'The Release Cadence Window',
        description: 'Committing to releases every 3-4 weeks creates an algorithmic flywheel on Spotify.',
        evidence: 'Currently irregular release schedule. Competitors (Daxson, Pavlo Vicci) also inconsistent. Disciplined cadence is differentiated.',
      },
      {
        title: 'Sound-First Social Strategy',
        description: 'TikTok and Instagram Reels sound seeding is essentially non-existent. 120K followers is built-in seeding audience.',
        evidence: 'Creator sound adoption = bridge from social following to streaming listener. Zero current TikTok sound seeding strategy.',
      },

      {
        title: 'The Collab Economy',
        description: 'The Markus Schulz "You Belong" template proves Tim can hold his own on collaborative tracks.',
        evidence: 'Can expand to 2-3 artist collaborations per quarter. Each collaborator brings audience reach.',
      },
    ],
    threats: [

      {
        title: 'Streaming Plateau',
        description: 'Release cadence doesn\'t translate to meaningful listener growth if playlist support doesn\'t materialize.',
        evidence: 'At 2.4K monthly listeners, algorithm has minimal data. Negative feedback loop possible.',
      },
      {
        title: 'Coldharbour Dependency',
        description: 'Nearly all releases are through Coldharbour. If label relationship changes, primary distribution evaporates.',
        evidence: 'Single label dependency. No independent distribution fallback.',
      },
      {
        title: 'Trance Genre Ceiling',
        description: 'Trance is a small market with a devoted but limited ceiling compared to house and techno. Even at the top of the trance pyramid, the numbers are a fraction of what adjacent genres produce. A genre shift or hybrid evolution as part of the rebrand could significantly expand the addressable audience.',
        evidence: 'Top trance artists peak at 300K-500K Spotify monthly listeners vs. 1M-10M+ for house/techno equivalents. Genre flexibility within the rebrand is an opportunity, not a risk — if timed correctly.',
      },
    ],
    synthesis: 'Tim Clark has built formidable infrastructure—award wins, label support, social scale, radio distribution—but the brand narrative is fundamentally misaligned. The thesis: shed the origin-story anchor, convert social audience into streaming listeners through disciplined releases, and elevate from local residency DJ to credible touring artist. This requires simultaneous brand repositioning, content strategy execution, and booking matrix shift. The 12-month window is tight but achievable given the existing assets.',
  },

  // ─── Executive Summary ───
  executiveSummary: {
    thesis: 'Tim Clark has built an impressive brand infrastructure—120K Instagram, EDMA awards, Coldharbour releases, Markus Schulz mentorship—but the brand is fundamentally misaligned. The "finance titan turned DJ" story got him press, but it\'s now an anchor preventing the music from leading. With 2.4K Spotify monthly listeners against 120K Instagram followers, the conversion pipeline is broken: audiences know Tim Clark the persona but aren\'t listening to Tim Clark the artist.',
    keyFindings: [
      'Social-to-streaming ratio is 50:1 (120K Instagram vs 2.4K Spotify ML) — massive untapped funnel',
      'Finance narrative is credibility liability in underground community; authenticity is currency',
      'Downtown Vegas overexposure dilutes credibility; local frequency needs to decrease',
      'Release cadence is inconsistent; competitors face same challenge (differentiation opportunity)',
      'Fan data infrastructure (email/SMS) is nonexistent; this is the single biggest gap to close',
      'Inspire Radio distribution reaches 50K+ weekly listeners; not being leveraged for streaming conversion',
    ],
    primaryRecommendation: 'Complete a music-first rebrand (website, press kit, visual identity) while launching fresh social accounts to replace botted legacy profiles. Execute a disciplined 3-4 week release cadence with fan data capture (email/SMS) as the central infrastructure priority. Reduce local Vegas frequency and focus on brand-building for 6+ months before exploring more robust touring opportunities. Target 50K Spotify monthly listeners and 10K email subscribers within 12 months.',
    timelineToTarget: '12 months (April 2026 – April 2027) with quarterly acceleration checkpoints',
    rebrandGoals: [
      { number: 1, title: 'Shed the origin story', description: 'Kill the "finance titan turned DJ" narrative across every touchpoint. Website, press kit, social bios, booking materials — music leads, everything else disappears.' },
      { number: 2, title: 'Build the streaming engine', description: 'Launch fresh social accounts, execute a disciplined 3-4 week release cadence, and seed every track through TikTok and creator partnerships. Convert followers into listeners.' },
      { number: 3, title: 'Capture the fans directly', description: 'Build email/SMS infrastructure from zero to 10K+ subscribers. Pre-save funnels, exclusive content, direct communication. Stop depending entirely on algorithms you do not control.' },
    ],
    fullNarrative: 'The path forward is a 12-month transformation from local celebrity to credible artist — leveraging the Coldharbour connection, the Markus Schulz mentorship, and disciplined execution as accelerants, not crutches. By Q1 2027, the target is 50K+ Spotify monthly listeners, 10K+ email subscribers, and a brand identity where "Tim Clark" immediately connotes a specific sound — not a financial background.\n\nThis strategy is achievable because the raw materials exist. The music, the label support, the radio distribution, the production budget. What\'s missing is alignment between narrative and execution. The rebrand closes that gap. The execution closes the funnel.',
  },

  // ─── Strategic Pillars ───
  strategicPillars: [
    {
      title: 'Lead With the Music',
      thesis: 'Tim Clark\'s music must become the first thing anyone encounters about him—not his financial background, not his awards, not his celebrity connections. Every touchpoint (website, social, press kit, booking materials) must be rebuilt around sound identity. The "underground big room" hybrid is genuinely distinctive; it needs to be branded, visualized, and communicated as a coherent artistic vision.',
      successMetrics: [
        'Website relaunch with music-first positioning (0 mentions of Tradebloc)',
        'Press kit emphasizes sound identity + EDMA wins, not financial background',
        'Social content is 80% music-focused, 20% lifestyle',
        'Cohesive visual identity consistently applied across all platforms',
      ],
      keyInitiatives: [
        'Complete website rebuild (timclarklive.com)',
        'New press kit with artist statement and sound description',
        'Social content audit and rebranding',
        'Visual identity system development',
      ],
    },
    {
      title: 'Own the Algorithm',
      thesis: 'With 2.4K Spotify monthly listeners, the streaming infrastructure is starting from near-zero. But this is an advantage: a disciplined release cadence every 3-4 weeks, combined with pre-save campaigns, playlist pitching, and algorithmic trigger optimization, can compound rapidly. Target 50K monthly listeners within 12 months—achievable given the existing social audience and Coldharbour distribution.',
      successMetrics: [
        'Release cadence: 100% on-schedule every 3-4 weeks',
        'Pre-save funnel: 3K+ pre-saves per release (average)',
        'Monthly listener growth: 2.4K → 50K+ (20x growth)',
      ],
      keyInitiatives: [
        'Build production pipeline and release calendar',
        'Implement pre-save page infrastructure',
        'Execute playlist pitching and curator outreach',
        'Launch TikTok sound seeding strategy',
      ],
    },
        {
      title: 'Build Toward Touring',
      thesis: 'The first 6 months are exclusively about releases and brand-building. No touring push. After 6 months of consistent releases and demonstrable streaming growth, more robust touring opportunities can be explored — starting with secondary market shows and building from there. Premium residencies and festival bookings are a long-term outcome, not a near-term promise.',
      successMetrics: [
        '6 months of consistent releases before any touring push',
        'Secondary market test dates after month 6',
        'Touring strategy evaluation at month 9',
        'International expansion based on streaming metrics',
      ],
      keyInitiatives: [
        'Focus exclusively on releases and brand-building months 1-6',
        'Evaluate touring readiness at 6-month mark',
        'Explore secondary market opportunities after demonstrating growth',
        'Build international booking package based on streaming trajectory',
      ],
    },
    {
      title: 'Activate the Core',
      thesis: 'Fan data is the single most important infrastructure to build. Without email addresses, SMS opt-ins, and direct communication channels, every other effort depends on algorithms the artist does not control. Building a 10K+ email list is not a supporting initiative — it is THE initiative that makes everything else work. Converting even 10% of the existing Instagram following to active fans on direct channels would transform the metrics overnight.',
      successMetrics: [
        'Email/SMS list: 0 → 10K+ subscribers',
        'Email open rate: 30%+ (industry benchmark 20%)',
        'Merch revenue growth: 3x year-over-year',
      ],
      keyInitiatives: [
        'Launch email/SMS collection (pre-save funnels)',
        'Exclusive content tiers (Patreon/Substack)',
        'Superfan identification and VIP program',
      ],
    },
],

  // ─── Phased Roadmap ───
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      duration: 'Apr–Jun 2026 (3 months)',
      description: 'Establish the rebrand foundation and release infrastructure. Focus: narrative shift, visual consistency, and production pipeline.',
      actions: [
        { action: 'Complete visual rebrand (website, social templates, press kit)', deadline: 'Apr 15, 2026' },
        { action: 'Remove/minimize finance narrative from all public touchpoints', deadline: 'Apr 30, 2026' },
        { action: 'Establish 3-4 week release cadence system', deadline: 'May 1, 2026' },
        { action: 'Build pre-save funnel infrastructure', deadline: 'May 15, 2026' },
        { action: 'Launch email/SMS list collection', deadline: 'May 30, 2026' },
        { action: 'Begin TikTok sound seeding strategy', deadline: 'Jun 1, 2026' },
        { action: 'Reduce Troy Liquor Bar frequency to 2x/month', deadline: 'Jun 15, 2026' },
      ],
      expectedOutcomes: [
        'Website and press materials reflect music-first identity',
        'Release calendar locked for next 12 months',
        'First release on new cadence executed',
        'Email list: 1K+ early subscribers',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Build',
      duration: 'Jul–Sep 2026 (3 months)',
      description: 'Execute releases on cadence. Secure residencies and begin festival submissions. Launch podcast rebranding.',
      actions: [
        { action: 'Execute 4-5 releases on strict 3-4 week cadence', deadline: 'Sep 30, 2026' },
        { action: 'Launch Inspire Radio podcast rebrand with streaming CTAs', deadline: 'Jul 1, 2026' },
        { action: 'Activate creator seeding program (20-30 micro-creators)', deadline: 'Jul 30, 2026' },
        { action: 'Focus on fan data capture and email list growth', deadline: 'Sep 30, 2026' },
        { action: 'Build content pipeline for consistent releases', deadline: 'Sep 30, 2026' },
      ],
      expectedOutcomes: [
        'Spotify monthly listeners: 2.4K → 10K–15K',
        'Email list: 5K+ subscribers',
        'TikTok followers: 5K → 20K',
        'Content pipeline established',
        'Fan data collection systems active',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Accelerate',
      duration: 'Oct–Dec 2026 (3 months)',
      description: 'Hit streaming growth targets. Secure festival bookings. Launch community infrastructure.',
      actions: [
        { action: 'Target 25K+ Spotify monthly listeners', deadline: 'Dec 31, 2026' },
        { action: 'Release collaboration tracks with 2 mid-tier artists', deadline: 'Dec 15, 2026' },
        { action: 'Launch superfan community platform', deadline: 'Nov 1, 2026' },
        { action: 'Execute holiday release moment (major single)', deadline: 'Nov 20, 2026' },
        { action: 'Evaluate touring readiness based on 6 months of data', deadline: 'Dec 15, 2026' },
        { action: 'Explore secondary market test dates if metrics support it', deadline: 'Dec 31, 2026' },
        { action: 'Year-end press push with new rebrand narrative', deadline: 'Dec 20, 2026' },
      ],
      expectedOutcomes: [
        'Spotify monthly listeners: 15K → 25K',
        'Superfan community: 1K+ active members',
        'Email list: 7K+ subscribers',
        'Touring strategy framework established',
        'Secondary market opportunities identified',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Optimize',
      duration: 'Jan–Apr 2027 (4 months)',
      description: 'Achieve final targets. Execute festival season. Measure rebrand effectiveness and plan next cycle.',
      actions: [
        { action: 'Target 50K+ Spotify monthly listeners', deadline: 'Apr 30, 2027' },
        { action: 'If streaming and fan data metrics support it, begin planning touring strategy for late 2027', deadline: 'Apr 30, 2027' },
        { action: 'Measure rebrand effectiveness and metrics', deadline: 'Apr 15, 2027' },
        { action: 'Plan next 12-month cycle', deadline: 'Apr 30, 2027' },
      ],
      expectedOutcomes: [
        'Spotify monthly listeners: 50K+ achieved',
        'Touring strategy framework evaluated and refined',
        'Email list: 10K+ engaged subscribers',
        'Brand identity: "Tim Clark" = specific sound, not finance background',
      ],
    },
  ],

  // ─── Channel Strategy ───
  channelStrategy: {
    overview: 'Tim Clark\'s channel strategy must invert the current hierarchy. Today, social media dominates with streaming as an afterthought. The rebrand shifts to a streaming-first architecture where social, radio, live, and content all serve the primary objective of converting listeners to fans.',
    channelPlans: [
      {
        name: 'Spotify & DSPs',
        objective: 'Convert 120K social followers into streaming listeners. Build algorithmic momentum.',
        tactics: [
          'Release cadence: every 3-4 weeks',
          'Pre-save campaigns on email + Instagram',
          'Playlist pitching to 100+ curators per release',
          'Canvas videos and artist commentary',
          'Collaborative releases for cross-audience reach',
        ],
        contentTypes: ['Original tracks', 'Remixes', 'Collaborations', 'Studio clips'],
        frequency: 'Every 3-4 weeks (4 releases per quarter)',
      },
      {
        name: 'TikTok',
        objective: 'Sound seeding and creator adoption. Convert content views to Spotify streams.',
        tactics: [
          'Sound library seeding: 20-30 creators per release',
          'Behind-the-scenes studio content',
          'DJ set clips and transition tutorials',
          'Trend participation (music-first, not lifestyle)',
          'Creator collaboration and duets',
        ],
        contentTypes: ['Sound clips', 'Studio footage', 'DJ sets', 'Trending audio participation'],
        frequency: '4-6 posts per week',
      },
      {
        name: 'Instagram',
        objective: 'Premium visual brand and fan engagement. Drive pre-saves and direct links.',
        tactics: [
          'Reels audio strategy (sync to every TikTok)',
          'Stories for fan engagement and tour announcements',
          'Feed for premium visual brand identity',
          'Carousel posts: release breakdown, gear, festival announcements',
          'Link stickering for Spotify pre-saves and pre-orders',
        ],
        contentTypes: ['Reels', 'Stories', 'Carousel posts', 'High-res photos'],
        frequency: '5-7 posts per week + daily Stories',
      },
      {
        name: 'YouTube',
        objective: 'Long-form content library. Official music videos and performance recordings.',
        tactics: [
          'Official music videos (1 per release)',
          'DJ set recordings (monthly)',
          'Inspire Radio podcast video episodes',
          'Production tutorials and sound design breakdowns',
          'Playlist compilations (Spotify + YouTube Music optimization)',
        ],
        contentTypes: ['Music videos', 'DJ sets', 'Tutorials', 'Podcast episodes'],
        frequency: '2-3 videos per month',
      },
      {
        name: 'Inspire Radio',
        objective: 'Premium weekly content vehicle. Drive brand awareness and streaming CTAs.',
        tactics: [
          'Rebrand show as "Tim Clark Inspire" vs. generic Inspire Radio slot',
          'Include streaming CTAs and pre-save links in show notes',
          'Feature collaboration partners and interview guests',
          'Video podcast companion for YouTube distribution',
          'Syndication push to 10+ radio networks',
        ],
        contentTypes: ['DJ mixes', 'Guest interviews', 'Music commentary', 'Industry insights'],
        frequency: 'Weekly (52 hours per year)',
      },
      {
        name: 'Email & SMS',
        objective: 'Direct-to-fan communication. Pre-save automation and exclusive updates.',
        tactics: [
          'Welcome sequence for new subscribers',
          'Pre-release countdown automation',
          'Exclusive content for subscribers (unreleased tracks, demos)',
          'Tour announcement priority for email list',
          'SMS alerts for time-sensitive offers (festival passes, merch drops)',
        ],
        contentTypes: ['Announcements', 'Pre-release previews', 'Exclusive tracks', 'Tour updates'],
        frequency: '2x per week (email), 1x per week (SMS)',
      },
      {
        name: 'Live Events & Touring',
        objective: 'Reduce Vegas overexposure. Focus on brand-building first, explore touring after 6 months of releases.',
        tactics: [
          'Reduce downtown Vegas frequency; pursue premium venues when opportunities arise',
          'Focus first 6 months on releases and brand-building exclusively',
          'Evaluate secondary market test dates after month 6 based on streaming data',
          'Leverage Coldharbour/Schulz network for organic opportunities',
          'VIP meet-and-greet for superfans at select events',
        ],
        contentTypes: ['Live performances', 'Event announcements', 'Meet-and-greet experiences'],
        frequency: 'Reduced local residency (2x/month) + selective opportunities post-month 6',
      },
    ],
    allocationModel: {
      channels: [
        { channel: 'Organic Social (Instagram, TikTok, YouTube)', allocation: 25 },
        { channel: 'Paid Social Advertising', allocation: 20 },
        { channel: 'Content Creation & Production', allocation: 10 },
        { channel: 'Email & SMS Infrastructure', allocation: 5 },
        { channel: 'Creator & Influencer Partnerships', allocation: 15 },
        { channel: 'PR & Press Coverage', allocation: 5 },
        { channel: 'Streaming & DSP Optimization', allocation: 15 },
        { channel: 'Other (Analytics, Tools, etc.)', allocation: 5 },
      ],
      total: 100,
    },
    integratedTactics: [
      'Every release gets a cross-platform launch sequence: pre-save announcement (email/social) → release week (TikTok/Instagram sound seeding) → streaming payoff (Spotify playlist pitching) → long-form content (YouTube video)',
      'TikTok and Instagram Reels use identical audio to maximize sound library penetration',
      'Inspire Radio episodes are repurposed as YouTube podcast videos for dual-platform reach',
      'Festival bookings are leveraged for social content (countdown posts, behind-the-scenes, post-event recap)',
      'Collaboration releases include partner cross-promotion to expand reach',
    ],
  },

  // ─── KPI Framework ───
  kpiFramework: [
    {
      metric: 'Spotify Monthly Listeners',
      current: '2,400',
      target: '50,000',
      benchmark: 'Daxson: 166K, Nifra: 335K, Estiva: 355K',
      timeframe: '12 months',
      rationale: 'Core success metric. 50K positions Tim as credible mid-tier artist. Daxson at 166K proves the tier is achievable with disciplined execution.',
    },
    {
      metric: 'New Instagram Followers (Fresh Account)',
      current: '0 (launching with rebrand)',
      target: '25,000',
      benchmark: 'Fresh account with real, engaged followers. Quality over quantity.',
      timeframe: '12 months',
      rationale: 'Fresh account with real, engaged followers. Quality over quantity. 25K real fans > 120K bots.',
    },
    {
      metric: 'TikTok Followers (Fresh Account)',
      current: '0 (launching with rebrand)',
      target: '25,000',
      benchmark: 'Fresh account with real fans focused on sound seeding',
      timeframe: '12 months',
      rationale: 'Sound seeding platform. Fresh account ensures clean algorithm signal and real fans. 25K engaged followers > legacy botted metrics.',
    },
    {
      metric: 'Email/SMS List Subscribers',
      current: '0',
      target: '10,000',
      benchmark: 'Industry standard: 8-12K for artist at this scale',
      timeframe: '12 months',
      rationale: 'Direct-to-fan foundation. Email list enables pre-save automation and superfan cultivation.',
    },
    {
      metric: 'Release Cadence Consistency',
      current: 'Irregular (6-8 weeks between releases)',
      target: '100% on-schedule (every 3-4 weeks)',
      benchmark: 'Consistent release calendars drive algorithmic preference',
      timeframe: 'Ongoing',
      rationale: 'Streaming platform algorithm rewards consistency. Disciplined cadence is competitive advantage.',
    },
    {
      metric: 'Spotify Saves per Release',
      current: 'Unknown (estimated 500-1K)',
      target: '2,000+',
      benchmark: 'Coldharbour label average: 1.5K–2.5K for emerging artists',
      timeframe: '12 months',
      rationale: 'Quality signal to Spotify algorithm. Higher saves = better playlist placement.',
    },
    {
      metric: 'Festival Bookings (2027 Season)',
      current: '1-2 (EDC confirmed)',
      target: 'Touring readiness evaluation at month 6. Targets TBD based on streaming growth.',
      benchmark: 'Mid-tier trance/progressive artists: 8-12 annually (long-term goal)',
      timeframe: '12 months',
      rationale: 'Festival bookings validate touring artist status. First 6 months focus on brand-building; touring strategy evaluated based on streaming metrics and fan data.',
    },
{
      metric: 'Tier 1 Press Features (DJ Mag, Mixmag, etc.)',
      current: '2 (EDMA coverage, L.A. Weekly)',
      target: '8',
      benchmark: 'Emerging artist with growth trajectory gets 1-2 per quarter',
      timeframe: '12 months',
      rationale: 'Credibility signal. Tier 1 press (vs niche outlets) proves artist relevance.',
    },
  ],

  // ─── Risk Matrix ───
  riskMatrix: [

    {
      title: 'Streaming Plateau',
      description: 'Release cadence doesn\'t translate to meaningful listener growth if playlist support doesn\'t materialize.',
      likelihood: 'medium',
      impact: 'high',
      mitigation: 'Diversify growth channels beyond organic: paid promotion ($500-1K per release), collaboration releases (expanded audience reach), paid TikTok seeding, Spotify playlist pitching diversity (not just major playlists).',
    },

    {
      title: 'Content Burnout',
      description: '3-4 week release cadence + social content + touring is physically demanding. Risk of inconsistency.',
      likelihood: 'low',
      impact: 'high',
      mitigation: 'Build production pipeline with ghost producers/collaborators. Pre-produce content in batches (social content batching, pre-recorded podcast episodes). Hire content manager by Q3 2026.',
    },
    {
      title: 'Market Shift',
      description: 'Trance/progressive trend fades before Tim can capitalize.',
      likelihood: 'low',
      impact: 'medium',
      mitigation: '"Underground big room" hybrid positioning allows genre flexibility. If trance cools, can pivot toward house/techno crossover. Monitor Chartmetric genre trends quarterly.',
    },
    {
      title: 'Social Account Reset Stall',
      description: 'Launching fresh social accounts means starting from zero followers. Growth may be slower than expected, creating a perception gap during the transition period.',
      likelihood: 'medium',
      impact: 'medium',
      mitigation: 'Legacy accounts remain active as fan pages, providing continuity. New accounts benefit from clean algorithm signal and real engagement. Cross-promote new accounts from legacy pages. Allocate modest paid budget for awareness on new accounts.',
    },
  ],

  // ─── Recommendations ───
  recommendations: [
    {
      title: 'Complete Website Rebuild',
      description: 'Replace timclarklive.com with a music-first artist platform.',
      rationale: 'Current Elementor site with merch store doesn\'t communicate artistic vision. Must lead with sound, visual identity, and tour dates—not biography.',
      timeline: '0–30 days (critical path)',
      priority: 'critical',
      expectedOutcome: 'Website converts visitors to pre-save list. Establishes music-first brand identity.',
    },
    {
      title: 'Kill the Finance Narrative',
      description: 'Remove all references to Tradebloc, financial background, and "titan" language from public materials.',
      rationale: 'Finance background creates credibility gap in underground community where authenticity is currency. Press kit should lead with EDMA wins, Coldharbour, and sound.',
      timeline: '0–30 days (critical path)',
      priority: 'critical',
      expectedOutcome: 'Press coverage shifts from "executive turned DJ" to "award-winning artist." Underground community perception improves.',
    },
    {
      title: 'Launch Release Cadence System',
      description: 'Set up production pipeline for releases every 3–4 weeks with pre-save pages, playlist pitching, and social strategy.',
      rationale: 'Streaming growth requires algorithmic consistency. Currently irregular; competitors also inconsistent (differentiation opportunity).',
      timeline: '0–30 days (critical path)',
      priority: 'critical',
      expectedOutcome: 'Streaming listener growth accelerates. Algorithmic recommendations increase.',
    },
    {
      title: 'Reduce Vegas Residency Frequency and Focus on Brand-Building',
      description: 'Reduce local show frequency and focus entirely on releases and brand-building for the first 6 months. Touring can be explored after demonstrating consistent streaming growth.',
      rationale: 'Downtown Vegas overexposure reads as "local DJ." First 6 months are release + brand infrastructure; touring strategy evaluated after month 6 based on metrics.',
      timeline: 'Ongoing (30–60 days to reduce frequency)',
      priority: 'high',
      expectedOutcome: 'Brand perception shifts from local venue DJ to artist focused on music and audience-building. Touring strategy evaluated at month 6 based on streaming growth.',
    },
    {
      title: 'Activate TikTok Sound Strategy',
      description: 'Every release needs sound seeding (20–30 micro-creators), behind-the-scenes content, and trend participation.',
      rationale: 'TikTok sound adoption bridges social following to streaming listeners. Zero current strategy.',
      timeline: '30–60 days (high priority)',
      priority: 'high',
      expectedOutcome: 'Release sounds reach 1M–5M TikTok impressions. Spotify pre-save funnel activates.',
    },
    {
      title: 'Build Direct-to-Fan Infrastructure',
      description: 'Email/SMS list with automated pre-save funnels. Launch exclusive community platform for superfans.',
      rationale: 'Email list (10K target) enables pre-save automation and merchandise upsell. Community platform = retention and engagement.',
      timeline: '60–90 days (medium priority)',
      priority: 'medium',
      expectedOutcome: 'Email list grows 1K/month. Superfan community reaches 2K active members by end of year.',
    },
],

  // ─── Images ───
  images: {
    hero1: '/images/dj-tim-clark/hero1.png',
    hero2: '/images/dj-tim-clark/hero2.png',
    editorial: '/images/dj-tim-clark/editorial.png',
    texture: '/images/dj-tim-clark/texture.png',
    data: '/images/dj-tim-clark/data.png',
    closing: '/images/dj-tim-clark/closing.png',
  },

  // ─── Metadata ───
  preparedFor: 'DJ Tim Clark',
  preparedBy: 'Crowd Control Digital',
  date: 'April 2026',
  version: '1.0',
};
