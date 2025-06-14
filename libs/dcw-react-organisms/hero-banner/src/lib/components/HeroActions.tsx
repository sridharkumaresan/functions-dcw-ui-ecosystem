// import React from 'react';
// import { Button } from '@functions/dcw-react-atoms';
// import { useHeroBannerStyles } from '../HeroBanner.styles';
// import type { HeroBannerVariant, HeroBannerAction } from '../HeroBanner.types';

// interface Props {
//   variant: HeroBannerVariant;
//   primary?: HeroBannerAction;
//   secondary?: HeroBannerAction;
// }

// export const HeroActions: React.FC<Props> = ({
//   variant,
//   primary,
//   secondary,
// }) => {
//   const classes = useHeroBannerStyles({
//     variant,
//     imageUrl: '',        
//     overlayColor: '',    
//   });

//   return (
//     <div className={classes.actions}>
//       {primary && (
//         <Button variant="primary" onClick={primary.onClick}>
//           {primary.label}
//         </Button>
//       )}
//       {secondary && (
//         <Button variant="secondary" onClick={secondary.onClick}>
//           {secondary.label}
//         </Button>
//       )}
//     </div>
//   );
// };
