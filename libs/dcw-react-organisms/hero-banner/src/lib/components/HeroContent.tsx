import React from 'react';
import { useTypographyStyles } from '@functions/dcw-react-typography';
import { HeroBannerAction, HeroBannerVariant } from '../HeroBanner.types';
import { HeroActions } from './HeroActions';
import { useHeroBannerStyles } from '../HeroBanner.styles';

interface Props {
  variant: HeroBannerVariant;
  title: string;
  subtitle?: string;
  primaryAction?: HeroBannerAction;
  secondaryAction?: HeroBannerAction;
}

export const HeroContent: React.FC<Props> = ({
  variant,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}) => {
  const classes = useHeroBannerStyles({
    variant,
    imageUrl: '',
    overlayColor: '',
  });
  const h1 = useTypographyStyles('Heading1');
  const body = useTypographyStyles('Body1');

  return (
    <div className={classes.content}>
      <h1 className={h1}>{title}</h1>
      {subtitle && (
        <p className={`${body} ${classes.subtitle}`}>{subtitle}</p>
      )}
      <HeroActions
        variant={variant}
        primary={primaryAction}
        secondary={secondaryAction}
      />
    </div>
  );
};
