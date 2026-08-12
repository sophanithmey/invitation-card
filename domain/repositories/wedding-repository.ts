import { Wedding } from '../entities/wedding';
import { RSVPItem } from '../entities/rsvp';
import { WishItem } from '../entities/wish';

export interface WeddingRepository {
  getBySlug(slug: string): Promise<Wedding | null>;
  getAll(): Promise<Wedding[]>;
  save(wedding: Wedding): Promise<Wedding>;
  delete(id: string): Promise<boolean>;
  addRSVP(slug: string, rsvp: Omit<RSVPItem, 'id' | 'created_at'>): Promise<RSVPItem | null>;
  addWish(slug: string, wish: Omit<WishItem, 'id' | 'created_at'>): Promise<WishItem | null>;
}
