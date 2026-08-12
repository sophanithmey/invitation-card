export interface WeddingEvent {
  id: string;
  event_name: string;
  event_name_kh: string;
  date: string;
  start_time: string;
  end_time?: string;
  venue: string;
  address?: string;
  description?: string;
  icon?: string;
}
