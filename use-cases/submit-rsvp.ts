import { WeddingRepository } from '@/domain/repositories/wedding-repository';
import { RSVPItem } from '@/domain/entities/rsvp';

export async function submitRSVP(
  repository: WeddingRepository,
  slug: string,
  rsvpData: Omit<RSVPItem, 'id' | 'created_at'>
): Promise<RSVPItem | null> {
  if (!rsvpData.guest_name || rsvpData.guest_name.trim() === '') {
    throw new Error('សូមបញ្ចូលឈ្មោះរបស់លោកអ្នក (Guest name is required)');
  }
  return await repository.addRSVP(slug, rsvpData);
}
