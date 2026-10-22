import React from 'react';
import { WeddingEvent } from '@/domain/entities/event';
import { Language } from '@/presentation/context/language-context';
import { GoldDivider, GoldText, Reveal, VillaCaption } from './villa-typography';
import { VillaCopy } from './villa-copy';

interface VillaEventsSceneProps {
  lang: Language;
  copy: VillaCopy;
  events: WeddingEvent[];
}

export const VillaEventsScene: React.FC<VillaEventsSceneProps> = ({ lang, copy, events }) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center'>
      <Reveal variant='write' delay={0.2}>
        <GoldText
          className={
            isKh
              ? 'font-khmer-moul text-[min(6.5cqw,3.8cqh)]'
              : 'font-cursive text-[min(11cqw,6.2cqh)] leading-[1.15]'
          }
        >
          {copy.scheduleTitle}
        </GoldText>
      </Reveal>

      <Reveal variant='pop' delay={0.6} className='my-[1.5cqh]'>
        <GoldDivider />
      </Reveal>

      <div className='flex w-full flex-col gap-[2cqh]'>
        {events.map((evt, idx) => {
          const title = isKh ? evt.event_name_kh : evt.event_name;
          const delay = 0.8 + idx * 0.5;

          return (
            <Reveal key={evt.id || idx} delay={delay} className='flex flex-col items-center'>
              <span className='rounded-full bg-white/50 px-3 py-0.5 text-[min(3.2cqw,1.7cqh)] font-semibold text-[#4f7fa3] shadow-sm backdrop-blur-sm ring-1 ring-white/60'>
                {evt.start_time}
              </span>

              <GoldText
                className={
                  isKh
                    ? 'mt-1 font-khmer-moul text-[min(4.8cqw,2.7cqh)]'
                    : 'mt-1 font-serif-display text-[min(4.6cqw,2.6cqh)] font-semibold uppercase tracking-[0.08em]'
                }
              >
                {title}
              </GoldText>

              {evt.venue && (
                <VillaCaption lang={lang} className='text-[min(3.2cqw,1.8cqh)] opacity-90'>
                  {evt.venue}
                </VillaCaption>
              )}

              {evt.description && (
                <p
                  className={
                    isKh
                      ? 'mt-0.5 max-w-[70cqw] font-khmer-kantumruuy text-[min(3cqw,1.6cqh)] text-[#3e5a70]/80'
                      : 'mt-0.5 max-w-[70cqw] font-serif-display text-[min(3cqw,1.6cqh)] text-[#3e5a70]/80'
                  }
                >
                  {evt.description}
                </p>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
