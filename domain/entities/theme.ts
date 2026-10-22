export interface ThemeSettings {
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  background_color: string;
  card_bg_color?: string;
  text_primary_color?: string;
  font_family: string;
  ornament_style:
    | 'luxury-gold'
    | 'watercolor-garden'
    | 'traditional-gold'
    | 'celestial-astrolabe';
  hero_style?: 'full-cover' | 'framed-card' | 'split-view';
  button_style?: 'gold-border' | 'solid-burgundy' | 'emerald-glow';
}
