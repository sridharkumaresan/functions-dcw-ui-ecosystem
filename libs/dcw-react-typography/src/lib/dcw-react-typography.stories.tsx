import type { Meta, StoryObj } from '@storybook/react';
import { FunctionsDcwReactTypography } from './dcw-react-typography';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FunctionsDcwReactTypography> = {
  component: FunctionsDcwReactTypography,
  title: 'FunctionsDcwReactTypography',
};
export default meta;
type Story = StoryObj<typeof FunctionsDcwReactTypography>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Welcome to FunctionsDcwReactTypography!/gi)
    ).toBeTruthy();
  },
};
