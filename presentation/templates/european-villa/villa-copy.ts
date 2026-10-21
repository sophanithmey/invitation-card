import { Language } from '@/presentation/context/language-context';

export interface VillaCopy {
  title: string;
  invite: string;
  dateLabel: string;
  venueLabel: string;
  play: string;
  pause: string;
  replay: string;
  sceneLabel: string;
  scheduleTitle: string;
  parentsTitle: string;
  groomParents: string;
  brideParents: string;
  dressCodeTitle: string;
  autoMode: string;
  scrollMode: string;
}

export const VILLA_COPY: Record<Language, VillaCopy> = {
  en: {
    title: 'Save the Date',
    invite: 'For the wedding of',
    dateLabel: 'Join us on',
    venueLabel: 'At',
    play: 'Play animation',
    pause: 'Pause animation',
    replay: 'Replay from the beginning',
    sceneLabel: 'Scene progress',
    scheduleTitle: 'Wedding Schedule',
    parentsTitle: 'With the Blessings of Parents',
    groomParents: "Groom's Parents",
    brideParents: "Bride's Parents",
    dressCodeTitle: 'Dress Code & Notes',
    autoMode: 'Auto Play',
    scrollMode: 'Manual Scroll',
  },
  kh: {
    title: 'សូមចំណាំថ្ងៃមង្គល',
    invite: 'សូមគោរពអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍របស់',
    dateLabel: 'ប្រារព្ធនៅ',
    venueLabel: 'ទីកន្លែង',
    play: 'ចាក់',
    pause: 'ផ្អាក',
    replay: 'ចាក់ឡើងវិញ',
    sceneLabel: 'វឌ្ឍនភាពឈុត',
    scheduleTitle: 'កម្មវិធីសិរីមង្គល',
    parentsTitle: 'ដោយសេចក្តីគោរពពីមាតាបិតា',
    groomParents: 'មាតាបិតាខាងប្រុស',
    brideParents: 'មាតាបិតាខាងស្រី',
    dressCodeTitle: 'ការស្លៀកពាក់',
    autoMode: 'ចាក់ស្វ័យប្រវត្តិ',
    scrollMode: 'រំកិលអាន',
  },
};

/** Scene 1: Names; Scene 2: Date & Venue; Scene 3: Events Timeline; Scene 4: Parents & Dress Code */
export const VILLA_SCENE_DURATIONS_MS = [10000, 9000, 11000, 10000] as const;

export const VILLA_ASSETS = {
  scene: '/templates/european-villa/villa-scene.webp',
  foliageLeft: '/templates/european-villa/foliage-left.webp',
  foliageRight: '/templates/european-villa/foliage-right.webp',
  flowersFront: '/templates/european-villa/flowers-front.webp',
} as const;
