import { WeddingRepository } from '@/domain/repositories/wedding-repository';
import { Wedding } from '@/domain/entities/wedding';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { SEED_WEDDINGS } from '../sources/seed-weddings';

const STORAGE_KEY = 'khmer_wedding_platform_db_v1';

export class LocalWeddingRepository implements WeddingRepository {
  private getStorage(): Wedding[] {
    if (typeof window === 'undefined') {
      return SEED_WEDDINGS;
    }
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_WEDDINGS));
        return SEED_WEDDINGS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_WEDDINGS;
    }
  }

  private saveStorage(weddings: Wedding[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(weddings));
    }
  }

  async getBySlug(slug: string): Promise<Wedding | null> {
    const list = this.getStorage();
    const found = list.find((w) => w.slug.toLowerCase() === slug.toLowerCase());
    return found || null;
  }

  async getAll(): Promise<Wedding[]> {
    return this.getStorage();
  }

  async save(wedding: Wedding): Promise<Wedding> {
    const list = this.getStorage();
    const existingIndex = list.findIndex((w) => w.id === wedding.id);
    let updatedList: Wedding[];

    if (existingIndex >= 0) {
      updatedList = [...list];
      updatedList[existingIndex] = { ...wedding, updated_at: new Date().toISOString() };
    } else {
      updatedList = [wedding, ...list];
    }

    this.saveStorage(updatedList);
    return wedding;
  }

  async delete(id: string): Promise<boolean> {
    const list = this.getStorage();
    const filtered = list.filter((w) => w.id !== id);
    this.saveStorage(filtered);
    return true;
  }

  async addRSVP(slug: string, rsvpData: Omit<RSVPItem, 'id' | 'created_at'>): Promise<RSVPItem | null> {
    const list = this.getStorage();
    const wedding = list.find((w) => w.slug.toLowerCase() === slug.toLowerCase());
    if (!wedding) return null;

    const newRSVP: RSVPItem = {
      ...rsvpData,
      id: 'rsvp-' + Date.now(),
      created_at: new Date().toISOString(),
    };

    const updatedWedding: Wedding = {
      ...wedding,
      rsvps: [newRSVP, ...(wedding.rsvps || [])],
      updated_at: new Date().toISOString(),
    };

    await this.save(updatedWedding);
    return newRSVP;
  }

  async addWish(slug: string, wishData: Omit<WishItem, 'id' | 'created_at'>): Promise<WishItem | null> {
    const list = this.getStorage();
    const wedding = list.find((w) => w.slug.toLowerCase() === slug.toLowerCase());
    if (!wedding) return null;

    const newWish: WishItem = {
      ...wishData,
      id: 'wish-' + Date.now(),
      created_at: new Date().toISOString(),
    };

    const updatedWedding: Wedding = {
      ...wedding,
      wishes: [newWish, ...(wedding.wishes || [])],
      updated_at: new Date().toISOString(),
    };

    await this.save(updatedWedding);
    return newWish;
  }
}

export const weddingRepository = new LocalWeddingRepository();
