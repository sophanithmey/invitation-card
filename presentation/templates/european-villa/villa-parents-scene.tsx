import React from 'react';
import { ParentsInfo } from '@/domain/entities/details';
import { Language } from '@/presentation/context/language-context';
import { GoldDivider, GoldText, Reveal, VillaCaption } from './villa-typography';
import { VillaCopy } from './villa-copy';

interface VillaParentsSceneProps {
  lang: Language;
  copy: VillaCopy;
  parents: ParentsInfo;
  dressCode?: string;
  hashtag?: string;
}

export const VillaParentsScene: React.FC<VillaParentsSceneProps> = ({
  lang,
  copy,
  parents,
  dressCode,
  hashtag,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center'>
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
        <GoldDivider />
      </Reveal>

      <div className='grid w-full grid-cols-2 gap-2 text-center'>
        <Reveal delay={0.7} className='flex flex-col items-center'>
          <VillaCaption lang={lang} className='text-[min(3cqw,1.6cqh)] font-semibold'>
            {copy.groomParents}
          </VillaCaption>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.2cqw,1.8cqh)] font-medium text-[#2f4f68] mt-1' : 'font-serif-display text-[min(3.2cqw,1.8cqh)] text-[#2f4f68] mt-1'}>
            {parents.groom_father}
          </p>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.2cqw,1.8cqh)] font-medium text-[#2f4f68]' : 'font-serif-display text-[min(3.2cqw,1.8cqh)] text-[#2f4f68]'}>
            {parents.groom_mother}
          </p>
        </Reveal>

        <Reveal delay={0.9} className='flex flex-col items-center'>
          <VillaCaption lang={lang} className='text-[min(3cqw,1.6cqh)] font-semibold'>
            {copy.brideParents}
          </VillaCaption>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.2cqw,1.8cqh)] font-medium text-[#2f4f68] mt-1' : 'font-serif-display text-[min(3.2cqw,1.8cqh)] text-[#2f4f68] mt-1'}>
            {parents.bride_father}
          </p>
          <p className={isKh ? 'font-khmer-kantumruuy text-[min(3.2cqw,1.8cqh)] font-medium text-[#2f4f68]' : 'font-serif-display text-[min(3.2cqw,1.8cqh)] text-[#2f4f68]'}>
            {parents.bride_mother}
          </p>
        </Reveal>
      </div>

      {dressCode && (
        <Reveal delay={1.2} className='mt-[2.5cqh] max-w-[76cqw] flex flex-col items-center'>
          <span className='rounded-full bg-white/50 px-3 py-0.5 text-[min(2.8cqw,1.5cqh)] font-semibold text-[#4f7fa3] shadow-xs backdrop-blur-xs ring-1 ring-white/60'>
            {copy.dressCodeTitle}
          </span>
          <p
            className={
              isKh
                ? 'mt-1 font-khmer-kantumruuy text-[min(3cqw,1.6cqh)] text-[#3e5a70]/90 leading-relaxed'
                : 'mt-1 font-serif-display text-[min(3cqw,1.6cqh)] text-[#3e5a70]/90 leading-relaxed'
            }
          >
            {dressCode}
          </p>
        </Reveal>
      )}

      {hashtag && (
        <Reveal delay={1.5} className='mt-[2cqh]'>
          <span className='font-serif-display text-[min(3.6cqw,2cqh)] font-bold text-[#b8863b] drop-shadow-xs'>
            {hashtag}
          </span>
        </Reveal>
      )}
    </div>
  );
};
