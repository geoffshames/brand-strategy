/* WGCologne content strategy data. All channel numbers pulled from YouTube on
   Sep 25, 2026. Competitor numbers pulled the same day (YouTube rounds counts). */

export const PULL_DATE = 'Sep 25, 2026';

export type FormatKey =
  | 'pov'
  | 'versus'
  | 'describe'
  | 'rank'
  | 'question'
  | 'talking'
  | 'beauty'
  | 'haul'
  | 'asmr';

export const FORMAT_LABEL: Record<FormatKey, string> = {
  pov: 'Teen-life POV',
  versus: 'Versus graphic',
  describe: 'Scent description',
  rank: 'Rating / ranking',
  question: 'Audience question',
  talking: 'Talking review',
  beauty: 'Beauty shot / SOTD',
  haul: 'Haul / unboxing',
  asmr: 'ASMR series',
};

export type Short = {
  id: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  format: FormatKey;
  title: string;
  dur: number;
};

/* Every public Short, oldest first. Titles shown without hashtags. */
export const SHORTS: Short[] = [
  { id: 'tlAxBN34hrA', date: 'Sep 2', views: 1388, likes: 26, comments: 8, format: 'haul', title: 'Starting a cologne collection', dur: 13 },
  { id: 'igVRRyNnRZ8', date: 'Sep 2', views: 107, likes: 9, comments: 0, format: 'describe', title: 'Mango ice', dur: 8 },
  { id: '4J2_SVUgBx0', date: 'Sep 2', views: 1395, likes: 19, comments: 2, format: 'describe', title: 'If you wanna smell like a cream of vanilla latte with a touch of cinnamon', dur: 8 },
  { id: 'NO9dFEyxwT8', date: 'Sep 3', views: 137, likes: 10, comments: 0, format: 'rank', title: 'Goat cologne', dur: 8 },
  { id: 'iwp2m8-lvnE', date: 'Sep 3', views: 1366, likes: 27, comments: 0, format: 'describe', title: 'If you wanna smell like a creamy vanilla apple', dur: 10 },
  { id: 'KuulsKpW5Jc', date: 'Sep 3', views: 1281, likes: 20, comments: 1, format: 'beauty', title: 'September 2, 2026', dur: 9 },
  { id: 'tivqbxdegYc', date: 'Sep 4', views: 1376, likes: 15, comments: 0, format: 'rank', title: 'Ranking my caps', dur: 16 },
  { id: 'RXw0nQP0cdc', date: 'Sep 6', views: 1182, likes: 16, comments: 1, format: 'haul', title: 'Unboxing coral fantasy', dur: 28 },
  { id: 'cgKUATx4Tps', date: 'Sep 6', views: 2018, likes: 28, comments: 1, format: 'describe', title: 'Best mango colognes', dur: 8 },
  { id: '3dlgxyXzxOA', date: 'Sep 6', views: 1243, likes: 17, comments: 2, format: 'pov', title: 'Me and my friend buying cologne', dur: 12 },
  { id: 'lh7zxvGWZXc', date: 'Sep 6', views: 167, likes: 9, comments: 1, format: 'beauty', title: 'Valentino coral fantasy', dur: 6 },
  { id: 'GbUcae0lOI4', date: 'Sep 7', views: 987, likes: 14, comments: 6, format: 'beauty', title: 'Versace Dylan blue', dur: 7 },
  { id: 'XJ7nGcnrvMU', date: 'Sep 8', views: 1168, likes: 22, comments: 6, format: 'beauty', title: 'Fragrance of the day', dur: 15 },
  { id: 'K_MK1OMikyA', date: 'Sep 8', views: 1208, likes: 16, comments: 2, format: 'beauty', title: 'Most versatile fragrance', dur: 18 },
  { id: '4G8qVB2lCns', date: 'Sep 9', views: 631, likes: 13, comments: 2, format: 'haul', title: 'Cologne from Arvella', dur: 12 },
  { id: 'nPPcKv5ZIaI', date: 'Sep 11', views: 1437, likes: 19, comments: 2, format: 'talking', title: 'Cologne of the day Odyssey go mango', dur: 27 },
  { id: 'B_hbDiGvyy4', date: 'Sep 12', views: 496, likes: 12, comments: 1, format: 'pov', title: 'My addiction', dur: 11 },
  { id: '_2JxzWsX6n0', date: 'Sep 12', views: 1301, likes: 22, comments: 4, format: 'pov', title: 'Can’t wait', dur: 9 },
  { id: 'L8ydJlUB-gc', date: 'Sep 14', views: 1638, likes: 17, comments: 0, format: 'pov', title: 'How it feels spraying an expensive fragrance', dur: 5 },
  { id: 'qQV_LDybZGY', date: 'Sep 14', views: 533, likes: 14, comments: 0, format: 'pov', title: 'Spraying a cheap fragrance', dur: 10 },
  { id: 'A3_cUs376ug', date: 'Sep 15', views: 1472, likes: 28, comments: 2, format: 'versus', title: 'Better version of cologne', dur: 11 },
  { id: 'uXRmiGjfLYM', date: 'Sep 15', views: 1368, likes: 31, comments: 1, format: 'pov', title: 'Every time I’m at the mall', dur: 15 },
  { id: '3R7qjREjOzs', date: 'Sep 16', views: 2068, likes: 36, comments: 0, format: 'rank', title: 'Ranking atomizers part 1', dur: 30 },
  { id: '903uKRW-mrI', date: 'Sep 17', views: 3842, likes: 49, comments: 14, format: 'pov', title: 'Fixing my cologne', dur: 12 },
  { id: 'yRtAtapKAcQ', date: 'Sep 18', views: 1109, likes: 23, comments: 4, format: 'haul', title: 'POV you order from Arvella', dur: 12 },
  { id: 'wW6yviczWSk', date: 'Sep 18', views: 5639, likes: 116, comments: 18, format: 'versus', title: 'Cologne and their better version', dur: 10 },
  { id: 'LWiUzKbCc1s', date: 'Sep 19', views: 2461, likes: 0, comments: 3, format: 'pov', title: 'Love jpg', dur: 14 },
  { id: 'OZqseqfV1qw', date: 'Sep 19', views: 2731, likes: 54, comments: 9, format: 'pov', title: 'The hardest choice I make all day', dur: 14 },
  { id: 'CSvrx6ZnAtw', date: 'Sep 20', views: 1206, likes: 10, comments: 3, format: 'beauty', title: 'Beautiful pic', dur: 10 },
  { id: 'h9N9MtrJMtQ', date: 'Sep 20', views: 17850, likes: 156, comments: 19, format: 'pov', title: 'POV u don’t wear deodorant because you wear cologne', dur: 8 },
  { id: 'sH7uQGh1WHo', date: 'Sep 20', views: 966, likes: 15, comments: 1, format: 'asmr', title: 'Cologne ASMR part 1', dur: 20 },
  { id: 'AZYxg3SF1mA', date: 'Sep 21', views: 940, likes: 13, comments: 0, format: 'pov', title: 'My type of alcohol', dur: 30 },
  { id: 'mjTE9Ij_8gA', date: 'Sep 21', views: 852, likes: 6, comments: 2, format: 'beauty', title: 'Khadlaj Island Dreams', dur: 10 },
  { id: 'J3NCvrT-l-Q', date: 'Sep 22', views: 2842, likes: 33, comments: 0, format: 'pov', title: 'Picking the cologne for the day', dur: 6 },
  { id: '4pXX78EIHQ4', date: 'Sep 22', views: 1080, likes: 31, comments: 2, format: 'asmr', title: 'ASMR with cologne part two', dur: 31 },
  { id: 'HJkYZ7dgT-I', date: 'Sep 23', views: 13677, likes: 249, comments: 33, format: 'pov', title: 'Me before school', dur: 9 },
  { id: 'Ppdae3Dp4oE', date: 'Sep 23', views: 1238, likes: 24, comments: 17, format: 'question', title: 'What cologne should I get next?', dur: 16 },
  { id: 'oiSbFo7RouY', date: 'Sep 24', views: 1004, likes: 8, comments: 0, format: 'asmr', title: 'Cologne ASMR part 3', dur: 21 },
  { id: 'Obn9G7BJ3rI', date: 'Sep 24', views: 1050, likes: 29, comments: 4, format: 'versus', title: 'This is good but this hits harder (PDM edition)', dur: 10 },
  { id: 'eRSbNbT8aZs', date: 'Sep 25', views: 869, likes: 7, comments: 0, format: 'pov', title: 'The first thing I do when I get home', dur: 13 },
];

