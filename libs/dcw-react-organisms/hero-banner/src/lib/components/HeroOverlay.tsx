import React from 'react';
import { useHeroBannerStyles } from '../HeroBanner.styles';
import type { StyleProps } from '../HeroBanner.styles';

interface Props extends StyleProps {}

export const HeroOverlay: React.FC<Props> = props => {
  const classes = useHeroBannerStyles(props);
  return <div className={classes.overlay} />;
};
