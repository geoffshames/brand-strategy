/* Breakout teardown data. Pegasus 1.5 (TwelveLabs) reads, verified against
   4 fps frame extraction, a Whisper speech transcription, beat and motion
   analysis, and the comment threads. Pulled Sep 25, 2026. */

export const TEARDOWN_METHOD = [
  { value: '12', label: 'Pegasus passes per clip' },
  { value: '67', label: 'Frames reviewed at 4 fps' },
  { value: '2', label: 'Soundtracks transcribed' },
  { value: '40', label: 'Shorts audio-classified' },
  { value: '57', label: 'Comments read' },
  { value: '10', label: 'Scored dimensions' },
];

export type Segment = { start: number; end: number; label: string; kind: 'hook' | 'setup' | 'escalation' | 'payoff' | 'loop' };
export type Marker = { t: number; label: string };
export type Frame = { src: string; t: string; caption: string };
export type Dim = { name: string; weight: number; pegasus: number; score: number; note: string };

export type Dossier = {
  id: string;
  title: string;
  views: string;
  likes: string;
  comments: string;
  duration: number;
  durationLabel: string;
  verdict: string;
  onScreen: string[];
  frames: Frame[];
  segments: Segment[];
  audioMarkers: Marker[];
  actionMarkers: Marker[];
  audioTitle: string;
  transcript: string;
  audioRead: string;
  syncStat: { value: string; label: string };
  mechanism: string[];
  commentStat: { value: string; label: string };
  commentQuotes: string[];
  commentRead: string;
  products: string;
  dims: Dim[];
  pegasusOverall: number;
  overall: number;
  retention: string;
  fixes: { title: string; body: string }[];
  remake: { t: string; shot: string }[];
  remakeText: string;
  remakeAudio: string;
  remakePin: string;
};

