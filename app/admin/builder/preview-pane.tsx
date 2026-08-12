'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { getVisibleSections } from '@/use-cases/get-visible-sections';
import { ThemeProvider } from '@/presentation/theme/theme-provider';
import { WeddingTemplateDispatcher } from '@/presentation/templates/template-dispatcher';

interface PreviewPaneProps {
  formData: Partial<Wedding>;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ formData }) => {
  const dummyWedding: Wedding = {
    id: formData.id || 'preview-id',
    slug: formData.slug || 'preview-slug',
    groom_name: formData.groom_name || 'Mongkul',
    bride_name: formData.bride_name || 'Serey',
    groom_name_kh: formData.groom_name_kh || 'ម៉ុងគុល',
    bride_name_kh: formData.bride_name_kh || 'សិរី',
    wedding_date: formData.wedding_date || new Date().toISOString(),
    cover_photo:
      formData.cover_photo ||
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    groom_photo:
      formData.groom_photo ||
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    bride_photo:
      formData.bride_photo ||
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    story: formData.story || 'រឿងរ៉ាវស្នេហារបស់យើងខ្ញុំ...',
    invitation_message: formData.invitation_message || 'សូមគោរពអញ្ជើញចូលរួម...',
    venue: formData.venue || 'Phnom Penh Ballroom',
    venue_address: formData.venue_address || 'Phnom Penh',
    map_location: formData.map_location || 'https://maps.google.com',
    dress_code: formData.dress_code || 'Khmer Traditional Gold',
    rsvp_enabled: formData.rsvp_enabled ?? true,
    gift_enabled: formData.gift_enabled ?? true,
    template_id: formData.template_id || 'khmer-luxury',
    theme: formData.theme || {
      primary_color: '#7A1624',
      secondary_color: '#D4AF37',
      accent_color: '#C59B27',
      background_color: '#FFF9EF',
      font_family: 'Moul',
      ornament_style: 'luxury-gold',
    },
    parents: formData.parents || {
      groom_parents_kh: 'លោក ម៉ុង សុខា & លោកស្រី ចាន់ ធារី',
      bride_parents_kh: 'លោក សិរី វណ្ណៈ & លោកស្រី អ៊ុក សុភា',
    },
    gift_info: formData.gift_info || {
      bank_name: 'ABA Bank',
      account_name: 'SEREY & MONGKUL',
      account_number: '000 123 456',
      qr_code_url:
        'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=PREVIEW',
    },
    events: formData.events || [
      {
        id: 'p-1',
        event_name: 'Khmer Ceremony',
        event_name_kh: 'ពិធីសំពះផ្ទឹម',
        date: '2026-11-28',
        start_time: '08:00 AM',
        venue: 'Bride Residence',
      },
    ],
    gallery: formData.gallery || [
      {
        id: 'g1',
        image_url:
          'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
        sort_order: 1,
      },
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const sections = getVisibleSections(dummyWedding);

  return (
    <div className='w-full h-full bg-slate-900 rounded-3xl p-3 border-4 border-amber-400 shadow-2xl overflow-hidden flex flex-col'>
      <div className='bg-slate-800 text-amber-300 text-xs px-4 py-2 flex items-center justify-between font-mono rounded-t-2xl'>
        <span>LIVE PREVIEW • /wedding/{dummyWedding.slug}</span>
        <span className='uppercase text-[10px] bg-amber-900/60 px-2 py-0.5 rounded border border-amber-500'>
          {dummyWedding.template_id}
        </span>
      </div>

      <div className='flex-1 overflow-y-auto rounded-b-2xl max-h-[750px]'>
        <ThemeProvider theme={dummyWedding.theme}>
          <WeddingTemplateDispatcher
            wedding={dummyWedding}
            sections={sections}
            onRSVPSubmit={async () => {}}
            onWishSubmit={async () => {}}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
