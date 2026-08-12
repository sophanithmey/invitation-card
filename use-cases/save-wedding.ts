import { WeddingRepository } from '@/domain/repositories/wedding-repository';
import { Wedding } from '@/domain/entities/wedding';

export function generateSlug(brideName: string, groomName: string): string {
  const combined = `${brideName}-${groomName}`
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
  return combined || `wedding-${Date.now().toString(36)}`;
}

export async function saveWedding(
  repository: WeddingRepository,
  weddingData: Partial<Wedding>
): Promise<Wedding> {
  const now = new Date().toISOString();
  const bride = weddingData.bride_name || 'Bride';
  const groom = weddingData.groom_name || 'Groom';
  const slug = weddingData.slug || generateSlug(bride, groom);

  const completeWedding: Wedding = {
    id: weddingData.id || 'w-' + Date.now(),
    slug,
    groom_name: groom,
    bride_name: bride,
    groom_name_kh: weddingData.groom_name_kh || groom,
    bride_name_kh: weddingData.bride_name_kh || bride,
    wedding_date: weddingData.wedding_date || now,
    cover_photo: weddingData.cover_photo || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    groom_photo: weddingData.groom_photo || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    bride_photo: weddingData.bride_photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    story: weddingData.story || '',
    invitation_message: weddingData.invitation_message || 'សូមគោរពអញ្ជើញចូលរួមពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ',
    venue: weddingData.venue || 'Phnom Penh Grand Ballroom',
    venue_address: weddingData.venue_address || 'Phnom Penh, Cambodia',
    map_location: weddingData.map_location || 'https://maps.google.com',
    dress_code: weddingData.dress_code || '',
    hashtag: weddingData.hashtag || '',
    rsvp_enabled: weddingData.rsvp_enabled ?? true,
    gift_enabled: weddingData.gift_enabled ?? true,
    template_id: weddingData.template_id || 'khmer-luxury',
    theme: weddingData.theme || {
      primary_color: '#7A1624',
      secondary_color: '#D4AF37',
      accent_color: '#C59B27',
      background_color: '#FFF9EF',
      font_family: 'Moul',
      ornament_style: 'luxury-gold',
    },
    parents: weddingData.parents || {},
    gift_info: weddingData.gift_info,
    events: weddingData.events || [],
    gallery: weddingData.gallery || [],
    accommodations: weddingData.accommodations || [],
    transportations: weddingData.transportations || [],
    rsvps: weddingData.rsvps || [],
    created_at: weddingData.created_at || now,
    updated_at: now,
  };

  return await repository.save(completeWedding);
}
