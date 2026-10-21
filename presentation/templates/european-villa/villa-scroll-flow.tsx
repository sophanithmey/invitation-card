import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { Language } from '@/presentation/context/language-context';
import { WeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { BilingualLabel } from '@/use-cases/split-bilingual-label';
import { VillaCopy } from './villa-copy';
import { VillaNamesScene } from './villa-names-scene';
import { VillaDetailsScene } from './villa-details-scene';
import { VillaEventsScene } from './villa-events-scene';
import { VillaParentsScene } from './villa-parents-scene';
import { GoldDivider } from './villa-typography';

interface VillaScrollFlowProps {
  wedding: Wedding;
  lang: Language;
  copy: VillaCopy;
  dateParts: WeddingDateParts;
  venue: BilingualLabel;
  groomName: string;
  brideName: string;
}

export const VillaScrollFlow: React.FC<VillaScrollFlowProps> = ({
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
    <div className='flex flex-col items-center gap-[4cqh] pb-[8cqh] pt-[2cqh]'>
      <VillaNamesScene
        lang={lang}
        copy={copy}
        groomName={groomName}
        brideName={brideName}
        introOffset={0}
      />

      <GoldDivider />

      <VillaDetailsScene
        lang={lang}
        copy={copy}
        dateParts={dateParts}
        venueName={isKh ? venue.kh : venue.en}
        venueAddress={wedding.venue_address}
      />

      {wedding.events && wedding.events.length > 0 && (
        <>
          <GoldDivider />
          <VillaEventsScene lang={lang} copy={copy} events={wedding.events} />
        </>
      )}

      {wedding.parents && (
        <>
          <GoldDivider />
          <VillaParentsScene
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
