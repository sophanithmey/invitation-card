import { Wedding } from '@/domain/entities/wedding';

export const SOKHA_DEVI_WEDDING: Wedding = {
  id: 'w-006',
  slug: 'sopheap-chanvadey',
  groom_name: 'Saing Sopheap',
  bride_name: 'Tin Chanvadey',
  groom_name_kh: 'សុភាព',
  bride_name_kh: 'ច័ន្ទវដ្តី',
  wedding_date: '2026-11-25T07:00:00.000Z',
  cover_photo: '/vadey/4.JPG',
  groom_photo:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  bride_photo:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  story:
    'We met at a coffee shop in Phnom Penh. It started with a simple "Hello" and turned into hours of conversation.',
  invitation_message:
    'យើងខ្ញុំមានកិត្តិយសសូមអញ្ជើញ ចូលរួមក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ',
  venue: 'មជ្ឈមណ្ឌល ឌឹ ព្រីមៀ សែនសុខ (The Premier Center Sen Sok)',
  venue_address:
    'អាគារ A, សាលមហោស្រព (Building A, Grand Ballroom, Phnom Penh)',
  map_location:
    'https://www.google.com/maps/search/?api=1&query=The+Premier+Center+Sen+Sok',
  map_embed_url:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5738875560934!2d104.881792!3d11.582352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095175962e2d93%3A0x6b4ef84c4a457599!2sThe%20Premier%20Centre%20Sen%20Sok!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
  dress_code:
    'Morning: Traditional Khmer (Gold, Cream, Rose). Evening: Formal Black Tie (Burgundy, Black, Silver).',
  hashtag: '#SokhaDeviWedding2026',
  rsvp_enabled: true,
  gift_enabled: true,
  template_id: 'khmer-romantic',
  theme: {
    primary_color: '#8B0000',
    secondary_color: '#D4AF37',
    accent_color: '#FDFBF7',
    background_color: '#FDFBF7',
    card_bg_color: '#FFFFFF',
    text_primary_color: '#2C1810',
    font_family: 'Playfair Display',
    ornament_style: 'luxury-gold',
  },
  parents: {
    groom_father: 'Mr. Chan Sothea',
    groom_mother: 'Mrs. Keo Bopha',
    bride_father: 'Mr. Sok Visal',
    bride_mother: 'Mrs. Lim Maly',
  },
  gift_info: {
    bank_name: 'ABA Bank',
    account_name: 'CHANVADEY TIN',
    account_number: '013 732 452',
    secondary_account_number: '600 566 363',
    qr_code_url:
      '00020101021129450016abaakhppxxx@abaa01096005663630208ABA Bank40600006abaP2P0112A6BA11641BF7020960056636303090137324520404Dual5204599953031165802KH5913CHANVADEY TIN6010Phnom Penh630436D5',
  },
  events: [
    {
      id: 'e1',
      event_name: "Groom's Procession",
      event_name_kh: 'ពិធីហែជំនូន',
      date: '2026-11-12T07:00:00.000Z',
      start_time: '07:00 AM',
      venue: "Bride's Residence",
      description:
        "The groom and his family parade to the bride's house bearing gifts.",
    },
    {
      id: 'e2',
      event_name: 'Wedding Banquet',
      event_name_kh: 'ពិធីពិសារភោជនីយអាហារ',
      date: '2026-11-12T17:00:00.000Z',
      start_time: '05:00 PM',
      venue: 'The Premier Center Sen Sok',
      description: 'Dinner, live music and celebration.',
    },
  ],
  gallery: [
    { id: 'g-1', image_url: '/vadey/1.JPG', caption: 'សម្លៀកបំពាក់ប្រពៃណីខ្មែរ • Khmer Traditional Dress', sort_order: 1 },
    { id: 'g-2', image_url: '/vadey/2.JPG', caption: 'Pre-wedding Photoshoot • ថតរូបត្រៀមអាពាហ៍ពិពាហ៍', sort_order: 2 },
    { id: 'g-3', image_url: '/vadey/3.JPG', caption: 'Sweet Moments • វេលាដ៏ផ្អែមល្ហែម', sort_order: 3 },
    { id: 'g-4', image_url: '/vadey/4.JPG', caption: 'Timeless Romance • សេចក្តីស្រឡាញ់អមតៈ', sort_order: 4 },
    { id: 'g-5', image_url: '/vadey/5.JPG', caption: 'Walking Together • ដំណើរជីវិតរួមគ្នា', sort_order: 5 },
    { id: 'g-6', image_url: '/vadey/6.JPG', caption: 'Forever & Always • ស្រឡាញ់ជារៀងរហូត', sort_order: 6 },
  ],
  created_at: '2026-03-01T00:00:00.000Z',
  updated_at: '2026-03-01T00:00:00.000Z',
  contact_info: {
    phone1: '0762199906',
    phone2: '0972199906',
    phone3: '0317879000',
  }
};
