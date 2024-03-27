import React from 'react';

const SelectedReviews = ({ reviews }) => {
  return (
    <div>
      <h2>ביקורות נבחרות :</h2>
      {reviews.map((review) => (
        <p key={review._id}>{review.review}</p>
      ))}
    </div>
  );
};

export default SelectedReviews;
