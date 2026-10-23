export type PreviewDevice = 'full' | 'phone' | 'pc';

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