export const CHANNEL_MEDIAN = 1241;

/* Format scoreboard, computed from SHORTS. */
export const FORMATS: {
  key: FormatKey;
  n: number;
  median: number;
  best: number;
  share: number;
  likesPer1k: number;
  verdict: 'Scale' | 'Keep' | 'Fold in' | 'Retire';
}[] = [
  { key: 'pov', n: 14, median: 1503, best: 17850, share: 61, likesPer1k: 13.0, verdict: 'Scale' },
  { key: 'versus', n: 3, median: 1472, best: 5639, share: 10, likesPer1k: 21.2, verdict: 'Scale' },
  { key: 'talking', n: 1, median: 1437, best: 1437, share: 2, likesPer1k: 13.2, verdict: 'Keep' },
  { key: 'describe', n: 4, median: 1380, best: 2018, share: 6, likesPer1k: 17.0, verdict: 'Fold in' },
  { key: 'rank', n: 3, median: 1376, best: 2068, share: 4, likesPer1k: 17.0, verdict: 'Keep' },
  { key: 'question', n: 1, median: 1238, best: 1238, share: 1, likesPer1k: 19.4, verdict: 'Scale' },
  { key: 'beauty', n: 7, median: 1168, best: 1281, share: 8, likesPer1k: 14.1, verdict: 'Fold in' },
  { key: 'haul', n: 4, median: 1146, best: 1388, share: 5, likesPer1k: 18.1, verdict: 'Fold in' },
  { key: 'asmr', n: 3, median: 1004, best: 1080, share: 4, likesPer1k: 17.7, verdict: 'Retire' },
];

export const HERO_STATS = [
  { value: '41', label: 'Shorts in 23 days' },
  { value: '85.3K', label: 'Total views' },
  { value: '69', label: 'Subscribers' },
  { value: '1,241', label: 'Median views' },
  { value: '2', label: 'Shorts over 10K' },
  { value: '61%', label: 'Views from teen-life POVs' },
];

export const SHORT_VERSION = [
  'The floor is about 1,200 views a Short, and 36 of 40 public Shorts finished under 3,000. Faceless peer channels with 200 to 300 Shorts sit on the same floor.',
  'The breakouts are not about bottles. “POV u don’t wear deodorant because you wear cologne” (17.8K) and “Me before school” (13.7K) are about being a teenager who is obsessed with fragrance. Six of the top seven Shorts are teen-life POVs.',
  'The channel earns 0.8 subscribers per 1,000 views. Face-on fragrance creators earn 2 to 4. Showing up on camera is the biggest single lever available.',
  'The audience is already talking: arguments over which flanker is better, 17 comments telling the channel what to buy next. The comment section is the next content series.',
  'What follows: four pillars, five named series, a 12-month roadmap, and a product ladder that starts with an affiliate code and ends with a WGC product, each rung gated by a real milestone.',
];

