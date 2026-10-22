export type PreviewDevice = 'pc' | 'tablet' | 'phone';

export interface TemplatePreviewItem {
  slug: string;
  names: string;
  style: string;
  desc: string;
  color: string;
  textColor: string;
  isMostUsed?: boolean;
  coverPhoto?: string;
  badgeLabel?: string;
  subtitle?: string;
}
