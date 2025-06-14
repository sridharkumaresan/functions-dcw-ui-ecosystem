import type { BannerColorPresetKey } from './bannerColorPresets';

export type HeroLayout =
  | 'default' // V1: default (theme default color)
  | 'color' // V2: explicit color combo
  | 'fullImage' // V3: full-bleed background image
  | 'split' // V4: image + content, image on right
  | 'split-reverse'; // V4 alternate: image + content, image on left

export type HeroSize =
  | 'minimal' // V1–V4: “minimal” tall (e.g. 40vh)
  | 'compact'; // V5: compact version (e.g. 30vh)

export type HeroBackground =
  | { type: 'preset'; preset: BannerColorPresetKey }
  | { type: 'image'; url: string }
  | { type: 'none' };

export interface HeroBannerProps {
  /** Which layout to use (V1–V4) */
  layout?: HeroLayout;
  /** Height variant (V1–V4 minimal, V5 compact) */
  size?: HeroSize;
  /** Background source: preset color (V2), image (V3/V4), or none */
  background?: HeroBackground;
  /** Main heading text */
  title: string;
  /** Optional description/subtitle */
  subtitle?: string;
  /** Primary & secondary CTAs */
  primaryAction?: { label: string; onClick(): void };
  secondaryAction?: { label: string; onClick(): void };
  /** Inject arbitrary children (e.g. your SearchBar) */
  children?: React.ReactNode;
}
