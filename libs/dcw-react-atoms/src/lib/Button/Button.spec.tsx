import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('<Button>', () => {
  it('renders children and applies primary appearance by default', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toHaveClass('fui-Button'); 
  });

  it('renders secondary appearance when variant="secondary"', () => {
    render(<Button variant="secondary">More</Button>);
    const btn = screen.getByRole('button', { name: /more/i });
    expect(btn).toHaveAttribute('appearance', 'outline');
  }); 
});
