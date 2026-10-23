import { Wedding } from '@/domain/entities/wedding';

export const RITHY_SREYPOV_WEDDING: Wedding = {
  id: 'w-007',
  slug: 'rithy-sreypov',
  groom_name: 'Rithy',
  bride_name: 'Sreypov',
  groom_name_kh: 'ឫទ្ធី',
  bride_name_kh: 'ស្រីពៅ',
  wedding_date: '2026-12-19T07:00:00.000Z',
  cover_photo: '/templates/european-villa/villa-scene.webp',
  groom_photo: '/templates/european-villa/villa-scene.webp',
  bride_photo: '/templates/european-villa/villa-scene.webp',
  story:
    'From our first walk through the tranquil gardens of Siem Reap to a lifelong journey of shared dreams and boundless devotion.',
  invitation_message:
    'យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាអធិបតី និងជាសក្ខីភាពក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ',
  venue: 'វីឡា តូស្កាណា ហ្គាដិន រីសត (Villa Toscana Garden Resort)',
  venue_address: 'ផ្លូវលេខ ៦០ ក្រុងសៀមរាប (Road 60, Krong Siem Reap, Cambodia)',
  map_location: 'https://maps.google.com/?q=Siem+Reap+Cambodia',
  map_embed_url:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124441.5173926839!2d103.783856!3d13.363328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110168d99da1821%3A0x1b48b1153a49292b!2sSiem%20Reap!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
  dress_code: 'Pastel Garden Elegance • ពណ៌ផ្កាស្រស់បំព្រង និងសម្លៀកបំពាក់ប្រពៃណីខ្មែរ',
  hashtag: '#RithyAndSreypov2026',
  rsvp_enabled: true,
  gift_enabled: true,
  template_id: 'european-villa',
  theme: {
    primary_color: '#B8863B',
    secondary_color: '#4F7FA3',
    accent_color: '#F2B8A2',
    background_color: '#E4EEF5',
    card_bg_color: '#FFFFFF',
    text_primary_color: '#3E5A70',
    font_family: 'Great Vibes',
    ornament_style: 'watercolor-garden',
    hero_style: 'full-cover',
    button_style: 'gold-border',
  },
  parents: {
    groom_father: 'លោក សុខ វណ្ណា',
    groom_mother: 'លោកស្រី ចាន់ ធីតា',
    bride_father: 'លោក ហេង សុផល',
    bride_mother: 'លោកស្រី លី សុភី',
  },
  gift_info: {
    bank_name: 'ABA Bank',
    account_name: 'RITHY & SREYPOV',
    account_number: '001 888 666',
    qr_code_url:
      '00020101021129450016abaakhppxxx@abaa01096005663630208ABA Bank40600006abaP2P0112A6BA11641BF7020960056636303090018886660404Dual5204599953031165802KH5915RITHY SREYPOV6010Phnom Penh630436D5',
  },
  events: [
    {
      id: 'e-1',
      event_name: "Groom's Procession & Ring Blessing",
      event_name_kh: 'ពិធីហែជំនូន ពិធីសំពះផ្ទឹម និងបំពាក់ចិញ្ចៀន',
      date: '2026-12-19',
      start_time: '07:30 AM',
      venue: 'Villa Toscana Courtyard',
      description: 'Traditional Khmer morning ceremony and blessing under Tuscan garden arches.',
    },
    {
      id: 'e-2',
      event_name: 'Garden Soirée & Wedding Banquet',
      event_name_kh: 'ពិធីពិសារភោជនីយអាហារ និងរាំកម្សាន្ត',
      date: '2026-12-19',
      start_time: '05:30 PM',
      venue: 'Villa Toscana Grand Ballroom',
      description: 'An elegant evening banquet with dinner, live acoustics, and celebration.',
    },
  ],
  gallery: [
    {
      id: 'g-1',
      image_url: '/templates/european-villa/villa-scene.webp',
      caption: 'Villa Toscana Garden • វីឡា តូស្កាណា',
      sort_order: 1,
    },
  ],
  contact_info: {
    phone1: '012 888 999',
    phone2: '098 777 666',
  },
  created_at: '2026-10-21T00:00:00.000Z',
  updated_at: '2026-10-21T00:00:00.000Z',
};
