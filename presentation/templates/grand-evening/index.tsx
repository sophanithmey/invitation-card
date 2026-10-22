'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { useLanguage } from '@/presentation/context/language-context';
import { formatWeddingDateParts } from '@/use-cases/format-wedding-date-parts';
import { splitBilingualLabel } from '@/use-cases/split-bilingual-label';

import { GRAND_EVENING_CONTENT } from './grand-evening';
import { GrandEveningIntroVideo } from './grand-evening-intro-video';
import { GrandEveningHeader } from './grand-evening-header';
import { GrandEveningHero } from './grand-evening-hero';
import { GrandEveningInvitation } from './grand-evening-invitation';
import { GrandEveningCountdown } from './grand-evening-countdown';
import { GrandEveningVenueActs } from './grand-evening-venue-acts';
import { GrandEveningProgram } from './grand-evening-program';
import { GrandEveningDressCode } from './grand-evening-dresscode';
import { GrandEveningMenu } from './grand-evening-menu';
import { GrandEveningTravel } from './grand-evening-travel';
import { GrandEveningRSVP } from './grand-evening-rsvp';
import { GrandEveningFinale } from './grand-evening-finale';
import './grand-evening.css';

interface GrandEveningTemplateProps {
  wedding: Wedding;
  sections?: VisibleSections;
  onRSVPSubmit?: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit?: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

const SECTION_KEYS = [
  'hero',
  'invitation',
  'countdown',
  'venue',
  'program',
  'dress-code',
  'menu',
  'travel',
  'rsvp',
  'finale',
];

export const GrandEveningTemplate: React.FC<GrandEveningTemplateProps> = ({
  wedding,
  onRSVPSubmit = async () => {},
  onWishSubmit = async () => {},
}) => {
  const { lang } = useLanguage();
  const copy = GRAND_EVENING_CONTENT[lang];
  const isKh = lang === 'kh';

  const [activeSection, setActiveSection] = useState('hero');

  // Track currently active section with IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of SECTION_KEYS) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dateParts = useMemo(
    () => formatWeddingDateParts(wedding.wedding_date, lang),
    [wedding.wedding_date, lang],
  );
  const formattedDate = isKh
    ? `${dateParts.weekday} ទី${dateParts.date} • ${dateParts.time}`
    : dateParts.date.toUpperCase();

  const venue = splitBilingualLabel(wedding.venue);
  const venueName = isKh ? venue.kh : venue.en;

  const groomName = isKh ? wedding.groom_name_kh : wedding.groom_name;
  const brideName = isKh ? wedding.bride_name_kh : wedding.bride_name;

  return (
    <main
      className='grand-evening-root relative min-h-screen w-full overflow-x-hidden bg-[#0B0807] text-[#F2EBDD]'
      lang={isKh ? 'km' : 'en'}
    >
      {/* Cinematic Intro Video Overlay */}
      <GrandEveningIntroVideo skipLabel={copy.intro.skip} isKh={isKh} />

      {/* Sticky Header with Section Tracker & Drawer Menu */}
      <GrandEveningHeader
        activeSection={activeSection}
        copy={copy}
        isKh={isKh}
      />

      {/* 01 Curtain Hero */}
      <GrandEveningHero
        groomName={groomName}
        brideName={brideName}
        dateStr={formattedDate}
        venueName={venueName}
        copy={copy}
        isKh={isKh}
      />

      {/* 02 The Invitation */}
      <GrandEveningInvitation copy={copy} isKh={isKh} />

      {/* 03 Countdown */}
      <GrandEveningCountdown
        weddingDateStr={wedding.wedding_date}
        copy={copy}
        isKh={isKh}
      />

      {/* 04 The Venue (Acts) */}
      <GrandEveningVenueActs copy={copy} isKh={isKh} />

      {/* 05 The Evening Program */}
      <GrandEveningProgram events={wedding.events} copy={copy} isKh={isKh} />

      {/* 06 Dress Code */}
      <GrandEveningDressCode
        dressCode={wedding.dress_code}
        copy={copy}
        isKh={isKh}
      />

      {/* 07 The Dinner (Menu) */}
      <GrandEveningMenu copy={copy} isKh={isKh} />

      {/* 08 Travel & Stay */}
      <GrandEveningTravel
        mapLocation={wedding.map_location}
        copy={copy}
        isKh={isKh}
      />

      {/* 09 RSVP & Wishes */}
      <GrandEveningRSVP
        onRSVPSubmit={onRSVPSubmit}
        onWishSubmit={onWishSubmit}
        copy={copy}
        isKh={isKh}
      />

      {/* 10 Finale / Closing */}
      <GrandEveningFinale
        groomName={groomName}
        brideName={brideName}
        copy={copy}
        isKh={isKh}
      />
    </main>
  );
};
