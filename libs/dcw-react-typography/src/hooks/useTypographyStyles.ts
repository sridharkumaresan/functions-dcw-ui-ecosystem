import { useMemo } from 'react';
import { createFluidStyle } from '../utils/createTypographyStylesFromTokens';
import { Preset, presetMap } from '../presets/presetMap';

/**
 * Returns an inline style object based on the given preset.
 */
export function useTypographyStyles(preset: Preset) {
  return useMemo(() => {
    const token = presetMap[preset];
    if (!token) {
      throw new Error(`useTypographyStyles: preset "${preset}" not found in presetMap`);
    }
    // Distinguish fluid vs static by checking for minSize
    if ('minSize' in token) {
      return createFluidStyle(token as any);
    }
    return {
      fontSize: token.fontSize,
      fontWeight: token.fontWeight,
      lineHeight: token.lineHeight,
    };
  }, [preset]);
}