export const PROFILE = [
  { value: 'YouTube Shorts', label: 'Only platform' },
  { value: 'Sep 2, 2026', label: 'First upload' },
  { value: '~2 a day', label: 'Fixed times since Sep 15' },
  { value: '11.5 sec', label: 'Median length (5 to 31)' },
  { value: 'Faceless', label: 'Hands, bottles, text hooks' },
  { value: '1.5%', label: 'Like rate' },
];

export const BREAKOUTS = [
  {
    id: 'h9N9MtrJMtQ',
    title: 'POV u don’t wear deodorant because you wear cologne',
    views: '17,850',
    likes: '156',
    comments: '19',
    dur: '8 sec',
    onScreen: '“POV you use cologne instead of deodorant,” with ME pinned bottom left. A green JPG bottle goes down on the rug, then three deodorants stack up beside it, one per beat of an “uh oh stinky” meme sound.',
    why: 'The caption makes a claim and the video contradicts it three times, while the sound says the joke out loud. The brand lineup (Dr. Squatch, MILES, LŪ Boys) left an argument for the comments.',
  },
  {
    id: 'HJkYZ7dgT-I',
    title: 'Me before school',
    views: '13,677',
    likes: '249',
    comments: '33',
    dur: '9 sec',
    onScreen: '“POV school starts at 8 me at 7:99” over frantic whip-pans across about twenty bottles, then three picks in three seconds, set to the “She’s Homeless” chorus.',
    why: 'The channel’s most-liked Short. A clock time that does not exist pulled nearly half the comments into one argument, and the scan-and-pick edit acts out the morning panic every student knows.',
  },
];

export const BREAKOUT_PATTERN = [
  { n: '01', title: 'Life first, bottle second', body: 'The hook is a teenage moment (school, hygiene, the mall). The fragrance is the prop, not the subject.' },
  { n: '02', title: 'Readable in one second', body: 'One line of text, one idea. No setup needed before the joke lands.' },
  { n: '03', title: 'The whole shelf in frame', body: 'Both breakouts show the collection, not a single bottle. Abundance reads as credibility.' },
  { n: '04', title: 'Under ten seconds', body: 'Eight and nine seconds. Short enough to loop, which is what the feed rewards.' },
  { n: '05', title: 'A take people argue with', body: 'Deodorant vs cologne, 7:99 vs 8:00. A claim invites replies, and replies extend the life of a Short.' },
];

export const UNDERPERFORMERS = [
  { title: 'Beauty shots', stat: '7 Shorts, best 1,281', body: 'A pretty bottle at sunset gives the viewer nothing to feel, answer or argue with. The best frames belong inside series as B-roll, not as standalone posts.' },
  { title: 'ASMR parts', stat: 'Lowest median, 1,004', body: 'Fragrance has no sound payoff, and the format is common across small fragrance channels. Retire it.' },
  { title: 'Scent descriptions', stat: '0.6 comments per 1K', body: '“If you wanna smell like…” informs but asks nothing back. Fold descriptions into verdicts and blind tests where the viewer has a stake.' },
];

export const SIGNALS = [
  { value: '13.7', unit: 'comments per 1K views', label: '“What cologne should I get next?”', body: 'About 7x the channel average of 2.0. Asking the audience a real question is the most efficient engagement move on the channel.' },
  { value: '21.2', unit: 'likes per 1K views', label: 'Versus graphics', body: 'The highest like rate of any format. “Cologne and their better version” started an 18-comment argument over which flanker wins.' },
  { value: '33 of 97', unit: 'sampled comments are replies from the channel', label: 'Creator replies', body: 'A strong habit this early. The next step is replies with personality and turning the best comment of the day into a video reply.' },
];

export const HOUSEKEEPING = [
  { title: 'Spelling', body: '19 of the first 22 uploads used #fregrance, a misspelling, until Sep 15. It is fixed now; keep every title spelled right because search and suggested traffic read it.' },
  { title: 'Empty titles', body: 'Four titles carry no hook or keyword (“September 2, 2026”, “Beautiful pic”). Every title should be the hook plus one or two keywords.' },
  { title: 'Stacked uploads', body: 'Three Shorts went up within 38 minutes on Sep 2 and finished at 107, 1,395 and 137 views. Space uploads hours apart so each gets its own test.' },
  { title: 'Lighting', body: 'The acrylic shelf lit by a flash reads best. Dim ambient frames lose the bottles, which are the whole visual.' },
  { title: 'Signature', body: 'Several early formats (ASMR parts, shelf picks, atomizer ratings) are common across small fragrance channels. Named series with a WGC stamp make the channel recognizable in one frame.' },
];

export const AUDIENCE_QUOTES = [
  { quote: 'Khadlaj Island which is Le Beau Le Parfum and Lattafa Fakhar Black which is Y', context: 'On “What cologne should I get next?” The audience knows the clone map cold.' },
  { quote: 'Bro intensely is NOT better than powerfully', context: 'On “Cologne and their better version.” Debate is the engagement engine.' },
  { quote: 'Hey bro. I’m getting a 200ml of Armaf limoni. Will I regret it.', context: 'On “Fixing my cologne.” Viewers already treat the channel as an advisor.' },
  { quote: 'You put the mango ice cap on wrong but great video', context: 'On “Fixing my cologne.” Detail-level attention from collectors.' },
  { quote: 'Yo keep posting bro ur vids are tuff', context: 'On “Fragrance of the day.” Early loyalty.' },
  { quote: 'Fake jpg', context: 'On the deodorant POV. Authenticity gets challenged; showing where a bottle came from ends the argument.' },
];

export const AUDIENCE_SEGMENTS = [
  { name: 'Buyers in training', body: 'Asking what to blind buy, how big a bottle to get, what works for school. They want a trusted verdict on a budget.' },
  { name: 'Collectors and debaters', body: 'Know every flanker and every clone. They come to argue, and their arguments are free distribution.' },
  { name: 'Peer creators', body: 'At least six small fragrance channels showed up in the sampled comments. A ready pool for collabs and versus Shorts.' },
];

