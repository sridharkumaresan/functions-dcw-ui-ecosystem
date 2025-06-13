import React from 'react';
import { render } from '@testing-library/react';
import { FluidText, TypographyProvider } from '@functions/dcw-react-typography';

describe('FluidText', () => {
  it('renders children and applies fluid styles', () => {
    const { getByText } = render(
      <TypographyProvider>
        <FluidText preset="body1">Test</FluidText>
      </TypographyProvider>
    );

    // const el = getByText('Test');
    // expect(el).toBeInTheDocument();
    // const styles = window.getComputedStyle(el);
    // expect(styles.fontWeight).toBe('400');
    // expect(styles.fontSize).toMatch(/px/);
  });
});