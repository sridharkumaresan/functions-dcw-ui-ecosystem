import React from 'react';
import { HeroBannerProps } from './../HeroBanner.types';
import { useHeroBannerStyles } from './../HeroBanner.styles';
import { useTypographyStyles } from '@functions/dcw-react-typography';
import { Button } from '@functions/dcw-react-atoms';

export const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  variant = 'split',
  overlayColor = 'rgba(0,0,0,0.4)',
}) => {
  const classes = useHeroBannerStyles();

  const titleClass = useTypographyStyles('title');
  const bodyClass  = useTypographyStyles('body1');

  const rootStyle: React.CSSProperties = {
    justifyContent: variant === 'center' ? 'center' : 'flex-start',
    textAlign:      variant === 'center' ? 'center' : 'left',
    backgroundImage: `url(${imageUrl})`,
  };

  const overlayStyle: React.CSSProperties = {
    backgroundColor: overlayColor,
  };

  const actionsStyle: React.CSSProperties = {
    justifyContent: variant === 'center' ? 'center' : 'flex-start',
  };

  return (
    <section className={classes.root} style={rootStyle}>
      <div className={classes.overlay} style={overlayStyle} />
      <div className={classes.content}>
        <h1 className={titleClass}>{title}</h1>
        {subtitle && (
          <p className={`${bodyClass} ${classes.subtitle}`}>{subtitle}</p>
        )}
        {(primaryAction || secondaryAction) && (
          <div className={classes.actions} style={actionsStyle}>
            {primaryAction && (
              <Button
                variant="primary"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="secondary"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

HeroBanner.displayName = 'HeroBanner';
