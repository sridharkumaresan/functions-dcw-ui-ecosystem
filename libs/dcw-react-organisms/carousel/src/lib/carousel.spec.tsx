import { render } from '@testing-library/react';

import FunctionsDcwReactOrganismsCarousel from './carousel';

describe('FunctionsDcwReactOrganismsCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FunctionsDcwReactOrganismsCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
