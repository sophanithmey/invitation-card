import { WeddingRepository } from '@/domain/repositories/wedding-repository';
import { Wedding } from '@/domain/entities/wedding';

export async function getWeddingBySlug(
  repository: WeddingRepository,
  slug: string
): Promise<Wedding | null> {
  if (!slug || slug.trim() === '') {
    return null;
  }
  return await repository.getBySlug(slug.trim());
}
