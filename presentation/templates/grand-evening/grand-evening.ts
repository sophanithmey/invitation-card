import { GrandEvening } from './grand-evening-types';
import { GRAND_EVENING_EN } from './grand-evening-en';
import { GRAND_EVENING_KH } from './grand-evening-kh';

export type { GrandEvening };

export const GRAND_EVENING_CONTENT: Record<'en' | 'kh', GrandEvening> = {
  en: GRAND_EVENING_EN,
  kh: GRAND_EVENING_KH,
};
