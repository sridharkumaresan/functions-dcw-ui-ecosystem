import type { Meta, StoryObj } from '@storybook/react';
import { FunctionsDcwReactAtoms } from './dcw-react-atoms';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FunctionsDcwReactAtoms> = {
  component: FunctionsDcwReactAtoms,
  title: 'FunctionsDcwReactAtoms',
};
export default meta;
type Story = StoryObj<typeof FunctionsDcwReactAtoms>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Welcome to FunctionsDcwReactAtoms!/gi)
    ).toBeTruthy();
  },
};
