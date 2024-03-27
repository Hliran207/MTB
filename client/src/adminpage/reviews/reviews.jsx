import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from "../Navbaradmin";
import SelectedReviews from './SelectedReviews';
import ReviewSelector from './ReviewSelector';

const ReviewsAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, []);

  const handleSaveSelection = async (selectedReviews) => {
    console.log('Selected reviews:', selectedReviews);
    setSelectedReviews(selectedReviews);
    
    try {
      // עדכן את הביקורות הנבחרות במסד הנתונים
      await axios.post('/api/reviews/setSelected', selectedReviews);
    } catch (error) {
      console.error('Error updating selected reviews:', error);
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="reviews">
        <h1>ביקורות</h1>
        <ReviewSelector reviews={reviews} onSelect={handleSaveSelection} />
        <SelectedReviews reviews={selectedReviews} />
      </div>
    </div>
  );
};

export default ReviewsAdmin;