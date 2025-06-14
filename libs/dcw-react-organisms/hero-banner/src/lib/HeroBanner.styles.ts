import { makeStyles, shorthands } from '@griffel/react';
import { mediaQueries } from '@functions/dcw-react-theme';

type Slots = 'root' | 'overlay' | 'content' | 'subtitle' | 'actions';

export const useHeroBannerStyles = makeStyles<Slots>({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: '60vh',
    color: 'var(--color-neutralLight)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...shorthands.padding('var(--spacing-lg)'),
    [mediaQueries.md]: {
      minHeight: '40vh',
      ...shorthands.padding('var(--spacing-md)'),
    },
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
  },

  subtitle: {
    marginTop: 'var(--spacing-sm)',
  },

  actions: {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    marginTop: 'var(--spacing-md)',
  },
});
