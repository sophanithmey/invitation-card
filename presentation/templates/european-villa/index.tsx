'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Wedding } from '@/domain/entities/wedding';
import { useLanguage } from '@/presentation/context/language-context';
import { formatWeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { splitBilingualLabel } from '@/use-cases/split-bilingual-label';
import { useVillaTimeline } from './use-villa-timeline';
import {
  VILLA_ASSETS,
  VILLA_COPY,
  VILLA_SCENE_DURATIONS_MS,
} from './villa-copy';
import { VillaArtwork } from './villa-artwork';
import { VillaControls, VillaViewMode } from './villa-controls';
import { VillaNamesScene } from './villa-names-scene';
import { VillaDetailsScene } from './villa-details-scene';
import { VillaEventsScene } from './villa-events-scene';
import { VillaParentsScene } from './villa-parents-scene';
import { VillaScrollFlow } from './villa-scroll-flow';
import './villa-animations.css';

interface EuropeanVillaTemplateProps {
  wedding: Wedding;
}

const INTRO_OFFSET_S = 1;

export const EuropeanVillaTemplate: React.FC<EuropeanVillaTemplateProps> = ({
  wedding,
}) => {
  const { lang } = useLanguage();
  const copy = VILLA_COPY[lang];
  const [mode, setMode] = useState<VillaViewMode>('auto');
  const timeline = useVillaTimeline(VILLA_SCENE_DURATIONS_MS);
  const isKh = lang === 'kh';

  const dateParts = useMemo(
    () => formatWeddingDateParts(wedding.wedding_date, lang),
    [wedding.wedding_date, lang],
  );
  const venue = splitBilingualLabel(wedding.venue);
  const groomName = isKh ? wedding.groom_name_kh : wedding.groom_name;
  const brideName = isKh ? wedding.bride_name_kh : wedding.bride_name;
  const isFirstRun = timeline.loop === 0;

  const toggleMode = () => {
    setMode((prev) => (prev === 'auto' ? 'scroll' : 'auto'));
  };

  return (
    <main className='relative flex min-h-svh items-center justify-center overflow-hidden bg-[#dfeaf3]'>
      <div className='absolute inset-0 hidden sm:block' aria-hidden='true'>
        <Image
          src={VILLA_ASSETS.scene}
          alt=''
          fill
          sizes='100vw'
          className='scale-110 object-cover opacity-70 blur-2xl'
        />
        <div className='absolute inset-0 bg-linear-to-b from-white/40 via-white/10 to-[#dfeaf3]/60' />
      </div>

      <h1 className='sr-only'>
        {copy.title}: {groomName} &amp; {brideName}
      </h1>
      <p className='sr-only'>
        {dateParts.weekday}, {dateParts.date}, {dateParts.time}.{' '}
        {isKh ? venue.kh : venue.en}, {wedding.venue_address}
      </p>

      <section
        key={timeline.runKey}
        lang={isKh ? 'km' : 'en'}
        aria-label={copy.title}
        data-paused={mode === 'auto' && !timeline.isPlaying}
        className='villa-stage relative h-svh w-full overflow-hidden bg-[#cfe2f0] sm:aspect-9/16 sm:h-[min(92svh,1080px)] sm:w-auto sm:rounded-[22px] sm:shadow-[0_30px_80px_-20px_rgba(47,84,112,0.45)] sm:ring-1 sm:ring-white/60'
      >
        <VillaArtwork />

        <div
          className='villa-text absolute inset-x-[6%] top-[6.5%] bottom-[8%] z-10 overflow-y-auto overscroll-contain px-[6%] scrollbar-thin [scrollbar-color:rgba(184,134,59,0.35)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b8863b]/35'
          data-phase={mode === 'scroll' ? 'in' : timeline.phase}
        >
          <div className='flex min-h-full flex-col justify-start py-2 sm:py-4'>
            {mode === 'scroll' ? (
              <VillaScrollFlow
                wedding={wedding}
                lang={lang}
                copy={copy}
                dateParts={dateParts}
                venue={venue}
                groomName={groomName}
                brideName={brideName}
              />
            ) : (
              <>
                {timeline.scene === 0 && (
                  <VillaNamesScene
                    key={`names-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    groomName={groomName}
                    brideName={brideName}
                    introOffset={isFirstRun ? INTRO_OFFSET_S : 0}
                  />
                )}
                {timeline.scene === 1 && (
                  <VillaDetailsScene
                    key={`details-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    dateParts={dateParts}
                    venueName={isKh ? venue.kh : venue.en}
                    venueAddress={wedding.venue_address}
                  />
                )}
                {timeline.scene === 2 && (
                  <VillaEventsScene
                    key={`events-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    events={wedding.events}
                  />
                )}
                {timeline.scene === 3 && (
                  <VillaParentsScene
                    key={`parents-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    parents={wedding.parents}
                    dressCode={wedding.dress_code}
                    hashtag={wedding.hashtag}
                  />
                )}
              </>
            )}
          </div>
        </div>

        <VillaControls
          copy={copy}
          sceneDurationsMs={VILLA_SCENE_DURATIONS_MS}
          scene={timeline.scene}
          loop={timeline.loop}
          runKey={timeline.runKey}
          isPlaying={timeline.isPlaying}
          mode={mode}
          onTogglePlay={timeline.togglePlay}
          onReplay={timeline.replay}
          onToggleMode={toggleMode}
        />
      </section>
    </main>
  );
};
