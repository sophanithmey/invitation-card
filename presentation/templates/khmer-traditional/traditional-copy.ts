import { Language } from '@/presentation/context/language-context';

export interface TraditionalCopy {
  matrimony: string;
  invite: string;
  honoredGuest: string;
  dateLabel: string;
  venueLabel: string;
  scheduleTitle: string;
  parentsTitle: string;
  groomParents: string;
  brideParents: string;
  dressCodeTitle: string;
  play: string;
  pause: string;
  replay: string;
  sceneLabel: string;
  autoMode: string;
  scrollMode: string;
}

export const TRADITIONAL_COPY: Record<Language, TraditionalCopy> = {
  kh: {
    matrimony: 'សិរីមង្គលអាពាហ៍ពិពាហ៍',
    invite: 'សូមគោរពអញ្ជើញ',
    honoredGuest: 'ភ្ញៀវកិត្តិយស',
    dateLabel: 'ប្រារព្ធនៅ',
    venueLabel: 'ទីកន្លែងប្រារព្ធពិធី',
    scheduleTitle: 'កម្មវិធីសិរីមង្គល',
    parentsTitle: 'ដោយសេចក្តីគោរពពីមាតាបិតាទាំងសងខាង',
    groomParents: 'មាតាបិតាខាងប្រុស',
    brideParents: 'មាតាបិតាខាងស្រី',
    dressCodeTitle: 'ការស្លៀកពាក់',
    play: 'ចាក់',
    pause: 'ផ្អាក',
    replay: 'ចាក់ឡើងវិញ',
    sceneLabel: 'វឌ្ឍនភាពឈុត',
    autoMode: 'ចាក់ស្វ័យប្រវត្តិ',
    scrollMode: 'រំកិលអាន',
  },
  en: {
    matrimony: 'The Holy Matrimony',
    invite: 'Cordially Invites You',
    honoredGuest: 'Honored Guest',
    dateLabel: 'Join Us On',
    venueLabel: 'At The Venue',
    scheduleTitle: 'Ceremony Schedule',
    parentsTitle: 'With the Blessings of Our Beloved Parents',
    groomParents: "Groom's Parents",
    brideParents: "Bride's Parents",
    dressCodeTitle: 'Dress Code & Attire',
    play: 'Play',
    pause: 'Pause',
    replay: 'Replay',
    sceneLabel: 'Scene Progress',
    autoMode: 'Auto Play',
    scrollMode: 'Manual Scroll',
  },
};

export const TRADITIONAL_SCENE_DURATIONS_MS = [11000, 9500, 11000, 10000] as const;

export const TRADITIONAL_ASSETS = {
  arch: '/templates/khmer-traditional/arch-scene.webp',
  altar: '/templates/khmer-traditional/altar-scene.webp',
} as const;
