import { Wedding } from '@/domain/entities/wedding';

export interface VisibleSections {
  showHero: boolean;
  showCouple: boolean;
  showParents: boolean;
  showInvitation: boolean;
  showEvents: boolean;
  showCountdown: boolean;
  showVenue: boolean;
  showGallery: boolean;
  showStory: boolean;
  showDressCode: boolean;
  showRSVP: boolean;
  showGift: boolean;
  showAccommodation: boolean;
  showTransportation: boolean;
  showWishes: boolean;
  showWeddingParty: boolean;
  showPhotoUpload: boolean;
}

export function getVisibleSections(wedding: Wedding): VisibleSections {
  return {
    showHero: true,
    showCouple: Boolean(wedding.groom_photo || wedding.bride_photo || wedding.groom_name),
    showParents: Boolean(
      wedding.parents?.groom_father ||
        wedding.parents?.groom_mother ||
        wedding.parents?.bride_father ||
        wedding.parents?.bride_mother
    ),
    showInvitation: Boolean(wedding.invitation_message),
    showEvents: Array.isArray(wedding.events) && wedding.events.length > 0,
    showCountdown: Boolean(wedding.wedding_date),
    showVenue: Boolean(wedding.venue),
    showGallery: Array.isArray(wedding.gallery) && wedding.gallery.length > 0,
    showStory: Boolean(wedding.story && wedding.story.trim().length > 0),
    showDressCode: Boolean(wedding.dress_code && wedding.dress_code.trim().length > 0),
    showRSVP: Boolean(wedding.rsvp_enabled),
    showGift: Boolean(wedding.gift_enabled && wedding.gift_info?.account_number),
    showAccommodation: Array.isArray(wedding.accommodations) && wedding.accommodations.length > 0,
    showTransportation: Array.isArray(wedding.transportations) && wedding.transportations.length > 0,
    showWishes: true,
    showWeddingParty: Array.isArray(wedding.wedding_party) && wedding.wedding_party.length > 0,
    showPhotoUpload: Boolean(wedding.photo_upload_url),
  };
}
