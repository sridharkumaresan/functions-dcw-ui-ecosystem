import React from 'react';
import {
  FluidText, TypographyProvider
} from '@functions/dcw-react-typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FluidText> = {
  title: 'Typography/FluidText',
  component: FluidText,
  decorators: [
    (Story) => (
      <TypographyProvider>
        <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
          <Story />
        </div>
      </TypographyProvider>
    )
  ],
  argTypes: {
    preset: {
      control: { type: 'select' },
      options: ['display', 'title', 'title1', 'title2', 'title3', 'body1', 'body2', 'caption']
    },
    as: {
      control: { type: 'text' },
      description: 'HTML tag to render (e.g., h1, p, span)'
    },
    children: {
      control: { type: 'text' },
      description: 'Text content'
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FluidText applies design token-based responsive typography via the TypographyProvider context.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof FluidText>;

export const Body2: Story = {
  args: {
    preset: 'body2',
    children: 'This is body2'
  }
};

export const Body1: Story = {
  args: {
    preset: 'body1',
    as: 'p',
    children: 'This is body1 text'
  }
};

export const Caption: Story = {
  args: {
    preset: 'caption',
    as: 'span',
    children: 'This is a caption'
  }
};

export const AllPresets: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 800 }}>
      <FluidText preset="body1">Body1 – Regular content paragraph text.</FluidText>
      <FluidText preset="body2">Body2 – Secondary content text.</FluidText>
      <FluidText preset="caption">Caption – Label or annotation</FluidText>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Displays all typography presets available via FluidText for visual comparison.'
      }
    }
  }
};