export const AUDIENCE_WANTS = [
  'Honest verdicts, including “skip it”',
  'Budget alternatives: clones and Middle Eastern houses',
  'Picks for real moments: school, game day, dances, dates',
  'To be heard: their pick becomes the next buy',
];

/* Creator landscape. Shorts median = last ~50 Shorts. */
export type Creator = {
  name: string;
  tier: 'Macro' | 'Mid / Shorts-native' | 'Teen and peer';
  subs: string;
  tiktok: string;
  median: number | null;
  medianNote?: string;
  face: boolean;
  builtOn: string;
  product?: string;
};

export const CREATORS: Creator[] = [
  { name: 'Jeremy Fragrance', tier: 'Macro', subs: '2.54M', tiktok: '9.9M', median: 3100, face: true, builtOn: 'Persona and volume: 50 Shorts in 7 days', product: 'Fragrance One (own brand)' },
  { name: 'Gents Scents', tier: 'Macro', subs: '656K', tiktok: '92K', median: 90000, medianNote: '13 Shorts, all 2023', face: true, builtOn: 'Long-form clone and signature-scent lists' },
  { name: 'FBFragrances', tier: 'Macro', subs: '378K', tiktok: '930K', median: 78500, face: true, builtOn: 'Hot takes, re-rankings, dupe vs original', product: 'Rasasi Hawas Sapphire edition, samples store' },
  { name: 'Demi Rawling', tier: 'Macro', subs: '368K', tiktok: '209K', median: 47000, medianNote: 'No Shorts since Apr 2025', face: true, builtOn: 'Street smell-test interviews', product: 'Minuit et Demi, Sniff app' },
  { name: 'Curly Scents', tier: 'Macro', subs: '338K', tiktok: '147K', median: 56000, face: true, builtOn: 'Middle Eastern top-10s' },
  { name: 'Elijah Yeroushalmi', tier: 'Macro', subs: '165K', tiktok: '1.05M', median: 117500, face: true, builtOn: 'Teen-life skits, back-to-school picks' },
  { name: 'Cal Cologne', tier: 'Macro', subs: '164K', tiktok: '1.02M', median: 34500, face: true, builtOn: 'Named blind-buy series, clone lists', product: 'Rayhaan Tiger Cal Cologne Edition' },
  { name: 'AROMATIX', tier: 'Mid / Shorts-native', subs: '251K', tiktok: 'n/a', median: 27000, face: true, builtOn: 'Clone battles, own line', product: 'Aromatix x French Avenue line' },
  { name: 'FragranceFlan', tier: 'Mid / Shorts-native', subs: '125K', tiktok: '397K', median: 62000, face: true, builtOn: 'Named series, budget advice' },
  { name: 'Archer', tier: 'Mid / Shorts-native', subs: '56.3K', tiktok: '89K', median: 83500, face: true, builtOn: 'Comedy, rating viewers’ collections; first Short Jan 2026' },
  { name: 'TheCologneBoy', tier: 'Teen and peer', subs: '255K', tiktok: '2.2M', median: 17000, face: true, builtOn: 'Started at 16, slang hooks, cheap vs expensive', product: 'Decant business' },
  { name: 'K&A Fragrances', tier: 'Teen and peer', subs: '69.9K', tiktok: '215K', median: 43500, face: true, builtOn: 'Teen duo, numbered weekly series, versus challenges', product: 'Sample store' },
  { name: 'Faceless peers (3 channels)', tier: 'Teen and peer', subs: '232 to 389', tiktok: 'n/a', median: 1300, medianNote: '1,200 to 1,400', face: false, builtOn: 'Hands and bottles; 90 to 326 Shorts each' },
  { name: 'WGCologne', tier: 'Teen and peer', subs: '69', tiktok: 'n/a', median: 1241, face: false, builtOn: 'Hands and bottles, teen-life POV hooks' },
];

export const CONVERSION = [
  { name: 'Archer', value: 4.24, face: true },
  { name: 'K&A Fragrances', value: 2.2, face: true },
  { name: 'Faceless peer A', value: 1.28, face: false },
  { name: 'WGCologne', value: 0.81, face: false, self: true },
  { name: 'Faceless peer B', value: 0.81, face: false },
  { name: 'Faceless peer C', value: 0.62, face: false },
];

export const FIELD_LESSONS = [
  {
    n: '01',
    title: 'Teen-life POV with a face reaction',
    proof: 'Elijah Yeroushalmi “How to open a JPG correctly” 694K. WGCologne’s own two breakouts.',
    body: 'The lane the channel already found, with one addition: the reaction beat. A face turns the joke into a person.',
  },
  {
    n: '02',
    title: 'Audience-participation ratings',
    proof: 'Archer “Rating your fragrance collections, pt 2!” 246K. K&A “Who won???” 191K.',
    body: 'The viewer is the subject. Every rating invites the next person to submit theirs.',
  },
  {
    n: '03',
    title: 'Clone vs original',
    proof: 'Curly Scents “Top 10 BEST Middle Eastern Fragrances” 1.3M. The Scented “Is Lattafa Angham worth the hype?” 325K. Cal Cologne top-10 clones 222K.',
    body: 'Draws traffic at every tier, and the shelf already holds both sides of several matchups.',
  },
  {
    n: '04',
    title: 'Named, numbered series',
    proof: 'K&A “Week N” Shorts at roughly 40K to 50K each. Cal Cologne “Blind Buy Fragrance Unboxing,” several over 70K.',
    body: 'A series name is a promise. Viewers subscribe to get the next episode.',
  },
  {
    n: '05',
    title: 'Duos and versus collabs',
    proof: 'K&A’s two-person format and its “FB vs KA” Shorts with FBFragrances.',
    body: 'Two people disagreeing is the most natural debate format there is, and collabs share audiences.',
  },
];

