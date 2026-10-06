'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { RevealSection } from '@/presentation/components/reveal/reveal-section';
import { EtheapWishes } from './etheap-wishes';
import { EtheapRsvp } from './etheap-rsvp';
import { KbachFrieze } from './etheap-ornaments';
import { EtheapHero } from './etheap-hero';
import { EtheapParents } from './etheap-parents';
import { EtheapCouple } from './etheap-couple';
import { EtheapCountdown } from './etheap-countdown';
import { EtheapAgenda } from './etheap-agenda';
import { EtheapVenue } from './etheap-venue';
import { EtheapGallery } from './etheap-gallery';
import { EtheapBankQr } from './etheap-bank-qr';
import { EtheapFooter } from './etheap-footer';

interface TemplateProps {
  wedding: Wedding;
  sections: VisibleSections;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const KhmerEtheapTemplate: React.FC<TemplateProps> = ({
  wedding,
  sections,
  onRSVPSubmit,
  onWishSubmit,
}) => {
  return (
    <main className='h-screen w-full bg-linear-to-b from-[#FAF7F2] via-[#F4EDE1] to-[#FAF7F2] flex items-center justify-center p-0 sm:p-4 overflow-hidden relative'>
      {/* Background Ambient Glow for Desktop */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden opacity-70'>
        <div className='absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 max-h-150 bg-linear-to-br from-[#EBC070]/35 to-transparent rounded-full blur-[100px]' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-175 max-h-175 bg-linear-to-tl from-[#C98C08]/25 to-transparent rounded-full blur-[120px]' />
      </div>

      {/* Centered Scrollable Invitation Card Container */}
      <div className='w-full max-w-md h-full sm:h-[94vh] sm:max-h-230 bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF6EE] text-[#4A351C] relative flex flex-col sm:rounded-[2.5rem] sm:border-2 sm:border-[#EBC070]/70 sm:shadow-[0_20px_60px_rgba(201,140,8,0.18)] overflow-hidden'>
        {/* Khmer Traditional Kbach Frieze Header Ribbon */}
        <div className='w-full shrink-0 relative z-20 bg-[#FAF4E6]/90 border-b border-[#EBC070]/60 py-0.5 shadow-2xs'>
          <KbachFrieze className='h-4 w-full text-[#C98C08]' />
        </div>

        {/* Scrollable Content inside the card */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden scroll-smooth relative z-10 flex flex-col space-y-4 pb-12 pt-2'>
          <div className='animate-fade-in-up'>
            {sections.showHero && <EtheapHero wedding={wedding} />}
          </div>

          <RevealSection>
            {sections.showParents && <EtheapParents wedding={wedding} />}
          </RevealSection>
          <RevealSection delay={50}>
            {sections.showCouple && <EtheapCouple wedding={wedding} />}
          </RevealSection>
          <RevealSection>
            {sections.showCountdown && (
              <EtheapCountdown targetDateStr={wedding.wedding_date} />
            )}
          </RevealSection>
          <RevealSection delay={50}>
            {sections.showEvents && <EtheapAgenda events={wedding.events} />}
          </RevealSection>
          <RevealSection>
            {sections.showVenue && <EtheapVenue wedding={wedding} />}
          </RevealSection>
          <RevealSection delay={50}>
            {sections.showGallery && (
              <EtheapGallery gallery={wedding.gallery} />
            )}
          </RevealSection>
          <RevealSection>
            {sections.showGift && (
              <EtheapBankQr
                giftInfo={wedding.gift_info}
                enabled={wedding.gift_enabled}
              />
            )}
          </RevealSection>

          <RevealSection delay={50}>
            {sections.showWishes && (
              <EtheapWishes
                wishes={wedding.wishes}
                onWishSubmit={onWishSubmit}
              />
            )}
          </RevealSection>

          <RevealSection delay={50}>
            {sections.showRSVP && (
              <EtheapRsvp
                slug={wedding.slug}
                enabled={wedding.rsvp_enabled}
                onRSVPSubmit={onRSVPSubmit}
                existingRSVPs={wedding.rsvps}
              />
            )}
          </RevealSection>

          <RevealSection>
            <EtheapFooter wedding={wedding} />
          </RevealSection>
        </div>
      </div>
    </main>
  );
};
