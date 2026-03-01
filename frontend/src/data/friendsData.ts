export type AnimationType = 'heartbeat' | 'constellation' | 'crown' | 'ripple' | 'radiant' | 'shimmer';

export interface Friend {
  id: string;
  name: string;
  title: string;
  epithet: string;
  photoFilename: string;
  animationType: AnimationType;
  emoji: string;
  message: string[];
}

export const friends: Friend[] = [
  {
    id: 'tiya',
    name: 'TIYA',
    title: 'THE HEARTBINDER',
    epithet: 'The One Who Stayed',
    photoFilename: 'tiya.jpg',
    animationType: 'heartbeat',
    emoji: '👑',
    message: [
      'She did not just stand beside me.',
      'She became the reason I could stand at all.',
      'In storms, she was shelter.',
      'In doubt, she was certainty.',
      'In silence, she understood.',
      '',
      'If love had a safest form, it would look like her.',
    ],
  },
  {
    id: 'aaliya',
    name: 'AALIYA',
    title: 'THE QUIET INTELLECT',
    epithet: 'She Who Thinks in Starlight',
    photoFilename: 'aaliya.jpg',
    animationType: 'constellation',
    emoji: '🌿',
    message: [
      'Her calm was not weakness.',
      'It was mastery.',
      'Her mind did not shout — it illuminated.',
      'And I was drawn, not by noise, but by brilliance wrapped in grace.',
    ],
  },
  {
    id: 'aaheli',
    name: 'AAHELI',
    title: 'THE STEADFAST ONE',
    epithet: 'Guardian of Unspoken Comfort',
    photoFilename: 'aaheli.jpg',
    animationType: 'crown',
    emoji: '🌙',
    message: [
      'She carried herself like someone who knew her worth.',
      'Nonchalant. Unbothered. Untouchable.',
      'Yet somehow — she made me feel protected without saying it aloud.',
    ],
  },
  {
    id: 'anshima',
    name: 'ANSHIMA',
    title: 'THE TRUTHBEARER',
    epithet: 'Soft Voice, Strong Soul',
    photoFilename: 'anshima.jpg',
    animationType: 'ripple',
    emoji: '🌸',
    message: [
      'She spoke gently, but her honesty carried weight.',
      'Being around her felt real.',
      'No masks. No pretending.',
      'Just truth — and laughter that needed no audience.',
    ],
  },
  {
    id: 'anya',
    name: 'ANYA',
    title: 'THE LIGHTBRINGER',
    epithet: 'Smile of Steady Warmth',
    photoFilename: 'anya.jpg',
    animationType: 'radiant',
    emoji: '☀️',
    message: [
      'She helped without announcement.',
      'She smiled without reason.',
      'She reminded me that kindness is not small — it is power in its purest form.',
    ],
  },
  {
    id: 'manasvi',
    name: 'MANASVI',
    title: 'THE EMBRACE',
    epithet: 'Keeper of Warmth',
    photoFilename: 'manasvi.jpg',
    animationType: 'shimmer',
    emoji: '🤍',
    message: [
      'Her hugs felt like safety.',
      'Her smile felt like sunrise.',
      'She loved softly — and somehow that softness healed more than noise ever could.',
    ],
  },
];
