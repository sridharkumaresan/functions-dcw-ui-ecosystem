import { typographyTokens } from '../tokens/typographyTokens';

export const presetMap = {
  body1: typographyTokens.fluid.Body1,
  body2: typographyTokens.fluid.Body2,
  title: typographyTokens.fluid.Title,
  caption: typographyTokens.static.Caption,
} as const;

export type Preset = keyof typeof presetMap;