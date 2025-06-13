import React, { createContext, useContext } from 'react';
import { createThemeTokens, ThemeTokens } from './mergeTokens';

// Default tokens (no overrides)
const defaultTokens = createThemeTokens();

/** React Context for theme tokens */
export const ThemeContext = createContext<ThemeTokens>(defaultTokens);

/** Hook to consume theme tokens */
export function useTheme(): ThemeTokens {
  return useContext(ThemeContext);
}