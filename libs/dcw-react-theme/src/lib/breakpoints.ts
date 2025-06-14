export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';


export const breakpoints: Record<BreakpointKey, number> = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};


export const mediaQueries: Record<BreakpointKey, string> = Object.fromEntries(
  Object.entries(breakpoints).map(([key, px]) => [
    key,
    `@media screen and (min-width: ${px}px)`,
  ])
) as Record<BreakpointKey, string>;
