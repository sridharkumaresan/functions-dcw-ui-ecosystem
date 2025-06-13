// libs/dcw-react-theme/src/lib/mergeTokens.spec.ts
import { mergeTokens, createThemeTokens, ThemeTokens } from './mergeTokens';
import { defaultColorTokens } from './colorTokens';
import { defaultSpacingTokens } from './spacingTokens';

describe('mergeTokens()', () => {
  it('returns defaults when no overrides are provided', () => {
    const defaults = { foo: 1, bar: 2 };
    expect(mergeTokens(defaults)).toEqual(defaults);
  });

  it('overwrites only the specified keys', () => {
    const defaults = { a: 1, b: 2, c: 3 };
    const overrides = { b: 20, c: 30 };
    expect(mergeTokens(defaults, overrides)).toEqual({ a: 1, b: 20, c: 30 });
  });
});

describe('createThemeTokens()', () => {
  it('builds default tokens when called without args', () => {
    const tokens: ThemeTokens = createThemeTokens();
    expect(tokens.colors).toEqual(defaultColorTokens);
    expect(tokens.spacing).toEqual(defaultSpacingTokens);
  });

  it('applies color and spacing overrides correctly', () => {
    const colorOverrides = { brandPrimary: '#123456' };
    const spacingOverrides = { md: 42 };
    const tokens: ThemeTokens = createThemeTokens(colorOverrides, spacingOverrides);
    expect(tokens.colors.brandPrimary).toBe('#123456');
    expect(tokens.spacing.md).toBe(42);
    // other values remain unchanged
    expect(tokens.colors.brandSecondary).toBe(defaultColorTokens.brandSecondary);
    expect(tokens.spacing.sm).toBe(defaultSpacingTokens.sm);
  });
});