export const FIELD_NOTES = [
  { title: 'School framing works at every size', body: 'Elijah Yeroushalmi “Back To School Must Have Colognes” 138K. Cal Cologne “Top 20 Men’s Fragrances For school” 52K. WGCologne “Me before school” 13.7K.' },
  { title: 'Volume is not the lever', body: 'Two faceless peers have posted 207 and 326 Shorts and sit under 400 subscribers. Jeremy Fragrance posted 50 Shorts in 7 days to a 3,100 median on 2.5M subscribers.' },
  { title: 'JPG is the shared meme bottle', body: 'Elijah 694K, FBFragrances “JPG owns the audio at this point” 268K, Archer “3 underrated JPGs” 110K. The deodorant POV was tagged #jpg.' },
];

export const MARKET = [
  { fact: 'Fall 2024 was the first Piper Sandler teen survey in which boys outspent girls on fragrance.', source: 'Piper Sandler via Glossy' },
  { fact: 'Fragrance was the fastest-growing teen beauty category in Spring 2025, up 22% year over year.', source: 'Piper Sandler Spring 2025 via DECA' },
  { fact: 'About 38% of US fragrance spending in the 26 weeks to July 2025 came from households with a Gen Z member.', source: 'Circana via Reuters, Nov 2025' },
  { fact: 'Dupes grew 79% in US fragrance in 2024.', source: 'Circana via GCI Magazine' },
  { fact: 'Lattafa passed $100M in Amazon sales over 12 months.', source: 'Market Defense via Spate, 2026' },
  { fact: 'About 90% of US teens use YouTube. Boys are more likely than girls to be on it almost constantly, 20% vs 13%.', source: 'Pew Research Center, Dec 2025' },
  { fact: 'Gift sets make up more than a quarter of Q4 prestige fragrance sales.', source: 'Circana, holiday outlook' },
  { fact: 'Gourmand, vanilla and Arabian-inspired scents are the fastest-growing profiles in search and social.', source: 'Spate 2026 fragrance report' },
];

export const SWOT = {
  strengths: [
    { title: 'A proven breakout lane', body: 'Two teen-life POVs did 31.5K views, 37% of the channel’s total, in its third week. Most new channels spend months looking for that signal.' },
    { title: 'Both sides of the clone debate on one shelf', body: 'Designer and niche (PDM, Xerjoff, JPG, Valentino, Versace) next to Lattafa, Rayhaan, Khadlaj and Armaf. Clone-vs-original content needs no new purchases.' },
    { title: 'Consistency', body: '41 Shorts in 23 days, on fixed upload times since Sep 15. The habit that sinks most creators is already in place.' },
    { title: 'A native voice', body: 'The audience is peers, and the channel speaks their language. That is hard to fake and impossible for older creators to copy.' },
  ],
  weaknesses: [
    { title: 'Faceless conversion', body: '0.8 subscribers per 1,000 views, against 2.2 for K&A and 4.2 for Archer. Views are arriving; they are not yet turning into subscribers.' },
    { title: 'No signature yet', body: 'No named series, no recurring sign-off, and early formats that look like other small fragrance channels. Nothing yet says “this is WGC” in one frame.' },
    { title: 'Low-ceiling formats fill the calendar', body: 'Beauty shots, ASMR and scent descriptions made up 14 of 40 Shorts and none cleared 2,100 views.' },
    { title: 'Early housekeeping', body: 'A misspelled hashtag on 19 uploads, empty titles, and stacked uploads that split the feed’s test.' },
  ],
  opportunities: [
    { title: 'Face and voice', body: 'The one lever every scaled creator in the set uses. It can be phased in: voice first, reaction beats next, talking verdicts after.' },
    { title: 'Comments as content', body: 'Recommendations and debates are already there. A monthly “You Pick My Next Bottle” and a “Rate Your Top 5” series turn them into episodes.' },
    { title: 'Calendar tentpoles', body: 'Holiday gifting (more than a quarter of Q4 prestige fragrance sales) and back-to-school, where school framing pulls 52K to 138K for larger peers.' },
    { title: 'The clone wave', body: 'Dupes up 79% in 2024 and Lattafa past $100M on Amazon. The category’s fastest-growing tier is the one teens can afford.' },
    { title: 'Commerce partners', body: 'Decant shops like Arvella, already featured on the channel, run affiliate programs, teen-coded bundles and their own juice.' },
  ],
  threats: [
    { title: 'Reused-content rules', body: 'YouTube applies them to the whole channel, and crediting another creator does not make their clip usable. Original footage protects every future earning option.' },
    { title: 'A rising monetization bar', body: 'From Feb 1, 2027, new Partner Program entry needs 1,000 subscribers plus 20M Shorts views in 90 days. Ads cannot be the business plan.' },
    { title: 'Exposure on camera', body: 'A face brings conversion and attention, including the wrong kind. The setup rules in section 12 handle it.' },
    { title: 'Spend pressure', body: 'A buy-to-post model burns money fast. The plan leans on the existing shelf, decants and audience votes, not weekly purchases.' },
  ],
  synthesis:
    'The channel already did the hard part: it found what its audience responds to in three weeks. Every weakness on this page is a choice, not a constraint. The plan leans into the proven lane, adds the one lever every scaled peer uses, and builds a signature no other channel can run.',
};

export const THESIS =
  'WGCologne wins by being the fragrance channel that sounds like its audience: a teenager with a real shelf, a strong opinion and a face. Scale the teen-life lane that already breaks out, turn the comment section into series, and build the WGC name to the point where a product with it on the label sells.';

