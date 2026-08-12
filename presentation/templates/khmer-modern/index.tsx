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
import { WeddingPartySection } from '@/presentation/components/wedding-party/wedding-party-section';
import { PhotoUploadSection } from '@/presentation/components/photo-upload/photo-upload-section';

interface TemplateProps {
  wedding: Wedding;
  sections: VisibleSections;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const KhmerModernTemplate: React.FC<TemplateProps> = ({ wedding, sections, onRSVPSubmit, onWishSubmit }) => {
  return (
    <main className="min-h-screen bg-[#080F0C] text-emerald-50 selection:bg-emerald-400/30 relative overflow-x-hidden">
      {/* Ambient Glow Orbs - Dark Edition */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-[100px] animate-orb-float opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full blur-[120px] animate-orb-pulse opacity-60" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[40%] right-[-20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-full blur-[80px] animate-orb-float opacity-50" style={{ animationDelay: '-10s', animationDuration: '30s' }} />
      </div>

      {/* Thin Top Accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent relative z-10" />

      <div className="relative z-10 flex flex-col space-y-12 pb-12">
        <div className="animate-fade-in-up">
          {sections.showHero && <HeroSection wedding={wedding} />}
        </div>

        <RevealSection>{sections.showCouple && <CoupleSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={80}>{sections.showParents && <ParentsSection wedding={wedding} />}</RevealSection>
        <RevealSection>{sections.showWeddingParty && wedding.wedding_party && <WeddingPartySection party={wedding.wedding_party} />}</RevealSection>
        <RevealSection>{sections.showInvitation && <InvitationMessageSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={80}>{sections.showEvents && <EventsTimeline events={wedding.events} />}</RevealSection>
        <RevealSection>{sections.showCountdown && <KhmerCountdown targetDateStr={wedding.wedding_date} />}</RevealSection>
        <RevealSection delay={80}>{sections.showStory && <LoveStorySection story={wedding.story} />}</RevealSection>
        <RevealSection>{sections.showVenue && <VenueSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={80}>{sections.showGallery && <GalleryGrid gallery={wedding.gallery} />}</RevealSection>
        <RevealSection>{sections.showPhotoUpload && wedding.photo_upload_url && <PhotoUploadSection uploadUrl={wedding.photo_upload_url} />}</RevealSection>
        <RevealSection>{sections.showDressCode && <DressCodeSection dressCode={wedding.dress_code} />}</RevealSection>
        <RevealSection delay={80}>{sections.showGift && <GiftSection giftInfo={wedding.gift_info} enabled={wedding.gift_enabled} />}</RevealSection>
        <RevealSection>
          {sections.showWishes && (
            <WishesSection wishes={wedding.wishes} onWishSubmit={onWishSubmit} />
          )}
        </RevealSection>
        <RevealSection delay={80}>
          {sections.showRSVP && (
            <RSVPSection slug={wedding.slug} enabled={wedding.rsvp_enabled} onRSVPSubmit={onRSVPSubmit} existingRSVPs={wedding.rsvps} />
          )}
        </RevealSection>

        <RevealSection>
          <footer className="py-10 text-center font-khmer-kantumruuy glass-panel-dark mx-4 rounded-3xl mt-12 mb-4">
            <div className="h-[1px] w-24 mx-auto mb-4 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
            {wedding.hashtag && (
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 mb-6 tracking-wide drop-shadow-sm">{wedding.hashtag}</p>
            )}
            <p className="text-emerald-300/40 text-xs tracking-widest uppercase">
              {wedding.groom_name} & {wedding.bride_name}
            </p>
            <p className="text-emerald-500/20 text-[10px] mt-2">Modern Emerald Edition</p>
          </footer>
        </RevealSection>
      </div>
    </main>
  );
};
