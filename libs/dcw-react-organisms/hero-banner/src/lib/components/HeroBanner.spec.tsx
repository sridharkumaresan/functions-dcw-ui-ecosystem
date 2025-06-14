// libs/dcw-react-organisms/hero-banner/src/lib/HeroBanner.spec.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroBanner } from '../HeroBanner';

describe('<HeroBanner>', () => {
  const onPrimary = jest.fn();
  const props = {
    imageUrl: 'https://picsum.photos/800/400',
    title: 'Welcome Aboard',
    subtitle: 'Your gateway to great content',
    primaryAction: { label: 'Start', onClick: onPrimary },
    variant: 'center' as const,
    overlayColor: 'rgba(0,0,0,0.6)',
  };

  it('renders title, subtitle, and primary button', () => {
    render(<HeroBanner {...props} />);
    expect(screen.getByText('Welcome Aboard')).toBeInTheDocument();
    expect(screen.getByText('Your gateway to great content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });

  it('calls primaryAction.onClick when primary button is clicked', () => {
    render(<HeroBanner {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /start/i }));
    expect(onPrimary).toHaveBeenCalled();
  });

  it('applies the correct variant styles', () => {
    const { container } = render(<HeroBanner {...props} variant="split" />);
    // for split, justifyContent should be flex-start
    const root = container.firstChild as HTMLElement;
    expect(getComputedStyle(root).justifyContent).toBe('flex-start');
  });
});
