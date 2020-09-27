import React from 'react';
import { render } from '@testing-library/react';
import TopBar from './topBar.component';

describe('topBar.component.js', () => {
  it('should render correctly text if prop text isnt derived', () => {
    const { getByTestId } = render(<TopBar />);
    const result = getByTestId('topBarContainer');
    const expectedResult = 'Domyślny nagłówek';

    expect(result).toHaveTextContent(expectedResult);
  });

  it('should render correctly text if prop text is derived', () => {
    const { getByTestId } = render(<TopBar text="Example text" />);
    const result = getByTestId('topBarContainer');
    const expectedResult = 'Example text';

    expect(result).toHaveTextContent(expectedResult);
  });

  it('should have correct class css', () => {
    const { getByTestId } = render(<TopBar text="Example text" />);
    const result = getByTestId('topBarContainer');
    const expectedResult = 'topBar';

    expect(result).toHaveClass(expectedResult);
  });
});