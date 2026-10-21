import { Wedding } from '@/domain/entities/wedding';
import { SEREY_MONGKUL_WEDDING } from './seeds/serey-mongkul';
import { DARA_SOPHEA_WEDDING } from './seeds/dara-sophea';
import { KANHA_VICHEA_WEDDING } from './seeds/kanha-vichea';
import { CHEATA_PISETH_WEDDING } from './seeds/cheata-piseth';
import { CHHAIYA_THEAROTH_WEDDING } from './seeds/chhaiya-thearoth';
import { SOKHA_DEVI_WEDDING } from './seeds/sokha-devi';
import { RITHY_SREYPOV_WEDDING } from './seeds/rithy-sreypov';
import { VIRAK_KEOMONY_WEDDING } from './seeds/virak-keomony';

export const SEED_WEDDINGS: Wedding[] = [
  VIRAK_KEOMONY_WEDDING,
  SOKHA_DEVI_WEDDING,
  CHHAIYA_THEAROTH_WEDDING,
  SEREY_MONGKUL_WEDDING,
  DARA_SOPHEA_WEDDING,
  KANHA_VICHEA_WEDDING,
  CHEATA_PISETH_WEDDING,
  RITHY_SREYPOV_WEDDING,
];

