import React from 'react';
import {
  Button as FluentButton,
  ButtonProps as FluentButtonProps,
  Spinner,
} from '@fluentui/react-components';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import {
  defaultColorTokens,
  defaultSpacingTokens,
  fontTokens,
  bannerColorPresets,
  BannerColorPresetKey,
} from '@functions/dcw-react-theme';

export interface ButtonProps extends Omit<FluentButtonProps, 'appearance' | 'size'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'circular' | 'square';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  colorPreset?: BannerColorPresetKey;
  children?: React.ReactNode;
}

const useStyles = makeStyles({
  base: {
    fontFamily: fontTokens.fontFamily.base,
    fontWeight: fontTokens.fontWeight.semibold,
    lineHeight: fontTokens.lineHeight.normal,
  },

  sizeSm: {
    fontSize: fontTokens.fontSize.sm,
    ...shorthands.padding(`${defaultSpacingTokens.xs}px`, `${defaultSpacingTokens.sm}px`),
  },
  sizeMd: {
    fontSize: fontTokens.fontSize.md,
    ...shorthands.padding(`${defaultSpacingTokens.sm}px`, `${defaultSpacingTokens.md}px`),
  },
  sizeLg: {
    fontSize: fontTokens.fontSize.lg,
    ...shorthands.padding(`${defaultSpacingTokens.md}px`, `${defaultSpacingTokens.lg}px`),
  },

  shapeSquare: { borderRadius: '0px' },
  shapeRounded: { borderRadius: '6px' },
  shapeCircular: { borderRadius: '100px' },

  fullWidth: { width: '100%' },

  variantPrimary: {
    backgroundColor: defaultColorTokens.brandPrimary,
    color: defaultColorTokens.neutralLight,
    border: 'none',
  },

  variantSecondary: {
    backgroundColor: 'transparent',
    color: defaultColorTokens.brandPrimary,
    border: `1px solid ${defaultColorTokens.brandPrimary}`,
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'before',
  colorPreset,
  children,
  className,
  ...rest
}) => {
  const styles = useStyles();

  const fluentSize =
    size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'medium';

  const sizeClass = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
  }[size];

  const shapeClass = {
    square: styles.shapeSquare,
    rounded: styles.shapeRounded,
    circular: styles.shapeCircular,
  }[shape];

  const variantClass =
    variant === 'primary' ? styles.variantPrimary : styles.variantSecondary;

  // Override using preset if provided
  const presetStyles = colorPreset
    ? {
        backgroundColor: bannerColorPresets[colorPreset].background,
        color: bannerColorPresets[colorPreset].text,
        border: `1px solid ${bannerColorPresets[colorPreset].text}`,
      }
    : undefined;

  const content = loading ? <Spinner size="tiny" /> : <span>{children}</span>;

  return (
    <FluentButton
      size={fluentSize}
      shape={shape as FluentButtonProps['shape']}
      icon={icon ? { children: icon } : undefined}
      iconPosition={iconPosition}
      className={mergeClasses(
        styles.base,
        sizeClass,
        shapeClass,
        variantClass,
        fullWidth && styles.fullWidth,
        className
      )}
      style={presetStyles}
      {...rest}
    >
      {content}
    </FluentButton>
  );
};
