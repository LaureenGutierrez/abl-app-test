import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial dropdown', () => {
  render(<App />);
  const selectElement = screen.getByText(/Select a Student/i);
  expect(selectElement).toBeInTheDocument();
});
