import React from 'react';
import {
  Button as FluentButton,
  ButtonProps as FluentButtonProps,
} from '@fluentui/react-components';

export interface ButtonProps extends Omit<FluentButtonProps, 'appearance'> {
  /** 'primary' → solid; 'secondary' → outline */
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...rest
}) => {
  const appearance = variant === 'primary' ? 'primary' : 'outline';
  return (
    <FluentButton appearance={appearance} className={className} {...rest}>
      {children}
    </FluentButton>
  );
};
