import React from 'react';
import type { JSX } from 'react';
import { useTypographyStyles } from '../hooks/useTypographyStyles';
import { Preset } from '../presets/presetMap';

export interface FluidTextProps {
  preset: Preset;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const FluidText = ({
  preset,
  as: Component = 'p',
  style,
  children,
  ...rest
}: FluidTextProps) => {
  const textStyles = useTypographyStyles(preset);
  return (
    <Component style={{ ...textStyles, ...style }} {...rest}>
      {children}
    </Component>
  );
};
