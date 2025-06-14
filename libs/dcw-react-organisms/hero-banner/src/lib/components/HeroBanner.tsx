import React from 'react';
import { useStyles } from './../HeroBanner.styles';
import { useTypographyStyles } from '@functions/dcw-react-typography';
import { bannerColorPresets } from '@functions/dcw-react-theme';
import type { HeroBannerProps } from './../HeroBanner.types';
import { Button } from '@functions/dcw-react-atoms';

const DEFAULT_PRESET = 'lightBlue' as const;

export const HeroBanner: React.FC<HeroBannerProps> = ({
  layout = 'default',
  size = 'minimal',
  background = { type: 'none' },
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  children,
}) => {
  const classes = useStyles();

  // Normalize any bad preset
  const bg =
    background.type === 'preset' && !(background.preset in bannerColorPresets)
      ? { type: 'preset' as const, preset: DEFAULT_PRESET }
      : background;

  const heightMap = {
    minimal: '35vh',
    compact: '30vh',
  } as const;
  const minHeight = heightMap[size];

  // Layout flags
  const isSplit = layout === 'split' || layout === 'split-reverse';
  const justify = isSplit ? 'flex-start' : 'center';
  const textAlign = justify;
    const flexDirection =
    layout === 'split'
      ? 'row'
      : layout === 'split-reverse'
        ? 'row-reverse'
        : 'column';

  // Inline style for root
  const rootStyle: React.CSSProperties = {
    minHeight,
    justifyContent: justify,
    textAlign,
    flexDirection,
  };

  // Background or preset
  if (bg.type === 'image') {
    Object.assign(rootStyle, {
      backgroundImage: `url(${bg.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });
  } else if (bg.type === 'preset') {
    const p = bannerColorPresets[bg.preset];
    Object.assign(rootStyle, {
      backgroundColor: p.background,
      color: p.text,
    });
  }

  // Overlay tint: dark for images, transparent for color/none
  const overlayColor = bg.type === 'image' ? 'rgba(0,0,0,0.4)' : 'transparent';

  // Typography
  const titleStyle = useTypographyStyles('title');
  const subtitleStyle = useTypographyStyles('body1');

  // Should we render the image panel?
  const showImage = isSplit && bg.type === 'image';

  return (
    <section className={classes.root} style={rootStyle}>
      <div
        className={classes.overlay}
        style={{ backgroundColor: overlayColor }}
      />

      {isSplit && bg.type === 'image' && (
        <div className={classes.imageWrapper}>
          <img src={bg.url} className={classes.image} alt="" />
        </div>
      )}

      <div className={classes.content}>
        <h1 style={titleStyle}>{title}</h1>
        {subtitle && (
          <p style={{ ...subtitleStyle, marginTop: 'var(--spacing-sm)' }}>
            {subtitle}
          </p>
        )}

        {children}

        <div className={classes.actions}>
          {primaryAction && (
            <Button variant="primary" onClick={primaryAction.onClick}>
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="secondary" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

HeroBanner.displayName = 'HeroBanner';
