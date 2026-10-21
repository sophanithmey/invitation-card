import React from 'react';
import { ParentsInfo } from '@/domain/entities/details';
import { Language } from '@/presentation/context/language-context';
import {
  GoldText,
  Reveal,
  TraditionalCaption,
  TraditionalDivider,
} from './traditional-typography';
import { TraditionalCopy } from './traditional-copy';

interface TraditionalParentsSceneProps {
  lang: Language;
  copy: TraditionalCopy;
  parents: ParentsInfo;
  dressCode?: string;
  hashtag?: string;
}

export const TraditionalParentsScene: React.FC<TraditionalParentsSceneProps> = ({
  lang,
  copy,
  parents,
  dressCode,
  hashtag,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center pt-[10cqh] pb-[4cqh]'>
      <Reveal variant='write' delay={0.2}>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(6cqw,3.5cqh)]'
              : 'font-cursive text-[min(10.5cqw,6cqh)] leading-[1.15]'
          }
        >
          {copy.parentsTitle}
        </GoldText>
      </Reveal>

      <Reveal variant='pop' delay={0.5} className='my-[1.5cqh]'>
        <TraditionalDivider />
      </Reveal>

      <div className='grid w-full grid-cols-2 gap-2 text-center'>
        <Reveal delay={0.7} className='flex flex-col items-center'>
          <TraditionalCaption lang={lang} className='text-[min(3.2cqw,1.7cqh)] font-bold text-[#fef2b8]'>
            {copy.groomParents}
          </TraditionalCaption>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.3cqw,1.8cqh)] font-medium text-white/90 mt-1' : 'font-serif-display text-[min(3.3cqw,1.8cqh)] text-white/90 mt-1'}>
            {parents.groom_father}
          </p>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.3cqw,1.8cqh)] font-medium text-white/90' : 'font-serif-display text-[min(3.3cqw,1.8cqh)] text-white/90'}>
            {parents.groom_mother}
          </p>
        </Reveal>

        <Reveal delay={0.9} className='flex flex-col items-center'>
          <TraditionalCaption lang={lang} className='text-[min(3.2cqw,1.7cqh)] font-bold text-[#fef2b8]'>
            {copy.brideParents}
          </TraditionalCaption>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.3cqw,1.8cqh)] font-medium text-white/90 mt-1' : 'font-serif-display text-[min(3.3cqw,1.8cqh)] text-white/90 mt-1'}>
            {parents.bride_father}
          </p>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.3cqw,1.8cqh)] font-medium text-white/90' : 'font-serif-display text-[min(3.3cqw,1.8cqh)] text-white/90'}>
            {parents.bride_mother}
          </p>
        </Reveal>
      </div>

      {dressCode && (
        <Reveal delay={1.2} className='mt-[2.5cqh] max-w-[76cqw] flex flex-col items-center'>
          <span className='rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/40 to-[#d4af37]/20 px-3 py-0.5 text-[min(2.8cqw,1.5cqh)] font-semibold text-[#fef2b8] ring-1 ring-[#d4af37]/60'>
            {copy.dressCodeTitle}
          </span>
          <p
            className={
              isKh
                ? 'mt-1 font-khmer-kantumruuy text-[min(3.1cqw,1.7cqh)] text-white/90 leading-relaxed'
                : 'mt-1 font-serif-display text-[min(3.1cqw,1.7cqh)] text-white/90 leading-relaxed'
            }
          >
            {dressCode}
          </p>
        </Reveal>
      )}

      {hashtag && (
        <Reveal delay={1.5} className='mt-[2cqh]'>
          <span className='font-serif-display text-[min(3.8cqw,2cqh)] font-bold text-[#fef2b8] drop-shadow-md'>
            {hashtag}
          </span>
        </Reveal>
      )}
    </div>
  );
};
