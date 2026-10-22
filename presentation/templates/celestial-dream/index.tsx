'use client';

import React, { useMemo } from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { useLanguage } from '@/presentation/context/language-context';
import { formatWeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { splitBilingualLabel } from '@/use-cases/split-bilingual-label';

import { CELESTIAL_COPY } from './celestial-copy';
import { CelestialIntroVideo } from './celestial-intro-video';
import { CelestialHero } from './celestial-hero';
import { CelestialCompass } from './celestial-compass';
import { CelestialCountdown } from './celestial-countdown';
import { CelestialIntroScene } from './celestial-intro-scene';
import { CelestialDetails } from './celestial-details';
import { CelestialTimeline } from './celestial-timeline';
import { CelestialStoryGallery } from './celestial-story-gallery';
import { CelestialDressCode } from './celestial-dresscode';
import { CelestialLocation } from './celestial-location';
import { CelestialGift } from './celestial-gift';
import { CelestialRSVP } from './celestial-rsvp';
import { CelestialFooter } from './celestial-footer';
import './celestial-animations.css';

interface CelestialDreamTemplateProps {
  wedding: Wedding;
  sections?: VisibleSections;
  onRSVPSubmit?: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit?: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const CelestialDreamTemplate: React.FC<CelestialDreamTemplateProps> = ({
  wedding,
  onRSVPSubmit = async () => {},
  onWishSubmit = async () => {},
}) => {
  const { lang } = useLanguage();
  const copy = CELESTIAL_COPY[lang];
  const isKh = lang === 'kh';

  const dateParts = useMemo(
    () => formatWeddingDateParts(wedding.wedding_date, lang),
    [wedding.wedding_date, lang],
  );
  const formattedDate = `${dateParts.weekday}, ${dateParts.date} • ${dateParts.time}`;
  const venue = splitBilingualLabel(wedding.venue);
  const venueName = isKh ? venue.kh : venue.en;

  const groomName = isKh ? wedding.groom_name_kh : wedding.groom_name;
  const brideName = isKh ? wedding.bride_name_kh : wedding.bride_name;

  return (
    <main
      className='celestial-root relative min-h-screen w-full overflow-x-hidden bg-[#0F1833] text-[#F8F7F3]'
      lang={isKh ? 'km' : 'en'}
    >
      {/* Intro Video Overlay */}
      <CelestialIntroVideo skipLabel={copy.skipIntro} />

      {/* Hero Portal Scene */}
      <CelestialHero
        groomName={groomName}
        brideName={brideName}
        dateStr={formattedDate}
        venueName={venueName}
        copy={copy}
        isKh={isKh}
      />

      {/* Rotating Astrolabe Compass Navigator */}
      <CelestialCompass copy={copy} isKh={isKh} />

      {/* Real-time Countdown Timer */}
      <CelestialCountdown
        weddingDateStr={wedding.wedding_date}
        copy={copy}
        isKh={isKh}
      />

      {/* Welcome Ivory Intro Scene */}
      <CelestialIntroScene
        invitationMessage={wedding.invitation_message}
        dateStr={formattedDate}
        venueName={venueName}
        copy={copy}
        isKh={isKh}
      />

      {/* The Big Day - Ceremony & Reception Details */}
      <CelestialDetails
        dateStr={formattedDate}
        venueName={venueName}
        venueAddress={wedding.venue_address}
        mapLocation={wedding.map_location}
        events={wedding.events}
        copy={copy}
        isKh={isKh}
      />

      {/* Weekend Timeline Schedule */}
      <CelestialTimeline
        events={wedding.events}
        copy={copy}
        isKh={isKh}
      />

      {/* Love Story & Photo Gallery */}
      <CelestialStoryGallery
        story={wedding.story}
        gallery={wedding.gallery}
        couplePhotos={{
          cover: wedding.cover_photo,
          groom: wedding.groom_photo,
          bride: wedding.bride_photo,
        }}
        copy={copy}
        isKh={isKh}
      />

      {/* Dress Code & Accommodations */}
      <CelestialDressCode
        dressCode={wedding.dress_code}
        accommodations={wedding.accommodations}
        copy={copy}
        isKh={isKh}
      />

      {/* Venue Location & Travel Tips */}
      <CelestialLocation
        venueName={venueName}
        venueAddress={wedding.venue_address}
        mapLocation={wedding.map_location}
        copy={copy}
        isKh={isKh}
      />

      {/* Gift Registry */}
      <CelestialGift
        giftInfo={wedding.gift_info}
        giftEnabled={wedding.gift_enabled}
        copy={copy}
        isKh={isKh}
      />

      {/* RSVP and Wishes Form */}
      <CelestialRSVP
        onRSVPSubmit={onRSVPSubmit}
        onWishSubmit={onWishSubmit}
        copy={copy}
        isKh={isKh}
      />

      {/* Starry Night Monogram Footer */}
      <CelestialFooter
        groomName={groomName}
        brideName={brideName}
        copy={copy}
        isKh={isKh}
      />
    </main>
  );
};
