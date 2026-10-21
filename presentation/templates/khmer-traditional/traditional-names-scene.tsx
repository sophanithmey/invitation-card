import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '@/presentation/context/language-context';
import {
  GoldText,
  Reveal,
  TraditionalCaption,
  TraditionalFrameBadge,
} from './traditional-typography';
import { TraditionalCopy } from './traditional-copy';

interface TraditionalNamesSceneProps {
  lang: Language;
  copy: TraditionalCopy;
  groomName: string;
  brideName: string;
  introOffset: number;
}

export const TraditionalNamesScene: React.FC<TraditionalNamesSceneProps> = ({
  lang,
  copy,
  groomName,
  brideName,
  introOffset,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center pt-[14cqh] pb-[4cqh]'>
      {/* Upper Title: សិរីមង្គលអាពាហ៍ពិពាហ៍ */}
      <Reveal variant='write' delay={introOffset + 0.3}>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(6cqw,3.5cqh)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'
              : 'font-serif-display text-[min(5cqw,3cqh)] font-bold uppercase tracking-[0.15em]'
          }
        >
          {copy.matrimony}
        </GoldText>
      </Reveal>

      {/* Royal Couple Calligraphic Names */}
      <div className='my-[2cqh] flex flex-col items-center'>
        <Reveal delay={introOffset + 1.2}>
          <GoldText
            className={
              isKh
                ? 'font-khmer-moul text-[min(9.5cqw,5.6cqh)]'
                : 'font-cursive text-[min(13.5cqw,7.8cqh)] leading-[1.15]'
            }
          >
            {groomName}
          </GoldText>
        </Reveal>

        <Reveal variant='pop' delay={introOffset + 2.0}>
          <GoldText className='font-cursive text-[min(7.5cqw,4.2cqh)] leading-none'>
            &amp;
          </GoldText>
        </Reveal>

        <Reveal delay={introOffset + 2.6}>
          <GoldText
            className={
              isKh
                ? 'font-khmer-moul text-[min(9.5cqw,5.6cqh)]'
                : 'font-cursive text-[min(13.5cqw,7.8cqh)] leading-[1.15]'
            }
          >
            {brideName}
          </GoldText>
        </Reveal>
      </div>

      {/* Invitation Subtext: សូមគោរពអញ្ជើញ */}
      <Reveal delay={introOffset + 3.4} className='mt-[1cqh]'>
        <TraditionalCaption lang={lang}>{copy.invite}</TraditionalCaption>
      </Reveal>

      {/* Framed Royal Badge: ភ្ញៀវកិត្តិយស */}
      <Reveal variant='pop' delay={introOffset + 4.0} className='mt-[2.2cqh]'>
        <TraditionalFrameBadge label={copy.honoredGuest} lang={lang} />
      </Reveal>

      {/* Indicator Chevron */}
      <Reveal delay={introOffset + 4.8} className='mt-[2cqh]'>
        <ChevronDown className='size-5 animate-bounce text-[#fef2b8]/70 drop-shadow-md' />
      </Reveal>
    </div>
  );
};
