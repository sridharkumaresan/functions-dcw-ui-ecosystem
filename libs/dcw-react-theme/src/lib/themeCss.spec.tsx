import React from 'react';
import { render } from '@testing-library/react';
import { useThemeStaticStyles } from './themeCss';

const Dummy: React.FC = () => {
  const className = useThemeStaticStyles();
  return <div data-testid="root" className={className} />;
};

describe('useThemeStaticStyles()', () => {
  it('always returns a string (possibly empty) for className', () => {
    const { getByTestId } = render(<Dummy />);
    const root = getByTestId('root');
    // className property should exist and be a string
    expect(typeof root.className).toBe('string');
  });
});