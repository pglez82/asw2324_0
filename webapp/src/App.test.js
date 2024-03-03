import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to the 2024 edition of the Software Architecture course/i);
  expect(welcomeMessage).toBeInTheDocument();
});


