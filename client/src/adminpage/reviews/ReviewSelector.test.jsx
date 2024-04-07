/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewSelector from './ReviewSelector';

test('should render reviews and checkboxes', () => {
  const mockReviews = [
    { _id: 1, review: 'Review 1' },
    { _id: 2, review: 'Review 2' },
  ];
  const mockOnSelect = () => {};

  render(<ReviewSelector reviews={mockReviews} onSelect={mockOnSelect} />);

  const reviewElements = screen.getAllByText(/Review \d/);
  expect(reviewElements.length).toBe(2);

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes.length).toBe(2);
});