export const PILLARS = [
  {
    n: '01',
    name: 'Show Up',
    thesis:
      'Every channel over 50K subscribers in this set shows a face. It is a correlation, but a consistent one: Archer converts 4.2 subscribers per 1,000 views, K&A 2.2, faceless peers 0.6 to 1.3. People subscribe to people. The shift can be gradual, and the shelf-and-hands look stays as the visual signature.',
    initiatives: [
      'Your voice from week one, reacting and joking, never narrating specs: nine narrated Shorts, none above 1,437 views',
      'Face in the reaction beat from week two: the first sniff, the “nah,” the grin',
      'One talking-to-camera verdict a week',
      'Keep the flash-lit shelf as the recurring B-roll look',
    ],
    metric: 'Subscribers per 1K views: 0.8 to 2.0 in 90 days',
  },
  {
    n: '02',
    name: 'Teen Life First',
    thesis:
      'The audience does not come for bottles. It comes for a teenager who is obsessed with bottles. Both breakouts are school and hygiene jokes with fragrance as the prop. The plan turns that lane into a daily series and a calendar of real moments.',
    initiatives: [
      'The “7:99” school-morning series, three times a week, with the impossible clock time as its signature',
      'A moments calendar: first day, test day, picture day, game day, dances, holidays',
      'A running hook bank, refilled every Sunday from comments and trends',
      'The whole shelf in frame, under ten seconds, one line of text',
    ],
    metric: 'Shorts over 10K views: 5% to 15% in 90 days',
  },
  {
    n: '03',
    name: 'Make the Comments the Content',
    thesis:
      'The comment section is already writing the scripts: what to buy, which flanker wins, what to wear to school. A single question Short drew 7x the channel’s average comment rate. Series built on viewer input create a reason to come back and a reason to comment.',
    initiatives: [
      '“You Pick My Next Bottle,” a monthly vote with a bracket and a verdict',
      '“Rate Your Top 5,” where viewers type their top five and get rated',
      'A daily video reply to the best comment',
      'A pinned question on every Short',
    ],
    metric: 'Comments per 1K views: 2.0 to 4.0 in 90 days',
  },
  {
    n: '04',
    name: 'Build the WGC Name',
    thesis:
      'Every creator product in this category came after a recognizable point of view. The name WGC needs a look, a sign-off and a verdict system before it goes on a label. The product ladder then climbs one gated rung at a time, from an affiliate code to a WGC item.',
    initiatives: [
      'The WGC Verdict: Spray, Save or Skip, used on every review',
      'Consistent series covers and a spoken sign-off',
      'A guardian-held affiliate code, then a co-branded Picks set with a decant partner',
      'A WGC travel atomizer once the Picks set proves demand',
    ],
    metric: 'First WGC-branded product revenue within 12 months',
  },
];

export const VERDICT = [
  { word: 'Spray', body: 'Buy it now. Worth full price.' },
  { word: 'Save', body: 'Good, but try a decant first or wait for a deal.' },
  { word: 'Skip', body: 'Not worth your money. Here is what to get instead.' },
];

export const SERIES = [
  {
    name: '7:99',
    tag: 'School-morning pick',
    cadence: '3 a week (Mon, Wed, Fri)',
    length: '7 to 10 sec',
    format: 'The flash-lit shelf, a hand hovering, one line of text with one impossible detail, a sound whose words finish the joke, and a face reaction at the pick.',
    hooks: [
      'POV: school starts at 8. Me at 7:99.',
      'What I wear to a test I didn’t study for',
      'Picture day rotation',
      'Game day pick',
      'When you have a presentation first period',
    ],
    why: 'The proven lane. “Me before school” is this series before it had a name: 17 of its 38 comments are one argument about “7:99.” Keep the clock wrong on purpose.',
    image: '/images/wgcologne/frame-799.webp',
  },
  {
    name: 'Blind Test',
    tag: 'Clone vs original',
    cadence: '1 a week',
    length: '20 to 45 sec',
    format: 'A family member or friend smells two sprays blind and picks. Reveal the price gap at the end. Verdict: Spray, Save or Skip.',
    hooks: [
      'Blind test: $165 vs $32',
      'Can my dad tell the clone from the original?',
      'I made my friend pick blind. He picked wrong.',
    ],
    why: 'Clone content draws at every tier of the field, the shelf already holds matchups, and blind picks settle the arguments the comments keep starting.',
    image: '/images/wgcologne/frame-blind.webp',
  },
  {
    name: 'You Pick My Next Bottle',
    tag: 'Monthly audience vote',
    cadence: '4 episodes a month',
    length: '10 to 30 sec',
    format: 'Week 1: nominations in the comments. Week 2: a four-bottle bracket. Week 3: the unboxing. Week 4: the verdict after a week of wearing it.',
    hooks: ['You pick my next bottle. Round 1.', 'You voted. I bought it.', 'A week in: was chat right?'],
    why: '“What cologne should I get next?” drew 13.7 comments per 1,000 views, about 7x the channel average. This turns that into a monthly arc with a built-in reason to come back.',
  },
  {
    name: 'Rate Your Top 5',
    tag: 'Viewer collections',
    cadence: '2 a week',
    length: '15 to 30 sec',
    format: 'Viewers type their top five in the comments. Rate three collections per Short, on camera, with the WGC Verdict. Text only; no photos from viewers needed.',
    hooks: ['Rating your top 5s. Be honest, some of you need help.', 'This top 5 is actually elite', 'Whoever made this top 5 needs to explain'],
    why: 'Archer’s collection ratings reached 246K. The viewer becomes the subject, and every rating invites the next submission.',
  },
  {
    name: 'The Verdict',
    tag: 'Talking review',
    cadence: '1 a week; one 1 to 3 min Short a month from month 3',
    length: '30 to 60 sec',
    format: 'Face to camera, one bottle, the WGC Verdict. Monthly long version: “Every clone I own vs the original, ranked.”',
    hooks: ['Spray, save or skip: [bottle]', 'Everyone says this is a compliment beast. Is it?', 'Every clone I own, ranked'],
    why: 'Builds the trusted-advisor role the comments are already asking for, and gives the WGC name a repeatable format that can carry a product later.',
  },
];

