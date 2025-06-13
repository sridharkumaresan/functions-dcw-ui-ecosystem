export interface FluidToken {
  minSize: number;
  maxSize: number;
  unit: string;
  fontWeight: number;
  lineHeight: number;
}

export interface StaticToken {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}

export const typographyTokens: {
  fluid: Record<string, FluidToken>;
  static: Record<string, StaticToken>;
} = {
  fluid: {
    Body1: {
      minSize: 16,
      maxSize: 20,
      unit: 'px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    Body2: {
      minSize: 14,
      maxSize: 18,
      unit: 'px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    Title: {
      minSize: 24,
      maxSize: 32,
      unit: 'px',
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  static: {
    Caption: { fontSize: '12px', fontWeight: 400, lineHeight: 1.3 },
  },
};

export type TypographyTokens = typeof typographyTokens;
