import React, { forwardRef } from 'react';
import { Input, InputProps } from '@fluentui/react-components';
import { makeStyles, shorthands } from '@griffel/react';
import { useTheme, SpacingTokens } from '@functions/dcw-react-theme';
import { useTypographyStyles } from '@functions/dcw-react-typography';

export interface TextInputProps extends InputProps {
  label?: string;
  marginBottomKey?: keyof SpacingTokens;
  className?: string;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 'var(--spacing-xs)',
  },
  input: {
    ...shorthands.padding('var(--spacing-xs)', 'var(--spacing-sm)'),
    borderRadius: '4px',
    border: '1px solid var(--color-neutralDark)',
    transition: 'border-color 150ms',
    ':focus': {
      ...shorthands.borderColor('var(--color-brandPrimary)'),
      outline: 'none',
    },
  },
});

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, marginBottomKey, className, ...rest }, ref) => {
    const styles = useStyles();
    const { spacing } = useTheme();
    const labelClass = useTypographyStyles('body1');

    const containerStyle: React.CSSProperties = marginBottomKey
      ? { marginBottom: `${spacing[marginBottomKey as keyof SpacingTokens]}px` }
      : {};

    return (
      <div className={styles.container} style={containerStyle}>
        {label && (
          <label className={`${labelClass} ${styles.label}`}>{label}</label>
        )}
        <Input
          {...rest}
          ref={ref}
          className={`${styles.input}${className ? ` ${className}` : ''}`}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
