import { WeddingRepository } from '@/domain/repositories/wedding-repository';
import { WishItem } from '@/domain/entities/wish';

export async function submitWish(
  repository: WeddingRepository,
  slug: string,
  wishData: Omit<WishItem, 'id' | 'created_at'>
): Promise<WishItem | null> {
  if (!wishData.name || wishData.name.trim() === '') {
    throw new Error('សូមបញ្ចូលឈ្មោះរបស់លោកអ្នក (Name is required)');
  }
  if (!wishData.message || wishData.message.trim() === '') {
    throw new Error('សូមបញ្ចូលសារជូនពរ (Message is required)');
  }
  return await repository.addWish(slug, wishData);
}
