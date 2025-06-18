import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TypographyProvider } from './TypographyProvider';
import { FluidText } from '../components/FluidText';

const meta: Meta = {
  title: 'Typography/TypographyProvider',
  component: TypographyProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'TypographyProvider provides context-based typography tokens. It supports optional overrides for fluid/static token sets which are then consumed by components like <FluidText>.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const DefaultContext: Story = {
  name: 'Default Configuration',
  render: () => (
    <TypographyProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 800 }}>
        <FluidText preset="title">Default Title</FluidText>
        <FluidText preset="body1">This is body text using default token values.</FluidText>
        <FluidText preset="caption">Caption text</FluidText>
      </div>
    </TypographyProvider>
  ),
};

export const CustomOverrides: Story = {
  name: 'With Custom Overrides',
  render: () => (
    <TypographyProvider
      overrides={{
        fluid: {
          title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'darkblue',
          },
          body1: {
            fontSize: '1.2rem',
            lineHeight: '1.75',
            color: 'teal',
          },
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 800 }}>
        <FluidText preset="title">Overridden Title</FluidText>
        <FluidText preset="body1">
          This body text uses overridden values from the provider context.
        </FluidText>
        <FluidText preset="caption">Caption remains unchanged.</FluidText>
      </div>
    </TypographyProvider>
  ),
};
