import { BrandStrategy } from '@/lib/types/strategy';

export const beautySchoolDropout: BrandStrategy = {
  id: 'beauty-school-dropout',
  slug: 'beauty-school-dropout',
  brandName: 'Beauty School Dropout',
  industry: 'Music — Alternative Rock',
  isArtist: true,
  tagline: 'A hot engine bolted to nothing. The next 12 months are about building the machine behind the band.',
  accentColor: '',
  timeHorizon: '12 months',
  strategyWindow: {
    start: 'May 2026',
    end: 'May 2027',
  },

  // ─── Brand Audit ───
  brandAudit: {
    positioning: 'A Los Angeles alt-rock band that has, in six years, accumulated almost every asset an emerging act is supposed to spend a decade chasing — a Mark Hoppus and Pete Wentz co-sign, a Verswire label deal, a Neal Avron-produced debut full-length, 60M+ catalog streams, a critically adored 2025 album, a near-daily TikTok engine with 138K followers, and a live show that reviewers say "performs like a headliner" from the opening slot. The brand reads like a band on the cusp. The business behind it does not exist yet: no website, no email list, no SMS, no campaign layer, no owned audience. Every relationship BSD has is rented from a platform, and every show they play creates fans they have no way to keep.',
    voiceTraits: [
      { trait: 'Renegade', evidence: 'The brand was built to provoke a double-take. The TikTok grew on a "renegade rock" cover series — their version of Lil Nas X\'s "Montero" got reposted by Lil Nas X himself — and the caption voice stays fully in character: lowercase, blunt, funny ("fck u and ur mother," "LMTFA," "put your money where your mouth is baby"). This is an asset most label-backed bands sand off. BSD should protect it.' },
      { trait: 'Ugly/Pretty', evidence: 'SPIN literally titled its September 2025 profile "The Ugly/Pretty Rise of Beauty School Dropout." The tension is the entire brand: "dirty punk attitude, clean pop dynamics, surprisingly heavy textures," an album called "Where Did All The Butterflies Go?" pairing delicate imagery with grit. It is the same instinct behind the band wanting to launch a premium leather bag line called "Dirt." The contradiction is the identity — and it is endlessly merchandisable.' },
      { trait: 'Earnest', evidence: 'Underneath the attitude is real warmth, and the audience can tell. Live reviews land on "the nicest guys" and band members getting emotional thanking crowds; TikToks like "i miss all of u so much" and "if u see us out and about say hi" run the same parasocial sincerity. This earnestness is why the fans they do reach convert hard — it is the trust layer the whole business should be built on.' },
      { trait: 'Relentless', evidence: 'The band writes 50-100 songs per project, has posted 1,468 TikToks, and tours without pause — a 36-date US headline run, blink-182 arenas, European runs, and now MGK. The work ethic is not the problem and never has been. The problem is that all of that output points at platforms BSD does not own. The strategy is not "do more." It is "aim what you already do."' },
    ],
    keyOfferings: [
      'Live touring — proven road warriors: a 36-date US headline run, arena support for blink-182\'s Missionary Impossible tour, European runs with Maggie Lindemann and Stand Atlantic, and the 2026 Lost Americana Tour with MGK and Wiz Khalifa (May 15-30)',
      'Recorded catalog — three studio albums (We Made Plans & God Laughed, 2022; Ready to Eat, 2023; Where Did All The Butterflies Go?, 2025) plus EPs, surpassing 60M combined streams',
      'A high-cadence social engine — 138K-follower TikTok posting near-daily with 6%+ like rates, a verified 74K Instagram, plus YouTube',
      'Merch via beautyschooldropoutstore.merchmadeeasy.com — functional but un-campaigned',
      'A planned brand extension — "Dirt" (aka "Dirt Bags"), a high-end leather duffel line whose name is both the joke and the marketing',
    ],
    socialAccounts: [
      { platform: 'TikTok', handle: '@beautyschooldropout', url: 'https://www.tiktok.com/@beautyschooldropout', followers: 138700, note: 'The strongest owned channel and the real growth engine — 1,468 videos, 2.6M likes, near-daily cadence, 6%+ like rates. Breakouts hit 70-96K plays when content is tied to a moment. Wasted potential: the same three generic hashtags on nearly every post, and a bio that points to streaming, not to anything BSD owns.' },
      { platform: 'Instagram', handle: '@bsd.wav', url: 'https://www.instagram.com/bsd.wav/', followers: 74666, note: 'Verified, but badly lags TikTok and the streaming base. ~2,600 avg likes on 160 posts. The fandom home base — should be the place TikTok discovery gets ported into deeper community, but currently runs as a parallel feed, not a funnel stage.' },
      { platform: 'Spotify', handle: 'Beauty School Dropout', url: 'https://open.spotify.com/artist/2MJMW3WtQnDq7DKezFn5jO', followers: 0, note: '~684K monthly listeners against a 60M+ stream catalog — genuine consumption scale. But the gap between 684K listeners and 74K Instagram followers is the single biggest untapped asset in the audit: hundreds of thousands of people who like the music and were never invited in.' },
      { platform: 'YouTube', handle: 'BEAUTY SCHOOL DROPOUT', url: 'https://www.youtube.com/channel/UC1vYC3za13LPNwwuwWuoVtQ', note: 'Music videos and the renegade-rock covers live here. Used for deeper exploration, not daily engagement — underbuilt as a destination.' },
      { platform: 'Website', handle: 'bsd.komi.io', url: 'https://bsd.komi.io/', note: 'Not a website — a Komi link aggregator. There is no owned domain, no email capture, no SMS, no first-party data anywhere in the operation. This is the structural hole the entire strategy is built to close.' },
    ],
    pressHighlights: [
      { outlet: 'SPIN', title: 'The Ugly/Pretty Rise of Beauty School Dropout', date: 'Sep 2025', url: 'https://www.spin.com/2025/09/the-ugly-pretty-rise-of-beauty-school-dropout/', tier: 'tier1' },
      { outlet: 'Billboard', title: 'Mark Hoppus Teaches Beauty School Dropout the Rock Star Ropes in "Almost Famous" Video', date: 'Aug 2022', url: 'https://www.billboard.com/music/music-news/mark-hoppus-beauty-school-dropout-almost-famous-video-exclusive-1235133093/', tier: 'tier1' },
      { outlet: 'NME', title: 'Beauty School Dropout Want to Keep the Pop-Punk Revival Alive', date: 'Jun 2023', url: 'https://www.nme.com/features/music-interviews/beauty-school-dropout-band-interview-blink-182-radar-3454897', tier: 'tier1' },
      { outlet: 'Alternative Press', title: 'On the Road With Beauty School Dropout (blink-182 Missionary Impossible Tour)', date: '2025', url: 'https://www.altpress.com/beauty-school-dropout-blink-182-missionary-impossible-tour-photos-2025/', tier: 'tier2' },
      { outlet: 'Kerrang!', title: 'Kid Brunswick Releases "Out Of Style" feat. Beauty School Dropout', date: 'May 2024', url: 'https://www.kerrang.com/kid-brunswick-releases-new-single-out-of-style-featuring-beauty-school-dropout', tier: 'tier2' },
      { outlet: 'PRNewswire', title: 'Beauty School Dropout to Join Machine Gun Kelly and Wiz Khalifa on Lost Americana Tour', date: '2026', url: 'https://www.prnewswire.com/news-releases/beauty-school-dropout-to-join-machine-gun-kelly-and-wiz-khalifa-on-lost-americana-tour-302748343.html', tier: 'tier2' },
    ],
    credibilityScore: 78,
    gap: 'Beauty School Dropout has spent six years winning the hard parts of a music career — the co-signs, the label, the producer, the press, the live reputation, the streaming scale, the content habit — and zero years building the part that turns all of it into a business. There is no owned audience. There is no campaign layer. The 138K-follower TikTok engine runs hot every single day and drives traffic to a Komi link and a Spotify profile, neither of which BSD controls. The 684K monthly Spotify listeners have no relationship with the band beyond the stream, and no path to one. The Lost Americana tour is about to put BSD in front of stadium crowds for two straight weeks with no mechanism to capture a single attendee. Every asset in this audit is real. The strategic prize is not building any new ones — it is wiring the existing ones into an engine the band actually owns, before the biggest exposure window of their career opens on May 15.',
  },

  // ─── Competitive Landscape ───
  competitiveLandscape: {
    competitors: [
      {
        name: 'Magnolia Park',
        website: 'https://www.magnoliaparkfl.com/',
        spotifyMonthlyListeners: 1400000,
        instagram: '@magnoliapark',
        instagramFollowers: 270000,
        positioning: 'Orlando pop-punk five-piece signed to Epitaph, positioned as the inclusive, TikTok-native standard-bearers of the new pop-punk wave, on the 2026 Warped Tour lineup.',
        strengths: ['1.4M Spotify monthly listeners and a ~410K TikTok — the discovery flywheel BSD is missing', 'Treats social as a system with campaign mechanics, not a feed', 'Epitaph backing plus a clear, press-friendly scene-leader narrative'],
        weaknesses: ['Still fighting the "TikTok band" label and the perception that the social footprint outruns the live reputation', 'Less marquee personal mentorship than BSD\'s Hoppus/Wentz network', 'Catalog depth questioned relative to streaming scale'],
        exploitableGaps: ['BSD already posts at Magnolia Park\'s volume — the gap is discovery mechanics and campaign craft, not audience-building from scratch', 'BSD\'s live reputation and co-sign network are stronger; pairing those with Magnolia Park-grade funnel discipline beats them on both ends', 'BSD\'s guerrilla instincts (red boots, Dirt) are more distinctive than anything in Magnolia Park\'s playbook'],
      },
      {
        name: 'Dead Poet Society',
        website: 'https://www.wearedps.com/',
        spotifyMonthlyListeners: 778000,
        instagram: '@wearedps',
        instagramFollowers: 200000,
        positioning: 'LA alt-rock band on a near-identical trajectory to BSD — riff-forward modern rock, relentless touring, big-tour support slots, and a steadily compounding streaming base.',
        strengths: ['A properly built owned website and a disciplined funnel — they treat the band as a business with a destination', 'Comparable streaming scale (~778K monthly listeners) with a cleaner conversion path', 'Consistent, considered content output'],
        weaknesses: ['Lacks the marquee personal co-sign network (Hoppus, Wentz) that gives BSD outsized industry access', 'Lower TikTok volume and a less distinctive voice than BSD', 'No brand-extension or guerrilla layer'],
        exploitableGaps: ['DPS is the clearest proof of what BSD\'s funnel could look like fully built — it is a roadmap, not a wall', 'BSD can close the infrastructure gap fast and then out-leverage DPS on access, press, tour profile, and content volume', 'BSD\'s "ugly/pretty" identity and Dirt extension give it a brand-world DPS does not have'],
      },
      {
        name: 'Meet Me @ The Altar',
        website: 'https://www.meetmeatthealtarband.com/',
        spotifyMonthlyListeners: 0,
        instagram: '@mmataband',
        instagramFollowers: 150000,
        positioning: 'Pop-punk trio positioned as scene leaders of a more inclusive genre, with strong press narrative and a 2026 Warped Tour slot.',
        strengths: ['A clear, ownable story the press reliably amplifies — they are easy to write about', 'Fueled By Ramen backing and festival-circuit credibility', 'Strong, defined visual and brand identity'],
        weaknesses: ['Streaming and content volume have not matched the press profile; momentum has been steady rather than explosive', 'Lower posting cadence than BSD', 'No owned-audience or commerce architecture visible'],
        exploitableGaps: ['BSD has the streaming scale (684K monthly listeners) and TikTok engine MMATA is still building', 'Pairing BSD\'s reach with a sharper campaign story closes MMATA\'s narrative advantage', 'BSD\'s guerrilla activations would out-cut-through MMATA\'s more conventional rollout'],
      },
      {
        name: 'Hot Milk',
        website: 'https://hotmilk.musicfornations.co.uk/',
        spotifyMonthlyListeners: 453000,
        instagram: '@hotmilkhotmilk',
        instagramFollowers: 85000,
        positioning: 'Manchester glam-punk band competing for the same festival slots and the same "high-energy live act" reputation, with a strong UK/EU base.',
        strengths: ['A magnetic frontline and a live reputation built across major UK/EU festival stages', 'Strong glam-punk visual identity — a direct analog to BSD\'s aesthetic in another territory', 'Established UK press relationships'],
        weaknesses: ['Smaller US footprint, smaller streaming catalog, and less industry-machine support', 'Lower content volume than BSD', 'US touring profile cannot match BSD\'s blink-182/MGK history'],
        exploitableGaps: ['BSD\'s blink-182 and MGK tour history gives it a US live profile Hot Milk cannot match — the US is defensible home turf', 'BSD\'s streaming scale is meaningfully larger; press that as the credibility lead', 'BSD\'s near-daily TikTok engine out-produces Hot Milk on the platform that drives discovery'],
      },
      {
        name: 'The Home Team',
        website: 'https://www.thehometeammerch.com/',
        spotifyMonthlyListeners: 0,
        instagram: '@thehometeam',
        instagramFollowers: 90000,
        positioning: 'Genre-blurring pop-rock band with a devoted core fanbase and a healthy independent merch and touring operation.',
        strengths: ['A tight, high-loyalty core community and a well-run direct merch business — strong fan economics per head', 'Independent operation with proven direct-to-fan discipline', 'Consistent touring at the club level'],
        weaknesses: ['Lower overall reach and press profile; the ceiling looks like a strong mid-tier act', 'No marquee co-signs or major-tour history at BSD\'s scale', 'Limited mainstream press footprint'],
        exploitableGaps: ['BSD has the press, co-signs, and tour scale to break past The Home Team\'s ceiling — if it matches their discipline on owned fan economics', 'The Home Team proves direct merch works for this audience; BSD can run that playbook at 2-3x the reach', 'BSD\'s Dirt extension is a bigger commerce idea than anything in The Home Team\'s catalog'],
      },
    ],
    marketAnalysis: 'The pop-punk and modern-rock revival is crowded and getting more so, but the competitive set splits cleanly into two camps, and BSD is the only act with a foot in neither problem. One camp — Magnolia Park, Dead Poet Society — has built the discovery mechanics and owned-funnel infrastructure but lacks BSD\'s co-sign network and marquee tour history. The other camp — Meet Me @ The Altar, Hot Milk, The Home Team — competes on scene narrative, live energy, or direct-fan discipline without BSD\'s streaming scale or content volume. Beauty School Dropout uniquely holds elite industry access, genuine streaming reach (684K monthly listeners), a near-daily social engine (138K TikTok), and a headliner-grade live show all at once. The competitive truth is uncomfortable but clarifying: BSD is not behind on talent, reach, or output. It is behind on architecture. Every competitor that looks ahead is ahead on exactly one thing — the funnel — and the funnel is buildable in a quarter.',
    crowdedness: 'high',
    opportunities: [
      'Be the first act in this set to pair a genuinely strong content engine with real owned-audience infrastructure — most competitors have one or the other, not both',
      'Use the Lost Americana tour as a two-week, stadium-scale exposure event no competitor currently has access to — and the only one of them positioned to convert it if the capture layer is built in time',
      'Own a guerrilla/brand-world lane (red boots, Dirt) that no competitor is operating in — distinctiveness, not volume, is the unclaimed territory',
      'Convert the 600K+ passive Spotify listeners into owned fans before any competitor builds a comparable streaming-to-fan conversion system',
    ],
  },

  // ─── Audience Intelligence ───
  audienceIntelligence: {
    coreDemographic: 'Gen Z, roughly ages 16 to 27, concentrated in the US with a meaningful UK/EU secondary base built through the Maggie Lindemann and Stand Atlantic tours. Gender skews more balanced than legacy pop-punk, with female fans driving a disproportionate share of online engagement and community activity. Disposable income is modest, but live music and scene-identity merch are priority spend categories — this audience will save for the show and the drop before almost anything else.',
    psychographics: [
      'Authenticity as the entry requirement — this audience can smell a manufactured band instantly, and BSD\'s earnest, emotional, "nicest guys" persona is the asset that clears the bar',
      'Outsider identity and scene belonging — pop-punk is a place to be a specific kind of person, and fans want a band that makes the in-group feel real and gives them ways to signal membership',
      'Play and participation — this audience does not want to watch a brand, it wants to do something with it: games, hunts, unlocks, inside jokes, UGC',
      'The live experience as core ritual — the show is the product they value most; everything digital is either a path to the show or a way to relive and re-share it',
    ],
    fanSegments: [
      {
        segment: 'Passive Streamers',
        size: 'The largest group — the bulk of ~684K Spotify monthly listeners',
        characteristics: ['Know one or two songs, likely from an algorithmic playlist or a cover', 'No social follow, no idea the band is on the MGK tour', 'Zero owned-channel relationship — entirely algorithm-mediated'],
        touchpoints: ['Spotify algorithmic and editorial playlists', 'TikTok For You page', 'YouTube auto-play'],
      },
      {
        segment: 'Social Followers',
        size: '~138K on TikTok, ~74K on Instagram (heavily overlapping)',
        characteristics: ['Engage with near-daily content, 6%+ like rates on TikTok', 'Know the band\'s personality and humor', 'Follow because the content is good — but have never been asked to do anything beyond watch'],
        touchpoints: ['TikTok daily content', 'Instagram feed and stories', 'YouTube'],
      },
      {
        segment: 'Show-Goers & Superfans',
        size: 'Smaller, intense core — the people who buy tickets and merch',
        characteristics: ['Travel to shows, mosh, get pulled on stage, buy the shirt', 'Describe the band as "the nicest guys" and "never disappoints"', 'Would join a list, play a game, and evangelize — if asked'],
        touchpoints: ['Live shows', 'Merch store', 'Comment sections and DMs', 'Word of mouth in scene communities'],
      },
      {
        segment: 'Scene-Adjacent Discoverers',
        size: 'High-potential — the MGK and Wiz Khalifa crowds on Lost Americana',
        characteristics: ['Came for the headliners, open to the opener', 'BSD\'s "performs like a headliner" reputation converts them in real time', 'Will vanish without a capture mechanism at the show'],
        touchpoints: ['The live set itself', 'Stage screens and signage', 'Post-show social search'],
      },
    ],
    onlineBehavior: [
      { platform: 'TikTok', behavior: 'Primary discovery and daily-engagement surface — BSD\'s strongest channel; the audience expects volume here and rewards it with 6%+ like rates' },
      { platform: 'Instagram', behavior: 'Fandom and community home base — fans follow the band and individual members, screenshot lyrics, share tour photos, treat it as where "real fans" live' },
      { platform: 'Spotify', behavior: 'Where the catalog actually gets consumed — 684K monthly listeners, most with no relationship to the band beyond the stream' },
      { platform: 'YouTube', behavior: 'Music videos, live clips, and the renegade-rock covers — used for deeper exploration once a fan is already curious' },
      { platform: 'Reddit', behavior: 'Scene communities (r/poppunkers, r/Emo and similar) where the audience debates the revival, ranks bands, and decides who is "real" — high-influence, low-control word of mouth' },
    ],
    customerQuotes: [
      { quote: 'For an opener they performed like a headliner. The energy was through the roof from before doors opened until everyone was walking out.', context: '2025 live review — the conversion event is real and repeatable' },
      { quote: 'BSD never disappoints. They\'re genuinely the nicest guys and you can feel how much they mean it when they thank the crowd.', context: 'Fan / live review sentiment — the earnestness is the trust layer' },
      { quote: 'TikTok introduced me to them through a cover and I went straight to the album — then kind of lost track of where to follow them.', context: 'Paraphrased fan sentiment — the funnel leaks at exactly the conversion point' },
    ],
    painPoints: [
      'No clear front door — a fan who discovers BSD on a stream or at the MGK show lands on a scattered set of accounts and a Komi link, with no owned destination and no reason to go deeper',
      'Passive listeners are never invited in — the gap between 684K monthly listeners and ~74K Instagram followers is hundreds of thousands of people who like the music and were never given a reason or a way to become fans',
      'Nothing to actually do — the audience wants to participate (hunts, unlocks, inside jokes), but BSD currently offers content to watch, not a game to play',
    ],
    conversionBarriers: [
      'Zero owned capture — no email, no SMS, no website form means there is literally no mechanism to convert attention into an owned relationship, no matter how much attention there is',
      'A streaming-pointed bio — the TikTok bio says "Stream WDATBG," sending the band\'s highest-intent traffic to a platform BSD does not own instead of to a list it could',
      'Lazy discovery mechanics — the same three generic hashtags on nearly every TikTok cap the reach of content that is otherwise strong, throttling the top of the funnel',
      'Fragmented architecture — equity split across @bsd.wav, member accounts, X, Facebook, and Komi means even motivated fans cannot find a single canonical path inward',
    ],
  },

  // ─── Artist Intelligence ───
  artistIntelligence: {
    spotifyMonthlyListeners: 684000,
    topSoundingReleases: [
      { title: 'Where Did All The Butterflies Go?', date: 'Sep 2025', features: 'Debut full-length, 14 tracks, produced by Neal Avron — near-unanimous critical praise' },
      { title: 'Ready to Eat', date: 'Oct 2023', features: 'Second studio album — singles "Beautiful Waste," "One Night Stand You"' },
      { title: 'We Made Plans & God Laughed', date: 'Aug 2022', features: 'First studio album — "Almost Famous" feat. Mark Hoppus' },
    ],
    labelConnections: [
      'Verswire — label home, the Mark Hoppus / Pete Wentz-associated imprint that developed the band',
      'Neal Avron — producer of the 2025 debut full-length (Fall Out Boy, twenty one pilots, Linkin Park, Yellowcard, New Found Glory)',
      'Nick Lippman / Lippman Entertainment — management',
    ],
    festivalExperience: [
      'Major US and EU festival appearances across the 2023-2025 album cycles',
      'Performed at the Rock & Roll Hall of Fame',
    ],
    collaborationHistory: [
      'Mark Hoppus (blink-182) — "Almost Famous"',
      'Jason Aalon Butler and Rob Cavallo — Boys Do Cry EP',
      'jxdn — "Freak"',
      'Kid Brunswick — "Out Of Style"',
    ],
    influencerRelationships: [
      'Lil Nas X — reposted BSD\'s "Montero" renegade-rock cover',
      'Mark Hoppus and Pete Wentz — early mentors and public co-signs',
    ],
    radioDJSupport: [
      'idobi Radio — multiple sessions and unplugged single releases',
      'Vevo — online live performance features',
    ],
  },

  // ─── SWOT Analysis ───
  swot: {
    strengths: [
      { title: 'A content engine that already runs at scale', description: 'Most bands at this tier have to be taught to post. BSD has posted 1,468 TikToks, holds 138K followers and 2.6M likes, and ships near-daily with like rates north of 6%. The hardest, slowest-to-build asset in modern music marketing — a genuine content habit with an audience that rewards it — is already done.', evidence: '138,700 TikTok followers, 1,468 videos, 2.6M likes; breakout posts at 70-96K plays' },
      { title: 'An industry co-sign network that punches above the tier', description: 'Developed by Mark Hoppus and Pete Wentz, signed to Verswire, managed by Lippman, with a Neal Avron-produced debut and tour slots with blink-182 and MGK. This is the access of a band several tiers larger, and it is not replicable by any competitor in the set.', evidence: 'Verswire deal; Hoppus/Wentz mentorship; Neal Avron production; blink-182 and MGK tours' },
      { title: 'A live show that converts rooms on contact', description: 'The 2025 review consensus is blunt: "for an opener, Beauty School Dropout performs like a headliner." Shirt-off closers, crowd surfing, fans pulled on stage. Every tour slot is a high-yield conversion event — and Lost Americana is two straight weeks of them at stadium scale.', evidence: 'Consistent 2025 live reviews; "Fight Mode" closer as a repeatable conversion moment' },
      { title: 'A distinctive, merchandisable brand identity', description: 'The "ugly/pretty" tension — dirty punk attitude over clean pop dynamics, butterflies over grit — is a fully-formed brand world, not just a sound. It is exactly the instinct that makes a leather bag line called "Dirt" make sense. Distinctiveness is the rarest asset in a crowded revival, and BSD has it.', evidence: 'SPIN "Ugly/Pretty Rise" profile; "Where Did All The Butterflies Go?" era; planned "Dirt" extension' },
      { title: 'Genuine streaming consumption scale', description: 'A 60M+ stream catalog and ~684K Spotify monthly listeners is real demand — larger than two of the five closest competitors. The music travels. The problem is purely that nothing catches the people it travels to.', evidence: '~684K Spotify monthly listeners; 60M+ catalog streams' },
    ],
    weaknesses: [
      { title: 'Zero owned-audience infrastructure', description: 'No website, no email list, no SMS, no first-party data. The "website" is a Komi link aggregator. For a band with 138K TikTok followers and 684K monthly listeners, every single audience relationship is rented from a platform — and can be devalued by an algorithm change overnight. This is the central weakness the entire strategy exists to fix.', evidence: 'bsd.komi.io is the only "site"; no capture mechanism anywhere' },
      { title: 'A strong engine pointed at nothing it owns', description: 'The content is high-volume but mostly atomized daily posts, and the bio sends traffic to "Stream WDATBG" — a platform the band does not control. There is no campaign layer, no recurring mechanic, no game for the audience to play. The effort is real; the aim is missing.', evidence: 'TikTok bio points to streaming; no campaign furniture across the feed' },
      { title: 'Lazy discovery mechanics', description: 'Nearly every TikTok carries the same three tags — #beautyschooldropout #rockmusic #band — with no trend tags, song tags, or format strategy. The breakouts are the posts tied to a moment or asset. The band is throttling the reach of content that is otherwise good, on the one platform that works best.', evidence: 'Repetitive hashtag pattern across recent posts; moment-tied posts outperform 4-5x' },
      { title: 'Fragmented brand equity', description: 'Audience and attention are split across @bsd.wav, separate member accounts (Bardo ~26K), an X account, a Facebook page, and the Komi hub, with no single funnel. Even a motivated fan has no canonical path inward.', evidence: 'Multiple member accounts; no consolidated link architecture' },
      { title: 'The streaming-to-fan conversion gap', description: '684K monthly listeners against 74K Instagram followers is roughly an 11% conversion rate — meaning ~89% of the people consuming the music have no relationship with the band. Healthy modern rock acts that actively convert run well above this.', evidence: '~684K Spotify monthly listeners vs ~74K Instagram followers' },
    ],
    opportunities: [
      { title: 'The Lost Americana exposure window', description: 'The MGK and Wiz Khalifa tour puts BSD in front of amphitheater and stadium crowds for two weeks (May 15-30). If a capture mechanism is live before the opener, this is a once-a-cycle chance to convert tens of thousands of high-intent attendees into an owned audience. If it is not, the window closes and the audience evaporates.', evidence: 'Lost Americana Tour, May 15-30, 2026, amphitheater/stadium scale' },
      { title: 'A guerrilla campaign lane no competitor occupies', description: 'The band\'s own ideas — "Find the Red Boots" (Colie hides in the crowd in signature red boots, fans find him in a nosebleed photo to unlock merch) and the "Dirt" bag line — are distinctive, participatory, and inherently shareable. No competitor in the set is operating in this space. Distinctiveness is the unclaimed territory in a crowded revival.', evidence: 'Band-originated concepts; competitor set runs conventional rollouts' },
      { title: 'Convert passive listeners before anyone else does', description: 'The 600K+ passive Spotify listeners are a standing asset. A deliberate streaming-to-fan conversion system — Canvas, pre-saves, in-catalog CTAs, paid retargeting of listeners — monetizes demand that already exists. No competitor has built a comparable system.', evidence: '~684K monthly listeners with no conversion layer' },
      { title: '"Dirt" as a second flywheel', description: 'A premium leather-bag brand whose name is the joke gives the TikTok engine something new to make content about and diversifies revenue beyond the band. Treated as a campaign, not a SKU, Dirt becomes a second business that feeds the same audience.', evidence: 'Planned "Dirt / Dirt Bags" leather duffel line' },
    ],
    threats: [
      { title: 'Competitors compounding owned audiences while BSD does not', description: 'Magnolia Park and Dead Poet Society are building funnels and owned destinations now. Every month BSD runs its engine without a capture layer, those competitors compound an advantage in the one dimension that actually protects a music business from platform risk.', evidence: 'DPS owned website + funnel; Magnolia Park campaign-system social' },
      { title: 'Platform dependency and algorithm risk', description: 'With 100% of BSD\'s audience relationships rented from TikTok, Spotify, and Instagram, a single algorithm change, policy shift, or platform decline could devalue the entire audience overnight. The band has no insulation.', evidence: 'No owned channels; bio points to streaming' },
      { title: 'The tour window passing un-activated', description: 'Lost Americana is a fixed, perishable opportunity. If the capture mechanism and guerrilla activation are not built before May 15, the single biggest exposure event of the cycle delivers attention with no retention — a one-time spike instead of a permanent asset.', evidence: 'May 15 tour opener; no capture infrastructure currently exists' },
      { title: 'A crowded revival raising the cost of distinctiveness', description: 'The pop-punk revival is high and getting more crowded. As more acts compete for the same slots and the same Gen Z attention, "good band, good content" stops being enough. Without a distinctive campaign world, BSD risks blending into a saturating field.', evidence: 'High market crowdedness; Warped Tour 2026 stacked with peer acts' },
    ],
    synthesis: 'The SWOT tells one clear story, and it is an unusually fixable one. Beauty School Dropout\'s strengths and weaknesses are not in tension — they are the same fact viewed twice. The band has a content engine, a co-sign network, a live show, a brand identity, and streaming scale (strengths), and every one of those assets is currently un-owned, un-aimed, and un-converted (weaknesses). The opportunities are all variations on a single move — bolt an owned, guerrilla-driven conversion layer onto the engine that already runs — and the threats are all variations on a single cost: the longer that move waits, the more competitors compound, the more platform risk accrues, and the closer the Lost Americana window gets to closing un-activated. This is not a strategy that needs to build new assets. It is a strategy that needs to wire the existing ones together, fast, before May 15.',
  },

  // ─── Executive Summary ───
  executiveSummary: {
    thesis: 'Beauty School Dropout does not have a growth problem — it has an architecture problem. In six years the band has won the co-signs, the label, the producer, the press, the live reputation, the streaming scale, and the content habit that most acts spend a decade chasing. What it has never built is the business behind the band: no website, no email, no SMS, no campaign layer, no owned audience. The next 12 months are not about discovery or reinvention. They are about installing the operating layer that converts a hot engine into a machine the band actually owns — starting before the Lost Americana tour opens on May 15.',
    keyFindings: [
      'BSD runs one of the strongest content engines in its competitive set — 138K TikTok followers, 1,468 videos, near-daily cadence, 6%+ like rates — and points all of it at platforms it does not own.',
      'The streaming-to-fan conversion gap is the single biggest untapped asset: ~684K Spotify monthly listeners against ~74K Instagram followers means ~89% of the people consuming the music have no relationship with the band.',
      'There is zero owned-audience infrastructure — no website, no email, no SMS, no first-party data — for an act with this much reach. Every audience relationship is rented from an algorithm.',
      'The Lost Americana tour (May 15-30, with MGK and Wiz Khalifa) is a two-week, stadium-scale exposure event with no capture mechanism currently attached to it.',
      'The band\'s own guerrilla instincts — the "Find the Red Boots" tour activation and the "Dirt" leather-bag brand extension — are distinctive, participatory, and sit in a lane no competitor occupies, but none of it is built.',
      'Competitors split into two camps: those with funnels but weaker co-signs (Magnolia Park, Dead Poet Society) and those with narrative but weaker scale (Meet Me @ The Altar, Hot Milk, The Home Team). BSD is the only act positioned to hold both — once the funnel exists.',
    ],
    primaryRecommendation: 'Treat the next 12 months as an infrastructure-and-activation build, not a brand build. Four moves anchor the year: (1) stand up owned email/SMS capture and a real website before May 15, with the "Find the Red Boots" game as the sign-up incentive; (2) run the Lost Americana tour as a guerrilla content-and-capture sprint, converting stadium exposure into an owned list; (3) build the streaming-to-fan conversion system that turns 600K+ passive listeners into followers and subscribers; (4) launch "Dirt" as a guerrilla brand drop that becomes a second flywheel. CCD\'s role is the operating partner that wires the existing assets together and builds the owned layer that compounds across all of them.',
    timelineToTarget: '12 months (May 2026 – May 2027), with the first 3 weeks as a non-negotiable pre-tour sprint and quarterly checkpoints thereafter',
    rebrandGoals: [
      { number: 1, title: 'Build the owned layer', description: 'Stand up beautyschooldropout.com, email, and SMS. Stop renting every audience relationship. The bio stops pointing to "Stream WDATBG" and starts pointing to something BSD controls. By month 12, the band has a first-party audience that survives any platform shift.' },
      { number: 2, title: 'Aim the engine with guerrilla campaigns', description: 'Give the content machine something to drive toward. "Find the Red Boots" runs every night of Lost Americana. Discovery mechanics get fixed. The feed stops being atomized daily posts and starts being campaign chapters.' },
      { number: 3, title: 'Convert and diversify', description: 'Wire the 600K+ passive streamers into the owned audience. Launch "Dirt" as a real brand extension and a second content engine. By month 12, BSD has a conversion system and a second flywheel — not just a band.' },
    ],
    fullNarrative: 'The strategic story Beauty School Dropout needs to tell over the next 12 months is not the story of a band trying to break. It is the story of a band that has already done the hard part and never built the easy part.\n\nFor six years BSD has been winning the parts of a music career that are supposed to be slow and uncertain. The Mark Hoppus and Pete Wentz co-sign. The Verswire deal. The Neal Avron-produced debut full-length that the rock press received with near-unanimous praise. The 60M-plus catalog streams. The 684,000 Spotify monthly listeners. The 138,000-follower TikTok that ships content almost every day with engagement most bands would trade a label advance for. The live reputation — "performs like a headliner" — that converts rooms on contact. And now the Lost Americana tour, two weeks of amphitheater and stadium stages alongside MGK and Wiz Khalifa. By any measure of talent, reach, or output, this is a band that has arrived.\n\nAnd yet the business behind the band does not exist. There is no website — the "site" is a Komi link aggregator. There is no email list. There is no SMS. There is no first-party data anywhere in the operation. The TikTok bio, the band\'s single highest-intent piece of real estate, points fans to "Stream WDATBG" — to Spotify, a platform BSD does not own and cannot monetize directly. The 684,000 people streaming the music have no relationship with the band beyond the stream, and no path to one. The content engine runs hot every single day and drives all of that motion toward rented land. This is the entire problem, and it is worth stating plainly: BSD is not behind on growth. It is behind on architecture.\n\nThe path forward, therefore, is not "make more content" or "rebrand" or "find the audience." The content is good. The brand is fully formed. The audience exists. What is missing is the operating layer — the owned infrastructure and the campaign mechanics that convert all of this motion into something that compounds and something the band controls. That means standing up a real website, an email list, and an SMS list before the Lost Americana tour opens on May 15, because every show that passes without a capture mechanism is permanently lost audience. It means running the tour as a guerrilla activation — the band\'s own "Find the Red Boots" idea, where Colie hides in the crowd in a signature pair of red boots and fans race to find him in a nosebleed photo to unlock merch — and email-gating the unlock so the stunt and the capture mechanism are the same build. It means fixing the lazy discovery mechanics throttling an otherwise strong TikTok. It means building the system that converts 600,000-plus passive listeners into owned fans. And it means launching "Dirt," the premium leather-bag line whose name is the joke and the marketing, as a guerrilla brand drop and a second content flywheel.\n\nThe deliverable at the end of 12 months is not a bigger Beauty School Dropout. It is a Beauty School Dropout whose business is finally structured the way the band already reads — a hot engine with a machine bolted to it, an owned audience that no algorithm can devalue, a guerrilla campaign world no competitor occupies, and a second revenue line in Dirt. The infrastructure built in this window is what makes every tour, every release, and every drop after it compound instead of starting cold.',
  },

  // ─── Strategic Pillars ───
  strategicPillars: [
    {
      title: 'Own The Audience',
      thesis: 'Everything BSD has built sits on rented land. The 138K TikTok, the 684K monthly listeners, the 74K Instagram — all of it can be devalued by an algorithm change the band has no say in. The first pillar is structural and urgent: build the owned layer. A real website at beautyschooldropout.com, an email list, an SMS list, and first-party data capture wired into every touchpoint. This is not a marketing nicety — it is the difference between a band that owns a business and a band that rents an audience. And it has a hard deadline, because the Lost Americana tour opens on May 15 and every un-captured show is gone forever.',
      successMetrics: [
        'Email + SMS capture live before May 15, routed from every bio and the link hub',
        '25,000+ email/SMS subscribers within 90 days',
        'beautyschooldropout.com launched as the canonical owned home by month 4',
        'TikTok and Instagram bios re-pointed from "Stream WDATBG" to an owned destination',
      ],
      keyInitiatives: [
        'Deploy a fast email/SMS capture page (Klaviyo or similar) in week one',
        'Install Meta Pixel, TikTok Pixel, and GA4 across all properties for retargeting',
        'Build and launch beautyschooldropout.com with integrated store and persistent capture',
        'Consolidate fragmented account architecture into one canonical funnel',
      ],
    },
    {
      title: 'Aim The Engine',
      thesis: 'BSD already does the thing most bands cannot — it produces. 1,468 TikToks, near-daily, with real engagement. The problem is the engine drives toward nothing the band owns and runs on atomized daily posts instead of campaigns. The second pillar gives the engine a target. That means a recurring guerrilla mechanic — the band\'s own "Find the Red Boots" idea — running every night of Lost Americana. It means fixing the discovery mechanics that throttle an otherwise strong feed: real per-post tagging instead of the same three hashtags. And it means turning the feed from a stream of posts into a sequence of campaign chapters the audience can follow.',
      successMetrics: [
        '"Find the Red Boots" activation live for every Lost Americana date',
        'TikTok followers from 138K to 250K within 6 months',
        'Average non-moment post performance floor lifted via discovery-mechanic fixes',
        '2-3 repeatable series formats established and running on a fixed cadence',
      ],
      keyInitiatives: [
        'Build the "Find the Red Boots" campaign system — creative, daily loop, per-city unlocks, campaign hashtag',
        'Overhaul TikTok discovery — per-post trend/song/tour tagging, owned-channel CTAs',
        'Establish repeatable series formats (renegade-rock covers, red-boots hunt, on-the-road bits)',
        'Tie content deliberately to moments and assets — the data shows moment-tied posts outperform 4-5x',
      ],
    },
    {
      title: 'Convert The Stream',
      thesis: 'There are roughly 684,000 people streaming Beauty School Dropout every month and roughly 74,000 following the band on Instagram. The 610,000-person gap is not a failure — it is the single largest growth asset in the audit, a standing reserve of people who already like the music and were simply never asked to go deeper. The third pillar builds the system that asks them. Spotify Canvas and in-catalog calls-to-action. Pre-save campaigns that capture email at the point of intent. Low-budget paid retargeting of catalog listeners and tour-content viewers. The work here is not generating demand — it is harvesting demand that already exists.',
      successMetrics: [
        'Streaming-to-follower conversion rate from ~11% to 20%+ within 6 months',
        'Spotify monthly listeners from ~684K to 1M+ within 6-9 months',
        'Instagram followers from ~74K to 150K within 6 months',
        'Pre-save email capture wired into every new release from Q2 forward',
      ],
      keyInitiatives: [
        'Add Spotify Canvas and follow/pre-save CTAs across the active catalog',
        'Run pre-save campaigns that capture email at the point of intent for every release',
        'Launch low-budget paid retargeting of catalog listeners and tour-content viewers',
        'Pitch Spotify and Apple Music editorial for the post-tour single, timed to the Lost Americana window',
      ],
    },
    {
      title: 'Build The World',
      thesis: 'The "ugly/pretty" tension is not just a sound — it is a brand world wide enough to hold things beyond music. The fourth pillar builds that world out, and its anchor is the band\'s own idea: "Dirt," a premium leather-bag line whose name is the joke and the marketing. Treated as a campaign rather than a SKU, Dirt does three jobs at once — it diversifies revenue beyond the band, it gives the content engine a fresh subject, and it gives the audience another way to signal membership. Combined with the guerrilla activations, this pillar is what makes BSD distinctive in a saturating revival: not the loudest band, but the one running a world no competitor is operating in.',
      successMetrics: [
        '"Dirt" launched as a guerrilla brand drop with its own handle by month 9-12',
        'First Dirt run limited, numbered, and email-gated — sold through',
        'Measurable D2C revenue baseline established across BSD merch + Dirt',
        'Guerrilla activations (red boots, Dirt) generating consistent earned UGC and shares',
      ],
      keyInitiatives: [
        'Build the Dirt launch around the name — premium product, subversive positioning, sold with a wink',
        'Tease Dirt through the TikTok engine — unboxings, band bits, "is this worth it" bait',
        'Drop Dirt limited and email-gated first, then open it — scarcity before scale',
        'Architect beautyschooldropout.com to house a Dirt storefront and cross-pollinate the audiences',
      ],
    },
  ],

  // ─── Roadmap ───
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'Pre-Tour Sprint — Build the Capture Layer',
      duration: 'Weeks 1-3 (before May 15)',
      description: 'This is the non-negotiable phase. The Lost Americana tour opens on May 15, and everything that makes the tour a growth event instead of a spike has to be live before the first show. The strategic logic is brutal and simple: every un-captured show is permanently lost audience, so the capture layer, the guerrilla mechanic, and the discovery fixes all ship before the band leaves.',
      actions: [
        { action: 'Deploy email/SMS capture page (Klaviyo or similar), routed from every bio and the Komi hub', deadline: 'Week 1' },
        { action: 'Build the "Find the Red Boots" campaign system — creative, daily loop, per-city unlock items, campaign hashtag', deadline: 'Week 2' },
        { action: 'Make the red-boots merch unlock email-gated — sign up to play, sign up to claim', deadline: 'Week 2' },
        { action: 'Overhaul TikTok discovery mechanics — per-post tagging, owned-channel CTAs in caption and pinned comment', deadline: 'Week 2' },
        { action: 'Re-point TikTok and Instagram bios from "Stream WDATBG" to the owned capture link; consolidate account architecture', deadline: 'Week 3' },
        { action: 'Install Meta Pixel, TikTok Pixel, and GA4 across all properties', deadline: 'Week 3' },
      ],
      expectedOutcomes: [
        'A live capture mechanism in place before the first Lost Americana date',
        'The "Find the Red Boots" game ready to run night one',
        'Every band touchpoint routing toward owned land instead of rented platforms',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Tour Activation — Run the Guerrilla Sprint',
      duration: 'Weeks 4-8 (the Lost Americana run, May 15-30, and immediate aftermath)',
      description: 'Phase 1 built the machine; Phase 2 runs it at full speed against the biggest exposure window of the cycle. The strategic logic is to treat the tour as a content-and-capture production sprint, not a series of shows — every night feeds the red-boots game, the feed, and the email list simultaneously, with the "Fight Mode" closer as the recurring hero asset.',
      actions: [
        { action: 'Run "Find the Red Boots" every show night — crowd photo posted within an hour of the set, winner and unlock revealed next day', deadline: 'Every Lost Americana date' },
        { action: 'Execute the daily capture-and-publish loop — one TikTok-native clip and one Instagram post per show day', deadline: 'Daily through the run' },
        { action: 'Deploy stage-screen and signage CTAs driving the live audience to owned capture', deadline: 'Week 4' },
        { action: 'Capture "Fight Mode" closer and crowd-reaction footage as the hero conversion asset', deadline: 'Every date' },
        { action: 'Retarget engaged tour-content viewers with follow and pre-save asks', deadline: 'Weeks 6-8' },
      ],
      expectedOutcomes: [
        '15,000+ email/SMS subscribers captured during the tour run',
        'A library of tour content fueling the feed for months',
        'Proof that the guerrilla mechanic converts — a repeatable playbook for every future tour',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Home Base & Conversion — Turn Listeners Into Fans',
      duration: 'Months 3-6',
      description: 'With capture live and the tour having driven a surge of attention, Phase 3 builds the permanent home and turns the harvesting system on. The strategic logic: the tour created a one-time spike of new awareness, and now the job is to convert that spike — plus the 600K+ standing passive listeners — into owned, durable relationships before the attention decays.',
      actions: [
        { action: 'Launch beautyschooldropout.com as the canonical owned home, with the red-boots hub and integrated store', deadline: 'Month 4' },
        { action: 'Add Spotify Canvas and follow/pre-save CTAs across the active catalog', deadline: 'Month 4' },
        { action: 'Run low-budget paid retargeting of catalog listeners and tour-content viewers', deadline: 'Months 4-6' },
        { action: 'Launch email/SMS lifecycle flows — welcome, tour, merch, new-music', deadline: 'Month 5' },
        { action: 'Pitch Spotify and Apple Music editorial for the post-tour single', deadline: 'Month 5-6' },
      ],
      expectedOutcomes: [
        'beautyschooldropout.com live as the single canonical destination',
        'Streaming-to-follower conversion climbing from ~11% toward 20%',
        'Spotify monthly listeners trending toward 1M',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Build The World — Launch Dirt & Make It Repeatable',
      duration: 'Months 7-12',
      description: 'The infrastructure is built and the conversion system is running; Phase 4 extends the brand world and turns the whole operation into a self-sustaining loop. The strategic logic: with an owned audience and a proven guerrilla mechanic, BSD can now launch a second flywheel (Dirt) and lock the always-on systems that make every future cycle compound instead of starting cold.',
      actions: [
        { action: 'Launch "Dirt" as a guerrilla brand drop — own handle, limited and numbered first run, email-gated', deadline: 'Months 9-12' },
        { action: 'Tease Dirt through the TikTok engine — unboxings, band bits, "is this worth it" bait', deadline: 'Months 8-9' },
        { action: 'Lock the always-on content system — series formats, tour and studio content, owned-channel publishing calendar', deadline: 'Month 8' },
        { action: 'Build the reporting dashboard tracking list growth, conversion rate, and D2C revenue against KPI targets', deadline: 'Month 9' },
        { action: 'Run a second guerrilla activation on the next tour or release using the proven red-boots playbook', deadline: 'Months 10-12' },
      ],
      expectedOutcomes: [
        'Dirt launched and its first run sold through',
        'A measurable D2C revenue baseline across BSD merch and Dirt',
        'An always-on engine where every release, tour, and drop compounds on an owned audience',
      ],
    },
  ],

  // ─── Channel Strategy ───
  channelStrategy: {
    overview: 'BSD\'s channel strategy must shift from "post everywhere, point everything at Spotify" to a layered system where each channel has a defined role and they all funnel toward owned land. TikTok is the discovery engine — keep the cadence and voice, fix the mechanics. Instagram is the fandom home — port the TikTok audience into deeper community. Spotify and the catalog are the consumption layer and the conversion target. The website and email/SMS are the owned compounding infrastructure that everything else feeds. And the guerrilla layer — red boots, Dirt — runs across all of them as the connective campaign tissue. The shift is from channel sprawl to channel architecture.',
    channelPlans: [
      {
        name: 'TikTok — The Discovery Engine',
        objective: 'Keep the strongest owned channel running, but aim it. Cadence and voice are working; the job is to fix discovery mechanics and point the traffic at owned land.',
        tactics: [
          'Maintain near-daily cadence — it works and the audience rewards it',
          'Replace the default three-hashtag stack with per-post trend, song, and tour tagging',
          'Run "Find the Red Boots" and the renegade-rock cover series as fixed, repeatable formats',
          'Add an owned-channel CTA to every caption and pinned comment',
          'Tie posts deliberately to moments and assets — the data shows moment-tied posts outperform 4-5x',
        ],
        contentTypes: ['Renegade-rock covers', 'Red-boots hunt', 'On-the-road bits', 'Tour and live clips', 'Band humor / talking-to-camera'],
        frequency: 'Near-daily (5-7 posts/week)',
      },
      {
        name: 'Instagram — The Fandom Home',
        objective: 'Convert the TikTok discovery audience into deeper community. Stop running it as a parallel feed and start running it as the next funnel stage.',
        tactics: [
          'Cross-port top TikTok content and tour footage to Reels',
          'Use Stories for the red-boots daily reveal and behind-the-scenes',
          'Drive the bio link to owned capture, not streaming',
          'Lean into the verified fandom-home role — lyrics, tour photos, community moments',
        ],
        contentTypes: ['Reels', 'Tour photo carousels', 'Red-boots Stories', 'Community reposts'],
        frequency: '4-5 posts/week + daily Stories during tour',
      },
      {
        name: 'Streaming / DSPs — The Conversion Target',
        objective: 'Treat the 684K monthly listeners as a standing asset to harvest, not a vanity metric. Wire conversion mechanics into the listening experience.',
        tactics: [
          'Add Spotify Canvas and follow/pre-save CTAs across the active catalog',
          'Run pre-save campaigns that capture email at the point of intent for every release',
          'Pitch Spotify and Apple Music editorial for the post-tour single',
          'Optimize release cadence for algorithmic favor through the cycle',
        ],
        contentTypes: ['Canvas loops', 'Pre-save campaigns', 'Editorial pitches', 'Catalog CTAs'],
        frequency: 'Always-on, with campaign spikes per release',
      },
      {
        name: 'Website + Email/SMS — Owned Infrastructure',
        objective: 'Build and run the compounding layer the band currently does not have. This is the destination everything else funnels toward.',
        tactics: [
          'Launch beautyschooldropout.com with integrated store, tour dates, and persistent capture',
          'Host the "Find the Red Boots" hub on-site — daily photos, unlocks, leaderboard',
          'Run lifecycle email/SMS flows — welcome, tour, merch, new-music',
          'Gate guerrilla unlocks and pre-sales behind the list',
        ],
        contentTypes: ['Website', 'Email lifecycle flows', 'SMS drops', 'Red-boots hub'],
        frequency: 'Site always-on; email/SMS 1-2x per week with campaign spikes',
      },
      {
        name: 'Guerrilla Layer — The Connective Tissue',
        objective: 'Run the campaign world that makes BSD distinctive and gives every other channel something to drive toward.',
        tactics: [
          'Run "Find the Red Boots" across the full Lost Americana run',
          'Launch "Dirt" as a guerrilla brand drop with its own handle',
          'Design every activation to be email-gated so the stunt is also the capture mechanism',
          'Re-cut the activations into earned UGC and feed it back across all channels',
        ],
        contentTypes: ['Red-boots activation', 'Dirt brand drops', 'Limited merch unlocks', 'UGC re-cuts'],
        frequency: 'Per tour and per release, always tied to a capture mechanic',
      },
    ],
    allocationModel: {
      channels: [
        { channel: 'TikTok — Discovery Engine', allocation: 30 },
        { channel: 'Website + Email/SMS — Owned Infrastructure', allocation: 25 },
        { channel: 'Guerrilla Layer — Red Boots & Dirt', allocation: 20 },
        { channel: 'Streaming / DSP Conversion', allocation: 15 },
        { channel: 'Instagram — Fandom Home', allocation: 10 },
      ],
      total: 100,
    },
    integratedTactics: [
      'The "Find the Red Boots" game is simultaneously a guerrilla activation, a TikTok format, an Instagram Story series, and the email capture incentive — one build, four channels',
      'Every tour show feeds the red-boots game, the daily content loop, and the email list at the same time',
      'The website hosts the red-boots hub and the Dirt store, making owned land the destination for both guerrilla campaigns',
      'Pre-save campaigns convert streaming intent into email — wiring the DSP layer directly into owned infrastructure',
      'Dirt teases run through the TikTok engine, giving the discovery channel fresh subject matter while building the second flywheel',
    ],
  },

  // ─── KPI Framework ───
  kpiFramework: [
    {
      metric: 'Email + SMS subscribers',
      current: '0 (no capture infrastructure exists)',
      target: '25,000+ by month 3',
      benchmark: 'An act on amphitheater/stadium support slots with an email-gated guerrilla mechanic live during the run can convert a low-single-digit percentage of exposure plus existing social audience',
      timeframe: '90 days',
      rationale: 'The single highest-leverage compounding asset and the entire point of the strategy. Every other initiative feeds this number. At 25K, BSD has its first platform-independent asset.',
    },
    {
      metric: 'TikTok followers',
      current: '138,700',
      target: '250,000 by month 6',
      benchmark: 'Direct competitors Magnolia Park (~410K) and Dead Poet Society (~300K) show the ceiling for a rock-band TikTok at this tier',
      timeframe: '6 months',
      rationale: 'BSD already posts at competitor volume with strong engagement. Fixing discovery mechanics and adding the red-boots series closes most of the gap without changing the cadence.',
    },
    {
      metric: 'Instagram followers',
      current: '74,666 (verified)',
      target: '150,000 by month 6',
      benchmark: 'Instagram badly lags TikTok (138K) and the streaming base (684K); peer acts run far tighter ratios',
      timeframe: '6 months',
      rationale: 'Cross-porting the TikTok audience and the tour-content surge should double the base over a tour cycle and bring it in line with the peer set.',
    },
    {
      metric: 'Spotify monthly listeners',
      current: '~684,000',
      target: '1,000,000+ by month 9',
      benchmark: 'Crossing 1M materially changes booking and partnership conversations; Dead Poet Society sits at ~778K, Magnolia Park at ~1.4M',
      timeframe: '6-9 months',
      rationale: 'Lost Americana exposure, sharpened discovery mechanics, and editorial pitching around the post-tour single together support breaking the 1M threshold.',
    },
    {
      metric: 'Streaming-to-follower conversion rate',
      current: '~11% (74K IG vs 684K monthly listeners)',
      target: '20%+ by month 6',
      benchmark: 'Healthy modern rock acts that actively run streaming-to-social conversion convert well above 11%',
      timeframe: '6 months',
      rationale: 'Doubling toward 20% is the difference between renting an audience on streaming and owning a fanbase — and it harvests demand that already exists.',
    },
    {
      metric: 'D2C revenue baseline (merch + Dirt)',
      current: 'No campaign structure or measurable baseline exists',
      target: 'Established baseline + a sold-through limited Dirt launch run by month 12',
      benchmark: 'Peer acts like The Home Team run healthy direct merch economics on smaller audiences',
      timeframe: '12 months',
      rationale: 'Scarcity-driven, email-gated drops on an owned stack reliably sell through for engaged scene audiences. Establishing a measurable baseline is the win; scale follows once the mechanic is proven.',
    },
  ],

  // ─── Risk Matrix ───
  riskMatrix: [
    {
      title: 'The tour window passes un-activated',
      description: 'Lost Americana is a fixed, perishable opportunity opening May 15. If the capture mechanism and the "Find the Red Boots" activation are not live before the first show, the single biggest exposure event of the cycle delivers attention with no retention — a one-time spike instead of a permanent owned asset.',
      likelihood: 'medium',
      impact: 'high',
      mitigation: 'Treat Phase 1 as non-negotiable and time-boxed to 3 weeks. The capture page and the red-boots system ship before anything else, even if they ship lean. A simple working mechanism on May 15 beats a polished one on June 1.',
    },
    {
      title: 'Competitors compound owned audiences first',
      description: 'Magnolia Park and Dead Poet Society are building funnels and owned destinations now. Every month BSD runs its engine without a capture layer, those competitors compound an advantage in the one dimension that protects a music business from platform risk.',
      likelihood: 'high',
      impact: 'medium',
      mitigation: 'Speed is the mitigation. The owned layer is buildable in a quarter, and BSD\'s content engine and co-sign network mean it can close the gap faster than competitors can extend it — but only if the build starts now.',
    },
    {
      title: 'Platform dependency / algorithm shock',
      description: 'With 100% of BSD\'s audience relationships rented from TikTok, Spotify, and Instagram, a single algorithm change, policy shift, or platform decline could devalue the entire audience overnight. The band currently has zero insulation.',
      likelihood: 'medium',
      impact: 'high',
      mitigation: 'The entire "Own The Audience" pillar is the mitigation. Every subscriber moved to email/SMS is one relationship insulated from platform risk. The 25K-subscriber target is the first real buffer.',
    },
    {
      title: 'Guerrilla activation misfires or feels forced',
      description: 'Guerrilla campaigns live or die on execution. A "Find the Red Boots" game that is confusing, poorly photographed, or feels like a marketing stunt rather than a genuine bit could underperform or read as inauthentic to a fanbase that prizes authenticity above everything.',
      likelihood: 'low',
      impact: 'medium',
      mitigation: 'The mechanic is the band\'s own idea, which protects authenticity. Keep it simple and consistent, let the band\'s real voice carry it, and pilot it on the first 1-2 dates before locking the format for the full run.',
    },
    {
      title: 'Dirt dilutes focus before the core is built',
      description: 'The Dirt brand extension is exciting, and excitement can pull resources forward. Launching Dirt before the owned audience and conversion systems are built risks splitting focus and launching a second brand into the same infrastructure vacuum that limits the first.',
      likelihood: 'medium',
      impact: 'medium',
      mitigation: 'Sequencing is the mitigation. Dirt is explicitly a Phase 4 initiative. It launches into a built owned audience and a proven guerrilla playbook — which is exactly what makes it land instead of leak.',
    },
  ],

  // ─── Recommendations ───
  recommendations: [
    {
      title: 'Stand up owned capture before May 15 — gated behind the red-boots game',
      description: 'Launch email and SMS capture immediately, ahead of the Lost Americana opener, and make the "Find the Red Boots" unlock the reason to sign up. The stunt and the capture mechanism are the same build.',
      rationale: 'This is the highest-urgency item in the entire strategy. Every show that passes without a capture mechanism is permanently lost audience, and the tour opens May 15. It directly addresses the central weakness — zero owned infrastructure — and the central opportunity — the Lost Americana window.',
      timeline: 'Weeks 1-3 (before May 15)',
      priority: 'critical',
      expectedOutcome: 'A live capture mechanism in place for the first Lost Americana date, and the band\'s highest-intent traffic routing to owned land instead of Spotify.',
    },
    {
      title: 'Build and run the "Find the Red Boots" tour activation',
      description: 'Turn the band\'s own idea into a fully built guerrilla campaign running every night of the tour — Colie hides in the crowd in signature red boots, a nosebleed photo drops on socials, fans race to find him to unlock that night\'s exclusive item.',
      rationale: 'It does four jobs at once: generates UGC, gives every tour stop a game, is inherently shareable, and — because the unlock is email-gated — doubles as the capture mechanism. It also stakes out a guerrilla lane no competitor occupies.',
      timeline: 'Weeks 2-8 (built pre-tour, run through Lost Americana)',
      priority: 'critical',
      expectedOutcome: '15,000+ subscribers captured during the run, a library of tour content, and a proven, repeatable guerrilla playbook for every future tour.',
    },
    {
      title: 'Fix the TikTok discovery system',
      description: 'Keep the cadence and the voice — they work — but bolt on the discovery mechanics the account is missing: per-post trend/song/tour tagging instead of the same three hashtags, repeatable series formats, and owned-channel CTAs on every post.',
      rationale: 'BSD\'s TikTok is its strongest channel and it is being throttled by lazy mechanics. This is the lowest-effort, highest-floor-lift move available — it makes the content the band already produces reach more people at near-zero incremental cost.',
      timeline: 'Weeks 2-4, then ongoing',
      priority: 'high',
      expectedOutcome: 'TikTok followers trending from 138K toward 250K, with a lifted performance floor on non-moment posts.',
    },
    {
      title: 'Build beautyschooldropout.com as the real home',
      description: 'Replace the Komi aggregator with a proper owned website — the permanent destination for tour dates, music, merch, the red-boots hub, and fan capture, architected to house the Dirt store.',
      rationale: 'A Komi link is not a home. The website is the canonical owned destination everything else funnels toward, and it is the foundation the conversion system and Dirt both need.',
      timeline: 'Months 3-4',
      priority: 'high',
      expectedOutcome: 'A single canonical owned destination live, with integrated commerce and persistent capture, ready to host both guerrilla campaigns.',
    },
    {
      title: 'Build the streaming-to-fan conversion system',
      description: 'Systematically convert the 600K+ passive monthly listeners into followers, subscribers, and buyers using Spotify Canvas, in-catalog CTAs, pre-save campaigns that capture email, and low-budget paid retargeting of listeners.',
      rationale: 'The 610K gap between monthly listeners and Instagram followers is the largest untapped asset in the audit. This work harvests demand that already exists rather than manufacturing new demand — the highest-ROI conversion move available.',
      timeline: 'Months 3-6',
      priority: 'high',
      expectedOutcome: 'Streaming-to-follower conversion climbing from ~11% toward 20%, and Spotify monthly listeners trending toward 1M.',
    },
    {
      title: 'Consolidate the account and link architecture',
      description: 'Replace the scattered link hub and fragmented account setup with one canonical structure where every touchpoint — band and member accounts — routes toward owned channels.',
      rationale: 'Equity split across @bsd.wav, member accounts, X, Facebook, and Komi means even motivated fans cannot find a single path inward. Consolidation compounds reach instead of scattering it, at near-zero cost.',
      timeline: 'Weeks 2-4',
      priority: 'medium',
      expectedOutcome: 'One canonical funnel with every band and member touchpoint routing toward owned capture.',
    },
    {
      title: 'Launch "Dirt" as a guerrilla brand drop and second flywheel',
      description: 'Bring the Dirt / Dirt Bags leather-duffel line to market as a campaign, not a SKU — leaning the whole launch into the joke in the name and the ugly/pretty tension that already defines the band. Limited and email-gated first, then open.',
      rationale: 'Dirt diversifies revenue beyond the band, gives the TikTok engine a fresh subject, and gives the audience another way to signal membership. Sequenced into Phase 4, it launches into a built owned audience and a proven guerrilla playbook — which is what makes it compound instead of leak.',
      timeline: 'Months 7-12',
      priority: 'medium',
      expectedOutcome: 'Dirt launched with its own handle, first run sold through, and a measurable D2C revenue baseline established across BSD merch and Dirt.',
    },
  ],

  // ─── Images ───
  images: {
    hero1: '/images/beauty-school-dropout/hero1.png',
    hero2: '/images/beauty-school-dropout/hero2.png',
    editorial: '/images/beauty-school-dropout/editorial.png',
    texture: '/images/beauty-school-dropout/texture.png',
    data: '/images/beauty-school-dropout/data.png',
    closing: '/images/beauty-school-dropout/closing.png',
  },

  // ─── Metadata ───
  preparedFor: 'Beauty School Dropout',
  preparedBy: 'Crowd Control Digital',
  date: 'May 14, 2026',
  version: '1.0',
};
