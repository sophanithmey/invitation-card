import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { Language } from '@/presentation/context/language-context';
import { WeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { BilingualLabel } from '@/use-cases/split-bilingual-label';
import { TraditionalCopy } from './traditional-copy';
import { TraditionalNamesScene } from './traditional-names-scene';
import { TraditionalDetailsScene } from './traditional-details-scene';
import { TraditionalEventsScene } from './traditional-events-scene';
import { TraditionalParentsScene } from './traditional-parents-scene';
import { TraditionalDivider } from './traditional-typography';

interface TraditionalScrollFlowProps {
  wedding: Wedding;
  lang: Language;
  copy: TraditionalCopy;
  dateParts: WeddingDateParts;
  venue: BilingualLabel;
  groomName: string;
  brideName: string;
}

export const TraditionalScrollFlow: React.FC<TraditionalScrollFlowProps> = ({
  wedding,
  lang,
  copy,
  dateParts,
  venue,
  groomName,
  brideName,
}) => {
  const isKh = lang === 'kh';

  return (
    <div className='flex flex-col items-center gap-[4.5cqh] pb-[9cqh] pt-[2cqh]'>
      <TraditionalNamesScene
        lang={lang}
        copy={copy}
        groomName={groomName}
        brideName={brideName}
        introOffset={0}
      />

      <TraditionalDivider />

      <TraditionalDetailsScene
        lang={lang}
        copy={copy}
        dateParts={dateParts}
        venueName={isKh ? venue.kh : venue.en}
        venueAddress={wedding.venue_address}
      />

      {wedding.events && wedding.events.length > 0 && (
        <>
          <TraditionalDivider />
          <TraditionalEventsScene lang={lang} copy={copy} events={wedding.events} />
        </>
      )}

      {wedding.parents && (
        <>
          <TraditionalDivider />
          <TraditionalParentsScene
            lang={lang}
            copy={copy}
            parents={wedding.parents}
            dressCode={wedding.dress_code}
            hashtag={wedding.hashtag}
          />
        </>
      )}
    </div>
  );
};
