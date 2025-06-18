import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Add24Filled } from '@fluentui/react-icons';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<Button icon={<Add24Filled />}>Add</Button>);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('handles loading state', () => {
    render(<Button loading>Loading...</Button>);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  it('applies colorPreset styles', () => {
    render(<Button colorPreset="mint">Mint</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveStyle({ backgroundColor: '#CDF5E8' });
    expect(btn).toHaveStyle({ color: '#001276' });
  });

  it('merges className', () => {
    render(<Button className="custom-class">Test</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/custom-class/);
  });
});