export const WEEK = [
  { day: 'Mon', slot: '7:99' },
  { day: 'Tue', slot: 'Rate Your Top 5' },
  { day: 'Wed', slot: '7:99' },
  { day: 'Thu', slot: 'Blind Test' },
  { day: 'Fri', slot: '7:99' },
  { day: 'Sat', slot: 'You Pick My Next Bottle / Rate Your Top 5' },
  { day: 'Sun', slot: 'The Verdict' },
];

export const RETIRE = [
  { from: 'Standalone beauty shots', to: 'B-roll inside 7:99 and The Verdict' },
  { from: 'ASMR parts', to: 'Retired' },
  { from: '“If you wanna smell like…”', to: 'The description goes inside a verdict' },
  { from: 'Hauls and unboxings', to: 'Week 3 of You Pick My Next Bottle' },
];

export const ROADMAP = [
  {
    phase: 'Phase 1',
    name: 'Reset',
    when: 'Oct 2026 (weeks 1 to 4)',
    intro:
      'Fix the foundations and launch the three series that need no new purchases. The goal of the first month is not views; it is a channel that looks and sounds like one person with a point of view.',
    actions: [
      'Channel setup: banner, description with a family-managed contact email, audience set to “not made for kids”',
      'Launch 7:99, Blind Test and You Pick My Next Bottle (round 1 nominations)',
      'Voice on every Short; first face-reaction beats in week 2',
      'One Short a day at a fixed time, plus reactive POVs when a trend fits; never two uploads within a few hours',
      'Original footage only; titles are the hook plus one or two keywords',
    ],
    outcomes: ['250 subscribers', 'Median 2,000 views', '1.5 subscribers per 1K views'],
  },
  {
    phase: 'Phase 2',
    name: 'Build',
    when: 'Nov to Dec 2026',
    intro:
      'Add the participation series and ride the biggest fragrance season of the year. Gift sets are more than a quarter of Q4 prestige sales, and every teen is writing a wish list.',
    actions: [
      'Rate Your Top 5 and The Verdict go live',
      'Holiday lane: “Gifts for the fraghead under $50,” “What I’m asking for,” Black Friday clone picks',
      'First two or three collabs with same-size fragrance creators: versus Shorts and joint blind tests',
      'Mirror the best Shorts to TikTok and Instagram Reels on guardian-supervised accounts',
      'A guardian-held affiliate code with a decant shop, disclosed in every video that uses it',
    ],
    outcomes: ['1,000 subscribers by Dec 31', '15% of Shorts over 10K views', 'First affiliate orders'],
  },
  {
    phase: 'Phase 3',
    name: 'Accelerate',
    when: 'Jan to Mar 2027',
    intro:
      'Go longer and start the commerce ladder. Shorts can run up to three minutes, and a monthly long piece gives new subscribers something to binge. Once the audience proves it buys through the code, the first co-branded product is a partner conversation, not a manufacturing project.',
    actions: [
      'A monthly 1 to 3 minute Short: “Every clone I own vs the original, ranked”',
      'Valentine’s and winter rotation moments',
      'Outreach from the family inbox to Middle Eastern houses and decant shops once past 2,500 subscribers',
      'Pitch a co-branded “WGC Picks” 5ml set to a decant partner that handles filling and shipping',
    ],
    outcomes: ['5,000 subscribers', 'Median 5,000 views', 'Picks set agreed with a partner'],
  },
  {
    phase: 'Phase 4',
    name: 'Own',
    when: 'Apr to Sep 2027',
    intro:
      'Put the WGC name on something and aim the year at back-to-school, the natural peak for a channel built on school mornings. By September 2027 the channel should have a signature, a product and a season it owns.',
    actions: [
      'Spring and summer rotations; prom and graduation moments',
      'WGC travel atomizer on a guardian-owned store once the Picks set proves demand',
      'Back-to-school 2027 tentpole in August and September: “Back to school rotation,” “Top 10 for school”',
      'Check eligibility for YouTube’s lower Partner tier (500 subscribers plus 3M Shorts views in 90 days) for fan funding and Shopping',
    ],
    outcomes: ['15,000 subscribers', 'Median 10,000 views', 'Three revenue lines live'],
  },
];

export const LADDER = [
  {
    rung: '01',
    name: 'Affiliate code',
    gate: 'Now',
    what: 'A discount code with a decant shop. Arvella, already featured on the channel, runs a 5% affiliate program; its 5ml Lattafa decants sell for $10 to $11.',
    who: 'The account sits with a parent or guardian. Disclosure in every video that uses the code.',
    why: 'Zero inventory and zero risk, and it answers the only question that matters before a product: does this audience buy?',
  },
  {
    rung: '02',
    name: 'WGC Picks set',
    gate: '2,500 subscribers and a code with real orders',
    what: 'Five curated 5ml decants in a co-branded set, sold and shipped by the decant partner. Arvella already sells teen-coded bundles and its own juice.',
    who: 'Guardian signs. The partner handles filling, labeling and shipping (perfume ships by ground only, with hazmat labeling).',
    why: 'The WGC name on a product with none of the operational risk. K&A Fragrances built its business on samples.',
    image: '/images/wgcologne/concept-picks.webp',
  },
  {
    rung: '03',
    name: 'WGC travel atomizer',
    gate: '5,000 subscribers and the Picks set selling through',
    what: 'A branded refillable 10ml atomizer and case. A US custom supplier quotes around 100 units at $2.40 to $2.90 each with roughly two-week turnaround.',
    who: 'A guardian-owned store (store platforms require an adult owner). Ships empty, so no hazmat rules.',
    why: 'The channel already rates atomizers on camera. A product that is content-native, cheap to test and legally simple.',
    image: '/images/wgcologne/concept-atomizer.webp',
  },
  {
    rung: '04',
    name: 'Collab edition',
    gate: 'Around 50K subscribers or proven product sales',
    what: 'A “WGC edition” inside an existing house’s line. Precedents: Cal Cologne x Rayhaan, FBFragrances x Rasasi (Hawas Sapphire, July 2026), AROMATIX x French Avenue.',
    who: 'The house makes and distributes; the creator brings the audience and the point of view.',
    why: 'The standard route for fragrance creators with Middle Eastern houses, and the one that fits the channel’s shelf.',
  },
  {
    rung: '05',
    name: 'Own fragrance',
    gate: 'Every confirmed creator fragrance in the set launched after roughly 150K YouTube subscribers or 1M TikTok followers',
    what: 'A WGC juice through private label. Precedents: Jeremy Fragrance’s Fragrance One raised €780,149 on Kickstarter; Paul Fino x Oakcha “That Girl” sold 174,000 units in its first year.',
    who: 'The guardian’s company as the responsible party under US cosmetics rules (safety records, adverse-event reporting, IFRA compliance). Minimums run from hundreds to thousands of units and $5K+.',
    why: 'The top of the ladder, earned by every rung below it.',
  },
];

