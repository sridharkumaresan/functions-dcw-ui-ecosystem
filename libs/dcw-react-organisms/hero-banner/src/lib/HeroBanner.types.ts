export type HeroBannerVariant = 'center' | 'split';

export interface HeroBannerAction {
  label: string;
  onClick: () => void;
}

export interface HeroBannerProps {
  /** Background image URL */
  imageUrl: string;
  /** Main heading text */
  title: string;
  /** Optional subtitle underneath */
  subtitle?: string;
  /** Primary and secondary call-to-actions */
  primaryAction?: HeroBannerAction;
  secondaryAction?: HeroBannerAction;
  /** Layout variant */
  variant?: HeroBannerVariant;
  /** Semi-opaque overlay color */
  overlayColor?: string;
}
