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
    photoFilename: 'tiya-photo.jpg',
    animationType: 'heartbeat',
    emoji: '👑',
    message: [
      'We all know her as the one who never left.',
      'When the storms hit, she was the first one standing there — no questions asked.',
      'Ask anyone in the group and they\'ll tell you: she\'s the reason we all feel a little braver.',
      '',
      'If love had a safest form, we\'re pretty sure it would look exactly like her.',
    ],
  },
  {
    id: 'aaliya',
    name: 'AALIYA',
    title: 'THE QUIET INTELLECT',
    epithet: 'She Who Thinks in Starlight',
    photoFilename: 'aaliya-photo.jpg',
    animationType: 'constellation',
    emoji: '🌿',
    message: [
      'We\'ve all been in the middle of a mess and looked over at her — calm, composed, already three steps ahead.',
      'She doesn\'t shout to be heard; she just says the one thing that makes everything click.',
      'Honestly? We\'re all a little in awe of how her mind works.',
    ],
  },
  {
    id: 'aaheli',
    name: 'AAHELI',
    title: 'THE STEADFAST ONE',
    epithet: 'Guardian of Unspoken Comfort',
    photoFilename: 'aaheli-photo.jpg',
    animationType: 'crown',
    emoji: '🌙',
    message: [
      'She walks into a room and the whole vibe shifts — we all feel it.',
      'Nonchalant, unbothered, and somehow the most grounding presence in the group.',
      'We don\'t always say it out loud, but everyone knows: she\'s the one who makes us feel safe without even trying.',
    ],
  },
  {
    id: 'anshima',
    name: 'ANSHIMA',
    title: 'THE TRUTHBEARER',
    epithet: 'Soft Voice, Strong Soul',
    photoFilename: 'anshima-photo.jpg',
    animationType: 'ripple',
    emoji: '🌸',
    message: [
      'She\'s the one we go to when we need the real answer — not the comfortable one.',
      'Her voice is soft but her honesty hits different, and we love her for it.',
      'No masks, no pretending — just pure, genuine Anshima, and laughter that needs absolutely no audience.',
    ],
  },
  {
    id: 'anya',
    name: 'ANYA',
    title: 'THE LIGHTBRINGER',
    epithet: 'Smile of Steady Warmth',
    photoFilename: 'anya-photo.jpg',
    animationType: 'radiant',
    emoji: '☀️',
    message: [
      'She\'s the one who shows up quietly and makes everything better — no announcement, no fuss.',
      'We\'ve all had a bad day turned around just by her smile walking through the door.',
      'She reminds the whole group that kindness isn\'t small — it\'s the most powerful thing in the room.',
    ],
  },
  {
    id: 'manasvi',
    name: 'MANASVI',
    title: 'THE EMBRACE',
    epithet: 'Keeper of Warmth',
    photoFilename: 'manasvi-photo.jpg',
    animationType: 'shimmer',
    emoji: '🤍',
    message: [
      'We all know that when things get heavy, a hug from her fixes at least half of it.',
      'Her warmth is the kind that sneaks up on you — suddenly you\'re smiling and you\'re not even sure when it started.',
      'She loves softly, and somehow that softness has healed every single one of us more than once.',
    ],
  },
  {
    id: 'neekita',
    name: 'NEEKITA',
    title: 'THE MOOD SETTER',
    epithet: 'Sacred Seven',
    photoFilename: 'neekita-photo.jpg',
    animationType: 'radiant',
    emoji: '✨',
    message: [
      'She\'s the one who walks in and the whole energy of the group just lifts — we\'ve all felt it.',
      'When we were sad, she made us laugh. When things looked bad, she found the good. That\'s just who she is.',
      '',
      'She cares without making noise about it, and helps without making it feel like a favor.',
      '',
      'Ask anyone in the group — having her around feels like carrying a little extra strength everywhere we go.',
    ],
  },
];
