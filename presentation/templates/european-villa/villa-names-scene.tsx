import React from 'react';
import { Language } from '@/presentation/context/language-context';
import { GoldText, Reveal, VillaCaption } from './villa-typography';
import { VillaCopy } from './villa-copy';

interface VillaNamesSceneProps {
  lang: Language;
  copy: VillaCopy;
  groomName: string;
  brideName: string;
  /** Extra delay on the very first run so text waits for the intro camera move. */
  introOffset: number;
}

export const VillaNamesScene: React.FC<VillaNamesSceneProps> = ({
  lang,
  copy,
  groomName,
  brideName,
  introOffset,
}) => {
  const isKh = lang === 'kh';
  const nameClass = isKh
    ? 'font-khmer-moulpali text-[min(9.5cqw,5.4cqh)]'
    : 'font-cursive text-[min(13.5cqw,7.6cqh)] leading-[1.12]';

  return (
    <div className='flex flex-col items-center text-center'>
      <Reveal variant='write' delay={introOffset + 0.4}>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moulpali text-[min(7cqw,4cqh)]'
              : 'font-cursive text-[min(12.5cqw,7cqh)] leading-[1.15]'
          }
        >
          {copy.title}
        </GoldText>
      </Reveal>

      <Reveal delay={introOffset + 2.4} className='mt-[1.6cqh] max-w-[64cqw]'>
        <VillaCaption lang={lang}>{copy.invite}</VillaCaption>
      </Reveal>

      <Reveal delay={introOffset + 3.2} className='mt-[2.4cqh]'>
        <GoldText className={nameClass}>{groomName}</GoldText>
      </Reveal>

      <Reveal variant='pop' delay={introOffset + 4}>
        <GoldText className='font-cursive text-[min(8cqw,4.5cqh)] leading-none'>&amp;</GoldText>
      </Reveal>

      <Reveal delay={introOffset + 4.6}>
        <GoldText className={nameClass}>{brideName}</GoldText>
      </Reveal>
    </div>
  );
};
