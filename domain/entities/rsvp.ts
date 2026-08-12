export interface RSVPItem {
  id: string;
  guest_name: string;
  guest_count: number;
  attendance: 'attending' | 'regret';
  meal_preference?: string;
  message?: string;
  created_at: string;
}
