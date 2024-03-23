/* eslint-disable no-unused-vars */
import React from 'react';

const ReviewTab = () => {
  const handleReviewClick = () => {
    window.location.replace('/review');
  };

  return (
    <div className="tab-container-item" onClick={handleReviewClick}>
      הוספת ביקורת לאתר
    </div>
  );
};

export default ReviewTab;