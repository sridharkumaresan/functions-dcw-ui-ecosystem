import { ColorTokens, defaultColorTokens } from "./colorTokens";
import { SpacingTokens, defaultSpacingTokens } from "./spacingTokens";

export function mergeTokens<T extends object>(
  defaults: Readonly<T>,
  overrides?: Partial<T>
): T {
  return { ...defaults, ...overrides } as T;
}

export interface ThemeTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
}

export function createThemeTokens(
  colorOverrides?: Partial<ColorTokens>,
  spacingOverrides?: Partial<SpacingTokens>
): ThemeTokens {
  const colors = mergeTokens(defaultColorTokens, colorOverrides);
  const spacing = mergeTokens(defaultSpacingTokens, spacingOverrides);
  return { colors, spacing };
}