export const DOSSIERS: Dossier[] = [
  {
    id: 'h9N9MtrJMtQ',
    title: 'POV u don’t wear deodorant because you wear cologne',
    views: '17,872',
    likes: '157',
    comments: '19',
    duration: 7.73,
    durationLabel: '7.7 sec',
    verdict:
      'A claim the video immediately contradicts, a meme sound that says the joke out loud, and a product argument left open for the comments.',
    onScreen: ['“POV you use cologne instead of deodorant” (top, full duration)', '“ME” (bottom left, full duration)'],
    frames: [
      { src: 'h9N9MtrJMtQ_000', t: '0.0s', caption: 'Green JPG torso bottle held to camera' },
      { src: 'h9N9MtrJMtQ_110', t: '1.1s', caption: 'Set down on the rug on the first “stinky”' },
      { src: 'h9N9MtrJMtQ_200', t: '2.0s', caption: 'A finger points at it: this is ME' },
      { src: 'h9N9MtrJMtQ_370', t: '3.7s', caption: 'Deodorant one: Dr. Squatch' },
      { src: 'h9N9MtrJMtQ_540', t: '5.4s', caption: 'Deodorant two: MILES' },
      { src: 'h9N9MtrJMtQ_680', t: '6.8s', caption: 'Deodorant three: LŪ Boys, raised to camera' },
      { src: 'h9N9MtrJMtQ_750', t: '7.5s', caption: 'Final frame: three deodorants, one cologne' },
    ],
    segments: [
      { start: 0, end: 1.0, label: 'Hook', kind: 'hook' },
      { start: 1.0, end: 2.6, label: 'Setup', kind: 'setup' },
      { start: 2.6, end: 4.6, label: 'Stack 1', kind: 'escalation' },
      { start: 4.6, end: 6.1, label: 'Stack 2', kind: 'escalation' },
      { start: 6.1, end: 7.73, label: 'Payoff', kind: 'payoff' },
    ],
    audioMarkers: [
      { t: 1.02, label: 'stinky' },
      { t: 3.0, label: 'stinky' },
      { t: 5.0, label: 'stinky' },
      { t: 6.98, label: 'stinky' },
    ],
    actionMarkers: [
      { t: 1.1, label: 'Cologne down' },
      { t: 3.5, label: 'Squatch' },
      { t: 5.1, label: 'MILES' },
      { t: 6.6, label: 'Boys up' },
    ],
    audioTitle: '“Uh oh stinky” meme sound',
    transcript: '“Uh-oh, stinky. Uh-oh, stinky. Uh-oh, stinky. Uh-oh, stinky.”',
    audioRead:
      'The chant repeats every two seconds and nothing else is on the track. The sound delivers the joke the text sets up: the viewer reads “instead of deodorant” and hears “stinky” four times while the deodorants pile up.',
    syncStat: { value: '4 of 4', label: 'product moves land within about half a second of a “stinky”' },
    mechanism: [
      'The text makes a claim (cologne instead of deodorant). The ME label pins that claim on the creator.',
      'The video then contradicts it three times. Each deodorant is a counter-argument, and each lands on a “stinky.”',
      'The payoff is the gap between what the text says and what the hands do. The joke works because the viewer gets it before the video says it.',
      'Three recognizable deodorant brands turn the ending into a question the comments want to answer: which one is actually good?',
    ],
    commentStat: { value: '6 of 19', label: 'comments are about the deodorants' },
    commentQuotes: ['W dr squatch!', 'ngl dr squatch is good but the others are questionable', 'How do you know about jpg niche', 'Fake jpg'],
    commentRead:
      'The brand lineup started a mini-debate (Dr. Squatch loved and hated), the JPG bottle pulled in the fragrance meme crowd, and one authenticity challenge (“Fake jpg”) drew a reply. Every reply is another comment.',
    products:
      'Jean Paul Gaultier green torso bottle (the Le Beau line, title tagged #jpg). Deodorants: Dr. Squatch Wood Barrel Bourbon, MILES, LŪ Level Up Boys.',
    dims: [
      { name: 'Hook Power', weight: 0.18, pegasus: 8, score: 7, note: 'Premise readable on frame one. The visual itself is a hand and a bottle; the text does the stopping.' },
      { name: 'Pacing & Structure', weight: 0.12, pegasus: 7, score: 8, note: 'Claim, then three escalating counter-examples, one per beat. No dead time.' },
      { name: 'Text, Captions & Accessibility', weight: 0.1, pegasus: 6, score: 6, note: 'Two static labels, readable and in the safe zone. The chant is not captioned, so muted viewers miss half the joke.' },
      { name: 'Audio Strategy', weight: 0.1, pegasus: 5, score: 9, note: 'The meme sound is the punchline and sets the edit rhythm.' },
      { name: 'Visual Production', weight: 0.1, pegasus: 7, score: 6, note: 'Raw phone footage, even light, one-color rug that makes the products pop. Motion blur on each drop.' },
      { name: 'CTA & Engagement Design', weight: 0.08, pegasus: 5, score: 6, note: 'No explicit prompt, but the brand lineup is a built-in question.' },
      { name: 'Thumbnail & First-Frame Impact', weight: 0.07, pegasus: 7, score: 6, note: 'Clear but ordinary: a hand holding a bottle.' },
      { name: 'Retention Architecture', weight: 0.09, pegasus: 6, score: 7, note: '“How many deodorants?” carries the viewer to the end. The last frame does not match the first, so the replay is not seamless.' },
      { name: 'Format & Platform Fit', weight: 0.08, pegasus: 8, score: 9, note: '7.7 seconds, 9:16, built to replay.' },
      { name: 'Trend & Cultural Relevance', weight: 0.08, pegasus: 7, score: 8, note: 'Meme sound, the cologne-versus-deodorant debate teen boys are having, and the JPG meme bottle.' },
    ],
    pegasusOverall: 7.0,
    overall: 7.2,
    retention: 'Strong retention to the payoff; replay is possible but not engineered.',
    fixes: [
      { title: 'Caption the sound', body: 'Add “uh oh stinky” as on-screen text on each hit, so the joke lands for muted viewers.' },
      { title: 'Close the loop', body: 'End by setting the Boys stick down beside the others, then cut to the opening hold. The replay then feels continuous.' },
      { title: 'Face on the last hit', body: 'At 7.0s, on the fourth “stinky,” a deadpan look to camera while holding up the third deodorant.' },
      { title: 'Pin the argument', body: 'Pinned comment: “Rank these three deodorants. Wrong answers only.”' },
    ],
    remake: [
      { t: '0.0 to 1.0s', shot: 'Bottle held to camera, text on screen, first “stinky.”' },
      { t: '1.0 to 3.0s', shot: 'Set the bottle down, point at it. Caption: “uh oh stinky.”' },
      { t: '3.0 to 5.0s', shot: 'Two deodorants drop in, one per hit.' },
      { t: '5.0 to 7.0s', shot: 'Third deodorant raised to camera; cut to the creator’s deadpan face.' },
      { t: '7.0 to 8.0s', shot: 'Everything back on the rug, matching the opening frame.' },
    ],
    remakeText: '“POV you use cologne instead of deodorant” top; “ME” bottom left; “uh oh stinky” on each hit.',
    remakeAudio: 'Same meme sound. Edit every product move to a hit.',
    remakePin: '“Rank these three deodorants. Wrong answers only.”',
  },
  {
    id: 'HJkYZ7dgT-I',
    title: 'Me before school',
    views: '14,797',
    likes: '292',
    comments: '38',
    duration: 8.9,
    durationLabel: '8.9 sec',
    verdict:
      'An impossible clock time the comments cannot leave alone, a frantic scan of twenty bottles, and a 1991 house chorus that turns abundance into irony.',
    onScreen: ['“POV school starts at 8 me at 7:99” (top, full duration)'],
    frames: [
      { src: 'HJkYZ7dgT-I_035', t: '0.35s', caption: 'Opens mid whip-pan, frame blurred' },
      { src: 'HJkYZ7dgT-I_160', t: '1.6s', caption: 'The spread: about twenty bottles' },
      { src: 'HJkYZ7dgT-I_330', t: '3.3s', caption: 'Still scanning, still undecided' },
      { src: 'HJkYZ7dgT-I_460', t: '4.6s', caption: 'Last pass over the spread' },
      { src: 'HJkYZ7dgT-I_560', t: '5.6s', caption: 'Pick one: French Avenue Aether' },
      { src: 'HJkYZ7dgT-I_680', t: '6.8s', caption: 'Pick two: Valentino Born in Roma' },
      { src: 'HJkYZ7dgT-I_780', t: '7.8s', caption: 'Pick three: French Avenue Vulcan' },
      { src: 'HJkYZ7dgT-I_880', t: '8.8s', caption: 'Back to the spread: still no decision' },
    ],
    segments: [
      { start: 0, end: 4.8, label: 'Frantic scan', kind: 'hook' },
      { start: 4.8, end: 6.4, label: 'Pick 1', kind: 'escalation' },
      { start: 6.4, end: 7.1, label: 'Pick 2', kind: 'escalation' },
      { start: 7.1, end: 8.6, label: 'Pick 3', kind: 'payoff' },
      { start: 8.6, end: 8.9, label: 'Back', kind: 'loop' },
    ],
    audioMarkers: [
      { t: 0.66, label: 'just like you' },
      { t: 2.14, label: 'and me' },
      { t: 4.2, label: 'she’s' },
      { t: 5.3, label: 'homeless' },
      { t: 8.1, label: 'homeless' },
    ],
    actionMarkers: [
      { t: 1.37, label: 'whip' },
      { t: 2.5, label: 'whip' },
      { t: 3.87, label: 'whip' },
      { t: 5.0, label: 'Aether' },
      { t: 6.57, label: 'Valentino' },
      { t: 7.37, label: 'Vulcan' },
    ],
    audioTitle: 'Crystal Waters, “Gypsy Woman (She’s Homeless),” 1991',
    transcript: '“She’s just like you and me, but she’s homeless, she’s homeless.”',
    audioRead:
      'A loud, instantly recognizable house chorus, reused as a meme sound. Singing “she’s homeless” over a blanket covered in twenty colognes is the second joke, and viewers caught it (“Rich people problems ong”).',
    syncStat: { value: '7 of 12', label: 'motion peaks (whips and picks) land within 0.12s of a beat' },
    mechanism: [
      '“7:99” is not a real time. It reads as panic, and it is a mistake the viewer is dying to correct.',
      'Four and a half seconds of whip-pans over twenty bottles act out indecision. The scan is the joke made physical.',
      'Three rapid picks, each dropped for the next, never land on an answer. The video ends back on the spread, where it started.',
      'The chorus adds a second, ironic joke on top: “she’s homeless” over a collection most teens would envy.',
    ],
    commentStat: { value: '17 of 38', label: 'comments are one argument about “7:99”' },
    commentQuotes: ['You mean 7:59', 'No I mean 799 (the creator)', '7 99 is crazy', 'we’re still commenting this 😭😭 it’s alg tho', 'Fr I can never choose what to wear'],
    commentRead:
      'The clock error pulled almost half the thread into one argument, and the creator’s reply (“No I mean 799”) kept it going. The most-liked comment is pure relatability: “Fr I can never choose what to wear.” Commenters even say out loud that they know the argument feeds the algorithm. The Short was still climbing that evening: another 1,120 views and 5 comments in the same day.',
    products:
      'About twenty bottles on the blanket. The three picks: French Avenue Aether, Valentino Born in Roma, French Avenue Vulcan. The Middle Eastern clone mix drew one pointed comment: “Holy dupe demon, invest in more niche or designers.”',
    dims: [
      { name: 'Hook Power', weight: 0.18, pegasus: 8, score: 7, note: 'The premise is great, but frame one is motion blur and the text is not fully readable until about 0.5s.' },
      { name: 'Pacing & Structure', weight: 0.12, pegasus: 7, score: 8, note: 'Scan, then three picks at about one-second intervals. The speed is the story.' },
      { name: 'Text, Captions & Accessibility', weight: 0.1, pegasus: 6, score: 7, note: 'One bold line in the safe zone, and “7:99” carries the whole engagement engine. The lyric is not captioned.' },
      { name: 'Audio Strategy', weight: 0.1, pegasus: 5, score: 9, note: 'Recognizable chorus, loud, with an ironic lyric that becomes a second joke.' },
      { name: 'Visual Production', weight: 0.1, pegasus: 7, score: 5, note: 'Dim room light muddies the bottle colors. The chaos fits the premise; the darkness does not.' },
      { name: 'CTA & Engagement Design', weight: 0.08, pegasus: 4, score: 7, note: 'No explicit prompt, but the deliberate “7:99” did the job a CTA would.' },
      { name: 'Thumbnail & First-Frame Impact', weight: 0.07, pegasus: 6, score: 5, note: 'Blurred green first frame. Strong grid cover, weak autoplay first frame.' },
      { name: 'Retention Architecture', weight: 0.09, pegasus: 7, score: 8, note: '“Which one does he pick?” is never answered, and the end returns to the spread, so the replay feels natural.' },
      { name: 'Format & Platform Fit', weight: 0.08, pegasus: 8, score: 9, note: '8.9 seconds, 9:16, near-seamless loop.' },
      { name: 'Trend & Cultural Relevance', weight: 0.08, pegasus: 7, score: 9, note: 'Broken-clock meme (“the time ain’t timing”), a trending sound, school-morning routine and the dupe debate.' },
    ],
    pegasusOverall: 7.2,
    overall: 7.4,
    retention: 'Rewatch loop: an unresolved choice and an ending that matches the opening.',
    fixes: [
      { title: 'Sharp first frame', body: 'Hold the still spread for 0.3s before the first whip so the text and the bottles read instantly.' },
      { title: 'More light', body: 'A desk lamp or phone flash over the blanket. Same chaos, bottles that actually show their color.' },
      { title: 'Face at the pick', body: 'At about 5.0s, on the first pick, a panicked glance at the camera. It turns the hands into a person.' },
      { title: 'Keep the mistake, pin the joke', body: 'Keep one deliberate “error” per video, and pin: “It’s 7:99. Don’t correct me.” The argument does the rest.' },
    ],
    remake: [
      { t: '0.0 to 0.3s', shot: 'Still spread, bright, text readable immediately.' },
      { t: '0.3 to 4.5s', shot: 'Whip-pans on the beat, getting faster.' },
      { t: '4.5 to 7.5s', shot: 'Three picks, each dropped, one per chorus hit. Panicked face on the first pick.' },
      { t: '7.5 to 8.5s', shot: 'Phone clock shown at 7:99 (edited), then a whip back to the spread.' },
    ],
    remakeText: '“POV school starts at 8. me at 7:99”',
    remakeAudio: 'Same chorus, or the current trending sound, with a lyric that plays against the visual.',
    remakePin: '“It’s 7:99. Don’t correct me.”',
  },
];

