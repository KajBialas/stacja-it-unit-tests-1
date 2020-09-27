import React from 'react';
import { render } from '@testing-library/react';
import TopBar from './topBar.component';

describe('topBar.component.js', () => {
  it('should render correctly text', () => {
    const { getByTestId } = render(<TopBar text="Example text" />);
    const result = getByTestId('topBarContainer');

    expect(result).toHaveTextContent("Example text");
  });

  it('should have correct class css', () => {
    const { getByTestId } = render(<TopBar text="Example text" />);
    const result = getByTestId('topBarContainer');

    expect(result).toHaveClass('topBar');
  });
});