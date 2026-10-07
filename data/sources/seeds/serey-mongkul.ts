import { Wedding } from '@/domain/entities/wedding';

export const SEREY_MONGKUL_WEDDING: Wedding = {
  id: 'w-001',
  slug: 'serey-mongkul',
  groom_name: 'Mongkul',
  bride_name: 'Serey',
  groom_name_kh: 'មង្គល',
  bride_name_kh: 'សិរី',
  wedding_date: '2026-11-28T07:30:00.000Z',
  cover_photo:
    'https://tminspired.com/wp-content/uploads/2026/06/twin_willow_gardens_wedding-tminspired-Photography-184.jpg',
  groom_photo:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  bride_photo:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  story:
    'យើងបានជួបគ្នាកាលពី ៦ ឆ្នាំមុននៅសាកលវិទ្យាល័យ។ តាមរយៈការស្រឡាញ់ និងការយោគយល់គ្នា យើងបានសម្រេចចិត្តចាប់ដៃគ្នាបង្កើតគ្រួសារដ៏មានសុភមង្គលមួយនេះ។',
  invitation_message:
    'យើងខ្ញុំសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ។',
  venue: 'សណ្ឋាគារ ហ៊ីមលីយ ប្រ៊ីលាន (Himalaya Brilliant Grand Ballroom)',
  venue_address:
    'ផ្លូវ ៦០ម៉ែត្រ រាជធានីភ្នំពេញ (60m Street, Phnom Penh, Cambodia)',
  map_location: 'https://maps.google.com/?q=Phnom+Penh+Grand+Ballroom',
  map_embed_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.56860361208!2d104.90807572714243!3d11.541624898522332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950669d084013%3A0xc62269a912bbbc1b!2sAeon%20Mall%20Mean%20Chey!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
  photo_upload_url: 'https://photos.app.goo.gl/abcdefg12345',
  dress_code:
    'សម្លៀកបំពាក់ប្រពៃណីខ្មែរ ឬ ពណ៌មាស Champagne / ពណ៌ក្រហមទុំ (Khmer Traditional or Champagne Gold / Deep Burgundy)',
  hashtag: '#SereyMongkulWedding2026',
  rsvp_enabled: false,
  gift_enabled: true,
  template_id: 'khmer-luxury',
  theme: {
    primary_color: '#7A1624',
    secondary_color: '#D4AF37',
    accent_color: '#C59B27',
    background_color: '#FFF9EF',
    card_bg_color: '#FFFFFF',
    text_primary_color: '#2C1810',
    font_family: 'Moul',
    ornament_style: 'luxury-gold',
    hero_style: 'full-cover',
    button_style: 'gold-border',
  },
  parents: {
    groom_father: 'លោក ម៉ុង សុខា',
    groom_mother: 'លោកស្រី ចាន់ ធារី',
    bride_father: 'លោក សិរី វណ្ណៈ',
    bride_mother: 'លោកស្រី អ៊ុក សុភា',
    groom_parents_kh: 'លោក ម៉ុង សុខា & លោកស្រី ចាន់ ធារី',
    bride_parents_kh: 'លោក សិរី វណ្ណៈ & លោកស្រី អ៊ុក សុភា',
  },
  gift_info: {
    bank_name: 'ABA Bank',
    account_name: 'SEREY & MONGKUL WEDDING',
    account_number: '000 123 456',
    qr_code_url:
      'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ABA_SEREY_MONGKUL_000123456',
    secondary_bank_name: 'Wing Bank',
    secondary_account_name: 'SEREY & MONGKUL',
    secondary_account_number: '9988 7766 55',
    secondary_qr_code_url:
      'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=WING_SEREY_MONGKUL_9988776655',
  },
  events: [
    {
      id: 'e-1',
      event_name: 'Hai Chenoun',
      event_name_kh: 'ពិធីហែជំនូន',
      date: '2026-11-28',
      start_time: '07:00 AM',
      venue: "ភូមិគ្រឹះខាងស្រី (Bride's Residence)",
      description: 'ពិធីជួបជុំញាតិមិត្ត និងហែជំនូនតាមប្រពៃណីខ្មែរ',
      icon: 'gift',
    },
    {
      id: 'e-2',
      event_name: 'Kat Sok',
      event_name_kh: 'ពិធីកាត់សក់បង្កក់សិរី',
      date: '2026-11-28',
      start_time: '09:00 AM',
      venue: "ភូមិគ្រឹះខាងស្រី (Bride's Residence)",
      description: 'ពិធីកាត់សក់ និងសុំពរជ័យពីចាស់ទុំ',
      icon: 'scissors',
    },
    {
      id: 'e-3',
      event_name: 'Sompeah Phtim',
      event_name_kh: 'ពិធីសំពះផ្ទឹម',
      date: '2026-11-28',
      start_time: '10:30 AM',
      venue: "ភូមិគ្រឹះខាងស្រី (Bride's Residence)",
      description: 'ពិធីចងដៃ និងជ័យហង្ស',
      icon: 'heart',
    },
    {
      id: 'e-4',
      event_name: 'Evening Reception',
      event_name_kh: 'ពិធីពិសារភោជនីយអាហារ',
      date: '2026-11-28',
      start_time: '05:30 PM',
      venue: 'សណ្ឋាគារ ហ៊ីមលីយ ប្រ៊ីលាន (Himalaya Brilliant Grand Ballroom)',
      description: 'ពិធីពិសាភោជនីយអាហារ និងរាំលេងកំសាន្ត',
      icon: 'glass',
    },
  ],
  gallery: [
    {
      id: 'g-1',
      image_url:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      caption: 'Pre-wedding Photoshoot',
      sort_order: 1,
    },
    {
      id: 'g-2',
      image_url:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      caption: 'Khmer Traditional Attire',
      sort_order: 2,
    },
    {
      id: 'g-3',
      image_url:
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
      caption: 'Angkor Wat Memories',
      sort_order: 3,
    },
    {
      id: 'g-4',
      image_url:
        'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
      caption: 'Angkor Wat Memories',
      sort_order: 3,
    },
  ],
  rsvps: [
    {
      id: 'r-1',
      guest_name: 'សុខ ជា',
      guest_count: 2,
      attendance: 'attending',
      message: 'សូមជូនពរឱ្យមានសុភមង្គល និងស្រឡាញ់គ្នារហូត!',
      created_at: '2026-08-01',
    },
  ],
  wedding_party: [
    {
      id: 'wp-1',
      name: 'Vannak',
      name_kh: 'វណ្ណៈ',
      role: 'Best Man',
      role_kh: 'អ្នកកំដរ',
      photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      relation: 'Brother of the Groom'
    },
    {
      id: 'wp-2',
      name: 'Bopha',
      name_kh: 'បុប្ផា',
      role: 'Maid of Honor',
      role_kh: 'អ្នកកំដរ',
      photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      relation: 'Sister of the Bride'
    },
    {
      id: 'wp-3',
      name: 'Dara',
      name_kh: 'តារា',
      role: 'Groomsman',
      role_kh: 'អ្នកកំដរ',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      relation: 'Friend of the Groom'
    },
    {
      id: 'wp-4',
      name: 'Sokha',
      name_kh: 'សុខា',
      role: 'Bridesmaid',
      role_kh: 'អ្នកកំដរ',
      photo_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop',
      relation: 'Friend of the Bride'
    }
  ],
  created_at: '2026-08-01T00:00:00.000Z',
  updated_at: '2026-08-01T00:00:00.000Z',
  contact_info: {
    phone1: '012 888 999',
    phone2: '098 777 666',
  },
};