export const AUDIO_CLASSES = [
  { label: 'Sound carries the joke', n: 4, median: 8260, over2k: 4, note: 'The two breakouts, “Picking the cologne for the day” (eenie meenie) and “Best mango colognes” (a mango chant)', lead: true },
  { label: 'Spoken product narration', n: 9, median: 1281, over2k: 0, note: '“If you want to smell like…” and fragrance-of-the-day voiceovers; best was 1,437' },
  { label: 'Instrumental music bed', n: 18, median: 1241, over2k: 3, note: 'Background music, no words tied to the joke' },
  { label: 'Near-silent or ASMR', n: 3, median: 1080, over2k: 1, note: 'Atomizer ratings and ASMR parts' },
  { label: 'Song as background', n: 6, median: 905, over2k: 1, note: 'Songs whose lyrics do not connect to the on-screen idea' },
];

export const FORMULA = [
  { n: '01', title: 'The sound is the punchline', body: 'Pick audio whose words land the joke. All four Shorts built this way cleared 2,000 views; none of the nine narrated Shorts did.' },
  { n: '02', title: 'Plant one correctable detail', body: '“7:99.” A claim the video contradicts. One harmless thing viewers need to correct turns silent viewers into commenters.' },
  { n: '03', title: 'Show abundance', body: 'Twenty bottles on a blanket, three deodorants in a row. Volume on screen reads as credibility and invites “which one?”' },
  { n: '04', title: 'Move on the beat', body: 'Drops, picks and whips land on audio hits. The edit feels intentional even when the footage is raw.' },
  { n: '05', title: 'Under ten seconds, end where you started', body: 'Both breakouts run 7.7 and 8.9 seconds. The better loop belongs to the one with the higher like rate.' },
  { n: '06', title: 'Stay in the argument', body: 'The creator’s “No I mean 799” kept the thread alive. Reply fast, reply in character, never settle it.' },
];
