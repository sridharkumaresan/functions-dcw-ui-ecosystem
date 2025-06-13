// src/lib/ThemeProvider.tsx
import React, { ReactNode, useMemo } from 'react';
import {
  FluentProvider,
  webLightTheme,
  PartialTheme,
  Theme as FluentTheme,
} from '@fluentui/react-components';
import { createThemeTokens, ThemeTokens } from './mergeTokens';
import { useThemeStaticStyles } from './themeCss';
import { ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: ReactNode;
  /** Fluent UI theme overrides */
  fluentThemeOverrides?: PartialTheme;
  /** Design-team color token overrides */
  colorOverrides?: Partial<ThemeTokens['colors']>;
  /** Design-team spacing token overrides */
  spacingOverrides?: Partial<ThemeTokens['spacing']>;
  fluentCssVarOverrides?: Record<string, string>;
}

/**
 * Wrap your app (or storybook) with this provider.
 * It injects:
 *  1. Global CSS vars for your tokens
 *  2. FluentProvider for component styling
 *  3. ThemeContext for hook-based consumption
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  fluentThemeOverrides = {},
  colorOverrides,
  spacingOverrides,
  fluentCssVarOverrides = {},
}) => {
  // Merge Fluent theme
  const mergedFluent: FluentTheme = useMemo(
    () => ({ ...webLightTheme, ...fluentThemeOverrides }),
    [fluentThemeOverrides]
  );

  // Create our design tokens
  const themeTokens: ThemeTokens = useMemo(
    () => createThemeTokens(colorOverrides, spacingOverrides),
    [colorOverrides, spacingOverrides]
  );

  // Static class for default CSS vars
  const staticClass = useThemeStaticStyles();

  // Inline style overrides for CSS vars
  const overrideStyles = useMemo(() => {
    const s: Record<string, any> = {};
    if (colorOverrides) {
      Object.entries(colorOverrides).forEach(([k, v]) => {
        s[`--color-${k}`] = v;
      });
    }
    if (spacingOverrides) {
      Object.entries(spacingOverrides).forEach(([k, v]) => {
        s[`--spacing-${k}`] = `${v}px`;
      });
    }
    if (fluentCssVarOverrides) {
      Object.entries(fluentCssVarOverrides).forEach(([k, v]) => {
        s[k] = v;
      });
    }
    return s;
  }, [colorOverrides, spacingOverrides]);

  return (
    <ThemeContext.Provider value={themeTokens}>
      <FluentProvider theme={mergedFluent} className={staticClass}>
        <div style={overrideStyles}>{children}</div>
      </FluentProvider>
    </ThemeContext.Provider>
  );
};
