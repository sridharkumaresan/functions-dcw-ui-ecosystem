import { makeStaticStyles } from '@griffel/react';
import { defaultColorTokens } from './colorTokens';
import { defaultSpacingTokens } from './spacingTokens';


export const useThemeStaticStyles = makeStaticStyles({
  ':root': {
    // Color variables
    '--color-brandPrimary': defaultColorTokens.brandPrimary,
    '--color-brandSecondary': defaultColorTokens.brandSecondary,
    '--color-neutralLight': defaultColorTokens.neutralLight,
    '--color-neutralDark': defaultColorTokens.neutralDark,
    // Spacing variables
    '--spacing-none': `${defaultSpacingTokens.none}px`,
    '--spacing-xs': `${defaultSpacingTokens.xs}px`,
    '--spacing-sm': `${defaultSpacingTokens.sm}px`,
    '--spacing-md': `${defaultSpacingTokens.md}px`,
    '--spacing-lg': `${defaultSpacingTokens.lg}px`,
    '--spacing-xl': `${defaultSpacingTokens.xl}px`,
  },
});