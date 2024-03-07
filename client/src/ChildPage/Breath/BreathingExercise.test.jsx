/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import BreathingExercise from './BreathingExercise';
import { screen } from '@testing-library/react';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { waitFor } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

//test1-manual
// eslint-disable-next-line no-undef
describe('BreathingExercise', () => {
  // eslint-disable-next-line no-undef
  it('should display the initial state of the exercise', () => {
    render(<BreathingExercise />);

    const startButton = screen.getByText('התחלה');
    // eslint-disable-next-line no-undef
    expect(startButton).toBeInTheDocument();
  });
});
//test2-ai
// eslint-disable-next-line no-undef
it('should start the timer when the start button is clicked', async () => {
  render(<BreathingExercise />);

  const startButton = screen.getByText('התחלה');
  fireEvent.click(startButton);

  const timeText = await screen.findByText('5');
  expect(timeText).toBeInTheDocument();
});

//test3-ai

 //test6-ai
it('should display the start button and start the exercise when clicked', async () => {
  render(<BreathingExercise />);

  const startButton = screen.getByText('התחלה');
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);

  const inhaleText = await screen.findByText('שואף');
  expect(inhaleText).toBeInTheDocument();
});

//test4-ai
it('should display the title of the breathing exercise', () => {
  render(<BreathingExercise />);

  const title = screen.getByText('נשימות מרגיעות');
  expect(title).toBeInTheDocument();
});