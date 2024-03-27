import React from 'react';

const SelectedReviews = ({ reviews }) => {
  return (
    <div className="selected-reviews-container">
      <h3>ביקורות נבחרות :</h3>
      {reviews.map((review) => (
        <div className="selected-review-box" key={review._id}>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectedReviews;

