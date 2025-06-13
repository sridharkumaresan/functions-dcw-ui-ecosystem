import { useMemo } from 'react';
import { createFluidStyle } from '../utils/createTypographyStylesFromTokens';
import { Preset, presetMap } from '../presets/presetMap';

/**
 * Returns an inline style object based on the given preset.
 */
export function useTypographyStyles(preset: Preset) {
  return useMemo(() => {
    const token = presetMap[preset];
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
