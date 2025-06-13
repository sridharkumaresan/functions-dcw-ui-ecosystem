import { render } from '@testing-library/react';

import FunctionsDcwReactTypography from './dcw-react-typography';

describe('FunctionsDcwReactTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FunctionsDcwReactTypography />);
    expect(baseElement).toBeTruthy();
  });
});
