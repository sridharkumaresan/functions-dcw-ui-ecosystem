import React from 'react';
import { FluidText, TypographyProvider } from '@functions-dcw-ui-ecosystem/dcw-react-typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FluidText> = {
  title: 'Typography/FluidText',
  component: FluidText,
  decorators: [Story => (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <Story />
    </div>
  )],
  argTypes: {
    preset: {
      control: { type: 'select', options: ['body1', 'body2', 'title', 'caption'] }
    },
    as: { control: 'text' },
    children: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof FluidText>;

export const Body1: Story = {
  args: { preset: 'body1', children: 'This is body1 text' }
};

export const Title: Story = {
  args: { preset: 'title', as: 'h1', children: 'This is a title' }
};