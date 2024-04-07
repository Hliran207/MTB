/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import SelectedReviews from './SelectedReviews';

test('should render selected reviews', () => {
  const mockReviews = [
    { _id: 1, review: 'Review 1' },
    { _id: 2, review: 'Review 2' },
  ];

  render(<SelectedReviews reviews={mockReviews} />);

  const reviewElements = screen.getAllByText(/Review \d/);
  expect(reviewElements.length).toBe(2);
});
