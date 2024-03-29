/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you'll send the review data to your server
      await axios.post('http://localhost:8000/api/reviews', { review }); // Use full URL
      setSubmitted(true);
      setReview('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {submitted ? (
        <div>הביקורת התקבלה בהצלחה! תודה רבה.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="הכנס את הביקורת שלך כאן..."
          />
          <button type="submit">שלח ביקורת</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;