import React from 'react';
import { WeddingEvent } from '@/domain/entities/event';
import { Language } from '@/presentation/context/language-context';
import {
  GoldText,
  Reveal,
  TraditionalCaption,
  TraditionalDivider,
} from './traditional-typography';
import { TraditionalCopy } from './traditional-copy';

interface TraditionalEventsSceneProps {
  lang: Language;
  copy: TraditionalCopy;
  events: WeddingEvent[];
}

export const TraditionalEventsScene: React.FC<TraditionalEventsSceneProps> = ({
  lang,
  copy,
  events,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center text-center pt-[10cqh] pb-[4cqh]'>
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

      <Reveal variant='pop' delay={0.5} className='my-[1.5cqh]'>
        <TraditionalDivider />
      </Reveal>

      <div className='flex w-full flex-col gap-[2.4cqh]'>
        {events.map((evt, idx) => {
          const title = isKh ? evt.event_name_kh : evt.event_name;
          const delay = 0.7 + idx * 0.45;

          return (
            <Reveal key={evt.id || idx} delay={delay} className='flex flex-col items-center'>
              <span className='rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/40 to-[#d4af37]/20 px-3 py-0.5 text-[min(3.2cqw,1.7cqh)] font-bold text-[#fef2b8] shadow-sm backdrop-blur-sm ring-1 ring-[#d4af37]/60'>
                {evt.start_time}
              </span>

              <GoldText
                className={
                  isKh
                    ? 'mt-1 font-khmer-moul text-[min(4.8cqw,2.7cqh)]'
                    : 'mt-1 font-serif-display text-[min(4.4cqw,2.5cqh)] font-semibold uppercase tracking-[0.08em]'
                }
              >
                {title}
              </GoldText>

              {evt.venue && (
                <TraditionalCaption lang={lang} className='text-[min(3.2cqw,1.8cqh)] opacity-95'>
                  {evt.venue}
                </TraditionalCaption>
              )}

              {evt.description && (
                <p
                  className={
                    isKh
                      ? 'mt-0.5 max-w-[70cqw] font-khmer-kantumruuy text-[min(2.9cqw,1.6cqh)] text-[#fef2b8]/80'
                      : 'mt-0.5 max-w-[70cqw] font-serif-display text-[min(2.9cqw,1.6cqh)] text-[#fef2b8]/80'
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
