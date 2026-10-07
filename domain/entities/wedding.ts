import { WeddingEvent } from './event';
import { GalleryItem } from './gallery';
import { RSVPItem } from './rsvp';
import { WishItem } from './wish';
import { ThemeSettings } from './theme';
import {
  ParentsInfo,
  GiftInfo,
  ContactInfo,
  Accommodation,
  Transportation,
} from './details';
import { WeddingPartyMember } from './wedding-party';

export interface Wedding {
  id: string;
  slug: string;
  groom_name: string;
  bride_name: string;
  groom_name_kh: string;
  bride_name_kh: string;
  wedding_date: string; // ISO date string
  cover_photo: string;
  groom_photo: string;
  bride_photo: string;
  story?: string;
  invitation_message: string;
  venue: string;
  venue_address: string;
  map_location: string; // Google Maps URL or embed
  dress_code?: string;
  hashtag?: string;
  rsvp_enabled: boolean;
  gift_enabled: boolean;
  template_id:
    | 'khmer-luxury'
    | 'khmer-classic'
    | 'khmer-modern'
    | 'khmer-floral'
    | 'khmer-etheap'
    | 'khmer-romantic';
  theme: ThemeSettings;
  parents: ParentsInfo;
  gift_info?: GiftInfo;
  contact_info?: ContactInfo;
  events: WeddingEvent[];
  gallery: GalleryItem[];
  wedding_party?: WeddingPartyMember[];
  photo_upload_url?: string;
  map_embed_url?: string;
  accommodations?: Accommodation[];
  transportations?: Transportation[];
  rsvps?: RSVPItem[];
  wishes?: WishItem[];
  created_at: string;
  updated_at: string;
}
