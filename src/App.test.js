import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders watchlist page', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Watchlist/i);
  expect(headingElement).toBeInTheDocument();
});
