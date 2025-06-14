import { makeStyles, shorthands } from '@griffel/react';
import { mediaQueries } from '@functions/dcw-react-theme';

type Slots =
  | 'root'
  | 'overlay'
  | 'content'
  | 'imageWrapper'
  | 'image'
  | 'actions';

export const useStyles = makeStyles<Slots>({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    // static padding; CSS var resolves at runtime
    ...shorthands.padding('var(--spacing-lg)'),
    [mediaQueries.md]: {
      ...shorthands.padding('var(--spacing-md)'),
    },
  },
  overlay: {
    position: 'absolute',
    inset: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    flex: '1 1 auto',
    width: '100%',
    maxWidth: '640px',
    margin: '0 auto',
  },
  imageWrapper: {
    flex: '1 1 50%',
    width: '100%',
    height: '200px',
    position: 'relative',
    '@media (min-width: 768px)': {
      height: 'auto',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  actions: {
    display: 'flex',
    gap: 'var(--spacing-sm)',
    marginTop: 'var(--spacing-md)',
    justifyContent: 'center',
  },
});
