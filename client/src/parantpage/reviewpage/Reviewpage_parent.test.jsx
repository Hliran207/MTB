/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import ReviewPage from './ReviewPage';

test('הכותרת "הוספת ביקורת לאתר" מופיעה', () => {
  // יצירת מוקט עבור עמוד הביקורת
  const { getByText } = render(<ReviewPage />);

  // אימות שהכותרת מופיעה בדף
  const pageTitle = getByText('הוספת ביקורת לאתר');
  expect(pageTitle).toBeTruthy();
});
