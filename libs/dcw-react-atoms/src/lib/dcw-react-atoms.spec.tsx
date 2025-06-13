import { render } from '@testing-library/react';

import FunctionsDcwReactAtoms from './dcw-react-atoms';

describe('FunctionsDcwReactAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FunctionsDcwReactAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
