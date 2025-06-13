import { tokens as fluentTokens } from '@fluentui/react-components';

export interface ColorTokens {
  brandPrimary: string;
  brandSecondary: string;
  neutralLight: string;
  neutralDark: string;
  // ...extend with additional semantic colors as needed
}

export const defaultColorTokens: ColorTokens = {
  brandPrimary: fluentTokens.colorPaletteBlueForeground2,
  brandSecondary: fluentTokens.colorPaletteBeigeForeground2,
  neutralLight: fluentTokens.colorNeutralBackground1,
  neutralDark: fluentTokens.colorNeutralForeground4,
};