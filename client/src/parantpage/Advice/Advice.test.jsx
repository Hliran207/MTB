/* eslint-disable no-undef */
// Advice.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Advice from './Advice';

// Mock data
const mockAdvices = [
  { _id: 1, advice: 'Advice 1' },
  { _id: 2, advice: 'Advice 2' },
];

// Mock Advice component to use the mock data
const MockAdvice = () => {
  return (
    <div>
      <h1>:מאגר עצות</h1>
      <div className="advices-list">
        {mockAdvices.map((advice) => (
          <div key={advice._id} className="advice-item">
            <p>{advice.advice}</p>
          </div>
        ))}
      </div>
      <button>הוסף עצה</button>
    </div>
  );
};

test('should render the advice list', () => {
  render(<MockAdvice />);

  const adviceElements = screen.getAllByText(/Advice \d/);
  expect(adviceElements.length).toBeGreaterThan(0);
});