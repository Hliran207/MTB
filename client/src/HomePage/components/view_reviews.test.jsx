/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './hero';


test('ביקורות נבחרות מוצגות על הדף הבית', () => {

  const selectedReviews = [
    { _id: 1, review: 'ביקורת ראשונה' },
  ];

  // יצירת מוקט הדף הבית עם הביקורות הנבחרות
  const { getByText } = render(<HomePage selectedReviews={selectedReviews} />);

  // אימות שהטקסט של "ביקורות נבחרות :" נמצא בדף
  const selectedReviewsText = getByText('ביקורות נבחרות :');
  expect(selectedReviewsText).toBeTruthy('ביקורות נבחרות');


  });
