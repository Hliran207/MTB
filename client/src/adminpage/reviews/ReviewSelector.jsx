import React, { useState } from 'react';

const ReviewSelector = ({ reviews, onSelect }) => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  const handleSelect = (review) => {
    if (selectedReviews.includes(review)) {
      setSelectedReviews(selectedReviews.filter(r => r !== review));
    } else {
      setSelectedReviews([...selectedReviews, review]);
    }
  };

  const handleSubmit = () => {
    onSelect(selectedReviews);
  };

  return (
    <div>
      <h2>בחר ביקורות להצגה בדף הבית</h2>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <input
              type="checkbox"
              checked={selectedReviews.includes(review)}
              onChange={() => handleSelect(review)}
            />
            {review.review}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>הצג ביקורות נבחרות</button>
    </div>
  );
};

export default ReviewSelector;
