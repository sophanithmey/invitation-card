import { Wedding } from '@/domain/entities/wedding';

export const KANHA_VICHEA_WEDDING: Wedding = {
  id: 'w-003',
  slug: 'kanha-vichea',
  groom_name: 'Vichea',
  bride_name: 'Kanha',
  groom_name_kh: 'វិជ្ជា',
  bride_name_kh: 'កញ្ញា',
  wedding_date: '2027-01-18T09:00:00.000Z',
  cover_photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
  groom_photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
  bride_photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
  invitation_message: 'សូមអញ្ជើញលោកអ្នកចូលរួមក្នុងទិវាដ៏វិសេសវិសាល និងពោរពេញដោយក្តីស្រឡាញ់នេះ។',
  venue: 'Rosewood Phnom Penh Grand Ballroom',
  venue_address: 'Vattanac Capital Tower, Monivong Blvd, Phnom Penh',
  map_location: 'https://maps.google.com/?q=Rosewood+Phnom+Penh',
  rsvp_enabled: true,
  gift_enabled: true,
  template_id: 'khmer-modern',
  theme: {
    primary_color: '#0D3B2E',
    secondary_color: '#E0A96D',
    accent_color: '#F0C987',
    background_color: '#0A1E17',
    card_bg_color: '#132E25',
    text_primary_color: '#F4F4F4',
    font_family: 'Battambang',
    ornament_style: 'modern-emerald',
    hero_style: 'full-cover',
    button_style: 'emerald-glow',
  },
  parents: {
    groom_father: 'លោក វិជ្ជា ប៊ុនធឿន',
    groom_mother: 'លោកស្រី ស៊ីណាត',
    bride_father: 'លោក កញ្ញា វិបុល',
    bride_mother: 'លោកស្រី ចាន់នី',
  },
  gift_info: {
    bank_name: 'ABA Bank',
    account_name: 'VICHEA & KANHA',
    account_number: '777 888 999',
    qr_code_url: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ABA_VICHEA_KANHA_777888999',
  },
  events: [
    {
      id: 'e-1',
      event_name: 'Main Wedding Party',
      event_name_kh: 'ពិធីពិសារភោជនីយអាហារ',
      date: '2027-01-18',
      start_time: '05:30 PM',
      venue: 'Rosewood Phnom Penh Grand Ballroom',
    },
  ],
  gallery: [
    { id: 'g-1', image_url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop', sort_order: 1 }
  ],
  created_at: '2026-08-03T00:00:00.000Z',
  updated_at: '2026-08-03T00:00:00.000Z',
  contact_info: {
    phone1: '012 555 666',
    phone2: '098 555 666',
  },
};
