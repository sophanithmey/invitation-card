import { Wedding } from '@/domain/entities/wedding';
import { SEREY_MONGKUL_WEDDING } from './seeds/serey-mongkul';
import { CHHAIYA_THEAROTH_WEDDING } from './seeds/chhaiya-thearoth';
import { SOKHA_DEVI_WEDDING } from './seeds/sokha-devi';
import { RITHY_SREYPOV_WEDDING } from './seeds/rithy-sreypov';
import { VIRAK_KEOMONY_WEDDING } from './seeds/virak-keomony';
import { CELESTIAL_DREAM_WEDDING } from './seeds/celestial-dream';
import { GRAND_EVENING_WEDDING } from './seeds/grand-evening';

export const SEED_WEDDINGS: Wedding[] = [
  GRAND_EVENING_WEDDING,
  CELESTIAL_DREAM_WEDDING,
  VIRAK_KEOMONY_WEDDING,
  SOKHA_DEVI_WEDDING,
  CHHAIYA_THEAROTH_WEDDING,
  SEREY_MONGKUL_WEDDING,
  RITHY_SREYPOV_WEDDING,
];

