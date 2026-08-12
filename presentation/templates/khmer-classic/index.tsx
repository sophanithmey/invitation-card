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
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

interface TemplateProps {
  wedding: Wedding;
  sections: VisibleSections;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const KhmerClassicTemplate: React.FC<TemplateProps> = ({ wedding, sections, onRSVPSubmit, onWishSubmit }) => {
  // A wrapper to create the physical card look for each section
  const CardWrapper = ({ children, delay = 0, show }: { children: React.ReactNode, delay?: number, show: boolean }) => {
    if (!show) return null;
    return (
      <RevealSection delay={delay}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-y border-[#D4AF37]/40 my-6 relative overflow-hidden w-full">
          <div className="py-8">
            {children}
          </div>
        </div>
      </RevealSection>
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#2C1810] shadow-[0_0_60px_rgba(0,0,0,0.15)] relative overflow-x-hidden kbac-bg-pattern">
      {/* Subtle overlay to soften the pattern */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-[80px] animate-orb-float opacity-60" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-gradient-to-tl from-[#8B0000]/10 to-transparent rounded-full blur-[100px] animate-orb-pulse opacity-50" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="relative z-10 flex flex-col space-y-4 pb-16">
        {/* Hero Section stands alone, not in a card */}
        <div className="animate-fade-in-up pb-8">
          {sections.showHero && <HeroSection wedding={wedding} />}
        </div>

        {/* Reordered Card Sections */}
        <CardWrapper show={sections.showInvitation}>
          <InvitationMessageSection wedding={wedding} />
        </CardWrapper>

        <CardWrapper show={sections.showCouple} delay={50}>
          <CoupleSection wedding={wedding} />
        </CardWrapper>

        <CardWrapper show={sections.showParents} delay={100}>
          <ParentsSection wedding={wedding} />
        </CardWrapper>

        <CardWrapper show={sections.showWeddingParty} delay={50}>
          <WeddingPartySection party={wedding.wedding_party || []} />
        </CardWrapper>

        {sections.showCountdown && (
          <RevealSection delay={50}>
            <div className="my-12">
              <KhmerCountdown targetDateStr={wedding.wedding_date} />
            </div>
          </RevealSection>
        )}

        <CardWrapper show={sections.showEvents}>
          <EventsTimeline events={wedding.events} />
        </CardWrapper>

        <CardWrapper show={sections.showVenue} delay={50}>
          <VenueSection wedding={wedding} />
        </CardWrapper>

        <CardWrapper show={sections.showDressCode}>
          <DressCodeSection dressCode={wedding.dress_code} />
        </CardWrapper>

        <CardWrapper show={sections.showGallery} delay={50}>
          <GalleryGrid gallery={wedding.gallery} />
        </CardWrapper>

        <CardWrapper show={sections.showPhotoUpload} delay={50}>
          <PhotoUploadSection uploadUrl={wedding.photo_upload_url || ''} />
        </CardWrapper>

        <CardWrapper show={sections.showStory}>
          <LoveStorySection story={wedding.story} />
        </CardWrapper>

        <CardWrapper show={sections.showGift} delay={50}>
          <GiftSection giftInfo={wedding.gift_info} enabled={wedding.gift_enabled} />
        </CardWrapper>

        <CardWrapper show={sections.showWishes} delay={50}>
          <WishesSection wishes={wedding.wishes} onWishSubmit={onWishSubmit} />
        </CardWrapper>

        <CardWrapper show={sections.showRSVP}>
          <RSVPSection slug={wedding.slug} enabled={wedding.rsvp_enabled} onRSVPSubmit={onRSVPSubmit} existingRSVPs={wedding.rsvps} />
        </CardWrapper>

        <RevealSection>
          <footer className="py-12 text-center font-khmer-kantumruuy mx-6 mt-8">
            <KhmerOrnament variant="divider" className="mx-auto mb-6 text-[#D4AF37]/80" />
            {wedding.hashtag && (
              <p className="text-xl font-bold text-[#D4AF37] mb-4 tracking-wide">{wedding.hashtag}</p>
            )}
            <p className="text-sm font-semibold text-[#8B0000]/80">អរគុណសម្រាប់ការចូលរួម</p>
            <p className="text-xs text-[#2C1810]/50 mt-2">Khmer Classic Template</p>
          </footer>
        </RevealSection>
      </div>
    </main>
  );
};
