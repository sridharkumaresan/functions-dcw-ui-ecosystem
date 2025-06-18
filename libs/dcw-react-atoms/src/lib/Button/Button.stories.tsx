import React from 'react';
import { Button, ButtonProps } from './Button';
import { Meta, StoryObj } from '@storybook/react';
import { Add24Filled, Dismiss24Regular } from '@fluentui/react-icons';
import { BannerColorPresetKey } from '@functions/dcw-react-theme';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'radio',
      options: ['rounded', 'square', 'circular'],
    },
    colorPreset: {
      control: 'select',
      options: [
        undefined,
        'stone',
        'orange',
        'mint',
        'lightTeal',
        'brightMint',
        'lightBlue',
        'lightClaret',
        'brightClaret',
        'brightPurple',
      ] satisfies (BannerColorPresetKey | undefined)[],
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Add Item',
    icon: <Add24Filled />,
    iconPosition: 'before',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <Button variant="primary" size="md">Primary</Button>
      <Button variant="secondary" size="md">Secondary</Button>

      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      <Button shape="square">Square</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="circular" icon={<Add24Filled />} />

      <Button fullWidth>Full Width</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>

      <Button icon={<Add24Filled />} iconPosition="before">With Icon</Button>
      <Button icon={<Dismiss24Regular />} iconPosition="after">Remove</Button>

      <Button colorPreset="mint">Mint</Button>
      <Button colorPreset="stone">Stone</Button>
      <Button colorPreset="brightClaret">Claret</Button>
      <Button colorPreset="lightBlue">Light Blue</Button>
    </div>
  ),
};
