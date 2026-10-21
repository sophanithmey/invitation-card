import React from 'react';
import { Language } from '@/presentation/context/language-context';
import { WeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import {
  GoldText,
  Reveal,
  TraditionalCaption,
  TraditionalDivider,
} from './traditional-typography';
import { TraditionalCopy } from './traditional-copy';

interface TraditionalDetailsSceneProps {
  lang: Language;
  copy: TraditionalCopy;
  dateParts: WeddingDateParts;
  venueName: string;
  venueAddress: string;
}

export const TraditionalDetailsScene: React.FC<TraditionalDetailsSceneProps> = ({
  lang,
  copy,
  dateParts,
  venueName,
  venueAddress,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center pt-[10cqh] pb-[4cqh]'>
      <Reveal delay={0.2}>
        <TraditionalCaption lang={lang}>{copy.dateLabel}</TraditionalCaption>
      </Reveal>

      {/* Weekday */}
      <Reveal variant='write' delay={0.6} className='mt-[0.6cqh]'>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(7.5cqw,4.4cqh)]'
              : 'font-cursive text-[min(12cqw,6.8cqh)] leading-[1.15]'
          }
        >
          {dateParts.weekday}
        </GoldText>
      </Reveal>

      {/* Date */}
      <Reveal delay={1.4} className='mt-[0.4cqh]'>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(5.2cqw,3cqh)]'
              : 'font-serif-display text-[min(5.8cqw,3.4cqh)] font-semibold uppercase tracking-[0.12em]'
          }
        >
          {dateParts.date}
        </GoldText>
      </Reveal>

      {/* Time */}
      <Reveal delay={1.9} className='mt-[0.8cqh]'>
        <TraditionalCaption lang={lang} className='text-[min(3.6cqw,2cqh)] font-semibold text-[#fef2b8]'>
          {dateParts.time}
        </TraditionalCaption>
      </Reveal>

      <Reveal variant='pop' delay={2.4} className='my-[2.2cqh]'>
        <TraditionalDivider />
      </Reveal>

      {/* Venue Label */}
      <Reveal delay={2.8}>
        <TraditionalCaption lang={lang}>{copy.venueLabel}</TraditionalCaption>
      </Reveal>

      {/* Venue Name */}
      <Reveal delay={3.2} className='mt-[0.6cqh] max-w-[74cqw]'>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(6.2cqw,3.6cqh)]'
              : 'font-serif-display text-[min(5.2cqw,3cqh)] font-semibold uppercase tracking-[0.08em]'
          }
        >
          {venueName}
        </GoldText>
      </Reveal>

      {/* Venue Address */}
      <Reveal delay={3.8} className='mt-[0.8cqh] max-w-[70cqw]'>
        <TraditionalCaption lang={lang} className='text-[min(3.2cqw,1.7cqh)] opacity-90'>
          {venueAddress}
        </TraditionalCaption>
      </Reveal>
    </div>
  );
};
