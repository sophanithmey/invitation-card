'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { RevealSection } from '@/presentation/components/reveal/reveal-section';
import { HeroSection } from '@/presentation/components/hero/hero-section';
import { CoupleSection } from '@/presentation/components/couple/couple-section';
import { ParentsSection } from '@/presentation/components/parents/parents-section';
import { InvitationMessageSection } from '@/presentation/components/invitation/invitation-message';
import { EventsTimeline } from '@/presentation/components/events/events-timeline';
import { KhmerCountdown } from '@/presentation/components/countdown/khmer-countdown';
import { VenueSection } from '@/presentation/components/venue/venue-section';
import { GalleryGrid } from '@/presentation/components/gallery/gallery-grid';
import { LoveStorySection } from '@/presentation/components/story/love-story-section';
import { DressCodeSection } from '@/presentation/components/dress-code/dress-code-section';
import { GiftSection } from '@/presentation/components/gift/gift-section';
import { RSVPSection } from '@/presentation/components/rsvp/rsvp-section';
import { WishesSection } from '@/presentation/components/wishes/wishes-section';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';
import { WeddingPartySection } from '@/presentation/components/wedding-party/wedding-party-section';
import { PhotoUploadSection } from '@/presentation/components/photo-upload/photo-upload-section';

interface TemplateProps {
  wedding: Wedding;
  sections: VisibleSections;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const KhmerFloralTemplate: React.FC<TemplateProps> = ({ wedding, sections, onRSVPSubmit, onWishSubmit }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F5] via-[#FFF0EC] to-[#FFF8F5] text-[#331B20] relative overflow-x-hidden">
      {/* Ambient Glow Orbs - Floral Edition */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-rose-200/20 to-transparent rounded-full blur-[80px] animate-orb-float opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-gradient-to-tl from-pink-200/20 to-transparent rounded-full blur-[100px] animate-orb-pulse opacity-60" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[40%] right-[-20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-bl from-rose-100/30 to-transparent rounded-full blur-[60px] animate-orb-float opacity-50" style={{ animationDelay: '-10s', animationDuration: '30s' }} />
      </div>

      {/* Soft Rose Gradient Top Bar */}
      <div className="h-1 bg-gradient-to-r from-[#E8B4B8] via-[#F4D5D7] to-[#E8B4B8] relative z-10" />

      <div className="relative z-10 flex flex-col space-y-12 pb-12">
        <div className="animate-fade-in-up">
          {sections.showHero && <HeroSection wedding={wedding} />}
        </div>

        <RevealSection>{sections.showCouple && <CoupleSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={100}>{sections.showParents && <ParentsSection wedding={wedding} />}</RevealSection>
        <RevealSection>{sections.showWeddingParty && wedding.wedding_party && <WeddingPartySection party={wedding.wedding_party} />}</RevealSection>
        <RevealSection>{sections.showInvitation && <InvitationMessageSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={100}>{sections.showEvents && <EventsTimeline events={wedding.events} />}</RevealSection>
        <RevealSection>{sections.showCountdown && <KhmerCountdown targetDateStr={wedding.wedding_date} />}</RevealSection>
        <RevealSection delay={100}>{sections.showStory && <LoveStorySection story={wedding.story} />}</RevealSection>
        <RevealSection>{sections.showVenue && <VenueSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={100}>{sections.showGallery && <GalleryGrid gallery={wedding.gallery} />}</RevealSection>
        <RevealSection>{sections.showPhotoUpload && wedding.photo_upload_url && <PhotoUploadSection uploadUrl={wedding.photo_upload_url} />}</RevealSection>
        <RevealSection>{sections.showDressCode && <DressCodeSection dressCode={wedding.dress_code} />}</RevealSection>
        <RevealSection delay={100}>{sections.showGift && <GiftSection giftInfo={wedding.gift_info} enabled={wedding.gift_enabled} />}</RevealSection>
        <RevealSection>
          {sections.showWishes && (
            <WishesSection wishes={wedding.wishes} onWishSubmit={onWishSubmit} />
          )}
        </RevealSection>
        <RevealSection delay={100}>
          {sections.showRSVP && (
            <RSVPSection slug={wedding.slug} enabled={wedding.rsvp_enabled} onRSVPSubmit={onRSVPSubmit} existingRSVPs={wedding.rsvps} />
          )}
        </RevealSection>

        <RevealSection>
          <footer className="py-10 text-center font-khmer-kantumruuy glass-panel mx-4 rounded-3xl mt-12 mb-4 border-[#E8B4B8]/30">
            <KhmerOrnament variant="divider" className="mx-auto mb-4 text-[#E8B4B8]/70" />
            {wedding.hashtag && (
              <p className="text-xl sm:text-2xl font-bold text-[#E8B4B8] mb-6 tracking-wide drop-shadow-sm">{wedding.hashtag}</p>
            )}
            <p className="text-[#331B20]/40 text-xs">Khmer Floral Elegance Edition</p>
          </footer>
        </RevealSection>
      </div>
    </main>
  );
};
