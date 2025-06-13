import type { FluidToken } from '../tokens/typographyTokens';

export function createFluidStyle(token: FluidToken) {
  const { minSize, maxSize, unit, fontWeight, lineHeight } = token;
  return {
    fontSize: `clamp(${minSize}${unit}, ${minSize}${unit} + (${maxSize} - ${minSize}) * ((100vw - 480px) / (1024 - 480)), ${maxSize}${unit})`,
    fontWeight,
    lineHeight,
  } as const;
}
