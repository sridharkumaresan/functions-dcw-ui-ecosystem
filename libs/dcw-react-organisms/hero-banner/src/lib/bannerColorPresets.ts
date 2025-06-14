export type BannerColorPresetKey =
  | 'stone'
  | 'orange'
  | 'mint'
  | 'lightTeal'
  | 'brightMint'
  | 'lightBlue'
  | 'lightClaret'
  | 'brightClaret'
  | 'brightPurple';

export interface BannerColorPreset {
  background: string;
  text: string;
}

export const bannerColorPresets: Record<
  BannerColorPresetKey,
  BannerColorPreset
> = {
  stone: { background: '#BEC9C9', text: '#00395D' }, // AAA dark-blue on stone
  orange: { background: '#FFC805', text: '#515151' }, // AA dark-grey on orange
  mint: { background: '#CDF5E8', text: '#001276' }, // AAA bright-blue on mint
  lightTeal: { background: '#007481', text: '#AFFDFD' }, // AA bright-mint on light-teal
  brightMint: { background: '#AFFDFD', text: '#007481' }, // AA dark teal on bright-mint
  lightBlue: { background: '#0076B6', text: '#FFFFFF' }, // AA white on light-blue
  lightClaret: { background: '#FFC9C9', text: '#752157' }, // AA dark-claret on light-claret
  brightClaret: { background: '#C7237A', text: '#FFFFFF' }, // AA white on bright-claret
  brightPurple: { background: '#5C15EB', text: '#E1C0E2' }, // AAA light-purple on bright-purple
};