export const SAFETY = [
  { title: 'Accounts and money', body: 'YouTube allows creators 13 and up with a parent’s permission. Anything that pays (AdSense, affiliate programs, stores) sits with a parent or guardian, and contracts are co-signed.' },
  { title: 'One inbox', body: 'A family-managed email in the channel description. Brand conversations happen there, never in DMs.' },
  { title: 'Disclosure', body: 'Gifted or paid product gets YouTube’s paid-promotion box and a spoken or on-screen disclosure in the video itself. A description-only mention is not enough under FTC guidance.' },
  { title: 'Original footage only', body: 'YouTube’s reused-content rules apply to the whole channel, and credit does not make another creator’s clip usable. Original footage protects every future earning option.' },
  { title: 'On camera', body: 'Handle or first name only. No school name, logo or uniform. No house exteriors, street views or location tags.' },
  { title: 'Comments', body: 'YouTube may limit comments on videos featuring minors. Turn on held-for-review filters, and keep polls and community posts ready as a second way to collect votes.' },
  { title: 'Brand-safe titles', body: 'Fragrance, style and school life. Skip alcohol jokes; ad systems and brand partners read titles literally.' },
  { title: 'Audience setting', body: '“Not made for kids.” The content is for teens, and the made-for-kids setting turns off comments and Shopping.' },
  { title: 'Earnings', body: 'Several states, including California, Illinois and Minnesota, require part of a minor creator’s earnings to be held in trust. Check the home state’s rules before the first paid deal.' },
  { title: 'Budget', body: 'Set a monthly fragrance budget. The existing shelf, decants and audience votes cover months of content without weekly purchases.' },
];

export const KPIS = [
  { metric: 'Subscribers', now: '69', d90: '1,000', m12: '15,000', note: 'Needs roughly 5,000 views a day at 2 subscribers per 1K' },
  { metric: 'Median views per Short', now: '1,241', d90: '2,500', m12: '10,000', note: 'Face-on teen peer K&A: 43,500' },
  { metric: 'Shorts over 10K views', now: '5%', d90: '15%', m12: '30%', note: 'Faceless peers: 4% to 8%' },
  { metric: 'Subscribers per 1K views', now: '0.8', d90: '2.0', m12: '2.5', note: 'K&A 2.2, Archer 4.2' },
  { metric: 'Comments per 1K views', now: '2.0', d90: '4.0', m12: '5.0', note: 'Question Short: 13.7' },
  { metric: 'Named series running', now: '0', d90: '4', m12: '5', note: 'The WGC signature' },
  { metric: 'Revenue lines', now: '0', d90: '1', m12: '3', note: 'Affiliate, Picks set, atomizer' },
];

export const RISKS = [
  { title: 'School load and burnout', level: 'High', body: 'A daily channel competes with school, sports and sleep.', fix: 'Batch-film a week of 7:99s in one weekend session, cap at one Short a day, and treat skipped days as normal.' },
  { title: 'Attention on camera', level: 'High', body: 'A face brings subscribers and the wrong kind of attention.', fix: 'The setup rules in section 12: one family inbox, no location clues, comment filters.' },
  { title: 'Monetization bar moves', level: 'Medium', body: 'YouTube raises Partner Program entry to 20M Shorts views in 90 days from Feb 1, 2027.', fix: 'Commerce first, ads last. The ladder does not depend on ad revenue.' },
  { title: 'Format overlap', level: 'Medium', body: 'Faceless shelf content is crowded, and similar formats look interchangeable.', fix: 'Named series, the WGC Verdict and original footage make the channel unmistakable.' },
  { title: 'Spend creep', level: 'Medium', body: 'Buying to post gets expensive fast.', fix: 'A monthly budget, decants over full bottles, and one audience-voted purchase a month.' },
  { title: 'Authenticity challenges', level: 'Low', body: '“Fake” comments come with the territory.', fix: 'Show where a bottle came from when it is challenged, and pin the answer.' },
];

export const FIRST_30 = [
  'Walk through this plan with a parent or guardian and set up the family contact email',
  'Update the banner and description; set the audience to “not made for kids”; turn on held-for-review comment filters',
  'Lock the series names and a simple cover style for each',
  'Batch-film five to seven 7:99 Shorts in one weekend session',
  'Record your voice on every Short from now on',
  'Post “You Pick My Next Bottle,” round 1, and pin the question',
  'Film the first Blind Test with a family member',
  'One Short a day at the same time; no two uploads within a few hours',
  'Original footage only; every title is the hook plus one or two keywords, spelled right',
  'Every Sunday: list which Shorts beat 2,500 views and why, then refill the hook bank',
];
