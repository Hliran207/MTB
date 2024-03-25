<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';
=======
>>>>>>> reviewparent

const ReviewTab = () => {
  const handleReviewClick = () => {
    window.location.replace('/review');
  };

  return (
<<<<<<< HEAD
    <div className="tab-container-item" onClick={handleReviewClick}>
=======
    <div className="tab-container-item " onClick={handleReviewClick}>
>>>>>>> reviewparent
      הוספת ביקורת לאתר
    </div>
  );
};

export default ReviewTab;