import React from 'react';
import { render } from '@testing-library/react';
import { useTheme } from './ThemeContext';
import { createThemeTokens } from './mergeTokens';
import { ThemeProvider } from './ThemeProvider';

const TestComponent = () => {
  const theme = useTheme();
  return <div data-testid="theme">{JSON.stringify(theme)}</div>;
};

describe('<ThemeProvider> + useTheme()', () => {
  it('provides default tokens when no overrides are set', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    const value = JSON.parse(getByTestId('theme').textContent!);
    expect(value).toEqual(createThemeTokens());
  });

  it('reflects color and spacing overrides in context', () => {
    const colorOverrides = { neutralDark: '#abcdef' };
    const spacingOverrides = { lg: 99 };
    const { getByTestId } = render(
      <ThemeProvider colorOverrides={colorOverrides} spacingOverrides={spacingOverrides}>
        <TestComponent />
      </ThemeProvider>
    );
    const value = JSON.parse(getByTestId('theme').textContent!);
    expect(value.colors.neutralDark).toBe('#abcdef');
    expect(value.spacing.lg).toBe(99);
  });
});
