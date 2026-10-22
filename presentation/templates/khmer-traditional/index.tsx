'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Wedding } from '@/domain/entities/wedding';
import { useLanguage } from '@/presentation/context/language-context';
import { formatWeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { splitBilingualLabel } from '@/use-cases/split-bilingual-label';
import { useVillaTimeline } from '../european-villa/use-villa-timeline';
import {
  TRADITIONAL_ASSETS,
  TRADITIONAL_COPY,
  TRADITIONAL_SCENE_DURATIONS_MS,
} from './traditional-copy';
import { TraditionalArtwork } from './traditional-artwork';
import { TraditionalControls, TraditionalViewMode } from './traditional-controls';
import { TraditionalNamesScene } from './traditional-names-scene';
import { TraditionalDetailsScene } from './traditional-details-scene';
import { TraditionalEventsScene } from './traditional-events-scene';
import { TraditionalParentsScene } from './traditional-parents-scene';
import { TraditionalScrollFlow } from './traditional-scroll-flow';
import './traditional-animations.css';

interface KhmerTraditionalTemplateProps {
  wedding: Wedding;
}

const INTRO_OFFSET_S = 0.8;

export const KhmerTraditionalTemplate: React.FC<KhmerTraditionalTemplateProps> = ({
  wedding,
}) => {
  const { lang } = useLanguage();
  const copy = TRADITIONAL_COPY[lang];
  const [mode, setMode] = useState<TraditionalViewMode>('auto');
  const timeline = useVillaTimeline(TRADITIONAL_SCENE_DURATIONS_MS);
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
    <main className='relative flex min-h-svh items-center justify-center overflow-hidden bg-[#240407]'>
      {/* Ambient Blurred Desktop Background */}
      <div className='absolute inset-0 hidden sm:block' aria-hidden='true'>
        <Image
          src={TRADITIONAL_ASSETS.arch}
          alt=''
          fill
          sizes='100vw'
          className='scale-110 object-cover opacity-50 blur-2xl'
        />
        <div className='absolute inset-0 bg-radial from-black/20 via-black/60 to-[#1a0204]' />
      </div>

      <h1 className='sr-only'>
        {copy.matrimony}: {groomName} &amp; {brideName}
      </h1>
      <p className='sr-only'>
        {dateParts.weekday}, {dateParts.date}, {dateParts.time}.{' '}
        {isKh ? venue.kh : venue.en}, {wedding.venue_address}
      </p>

      {/* Royal 9:16 Video Stage */}
      <section
        key={timeline.runKey}
        lang={isKh ? 'km' : 'en'}
        aria-label={copy.matrimony}
        data-paused={mode === 'auto' && !timeline.isPlaying}
        className='traditional-stage relative h-svh w-full overflow-hidden bg-[#3b080f] sm:aspect-[9/16] sm:h-[min(92svh,1080px)] sm:w-auto sm:rounded-[24px] sm:shadow-[0_30px_90px_rgba(0,0,0,0.85)] sm:ring-1 sm:ring-[#d4af37]/40'
      >
        <TraditionalArtwork scene={timeline.scene} mode={mode} />

        {/* Scrollable Text Area */}
        <div
          className='traditional-text absolute inset-x-[6%] top-[6.5%] bottom-[8%] z-10 overflow-y-auto overscroll-contain px-[6%] scrollbar-thin [scrollbar-color:rgba(212,175,55,0.4)_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d4af37]/40'
          data-phase={mode === 'scroll' ? 'in' : timeline.phase}
        >
          <div className='flex min-h-full flex-col justify-start py-2 sm:py-4'>
            {mode === 'scroll' ? (
              <TraditionalScrollFlow
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
                  <TraditionalNamesScene
                    key={`names-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    groomName={groomName}
                    brideName={brideName}
                    introOffset={isFirstRun ? INTRO_OFFSET_S : 0}
                  />
                )}
                {timeline.scene === 1 && (
                  <TraditionalDetailsScene
                    key={`details-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    dateParts={dateParts}
                    venueName={isKh ? venue.kh : venue.en}
                    venueAddress={wedding.venue_address}
                  />
                )}
                {timeline.scene === 2 && (
                  <TraditionalEventsScene
                    key={`events-${timeline.loop}`}
                    lang={lang}
                    copy={copy}
                    events={wedding.events}
                  />
                )}
                {timeline.scene === 3 && (
                  <TraditionalParentsScene
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

        {/* Playback & Mode Controls */}
        <TraditionalControls
          copy={copy}
          sceneDurationsMs={TRADITIONAL_SCENE_DURATIONS_MS}
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
