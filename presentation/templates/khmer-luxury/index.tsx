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

export const KhmerLuxuryTemplate: React.FC<TemplateProps> = ({ wedding, sections, onRSVPSubmit, onWishSubmit }) => {
  return (
    <main className="min-h-screen bg-[var(--bg-color,#FDFBF7)] text-[var(--text-primary)] relative kbac-bg-pattern overflow-x-hidden">
      {/* Ambient Glow Orbs - Fixed Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-[80px] animate-orb-float opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-gradient-to-tl from-[#8B0000]/10 to-transparent rounded-full blur-[100px] animate-orb-pulse opacity-60" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[40%] right-[-20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-[60px] animate-orb-float opacity-50" style={{ animationDelay: '-10s', animationDuration: '30s' }} />
      </div>

      {/* Gradient Crown Bar */}
      <div className="h-1.5 bg-linear-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000] relative z-10" />

      <div className="relative z-10 flex flex-col space-y-12 pb-12">
        <div className="animate-fade-in-up">
          {sections.showHero && <HeroSection wedding={wedding} />}
        </div>

        <RevealSection>{sections.showParents && <ParentsSection wedding={wedding} />}</RevealSection>
        <RevealSection delay={100}>{sections.showCouple && <CoupleSection wedding={wedding} />}</RevealSection>
        <RevealSection>{sections.showWeddingParty && wedding.wedding_party && <WeddingPartySection party={wedding.wedding_party} />}</RevealSection>
        <RevealSection delay={50}>{sections.showInvitation && <InvitationMessageSection wedding={wedding} />}</RevealSection>
        <RevealSection>{sections.showCountdown && <KhmerCountdown targetDateStr={wedding.wedding_date} />}</RevealSection>
        <RevealSection delay={100}>{sections.showEvents && <EventsTimeline events={wedding.events} />}</RevealSection>
        <RevealSection>{sections.showStory && <LoveStorySection story={wedding.story} />}</RevealSection>
        <RevealSection delay={50}>{sections.showVenue && <VenueSection wedding={wedding} />}</RevealSection>
        <RevealSection>{sections.showGallery && <GalleryGrid gallery={wedding.gallery} />}</RevealSection>
        <RevealSection delay={50}>{sections.showPhotoUpload && wedding.photo_upload_url && <PhotoUploadSection uploadUrl={wedding.photo_upload_url} />}</RevealSection>
        <RevealSection delay={100}>{sections.showDressCode && <DressCodeSection dressCode={wedding.dress_code} />}</RevealSection>
        <RevealSection>{sections.showGift && <GiftSection giftInfo={wedding.gift_info} enabled={wedding.gift_enabled} />}</RevealSection>
        <RevealSection delay={50}>
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
          <footer className="pt-14 pb-8 text-center border-t border-[#D4AF37]/30 text-xs font-khmer-kantumruuy glass-panel mx-4 rounded-3xl mt-12 mb-4">
            <KhmerOrnament variant="crest" className="mx-auto mb-4 text-[#D4AF37]" />
            {wedding.hashtag && (
              <p className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-6 tracking-wide drop-shadow-sm">{wedding.hashtag}</p>
            )}
            <p className="gold-shimmer-text font-khmer-moul text-base">{wedding.groom_name_kh} & {wedding.bride_name_kh}</p>
            <p className="text-slate-500 mt-2">© 2026 Khmer Luxury Wedding</p>
          </footer>
        </RevealSection>
      </div>
    </main>
  );
};
