import React from 'react';
import { Language } from '@/presentation/context/language-context';
import { WeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import {
  GoldDivider,
  GoldText,
  Reveal,
  VillaCaption,
} from './villa-typography';
import { VillaCopy } from './villa-copy';

interface VillaDetailsSceneProps {
  lang: Language;
  copy: VillaCopy;
  dateParts: WeddingDateParts;
  venueName: string;
  venueAddress: string;
}

export const VillaDetailsScene: React.FC<VillaDetailsSceneProps> = ({
  lang,
  copy,
  dateParts,
  venueName,
  venueAddress,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center'>
      <Reveal delay={0.2}>
        <VillaCaption lang={lang}>{copy.dateLabel}</VillaCaption>
      </Reveal>

      <Reveal variant='write' delay={0.6} className='mt-[0.6cqh]'>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(8cqw,4.6cqh)]'
              : 'font-cursive text-[min(12cqw,6.8cqh)] leading-[1.15]'
          }
        >
          {dateParts.weekday}
        </GoldText>
      </Reveal>

      <Reveal delay={1.6}>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(5cqw,2.9cqh)]'
              : 'font-serif-display text-[min(5.6cqw,3.2cqh)] font-semibold uppercase tracking-[0.12em]'
          }
        >
          {dateParts.date}
        </GoldText>
      </Reveal>

      <Reveal delay={2.1} className='mt-[0.8cqh]'>
        <VillaCaption lang={lang}>{dateParts.time}</VillaCaption>
      </Reveal>

      <Reveal variant='pop' delay={2.6} className='my-[2.4cqh]'>
        <GoldDivider />
      </Reveal>

      <Reveal delay={2.9}>
        <VillaCaption lang={lang}>{copy.venueLabel}</VillaCaption>
      </Reveal>

      <Reveal delay={3.3} className='max-w-[72cqw]'>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(6.6cqw,3.8cqh)]'
              : 'font-cursive text-[min(10.5cqw,6cqh)] leading-[1.15]'
          }
        >
          {venueName}
        </GoldText>
      </Reveal>

      <Reveal delay={3.9} className='mt-[0.6cqh]'>
        <VillaCaption lang={lang}>{venueAddress}</VillaCaption>
      </Reveal>
    </div>
  );
};
